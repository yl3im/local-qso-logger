# Local QSO Logger

## Les på ditt språk

🇺🇸 [English](README.md) · 🇨🇿 [Čeština](README.cs.md) · 🇩🇰 [Dansk](README.da.md) · 🇩🇪 [Deutsch](README.de.md) · 🇪🇪 [Eesti](README.et.md) · 🇪🇸 [Español](README.es.md) · 🇫🇷 [Français](README.fr.md) · 🇮🇪 [Gaeilge](README.ga.md) · 🇭🇷 [Hrvatski](README.hr.md) · 🇮🇹 [Italiano](README.it.md) · 🇱🇻 [Latviešu](README.lv.md) · 🇱🇹 [Lietuvių](README.lt.md) · 🇭🇺 [Magyar](README.hu.md) · 🇳🇱 [Nederlands](README.nl.md) · 🇳🇴 Norsk · 🇵🇱 [Polski](README.pl.md) · 🇵🇹 [Português](README.pt.md) · 🇷🇴 [Română](README.ro.md) · 🇸🇰 [Slovenčina](README.sk.md) · 🇸🇮 [Slovenščina](README.sl.md) · 🇫🇮 [Suomi](README.fi.md) · 🇸🇪 [Svenska](README.sv.md) · 🇧🇾 [Беларуская](README.be.md) · 🇧🇬 [Български](README.bg.md) · 🇷🇺 [Русский](README.ru.md) · 🇷🇸 [Српски](README.sr.md) · 🇺🇦 [Українська](README.uk.md) · 🇬🇷 [Ελληνικά](README.el.md)

En personvernvennlig amatørradio-QSO-logger som kjører helt i nettleseren din. Ingen konto, ingen server, ingen sporing, ingen analyse — loggbøkene dine ligger kun i nettleserens `localStorage` og forlater aldri enheten din.

Av [YL3IM](https://www.qrz.com/db/YL3IM). Prosjektets nettsted: [qso.ham.lv](https://qso.ham.lv).

![Local QSO Logger på iPad](media/iPad.png)

## Innhold

- [Les på ditt språk](#les-på-ditt-språk)
- [Funksjoner](#funksjoner)
- [Kom i gang](#kom-i-gang)
- [Installer som PWA på mobil](#installer-som-pwa-på-mobil)
  - [iOS (bare Safari)](#ios-bare-safari)
  - [Android (Chrome / Edge / Firefox)](#android-chrome--edge--firefox)
- [Loggbøker](#loggbøker)
- [QSO](#qso)
- [ADIF import og eksport](#adif-import-og-eksport)
- [Personvern og data](#personvern-og-data)
- [Grensesnittspråk](#grensesnittspråk)
- [Temaer](#temaer)
- [Tekniske notater](#tekniske-notater)
- [Krediteringer](#krediteringer)

## Funksjoner

- Flere loggbøker, hver med sin egen liste over QSO.
- Loggbokshandlinger: opprett, gi nytt navn, slett, importer fra ADIF, eksporter til ADIF (`.adi`).
- QSO-felter: kallesignal, UTC dato, UTC tid, bånd, modus, RST sendt, RST mottatt.
- Rediger og slett hvilken som helst QSO (med bekreftelse ved sletting).
- Fornuftige standardverdier: dagens UTC dato/tid forhåndsutfylt, modus-avhengige RST-standarder (59 for talemoduser, 599 for CW/digital), klebrig bånd og modus mellom påfølgende QSO.
- Sanntids duplikat-kallesignal-indikator (informativ — duplikater er tillatt).
- Landflagg-kolonne avledet fra kallesignal-prefiks (dekker ≥99 % av vanlige amatørradio-prefikser, inkludert portable kallesignaler som `9A/M0NCG`).
- Locale-bevisst datovisning i QSO-tabellen; ISO-lagring og ADIF-utgang forblir uendret.
- Dag-/nattemaer (dag som standard; bryteren er i toppfeltet).
- Mobilvennlig responsivt oppsett med berøringsvennlige knapper.
- Fungerer helt offline — ingen nettverksforespørsler.
- Kan installeres som PWA (Legg til på startskjermen / Installer app) når den hostes via HTTPS.
- Grensesnitt tilgjengelig på **28 språk** (engelsk pluss 22 latinske, 5 kyrilliske og gresk); velger med flaggemoji i toppfeltet.

## Kom i gang

Bare åpne `index.html` i en moderne nettleser. Ingen build, ingen installasjon, ingen server.

Hvis du vil hoste den, legg de statiske filene (`index.html`, `style.css`, `app.js`, `favicon.svg`, `manifest.webmanifest`, `service-worker.js` og `i18n/`-katalogen med de 28 oversettelsesfilene) på en hvilken som helst statisk vert (GitHub Pages, Netlify, din egen webserver). Vil også fungere over `file://` — service-worker-registreringen hoppes automatisk over på `file:`-protokollen, så å åpne `index.html` direkte fra disk fungerer rent.

Når den serveres over HTTPS, blir appen installerbar som PWA (via nettleserens *Installer app* / *Legg til på startskjermen*-meny) og fungerer offline etter første besøk takket være en cache-first service worker som forhåndsbufrer hver statisk fil (UI + alle oversettelser).

En standardloggbok opprettes automatisk ved første besøk, slik at du kan begynne å logge umiddelbart.

## Installer som PWA på mobil

Når appen serveres via HTTPS (f.eks. GitHub Pages), kan du installere den på telefonens startskjerm slik at den kjører i fullskjerm uten nettleser-chrome. Etter første lansering bufrer service workeren alt, så påfølgende lanseringer fungerer helt offline.

### iOS (bare Safari)

På iOS kan kun Safari installere PWA-er — tredjeparts nettlesere kan ikke.

1. Åpne siden i **Safari**.
2. Trykk på **Del**-knappen.
3. Velg **Legg til på Hjem-skjerm**, deretter **Legg til**.

Gjennomgang:

![iOS installasjonsgjennomgang](media/iOS_add_to_home_screen.gif)

Kilde i høyere kvalitet: [media/iOS_add_to_home_screen.mp4](media/iOS_add_to_home_screen.mp4).

### Android (Chrome / Edge / Firefox)

1. Åpne siden i nettleseren din. En *Installer app*-melding kan dukke opp automatisk.
2. Ellers åpne **⋮-menyen** → **Installer app** (eller **Legg til på startskjermen** i eldre versjoner).

Gjennomgang:

![Android installasjonsgjennomgang](media/Android_add_to_home_screen.gif)

Kilde i høyere kvalitet: [media/Android_add_to_home_screen.mp4](media/Android_add_to_home_screen.mp4).

## Loggbøker

- **Opprett:** skriv et navn i *Loggboknavn* og send inn. Hvis du lar navnet være tomt, er standarden `Log YYYY-MM-DD HH:MM UTC`.
- **Bytt:** klikk på en hvilken som helst loggbok i sidemenyen.
- **Gi nytt navn:** klikk på *Gi nytt navn* i loggbokens topptekst. Enter lagrer, Escape avbryter.
- **Slett:** klikk på *Slett loggbok*. Du blir bedt om å bekrefte. Hvis du sletter den siste loggboken, opprettes en ny automatisk.

## QSO

- Fyll ut skjemaet og trykk **Logg QSO**.
- Kallesignalet konverteres automatisk til store bokstaver mens du skriver.
- Dato og tid forhåndsutfylles til *nå* i UTC og tilbakestilles etter hver loggført QSO; du kan fortsatt skrive inn hvilken som helst verdi.
- Bånd og modus vedvarer mellom QSO i samme økt, så du trenger ikke å velge dem på nytt for hver kontakt.
- RST sendt / RST mottatt, hvis stående tomme, faller tilbake til **59** for talemoduser (SSB/FM/AM/DIGITALVOICE) og **599** for CW og digitale moduser (CW/FT8/FT4/RTTY/PSK31/JT65).
- En *Duplikat i denne loggboken*-merkelapp vises under kallesignalfeltet hvis kallesignalet allerede finnes i den nåværende loggboken. Duplikater blokkeres *ikke*.
- **Rediger en QSO** med *Endre*-knappen på raden. Skjemaet bytter til *Oppdater QSO*-modus, raden markeres, og en *Avbryt*-knapp vises. Bytte av loggbok eller sletting av loggen avbryter redigeringen automatisk.
- **Slett en QSO** med *Slett*-knappen på raden (ber om bekreftelse).

## ADIF import og eksport

- **Eksport**: klikk *Eksporter .adi* i loggbokens topptekst. En fil lastes ned med `ADIF_VER 3.1.4` og `PROGRAMID local-qso` i toppteksten. Hver post kobler `CALL`, `QSO_DATE`, `TIME_ON`, `BAND`, `MODE`, `RST_SENT`, `RST_RCVD`.
- **Import**: klikk *Importer .adi-fil* under opprettelse-loggbok-skjemaet og velg en `.adi`/`.adif`-fil. En ny loggbok opprettes med navnet `Importert YYYY-MM-DD HH:MM UTC`. Importer blandes aldri inn i en eksisterende loggbok.
- Feltlengdetelling behandles som tegnantall, som fungerer for ASCII ADIF (alle standard QSO-felter). Flerebytes innhold i ikke-essensielle tekstfelter kan parses rart.

## Personvern og data

- All data lagres i nettleserens `localStorage` under nøkkelen `local-qso:v1`.
- Ingenting overføres noe sted. Ingen backend, ingen API-kall, ingen telemetri, ingen analyse.
- Tømme nettstedsdata, bruke privat/inkognito-modus, eller bruke en annen nettleser/enhet betyder en tom loggbok — bruk *Eksporter .adi* for sikkerhetskopi.

## Grensesnittspråk

En språkvelger i toppfeltet dekker **28 språk**. Velg en og resten av grensesnittet rendres umiddelbart på nytt; valget ditt lagres sammen med loggene dine og respekteres ved neste besøk. Engelsk er standard.

Tilgjengelige språk (flaggemoji + nativt navn; alfabetisk innen hver skrift):

🇺🇸 English · 🇨🇿 Čeština · 🇩🇰 Dansk · 🇩🇪 Deutsch · 🇪🇪 Eesti · 🇪🇸 Español · 🇫🇷 Français · 🇮🇪 Gaeilge · 🇭🇷 Hrvatski · 🇮🇹 Italiano · 🇱🇻 Latviešu · 🇱🇹 Lietuvių · 🇭🇺 Magyar · 🇳🇱 Nederlands · 🇳🇴 Norsk · 🇵🇱 Polski · 🇵🇹 Português · 🇷🇴 Română · 🇸🇰 Slovenčina · 🇸🇮 Slovenščina · 🇫🇮 Suomi · 🇸🇪 Svenska · 🇧🇾 Беларуская · 🇧🇬 Български · 🇷🇺 Русский · 🇷🇸 Српски · 🇺🇦 Українська · 🇬🇷 Ελληνικά

Universelle tekniske merker forblir i sin kanoniske form på alle språk: båndnavn (`20m`, `70cm`, …), ADIF modus-koder (`SSB`, `FT8`, `CW`, …), `QSO`, `RST`, `UTC` og ISO landskoder.

Mangler en streng på ditt språk? Hvert språk er en liten fil under [`i18n/`](i18n/) — kopier `i18n/en.js`, oversett verdiene, lagre som `i18n/<kode>.js`, deretter legg til en `<script>`-tag pluss en `<select>`-option i `index.html` og koden i `SUPPORTED_LANGS` i `app.js`.

## Temaer

Tema-bryteren i toppfeltet bytter mellom dag (standard) og natt. Preferansen lagres sammen med loggene dine og respekteres ved neste besøk. Native dato-/tidsvelgere følger temaet via `color-scheme`.

## Tekniske notater

- Single-page app, ren HTML + CSS + JavaScript. Ingen rammeverk, ingen build, ingen avhengigheter.
- Kildefiler:
  - `index.html` — markup og meta-tags.
  - `style.css` — temaer og oppsett (dag/natt-variabler, mobile media queries).
  - `app.js` — tilstand, persistens, rendering, ADIF-parser/serializer, kallesignal-prefiks → land oppslag.
  - `favicon.svg` — inline SVG favicon.
  - `manifest.webmanifest` — Web App Manifest (navn, tema-farge, scope, ikon) slik at appen kan installeres som PWA på mobil og desktop.
  - `service-worker.js` — cache-first service worker som ved installasjon forhåndsbufrer hver statisk fil, ved aktivering fjerner gamle cacher og holder appen helt offline etter første besøk. Registreringen hoppes automatisk over for `file://`-protokollen, så å åpne `index.html` direkte fra disk forblir rent.
  - `i18n/<lang>.js` — én oversettelsesfil per støttet språk (28 totalt). Hver er en liten IIFE som tildeler `window.I18N[<lang>]` et flatt nøkkel→streng-kart. `t()` og `applyLanguage()` i `app.js` håndterer oppslag (med engelsk fallback) og går gjennom DOM-en for å oppdatere hvert `[data-i18n*]`-element.
- Testet på nyere Chromium, Firefox og Safari (desktop + iOS).

## Krediteringer

Bygget av [YL3IM](https://www.qrz.com/db/YL3IM).

Landflagg er basert på Unicode regional-indikator-sekvenser. De rendres korrekt på macOS, iOS, Linux (med en flagg-kompatibel emoji-skrift) og Android. Windows inneholder ikke en systemflagg-skrift, så flaggemoji kan vises som bokstavpar der.
