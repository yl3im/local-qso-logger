# Local QSO Logger

A privacy-respecting amateur-radio QSO logger that runs entirely in your browser. No account, no server, no tracking, no analytics — your logbooks live only in your browser's `localStorage` and never leave your device.

By [YL3IM](https://www.qrz.com/db/YL3IM).

## Features

- Multiple logbooks; each with its own list of QSOs.
- Logbook actions: create, rename, delete, import from ADIF, export to ADIF (`.adi`).
- QSO fields: callsign, UTC date, UTC time, band, mode, RST sent, RST rcvd.
- Edit and delete any QSO (with confirmation on delete).
- Sensible defaults: today's UTC date/time pre-filled, mode-aware RST defaults (59 for voice modes, 599 for CW/digital), sticky band & mode across consecutive QSOs.
- Live duplicate-callsign indicator (informational — duplicates are allowed).
- Country flag column derived from the callsign prefix (covers ≥99% of common amateur-radio prefixes, including portable calls like `9A/M0NCG`).
- Locale-aware date display in the QSO table; ISO storage and ADIF output stay unchanged.
- Day / night themes (day is default; the toggle lives in the header).
- Mobile-friendly responsive layout with touch-sized buttons.
- Works fully offline — no network requests at any point.

## Getting started

Just open `index.html` in a modern browser. There's no build step, no install, no server.

If you want to host it, drop the four files (`index.html`, `style.css`, `app.js`, `favicon.svg`) onto any static host (GitHub Pages, Netlify, your own web server). It will work over `file://` as well.

A default logbook is created automatically on first visit, so you can start logging immediately.

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

## Themes

The theme toggle in the header switches between day (default) and night. The preference is saved alongside your logs and respected on the next visit. Native date/time pickers follow the theme via `color-scheme`.

## Tech notes

- Single-page app, vanilla HTML + CSS + JavaScript. No frameworks, no build step, no dependencies.
- Source files:
  - `index.html` — markup and meta tags.
  - `style.css` — themes and layout (day/night variables, mobile media queries).
  - `app.js` — state, persistence, rendering, ADIF parser/serializer, callsign-prefix → country lookup.
  - `favicon.svg` — inline SVG favicon.
- Tested on recent Chromium, Firefox, and Safari (desktop + iOS).

## Credits

Built by [YL3IM](https://www.qrz.com/db/YL3IM).

Country flags rely on Unicode regional-indicator sequences. They render correctly on macOS, iOS, Linux (with a flag-capable emoji font), and Android. Windows does not include a system flag font, so flag emoji may appear as letter pairs there.
