# Local QSO Logger

## Läs på ditt språk

🇺🇸 [English](README.md) · 🇨🇿 [Čeština](README.cs.md) · 🇩🇰 [Dansk](README.da.md) · 🇩🇪 [Deutsch](README.de.md) · 🇪🇪 [Eesti](README.et.md) · 🇪🇸 [Español](README.es.md) · 🇫🇷 [Français](README.fr.md) · 🇮🇪 [Gaeilge](README.ga.md) · 🇭🇷 [Hrvatski](README.hr.md) · 🇮🇹 [Italiano](README.it.md) · 🇱🇻 [Latviešu](README.lv.md) · 🇱🇹 [Lietuvių](README.lt.md) · 🇭🇺 [Magyar](README.hu.md) · 🇳🇱 [Nederlands](README.nl.md) · 🇳🇴 [Norsk](README.no.md) · 🇵🇱 [Polski](README.pl.md) · 🇵🇹 [Português](README.pt.md) · 🇷🇴 [Română](README.ro.md) · 🇸🇰 [Slovenčina](README.sk.md) · 🇸🇮 [Slovenščina](README.sl.md) · 🇫🇮 [Suomi](README.fi.md) · 🇸🇪 Svenska · 🇧🇾 [Беларуская](README.be.md) · 🇧🇬 [Български](README.bg.md) · 🇷🇺 [Русский](README.ru.md) · 🇷🇸 [Српски](README.sr.md) · 🇺🇦 [Українська](README.uk.md) · 🇬🇷 [Ελληνικά](README.el.md)

En integritetsvänlig amatörradio-QSO-logg som körs helt i din webbläsare. Inget konto, ingen server, ingen spårning, ingen analys — dina loggböcker finns enbart i webbläsarens `localStorage` och lämnar aldrig din enhet.

Av [YL3IM](https://www.qrz.com/db/YL3IM). Projektets webbplats: [qso.ham.lv](https://qso.ham.lv).

![Local QSO Logger på iPad](media/iPad.png)

## Innehåll

- [Läs på ditt språk](#läs-på-ditt-språk)
- [Funktioner](#funktioner)
- [Kom igång](#kom-igång)
- [Installera som PWA på mobilen](#installera-som-pwa-på-mobilen)
  - [iOS (endast Safari)](#ios-endast-safari)
  - [Android (Chrome / Edge / Firefox)](#android-chrome--edge--firefox)
- [Loggböcker](#loggböcker)
- [QSO](#qso)
- [ADIF import & export](#adif-import--export)
- [Integritet och data](#integritet-och-data)
- [Gränssnittsspråk](#gränssnittsspråk)
- [Teman](#teman)
- [Tekniska anteckningar](#tekniska-anteckningar)
- [Tack](#tack)

## Funktioner

- Flera loggböcker, var och en med sin egen lista över QSO.
- Loggboksåtgärder: skapa, byt namn, ta bort, importera från ADIF, exportera till ADIF (`.adi`).
- QSO-fält: anropssignal, UTC-datum, UTC-tid, band, mod, RST skickat, RST mottaget.
- Redigera och ta bort vilken QSO som helst (med bekräftelse vid borttagning).
- Vettiga standardvärden: dagens UTC-datum/-tid förifylld, mod-beroende RST-standarder (59 för rösttillstånd, 599 för CW/digital), klibbigt band och mod över på varandra följande QSO.
- Realtidsindikator för duplicerad anropssignal (informativ — duplikater är tillåtna).
- Landflaggspalt härledd från anropssignal-prefix (täcker ≥99 % av vanliga amatörradio-prefix, inklusive portable-anropssignaler som `9A/M0NCG`).
- Locale-medveten datumvisning i QSO-tabellen; ISO-lagring och ADIF-utdata förblir oförändrad.
- Dag-/nattteman (dag som standard; växlaren finns i sidhuvudet).
- Mobilvänlig responsiv layout med pekvänliga knappar.
- Fungerar helt offline — inga nätverksbegäranden alls.
- Installerbar som PWA (Lägg till på startskärm / Installera app) när den hostas via HTTPS.
- Gränssnitt tillgängligt på **28 språk** (engelska plus 22 latinska, 5 kyrilliska och grekiska); väljare med flagg-emoji i sidhuvudet.

## Kom igång

Öppna bara `index.html` i en modern webbläsare. Ingen build, ingen installation, ingen server.

För att hosta, placera de statiska filerna (`index.html`, `style.css`, `app.js`, `favicon.svg`, `manifest.webmanifest`, `service-worker.js` och `i18n/`-katalogen med 28 översättningsfiler) på vilken statisk värd som helst (GitHub Pages, Netlify, din egen webbserver). Fungerar också över `file://` — service-worker-registreringen hoppas automatiskt över för `file:`-protokollet, så att öppna `index.html` direkt från disk fungerar rent.

När den serveras via HTTPS blir appen installerbar som PWA (via webbläsarens *Installera app* / *Lägg till på startskärm*-meny) och fungerar offline efter första besöket tack vare en cache-first service worker som förhandscachar varje statisk fil (UI + alla översättningar).

En standardloggbok skapas automatiskt vid första besöket, så att du kan börja logga direkt.

## Installera som PWA på mobilen

När appen serveras via HTTPS (t.ex. GitHub Pages) kan du installera den på telefonens startskärm så att den körs helskärm utan webbläsar-chrome. Efter första starten cachar service workern allt, så att efterföljande starter fungerar helt offline.

### iOS (endast Safari)

På iOS kan endast Safari installera PWAs — tredjepartswebbläsare kan inte.

1. Öppna webbplatsen i **Safari**.
2. Tryck på **Dela**-knappen.
3. Välj **Lägg till på hemskärmen**, sedan **Lägg till**.

Genomgång:

![iOS installationsgenomgång](media/iOS_add_to_home_screen.gif)

Källa i högre kvalitet: [media/iOS_add_to_home_screen.mp4](media/iOS_add_to_home_screen.mp4).

### Android (Chrome / Edge / Firefox)

1. Öppna webbplatsen i din webbläsare. En *Installera app*-uppmaning kan dyka upp automatiskt.
2. Annars öppna **⋮-menyn** → **Installera app** (eller **Lägg till på startskärm** i äldre versioner).

Genomgång:

![Android installationsgenomgång](media/Android_add_to_home_screen.gif)

Källa i högre kvalitet: [media/Android_add_to_home_screen.mp4](media/Android_add_to_home_screen.mp4).

## Loggböcker

- **Skapa:** skriv ett namn i *Loggboksnamn* och skicka. Om du lämnar namnet tomt är standarden `Log YYYY-MM-DD HH:MM UTC`.
- **Växla:** klicka på en loggbok i sidofältet.
- **Byt namn:** klicka på *Byt namn* i loggbokens sidhuvud. Enter sparar, Escape avbryter.
- **Ta bort:** klicka på *Radera loggbok*. Du blir ombedd att bekräfta. Om du tar bort den sista loggboken skapas en ny automatiskt.

## QSO

- Fyll i formuläret och tryck på **Logga QSO**.
- Anropssignalen konverteras automatiskt till versaler när du skriver.
- Datum och tid förfylls till *nu* i UTC och återställs efter varje loggad QSO; du kan fortfarande ange vilket värde som helst.
- Band och mod kvarstår mellan QSO i samma session, så du behöver inte välja om dem för varje kontakt.
- RST skickat / RST mottaget, om de lämnas tomma, faller tillbaka till **59** för rösttillstånd (SSB/FM/AM/DIGITALVOICE) och **599** för CW och digitala tillstånd (CW/FT8/FT4/RTTY/PSK31/JT65).
- En *Dublett i denna loggbok*-chip visas under anropssignalfältet om anropssignalen redan finns i den aktuella loggboken. Dubletter blockeras *inte*.
- **Redigera en QSO** med *Ändra*-knappen på raden. Formuläret växlar till *Uppdatera QSO*-läget, raden markeras, och en *Avbryt*-knapp visas. Att växla loggbok eller ta bort loggen avbryter redigeringen automatiskt.
- **Ta bort en QSO** med *Radera*-knappen på raden (begär bekräftelse).

## ADIF import & export

- **Export**: klicka *Exportera .adi* i loggbokens sidhuvud. En fil laddas ned med `ADIF_VER 3.1.4` och `PROGRAMID local-qso` i headern. Varje post kopplar `CALL`, `QSO_DATE`, `TIME_ON`, `BAND`, `MODE`, `RST_SENT`, `RST_RCVD`.
- **Import**: klicka *Importera .adi-fil* under skapa-loggbok-formuläret och välj en `.adi`/`.adif`-fil. En ny loggbok skapas med namnet `Importerad YYYY-MM-DD HH:MM UTC`. Import blandas aldrig in i en befintlig loggbok.
- Fältlängdsräkning behandlas som teckenantal, vilket fungerar för ASCII ADIF (alla standard-QSO-fält). Multi-byte-innehåll i icke-väsentliga textfält kan parsas konstigt.

## Integritet och data

- All data lagras i webbläsarens `localStorage` under nyckeln `local-qso:v1`.
- Inget överförs någonstans. Ingen backend, inga API-anrop, ingen telemetri, ingen analys.
- Att rensa webbplatsdata, använda privat/inkognito-läge, eller använda en annan webbläsare/enhet betyder en tom loggbok — använd *Exportera .adi* för säkerhetskopiering.

## Gränssnittsspråk

En språkväljare i sidhuvudet täcker **28 språk**. Välj ett och resten av gränssnittet renderas om omedelbart; ditt val sparas tillsammans med dina loggar och respekteras vid nästa besök. Engelska är standard.

Tillgängliga språk (flagg-emoji + nativt namn; alfabetiskt inom varje skrift):

🇺🇸 English · 🇨🇿 Čeština · 🇩🇰 Dansk · 🇩🇪 Deutsch · 🇪🇪 Eesti · 🇪🇸 Español · 🇫🇷 Français · 🇮🇪 Gaeilge · 🇭🇷 Hrvatski · 🇮🇹 Italiano · 🇱🇻 Latviešu · 🇱🇹 Lietuvių · 🇭🇺 Magyar · 🇳🇱 Nederlands · 🇳🇴 Norsk · 🇵🇱 Polski · 🇵🇹 Português · 🇷🇴 Română · 🇸🇰 Slovenčina · 🇸🇮 Slovenščina · 🇫🇮 Suomi · 🇸🇪 Svenska · 🇧🇾 Беларуская · 🇧🇬 Български · 🇷🇺 Русский · 🇷🇸 Српски · 🇺🇦 Українська · 🇬🇷 Ελληνικά

Universella tekniska etiketter förblir i sin kanoniska form på alla språk: bandnamn (`20m`, `70cm`, …), ADIF mod-koder (`SSB`, `FT8`, `CW`, …), `QSO`, `RST`, `UTC` och ISO-landkoder.

Saknas en sträng på ditt språk? Varje språk är en liten fil under [`i18n/`](i18n/) — kopiera `i18n/en.js`, översätt värdena, spara som `i18n/<kod>.js`, lägg sedan till en `<script>`-tagg plus ett `<select>`-alternativ i `index.html` och koden i `SUPPORTED_LANGS` i `app.js`.

## Teman

Tema-växlaren i sidhuvudet växlar mellan dag (standard) och natt. Inställningen sparas tillsammans med dina loggar och respekteras vid nästa besök. Native datum-/tidväljare följer temat via `color-scheme`.

## Tekniska anteckningar

- Single-page-app, ren HTML + CSS + JavaScript. Inga ramverk, ingen build, inga beroenden.
- Källfiler:
  - `index.html` — markup och meta-taggar.
  - `style.css` — teman och layout (dag/natt-variabler, mobile media queries).
  - `app.js` — tillstånd, persistens, rendering, ADIF-parser/serializer, anropssignal-prefix → land-uppslagning.
  - `favicon.svg` — inline SVG-favicon.
  - `manifest.webmanifest` — Web App Manifest (namn, tema-färg, scope, ikon) så att appen kan installeras som PWA på mobil och desktop.
  - `service-worker.js` — cache-first service worker som vid installation förhandscachar varje statisk fil, vid aktivering tar bort gamla cacher och håller appen helt offline efter första besöket. Registreringen hoppas automatiskt över för `file://`-protokollet, så att öppna `index.html` direkt från disk förblir rent.
  - `i18n/<lang>.js` — en översättningsfil per stött språk (28 totalt). Var och en är en liten IIFE som tilldelar `window.I18N[<lang>]` en platt nyckel→sträng-karta. `t()` och `applyLanguage()` i `app.js` hanterar uppslag (med engelska som fallback) och går igenom DOM:en för att uppdatera varje `[data-i18n*]`-element.
- Testad på senare Chromium, Firefox och Safari (desktop + iOS).

## Tack

Byggd av [YL3IM](https://www.qrz.com/db/YL3IM).

Landflaggor bygger på Unicode regional-indikator-sekvenser. De renderas korrekt på macOS, iOS, Linux (med ett flagg-kompatibelt emoji-typsnitt) och Android. Windows innehåller inget systemflaggtypsnitt, så flagg-emoji kan visas som bokstavspar där.
