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

- **State** (`load`/`save`): `{ logs, selectedId, theme, lang }` persisted as JSON. `theme` is `"day"|"night"` (day default); `lang` is one of `SUPPORTED_LANGS = ["en","ru","de","fr"]` (en default; invalid values fall back to en on load). Each log: `{ id, name, qsos[] }`. Each QSO: `{ id, call, date, time, band, mode, rstSent, rstRcvd }`. Old saved logs may carry removed `callsign`/`locator` fields — ignored on load. `editingId` is module-level and **not** persisted.
- **i18n** (`t()`, `applyLanguage()`): each `i18n/<lang>.js` is a small IIFE that assigns `window.I18N[<lang>]` a flat key→string map. 28 supported langs total — all of `SUPPORTED_LANGS` are loaded by `<script>` tags before `app.js`. `t(key, ...args)` looks up the active dict, falls back to English, then to the key; positional placeholders `{0}`, `{1}`, ... are replaced with args. `applyLanguage()` walks `[data-i18n]` / `[data-i18n-html]` / `[data-i18n-placeholder]` / `[data-i18n-aria-label]` elements to update labels, then re-applies state-dependent strings (theme toggle, qso-submit). The language `<select>` in the header has flag-emoji-prefixed native-name options ordered English first, then Latin-script alphabetical (Čeština → Svenska), then Cyrillic-script alphabetical (Беларуская → Українська), then Greek (Ελληνικά); US flag stands in for English. Adding a new string means adding a key to all 28 files; falling back to English keeps things from blowing up if you forget.
- **Rendering**: `render()` = `renderLogList()` + `renderDetail()` + `save()`. Table rows are built newest-first; Edit/Delete buttons are at the *start* of each row (touch priority). Cell text is set via `textContent`, never `innerHTML`, to avoid injection from callsigns/log names.
- **Dates/times are UTC** (amateur-radio convention; `getUTC*`). Stored as ISO `YYYY-MM-DD` + `HH:MM:SS`. The table date column renders via `Intl.DateTimeFormat` (user locale); storage/ADIF stay ISO. New QSOs auto-stamp current UTC at submit; edit mode uses whatever the user typed.
- **Modes** (`MODE_GROUPS`): full ADIF MODE→SUBMODE taxonomy rendered as a `<select>` with `<optgroup>`s. `MODE_NO_PARENT_OPTION` (DYNAMIC/FSK/MTONE) marks parents selectable *only* via a submode. Stored value is the most-specific name (submode if any, else parent); `modeParent()` resolves the parent. `VOICE_PARENTS` drives `rstDefaultFor()` → "59" for voice, "599" otherwise (AM kept in the set for legacy data though it's no longer in the dropdown).
- **Callsign → country flag** (`callsignCountry` + `CALL_PREFIX` + `isoToFlag`): 2-letter-then-1-letter prefix lookup → ISO 3166-1 alpha-2 → regional-indicator emoji. `CALL_PREFIX` is curated, **not exhaustive** — unknown prefixes render no flag. Strips portable suffixes (`/P`, `/M`, `/MM`, `/QRP`, `/digit`, etc.); for prefix-portable calls like `9A/M0NCG` picks the shorter side as the operating prefix. Test coverage against real data with the sample `YL3IM.adi`. Single-letter entries at the end of the map must not collide with 2-letter blocks above.
- **ADIF export** (`buildAdif`/`adifField`): declares `ADIF_VER 3.1.4`, `PROGRAMID local-qso`; maps `CALL/QSO_DATE/TIME_ON/BAND/MODE/SUBMODE/RST_SENT/RST_RCVD`. SUBMODE emitted only when the stored mode is a submode. Field length is byte length (`TextEncoder`). Downloads via Blob.
- **ADIF import** (`parseAdif`/`importAdif`): always creates a **new** logbook named `Imported YYYY-MM-DD HH:MM UTC` — never merges; filename is ignored. Field-length count is treated as character count (correct for ASCII ADIF; multi-byte non-essential fields may parse oddly).

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
