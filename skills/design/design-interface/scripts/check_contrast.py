#!/usr/bin/env python3
"""Check one opaque sRGB color pair using WCAG 2.2 luminance and contrast.

Definitions: https://www.w3.org/TR/WCAG22/#dfn-relative-luminance
and https://www.w3.org/TR/WCAG22/#dfn-contrast-ratio
Only #RGB and #RRGGBB are supported; gradients and transparency need
the actual composited colors. This is not full accessibility verification.
"""

import argparse
import math
import re


def parse_color(value: str) -> tuple[int, int, int]:
    """Return RGB bytes from an opaque, case-insensitive hex color."""
    if re.fullmatch(r"#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})", value) is None:
        raise ValueError("colors must be opaque #RGB or #RRGGBB hex values")
    digits = value[1:]
    if len(digits) == 3:
        digits = "".join(digit * 2 for digit in digits)
    return tuple(int(digits[offset : offset + 2], 16) for offset in (0, 2, 4))


def relative_luminance(color: str) -> float:
    """Compute WCAG relative luminance, retaining full float precision."""
    channels = []
    for channel in parse_color(color):
        srgb = channel / 255
        channels.append(
            srgb / 12.92 if srgb <= 0.04045 else ((srgb + 0.055) / 1.055) ** 2.4
        )
    red, green, blue = channels
    return 0.2126 * red + 0.7152 * green + 0.0722 * blue


def contrast_ratio(foreground: str, background: str) -> float:
    """Return the symmetric WCAG contrast ratio for two opaque colors."""
    lighter, darker = sorted(
        (relative_luminance(foreground), relative_luminance(background)), reverse=True
    )
    return (lighter + 0.05) / (darker + 0.05)


def minimum_ratio(value: str) -> float:
    """Validate a finite contrast threshold in WCAG's possible range."""
    try:
        minimum = float(value)
    except ValueError as error:
        raise argparse.ArgumentTypeError("minimum must be a number from 1 to 21") from error
    if not math.isfinite(minimum) or not 1 <= minimum <= 21:
        raise argparse.ArgumentTypeError("minimum must be finite and between 1 and 21")
    return minimum


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("foreground", metavar="FOREGROUND", help="opaque #RGB or #RRGGBB")
    parser.add_argument("background", metavar="BACKGROUND", help="opaque #RGB or #RRGGBB")
    parser.add_argument("--minimum", type=minimum_ratio, default=4.5, metavar="RATIO")
    args = parser.parse_args(argv)
    try:
        ratio = contrast_ratio(args.foreground, args.background)
    except ValueError as error:
        parser.error(str(error))
    passed = ratio >= args.minimum
    print(
        f"{'PASS' if passed else 'FAIL'}: contrast {ratio:.12g}:1; "
        f"minimum {args.minimum:.12g}:1 (unrounded comparison)"
    )
    print("opaque color pair only; not full accessibility verification")
    return 0 if passed else 1


if __name__ == "__main__":
    raise SystemExit(main())
