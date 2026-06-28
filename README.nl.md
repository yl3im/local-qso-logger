# Local QSO Logger

## Lees in uw taal

🇺🇸 [English](README.md) · 🇨🇿 [Čeština](README.cs.md) · 🇩🇰 [Dansk](README.da.md) · 🇩🇪 [Deutsch](README.de.md) · 🇪🇪 [Eesti](README.et.md) · 🇪🇸 [Español](README.es.md) · 🇫🇷 [Français](README.fr.md) · 🇮🇪 [Gaeilge](README.ga.md) · 🇭🇷 [Hrvatski](README.hr.md) · 🇮🇹 [Italiano](README.it.md) · 🇱🇻 [Latviešu](README.lv.md) · 🇱🇹 [Lietuvių](README.lt.md) · 🇭🇺 [Magyar](README.hu.md) · 🇳🇱 Nederlands · 🇳🇴 [Norsk](README.no.md) · 🇵🇱 [Polski](README.pl.md) · 🇵🇹 [Português](README.pt.md) · 🇷🇴 [Română](README.ro.md) · 🇸🇰 [Slovenčina](README.sk.md) · 🇸🇮 [Slovenščina](README.sl.md) · 🇫🇮 [Suomi](README.fi.md) · 🇸🇪 [Svenska](README.sv.md) · 🇧🇾 [Беларуская](README.be.md) · 🇧🇬 [Български](README.bg.md) · 🇷🇺 [Русский](README.ru.md) · 🇷🇸 [Српски](README.sr.md) · 🇺🇦 [Українська](README.uk.md) · 🇬🇷 [Ελληνικά](README.el.md)

Een privacyrespecterende amateurradio-QSO-logger die volledig in je browser draait. Geen account, geen server, geen tracking, geen analytics — je logboeken worden uitsluitend in de `localStorage` van je browser bewaard en verlaten nooit je apparaat.

Door [YL3IM](https://www.qrz.com/db/YL3IM). Projectwebsite: [qso.ham.lv](https://qso.ham.lv).

![Local QSO Logger op een iPad](media/iPad.png)

## Inhoud

- [Lees in uw taal](#lees-in-uw-taal)
- [Functies](#functies)
- [Aan de slag](#aan-de-slag)
- [Installeren als PWA op mobiel](#installeren-als-pwa-op-mobiel)
  - [iOS (alleen Safari)](#ios-alleen-safari)
  - [Android (Chrome / Edge / Firefox)](#android-chrome--edge--firefox)
- [Logboeken](#logboeken)
- [QSO's](#qsos)
- [ADIF import & export](#adif-import--export)
- [Privacy en data](#privacy-en-data)
- [Interfacetaal](#interfacetaal)
- [Thema's](#themas)
- [Technische notities](#technische-notities)
- [Credits](#credits)

## Functies

- Meerdere logboeken, elk met zijn eigen QSO-lijst.
- Logboekacties: aanmaken, hernoemen, verwijderen, importeren uit ADIF, exporteren naar ADIF (`.adi`).
- QSO-velden: roepteken, UTC-datum, UTC-tijd, band, modus, RST verzonden, RST ontvangen.
- Elke QSO bewerken en verwijderen (met bevestiging bij verwijderen).
- Verstandige standaarden: vandaag UTC-datum/-tijd voorgevuld, modus-afhankelijke RST-standaarden (59 voor spraakmodi, 599 voor CW/digitaal), plakkerige band en modus tussen opeenvolgende QSO's.
- Live duplicaat-roepteken-indicator (informatief — duplicaten zijn toegestaan).
- Landvlag-kolom afgeleid van het roepteken-prefix (dekt ≥99 % van veelvoorkomende amateurradio-prefixen, inclusief portable roepteken als `9A/M0NCG`).
- Locale-bewuste datumweergave in de QSO-tabel; ISO-opslag en ADIF-uitvoer blijven onveranderd.
- Dag-/nachtthema's (dag standaard; de schakelaar zit in de header).
- Mobielvriendelijke responsive layout met touch-vriendelijke knoppen.
- Werkt volledig offline — op geen enkel moment netwerkverzoeken.
- Te installeren als PWA (Toevoegen aan startscherm / App installeren) wanneer gehost via HTTPS.
- Interface beschikbaar in **28 talen** (Engels plus 22 Latijnse, 5 Cyrillische en Grieks); selector met vlag-emoji in de header.

## Aan de slag

Open gewoon `index.html` in een moderne browser. Geen build, geen installatie, geen server.

Om te hosten, plaats de statische bestanden (`index.html`, `style.css`, `app.js`, `favicon.svg`, `manifest.webmanifest`, `service-worker.js` en de `i18n/`-map met de 28 vertaalbestanden) op een statische host (GitHub Pages, Netlify, eigen webserver). Werkt ook via `file://` — de service-worker-registratie wordt automatisch overgeslagen bij het `file:`-protocol, zodat het direct openen van `index.html` vanaf schijf netjes werkt.

Wanneer geserveerd via HTTPS, wordt de app installeerbaar als PWA (via het menu *App installeren* / *Toevoegen aan startscherm* van de browser) en werkt deze na het eerste bezoek offline dankzij een cache-first service worker die elk statisch bestand (UI + alle vertalingen) precachet.

Een standaardlogboek wordt automatisch aangemaakt bij het eerste bezoek, zodat je meteen kunt beginnen met loggen.

## Installeren als PWA op mobiel

Wanneer de app via HTTPS wordt geserveerd (bijv. GitHub Pages), kun je hem installeren op het startscherm van je telefoon zodat hij op volledig scherm zonder browser-chrome draait. Na de eerste start cachet de service worker alles, zodat volgende starts volledig offline werken.

### iOS (alleen Safari)

Op iOS kan alleen Safari PWA's installeren — externe browsers kunnen dat niet.

1. Open de site in **Safari**.
2. Tik op de knop **Delen**.
3. Kies **Zet op beginscherm**, daarna **Voeg toe**.

Doorloop:

![iOS installatie doorloop](media/iOS_add_to_home_screen.gif)

Bron van hogere kwaliteit: [media/iOS_add_to_home_screen.mp4](media/iOS_add_to_home_screen.mp4).

### Android (Chrome / Edge / Firefox)

1. Open de site in je browser. Er kan automatisch een *App installeren*-prompt verschijnen.
2. Open anders het **⋮-menu** → **App installeren** (of **Toevoegen aan startscherm** in oudere versies).

Doorloop:

![Android installatie doorloop](media/Android_add_to_home_screen.gif)

Bron van hogere kwaliteit: [media/Android_add_to_home_screen.mp4](media/Android_add_to_home_screen.mp4).

## Logboeken

- **Aanmaken:** typ een naam in *Logboeknaam* en verzend. Als je de naam leeg laat, is de standaard `Log YYYY-MM-DD HH:MM UTC`.
- **Schakelen:** klik op een logboek in de zijbalk.
- **Hernoemen:** klik op *Hernoemen* in de logboekheader. Enter slaat op, Escape annuleert.
- **Verwijderen:** klik op *Logboek verwijderen*. Je wordt om bevestiging gevraagd. Als je het laatste logboek verwijdert, wordt automatisch een nieuw aangemaakt.

## QSO's

- Vul het formulier in en druk op **QSO loggen**.
- Het roepteken wordt automatisch in hoofdletters omgezet tijdens het typen.
- Datum en tijd worden vooringevuld met *nu* in UTC en gereset na elke gelogde QSO; je kunt nog steeds elke waarde invoeren.
- Band en modus blijven persistent tussen QSO's in dezelfde sessie, zodat je ze niet voor elk contact opnieuw hoeft te selecteren.
- RST verzonden / RST ontvangen, indien leeg gelaten, vallen terug op **59** voor spraakmodi (SSB/FM/AM/DIGITALVOICE) en op **599** voor CW en digitale modi (CW/FT8/FT4/RTTY/PSK31/JT65).
- Een *Duplicaat in dit logboek*-chip verschijnt onder het roeptekenveld als het roepteken al bestaat in het huidige logboek. Duplicaten worden *niet* geblokkeerd.
- **Een QSO bewerken** met de *Bewerken*-knop in de rij. Het formulier schakelt naar de *QSO bijwerken*-modus, de rij wordt gemarkeerd en een *Annuleren*-knop verschijnt. Wisselen van logboek of het verwijderen ervan annuleert de bewerking automatisch.
- **Een QSO verwijderen** met de *Verwijderen*-knop in de rij (vraagt om bevestiging).

## ADIF import & export

- **Export**: klik op *.adi exporteren* in de logboekheader. Een bestand wordt gedownload met `ADIF_VER 3.1.4` en `PROGRAMID local-qso` in de header. Elke record mapt `CALL`, `QSO_DATE`, `TIME_ON`, `BAND`, `MODE`, `RST_SENT`, `RST_RCVD`.
- **Import**: klik op *.adi-bestand importeren* onder het logboek-aanmaakformulier en kies een `.adi`/`.adif`-bestand. Een nieuw logboek wordt aangemaakt met de naam `Geïmporteerd YYYY-MM-DD HH:MM UTC`. Import wordt nooit samengevoegd in een bestaand logboek.
- De veldlengte-telling wordt behandeld als het aantal tekens, wat werkt voor ASCII ADIF (alle standaard QSO-velden). Multi-byte inhoud in niet-essentiële tekstvelden kan vreemd geparseerd worden.

## Privacy en data

- Alle data wordt opgeslagen in de `localStorage` van de browser onder de sleutel `local-qso:v1`.
- Niets wordt ergens heen verzonden. Geen backend, geen API-aanroep, geen telemetrie, geen analytics.
- Sitedata wissen, privé/incognito-modus gebruiken, of een andere browser/apparaat gebruiken betekent een leeg logboek — gebruik *.adi exporteren* voor backup.

## Interfacetaal

Een taalkiezer in de header dekt **28 talen**. Kies er een en de rest van de interface wordt onmiddellijk opnieuw gerenderd; je keuze wordt opgeslagen samen met je logs en gerespecteerd bij het volgende bezoek. Engels is de standaard.

Beschikbare talen (vlag-emoji + native naam; alfabetisch geordend binnen elke schrift):

🇺🇸 English · 🇨🇿 Čeština · 🇩🇰 Dansk · 🇩🇪 Deutsch · 🇪🇪 Eesti · 🇪🇸 Español · 🇫🇷 Français · 🇮🇪 Gaeilge · 🇭🇷 Hrvatski · 🇮🇹 Italiano · 🇱🇻 Latviešu · 🇱🇹 Lietuvių · 🇭🇺 Magyar · 🇳🇱 Nederlands · 🇳🇴 Norsk · 🇵🇱 Polski · 🇵🇹 Português · 🇷🇴 Română · 🇸🇰 Slovenčina · 🇸🇮 Slovenščina · 🇫🇮 Suomi · 🇸🇪 Svenska · 🇧🇾 Беларуская · 🇧🇬 Български · 🇷🇺 Русский · 🇷🇸 Српски · 🇺🇦 Українська · 🇬🇷 Ελληνικά

Universele technische labels blijven in hun canonieke vorm in alle talen: bandnamen (`20m`, `70cm`, …), ADIF modus-codes (`SSB`, `FT8`, `CW`, …), `QSO`, `RST`, `UTC` en ISO landcodes.

Mist er een string in jouw taal? Elke taal is een klein bestand onder [`i18n/`](i18n/) — kopieer `i18n/en.js`, vertaal de waarden, sla op als `i18n/<code>.js`, voeg dan een `<script>`-tag plus een `<select>`-optie toe in `index.html` en de code in `SUPPORTED_LANGS` in `app.js`.

## Thema's

De themaschakelaar in de header wisselt tussen dag (standaard) en nacht. De voorkeur wordt opgeslagen samen met je logs en gerespecteerd bij het volgende bezoek. Native datum-/tijdkiezers volgen het thema via `color-scheme`.

## Technische notities

- Single-page app, puur HTML + CSS + JavaScript. Geen frameworks, geen build, geen afhankelijkheden.
- Bronbestanden:
  - `index.html` — markup en meta-tags.
  - `style.css` — thema's en layout (dag-/nachtvariabelen, mobile media queries).
  - `app.js` — state, persistentie, rendering, ADIF parser/serializer, roeptekenprefix → land lookup.
  - `favicon.svg` — inline SVG favicon.
  - `manifest.webmanifest` — Web App Manifest (naam, themakleur, scope, icoon), zodat de app installeerbaar is als PWA op mobiel en desktop.
  - `service-worker.js` — cache-first service worker die bij installatie elk statisch bestand precachet, bij activatie oude caches verwijdert en de app volledig offline houdt na het eerste bezoek. Registratie wordt automatisch overgeslagen voor het `file://`-protocol, zodat het direct openen van `index.html` vanaf schijf netjes blijft.
  - `i18n/<lang>.js` — één vertaalbestand per ondersteunde taal (28 in totaal). Elk is een kleine IIFE die `window.I18N[<lang>]` een platte sleutel→string-kaart toewijst. `t()` en `applyLanguage()` in `app.js` regelen lookups (met Engels als fallback) en lopen door de DOM om elk `[data-i18n*]`-element bij te werken.
- Getest op recente Chromium, Firefox en Safari (desktop + iOS).

## Credits

Gebouwd door [YL3IM](https://www.qrz.com/db/YL3IM).

Landvlaggen zijn gebaseerd op Unicode regional-indicator-sequenties. Ze renderen correct op macOS, iOS, Linux (met een vlag-capabel emoji-lettertype) en Android. Windows bevat geen systeem-vlaglettertype, dus vlag-emoji kunnen daar als letterparen verschijnen.
