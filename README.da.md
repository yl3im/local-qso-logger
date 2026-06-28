# Local QSO Logger

## Læs på dit sprog

🇺🇸 [English](README.md) · 🇨🇿 [Čeština](README.cs.md) · 🇩🇰 Dansk · 🇩🇪 [Deutsch](README.de.md) · 🇪🇪 [Eesti](README.et.md) · 🇪🇸 [Español](README.es.md) · 🇫🇷 [Français](README.fr.md) · 🇮🇪 [Gaeilge](README.ga.md) · 🇭🇷 [Hrvatski](README.hr.md) · 🇮🇹 [Italiano](README.it.md) · 🇱🇻 [Latviešu](README.lv.md) · 🇱🇹 [Lietuvių](README.lt.md) · 🇭🇺 [Magyar](README.hu.md) · 🇳🇱 [Nederlands](README.nl.md) · 🇳🇴 [Norsk](README.no.md) · 🇵🇱 [Polski](README.pl.md) · 🇵🇹 [Português](README.pt.md) · 🇷🇴 [Română](README.ro.md) · 🇸🇰 [Slovenčina](README.sk.md) · 🇸🇮 [Slovenščina](README.sl.md) · 🇫🇮 [Suomi](README.fi.md) · 🇸🇪 [Svenska](README.sv.md) · 🇧🇾 [Беларуская](README.be.md) · 🇧🇬 [Български](README.bg.md) · 🇷🇺 [Русский](README.ru.md) · 🇷🇸 [Српски](README.sr.md) · 🇺🇦 [Українська](README.uk.md) · 🇬🇷 [Ελληνικά](README.el.md)

En privatlivsrespekterende amatørradio-QSO-logger, der kører helt i din browser. Ingen konto, ingen server, ingen sporing, ingen analyse — dine logbøger findes kun i din browsers `localStorage` og forlader aldrig din enhed.

Af [YL3IM](https://www.qrz.com/db/YL3IM). Projektets websted: [qso.ham.lv](https://qso.ham.lv).

![Local QSO Logger på iPad](media/iPad.png)

## Indhold

- [Læs på dit sprog](#læs-på-dit-sprog)
- [Funktioner](#funktioner)
- [Kom i gang](#kom-i-gang)
- [Installer som PWA på mobilen](#installer-som-pwa-på-mobilen)
  - [iOS (kun Safari)](#ios-kun-safari)
  - [Android (Chrome / Edge / Firefox)](#android-chrome--edge--firefox)
- [Logbøger](#logbøger)
- [QSO](#qso)
- [ADIF-import og -eksport](#adif-import-og-eksport)
- [Privatliv og data](#privatliv-og-data)
- [Brugerfladesprog](#brugerfladesprog)
- [Temaer](#temaer)
- [Tekniske noter](#tekniske-noter)
- [Krediteringer](#krediteringer)

## Funktioner

- Flere logbøger, hver med sin egen liste over QSO.
- Logbogshandlinger: opret, omdøb, slet, importer fra ADIF, eksporter til ADIF (`.adi`).
- QSO-felter: kaldesignal, UTC-dato, UTC-tid, bånd, modulation, RST sendt, RST modtaget.
- Rediger og slet ethvert QSO (med bekræftelse ved sletning).
- Fornuftige standardværdier: dagens UTC-dato/-tid forudfyldt, modulation-afhængige RST-standarder (59 for fonimoder, 599 for CW/digital), klæbrigt bånd og modulation på tværs af på hinanden følgende QSO.
- Live duplikat-kaldesignal-indikator (informativ — duplikater er tilladt).
- Landeflagskolonne afledt af kaldesignalets præfiks (dækker ≥99 % af almindelige amatørradiopræfikser, inklusive portable kaldesignaler som `9A/M0NCG`).
- Locale-bevidst datovisning i QSO-tabellen; ISO-lagring og ADIF-output forbliver uændret.
- Dag/nat-temaer (dag er standard; skift findes i headeren).
- Mobilvenligt responsivt layout med berøringsvenlige knapper.
- Virker helt offline — ingen netværksanmodninger på noget tidspunkt.
- Kan installeres som PWA (Tilføj til startskærm / Installer app), når den hostes via HTTPS.
- Brugerflade tilgængelig på **28 sprog** (engelsk plus 22 latinske, 5 kyrilliske og græsk); vælger med flagemoji i headeren.

## Kom i gang

Åbn blot `index.html` i en moderne browser. Ingen build, ingen installation, ingen server.

Hvis du vil hoste den, læg de statiske filer (`index.html`, `style.css`, `app.js`, `favicon.svg`, `manifest.webmanifest`, `service-worker.js` og mappen `i18n/` med de 28 oversættelsesfiler) på en hvilken som helst statisk vært (GitHub Pages, Netlify, din egen webserver). Den virker også over `file://` — service-worker-registreringen springes automatisk over for `file:`-protokollen, så åbning af `index.html` direkte fra disken stadig fungerer rent.

Når den serveres over HTTPS, bliver appen installerbar som PWA (via browserens *Installer app* / *Tilføj til startskærm*-menu) og fungerer offline efter første besøg takket være en cache-first service worker, der forhåndscacher hver statisk fil (UI + alle oversættelser).

En standardlogbog oprettes automatisk ved første besøg, så du kan begynde at logge straks.

## Installer som PWA på mobilen

Når appen serveres over HTTPS (f.eks. GitHub Pages), kan du installere den på telefonens startskærm, så den kører i fuld skærm uden browser-chrome. Efter første start cacher service workeren alt, så efterfølgende starter fungerer helt offline.

### iOS (kun Safari)

På iOS kan kun Safari installere PWA'er — tredjepartsbrowsere kan ikke.

1. Åbn webstedet i **Safari**.
2. Tryk på **Del**-knappen.
3. Vælg **Tilføj til hjemskærm**, derefter **Tilføj**.

Gennemgang:

![iOS-installation gennemgang](media/iOS_add_to_home_screen.gif)

Kilde i højere kvalitet: [media/iOS_add_to_home_screen.mp4](media/iOS_add_to_home_screen.mp4).

### Android (Chrome / Edge / Firefox)

1. Åbn webstedet i din browser. En *Installer app*-prompt vises måske automatisk.
2. Ellers åbn **⋮-menuen** → **Installer app** (eller **Tilføj til startskærm** i ældre versioner).

Gennemgang:

![Android-installation gennemgang](media/Android_add_to_home_screen.gif)

Kilde i højere kvalitet: [media/Android_add_to_home_screen.mp4](media/Android_add_to_home_screen.mp4).

## Logbøger

- **Opret:** skriv et navn i *Logbogsnavn* og send. Hvis du lader navnet være tomt, er standarden `Log YYYY-MM-DD HH:MM UTC`.
- **Skift:** klik på en hvilken som helst logbog i sidepanelet.
- **Omdøb:** klik på *Omdøb* i logbogens header. Tryk Enter for at gemme, Escape for at annullere.
- **Slet:** klik på *Slet logbog*. Du bedes bekræfte. Hvis du sletter den sidste logbog, oprettes automatisk en ny.

## QSO

- Udfyld formularen og tryk på **Log QSO**.
- Kaldesignalet konverteres automatisk til store bogstaver, mens du skriver.
- Dato og tid forudfyldes til *nu* i UTC og nulstilles efter hver logget QSO; du kan stadig indtaste en hvilken som helst værdi.
- Bånd og modulation forbliver på tværs af QSO'er i samme session, så du ikke behøver at vælge igen for hver kontakt.
- RST sendt / RST modtaget falder, hvis efterladt tomt, tilbage til **59** for fonimoder (SSB/FM/AM/DIGITALVOICE) og til **599** for CW og digitale moder (CW/FT8/FT4/RTTY/PSK31/JT65).
- En *Duplikat i denne log*-chip vises under kaldesignalsfeltet, hvis kaldesignalet allerede findes i den aktuelle logbog. Duplikater blokeres *ikke*.
- **Rediger en QSO** med *Rediger*-knappen i rækken. Formularen skifter til *Opdater QSO*-tilstand, rækken fremhæves, og en *Annuller*-knap vises. Skift af logbog eller sletning af loggen annullerer redigeringen automatisk.
- **Slet en QSO** med *Slet*-knappen i rækken (beder om bekræftelse).

## ADIF-import og -eksport

- **Eksport**: klik på *Eksportér .adi* i logbogens header. En fil downloades med `ADIF_VER 3.1.4` og `PROGRAMID local-qso` i headeren. Hver post mapper `CALL`, `QSO_DATE`, `TIME_ON`, `BAND`, `MODE`, `RST_SENT`, `RST_RCVD`.
- **Import**: klik på *Importér .adi-fil* under formularen for at oprette logbog og vælg en `.adi`/`.adif`-fil. En ny logbog oprettes med navnet `Importeret YYYY-MM-DD HH:MM UTC`. Import flettes aldrig ind i en eksisterende logbog.
- Feltlængdetal behandles som tegnantal, hvilket fungerer for ASCII-ADIF (alle standard QSO-felter). Multi-byte-indhold i ikke-væsentlige tekstfelter parses muligvis ikke korrekt.

## Privatliv og data

- Alle data gemmes i browserens `localStorage` under nøglen `local-qso:v1`.
- Intet overføres nogen steder. Ingen backend, intet API-kald, ingen telemetri, ingen analyse.
- Rydning af webstedsdata, brug af privat/inkognito-tilstand eller brug af en anden browser/enhed betyder en frisk tom logbog — brug *Eksportér .adi* til backup.

## Brugerfladesprog

En sprogvælger i headeren dækker **28 sprog**. Vælg et, og resten af brugerfladen gengives med det samme; dit valg gemmes sammen med dine logs og respekteres ved næste besøg. Engelsk er standard.

Tilgængelige sprog (flagemoji + modersmålsnavn; ordnet alfabetisk inden for hver skrift):

🇺🇸 English · 🇨🇿 Čeština · 🇩🇰 Dansk · 🇩🇪 Deutsch · 🇪🇪 Eesti · 🇪🇸 Español · 🇫🇷 Français · 🇮🇪 Gaeilge · 🇭🇷 Hrvatski · 🇮🇹 Italiano · 🇱🇻 Latviešu · 🇱🇹 Lietuvių · 🇭🇺 Magyar · 🇳🇱 Nederlands · 🇳🇴 Norsk · 🇵🇱 Polski · 🇵🇹 Português · 🇷🇴 Română · 🇸🇰 Slovenčina · 🇸🇮 Slovenščina · 🇫🇮 Suomi · 🇸🇪 Svenska · 🇧🇾 Беларуская · 🇧🇬 Български · 🇷🇺 Русский · 🇷🇸 Српски · 🇺🇦 Українська · 🇬🇷 Ελληνικά

Universelle tekniske mærkater forbliver i deres kanoniske form på alle sprog: båndnavne (`20m`, `70cm`, …), ADIF-modkoder (`SSB`, `FT8`, `CW`, …), `QSO`, `RST`, `UTC` og ISO-landekoder.

Mangler en streng på dit sprog? Hvert sprog er en lille fil under [`i18n/`](i18n/) — kopier `i18n/en.js`, oversæt værdierne, gem som `i18n/<kode>.js`, tilføj derefter et `<script>`-tag plus en `<select>`-option i `index.html` og koden i `SUPPORTED_LANGS` i `app.js`.

## Temaer

Tema-skifteren i headeren skifter mellem dag (standard) og nat. Præferencen gemmes sammen med dine logs og respekteres ved næste besøg. Native dato-/tidsvælgere følger temaet via `color-scheme`.

## Tekniske noter

- Single-page-app, ren HTML + CSS + JavaScript. Ingen frameworks, ingen build, ingen afhængigheder.
- Kildefiler:
  - `index.html` — markup og meta-tags.
  - `style.css` — temaer og layout (dag/nat-variabler, mobile media queries).
  - `app.js` — tilstand, persistens, rendering, ADIF-parser/serializer, opslag af kaldesignal-præfiks → land.
  - `favicon.svg` — inline SVG-favicon.
  - `manifest.webmanifest` — Web App Manifest (navn, tema-farve, scope, ikon), så appen kan installeres som PWA på mobil og desktop.
  - `service-worker.js` — cache-first service worker, der ved installation forhåndscacher hver statisk fil, ved aktivering udsletter gamle caches og holder appen fuldt offline efter første besøg. Registreringen springes automatisk over for `file://`-protokollen, så åbning af `index.html` direkte fra disken forbliver ren.
  - `i18n/<lang>.js` — en oversættelsesfil pr. understøttet sprog (i alt 28). Hver er en lille IIFE, der tildeler `window.I18N[<lang>]` et fladt nøgle→streng-kort. `t()` og `applyLanguage()` i `app.js` håndterer opslag (med engelsk fallback) og gennemgår DOM'en for at opdatere hvert `[data-i18n*]`-element.
- Testet på nyere Chromium, Firefox og Safari (desktop + iOS).

## Krediteringer

Bygget af [YL3IM](https://www.qrz.com/db/YL3IM).

Landeflag bygger på Unicode regional-indikator-sekvenser. De gengives korrekt på macOS, iOS, Linux (med en flag-kapabel emoji-skrifttype) og Android. Windows indeholder ingen system-flag-skrifttype, så flagemoji kan dér vises som bogstavpar.
