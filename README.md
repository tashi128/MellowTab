# ⋆˚꩜｡ MellowTab

**A little help. A more accessible web.**

MellowTab is a portfolio website showcasing a Chrome extension that explores three ways to make everyday browsing more approachable: text simplification, AI-generated image descriptions, and experimental flashing-video detection.

The site combines a project case study with interactive previews, explaining both the experience and the engineering behind it.

> This repository contains the **showcase website**, not the installable Chrome extension. Its demos use prepared examples and do not call an AI service or modify other websites.

## Why MellowTab?

A dense paragraph, an image without a description, or an overwhelming video can introduce friction into everyday browsing. MellowTab explores how support built into the browser could help people engage with the same content in different ways.

The project brings together practical AI and native browser capabilities, with a focus on readable interfaces, user choice, and clear explanations of what the technology can do.

## The extension concept

| Feature | What it does |
| --- | --- |
| **Text simplification** | Simplifies selected text or article content with Gemini and presents it in an OpenDyslexic reader. The extension also includes browser text-to-speech and an `Alt + S` shortcut. |
| **AI image descriptions** | Finds supported images missing alt text, requests descriptions from Gemini, and adds the returned text to the page for assistive technology. |
| **Sensory Shield** | Analyzes video frames locally for possible flashing, pauses playback, and displays a warning. Detection is experimental and subject to browser and video-access limitations. |

Text and image AI features require a Gemini API key in the extension. Sensory Shield processes video frames on the device.

## Explore the website

- **Project introduction:** a browser illustration and a concise explanation of the idea.
- **Feature overview:** three cards describing reading support, visual context, and sensory awareness.
- **Interactive demos:** switch between feature previews, simplify a sample paragraph, reset it, and preview a video warning.
- **Project story:** the motivation behind the extension and the barriers it aims to address.
- **Engineering overview:** the extension’s architecture, toolkit, and proposed next steps.

The Sensory Shield demo is a static illustration: it contains no flashing media. The simplification and image-description examples are prepared content, not live AI output.

## Design and accessibility

The interface uses warm neutral colors, deep green accents, and the **⋆˚꩜｡** signature symbol. The layout adapts to desktop and smaller screens.

Implemented accessibility features include:

- Semantic page sections, headings, and navigation.
- A skip-to-content link and visible keyboard focus styles.
- A feature tab selector with arrow-key, Home, and End navigation.
- Accessible tab/panel relationships and selected states.
- A live region for the simplified-text result.
- Reduced-motion support for visitors who prefer it.
- A bundled OpenDyslexic font for the reading preview.

These implementation details are not a claim of audited WCAG conformance or proven accessibility outcomes. Testing with users and assistive technology remains part of the project’s next steps.

## Technology

**This website:** HTML, CSS, and vanilla JavaScript. It has no package dependencies, framework, database, or API-key requirement. Fonts and illustrations are served locally.

**The extension being showcased:** JavaScript, Chrome Manifest V3, a background service worker, content scripts, Gemini, HTML5 Canvas, the Web Speech API, and OpenDyslexic.

## Run locally

Clone the repository:

```sh
git clone https://github.com/tashi128/MellowTab.git
cd MellowTab
```

Open `index.html` directly in a browser, or start a local server with Python 3:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Then visit **http://127.0.0.1:8000**.

## Repository structure

```text
MellowTab/
├── index.html              # Page content and sharing metadata
├── site.css                # Responsive layout and visual styling
├── site.js                 # Feature tabs and interactive examples
├── assets/
│   ├── mark.svg            # MellowTab browser icon
│   ├── landscape.svg       # Image-description example
│   └── OpenDyslexic-Regular.otf
├── .do/
│   └── app.yaml            # DigitalOcean App Platform specification
├── DEPLOYMENT.md           # Hosting and custom-domain instructions
└── README.md
```

## Deploy to DigitalOcean

The included [App Platform specification](.do/app.yaml) configures a **Static Site** sourced from `tashi128/MellowTab`, branch `main`, with deployment on push enabled.

Its build command collects the public website files into `_static`:

```sh
mkdir -p _static && cp index.html site.css site.js _static/ && cp -R assets _static/assets
```

| Setting | Value |
| --- | --- |
| Source directory | `/` |
| Resource type | Static Site |
| Output directory | `_static` |
| Index document | `index.html` |
| Route | `/` |
| Environment variables | None |

Create the app in your own DigitalOcean account, connect the repository, and review the configuration and displayed price before deploying. See [DEPLOYMENT.md](DEPLOYMENT.md) for the full setup and [DigitalOcean’s guide](https://docs.digitalocean.com/products/app-platform/how-to/create-apps/) for the platform workflow.

### Custom domain

The intended address is **https://mellowtab.zartashia.com/**. This address is configured in the website’s canonical and Open Graph metadata; that alone does not make the domain live.

After the app is deployed:

1. In DigitalOcean, open **Networking → Domains → Add domain**.
2. Enter `mellowtab.zartashia.com` and choose **You manage your domain**.
3. Copy the exact CNAME target displayed by DigitalOcean.
4. In GoDaddy DNS for `zartashia.com`, add a **CNAME** record named `mellowtab`, pointing to that target.
5. Complete domain setup in DigitalOcean and wait for domain and HTTPS verification.

Keep the existing root-domain, email, and nameserver settings unchanged. Follow [DigitalOcean’s domain guide](https://docs.digitalocean.com/products/app-platform/how-to/manage-domains/) for current instructions.

## Validation and limitations

The website’s JavaScript syntax, local asset references, internal navigation targets, and isolated demo interactions have been checked. The static packaging command has also been verified. These checks are not a substitute for full browser and assistive-technology testing.

The showcased extension remains a prototype:

- AI simplification and image descriptions can be inaccurate and need evaluation.
- Video analysis depends on browser access to frames and cannot guarantee detection of every flash.
- Sensory Shield should not be treated as a guarantee of safe viewing.
- The website previews demonstrate the concept; they do not establish real-world extension performance.

## Next steps

- Test the extension with people who use different reading and accessibility tools.
- Evaluate whether simplification preserves the meaning of source material.
- Assess the usefulness and accuracy of generated image descriptions.
- Improve compatibility across websites and video sources.
- Add a recorded demonstration of the extension in use.

## Credits

Project showcase by **[Zartashia](https://github.com/tashi128)**.

The reading preview uses **[OpenDyslexic](https://opendyslexic.org/)**. The extension concept uses **[Google Gemini](https://ai.google.dev/)** and native browser APIs.
