# Local QSO Logger

## Read in your language

🇺🇸 English · 🇨🇿 [Čeština](README.cs.md) · 🇩🇰 [Dansk](README.da.md) · 🇩🇪 [Deutsch](README.de.md) · 🇪🇪 [Eesti](README.et.md) · 🇪🇸 [Español](README.es.md) · 🇫🇷 [Français](README.fr.md) · 🇮🇪 [Gaeilge](README.ga.md) · 🇭🇷 [Hrvatski](README.hr.md) · 🇮🇹 [Italiano](README.it.md) · 🇱🇻 [Latviešu](README.lv.md) · 🇱🇹 [Lietuvių](README.lt.md) · 🇭🇺 [Magyar](README.hu.md) · 🇳🇱 [Nederlands](README.nl.md) · 🇳🇴 [Norsk](README.no.md) · 🇵🇱 [Polski](README.pl.md) · 🇵🇹 [Português](README.pt.md) · 🇷🇴 [Română](README.ro.md) · 🇸🇰 [Slovenčina](README.sk.md) · 🇸🇮 [Slovenščina](README.sl.md) · 🇫🇮 [Suomi](README.fi.md) · 🇸🇪 [Svenska](README.sv.md) · 🇧🇾 [Беларуская](README.be.md) · 🇧🇬 [Български](README.bg.md) · 🇷🇺 [Русский](README.ru.md) · 🇷🇸 [Српски](README.sr.md) · 🇺🇦 [Українська](README.uk.md) · 🇬🇷 [Ελληνικά](README.el.md)

A privacy-respecting amateur-radio QSO logger that runs entirely in your browser. No account, no server, no tracking, no analytics — your logbooks live only in your browser's `localStorage` and never leave your device.

By [YL3IM](https://www.qrz.com/db/YL3IM). Project website: [qso.lv](https://qso.lv).

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
- [Contests](#contests)
- [Import & export](#import--export)
- [Privacy and data](#privacy-and-data)
- [Interface language](#interface-language)
- [Themes](#themes)
- [Tech notes](#tech-notes)
- [Credits](#credits)

## Features

- Multiple logbooks; each with its own list of QSOs.
- **Contest logs** are opt-in — pick from a catalog of 68 bundled contests when creating a logbook. The QSO form grows a contest-specific *Contest exchange* block, duplicate detection honours the contest's rule, and *Export .cbr* emits a Cabrillo v3 submission file alongside the usual ADIF export.
- Logbook actions: create, rename, delete, import a log file (ADIF or Cabrillo — format auto-detected), export to ADIF (`.adi`), plus *Export .cbr* (Cabrillo v3) for contest logbooks. Re-importing a `.cbr` file that was previously exported by the app rehydrates it as the same contest logbook.
- QSO form grouped into three blocks: **Station data** (station callsign, operator callsign, own grid) that stays sticky across QSOs; **Operation mode** (propagation mode, satellite, mode, sat mode, band, RX band) with satellite fields revealed only when propagation mode is *Satellite*; and **QSO data** (contacted callsign, contacted grid, UTC date/time when editing, comment, RST sent, RST rcvd).
- Full ADIF `MODE` → `SUBMODE` taxonomy in the mode dropdown — pick a parent mode (`SSB`, `MFSK`, …) or drill straight down to a specific submode (`USB`, `FT4`, …); the app stores both fields per ADIF, and the table shows the specific submode when there is one.
- Full ADIF propagation-mode enumeration (SAT, RPT, EME, ES, MS, Aurora, etc.) as a dropdown.
- Full AMSAT satellite catalog (~110 birds) and a two-tier **Sat mode** dropdown: preferred two-letter uplink/downlink codes at the top (LU, LV, SX, UU, UV, VA, VU, VV) and the legacy single-letter designations (A/B/J/K/L/R/S/T/U/V/W/X) grouped as *deprecated* below. Picking a sat mode auto-adjusts the uplink `BAND` and downlink `RX band`.
- Edit and delete any QSO (with confirmation on delete).
- Sensible defaults: today's UTC date/time pre-filled, mode-aware RST defaults (59 for voice modes, 599 for CW/digital), sticky Station data + band + mode + propagation mode across consecutive QSOs (only the per-contact fields — call, their grid, comment, RST — clear after each *Log QSO*).
- Live duplicate-callsign indicator (informational — duplicates are allowed).
- Country flag column derived from the callsign prefix (covers ≥99% of common amateur-radio prefixes, including portable calls like `9A/M0NCG`).
- One-tap **My grid** auto-detect: a 🌐 button next to the field asks the browser for your current coordinates and fills in the 6-character Maidenhead locator (uses the browser's Geolocation API — requires user permission).
- Locale-aware date display in the QSO table; ISO storage and ADIF output stay unchanged.
- Interface available in **28 languages** (English plus 22 Latin-script, 5 Cyrillic-script, and Greek); flag-emoji-prefixed selector in the header.
- Day / night themes (day is default; the toggle lives in the header).
- Mobile-friendly responsive layout with touch-sized buttons.
- Works fully offline — no network requests at any point.
- Installable as a PWA (Add to Home Screen / Install app) when hosted over HTTPS.

## Getting started

Just open `index.html` in a modern browser. There's no build step, no install, no server.

If you want to host it, drop the static files (`index.html`, `style.css`, `app.js`, `favicon.svg`, `manifest.webmanifest`, `service-worker.js`, the single `i18n.js` bundle carrying all 28 language dictionaries, and the single `contests.js` bundle carrying all 68 contest configs) onto any static host (GitHub Pages, Netlify, your own web server). It will work over `file://` as well — the service-worker registration is skipped automatically on the `file:` protocol so opening `index.html` directly from disk still works cleanly.

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
  - **Station data** — *Station callsign* (your transmit callsign, ADIF `STATION_CALLSIGN`), *Operator* (the individual operator's callsign — distinct from *Station callsign* when a guest operator is at the mic of a club station; ADIF `OPERATOR`), and *My grid* (ADIF `MY_GRIDSQUARE`) with a 🌐 button that fills the grid from your browser's current location (Geolocation API — the browser will prompt for permission the first time). These stay sticky across QSOs in the same session — set them once and they carry over.
  - **Operation mode** — *Prop. mode*, *Mode*, *Band*, plus the satellite-only *Satellite* / *Sat mode* / *RX band* when propagation mode is *Satellite*. Band, mode, and propagation mode are sticky like Station data.
  - **QSO data** — per-contact fields: *Callsign*, *Grid* (the other station's Maidenhead), *Comment* (ADIF `COMMENT`), *RST sent*, *RST rcvd*. When editing an existing QSO, *Date (UTC)* and *Time (UTC)* also appear in this block. These fields clear after each *Log QSO*.
- All callsigns (contacted, station, operator) auto-uppercase as you type; both grid-square fields uppercase the same way.
- Date and time pre-fill to *now* in UTC at submit; when editing, you can type any value.
- RST sent / RST rcvd, if left blank, default to **59** for voice modes (SSB/FM/DIGITALVOICE) and **599** for CW and digital modes (CW/FT8/FT4/RTTY/PSK31/JT65). The default follows the parent MODE, so picking a specific submode like *USB* or *FT4* still yields the right default.
- A *Duplicate in this log* chip appears under the callsign field if the call already exists in the current logbook. Duplicates are *not* blocked.
- **Propagation mode** — optional dropdown of ADIF propagation modes (SAT, RPT, EME, F2, Es, MS, LOS, etc.). Leave it empty for normal HF terrestrial QSOs.
- **Satellite QSOs** — selecting propagation mode *Satellite* reveals three satellite-only fields: **Satellite** (dropdown of ~110 AMSAT-registered birds), **Sat mode** (AMSAT letter designations, grouped as *modern* two-letter uplink/downlink codes at the top and *deprecated* single-letter codes below), and **RX band** (downlink band). Satellite, Sat mode, and RX band are required — the browser will refuse to submit without them. Picking a **Sat mode** automatically fills the main **Band** with the uplink band and **RX band** with the downlink band (e.g. mode J → 2m uplink, 70cm downlink). Switching *back* to satellite from another propagation mode resets Sat mode so you're prompted to pick a fresh one. Non-satellite QSOs never carry satellite-only fields at all; switching an existing QSO from satellite to another prop-mode strips them cleanly. **Grid** and **My grid** are general fields (also useful for VHF/UHF grid contests) and stay visible for every QSO.
- **Edit a QSO** with the *Edit* button on the row. The form switches to *Update QSO* mode, the row is highlighted, and a *Cancel* button appears. Switching logbooks or deleting the log cancels the edit automatically.
- **Delete a QSO** with the *Delete* button on the row (asks for confirmation).

## Contests

A logbook can optionally be a **contest log** — pick a contest from the *Contest* dropdown in the Create-logbook form. Empty dropdown = regular logbook (default, existing behaviour unchanged).

Contest logs get:

- **Contest-exchange block** in the QSO form, rendered dynamically from the selected contest's schema. Field types are `text`, `number`, and `serial` (auto-incrementing, read-only). Fields flagged *sticky* (your own zone / county / district / power / age / …) pre-fill from the previous QSO's value; per-QSO fields (their zone, their serial, …) clear after each *Log QSO*.
- **Contest badge** next to the log name in the detail header.
- **Duplicate detection** honours the contest's `duplicateRule` (`per-band-mode`, `per-band`, `per-day`, or `off`). The chip is still informational — never blocks submission.
- **Warning chip** when the current UTC falls outside any of the contest's declared date windows (12 years pre-loaded, 2026–2037), or when the selected band / mode is not in the contest's legal set. Never blocks.
- **Submission info panel** in the detail header: an inline form for the Cabrillo header fields the contest declares (category, power, name, club, address, soapbox, …). Values persist on the logbook, not per-QSO.
- **Export .cbr** button in the detail header, alongside *Export .adi*. Emits a Cabrillo v3 file: `CALLSIGN` / `GRID-LOCATOR` / `OPERATORS` pre-filled from the first QSO's station data, the rest from the Submission-info panel, then one `QSO:` line per contact in chronological order using the contest's `sentTemplate` / `rcvdTemplate` columns.
- **Cabrillo re-import** via the standard *Import log file* button — a `.cbr` file previously exported by the app (or by any other logger that emits standard Cabrillo v3) round-trips back into a fresh contest logbook of the correct type. The `CONTEST:` header is matched against the bundled catalog; when multiple configs share the same tag (e.g. `ARRL-10` matches both `arrl-10m-dx` and `arrl-10m-w`), the app disambiguates by matching the QSO-line mode letter and column count against each candidate's template, then prefers the `-dx` variant. Header fields (category, name, club, soapbox, …) rehydrate the Submission-info panel; QSO exchange values rehydrate `q.contestExchange` per the contest's template.

### Bundled contest catalog (68 configs)

Grouped by family:

- **CQ family** (9): CQ WW SSB/CW/RTTY, CQ WPX SSB/CW/RTTY, CQ 160 CW/SSB, CQ-M International.
- **ARRL family** (9): ARRL DX SSB/CW (DX side), ARRL Field Day, ARRL 10m/160m/RTTY Roundup (each shipped as *both* DX and W/VE perspectives).
- **IARU** (2): IARU HF Championship, IARU R1 Field Day.
- **WAE & other European** (8): WAE DX SSB/CW, EU HF Championship, LZ DX, Baltic Contest, NRAU-Baltic SSB/CW, SP DX.
- **Central/Eastern European asymmetric — both perspectives** (14): OK/OM DX CW+SSB, HA DX, YO DX HF, Ukrainian DX, REF Contest CW+SSB.
- **Russian club / RadioSport** (12): Russian DX (both sides), Russian WW RTTY, Russian WW MultiMode, Yuri Gagarin International, Cup of the Russian Federation CW+SSB, RRTC, Asiatic Russia Championship, UA1DZ Memorial Cup, RDAC, RAEM.
- **Belarus + Italian + Croatian + Spanish + Ukrainian RTTY** (12): Belarus BFRR CW+SSB (both sides), ARI DX (both sides), Croatian 9A CW (both sides), Spanish CNCW (both sides), Ukrainian RTTY (both sides).
- **Global** (2): All Asian DX CW+SSB.

Asymmetric contests (where the host country and the DX side send different exchanges) ship **two configs** — one for the host-country perspective (sticky region code) and one for the DX perspective (sticky serial). The received-side field is a single free-text catch-all so the operator can type either format depending on the contact.

Every config carries:

- Contest-exchange values re-emitted in ADIF export via `APP_LQ_*` namespace fields; the header stamp `APP_LQ_CONTEST_ID` lets a subsequent re-import rehydrate the logbook as the same contest with all fields intact.
- 12 years of date windows (2026–2037) so the *out of contest window* chip stays useful for a decade without a re-ship.
- A Cabrillo template mapping every exchange field to the correct `QSO:` line column.

Adding a new contest = paste a new IIFE block into [`contests.js`](contests.js) at the alphabetical position (each existing contest is delimited by a `// ==== <id> ====` header comment, so it's easy to find where to insert). No `index.html` change, no `service-worker.js` change, no `app.js` change needed — the renderer, submit handler, duplicate detector, ADIF round-trip and Cabrillo emitter absorb every config as pure data.

## Import & export

- **Import** any log file — click *Import log file* under the Create-logbook form and pick a `.adi` / `.adif` (ADIF) or `.cbr` / `.cab` (Cabrillo v3) file. The format is auto-detected from the file's first line (`<...>` → ADIF, `START-OF-LOG:` → Cabrillo, `[REG1TEST;1]` → an "EDI not yet supported" alert). A new logbook is always created — importing never merges into an existing one. ADIF imports come in as regular logs unless the header carries an `APP_LQ_CONTEST_ID` written by our own contest export (in which case the log rehydrates as a contest log of that contest). Cabrillo imports always come in as contest logs — see the *Contests* section for how the `CONTEST:` tag is matched against the bundled catalog.
- **ADIF export**: click *Export .adi* in the logbook header. A file is downloaded conforming to **ADIF 3.1.7**. The header declares `ADIF_VER 3.1.7`, `PROGRAMID local-qso`, `PROGRAMVERSION`, and `CREATED_TIMESTAMP` (UTC). Per-QSO fields emitted (when non-empty): `CALL`, `QSO_DATE`, `TIME_ON`, `BAND`, `MODE`, `SUBMODE`, `PROP_MODE`, `GRIDSQUARE`, `BAND_RX`, `SAT_MODE`, `SAT_NAME`, `RST_SENT`, `RST_RCVD`, `COMMENT`, `STATION_CALLSIGN`, `OPERATOR`, `MY_GRIDSQUARE` — followed by every extra ADIF field that was preserved on import (see below).
- **Cabrillo export** is documented in the *Contests* section above — it's available only for contest logbooks (the *Export .cbr* button appears in the logbook header when the log has a contest).
- **Lossless round-trip**: on ADIF import, any field the app doesn't model in its UI (e.g. `NAME`, `FREQ`, `TX_PWR`, `DXCC`, `QSL_SENT`/`QSL_RCVD`, `POTA_REF`, `APP_*` fields) is preserved on the QSO and re-emitted verbatim on the next ADIF export. So exporting a file that was itself imported preserves everything.
- Field-length in ADIF is treated as a UTF-8 byte count as the spec requires, so multi-byte text (e.g. accented callsigns in `COMMENT`) parses correctly.

## Privacy and data

- All data is stored in your browser's `localStorage` under the key `local-qso:v1`.
- Nothing is transmitted anywhere. There is no backend, no API call, no telemetry, no analytics.
- Clearing browser site data, using private/incognito mode, or using a different browser/device means a fresh empty logbook — use *Export .adi* to back up.

## Interface language

A language selector in the header covers **28 languages**. Pick one and the rest of the UI re-renders immediately; your choice is saved alongside your logs and respected on the next visit. English is the default.

Available languages (flag emoji + native name; ordered alphabetically within each script):

🇺🇸 English · 🇨🇿 Čeština · 🇩🇰 Dansk · 🇩🇪 Deutsch · 🇪🇪 Eesti · 🇪🇸 Español · 🇫🇷 Français · 🇮🇪 Gaeilge · 🇭🇷 Hrvatski · 🇮🇹 Italiano · 🇱🇻 Latviešu · 🇱🇹 Lietuvių · 🇭🇺 Magyar · 🇳🇱 Nederlands · 🇳🇴 Norsk · 🇵🇱 Polski · 🇵🇹 Português · 🇷🇴 Română · 🇸🇰 Slovenčina · 🇸🇮 Slovenščina · 🇫🇮 Suomi · 🇸🇪 Svenska · 🇧🇾 Беларуская · 🇧🇬 Български · 🇷🇺 Русский · 🇷🇸 Српски · 🇺🇦 Українська · 🇬🇷 Ελληνικά

Universal technical labels stay in their canonical form across all languages: band names (`20m`, `70cm`, …), ADIF mode codes (`SSB`, `FT8`, `CW`, …), `QSO`, `RST`, `UTC`, and ISO country codes.

Missing a string in your language? Every language dictionary lives in a single [`i18n.js`](i18n.js) bundle, split into 28 sections by `// ==== <lang> ====` header comments. Grep for the header of your language to jump to its section, then add/edit the key. Adding a whole new language = paste a new IIFE block into `i18n.js` at the alphabetical position, add the language code to `SUPPORTED_LANGS` in `app.js`, and add a `<select>` option in `index.html`.

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
  - `i18n.js` — a single hand-maintained bundle carrying all 28 language dictionaries. Each language is a self-contained IIFE that assigns `window.I18N[<lang>]` a flat key→string map. Blocks are delimited by `// ==== <lang> ====` header comments — grep for one to jump to that language. Bundled into one file rather than 28 individual files because translation files are highly repetitive (same key names, same placeholder syntax) and gzip compresses the whole set far better than 28 separate streams — saves ~23 KB on first-load transfer and cuts 27 HTTP requests. `t()` and `applyLanguage()` in `app.js` handle lookups (with English fallback) and walk the DOM updating every `[data-i18n*]` element.
  - `contests.js` — a single hand-maintained bundle carrying all 68 contest configs. Each contest is a self-contained IIFE that assigns `window.CONTESTS[<id>]` a schema-conformant config object (`{name, shortName, windows[], bands[], modes[], exchange[], duplicateRule, cabrillo}`). Blocks are delimited by `// ==== <id> ====` header comments — grep for one to jump to that contest. Bundled into one file rather than 68 individual files because contest configs are highly repetitive (same schema, same `APP_LQ_*` prefix, same Cabrillo header field names) and gzip compresses the whole set far better than 68 separate streams — saves ~42 KB on first-load transfer and cuts 67 HTTP requests. Loaded by a single `<script>` tag in `index.html` before `app.js` so the registry is populated when the Contest dropdown is built.
- Tested on recent Chromium, Firefox, and Safari (desktop + iOS).

## Credits

Built by [YL3IM](https://www.qrz.com/db/YL3IM).

Thanks to [A65BR](https://www.qrz.com/db/A65BR) Oleg for the invaluable cues that made the satellite QSO part actually usable — the modern two-letter Sat-mode designations, the AMSAT catalog, and the uplink/downlink auto-adjust all trace back to his feedback.

Country flags rely on Unicode regional-indicator sequences. They render correctly on macOS, iOS, Linux (with a flag-capable emoji font), and Android. Windows does not include a system flag font, so flag emoji may appear as letter pairs there.
