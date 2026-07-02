# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Local QSO Logger — a single-page amateur-radio contact (QSO) logger. Vanilla HTML/CSS/JS, **no build step, no dependencies, no backend**. The static files (`index.html`, `style.css`, `app.js`, `favicon.svg`, `manifest.webmanifest`, `service-worker.js`, and `i18n/{en,cs,da,de,et,es,fr,ga,hr,it,lv,lt,hu,nl,no,pl,pt,ro,sk,sl,fi,sv,be,bg,ru,sr,uk,el}.js`) are the whole app.

## Running / testing

There is no build, lint, or test tooling. To run, open `index.html` directly in a browser (`file://` works), or serve the directory over HTTP to exercise the PWA/service-worker path:

```
python3 -m http.server   # then open http://localhost:8000
```

Verify changes manually in the browser. To reset app state, clear `localStorage` for the origin (key `local-qso:v1`).

## Hard constraints (the point of the project)

- **All logic is client-side. Data lives ONLY in browser `localStorage` (key `local-qso:v1`).** No backend, no network calls, no telemetry, no external persistence — do not introduce any.
- Service-worker registration in `app.js` is guarded by `location.protocol.startsWith("http")` so `file://` opens stay clean. That guard is load-bearing — keep it.
- `*.adi` files and `.claude/` are gitignored. The repo contains large sample `.adi` files for manual testing; don't commit new ones.

## Architecture (app.js)

All code is one IIFE in `app.js`, organized in labeled sections. Key pieces:

- **State** (`load`/`save`): `{ logs, selectedId, theme, lang }` persisted as JSON. `theme` is `"day"|"night"` (day default); `lang` is one of `SUPPORTED_LANGS = ["en","ru","de","fr"]` (en default; invalid values fall back to en on load). Each log: `{ id, name, qsos[] }`. Each QSO has always-present `{ id, call, date, time, band, mode, propMode, rstSent, rstRcvd }` plus optional keys attached only when non-empty: `submode`, `stationCall`, `operator`, `myGridSquare`, `gridSquare`, `comment`, and — SAT only — `bandRx`, `satMode`, `satName`. Old saved logs may carry removed `callsign`/`locator` fields — ignored on load. `editingId` is module-level and **not** persisted.
- **i18n** (`t()`, `applyLanguage()`): each `i18n/<lang>.js` is a small IIFE that assigns `window.I18N[<lang>]` a flat key→string map. 28 supported langs total — all of `SUPPORTED_LANGS` are loaded by `<script>` tags before `app.js`. `t(key, ...args)` looks up the active dict, falls back to English, then to the key; positional placeholders `{0}`, `{1}`, ... are replaced with args. `applyLanguage()` walks `[data-i18n]` / `[data-i18n-html]` / `[data-i18n-placeholder]` / `[data-i18n-aria-label]` elements to update labels, then re-applies state-dependent strings (theme toggle, qso-submit). The language `<select>` in the header has flag-emoji-prefixed native-name options ordered English first, then Latin-script alphabetical (Čeština → Svenska), then Cyrillic-script alphabetical (Беларуская → Українська), then Greek (Ελληνικά); US flag stands in for English. Adding a new string means adding a key to all 28 files; falling back to English keeps things from blowing up if you forget.
- **Rendering**: `render()` = `renderLogList()` + `renderDetail()` + `save()`. Table rows are built newest-first; Edit/Delete buttons are at the *start* of each row (touch priority). Cell text is set via `textContent`, never `innerHTML`, to avoid injection from callsigns/log names.
- **Dates/times are UTC** (amateur-radio convention; `getUTC*`). Stored as ISO `YYYY-MM-DD` + `HH:MM:SS`. The table date column renders via `Intl.DateTimeFormat` (user locale); storage/ADIF stay ISO. New QSOs auto-stamp current UTC at submit; edit mode uses whatever the user typed.
- **Modes** (`MODE_GROUPS`): full ADIF MODE→SUBMODE taxonomy rendered as a `<select>` with `<optgroup>`s. `MODE_NO_PARENT_OPTION` (DYNAMIC/FSK/MTONE) marks parents selectable *only* via a submode. **Two-field ADIF model:** `q.mode` is always the parent MODE (e.g. `SSB`, `MFSK`), and `q.submode` is the specific SUBMODE (e.g. `USB`, `FT4`) — attached only when the operator picked a submode from the dropdown. Submitting the form derives both from the raw selection via `modeParent()` and `SUBMODE_TO_PARENT`. The table shows `q.submode || q.mode`. Legacy state where `q.mode` held a submode value is auto-migrated on load (split into `q.mode` + `q.submode`). ADIF export writes `MODE`/`SUBMODE` directly from the two fields; import reads them separately and derives a missing parent from a known submode via `SUBMODE_TO_PARENT`. `VOICE_PARENTS` drives `rstDefaultFor()` → "59" for voice, "599" otherwise (AM kept in the set for legacy data though it's no longer in the dropdown).
- **Propagation mode** (`PROP_MODES`): full ADIF Propagation Mode Enumeration (§ III.B.13) as a `<select>` whose first option is empty (matching the spec convention that PROP_MODE is absent for typical HF QSOs). Stored on `q.propMode` as the ADIF code (e.g. `SAT`, `RPT`); the dropdown shows `CODE — description` for clarity. Consumed on import and re-emitted on export via `PROP_MODE` in `KNOWN_ADIF_FIELDS`.
- **Satellite fields** (`SAT_NAMES`, `SAT_MODES`): when `q.propMode === "SAT"`, the QSO form reveals three satellite-only fields via a `.is-sat` class on `#qso-form` (CSS: `.sat-only { display: none }`, `.qso-form.is-sat .sat-only { display: flex }`): `SAT_NAME` (dropdown, ~110 entries), `SAT_MODE` (dropdown of AMSAT mode designations split into "modern" two-letter codes — `SAT_MODES_MODERN` — at the top and legacy single-letter codes — `SAT_MODES_DEPRECATED` — at the bottom via `<optgroup>`s; each entry is `[code, uplinkBand, downlinkBand]`, and `SAT_MODES` is the flat concatenation used by the change handler for band lookup), and `BAND_RX` (dropdown, same options as `BAND` with empty first). Selecting a `SAT_MODE` auto-adjusts `BAND` = uplink and `BAND_RX` = downlink. **Sat-only properties (`q.satName / q.bandRx / q.satMode`) are only attached to the QSO when `propMode === "SAT"` — non-satellite QSOs don't carry these keys at all.** Editing a QSO from sat to non-sat (or vice versa) adds or deletes them as needed. `GRIDSQUARE` and `MY_GRIDSQUARE` are **not** sat-only — they live in the QSO-data and Station-data blocks respectively, are always visible, and are attached only when non-empty. On import, sat properties are only attached when the source ADIF record actually contained them. Legacy imported `SAT_MODE` values (like "U/V") not in the enum are preserved via a one-off `<option>` appended when the QSO is opened for edit.
- **Callsign → country flag** (`callsignCountry` + `CALL_PREFIX` + `isoToFlag`): 2-letter-then-1-letter prefix lookup → ISO 3166-1 alpha-2 → regional-indicator emoji. `CALL_PREFIX` is curated, **not exhaustive** — unknown prefixes render no flag. Strips portable suffixes (`/P`, `/M`, `/MM`, `/QRP`, `/digit`, etc.); for prefix-portable calls like `9A/M0NCG` picks the shorter side as the operating prefix. Test coverage against real data with the sample `YL3IM.adi`. Single-letter entries at the end of the map must not collide with 2-letter blocks above.
- **ADIF export** (`buildAdif`/`adifField`): declares `ADIF_VER 3.1.7` (via `ADIF_VERSION`), `PROGRAMID local-qso`, `PROGRAMVERSION` (from `APP_VERSION`), and `CREATED_TIMESTAMP` (UTC `YYYYMMDD HHMMSS` via `nowAdifTimestamp`). Per-QSO emits `CALL/QSO_DATE/TIME_ON/BAND/MODE/SUBMODE/PROP_MODE/GRIDSQUARE/BAND_RX/SAT_MODE/SAT_NAME/RST_SENT/RST_RCVD/COMMENT/STATION_CALLSIGN/OPERATOR/MY_GRIDSQUARE` — optional fields (`SUBMODE`, station data, grids, comment, sat props) are skipped by `adifField()` when absent. After the typed fields, every entry in `q.extras` is re-emitted verbatim — that's how the app round-trips ADIF fields it doesn't model in its UI (NAME/FREQ/DXCC/QSL_*/etc.). Field length in the tag is byte length via `TextEncoder`. Downloads via Blob.
- **ADIF import** (`parseAdif`/`parseAdifRecord`/`importAdif`): always creates a **new** logbook named `Imported YYYY-MM-DD HH:MM UTC` — never merges; filename is ignored. Parser scans at the **byte level** (`Uint8Array` from `TextEncoder`), so the ADIF field-length prefix is treated as a UTF-8 byte count per spec (multi-byte content in text fields like COMMENT slices correctly). `KNOWN_ADIF_FIELDS` names the fields consumed by the typed model; anything outside that set is stashed on `q.extras` for lossless re-export.

## UI / behavior decisions (don't "fix" these — they're intentional)

- Duplicate-callsign indicator is informational only; duplicates are allowed.
- Log name defaults to `Log YYYY-MM-DD HH:MM UTC` when blank.
- Band & mode are sticky across consecutive QSOs in a session.
- Switching logs or deleting the current log cancels an in-progress edit.
- Inline rename (Rename button): Enter commits, Escape cancels, blur commits.
- Deleting the last logbook auto-creates a fresh one (`ensureAtLeastOneLog`).
- Theme via `data-theme="day|night"` on `<html>`; day theme in `:root`, night overrides under `[data-theme="night"]`. `color-scheme` is set so native date/time pickers follow the theme.

## CSS (style.css)

- `.panel { min-width: 0 }` is load-bearing on mobile — without it the table's `min-width` propagates up the grid and overflows the viewport. The table scrolls horizontally inside `.qso-table-wrap` on narrow screens.

## Service worker

`service-worker.js` is cache-first and precaches the static assets on install, evicting old caches on activate. Bump the `CACHE` constant when shipping new asset versions, or clients keep serving stale files.
