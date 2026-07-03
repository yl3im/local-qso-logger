# Local QSO Logger

## Læs på dit sprog

🇺🇸 [English](README.md) · 🇨🇿 [Čeština](README.cs.md) · 🇩🇰 Dansk · 🇩🇪 [Deutsch](README.de.md) · 🇪🇪 [Eesti](README.et.md) · 🇪🇸 [Español](README.es.md) · 🇫🇷 [Français](README.fr.md) · 🇮🇪 [Gaeilge](README.ga.md) · 🇭🇷 [Hrvatski](README.hr.md) · 🇮🇹 [Italiano](README.it.md) · 🇱🇻 [Latviešu](README.lv.md) · 🇱🇹 [Lietuvių](README.lt.md) · 🇭🇺 [Magyar](README.hu.md) · 🇳🇱 [Nederlands](README.nl.md) · 🇳🇴 [Norsk](README.no.md) · 🇵🇱 [Polski](README.pl.md) · 🇵🇹 [Português](README.pt.md) · 🇷🇴 [Română](README.ro.md) · 🇸🇰 [Slovenčina](README.sk.md) · 🇸🇮 [Slovenščina](README.sl.md) · 🇫🇮 [Suomi](README.fi.md) · 🇸🇪 [Svenska](README.sv.md) · 🇧🇾 [Беларуская](README.be.md) · 🇧🇬 [Български](README.bg.md) · 🇷🇺 [Русский](README.ru.md) · 🇷🇸 [Српски](README.sr.md) · 🇺🇦 [Українська](README.uk.md) · 🇬🇷 [Ελληνικά](README.el.md)

En privatlivsvenlig amatørradio-QSO-logger, der kører helt i din browser. Ingen konto, ingen server, ingen sporing, ingen analyse — dine logbøger lever kun i din browsers `localStorage` og forlader aldrig din enhed.

Af [YL3IM](https://www.qrz.com/db/YL3IM). Projektwebsted: [qso.lv](https://qso.lv).

![Local QSO Logger kørende på iPad](media/iPad.png)

## Indhold

- [Læs på dit sprog](#læs-på-dit-sprog)
- [Funktioner](#funktioner)
- [Kom i gang](#kom-i-gang)
- [Installer som PWA på mobil](#installer-som-pwa-på-mobil)
  - [iOS (kun Safari)](#ios-kun-safari)
  - [Android (Chrome / Edge / Firefox)](#android-chrome--edge--firefox)
- [Logbøger](#logbøger)
- [QSO'er](#qsoer)
- [ADIF-import og -eksport](#adif-import-og--eksport)
- [Privatliv og data](#privatliv-og-data)
- [Brugergrænsefladesprog](#brugergrænsefladesprog)
- [Temaer](#temaer)
- [Tekniske bemærkninger](#tekniske-bemærkninger)
- [Tak til](#tak-til)

## Funktioner

- Flere logbøger; hver med sin egen liste over QSO'er.
- Logbogshandlinger: opret, omdøb, slet, importer fra ADIF, eksporter til ADIF (`.adi`).
- QSO-formularen er grupperet i tre blokke: **Stationsdata** (stationens kaldesignal, operatørens kaldesignal, eget gitter) der forbliver klæbrige på tværs af QSO'er; **Driftstilstand** (udbredelsestilstand, satellit, tilstand, satellittilstand, bånd, RX-bånd) med satellitfelter, der kun vises når udbredelsestilstanden er *Satellit*; og **QSO-data** (kontaktet kaldesignal, kontaktet gitter, UTC-dato/-tid ved redigering, kommentar, RST sendt, RST modtaget).
- Komplet ADIF `MODE` → `SUBMODE`-taksonomi i tilstandsdropdownen — vælg en overordnet tilstand (`SSB`, `MFSK`, …) eller gå direkte til en specifik undertilstand (`USB`, `FT4`, …); appen gemmer begge felter per ADIF, og tabellen viser den specifikke undertilstand når der er en.
- Komplet ADIF-udbredelsestilstandsopregning (SAT, RPT, EME, ES, MS, Aurora osv.) som dropdown.
- Komplet AMSAT-satellitkatalog (~110 satellitter) og et to-niveau **Satellittilstand**-dropdown: foretrukne tocifrede uplink/downlink-koder øverst (LU, LV, SX, UU, UV, VA, VU, VV) og de ældre enkeltbogstavsbetegnelser (A/B/J/K/L/R/S/T/U/V/W/X) grupperet som *forældet* nedenunder. Valg af satellittilstand justerer automatisk uplink `BAND` og downlink `RX band`.
- Rediger og slet ethvert QSO (med bekræftelse ved sletning).
- Fornuftige standarder: UTC-dato/-tid forudfyldt til *nu*, tilstandsbevidste RST-standarder (59 for stemmetilstande, 599 for CW/digitalt), klæbrige stationsdata + bånd + tilstand + udbredelsestilstand på tværs af på hinanden følgende QSO'er (kun per-kontaktfelterne — kaldesignal, deres gitter, kommentar, RST — ryddes efter hvert *Log QSO*).
- Live duplikat-kaldesignalindikator (informativ — dubletter er tilladt).
- Landeflag-kolonne afledt af kaldesignalpræfikset (dækker ≥99 % af almindelige amatørradiopræfikser, herunder bærbare kald som `9A/M0NCG`).
- Lokalitetssensitiv datovisning i QSO-tabellen; ISO-lagring og ADIF-output forbliver uændrede.
- Grænsefladen er tilgængelig på **28 sprog** (engelsk plus 22 latin-skrift, 5 kyrillisk-skrift og græsk); flagemoji-præfikseret vælger i overskriften.
- Dag-/nattetemaer (dag er standard; skifteren er i overskriften).
- Mobilvenligt responsivt layout med berøringsstørrede knapper.
- Fungerer fuldt offline — ingen netværksanmodninger på noget tidspunkt.
- Kan installeres som PWA (Føj til startskærm / Installer app) ved hosting over HTTPS.

## Kom i gang

Åbn blot `index.html` i en moderne browser. Intet byggetrin, ingen installation, ingen server.

Hvis du vil hoste det, drop de statiske filer (`index.html`, `style.css`, `app.js`, `favicon.svg`, `manifest.webmanifest`, `service-worker.js` og mappen `i18n/` med 28 oversættelsesfiler) på en statisk host (GitHub Pages, Netlify, din egen webserver). Det virker også over `file://` — service worker-registreringen springes automatisk over på `file:`-protokollen, så åbning af `index.html` direkte fra disk stadig fungerer rent.

Når det hostes over HTTPS, bliver appen installerbar som PWA (browserens *Installer app* / *Føj til startskærm*-menu) og virker offline efter første besøg takket være en cache-first service worker, der forhåndscacher alle statiske filer (UI + alle oversættelser).

En standardlogbog oprettes automatisk ved første besøg, så du kan begynde at logge med det samme.

## Installer som PWA på mobil

Når appen hostes over HTTPS (f.eks. GitHub Pages), kan du installere den på din telefons startskærm, så den kører i fuld skærm uden browserkrom. Efter første start cacher service workeren alt, så efterfølgende starter fungerer fuldt offline.

### iOS (kun Safari)

På iOS kan kun Safari installere PWA'er — tredjepartsbrowsere kan ikke.

1. Åbn siden i **Safari**.
2. Tryk på **Del**-knappen.
3. Vælg **Føj til hjemmeskærm**, derefter **Tilføj**.

Gennemgang:

![iOS-installationsgennemgang](media/iOS_add_to_home_screen.gif)

Højere kvalitetskilde: [media/iOS_add_to_home_screen.mp4](media/iOS_add_to_home_screen.mp4).

### Android (Chrome / Edge / Firefox)

1. Åbn siden i din browser. En *Installer app*-prompt vises muligvis automatisk.
2. Ellers åbn **⋮-menuen** → **Installer app** (eller **Føj til startskærm** på ældre versioner).

Gennemgang:

![Android-installationsgennemgang](media/Android_add_to_home_screen.gif)

Højere kvalitetskilde: [media/Android_add_to_home_screen.mp4](media/Android_add_to_home_screen.mp4).

## Logbøger

- **Opret:** skriv et navn i *Lognavn* og indsend. Hvis du lader navnet stå tomt, bruges `Log YYYY-MM-DD HH:MM UTC` som standard.
- **Skift:** klik på en logbog i sidebjælken.
- **Omdøb:** klik på *Omdøb* i logbogsoverskriften. Tryk Enter for at gemme, Escape for at annullere.
- **Slet:** klik på *Slet log*. Du bliver bedt om at bekræfte. Hvis du sletter den sidste logbog, oprettes en ny automatisk.

## QSO'er

- Udfyld formularen og tryk **Log QSO**.
- Formularen er organiseret i tre blokke:
  - **Stationsdata** — *Stationens kaldesignal* (dit sendekaldesignal, ADIF `STATION_CALLSIGN`), *Operatør* (den individuelle operatørs kaldesignal — adskilt fra *Stationens kaldesignal* når en gæsteoperatør er ved mikrofonen på en klubstation; ADIF `OPERATOR`) og *Mit gitter* (ADIF `MY_GRIDSQUARE`). Disse forbliver klæbrige på tværs af QSO'er i samme session — sæt dem én gang, og de overføres.
  - **Driftstilstand** — *Udbredelsestilstand*, *Tilstand*, *Bånd*, plus de satellit-only felter *Satellit* / *Satellittilstand* / *RX-bånd* når udbredelsestilstanden er *Satellit*. Bånd, tilstand og udbredelsestilstand er klæbrige ligesom stationsdata.
  - **QSO-data** — per-kontaktfelter: *Kaldesignal*, *Gitter* (den anden stations Maidenhead), *Kommentar* (ADIF `COMMENT`), *RST sendt*, *RST modtaget*. Ved redigering af et eksisterende QSO vises *Dato (UTC)* og *Tid (UTC)* også i denne blok. Disse felter ryddes efter hvert *Log QSO*.
- Alle kaldesignaler (kontaktet, station, operatør) skrives automatisk med store bogstaver mens du skriver; begge gitterfelter gør det samme.
- Dato og tid forudfyldes til *nu* i UTC ved indsendelse; ved redigering kan du skrive en hvilken som helst værdi.
- RST sendt / RST modtaget, hvis de efterlades tomme, er standard **59** for stemmetilstande (SSB/FM/DIGITALVOICE) og **599** for CW og digitale tilstande (CW/FT8/FT4/RTTY/PSK31/JT65). Standarden følger den overordnede MODE, så valg af en specifik undertilstand som *USB* eller *FT4* giver stadig den rigtige standard.
- En *Duplikat i denne log*-chip vises under kaldesignalfeltet hvis kaldet allerede findes i den aktuelle logbog. Dubletter er *ikke* blokeret.
- **Udbredelsestilstand** — valgfri dropdown over ADIF-udbredelsestilstande (SAT, RPT, EME, F2, Es, MS, LOS osv.). Lad den stå tom for normale HF-terrestriske QSO'er.
- **Satellit-QSO'er** — valg af udbredelsestilstanden *Satellit* afslører tre satellit-only felter: **Satellit** (dropdown med ~110 AMSAT-registrerede satellitter), **Satellittilstand** (AMSAT-bogstavsbetegnelser, grupperet som *moderne* tocifrede uplink/downlink-koder øverst og *forældede* enkeltbogstavskoder nedenunder) og **RX-bånd** (downlink-bånd). Satellit, satellittilstand og RX-bånd er påkrævet — browseren afviser indsendelse uden dem. Valg af en **Satellittilstand** udfylder automatisk det primære **Bånd** med uplink-båndet og **RX-bånd** med downlink-båndet (f.eks. tilstand J → 2m uplink, 70cm downlink). At skifte *tilbage* til satellit fra en anden udbredelsestilstand nulstiller satellittilstanden, så du bliver bedt om at vælge en ny. Ikke-satellit-QSO'er bærer aldrig satellit-only felter; skift af et eksisterende QSO fra satellit til en anden udbredelsestilstand fjerner dem rent. **Gitter** og **Mit gitter** er generelle felter (også nyttige til VHF/UHF-gitterkonkurrencer) og forbliver synlige for alle QSO'er.
- **Rediger et QSO** med knappen *Rediger* på rækken. Formularen skifter til *Opdater QSO*-tilstand, rækken fremhæves, og en *Annuller*-knap vises. Skift af logbøger eller sletning af loggen annullerer redigeringen automatisk.
- **Slet et QSO** med knappen *Slet* på rækken (beder om bekræftelse).

## ADIF-import og -eksport

- **Eksport**: klik på *Eksporter .adi* i logbogsoverskriften. En fil downloades i overensstemmelse med **ADIF 3.1.7**. Overskriften erklærer `ADIF_VER 3.1.7`, `PROGRAMID local-qso`, `PROGRAMVERSION` og `CREATED_TIMESTAMP` (UTC). Per-QSO-felter udsendt (når ikke-tomme): `CALL`, `QSO_DATE`, `TIME_ON`, `BAND`, `MODE`, `SUBMODE`, `PROP_MODE`, `GRIDSQUARE`, `BAND_RX`, `SAT_MODE`, `SAT_NAME`, `RST_SENT`, `RST_RCVD`, `COMMENT`, `STATION_CALLSIGN`, `OPERATOR`, `MY_GRIDSQUARE` — efterfulgt af hvert ekstra ADIF-felt bevaret ved import (se nedenfor).
- **Import**: klik på *Importer .adi-fil* under Opret-logbog-formularen og vælg en `.adi` / `.adif`-fil. En ny logbog oprettes fra den, navngivet `Imported YYYY-MM-DD HH:MM UTC`. Import flettes aldrig ind i en eksisterende logbog.
- **Tabsfri overførsel**: ved import bevares ethvert ADIF-felt, som appen ikke modellerer i sin brugergrænseflade (f.eks. `NAME`, `FREQ`, `TX_PWR`, `DXCC`, `QSL_SENT`/`QSL_RCVD`, `POTA_REF`, `APP_*`-felter) på QSO'et og genudsender det ordret ved næste eksport. Eksport af en fil der selv var importeret bevarer således alt.
- Feltlængde behandles som et UTF-8-byteantal som specifikationen kræver, så flerbyte-tekst (f.eks. accenterede tegn i `COMMENT`) parses korrekt.

## Privatliv og data

- Alle data gemmes i din browsers `localStorage` under nøglen `local-qso:v1`.
- Intet overføres nogetsteds. Der er ingen backend, intet API-kald, ingen telemetri, ingen analyse.
- Rydning af browserens sitedata, brug af privat/inkognito-tilstand eller en anden browser/enhed medfører en ny tom logbog — brug *Eksporter .adi* til sikkerhedskopiering.

## Brugergrænsefladesprog

En sprogselector i overskriften dækker **28 sprog**. Vælg et, og resten af grænsefladen gengives øjeblikkeligt; dit valg gemmes ved siden af dine logs og respekteres ved næste besøg. Engelsk er standard.

Tilgængelige sprog (flagemoji + modersmålsnavn; alfabetisk ordnet inden for hvert skriftsystem):

🇺🇸 English · 🇨🇿 Čeština · 🇩🇰 Dansk · 🇩🇪 Deutsch · 🇪🇪 Eesti · 🇪🇸 Español · 🇫🇷 Français · 🇮🇪 Gaeilge · 🇭🇷 Hrvatski · 🇮🇹 Italiano · 🇱🇻 Latviešu · 🇱🇹 Lietuvių · 🇭🇺 Magyar · 🇳🇱 Nederlands · 🇳🇴 Norsk · 🇵🇱 Polski · 🇵🇹 Português · 🇷🇴 Română · 🇸🇰 Slovenčina · 🇸🇮 Slovenščina · 🇫🇮 Suomi · 🇸🇪 Svenska · 🇧🇾 Беларуская · 🇧🇬 Български · 🇷🇺 Русский · 🇷🇸 Српски · 🇺🇦 Українська · 🇬🇷 Ελληνικά

Universelle tekniske etiketter forbliver i deres kanoniske form på tværs af alle sprog: bændnavne (`20m`, `70cm`, …), ADIF-tilstandskoder (`SSB`, `FT8`, `CW`, …), `QSO`, `RST`, `UTC` og ISO-landekoder.

Mangler du en streng på dit sprog? Hvert sprog er en enkelt lille fil under [`i18n/`](i18n/) — kopier `i18n/en.js`, oversæt værdierne, gem som `i18n/<code>.js`, tilføj derefter et `<script>`-tag plus en `<select>`-mulighed i `index.html` og koden i `SUPPORTED_LANGS` i `app.js`.

## Temaer

Temaskifteren i overskriften skifter mellem dag (standard) og nat. Præferencen gemmes ved siden af dine logs og respekteres ved næste besøg. Native dato-/tidsvælgere følger temaet via `color-scheme`.

## Tekniske bemærkninger

- Enkeltside-app, vanilla HTML + CSS + JavaScript. Ingen frameworks, intet byggetrin, ingen afhængigheder.
- Kildefiler:
  - `index.html` — markup og meta-tags.
  - `style.css` — temaer og layout (dag/nat-variabler, mobile media queries).
  - `app.js` — tilstand, persistens, gengivelse, ADIF-parser/serializer, kaldesignalpræfiks → landeopslag.
  - `favicon.svg` — inline SVG-favicon.
  - `manifest.webmanifest` — Web App Manifest (navn, temafarve, omfang, ikon) så appen er installerbar som PWA på mobil og desktop.
  - `service-worker.js` — cache-first service worker der forhåndscacher alle statiske filer ved installation, fjerner gamle caches ved aktivering og holder appen fuldt offline efter første besøg. Registreringen springes automatisk over på `file://`-protokollen, så åbning af `index.html` direkte fra disk forbliver rent.
  - `i18n/<lang>.js` — én oversættelsesfil per understøttet sprog (28 i alt). Hver er en lille IIFE der tildeler `window.I18N[<lang>]` et fladt nøgle→streng-kort. `t()` og `applyLanguage()` i `app.js` håndterer opslag (med engelsk fallback) og gennemgår DOM'en og opdaterer hvert `[data-i18n*]`-element.
- Testet på nylige Chromium, Firefox og Safari (desktop + iOS).

## Tak til

Bygget af [YL3IM](https://www.qrz.com/db/YL3IM).

Tak til [A65BR](https://www.qrz.com/db/A65BR) Oleg for de uvurderlige råd der gjorde satellitdelen faktisk brugbar — de moderne tocifrede satellittilstandsbetegnelser, AMSAT-kataloget og uplink/downlink-autojusteringen stammer alle fra hans feedback.

Landsflag bruger Unicode-regionale indikatorsekvenser. De vises korrekt på macOS, iOS, Linux (med en flag-kapabel emoji-font) og Android. Windows inkluderer ikke en systemflagfont, så flagemoji kan vises som bogstavspar der.
