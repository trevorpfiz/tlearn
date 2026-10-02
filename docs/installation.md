# Install tlearn

Install the complete plugin so its grouped skills, references, scripts, and
starter remain together. You need a local Codex or Claude Code host with plugin
support and access to a model. Creating a learning tool also needs browsing,
workspace file access, and a browser harness for delivery checks. Learners need
only a browser to use a generated HTML file.

Clone the repository into a location you want to keep:

```sh
git clone https://github.com/trevorpfiz/tlearn.git
cd tlearn
```

Run the following host commands from that checkout. These are local installation
commands; they change that host's plugin configuration. You can also replace `.`
with the quoted absolute path of your checkout.

## Codex

```sh
codex plugin marketplace add .
codex plugin add tlearn@tlearn
codex plugin list --json
```

Start a new session in the working project where you want to create your tool.
In the skill picker, select **`tlearn:upskill`**, then describe the learning
objective and output directory. You can also ask in ordinary language:

```text
Use tlearn's upskill workflow to help me interpret a volcano plot.
Save the learning tool in a new folder in this project.
```

The repository's `.agents/plugins/marketplace.json` makes the plugin discoverable;
installation enables the skills. The manifest explicitly registers all six
functional groups. Do not add a portable root `plugin.json` without revisiting
discovery: OpenAI's portable format and its compatibility overlay use different
component rules. [OpenAI packaging guidance](https://developers.openai.com/plugins/build/plugins).

## Claude Code

```sh
claude plugin marketplace add .
claude plugin install tlearn@tlearn
claude plugin list --json
```

Start a new session in your working project and invoke:

```text
/tlearn:upskill Help me interpret a volcano plot. Save the tool in a new folder.
```

For a session-only trial, skip installation and launch Claude from your working
project with the path to this checkout:

```sh
claude --plugin-dir /absolute/path/to/tlearn
```

The same `/tlearn:upskill` command applies. The repository's
`.claude-plugin/marketplace.json` supplies the install catalog, while the manifest
registers the grouped library. [Claude manifest reference](https://code.claude.com/docs/en/plugins-reference),
[marketplace guidance](https://code.claude.com/docs/en/plugin-marketplaces).

## Resources and updates

The workflow's deterministic helpers use **Python 3 and its standard library**;
there are no Python package dependencies. Python supports graph and lesson
checks, contrast calculations, and single-file packaging. It is an authoring
dependency, not a learner dependency. A browser harness such as Playwright must
be available to execute rendered checks; having the package installed does not
supply one. Keep unavailable checks explicitly pending.

Generated projects belong outside the installed plugin. Referenced resources
resolve relative to their loaded skill, which may live in a host's cache rather
than your checkout. Keep the whole plugin together when moving it.

After updating the checkout, refresh the installed plugin and start a new
session. An installed cache may still contain older files even after `git pull`.
Use the host's marketplace/plugin update facilities, or remove and reinstall the
plugin from the local marketplace. Claude's `--plugin-dir` trial reads the named
checkout directly in each new session. Keep both manifest versions aligned when
releasing changes.

## What was verified

On **October 2, 2026**, local probes used **Codex CLI 0.155.1** and **Claude Code
2.1.32**. Registration and installation used temporary isolated host
configurations, leaving existing global plugin installations unchanged.

- Both hosts discovered all **19 unique skills** through the six declared groups.
  Codex reported them enabled with plugin ownership and no discovery errors;
  Claude listed them once in its skills and slash-command catalog.
- Claude expanded `/tlearn:upskill` into its actual skill body with the correct
  base directory. Codex accepted a typed `tlearn:upskill` invocation with the
  discovered skill path, including in an ephemeral normal-authentication probe
  with session-local extra roots.
- Copied graph, artifact, contrast, and bundling helpers executed from a separate
  synthetic project. These checks establish resource resolution and packaging,
  not the scientific correctness of that fixture.

These are discovery, invocation routing, and resource checks. They do not prove
complete model generation in both hosts. The isolated Codex invocation had no
authentication; the normal-authentication Codex probe rejected its configured
default model for that account. Claude's normal-authentication probe reported
that its organization lacked Claude access, after successful skill expansion.
No credentials were copied or requested. The example's own content and browser
evidence belongs in its `verification.md`.

Continue with [the tlearn guide](tlearn-guide.md) for objectives, saved artifacts,
verification, and sharing.
