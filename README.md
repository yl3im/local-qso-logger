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
- QSO form grouped into three blocks: **Station data** (station callsign, operator name, own grid) that stays sticky across QSOs; **Operation mode** (propagation mode, satellite, mode, sat mode, band, RX band) with satellite fields revealed only when propagation mode is *Satellite*; and **QSO data** (contacted callsign, contacted grid, UTC date/time when editing, comment, RST rcvd, RST sent).
- Full ADIF `MODE` → `SUBMODE` taxonomy in the mode dropdown — pick a parent mode (`SSB`, `MFSK`, …) or drill straight down to a specific submode (`USB`, `FT4`, …); the app stores both fields per ADIF, and the table shows the specific submode when there is one.
- Full ADIF propagation-mode enumeration (SAT, RPT, EME, ES, MS, Aurora, etc.) as a dropdown.
- Full AMSAT satellite catalog (~110 birds) and a two-tier **Sat mode** dropdown: preferred two-letter uplink/downlink codes at the top (LU, LV, SX, UU, UV, VA, VU, VV) and the legacy single-letter designations (A/B/J/K/L/R/S/T/U/V/W/X) grouped as *deprecated* below. Picking a sat mode auto-adjusts the uplink `BAND` and downlink `RX band`.
- Edit and delete any QSO (with confirmation on delete).
- Sensible defaults: today's UTC date/time pre-filled, mode-aware RST defaults (59 for voice modes, 599 for CW/digital), sticky Station data + band + mode + propagation mode across consecutive QSOs (only the per-contact fields — call, their grid, comment, RST — clear after each *Log QSO*).
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
- The form is organized in three blocks:
  - **Station data** — *Station callsign* (your transmit callsign, ADIF `STATION_CALLSIGN`), *Operator* (the individual operator's name, ADIF `OPERATOR`), and *My grid* (ADIF `MY_GRIDSQUARE`). These stay sticky across QSOs in the same session — set them once and they carry over.
  - **Operation mode** — *Prop. mode*, *Mode*, *Band*, plus the satellite-only *Satellite* / *Sat mode* / *RX band* when propagation mode is *Satellite*. Band, mode, and propagation mode are sticky like Station data.
  - **QSO data** — per-contact fields: *Callsign*, *Grid* (the other station's Maidenhead), *Comment* (ADIF `COMMENT`), *RST rcvd*, *RST sent*. When editing an existing QSO, *Date (UTC)* and *Time (UTC)* also appear in this block. These fields clear after each *Log QSO*.
- All callsigns (contacted, station, own) auto-uppercase as you type; both grid-square fields uppercase the same way. *Operator* is treated as a name (e.g. "John Doe") and is left as typed.
- Date and time pre-fill to *now* in UTC at submit; when editing, you can type any value.
- RST sent / RST rcvd, if left blank, default to **59** for voice modes (SSB/FM/DIGITALVOICE) and **599** for CW and digital modes (CW/FT8/FT4/RTTY/PSK31/JT65). The default follows the parent MODE, so picking a specific submode like *USB* or *FT4* still yields the right default.
- A *Duplicate in this log* chip appears under the callsign field if the call already exists in the current logbook. Duplicates are *not* blocked.
- **Propagation mode** — optional dropdown of ADIF propagation modes (SAT, RPT, EME, F2, Es, MS, LOS, etc.). Leave it empty for normal HF terrestrial QSOs.
- **Satellite QSOs** — selecting propagation mode *Satellite* reveals three satellite-only fields: **Satellite** (dropdown of ~110 AMSAT-registered birds), **Sat mode** (AMSAT letter designations, grouped as *modern* two-letter uplink/downlink codes at the top and *deprecated* single-letter codes below), and **RX band** (downlink band). Satellite, Sat mode, and RX band are required — the browser will refuse to submit without them. Picking a **Sat mode** automatically fills the main **Band** with the uplink band and **RX band** with the downlink band (e.g. mode J → 2m uplink, 70cm downlink). Switching *back* to satellite from another propagation mode resets Sat mode so you're prompted to pick a fresh one. Non-satellite QSOs never carry satellite-only fields at all; switching an existing QSO from satellite to another prop-mode strips them cleanly. **Grid** and **My grid** are general fields (also useful for VHF/UHF grid contests) and stay visible for every QSO.
- **Edit a QSO** with the *Edit* button on the row. The form switches to *Update QSO* mode, the row is highlighted, and a *Cancel* button appears. Switching logbooks or deleting the log cancels the edit automatically.
- **Delete a QSO** with the *Delete* button on the row (asks for confirmation).

## ADIF import & export

- **Export**: click *Export .adi* in the logbook header. A file is downloaded conforming to **ADIF 3.1.7**. The header declares `ADIF_VER 3.1.7`, `PROGRAMID local-qso`, `PROGRAMVERSION`, and `CREATED_TIMESTAMP` (UTC). Per-QSO fields emitted (when non-empty): `STATION_CALLSIGN`, `OPERATOR`, `MY_GRIDSQUARE`, `CALL`, `QSO_DATE`, `TIME_ON`, `BAND`, `MODE`, `SUBMODE`, `PROP_MODE`, `GRIDSQUARE`, `BAND_RX`, `SAT_MODE`, `SAT_NAME`, `RST_SENT`, `RST_RCVD`, `COMMENT` — followed by every extra ADIF field that was preserved on import (see below).
- **Import**: click *Import .adi file* under the Create-logbook form and pick a `.adi` / `.adif` file. A new logbook is created from it, named `Imported YYYY-MM-DD HH:MM UTC`. Importing never merges into an existing logbook.
- **Lossless round-trip**: on import, any ADIF field the app doesn't model in its UI (e.g. `NAME`, `FREQ`, `TX_PWR`, `DXCC`, `QSL_SENT`/`QSL_RCVD`, `POTA_REF`, `APP_*` fields) is preserved on the QSO and re-emitted verbatim on the next export. So exporting a file that was itself imported preserves everything.
- Field-length is treated as a UTF-8 byte count as the spec requires, so multi-byte text (e.g. accented callsigns in `COMMENT`) parses correctly.

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

Thanks to [A65BR](https://www.qrz.com/db/A65BR) Oleg for the invaluable cues that made the satellite QSO part actually usable — the modern two-letter Sat-mode designations, the AMSAT catalog, and the uplink/downlink auto-adjust all trace back to his feedback.

Country flags rely on Unicode regional-indicator sequences. They render correctly on macOS, iOS, Linux (with a flag-capable emoji font), and Android. Windows does not include a system flag font, so flag emoji may appear as letter pairs there.
