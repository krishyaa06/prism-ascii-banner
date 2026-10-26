<!-- ═════════════ HEADER ═════════════ -->
<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:07060f,50:3EE69A,100:00D2FF&height=200&section=header&text=Prism%20ASCII%20Banner&fontSize=48&fontColor=ffffff&animation=fadeIn&fontAlignY=36&desc=ASCII%20%2F%20block-letter%20banner%20generator&descAlignY=58&descSize=16" width="100%" alt="Prism ASCII Banner" />
</p>

<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=600&size=19&duration=2600&pause=800&color=3EE69A&center=true&vCenter=true&width=680&lines=%E2%96%88%E2%96%80%E2%96%88+PRISM+%E2%96%88%E2%96%80%E2%96%88;Wrap+as+%2F%2F+comments;console.log%28%29+splash;Export+as+PNG" alt="Typing SVG" />
</p>

<p align="center">
  <a href="https://github.com/krishyaa06/prism-ascii-banner/actions/workflows/ci.yml"><img src="https://img.shields.io/github/actions/workflow/status/krishyaa06/prism-ascii-banner/ci.yml?branch=main&style=for-the-badge&label=CI&logo=githubactions&logoColor=white" alt="CI" /></a>
  <a href="https://krishyaa06.github.io/prism-ascii-banner/"><img src="https://img.shields.io/badge/Live_Demo-Open-3EE69A?style=for-the-badge&logo=githubpages&logoColor=black" alt="Live demo" /></a>
  <img src="https://img.shields.io/badge/Vanilla-HTML%20%7C%20CSS%20%7C%20JS-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="Vanilla JS" />
  <img src="https://img.shields.io/badge/dependencies-0-3EE69A?style=for-the-badge" alt="Zero dependencies" />
  <a href="LICENSE"><img src="https://img.shields.io/github/license/krishyaa06/prism-ascii-banner?style=for-the-badge&color=00D2FF" alt="License" /></a>
</p>

<p align="center">
  <img src="assets/screenshots/desktop.png" width="90%" alt="Prism ASCII Banner screenshot" />
</p>

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png" width="100%" />

## ⚡ Overview

**Prism ASCII Banner** turns text into big block letters for places that only accept plain text: CLI splash screens, file headers, Discord code blocks and README headers. Pick one of seven styles (block, shadow, shade, hash, dots, slim, star), adjust letter spacing, wrap the result in `//`, `#`, `/* */`, an HTML comment, a box, a Markdown code fence or a `console.log()` call, then copy it or save it as text or PNG.

## ✨ Features

- **Built-in 5-row bitmap font** — A–Z, 0–9 and common symbols, multi-line text
- **7 styles** including a drop-shadow mode
- **8 wrappers**: plain, box, `//`, `#`, `/* */`, HTML comment, Markdown fence, `console.log()` (escaped)
- **Letter spacing** control and live dimensions
- **Export** to clipboard, `.txt` or **PNG** (gradient / mono / terminal green)
- Warns about unsupported characters

## 📸 Screenshots

<table>
  <tr>
    <td width="68%"><img src="assets/screenshots/desktop.png" width="100%" alt="Prism ASCII Banner on desktop" /></td>
    <td width="32%"><img src="assets/screenshots/mobile.png" width="100%" alt="Prism ASCII Banner on mobile" /></td>
  </tr>
</table>

## 🚀 Quick Start

**Use it online:** [https://krishyaa06.github.io/prism-ascii-banner/](https://krishyaa06.github.io/prism-ascii-banner/)

**Run locally:**

```bash
git clone https://github.com/krishyaa06/prism-ascii-banner.git
cd prism-ascii-banner
# open index.html in your browser, or serve it:
npx serve .
```

## 🛠️ Usage

Type your text (use new lines for multi-line banners), choose a style and wrapper, then **Copy**, download **.txt** or **PNG**.

## 📁 Project Structure

```
prism-ascii-banner/
├── assets/
│   ├── logo.png
│   └── logo.svg
├── css/
│   ├── app.css
│   └── prism.css
├── js/
│   ├── app.js   # UI + PNG export
│   ├── core.js   # font, renderer, wrappers — tested in Node
│   └── prism.js
├── test/
│   └── core.test.js
├── .gitignore
├── LICENSE
├── index.html
└── package.json
```

## 🧪 Tests

```bash
npm test
```

Tests use the built-in `node:test` runner, so there is nothing to install. CI runs them on Node 20 and 22.

## 🤝 Contributing

1. Fork the repo and create a branch: `git checkout -b feature/my-idea`
2. Make your change and add a test in `test/`
3. Run `npm test` and open a Pull Request

## 🔷 Part of Prism Protocol

Prism ASCII Banner is one of the open-source tools built by [Prism Protocol](https://dc.gg/prismprotocol), a tech community where young builders learn, ship and compete together.

## 👤 Author

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/krishyaa06"><img src="https://github.com/krishyaa06.png" width="90" style="border-radius:50%" /><br><b>Soumya Bhandare</b></a><br>
      <sub>Founder @ Prism Protocol</sub>
    </td>
    <td>
      <a href="https://dc.gg/prismprotocol"><img src="https://img.shields.io/badge/Discord-Prism%20Protocol-5865F2?style=for-the-badge&logo=discord&logoColor=white" /></a><br>
      <a href="https://instagram.com/prism_protocol_"><img src="https://img.shields.io/badge/Instagram-@prism__protocol__-E4405F?style=for-the-badge&logo=instagram&logoColor=white" /></a><br>
      <a href="https://x.com/krishyaa06"><img src="https://img.shields.io/badge/X-@krishyaa06-000000?style=for-the-badge&logo=x&logoColor=white" /></a>
    </td>
  </tr>
</table>

## 📄 License

Released under the [MIT License](LICENSE).

<p align="center">
  <b>If you like this project, consider giving it a ⭐</b><br>
  <sub>"Build. Create. Compete." · Made with ⚡ by Prism Protocol</sub>
</p>

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:00D2FF,50:3EE69A,100:07060f&height=110&section=footer" width="100%" />
