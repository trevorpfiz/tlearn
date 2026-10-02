# Sharing and hosting

Checked against current documentation on **2026-10-02**. Recheck platform guidance when actually publishing.

## One lesson, two delivery paths

Deliver `dist/index.html` as the self-contained learning tool. Send that file directly, or serve the same file from a static host. Keep explanations, interactions, styles, required data, and learner visuals inside it; visiting source links can still require internet access. Hosting alone does not require a framework or backend.

Keep the editable implementation and canonical learning artifacts outside `dist`. Only put files intended for public distribution in that directory. An optional `dist/share.png` supplies a social preview; it is not needed to use the downloaded lesson.

## Send the HTML file

Give the recipient the file and a short instruction: save it, then open it in a browser. Verify the actual file with the network unavailable, independently of the hosted version. Record browser, version, and exercised interactions in `verification.md`.

Limit compatibility claims to observed behavior. A responsive desktop viewport does not verify a phone's attachment-opening path; some recipients will encounter an attachment viewer before a browser. Check mobile delivery on a real device when it matters, or provide the hosted link as an alternative.

Browser progress does not travel with the HTML attachment. Storage belongs to the browser and origin, and `file:` storage behavior is undefined. Moving the file or switching to the hosted URL can produce a fresh session. Keep the tool usable when persistence fails; do not promise cross-device progress. [MDN: localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage).

## Serve it on Vercel

For an already generated `dist/index.html`:

1. Select **Other** as the Framework Preset.
2. Override the Build Command and leave it empty to skip building.
3. Set the Output Directory to **dist**. Alternatively, use `dist` as the project root and serve that root.
4. Verify the published learning view and task interactions at the resulting URL. If offering an HTML download, check that it provides the built file rather than a snapshot containing a learner's current responses.

These are deployment settings; a `vercel.json` file is optional. If a later project genuinely needs a build, configure its actual command and output directory instead. Vercel documents static HTML/CSS/JS hosting without a build and explicit output-directory selection. [Build configuration](https://vercel.com/docs/builds/configure-a-build), [configuration options](https://vercel.com/docs/project-configuration/vercel-json).

A project `.vercel.app` domain is sufficient; a custom domain is optional. Verify the chosen production URL without signing in. Deployment protection can restrict generated preview and deployment URLs even when the production domain is public. [Domains](https://vercel.com/docs/domains/working-with-domains), [Deployment Protection](https://vercel.com/docs/deployment-protection).

Prepare the package during the build workflow. Publish only when the user asks or existing authorization covers publishing; preparing a shareable artifact alone does not request deployment.

## Share on X

Share the public lesson URL in a post; an accompanying image can introduce the activity. X documents posting links. A local `file:` URL cannot give another person access to your file. [X: posting links](https://help.x.com/en/using-x/how-to-post-a-link).

When the public URL and preview image URL are known, optionally insert static metadata in the HTML `<head>`: `og:title`, `og:type=website`, `og:url`, `og:image`, `og:description`, and `og:image:alt`. Use real absolute HTTPS URLs, escape attribute values, and omit unknown URL fields rather than inventing a domain. Host the preview image publicly; Open Graph URL values use HTTP(S), not embedded data URLs. [Open Graph specification](https://ogp.me/).

Check the actual link presentation before claiming a rich preview works. As of the research date, former official X Cards pages redirect to the general developer overview, and the current index lacks Cards guidance. Do not promise that the lesson runs inside a post or depend on historical player-card behavior, exact preview dimensions, or a particular validator. [Current X documentation index](https://docs.x.com/llms.txt).
