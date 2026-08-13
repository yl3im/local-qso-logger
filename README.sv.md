# Local QSO Logger

## Läs på ditt språk

🇺🇸 [English](README.md) · 🇨🇿 [Čeština](README.cs.md) · 🇩🇰 [Dansk](README.da.md) · 🇩🇪 [Deutsch](README.de.md) · 🇪🇪 [Eesti](README.et.md) · 🇪🇸 [Español](README.es.md) · 🇫🇷 [Français](README.fr.md) · 🇮🇪 [Gaeilge](README.ga.md) · 🇭🇷 [Hrvatski](README.hr.md) · 🇮🇹 [Italiano](README.it.md) · 🇱🇻 [Latviešu](README.lv.md) · 🇱🇹 [Lietuvių](README.lt.md) · 🇭🇺 [Magyar](README.hu.md) · 🇳🇱 [Nederlands](README.nl.md) · 🇳🇴 [Norsk](README.no.md) · 🇵🇱 [Polski](README.pl.md) · 🇵🇹 [Português](README.pt.md) · 🇷🇴 [Română](README.ro.md) · 🇸🇰 [Slovenčina](README.sk.md) · 🇸🇮 [Slovenščina](README.sl.md) · 🇫🇮 [Suomi](README.fi.md) · 🇸🇪 Svenska · 🇧🇾 [Беларуская](README.be.md) · 🇧🇬 [Български](README.bg.md) · 🇷🇺 [Русский](README.ru.md) · 🇷🇸 [Српски](README.sr.md) · 🇺🇦 [Українська](README.uk.md) · 🇬🇷 [Ελληνικά](README.el.md)

En integritetsrespekterande amatörradio-QSO-loggbok som körs helt i din webbläsare. Inget konto, ingen server, ingen spårning, ingen analys — dina loggböcker lever bara i webbläsarens `localStorage` och lämnar aldrig din enhet.

Av [YL3IM](https://www.qrz.com/db/YL3IM). Projektwebbplats: [qso.lv](https://qso.lv).

![Local QSO Logger på iPad](media/iPad.png)

## Innehåll

- [Läs på ditt språk](#läs-på-ditt-språk)
- [Funktioner](#funktioner)
- [Kom igång](#kom-igång)
- [Installera som PWA på mobilen](#installera-som-pwa-på-mobilen)
  - [iOS (endast Safari)](#ios-endast-safari)
  - [Android (Chrome / Edge / Firefox)](#android-chrome--edge--firefox)
- [Loggböcker](#loggböcker)
- [QSO-kontakter](#qso-kontakter)
- [Kontester](#kontester)
- [Import och export](#import-och-export)
- [Integritet och data](#integritet-och-data)
- [Gränssnittsspråk](#gränssnittsspråk)
- [Teman](#teman)
- [Tekniska noter](#tekniska-noter)
- [Tack](#tack)

## Funktioner

- Flera loggböcker; var och en med sin egen lista över QSO-kontakter.
- **Kontestloggar** är valfria — välj från en katalog med 68 medföljande kontester när du skapar en loggbok. QSO-formuläret får ett kontestspecifikt *Kontestutbyte*-block, dubblettdetekteringen följer kontestens regel, och *Exportera .cbr* producerar en Cabrillo v3-inlämningsfil vid sidan av den vanliga ADIF-exporten.
- Loggboksåtgärder: skapa, byta namn, ta bort, importera en loggfil (ADIF eller Cabrillo — formatet identifieras automatiskt), exportera till ADIF (`.adi`), samt *Exportera .cbr* (Cabrillo v3) för kontestloggböcker. Att åter-importera en `.cbr`-fil som tidigare exporterats av appen återställer den som samma kontestloggbok.
- QSO-formuläret grupperat i tre block: **Stationsdata** (stationens anropssignal, operatörens anropssignal, eget rutnät) förblir fast mellan QSO-kontakter; **Driftsläge** (spridningsläge, satellit, läge, satellit-läge, band, RX-band) med satellit-specifika fält som visas bara när spridningsläget är *Satellit*; och **QSO-data** (anropad stations anropssignal, anropat rutnät, datum/tid UTC vid redigering, kommentar, RST skickat, RST mottaget).
- Fullständig ADIF `MODE` → `SUBMODE`-taxonomi i lägesmenyn — välj ett överordnat läge (`SSB`, `MFSK`, …) eller gå direkt till ett specifikt underläge (`USB`, `FT4`, …); appen lagrar båda fälten per ADIF och tabellen visar det specifika underlaget när det finns.
- Fullständig ADIF-spridningslägesenumeration (SAT, RPT, EME, ES, MS, Aurora, osv.) som en rullgardinsmeny.
- Fullständig AMSAT-satellitkatalog (~110 satelliter) och en tvånivås **Sat mode**-rullgardinsmeny: föredragna tvåbokstavsupplänk/nedlänkkoder överst (LU, LV, SX, UU, UV, VA, VU, VV) och äldre enbokstavsbeteckningar (A/B/J/K/L/R/S/T/U/V/W/X) grupperade som *föråldrade* nedtill. Att välja ett satellit-läge justerar automatiskt upplänk `BAND` och nedlänk `RX band`.
- Redigera och ta bort valfri QSO-kontakt (med bekräftelse vid borttagning).
- Rimliga standardvärden: dagens UTC-datum/-tid förifyllt, lägesanpassade RST-standarder (59 för tallägen, 599 för CW/digitala), fast Stationsdata + band + läge + spridningsläge mellan på varandra följande QSO-kontakter (bara per-kontakt-fälten — anropssignal, rutnät, kommentar, RST — rensas efter varje *Logga QSO*).
- Liveindikatorn för dubblettsignal (informativ — dubbletter är tillåtna).
- Landsflaggkolumn härledd från anropssignalprefix (täcker ≥99 % av vanliga amatörradioprefix, inklusive bärbara anrop som `9A/M0NCG`).
- Ett-trycks **Mitt rutnät**-autodetektering: en 🌐-knapp bredvid fältet frågar webbläsaren efter dina aktuella koordinater och fyller i det 6-tecken långa Maidenhead-rutnätet (använder webbläsarens Geolocation-API — kräver användarens tillstånd).
- Lokalt datumvisning i QSO-tabellen; lagring och ADIF-utdata förblir i ISO.
- Gränssnitt på **28 språk** (engelska plus 22 latinskrift, 5 kyrilliskrift och grekiska); flaggemojiförsedd selektor i rubriken.
- Dag-/nattteman (dag är standard; växlaren finns i rubriken).
- Mobilanpassad responsiv layout med pekanpassade knappar.
- Fungerar helt offline — inga nätverksförfrågningar någon gång.
- Installerbar som PWA (Lägg till på hemskärmen / Installera app) vid värd över HTTPS.

## Kom igång

Öppna bara `index.html` i en modern webbläsare. Inget byggsteg, ingen installation, ingen server.

Om du vill vara värd för den, placera de statiska filerna (`index.html`, `style.css`, `app.js`, `favicon.svg`, `manifest.webmanifest`, `service-worker.js`, den enda `i18n.js`-bundeln som bär alla 28 språkordböcker, och den enda `contests.js`-bundeln som bär alla 68 kontestkonfigurationer) på valfri statisk värd (GitHub Pages, Netlify, din egen webbserver). Det fungerar även via `file://` — service worker-registreringen hoppas automatiskt över på `file:`-protokollet så att öppning av `index.html` direkt från disk fortfarande fungerar rent.

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

![iOS-installationsgenomgång](media/iOS_add_to_home_screen.gif)

Källfil med högre kvalitet: [media/iOS_add_to_home_screen.mp4](media/iOS_add_to_home_screen.mp4).

### Android (Chrome / Edge / Firefox)

1. Öppna webbplatsen i din webbläsare. En *Installera app*-prompt kan visas automatiskt.
2. Annars, öppna **⋮-menyn** → **Installera app** (eller **Lägg till på hemskärmen** i äldre versioner).

Genomgång:

![Android-installationsgenomgång](media/Android_add_to_home_screen.gif)

Källfil med högre kvalitet: [media/Android_add_to_home_screen.mp4](media/Android_add_to_home_screen.mp4).

## Loggböcker

- **Skapa:** skriv ett namn i *Loggnamn* och skicka. Om du lämnar namnet tomt, standardiseras det till `Log YYYY-MM-DD HH:MM UTC`.
- **Växla:** klicka på valfri loggbok i sidopanelen.
- **Byt namn:** klicka på *Byt namn* i loggbokens rubrik. Tryck Enter för att spara, Escape för att avbryta.
- **Ta bort:** klicka på *Ta bort logg*. Du ombeds att bekräfta. Om du tar bort den sista loggboken skapas en ny automatiskt.

## QSO-kontakter

- Fyll i formuläret och tryck på **Logga QSO**.
- Formuläret är organiserat i tre block:
  - **Stationsdata** — *Stationens anropssignal* (din sändningsanropssignal, ADIF `STATION_CALLSIGN`), *Operatör* (den enskilde operatörens anropssignal — skild från *Stationens anropssignal* när en gästoperatör är vid mikrofonen på en klubbstation; ADIF `OPERATOR`) och *Mitt rutnät* (ADIF `MY_GRIDSQUARE`) med en 🌐-knapp som fyller rutnätet från webbläsarens aktuella position (Geolocation-API — webbläsaren kommer att fråga om tillstånd första gången). Dessa förblir fasta mellan QSO-kontakter i samma session — ställ in dem en gång och de förs vidare.
  - **Driftsläge** — *Spridningsläge*, *Läge*, *Band* plus satellit-specifika *Satellit* / *Sat mode* / *RX-band* när spridningsläget är *Satellit*. Band, läge och spridningsläge är fasta som Stationsdata.
  - **QSO-data** — per-kontakt-fält: *Anropssignal*, *Rutnät* (den andra stationens Maidenhead-rutnät), *Kommentar* (ADIF `COMMENT`), *RST skickat*, *RST mottaget*. När du redigerar en befintlig QSO-kontakt visas även *Datum (UTC)* och *Tid (UTC)* i detta block. Dessa fält rensas efter varje *Logga QSO*.
- Alla anropssignaler (anropad, station, operatör) konverteras automatiskt till versaler medan du skriver; båda rutnätsfälten gör detsamma.
- Datum och tid förifylls vid sändning med *nu* i UTC; vid redigering kan du ange valfritt värde.
- RST skickat / RST mottaget, om de lämnas tomma, standardiseras till **59** för tallägen (SSB/FM/DIGITALVOICE) och **599** för CW och digitala lägen (CW/FT8/FT4/RTTY/PSK31/JT65). Standarden följer det överordnade MODE, så att välja ett specifikt underläge som *USB* eller *FT4* ger fortfarande rätt standard.
- Ett *Dubblett i denna logg*-märke visas under anropssignalfältet om signalen redan finns i den aktuella loggboken. Dubbletter *blockeras inte*.
- **Spridningsläge** — valfri rullgardinsmeny med ADIF-spridningslägen (SAT, RPT, EME, F2, Es, MS, LOS, osv.). Lämna tomt för normala KV-terrestriska QSO-kontakter.
- **Satellit-QSO-kontakter** — att välja spridningsläget *Satellit* avslöjar tre satellit-specifika fält: **Satellit** (rullgardinsmeny med ~110 AMSAT-registrerade satelliter), **Sat mode** (AMSAT-bokstavsbeteckningar, grupperade som *moderna* tvåbokstavsupplänk/nedlänkkoder överst och *föråldrade* enbokstavskoder nedtill) och **RX-band** (nedlänkband). Satellit, Sat mode och RX-band är obligatoriska — webbläsaren vägrar att skicka utan dem. Att välja ett **Sat mode** fyller automatiskt i huvud-**Bandet** med upplänkbandet och **RX-bandet** med nedlänkbandet (t.ex. läge J → 2m upplänk, 70cm nedlänk). Att växla *tillbaka* till satellit från ett annat spridningsläge återställer Sat mode så att du uppmanas att välja ett nytt. Icke-satellit-QSO-kontakter bär aldrig satellit-specifika fält; att byta en befintlig QSO från satellit till ett annat spridningsläge tar bort dem på ett rent sätt. **Rutnät** och **Mitt rutnät** är allmänna fält (även användbara för VHF/UHF-rutnätstävlingar) och förblir synliga för varje QSO.
- **Redigera en QSO-kontakt** med *Redigera*-knappen på raden. Formuläret växlar till *Uppdatera QSO*-läge, raden markeras och en *Avbryt*-knapp visas. Att byta loggböcker eller ta bort loggen avbryter redigeringen automatiskt.
- **Ta bort en QSO-kontakt** med *Ta bort*-knappen på raden (ber om bekräftelse).

## Kontester

En loggbok kan valfritt vara en **kontestlogg** — välj en kontest från *Kontest*-rullgardinsmenyn i formuläret för att skapa loggbok. Tom rullgardinsmeny = vanlig loggbok (standard, existerande beteende oförändrat).

Kontestloggar får:

- **Kontestutbyte-block** i QSO-formuläret, dynamiskt renderat från den valda kontestens schema. Fälttyper är `text`, `number` och `serial` (autoinkrementerande, skrivskyddad). Fält markerade *sticky* (din egen zon / län / distrikt / effekt / ålder / …) förifylls från föregående QSO:s värde; per-QSO-fält (deras zon, deras löpnummer, …) rensas efter varje *Logga QSO*.
- **Kontestmärke** bredvid loggnamnet i detaljrubriken.
- **Dubblettdetektering** följer kontestens `duplicateRule` (`per-band-mode`, `per-band`, `per-day` eller `off`). Märket är fortfarande enbart informativt — blockerar aldrig inlämning.
- **Varningsmärke** när aktuell UTC faller utanför något av kontestens deklarerade datumfönster (12 år förinlästa, 2026–2037), eller när valt band / läge inte är i kontestens lagliga uppsättning. Blockerar aldrig.
- **Inlämningsinfopanel** i detaljrubriken: ett inbäddat formulär för Cabrillo-huvudfälten som kontesten deklarerar (kategori, effekt, namn, klubb, adress, soapbox, …). Värden bevaras på loggboken, inte per QSO.
- **Exportera .cbr**-knapp i detaljrubriken, bredvid *Exportera .adi*. Emitterar en Cabrillo v3-fil: `CALLSIGN` / `GRID-LOCATOR` / `OPERATORS` förifyllt från första QSO:ns stationsdata, resten från inlämningsinfopanelen, sedan en `QSO:`-rad per kontakt i kronologisk ordning med hjälp av kontestens `sentTemplate` / `rcvdTemplate`-kolumner.
- **Cabrillo-återimport** via standardknappen *Importera loggfil* — en `.cbr`-fil som tidigare exporterats av appen (eller av vilken som helst annan loggare som emitterar standard-Cabrillo v3) återgår till en ny kontestloggbok av rätt typ. `CONTEST:`-huvudet matchas mot den medföljande katalogen; när flera konfigurationer delar samma tagg (t.ex. `ARRL-10` matchar både `arrl-10m-dx` och `arrl-10m-w`) särskiljer appen genom att matcha QSO-radens lägesbokstav och kolumnantal mot varje kandidats mall, och föredrar sedan `-dx`-varianten. Huvudfält (kategori, namn, klubb, soapbox, …) rehydrerar inlämningsinfopanelen; QSO-utbytesvärden rehydrerar `q.contestExchange` enligt kontestens mall.

### Medföljande kontestkatalog (68 konfigurationer)

Grupperade efter familj:

- **CQ-familjen** (9): CQ WW SSB/CW/RTTY, CQ WPX SSB/CW/RTTY, CQ 160 CW/SSB, CQ-M International.
- **ARRL-familjen** (9): ARRL DX SSB/CW (DX-sidan), ARRL Field Day, ARRL 10m/160m/RTTY Roundup (var och en levereras som *både* DX- och W/VE-perspektiv).
- **IARU** (2): IARU HF Championship, IARU R1 Field Day.
- **WAE och andra europeiska** (8): WAE DX SSB/CW, EU HF Championship, LZ DX, Baltic Contest, NRAU-Baltic SSB/CW, SP DX.
- **Central-/östeuropeiska asymmetriska — båda perspektiven** (14): OK/OM DX CW+SSB, HA DX, YO DX HF, Ukrainian DX, REF Contest CW+SSB.
- **Rysk klubb / RadioSport** (12): Russian DX (båda sidor), Russian WW RTTY, Russian WW MultiMode, Yuri Gagarin International, Cup of the Russian Federation CW+SSB, RRTC, Asiatic Russia Championship, UA1DZ Memorial Cup, RDAC, RAEM.
- **Vitryska + italienska + kroatiska + spanska + ukrainska RTTY** (12): Belarus BFRR CW+SSB (båda sidor), ARI DX (båda sidor), Croatian 9A CW (båda sidor), Spanish CNCW (båda sidor), Ukrainian RTTY (båda sidor).
- **Globalt** (2): All Asian DX CW+SSB.

Asymmetriska kontester (där värdlandet och DX-sidan skickar olika utbyten) levereras med **två konfigurationer** — en för värdlandets perspektiv (fast regionkod) och en för DX-perspektivet (fast löpnummer). Det mottagna fältet är ett enda fritextfält som fångar allt, så att operatören kan skriva vilket format som helst beroende på kontakten.

Varje konfiguration bär med sig:

- Kontestutbytesvärden återemitteras i ADIF-export via `APP_LQ_*`-namnrymdsfält; huvudstämpeln `APP_LQ_CONTEST_ID` gör att en efterföljande återimport kan rehydrera loggboken som samma kontest med alla fält intakta.
- 12 år av datumfönster (2026–2037) så att *utanför kontestfönstret*-märket förblir användbart i ett decennium utan ny leverans.
- En Cabrillo-mall som mappar varje utbytesfält till rätt `QSO:`-radskolumn.

Att lägga till en ny kontest = klistra in ett nytt IIFE-block i [`contests.js`](contests.js) på den alfabetiska positionen (varje befintlig kontest avgränsas av en `// ==== <id> ====`-huvudkommentar, så det är lätt att hitta var man ska sätta in). Ingen ändring i `index.html`, ingen ändring i `service-worker.js`, ingen ändring i `app.js` krävs — renderaren, inlämningshanteraren, dubblettdetektorn, ADIF-turen-och-retur och Cabrillo-emittern absorberar varje konfiguration som ren data.

## Import och export

- **Import** av valfri loggfil — klicka på *Importera loggfil* under formuläret för att skapa en loggbok och välj en `.adi` / `.adif` (ADIF)- eller `.cbr` / `.cab` (Cabrillo v3)-fil. Formatet identifieras automatiskt från filens första rad (`<...>` → ADIF, `START-OF-LOG:` → Cabrillo, `[REG1TEST;1]` → en "EDI stöds inte ännu"-varning). En ny loggbok skapas alltid — import slår aldrig ihop med en befintlig. ADIF-importer kommer in som vanliga loggar såvida inte huvudet bär ett `APP_LQ_CONTEST_ID` skrivet av vår egen kontestexport (i så fall rehydreras loggen som kontestlogg av den kontesten). Cabrillo-importer kommer alltid in som kontestloggar — se *Kontester*-sektionen för hur `CONTEST:`-taggen matchas mot den medföljande katalogen.
- **ADIF-export**: klicka på *Exportera .adi* i loggbokens rubrik. En fil laddas ned i enlighet med **ADIF 3.1.7**. Huvudet deklarerar `ADIF_VER 3.1.7`, `PROGRAMID local-qso`, `PROGRAMVERSION` och `CREATED_TIMESTAMP` (UTC). Per-QSO-fält som emitteras (när icke-tomma): `CALL`, `QSO_DATE`, `TIME_ON`, `BAND`, `MODE`, `SUBMODE`, `PROP_MODE`, `GRIDSQUARE`, `BAND_RX`, `SAT_MODE`, `SAT_NAME`, `RST_SENT`, `RST_RCVD`, `COMMENT`, `STATION_CALLSIGN`, `OPERATOR`, `MY_GRIDSQUARE` — följt av varje extra ADIF-fält som bevarades vid import (se nedan).
- **Cabrillo-export** dokumenteras i *Kontester*-sektionen ovan — den är endast tillgänglig för kontestloggböcker (*Exportera .cbr*-knappen visas i loggbokens rubrik när loggen har en kontest).
- **Förlustfri retur**: vid ADIF-import bevaras varje fält som appen inte modellerar i sitt UI (t.ex. `NAME`, `FREQ`, `TX_PWR`, `DXCC`, `QSL_SENT`/`QSL_RCVD`, `POTA_REF`, `APP_*`-fält) på QSO-kontakten och re-emitteras ordagrant vid nästa ADIF-export. Att exportera en fil som i sig importerades bevarar alltså allt.
- Fältlängd i ADIF behandlas som ett UTF-8-byteantal som specifikationen kräver, så flerbytetext (t.ex. accentuerade tecken i `COMMENT`) tolkas korrekt.

## Integritet och data

- All data lagras i webbläsarens `localStorage` under nyckeln `local-qso:v1`.
- Inget överförs någonstans. Det finns ingen backend, inget API-anrop, ingen telemetri, ingen analys.
- Om du rensar webbläsarens webbplatsdata, använder privat/incognito-läge eller använder en annan webbläsare/enhet innebär det en ny tom loggbok — använd *Exportera .adi* för att säkerhetskopiera.

## Gränssnittsspråk

En språkväljare i rubriken täcker **28 språk**. Välj ett och resten av UI renderas om omedelbart; ditt val sparas tillsammans med dina loggar och respekteras vid nästa besök. Engelska är standard.

Tillgängliga språk (flaggemoji + inhemskt namn; ordnade alfabetiskt inom varje skriftsystem):

🇺🇸 English · 🇨🇿 Čeština · 🇩🇰 Dansk · 🇩🇪 Deutsch · 🇪🇪 Eesti · 🇪🇸 Español · 🇫🇷 Français · 🇮🇪 Gaeilge · 🇭🇷 Hrvatski · 🇮🇹 Italiano · 🇱🇻 Latviešu · 🇱🇹 Lietuvių · 🇭🇺 Magyar · 🇳🇱 Nederlands · 🇳🇴 Norsk · 🇵🇱 Polski · 🇵🇹 Português · 🇷🇴 Română · 🇸🇰 Slovenčina · 🇸🇮 Slovenščina · 🇫🇮 Suomi · 🇸🇪 Svenska · 🇧🇾 Беларуская · 🇧🇬 Български · 🇷🇺 Русский · 🇷🇸 Српски · 🇺🇦 Українська · 🇬🇷 Ελληνικά

Universella tekniska etiketter förblir i sin kanoniska form på alla språk: bandnamn (`20m`, `70cm`, …), ADIF-lägeskoder (`SSB`, `FT8`, `CW`, …), `QSO`, `RST`, `UTC` och ISO-landskoder.

Saknas en sträng på ditt språk? Varje språkordbok lever i en enda [`i18n.js`](i18n.js)-bundel, uppdelad i 28 sektioner av `// ==== <lang> ====`-huvudkommentarer. Sök (grep) efter huvudet för ditt språk för att hoppa till dess sektion, lägg sedan till / redigera nyckeln. Att lägga till ett helt nytt språk = klistra in ett nytt IIFE-block i `i18n.js` på den alfabetiska positionen, lägg till språkkoden i `SUPPORTED_LANGS` i `app.js`, och lägg till ett `<select>`-alternativ i `index.html`.

## Teman

Temaväxlaren i rubriken växlar mellan dag (standard) och natt. Inställningen sparas tillsammans med dina loggar och respekteras vid nästa besök. Inbyggda datum-/tidsväljare följer temat via `color-scheme`.

## Tekniska noter

- Ensidigt program, vanlig HTML + CSS + JavaScript. Inga ramverk, inget byggsteg, inga beroenden.
- Källfiler:
  - `index.html` — uppmärkning och meta-taggar.
  - `style.css` — teman och layout (dag/natt-variabler, mobila mediefrågor).
  - `app.js` — tillstånd, persistens, rendering, ADIF-parser/-serialiserare, anropssignalprefix → landsuppslag.
  - `favicon.svg` — inbäddad SVG-favoritikon.
  - `manifest.webmanifest` — Web App Manifest (namn, temafärg, omfång, ikon) så att appen är installerbar som PWA på mobilen och skrivbordet.
  - `service-worker.js` — cache-first servicearbetare som förcacheterar varje statisk fil vid installation, evikterar gamla cacheminnen vid aktivering och håller appen fullt offline efter det första besöket. Registreringen hoppas automatiskt över på `file://`-protokollet så att öppning av `index.html` direkt från disk håller sig ren.
  - `i18n.js` — en enda handunderhållen bundel som bär alla 28 språkordböcker. Varje språk är ett fristående IIFE som tilldelar `window.I18N[<lang>]` en platt nyckel→sträng-karta. Block avgränsas av `// ==== <lang> ====`-huvudkommentarer — sök (grep) efter en för att hoppa till det språket. Buntat till en fil istället för 28 individuella filer eftersom översättningsfiler är mycket repetitiva (samma nyckelnamn, samma platshållarsyntax) och gzip komprimerar hela uppsättningen mycket bättre än 28 separata strömmar — sparar ~23 KB vid första inläsningen och skär bort 27 HTTP-förfrågningar. `t()` och `applyLanguage()` i `app.js` hanterar uppslag (med engelskt reservalternativ) och traverserar DOM:en och uppdaterar varje `[data-i18n*]`-element.
  - `contests.js` — en enda handunderhållen bundel som bär alla 68 kontestkonfigurationer. Varje kontest är ett fristående IIFE som tilldelar `window.CONTESTS[<id>]` ett schema-konformt konfigurationsobjekt (`{name, shortName, windows[], bands[], modes[], exchange[], duplicateRule, cabrillo}`). Block avgränsas av `// ==== <id> ====`-huvudkommentarer — sök (grep) efter en för att hoppa till den kontesten. Buntat till en fil istället för 68 individuella filer eftersom kontestkonfigurationer är mycket repetitiva (samma schema, samma `APP_LQ_*`-prefix, samma Cabrillo-huvudfältnamn) och gzip komprimerar hela uppsättningen mycket bättre än 68 separata strömmar — sparar ~42 KB vid första inläsningen och skär bort 67 HTTP-förfrågningar. Läses in av en enda `<script>`-tagg i `index.html` före `app.js` så att registret är befolkat när kontest-rullgardinsmenyn byggs.
- Testad på senaste Chromium, Firefox och Safari (skrivbord + iOS).

## Tack

Byggt av [YL3IM](https://www.qrz.com/db/YL3IM).

Tack till [A65BR](https://www.qrz.com/db/A65BR) Oleg för de ovärderliga tipsen som gjorde satellit-QSO-delen verkligen användbar — de moderna tvåbokstavs Sat-mode-beteckningarna, AMSAT-katalogen och upplänk/nedlänk-autojusteringen härrör alla från hans feedback.

Landsflaggor förlitar sig på Unicode-regionala indikatorsekvenser. De renderas korrekt på macOS, iOS, Linux (med ett flaggdugligt emojiteckensnitt) och Android. Windows inkluderar inte ett systemflaggeringsteckensnitt, så flaggemojier kan visas som bokstavspar där.
