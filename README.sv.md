# Local QSO Logger

## Läs på ditt språk

🇺🇸 [English](README.md) · 🇨🇿 [Čeština](README.cs.md) · 🇩🇰 [Dansk](README.da.md) · 🇩🇪 [Deutsch](README.de.md) · 🇪🇪 [Eesti](README.et.md) · 🇪🇸 [Español](README.es.md) · 🇫🇷 [Français](README.fr.md) · 🇮🇪 [Gaeilge](README.ga.md) · 🇭🇷 [Hrvatski](README.hr.md) · 🇮🇹 [Italiano](README.it.md) · 🇱🇻 [Latviešu](README.lv.md) · 🇱🇹 [Lietuvių](README.lt.md) · 🇭🇺 [Magyar](README.hu.md) · 🇳🇱 [Nederlands](README.nl.md) · 🇳🇴 [Norsk](README.no.md) · 🇵🇱 [Polski](README.pl.md) · 🇵🇹 [Português](README.pt.md) · 🇷🇴 [Română](README.ro.md) · 🇸🇰 [Slovenčina](README.sk.md) · 🇸🇮 [Slovenščina](README.sl.md) · 🇫🇮 [Suomi](README.fi.md) · 🇸🇪 Svenska · 🇧🇾 [Беларуская](README.be.md) · 🇧🇬 [Български](README.bg.md) · 🇷🇺 [Русский](README.ru.md) · 🇷🇸 [Српски](README.sr.md) · 🇺🇦 [Українська](README.uk.md) · 🇬🇷 [Ελληνικά](README.el.md)

En integritetsrespekterande amatörradio-QSO-loggbok som körs helt i din webbläsare. Inget konto, ingen server, ingen spårning, ingen analys — dina loggböcker lever bara i webbläsarens `localStorage` och lämnar aldrig din enhet.

Av [YL3IM](https://www.qrz.com/db/YL3IM). Projektwebbplats: [qso.lv](https://qso.lv).

![Local QSO Logger running on iPad](media/iPad.png)

## Innehåll

- [Läs på ditt språk](#läs-på-ditt-språk)
- [Funktioner](#funktioner)
- [Kom igång](#kom-igång)
- [Installera som PWA på mobilen](#installera-som-pwa-på-mobilen)
  - [iOS (endast Safari)](#ios-endast-safari)
  - [Android (Chrome / Edge / Firefox)](#android-chrome--edge--firefox)
- [Loggböcker](#loggböcker)
- [QSO-kontakter](#qso-kontakter)
- [ADIF-import och -export](#adif-import-och--export)
- [Integritet och data](#integritet-och-data)
- [Gränssnittsspråk](#gränssnittsspråk)
- [Teman](#teman)
- [Tekniska noter](#tekniska-noter)
- [Tack](#tack)

## Funktioner

- Flera loggböcker; var och en med sin egen lista över QSO-kontakter.
- Loggboksåtgärder: skapa, byta namn, ta bort, importera från ADIF, exportera till ADIF (`.adi`).
- QSO-formuläret grupperat i tre block: **Stationsdata** (stationens anropssignal, operatörens anropssignal, eget rutnät) förblir fast mellan QSO-kontakter; **Driftsläge** (spridningsläge, satellit, läge, satellit-läge, band, RX-band) med satellit-specifika fält som visas bara när spridningsläget är *Satellit*; och **QSO-data** (anropad stations anropssignal, anropat rutnät, datum/tid UTC vid redigering, kommentar, RST skickat, RST mottaget).
- Fullständig ADIF `MODE` → `SUBMODE`-taxonomi i lägesmenyn — välj ett överordnat läge (`SSB`, `MFSK`, …) eller gå direkt till ett specifikt underläge (`USB`, `FT4`, …); appen lagrar båda fälten per ADIF och tabellen visar det specifika underlaget när det finns.
- Fullständig ADIF-spridningslägesenumeration (SAT, RPT, EME, ES, MS, Aurora, osv.) som en rullgardinsmeny.
- Fullständig AMSAT-satellitkatalog (~110 satelliter) och en tvånivås **Sat mode**-rullgardinsmeny: föredragna tvåbokstavsupplänk/nedlänkkoder överst (LU, LV, SX, UU, UV, VA, VU, VV) och äldre enbokstavsbeteckningar (A/B/J/K/L/R/S/T/U/V/W/X) grupperade som *föråldrade* nedtill. Att välja ett satellit-läge justerar automatiskt upplänk `BAND` och nedlänk `RX band`.
- Redigera och ta bort valfri QSO-kontakt (med bekräftelse vid borttagning).
- Rimliga standardvärden: dagens UTC-datum/-tid förifyllt, lägesanpassade RST-standarder (59 för tallägen, 599 för CW/digitala), fast Stationsdata + band + läge + spridningsläge mellan på varandra följande QSO-kontakter (bara per-kontakt-fälten — anropssignal, rutnät, kommentar, RST — rensas efter varje *Logga QSO*).
- Liveindikatorn för dubblettsignal (informativ — dubbletter är tillåtna).
- LandsflAggskolumn härledda från anropssignalprefix (täcker ≥99 % av vanliga amatörradioprefix, inklusive bärbara anrop som `9A/M0NCG`).
- Lokalt datumvisning i QSO-tabellen; lagring och ADIF-utdata förblir i ISO.
- Gränssnitt på **28 språk** (engelska plus 22 latinskrift, 5 kyrilliskrift och grekiska); flaggemojiförsedd selektor i rubriken.
- Dag-/nattteman (dag är standard; växlaren finns i rubriken).
- Mobilanpassad responsiv layout med pekanpassade knappar.
- Fungerar helt offline — inga nätverksförfrågningar någon gång.
- Installerbar som PWA (Lägg till på hemskärmen / Installera app) vid värd över HTTPS.

## Kom igång

Öppna bara `index.html` i en modern webbläsare. Inget byggsteg, ingen installation, ingen server.

Om du vill vara värd för den, placera de statiska filerna (`index.html`, `style.css`, `app.js`, `favicon.svg`, `manifest.webmanifest`, `service-worker.js` och `i18n/`-katalogen med 28 översättningsfiler) på valfri statisk värd (GitHub Pages, Netlify, din egen webbserver). Det fungerar även via `file://` — service worker-registreringen hoppas automatiskt över på `file:`-protokollet så att öppning av `index.html` direkt från disk fortfarande fungerar rent.

Vid värd via HTTPS blir appen installerbar som PWA (webbläsarens *Installera app* / *Lägg till på hemskärmen*-meny) och fungerar offline efter det första besöket tack vare en cache-first-servicearbetare som förcacheterar varje statisk fil (UI + alla översättningar).

En standardloggbok skapas automatiskt vid första besöket, så du kan börja logga omedelbart.

## Installera som PWA på mobilen

När appen är värd via HTTPS (t.ex. GitHub Pages) kan du installera den på telefonens hemskärm så att den körs i helskärm utan webbläsarkrom. Efter den första starten cachar servicearbetaren allt, så efterföljande starter fungerar helt offline.

### iOS (endast Safari)

I iOS kan bara Safari installera PWA — tredjepartswebbläsare kan inte.

1. Öppna webbplatsen i **Safari**.
2. Tryck på **Dela**-knappen.
3. Välj **Lägg till på hemskärmen**, sedan **Lägg till**.

Genomgång:

![iOS install walkthrough](media/iOS_add_to_home_screen.gif)

Källfil med högre kvalitet: [media/iOS_add_to_home_screen.mp4](media/iOS_add_to_home_screen.mp4).

### Android (Chrome / Edge / Firefox)

1. Öppna webbplatsen i din webbläsare. En *Installera app*-prompt kan visas automatiskt.
2. Annars, öppna **⋮-menyn** → **Installera app** (eller **Lägg till på hemskärmen** i äldre versioner).

Genomgång:

![Android install walkthrough](media/Android_add_to_home_screen.gif)

Källfil med högre kvalitet: [media/Android_add_to_home_screen.mp4](media/Android_add_to_home_screen.mp4).

## Loggböcker

- **Skapa:** skriv ett namn i *Loggnamn* och skicka. Om du lämnar namnet tomt, standardiseras det till `Log YYYY-MM-DD HH:MM UTC`.
- **Växla:** klicka på valfri loggbok i sidopanelen.
- **Byt namn:** klicka på *Byt namn* i loggbokens rubrik. Tryck Enter för att spara, Escape för att avbryta.
- **Ta bort:** klicka på *Ta bort logg*. Du ombeds att bekräfta. Om du tar bort den sista loggboken skapas en ny automatiskt.

## QSO-kontakter

- Fyll i formuläret och tryck på **Logga QSO**.
- Formuläret är organiserat i tre block:
  - **Stationsdata** — *Stationens anropssignal* (din sändningsanropssignal, ADIF `STATION_CALLSIGN`), *Operatör* (den enskilde operatörens anropssignal — skild från *Stationens anropssignal* när en gästoperatör är vid mikrofonen på en klubbstation; ADIF `OPERATOR`) och *Mitt rutnät* (ADIF `MY_GRIDSQUARE`). Dessa förblir fasta mellan QSO-kontakter i samma session — ställ in dem en gång och de förs vidare.
  - **Driftsläge** — *Spridningsläge*, *Läge*, *Band* plus satellit-specifika *Satellit* / *Sat mode* / *RX-band* när spridningsläget är *Satellit*. Band, läge och spridningsläge är fasta som Stationsdata.
  - **QSO-data** — per-kontakt-fält: *Anropssignal*, *Rutnät* (den andra stationens Maidenhead-rutnät), *Kommentar* (ADIF `COMMENT`), *RST skickat*, *RST mottaget*. När du redigerar en befintlig QSO-kontakt visas även *Datum (UTC)* och *Tid (UTC)* i detta block. Dessa fält rensas efter varje *Logga QSO*.
- Alla anropssignaler (anropad, station, operatör) konverteras automatiskt till versaler medan du skriver; båda rutnätsfälten gör detsamma.
- Datum och tid förifylls vid sändning med *nu* i UTC; vid redigering kan du ange valfritt värde.
- RST skickat / RST mottaget, om de lämnas tomma, standardiseras till **59** för tallägen (SSB/FM/DIGITALVOICE) och **599** för CW och digitala lägen (CW/FT8/FT4/RTTY/PSK31/JT65). Standarden följer det överordnade MODE, så att välja ett specifikt underläge som *USB* eller *FT4* ger fortfarande rätt standard.
- Ett *Dubblett i denna logg*-märke visas under anropssignalfältet om signalen redan finns i den aktuella loggboken. Dubbletter *blockeras inte*.
- **Spridningsläge** — valfri rullgardinsmeny med ADIF-spridningslägen (SAT, RPT, EME, F2, Es, MS, LOS, osv.). Lämna tomt för normala KV-terretriska QSO-kontakter.
- **Satellit-QSO-kontakter** — att välja spridningsläget *Satellit* avslöjar tre satellit-specifika fält: **Satellit** (rullgardinsmeny med ~110 AMSAT-registrerade satelliter), **Sat mode** (AMSAT-bokstavsbeteckningar, grupperade som *moderna* tvåbokstavsupplänk/nedlänkkoder överst och *föråldrade* enbokstavskoder nedtill) och **RX-band** (nedlänkband). Satellit, Sat mode och RX-band är obligatoriska — webbläsaren vägrar att skicka utan dem. Att välja ett **Sat mode** fyller automatiskt i huvud-**Bandet** med upplänkbandet och **RX-bandet** med nedlänkbandet (t.ex. läge J → 2m upplänk, 70cm nedlänk). Att växla *tillbaka* till satellit från ett annat spridningsläge återställer Sat mode så att du uppmanas att välja ett nytt. Icke-satellit-QSO-kontakter bär aldrig satellit-specifika fält; att byta en befintlig QSO från satellit till ett annat spridningsläge tar bort dem på ett rent sätt. **Rutnät** och **Mitt rutnät** är allmänna fält (även användbara för VHF/UHF-rutnätstävlingar) och förblir synliga för varje QSO.
- **Redigera en QSO-kontakt** med *Redigera*-knappen på raden. Formuläret växlar till *Uppdatera QSO*-läge, raden markeras och en *Avbryt*-knapp visas. Att byta loggböcker eller ta bort loggen avbryter redigeringen automatiskt.
- **Ta bort en QSO-kontakt** med *Ta bort*-knappen på raden (ber om bekräftelse).

## ADIF-import och -export

- **Export**: klicka på *Exportera .adi* i loggbokens rubrik. En fil laddas ned i enlighet med **ADIF 3.1.7**. Huvudet deklarerar `ADIF_VER 3.1.7`, `PROGRAMID local-qso`, `PROGRAMVERSION` och `CREATED_TIMESTAMP` (UTC). Per-QSO-fält som emitteras (när icke-tomma): `CALL`, `QSO_DATE`, `TIME_ON`, `BAND`, `MODE`, `SUBMODE`, `PROP_MODE`, `GRIDSQUARE`, `BAND_RX`, `SAT_MODE`, `SAT_NAME`, `RST_SENT`, `RST_RCVD`, `COMMENT`, `STATION_CALLSIGN`, `OPERATOR`, `MY_GRIDSQUARE` — följt av varje extra ADIF-fält som bevarades vid import (se nedan).
- **Import**: klicka på *Importera .adi-fil* under formuläret för att skapa en loggbok och välj en `.adi`- / `.adif`-fil. En ny loggbok skapas från den, namngiven `Imported YYYY-MM-DD HH:MM UTC`. Import slår aldrig ihop med en befintlig loggbok.
- **Förlustfri retur**: vid import bevaras varje ADIF-fält som appen inte modellerar i sitt UI (t.ex. `NAME`, `FREQ`, `TX_PWR`, `DXCC`, `QSL_SENT`/`QSL_RCVD`, `POTA_REF`, `APP_*`-fält) på QSO-kontakten och re-emitteras ordagrant vid nästa export. Att exportera en fil som i sig importerades bevarar alltså allt.
- Fältlängd behandlas som ett UTF-8-byteantal som specifikationen kräver, så flerbytetext (t.ex. betonade anropssignaler i `COMMENT`) tolkas korrekt.

## Integritet och data

- All data lagras i webbläsarens `localStorage` under nyckeln `local-qso:v1`.
- Inget överförs någonstans. Det finns ingen backend, inget API-anrop, ingen telemetri, ingen analys.
- Om du rensar webbläsarens webbplatsdata, använder privat/incognito-läge eller använder en annan webbläsare/enhet innebär det en ny tom loggbok — använd *Exportera .adi* för att säkerhetskopiera.

## Gränssnittsspråk

En språkväljare i rubriken täcker **28 språk**. Välj ett och resten av UI renderas om omedelbart; ditt val sparas tillsammans med dina loggar och respekteras vid nästa besök. Engelska är standard.

Tillgängliga språk (flaggemoji + inhemskt namn; ordnade alfabetiskt inom varje skriptsystem):

🇺🇸 English · 🇨🇿 Čeština · 🇩🇰 Dansk · 🇩🇪 Deutsch · 🇪🇪 Eesti · 🇪🇸 Español · 🇫🇷 Français · 🇮🇪 Gaeilge · 🇭🇷 Hrvatski · 🇮🇹 Italiano · 🇱🇻 Latviešu · 🇱🇹 Lietuvių · 🇭🇺 Magyar · 🇳🇱 Nederlands · 🇳🇴 Norsk · 🇵🇱 Polski · 🇵🇹 Português · 🇷🇴 Română · 🇸🇰 Slovenčina · 🇸🇮 Slovenščina · 🇫🇮 Suomi · 🇸🇪 Svenska · 🇧🇾 Беларуская · 🇧🇬 Български · 🇷🇺 Русский · 🇷🇸 Српски · 🇺🇦 Українська · 🇬🇷 Ελληνικά

Universella tekniska etiketter förblir i sin kanoniska form på alla språk: bandnamn (`20m`, `70cm`, …), ADIF-lägeskoder (`SSB`, `FT8`, `CW`, …), `QSO`, `RST`, `UTC` och ISO-landskoder.

Saknas en sträng på ditt språk? Varje språk är en enda liten fil under [`i18n/`](i18n/) — kopiera `i18n/en.js`, översätt värdena, spara som `i18n/<code>.js`, lägg sedan till en `<script>`-tagg plus ett `<select>`-alternativ i `index.html` och koden i `SUPPORTED_LANGS` i `app.js`.

## Teman

Temaväxlaren i rubriken växlar mellan dag (standard) och natt. Inställningen sparas tillsammans med dina loggar och respekteras vid nästa besök. Inbyggda datum-/tidsväljare följer temat via `color-scheme`.

## Tekniska noter

- Ensidigt program, vanlig HTML + CSS + JavaScript. Inga ramverk, inget byggsteg, inga beroenden.
- Källfiler:
  - `index.html` — uppmärkning och meta-taggar.
  - `style.css` — teman och layout (dag/natt-variabler, mobila mediefrågor).
  - `app.js` — tillstånd, persistence, rendering, ADIF-parser/-serialiserare, anropssignalprefix → landsuppslag.
  - `favicon.svg` — inbäddad SVG-favoritikon.
  - `manifest.webmanifest` — Web App Manifest (namn, temafärg, omfång, ikon) så att appen är installerbar som PWA på mobilen och skrivbordet.
  - `service-worker.js` — cache-first servicearbetare som förcacheterar varje statisk fil vid installation, evikterar gamla cacheminnen vid aktivering och håller appen fullt offline efter det första besöket. Registreringen hoppas automatiskt över på `file://`-protokollet så att öppning av `index.html` direkt från disk håller sig ren.
  - `i18n/<lang>.js` — en översättningsfil per stödda språk (28 totalt). Var och en är en liten IIFE som tilldelar `window.I18N[<lang>]` en platt nyckel→sträng-karta. `t()` och `applyLanguage()` i `app.js` hanterar uppslag (med engelskt reservalternativ) och traverserar DOM:en och uppdaterar varje `[data-i18n*]`-element.
- Testad på senaste Chromium, Firefox och Safari (skrivbord + iOS).

## Tack

Byggt av [YL3IM](https://www.qrz.com/db/YL3IM).

Tack till [A65BR](https://www.qrz.com/db/A65BR) Oleg för de ovärderliga tipsen som gjorde satellit-QSO-delen verkligen användbar — de moderna tvåbokstavs Sat-mode-beteckningarna, AMSAT-katalogen och upplänk/nedlänk-autojusteringen härrör alla från hans feedback.

Landsflagger förlitar sig på Unicode-regionala indikatorsekvenser. De renderas korrekt på macOS, iOS, Linux (med ett flaggdugligt emojiteckensnitt) och Android. Windows inkluderar inte ett systemflaggeringsteckensnitt, så flaggemojier kan visas som bokstavspar där.
