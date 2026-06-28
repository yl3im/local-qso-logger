# Local QSO Logger

## Read in your language

🇺🇸 English · 🇨🇿 [Čeština](README.cs.md) · 🇩🇰 [Dansk](README.da.md) · 🇩🇪 [Deutsch](README.de.md) · 🇪🇪 [Eesti](README.et.md) · 🇪🇸 [Español](README.es.md) · 🇫🇷 [Français](README.fr.md) · 🇮🇪 [Gaeilge](README.ga.md) · 🇭🇷 [Hrvatski](README.hr.md) · 🇮🇹 [Italiano](README.it.md) · 🇱🇻 [Latviešu](README.lv.md) · 🇱🇹 [Lietuvių](README.lt.md) · 🇭🇺 [Magyar](README.hu.md) · 🇳🇱 [Nederlands](README.nl.md) · 🇳🇴 [Norsk](README.no.md) · 🇵🇱 [Polski](README.pl.md) · 🇵🇹 [Português](README.pt.md) · 🇷🇴 [Română](README.ro.md) · 🇸🇰 [Slovenčina](README.sk.md) · 🇸🇮 [Slovenščina](README.sl.md) · 🇫🇮 [Suomi](README.fi.md) · 🇸🇪 [Svenska](README.sv.md) · 🇧🇾 [Беларуская](README.be.md) · 🇧🇬 [Български](README.bg.md) · 🇷🇺 [Русский](README.ru.md) · 🇷🇸 [Српски](README.sr.md) · 🇺🇦 [Українська](README.uk.md) · 🇬🇷 [Ελληνικά](README.el.md)

A privacy-respecting amateur-radio QSO logger that runs entirely in your browser. No account, no server, no tracking, no analytics — your logbooks live only in your browser's `localStorage` and never leave your device.

By [YL3IM](https://www.qrz.com/db/YL3IM). Project website: [qso.ham.lv](https://qso.ham.lv).

![Local QSO Logger running on iPad](media/iPad.png)

## Contents

- [Read in your language](#read-in-your-language)
- [Features](#features)
- [Getting started](#getting-started)
- [Install as a PWA on mobile](#install-as-a-pwa-on-mobile)
  - [iOS (Safari only)](#ios-safari-only)
  - [Android (Chrome / Edge / Firefox)](#android-chrome--edge--firefox)
- [Logbooks](#logbooks)
- [QSOs](#qsos)
- [ADIF import & export](#adif-import--export)
- [Privacy and data](#privacy-and-data)
- [Interface language](#interface-language)
- [Themes](#themes)
- [Tech notes](#tech-notes)
- [Credits](#credits)

## Features

- Multiple logbooks; each with its own list of QSOs.
- Logbook actions: create, rename, delete, import from ADIF, export to ADIF (`.adi`).
- QSO fields: callsign, UTC date, UTC time, band, mode, RST sent, RST rcvd.
- Edit and delete any QSO (with confirmation on delete).
- Sensible defaults: today's UTC date/time pre-filled, mode-aware RST defaults (59 for voice modes, 599 for CW/digital), sticky band & mode across consecutive QSOs.
- Live duplicate-callsign indicator (informational — duplicates are allowed).
- Country flag column derived from the callsign prefix (covers ≥99% of common amateur-radio prefixes, including portable calls like `9A/M0NCG`).
- Locale-aware date display in the QSO table; ISO storage and ADIF output stay unchanged.
- Interface available in **28 languages** (English plus 22 Latin-script, 5 Cyrillic-script, and Greek); flag-emoji-prefixed selector in the header.
- Day / night themes (day is default; the toggle lives in the header).
- Mobile-friendly responsive layout with touch-sized buttons.
- Works fully offline — no network requests at any point.
- Installable as a PWA (Add to Home Screen / Install app) when hosted over HTTPS.

## Getting started

Just open `index.html` in a modern browser. There's no build step, no install, no server.

If you want to host it, drop the static files (`index.html`, `style.css`, `app.js`, `favicon.svg`, `manifest.webmanifest`, `service-worker.js`, and the `i18n/` directory with the 28 translation files) onto any static host (GitHub Pages, Netlify, your own web server). It will work over `file://` as well — the service-worker registration is skipped automatically on the `file:` protocol so opening `index.html` directly from disk still works cleanly.

When served over HTTPS, the app becomes installable as a PWA (the browser's *Install app* / *Add to Home Screen* menu) and works offline after the first visit thanks to a cache-first service worker that precaches every static file (UI + all translations).

A default logbook is created automatically on first visit, so you can start logging immediately.

## Install as a PWA on mobile

When the app is served over HTTPS (e.g. GitHub Pages), you can install it to your phone's home screen so it runs full-screen with no browser chrome. After the first launch the service worker caches everything, so subsequent launches work fully offline.

### iOS (Safari only)

On iOS, only Safari can install PWAs — third-party browsers cannot.

1. Open the site in **Safari**.
2. Tap the **Share** button.
3. Choose **Add to Home Screen**, then **Add**.

Walkthrough:

![iOS install walkthrough](media/iOS_add_to_home_screen.gif)

Higher-quality source: [media/iOS_add_to_home_screen.mp4](media/iOS_add_to_home_screen.mp4).

### Android (Chrome / Edge / Firefox)

1. Open the site in your browser. An *Install app* prompt may appear automatically.
2. Otherwise, open the **⋮ menu** → **Install app** (or **Add to Home Screen** on older versions).

Walkthrough:

![Android install walkthrough](media/Android_add_to_home_screen.gif)

Higher-quality source: [media/Android_add_to_home_screen.mp4](media/Android_add_to_home_screen.mp4).

## Logbooks

- **Create:** type a name in *Log name* and submit. If you leave the name blank, it defaults to `Log YYYY-MM-DD HH:MM UTC`.
- **Switch:** click any logbook in the sidebar.
- **Rename:** click *Rename* in the logbook header. Press Enter to save, Escape to cancel.
- **Delete:** click *Delete log*. You'll be asked to confirm. If you delete the last logbook, a fresh one is created automatically.

## QSOs

- Fill in the form and press **Log QSO**.
- Callsign is auto-uppercased as you type.
- Date and time pre-fill to *now* in UTC and re-set after each logged QSO; you can still type any value.
- Band and mode persist across QSOs in the same session so you don't have to re-select for every contact.
- RST sent / RST rcvd, if left blank, default to **59** for voice modes (SSB/FM/AM/DIGITALVOICE) and **599** for CW and digital modes (CW/FT8/FT4/RTTY/PSK31/JT65).
- A *Duplicate in this log* chip appears under the callsign field if the call already exists in the current logbook. Duplicates are *not* blocked.
- **Edit a QSO** with the *Edit* button on the row. The form switches to *Update QSO* mode, the row is highlighted, and a *Cancel* button appears. Switching logbooks or deleting the log cancels the edit automatically.
- **Delete a QSO** with the *Delete* button on the row (asks for confirmation).

## ADIF import & export

- **Export**: click *Export .adi* in the logbook header. A file is downloaded with `ADIF_VER 3.1.4` and `PROGRAMID local-qso` in the header. Each record maps `CALL`, `QSO_DATE`, `TIME_ON`, `BAND`, `MODE`, `RST_SENT`, `RST_RCVD`.
- **Import**: click *Import .adi file* under the Create-logbook form and pick a `.adi` / `.adif` file. A new logbook is created from it, named `Imported YYYY-MM-DD HH:MM UTC`. Importing never merges into an existing logbook.
- Field-length count is treated as character count, which works for ASCII ADIF (all standard QSO fields). Multi-byte content in non-essential text fields may parse oddly.

## Privacy and data

- All data is stored in your browser's `localStorage` under the key `local-qso:v1`.
- Nothing is transmitted anywhere. There is no backend, no API call, no telemetry, no analytics.
- Clearing browser site data, using private/incognito mode, or using a different browser/device means a fresh empty logbook — use *Export .adi* to back up.

## Interface language

A language selector in the header covers **28 languages**. Pick one and the rest of the UI re-renders immediately; your choice is saved alongside your logs and respected on the next visit. English is the default.

Available languages (flag emoji + native name; ordered alphabetically within each script):

🇺🇸 English · 🇨🇿 Čeština · 🇩🇰 Dansk · 🇩🇪 Deutsch · 🇪🇪 Eesti · 🇪🇸 Español · 🇫🇷 Français · 🇮🇪 Gaeilge · 🇭🇷 Hrvatski · 🇮🇹 Italiano · 🇱🇻 Latviešu · 🇱🇹 Lietuvių · 🇭🇺 Magyar · 🇳🇱 Nederlands · 🇳🇴 Norsk · 🇵🇱 Polski · 🇵🇹 Português · 🇷🇴 Română · 🇸🇰 Slovenčina · 🇸🇮 Slovenščina · 🇫🇮 Suomi · 🇸🇪 Svenska · 🇧🇾 Беларуская · 🇧🇬 Български · 🇷🇺 Русский · 🇷🇸 Српски · 🇺🇦 Українська · 🇬🇷 Ελληνικά

Universal technical labels stay in their canonical form across all languages: band names (`20m`, `70cm`, …), ADIF mode codes (`SSB`, `FT8`, `CW`, …), `QSO`, `RST`, `UTC`, and ISO country codes.

Missing a string in your language? Each language is a single small file under [`i18n/`](i18n/) — copy `i18n/en.js`, translate the values, save as `i18n/<code>.js`, then add a `<script>` tag plus a `<select>` option in `index.html` and the code in `SUPPORTED_LANGS` in `app.js`.

## Themes

The theme toggle in the header switches between day (default) and night. The preference is saved alongside your logs and respected on the next visit. Native date/time pickers follow the theme via `color-scheme`.

## Tech notes

- Single-page app, vanilla HTML + CSS + JavaScript. No frameworks, no build step, no dependencies.
- Source files:
  - `index.html` — markup and meta tags.
  - `style.css` — themes and layout (day/night variables, mobile media queries).
  - `app.js` — state, persistence, rendering, ADIF parser/serializer, callsign-prefix → country lookup.
  - `favicon.svg` — inline SVG favicon.
  - `manifest.webmanifest` — Web App Manifest (name, theme color, scope, icon) so the app is installable as a PWA on mobile and desktop.
  - `service-worker.js` — cache-first service worker that precaches every static file on install, evicts old caches on activate, and keeps the app working fully offline after the first visit. Registration is skipped automatically on the `file://` protocol so opening `index.html` directly from disk stays clean.
  - `i18n/<lang>.js` — one translation file per supported language (28 total). Each is a tiny IIFE that assigns `window.I18N[<lang>]` a flat key→string map. `t()` and `applyLanguage()` in `app.js` handle lookups (with English fallback) and walk the DOM updating every `[data-i18n*]` element.
- Tested on recent Chromium, Firefox, and Safari (desktop + iOS).

## Credits

Built by [YL3IM](https://www.qrz.com/db/YL3IM).

Country flags rely on Unicode regional-indicator sequences. They render correctly on macOS, iOS, Linux (with a flag-capable emoji font), and Android. Windows does not include a system flag font, so flag emoji may appear as letter pairs there.
