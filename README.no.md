# Local QSO Logger

## Les på ditt språk

🇺🇸 [English](README.md) · 🇨🇿 [Čeština](README.cs.md) · 🇩🇰 [Dansk](README.da.md) · 🇩🇪 [Deutsch](README.de.md) · 🇪🇪 [Eesti](README.et.md) · 🇪🇸 [Español](README.es.md) · 🇫🇷 [Français](README.fr.md) · 🇮🇪 [Gaeilge](README.ga.md) · 🇭🇷 [Hrvatski](README.hr.md) · 🇮🇹 [Italiano](README.it.md) · 🇱🇻 [Latviešu](README.lv.md) · 🇱🇹 [Lietuvių](README.lt.md) · 🇭🇺 [Magyar](README.hu.md) · 🇳🇱 [Nederlands](README.nl.md) · 🇳🇴 Norsk · 🇵🇱 [Polski](README.pl.md) · 🇵🇹 [Português](README.pt.md) · 🇷🇴 [Română](README.ro.md) · 🇸🇰 [Slovenčina](README.sk.md) · 🇸🇮 [Slovenščina](README.sl.md) · 🇫🇮 [Suomi](README.fi.md) · 🇸🇪 [Svenska](README.sv.md) · 🇧🇾 [Беларуская](README.be.md) · 🇧🇬 [Български](README.bg.md) · 🇷🇺 [Русский](README.ru.md) · 🇷🇸 [Српски](README.sr.md) · 🇺🇦 [Українська](README.uk.md) · 🇬🇷 [Ελληνικά](README.el.md)

En personvernvennlig amatørradio-QSO-logger som kjører helt i nettleseren din. Ingen konto, ingen server, ingen sporing, ingen analyse — loggbøkene dine lever bare i nettleserens `localStorage` og forlater aldri enheten din.

Av [YL3IM](https://www.qrz.com/db/YL3IM). Prosjektets nettside: [qso.lv](https://qso.lv).

![Local QSO Logger på iPad](media/iPad.png)

## Innhold

- [Les på ditt språk](#les-på-ditt-språk)
- [Funksjoner](#funksjoner)
- [Kom i gang](#kom-i-gang)
- [Installer som PWA på mobil](#installer-som-pwa-på-mobil)
  - [iOS (kun Safari)](#ios-kun-safari)
  - [Android (Chrome / Edge / Firefox)](#android-chrome--edge--firefox)
- [Loggbøker](#loggbøker)
- [QSO-er](#qso-er)
- [ADIF-import og -eksport](#adif-import-og--eksport)
- [Personvern og data](#personvern-og-data)
- [Grensesnittsspråk](#grensesnittsspråk)
- [Temaer](#temaer)
- [Tekniske merknader](#tekniske-merknader)
- [Takk til](#takk-til)

## Funksjoner

- Flere loggbøker; hver med sin egen QSO-liste.
- Loggbokhandlinger: opprett, omdøp, slett, importer fra ADIF, eksporter til ADIF (`.adi`).
- QSO-skjemaet er gruppert i tre blokker: **Stasjonsdata** (stasjonens kallesignal, operatørens kallesignal, eget rutenett) som forblir klistret mellom QSO-er; **Driftsmodus** (utbredelsesmodus, satellitt, modus, satellittmodus, bånd, RX-bånd) med satellittfelt som bare vises når utbredelsesmodusen er *Satellitt*; og **QSO-data** (kontaktet kallesignal, kontaktet rutenett, UTC-dato/-tid ved redigering, kommentar, RST sendt, RST mottatt).
- Komplett ADIF `MODE` → `SUBMODE` taksonomi i modusdropdown — velg en foreldremodus (`SSB`, `MFSK`, …) eller gå direkte til en spesifikk undermodus (`USB`, `FT4`, …); appen lagrer begge felt per ADIF, og tabellen viser den spesifikke undermodusen når den finnes.
- Komplett ADIF-utbredelsesmodusopplisting (SAT, RPT, EME, ES, MS, Aurora osv.) som dropdown.
- Komplett AMSAT-satelittkatalog (~110 satellitter) og en to-nivå **Satellittmodus**-dropdown: foretrukne tobokstavsuplink/downlink-koder øverst (LU, LV, SX, UU, UV, VA, VU, VV) og de eldre enkeltbokstavsbetegnelsene (A/B/J/K/L/R/S/T/U/V/W/X) gruppert som *utdaterte* nedenfor. Valg av satellittmodus justerer automatisk `BAND` (uplink) og `RX band` (downlink).
- Rediger og slett enhver QSO (med bekreftelse ved sletting).
- Fornuftige standarder: UTC-dato/-tid forhåndsutfylt til *nå*, modusbevisste RST-standarder (59 for talemodusar, 599 for CW/digitalt), klistrete stasjonsdata + bånd + modus + utbredelsesmodus over påfølgende QSO-er (bare per-kontaktfeltene — kallesignal, deres rutenett, kommentar, RST — tømmes etter hver *Logg QSO*).
- Live-duplikatkallesignalindikator (informativ — duplikater er tillatt).
- Landflaggkolonne avledet fra kallesignalprefikset (dekker ≥99 % av vanlige amatørradioprefikser, inkludert bærbare anrop som `9A/M0NCG`).
- Stedsspesifikk datovisning i QSO-tabellen; ISO-lagring og ADIF-utdata forblir uendret.
- Grensesnitt tilgjengelig på **28 språk** (engelsk pluss 22 latinsk skrift, 5 kyrillisk skrift og gresk); flaggemoji-selektor i overskriften.
- Dag-/natttemaer (dag er standard; bryteren er i overskriften).
- Mobilevennlig responsivt oppsett med berøringsstørrelsede knapper.
- Fungerer fullt frakoblet — ingen nettverksforespørsler på noe tidspunkt.
- Kan installeres som PWA (Legg til startskjerm / Installer app) ved hosting over HTTPS.

## Kom i gang

Åpne bare `index.html` i en moderne nettleser. Ingen byggingstrinn, ingen installasjon, ingen server.

Hvis du vil hoste det, legg de statiske filene (`index.html`, `style.css`, `app.js`, `favicon.svg`, `manifest.webmanifest`, `service-worker.js` og mappen `i18n/` med 28 oversettelsesfiler) på en vilkårlig statisk vert (GitHub Pages, Netlify, din egen webserver). Det fungerer også over `file://` — service worker-registreringen hoppes automatisk over på `file:`-protokollen, slik at åpning av `index.html` direkte fra disk fortsatt fungerer rent.

Når det hostes over HTTPS, blir appen installerbar som PWA (nettleserens *Installer app* / *Legg til startskjerm*-meny) og fungerer frakoblet etter første besøk takket være en cache-first service worker som forhåndsbufrer alle statiske filer (UI + alle oversettelser).

En standard loggbok opprettes automatisk ved første besøk, slik at du kan begynne å logge umiddelbart.

## Installer som PWA på mobil

Når appen hostes over HTTPS (f.eks. GitHub Pages), kan du installere den på telefonens startskjerm slik at den kjører i fullskjerm uten nettleserkrom. Etter første oppstart bufrer service workeren alt, slik at påfølgende oppstarter fungerer fullt frakoblet.

### iOS (kun Safari)

På iOS kan kun Safari installere PWA-er — tredjeparts nettlesere kan ikke.

1. Åpne nettstedet i **Safari**.
2. Trykk på **Del**-knappen.
3. Velg **Legg til på hjem-skjermen**, deretter **Legg til**.

Gjennomgang:

![iOS-installasjonsgjennomgang](media/iOS_add_to_home_screen.gif)

Kilde i høyere kvalitet: [media/iOS_add_to_home_screen.mp4](media/iOS_add_to_home_screen.mp4).

### Android (Chrome / Edge / Firefox)

1. Åpne nettstedet i nettleseren. En *Installer app*-melding kan vises automatisk.
2. Ellers åpne **⋮-menyen** → **Installer app** (eller **Legg til startskjerm** på eldre versjoner).

Gjennomgang:

![Android-installasjonsgjennomgang](media/Android_add_to_home_screen.gif)

Kilde i høyere kvalitet: [media/Android_add_to_home_screen.mp4](media/Android_add_to_home_screen.mp4).

## Loggbøker

- **Opprett:** skriv et navn i *Loggnavn* og send inn. Hvis du lar navnet stå tomt, brukes `Log YYYY-MM-DD HH:MM UTC` som standard.
- **Bytt:** klikk på en loggbok i sidefeltet.
- **Omdøp:** klikk på *Omdøp* i loggbokens overskrift. Trykk Enter for å lagre, Escape for å avbryte.
- **Slett:** klikk på *Slett logg*. Du vil bli bedt om å bekrefte. Hvis du sletter den siste loggboken, opprettes en ny automatisk.

## QSO-er

- Fyll ut skjemaet og trykk **Logg QSO**.
- Skjemaet er organisert i tre blokker:
  - **Stasjonsdata** — *Stasjonens kallesignal* (ditt sendingskallesignal, ADIF `STATION_CALLSIGN`), *Operatør* (den individuelle operatørens kallesignal — adskilt fra *stasjonens kallesignal* når en gjesteoperatør er ved mikrofonen til en klubbstasjon; ADIF `OPERATOR`) og *Mitt rutenett* (ADIF `MY_GRIDSQUARE`). Disse forblir klistret over QSO-er i samme økt — angi dem én gang og de overføres.
  - **Driftsmodus** — *Utbredelseesmodus*, *Modus*, *Bånd*, pluss de satellitteksklusivene *Satellitt* / *Satellittmodus* / *RX-bånd* når utbredelsesmodusen er *Satellitt*. Bånd, modus og utbredelsesmodus er klistrete som stasjonsdata.
  - **QSO-data** — per-kontaktfelt: *Kallesignal*, *Rutenett* (den andre stasjonens Maidenhead), *Kommentar* (ADIF `COMMENT`), *RST sendt*, *RST mottatt*. Ved redigering av eksisterende QSO vises *Dato (UTC)* og *Tid (UTC)* også i denne blokken. Disse feltene tømmes etter hver *Logg QSO*.
- Alle kallesignaler (kontaktet, stasjon, operatør) konverteres automatisk til store bokstaver mens du skriver; begge rutenettfeltene gjør det samme.
- Dato og tid forhåndsutfylles til *nå* i UTC ved innsending; ved redigering kan du skrive inn en hvilken som helst verdi.
- RST sendt / RST mottatt, hvis de er tomme, er standard **59** for talemodusar (SSB/FM/DIGITALVOICE) og **599** for CW og digitale modusar (CW/FT8/FT4/RTTY/PSK31/JT65). Standarden følger den overordnede MODE, slik at valg av en spesifikk undermodus som *USB* eller *FT4* fortsatt gir riktig standard.
- En *Duplikat i denne loggen*-chip vises under kallesignalfeltet hvis kallesignalet allerede finnes i gjeldende loggbok. Duplikater er *ikke* blokkert.
- **Utbredelsesmodus** — valgfri dropdown av ADIF-utbredelsesmodusar (SAT, RPT, EME, F2, Es, MS, LOS osv.). La det stå tomt for normale terrestriske HF-QSO-er.
- **Satellitt-QSO-er** — valg av utbredelsesmodus *Satellitt* avslører tre satellitteksklusivfelt: **Satellitt** (dropdown med ~110 AMSAT-registrerte satellitter), **Satellittmodus** (AMSAT-bokstavbetegnelser, gruppert som *moderne* tobokstavs uplink/downlink-koder øverst og *utdaterte* enkeltbokstavskoder nedenfor) og **RX-bånd** (downlinkbånd). Satellitt, satellittmodus og RX-bånd er obligatoriske — nettleseren nekter å sende inn uten dem. Valg av en **Satellittmodus** fyller automatisk ut hoved-**Bånd** med uplink-båndet og **RX-bånd** med downlink-båndet (f.eks. modus J → 2m uplink, 70cm downlink). Å bytte *tilbake* til satellitt fra en annen utbredelsesmodus tilbakestiller satellittmodusen slik at du velger en ny. Ikke-satellitt-QSO-er bærer aldri satellittfelt; å bytte et eksisterende QSO fra satellitt til en annen utbredelsesmodus fjerner dem rent. **Rutenett** og **Mitt rutenett** er generelle felt (også nyttige for VHF/UHF-rutenettkamper) og forblir synlige for alle QSO-er.
- **Rediger en QSO** med *Rediger*-knappen på raden. Skjemaet bytter til *Oppdater QSO*-modus, raden utheves, og en *Avbryt*-knapp vises. Bytte av loggbøker eller sletting av loggen avbryter redigeringen automatisk.
- **Slett en QSO** med *Slett*-knappen på raden (ber om bekreftelse).

## ADIF-import og -eksport

- **Eksport**: klikk på *Eksporter .adi* i loggbokens overskrift. En fil lastes ned som er i samsvar med **ADIF 3.1.7**. Overskriften erklærer `ADIF_VER 3.1.7`, `PROGRAMID local-qso`, `PROGRAMVERSION` og `CREATED_TIMESTAMP` (UTC). Per-QSO-felt utsendt (når ikke-tomme): `CALL`, `QSO_DATE`, `TIME_ON`, `BAND`, `MODE`, `SUBMODE`, `PROP_MODE`, `GRIDSQUARE`, `BAND_RX`, `SAT_MODE`, `SAT_NAME`, `RST_SENT`, `RST_RCVD`, `COMMENT`, `STATION_CALLSIGN`, `OPERATOR`, `MY_GRIDSQUARE` — etterfulgt av hvert ekstra ADIF-felt bevart ved import (se nedenfor).
- **Import**: klikk på *Importer .adi-fil* under loggbokopprettingsskjemaet og velg en `.adi` / `.adif`-fil. En ny loggbok opprettes fra den, kalt `Imported YYYY-MM-DD HH:MM UTC`. Import slår aldri sammen med en eksisterende loggbok.
- **Tapsfri rundtur**: ved import beholdes ethvert ADIF-felt som appen ikke modellerer i sin UI (f.eks. `NAME`, `FREQ`, `TX_PWR`, `DXCC`, `QSL_SENT`/`QSL_RCVD`, `POTA_REF`, `APP_*`-felt) på QSO-en og sendes ut igjen ordrett ved neste eksport. Eksport av en fil som selv var importert bevarer dermed alt.
- Feltlengde behandles som et UTF-8-byteantall som spesifikasjonen krever, slik at flerbytetekst (f.eks. aksentuerte tegn i `COMMENT`) tolkes korrekt.

## Personvern og data

- Alle data lagres i nettleserens `localStorage` under nøkkelen `local-qso:v1`.
- Ingenting overføres noe sted. Det er ingen backend, ingen API-anrop, ingen telemetri, ingen analyse.
- Sletting av nettstedets nettleserdata, bruk av privat/inkognitomodus eller en annen nettleser/enhet betyr en ny tom loggbok — bruk *Eksporter .adi* for sikkerhetskopiering.

## Grensesnittsspråk

En språkvelger i overskriften dekker **28 språk**. Velg ett og resten av grensesnittet gjengis umiddelbart; valget ditt lagres ved siden av loggene dine og respekteres ved neste besøk. Engelsk er standard.

Tilgjengelige språk (flaggemoji + innfødt navn; alfabetisk ordnet innen hvert skriftsystem):

🇺🇸 English · 🇨🇿 Čeština · 🇩🇰 Dansk · 🇩🇪 Deutsch · 🇪🇪 Eesti · 🇪🇸 Español · 🇫🇷 Français · 🇮🇪 Gaeilge · 🇭🇷 Hrvatski · 🇮🇹 Italiano · 🇱🇻 Latviešu · 🇱🇹 Lietuvių · 🇭🇺 Magyar · 🇳🇱 Nederlands · 🇳🇴 Norsk · 🇵🇱 Polski · 🇵🇹 Português · 🇷🇴 Română · 🇸🇰 Slovenčina · 🇸🇮 Slovenščina · 🇫🇮 Suomi · 🇸🇪 Svenska · 🇧🇾 Беларуская · 🇧🇬 Български · 🇷🇺 Русский · 🇷🇸 Српски · 🇺🇦 Українська · 🇬🇷 Ελληνικά

Universelle tekniske etiketter forblir i sin kanoniske form på tvers av alle språk: bandnavn (`20m`, `70cm`, …), ADIF-moduskoder (`SSB`, `FT8`, `CW`, …), `QSO`, `RST`, `UTC` og ISO-landkoder.

Mangler det en streng på ditt språk? Hvert språk er én liten fil under [`i18n/`](i18n/) — kopier `i18n/en.js`, oversett verdiene, lagre som `i18n/<code>.js`, legg deretter til en `<script>`-tagg pluss et `<select>`-alternativ i `index.html` og koden i `SUPPORTED_LANGS` i `app.js`.

## Temaer

Temabryteren i overskriften veksler mellom dag (standard) og natt. Preferansen lagres ved siden av loggene dine og respekteres ved neste besøk. Innebygde dato-/tidvelgere følger temaet via `color-scheme`.

## Tekniske merknader

- Enkeltside-app, vanilla HTML + CSS + JavaScript. Ingen rammeverk, ingen byggingstrinn, ingen avhengigheter.
- Kildefiler:
  - `index.html` — markup og meta-tagger.
  - `style.css` — temaer og oppsett (dag/natt-variabler, mobile mediaspørringer).
  - `app.js` — tilstand, persistens, gjengivelse, ADIF-parser/serializer, kallesignalprefiks → landsoppslag.
  - `favicon.svg` — innebygd SVG-favicon.
  - `manifest.webmanifest` — Web App Manifest (navn, temafarge, omfang, ikon) slik at appen er installerbar som PWA på mobil og desktop.
  - `service-worker.js` — cache-first service worker som forhåndsbufrer alle statiske filer ved installasjon, fjerner gamle buffere ved aktivering, og holder appen fullt frakoblet etter første besøk. Registreringen hoppes automatisk over på `file://`-protokollen slik at åpning av `index.html` direkte fra disk forblir rent.
  - `i18n/<lang>.js` — én oversettelsesfil per støttet språk (28 totalt). Hver er en liten IIFE som tildeler `window.I18N[<lang>]` et flatt nøkkel→streng-kart. `t()` og `applyLanguage()` i `app.js` håndterer oppslag (med engelsk reserve) og går gjennom DOM-en og oppdaterer hvert `[data-i18n*]`-element.
- Testet på nylige Chromium, Firefox og Safari (stasjonær + iOS).

## Takk til

Bygget av [YL3IM](https://www.qrz.com/db/YL3IM).

Takk til [A65BR](https://www.qrz.com/db/A65BR) Oleg for de uvurderlige tipsene som gjorde satelittdelen faktisk brukbar — de moderne tobokstavs satellittmodusbetegnelsene, AMSAT-katalogen og den automatiske uplink/downlink-justeringen stammer alle fra hans tilbakemeldinger.

Landsflagg bruker Unicode regionale indikatorsekvenser. De vises riktig på macOS, iOS, Linux (med en flaggkompatibel emoji-font) og Android. Windows inkluderer ikke en systemflaggfont, så flaggemoji kan vises som bokstavpar der.
