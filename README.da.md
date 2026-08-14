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
- [Konkurrencer](#konkurrencer)
- [Import og eksport](#import-og-eksport)
- [Privatliv og data](#privatliv-og-data)
- [Brugergrænsefladesprog](#brugergrænsefladesprog)
- [Temaer](#temaer)
- [Tekniske bemærkninger](#tekniske-bemærkninger)
- [Tak til](#tak-til)

## Funktioner

- Flere logbøger; hver med sin egen liste over QSO'er.
- **Konkurrenceslogbøger** er valgfrie — vælg fra et katalog med 68 indbyggede konkurrencer, når du opretter en logbog. QSO-formularen får en konkurrencespecifik blok *Konkurrenceudveksling*, dublet-detektionen følger konkurrencens regel, og *Eksporter .cbr* udsender en Cabrillo v3-indsendelsesfil ved siden af den sædvanlige ADIF-eksport.
- Logbogshandlinger: opret, omdøb, slet, importer en logfil (ADIF eller Cabrillo — format registreres automatisk), eksporter til ADIF (`.adi`), samt *Eksporter .cbr* (Cabrillo v3) for konkurrencelogbøger. Genimport af en `.cbr`-fil, der tidligere er eksporteret af appen, genskaber den som samme konkurrencelogbog.
- QSO-formularen er grupperet i tre blokke: **Stationsdata** (stationens kaldesignal, operatørens kaldesignal, eget gitter) der forbliver klæbrige på tværs af QSO'er; **Driftstilstand** (udbredelsestilstand, satellit, tilstand, satellittilstand, bånd, RX-bånd) med satellitfelter, der kun vises når udbredelsestilstanden er *Satellit*; og **QSO-data** (kontaktet kaldesignal, kontaktet gitter, UTC-dato/-tid ved redigering, kommentar, RST sendt, RST modtaget).
- Komplet ADIF `MODE` → `SUBMODE`-taksonomi i tilstandsdropdownen — vælg en overordnet tilstand (`SSB`, `MFSK`, …) eller gå direkte til en specifik undertilstand (`USB`, `FT4`, …); appen gemmer begge felter per ADIF, og tabellen viser den specifikke undertilstand når der er en.
- Komplet ADIF-udbredelsestilstandsopregning (SAT, RPT, EME, ES, MS, Aurora osv.) som dropdown.
- Komplet AMSAT-satellitkatalog (~110 satellitter) og et to-niveau **Satellittilstand**-dropdown: foretrukne tocifrede uplink/downlink-koder øverst (LU, LV, SX, UU, UV, VA, VU, VV) og de ældre enkeltbogstavsbetegnelser (A/B/J/K/L/R/S/T/U/V/W/X) grupperet som *forældet* nedenunder. Valg af satellittilstand justerer automatisk uplink `BAND` og downlink `RX band`.
- Rediger og slet ethvert QSO (med bekræftelse ved sletning).
- Fornuftige standarder: UTC-dato/-tid forudfyldt til *nu*, tilstandsbevidste RST-standarder (59 for stemmetilstande, 599 for CW/digitalt), klæbrige stationsdata + bånd + tilstand + udbredelsestilstand på tværs af på hinanden følgende QSO'er (kun per-kontaktfelterne — kaldesignal, deres gitter, kommentar, RST — ryddes efter hvert *Log QSO*).
- Live duplikat-kaldesignalindikator (informativ — dubletter er tilladt).
- Landeflag-kolonne afledt af kaldesignalpræfikset (dækker ≥99 % af almindelige amatørradiopræfikser, herunder bærbare kald som `9A/M0NCG`).
- Ét-tryk **Mit gitter**-autoregistrering: en 🌐-knap ved siden af feltet beder browseren om dine aktuelle koordinater og udfylder det 6-tegns Maidenhead-gitter (bruger browserens Geolocation-API — kræver brugertilladelse).
- Lokalitetssensitiv datovisning i QSO-tabellen; ISO-lagring og ADIF-output forbliver uændrede.
- Grænsefladen er tilgængelig på **28 sprog** (engelsk plus 22 latin-skrift, 5 kyrillisk-skrift og græsk); flagemoji-præfikseret vælger i overskriften.
- Dag-/nattetemaer (dag er standard; skifteren er i overskriften).
- Mobilvenligt responsivt layout med berøringsstørrede knapper.
- Fungerer fuldt offline — ingen netværksanmodninger på noget tidspunkt.
- Kan installeres som PWA (Føj til startskærm / Installer app) ved hosting over HTTPS.

## Kom i gang

Åbn blot `index.html` i en moderne browser. Intet byggetrin, ingen installation, ingen server.

Hvis du vil hoste det, drop de statiske filer (`index.html`, `style.css`, `app.js`, `favicon.svg`, `manifest.webmanifest`, `service-worker.js`, den enkelte `i18n.js`-bundt, der bærer alle 28 sprogordbøger, og den enkelte `contests.js`-bundt, der bærer alle 68 konkurrencekonfigurationer) på en statisk host (GitHub Pages, Netlify, din egen webserver). Det virker også over `file://` — service worker-registreringen springes automatisk over på `file:`-protokollen, så åbning af `index.html` direkte fra disk stadig fungerer rent.

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
  - **Stationsdata** — *Stationens kaldesignal* (dit sendekaldesignal, ADIF `STATION_CALLSIGN`), *Operatør* (den individuelle operatørs kaldesignal — adskilt fra *Stationens kaldesignal* når en gæsteoperatør er ved mikrofonen på en klubstation; ADIF `OPERATOR`) og *Mit gitter* (ADIF `MY_GRIDSQUARE`) med en 🌐-knap, der udfylder gitteret ud fra din browsers aktuelle placering (Geolocation-API — browseren beder om tilladelse første gang). Disse forbliver klæbrige på tværs af QSO'er i samme session — sæt dem én gang, og de overføres.
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

## Konkurrencer

En logbog kan valgfrit være en **konkurrencelogbog** — vælg en konkurrence fra *Konkurrence*-dropdown'en i formularen for at oprette en logbog. Tom dropdown = almindelig logbog (standard, eksisterende funktionalitet uændret).

Konkurrencelogbøger får:

- **Konkurrenceudvekslingsblok** i QSO-formularen, dynamisk gengivet ud fra den valgte konkurrences skema. Felttyper er `text`, `number` og `serial` (auto-inkrementerende, skrivebeskyttet). Felter markeret som *sticky* (din egen zone / amt / distrikt / effekt / alder / …) forudfyldes fra det forrige QSO's værdi; per-QSO-felter (deres zone, deres serienummer, …) ryddes efter hvert *Log QSO*.
- **Konkurrencemærke** ved siden af lognavnet i detaljeoverskriften.
- **Dublet-detektion** følger konkurrencens `duplicateRule` (`per-band-mode`, `per-band`, `per-day` eller `off`). Chippen er stadig kun informativ — blokerer aldrig indsendelse.
- **Advarselschip**, når den aktuelle UTC falder uden for et af konkurrencens deklarerede datovinduer (12 år forhåndsindlæst, 2026–2037), eller når det valgte bånd/tilstand ikke er i konkurrencens tilladte sæt. Blokerer aldrig.
- **Indsendelsesinfopanel** i detaljeoverskriften: en indlejret formular til de Cabrillo-headerfelter, som konkurrencen deklarerer (kategori, effekt, navn, klub, adresse, soapbox, …). Værdier gemmes på logbogen, ikke per QSO.
- **Eksporter .cbr**-knap i detaljeoverskriften, ved siden af *Eksporter .adi*. Udsender en Cabrillo v3-fil: `CALLSIGN` / `GRID-LOCATOR` / `OPERATORS` forudfyldt fra det første QSO's stationsdata, resten fra indsendelsesinfopanelet, derefter én `QSO:`-linje per kontakt i kronologisk rækkefølge ved brug af konkurrencens `sentTemplate` / `rcvdTemplate`-kolonner.
- **Cabrillo-genimport** via standardknappen *Importer logfil* — en `.cbr`-fil, der tidligere er eksporteret af appen (eller af enhver anden logger, der udsender standard-Cabrillo v3), går tilbage til en frisk konkurrencelogbog af den rigtige type. `CONTEST:`-headeren matches mod det indbyggede katalog; når flere konfigurationer deler samme mærke (f.eks. matcher `ARRL-10` både `arrl-10m-dx` og `arrl-10m-w`), skelner appen ved at matche QSO-linjens tilstandsbogstav og kolonneantal mod hver kandidats skabelon, og foretrækker derefter `-dx`-varianten. Headerfelter (kategori, navn, klub, soapbox, …) genopfrisker indsendelsesinfopanelet; QSO-udvekslingsværdier genopfrisker `q.contestExchange` efter konkurrencens skabelon.

### Indbygget konkurrencekatalog (68 konfigurationer)

Grupperet efter familie:

- **CQ-familien** (9): CQ WW SSB/CW/RTTY, CQ WPX SSB/CW/RTTY, CQ 160 CW/SSB, CQ-M International.
- **ARRL-familien** (9): ARRL DX SSB/CW (DX-siden), ARRL Field Day, ARRL 10m/160m/RTTY Roundup (hver leveret fra *begge* DX- og W/VE-perspektiver).
- **IARU** (2): IARU HF Championship, IARU R1 Field Day.
- **WAE og andre europæiske** (8): WAE DX SSB/CW, EU HF Championship, LZ DX, Baltic Contest, NRAU-Baltic SSB/CW, SP DX.
- **Central-/østeuropæiske asymmetriske — begge perspektiver** (14): OK/OM DX CW+SSB, HA DX, YO DX HF, Ukrainian DX, REF Contest CW+SSB.
- **Russisk klub / RadioSport** (12): Russian DX (begge sider), Russian WW RTTY, Russian WW MultiMode, Yuri Gagarin International, Cup of the Russian Federation CW+SSB, RRTC, Asiatic Russia Championship, UA1DZ Memorial Cup, RDAC, RAEM.
- **Hviderusland + Italien + Kroatien + Spanien + ukrainsk RTTY** (12): Belarus BFRR CW+SSB (begge sider), ARI DX (begge sider), Croatian 9A CW (begge sider), Spanish CNCW (begge sider), Ukrainian RTTY (begge sider).
- **Global** (2): All Asian DX CW+SSB.

Asymmetriske konkurrencer (hvor værtslandet og DX-siden sender forskellige udvekslinger) leveres med **to konfigurationer** — én for værtslandets perspektiv (klæbrig regionskode) og én for DX-perspektivet (klæbrigt serienummer). Det modtagne felt er et enkelt fritekstfelt, så operatøren kan indtaste begge formater afhængigt af kontakten.

Hver konfiguration indeholder:

- Konkurrenceudvekslingsværdier, der genudsendes ved ADIF-eksport via `APP_LQ_*`-navnerumsfelter; headerstemplet `APP_LQ_CONTEST_ID` lader en efterfølgende genimport genskabe logbogen som samme konkurrence med alle felter intakte.
- 12 års datovinduer (2026–2037), så chippen *uden for konkurrencevinduet* forbliver nyttig i et årti uden en ny udgivelse.
- En Cabrillo-skabelon, der kortlægger hvert udvekslingsfelt til den korrekte kolonne på `QSO:`-linjen.

At tilføje en ny konkurrence = indsæt en ny IIFE-blok i [`contests.js`](contests.js) på den alfabetiske position (hver eksisterende konkurrence er afgrænset af en `// ==== <id> ====`-headerkommentar, så det er nemt at finde, hvor man skal indsætte). Ingen ændring i `index.html`, ingen ændring i `service-worker.js`, ingen ændring i `app.js` nødvendig — rendereren, indsendelseshåndteringen, dublet-detektoren, ADIF-tur-retur og Cabrillo-udsenderen absorberer hver konfiguration som ren data.

## Import og eksport

- **Import** af enhver logfil — klik på *Importer logfil* under formularen til oprettelse af logbog og vælg en `.adi` / `.adif` (ADIF)- eller `.cbr` / `.cab` (Cabrillo v3)-fil. Formatet registreres automatisk ud fra filens første linje (`<...>` → ADIF, `START-OF-LOG:` → Cabrillo, `[REG1TEST;1]` → en "EDI understøttes endnu ikke"-advarsel). Der oprettes altid en ny logbog — import flettes aldrig ind i en eksisterende. ADIF-importer kommer ind som almindelige logs, medmindre headeren bærer en `APP_LQ_CONTEST_ID` skrevet af vores egen konkurrenceeksport (i så fald genskabes loggen som en konkurrencelog af den konkurrence). Cabrillo-importer kommer altid ind som konkurrencelogs — se afsnittet *Konkurrencer* for, hvordan `CONTEST:`-tagget matches mod det indbyggede katalog.
- **ADIF-eksport**: klik på *Eksporter .adi* i logbogsoverskriften. En fil downloades i overensstemmelse med **ADIF 3.1.7**. Overskriften erklærer `ADIF_VER 3.1.7`, `PROGRAMID local-qso`, `PROGRAMVERSION` og `CREATED_TIMESTAMP` (UTC). Per-QSO-felter udsendt (når ikke-tomme): `CALL`, `QSO_DATE`, `TIME_ON`, `BAND`, `MODE`, `SUBMODE`, `PROP_MODE`, `GRIDSQUARE`, `BAND_RX`, `SAT_MODE`, `SAT_NAME`, `RST_SENT`, `RST_RCVD`, `COMMENT`, `STATION_CALLSIGN`, `OPERATOR`, `MY_GRIDSQUARE` — efterfulgt af hvert ekstra ADIF-felt bevaret ved import (se nedenfor).
- **Cabrillo-eksport** er dokumenteret i afsnittet *Konkurrencer* ovenfor — den er kun tilgængelig for konkurrencelogbøger (knappen *Eksporter .cbr* vises i logbogsoverskriften, når loggen har en konkurrence).
- **Tabsfri overførsel**: ved ADIF-import bevares ethvert felt, som appen ikke modellerer i sin brugergrænseflade (f.eks. `NAME`, `FREQ`, `TX_PWR`, `DXCC`, `QSL_SENT`/`QSL_RCVD`, `POTA_REF`, `APP_*`-felter) på QSO'et og genudsendes ordret ved næste ADIF-eksport. Eksport af en fil der selv var importeret bevarer således alt.
- Feltlængde i ADIF behandles som et UTF-8-byteantal som specifikationen kræver, så flerbyte-tekst (f.eks. accenterede tegn i `COMMENT`) parses korrekt.

## Privatliv og data

- Alle data gemmes i din browsers `localStorage` under nøglen `local-qso:v1`.
- Intet overføres nogetsteds. Der er ingen backend, intet API-kald, ingen telemetri, ingen analyse.
- Rydning af browserens sitedata, brug af privat/inkognito-tilstand eller en anden browser/enhed medfører en ny tom logbog — brug *Eksporter .adi* til sikkerhedskopiering.

## Brugergrænsefladesprog

En sprogselector i overskriften dækker **28 sprog**. Vælg et, og resten af grænsefladen gengives øjeblikkeligt; dit valg gemmes ved siden af dine logs og respekteres ved næste besøg. Engelsk er standard.

Tilgængelige sprog (flagemoji + modersmålsnavn; alfabetisk ordnet inden for hvert skriftsystem):

🇺🇸 English · 🇨🇿 Čeština · 🇩🇰 Dansk · 🇩🇪 Deutsch · 🇪🇪 Eesti · 🇪🇸 Español · 🇫🇷 Français · 🇮🇪 Gaeilge · 🇭🇷 Hrvatski · 🇮🇹 Italiano · 🇱🇻 Latviešu · 🇱🇹 Lietuvių · 🇭🇺 Magyar · 🇳🇱 Nederlands · 🇳🇴 Norsk · 🇵🇱 Polski · 🇵🇹 Português · 🇷🇴 Română · 🇸🇰 Slovenčina · 🇸🇮 Slovenščina · 🇫🇮 Suomi · 🇸🇪 Svenska · 🇧🇾 Беларуская · 🇧🇬 Български · 🇷🇺 Русский · 🇷🇸 Српски · 🇺🇦 Українська · 🇬🇷 Ελληνικά

Universelle tekniske etiketter forbliver i deres kanoniske form på tværs af alle sprog: bændnavne (`20m`, `70cm`, …), ADIF-tilstandskoder (`SSB`, `FT8`, `CW`, …), `QSO`, `RST`, `UTC` og ISO-landekoder.

Mangler du en streng på dit sprog? Hver sprogordbog lever i en enkelt [`i18n.js`](i18n.js)-bundt, opdelt i 28 sektioner med `// ==== <lang> ====`-headerkommentarer. Grep efter headeren for dit sprog for at hoppe til dets sektion, tilføj/rediger derefter nøglen. Tilføjelse af et helt nyt sprog = indsæt en ny IIFE-blok i `i18n.js` på den alfabetiske position, tilføj sprogkoden til `SUPPORTED_LANGS` i `app.js`, og tilføj en `<select>`-mulighed i `index.html`.

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
  - `i18n.js` — en enkelt håndholdt vedligeholdt bundt, der bærer alle 28 sprogordbøger. Hvert sprog er en selvstændig IIFE, der tildeler `window.I18N[<lang>]` et fladt nøgle→streng-kort. Blokke er afgrænset af `// ==== <lang> ====`-headerkommentarer — grep efter en for at hoppe til dette sprog. Bundtet i én fil frem for 28 individuelle filer, fordi oversættelsesfiler er meget repetitive (samme nøglenavne, samme pladsholder-syntaks), og gzip komprimerer hele sættet langt bedre end 28 separate streams — sparer ~23 KB ved første indlæsning og skærer 27 HTTP-anmodninger. `t()` og `applyLanguage()` i `app.js` håndterer opslag (med engelsk fallback) og gennemgår DOM'en og opdaterer hvert `[data-i18n*]`-element.
  - `contests.js` — en enkelt håndholdt vedligeholdt bundt, der bærer alle 68 konkurrencekonfigurationer. Hver konkurrence er en selvstændig IIFE, der tildeler `window.CONTESTS[<id>]` et skemakonformt konfigurationsobjekt (`{name, shortName, windows[], bands[], modes[], exchange[], duplicateRule, cabrillo}`). Blokke er afgrænset af `// ==== <id> ====`-headerkommentarer — grep efter en for at hoppe til denne konkurrence. Bundtet i én fil frem for 68 individuelle filer, fordi konkurrencekonfigurationer er meget repetitive (samme skema, samme `APP_LQ_*`-præfiks, samme Cabrillo-headerfeltnavne), og gzip komprimerer hele sættet langt bedre end 68 separate streams — sparer ~42 KB ved første indlæsning og skærer 67 HTTP-anmodninger. Indlæses af et enkelt `<script>`-tag i `index.html` før `app.js`, så registret er befolket, når Konkurrence-dropdown'en bygges.
- Testet på nylige Chromium, Firefox og Safari (desktop + iOS).

## Tak til

Bygget af [YL3IM](https://www.qrz.com/db/YL3IM).

Tak til [A65BR](https://www.qrz.com/db/A65BR) Oleg for de uvurderlige råd der gjorde satellitdelen faktisk brugbar — de moderne tocifrede satellittilstandsbetegnelser, AMSAT-kataloget og uplink/downlink-autojusteringen stammer alle fra hans feedback.

Landsflag bruger Unicode-regionale indikatorsekvenser. De vises korrekt på macOS, iOS, Linux (med en flag-kapabel emoji-font) og Android. Windows inkluderer ikke en systemflagfont, så flagemoji kan vises som bogstavspar der.
