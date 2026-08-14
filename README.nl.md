# Local QSO Logger

## Lezen in jouw taal

🇺🇸 [English](README.md) · 🇨🇿 [Čeština](README.cs.md) · 🇩🇰 [Dansk](README.da.md) · 🇩🇪 [Deutsch](README.de.md) · 🇪🇪 [Eesti](README.et.md) · 🇪🇸 [Español](README.es.md) · 🇫🇷 [Français](README.fr.md) · 🇮🇪 [Gaeilge](README.ga.md) · 🇭🇷 [Hrvatski](README.hr.md) · 🇮🇹 [Italiano](README.it.md) · 🇱🇻 [Latviešu](README.lv.md) · 🇱🇹 [Lietuvių](README.lt.md) · 🇭🇺 [Magyar](README.hu.md) · 🇳🇱 Nederlands · 🇳🇴 [Norsk](README.no.md) · 🇵🇱 [Polski](README.pl.md) · 🇵🇹 [Português](README.pt.md) · 🇷🇴 [Română](README.ro.md) · 🇸🇰 [Slovenčina](README.sk.md) · 🇸🇮 [Slovenščina](README.sl.md) · 🇫🇮 [Suomi](README.fi.md) · 🇸🇪 [Svenska](README.sv.md) · 🇧🇾 [Беларуская](README.be.md) · 🇧🇬 [Български](README.bg.md) · 🇷🇺 [Русский](README.ru.md) · 🇷🇸 [Српски](README.sr.md) · 🇺🇦 [Українська](README.uk.md) · 🇬🇷 [Ελληνικά](README.el.md)

Een privacyvriendelijke amateurradio-QSO-logger die volledig in je browser draait. Geen account, geen server, geen tracking, geen analyses — je logboeken leven alleen in de `localStorage` van je browser en verlaten nooit je apparaat.

Door [YL3IM](https://www.qrz.com/db/YL3IM). Projectwebsite: [qso.lv](https://qso.lv).

![Local QSO Logger op iPad](media/iPad.png)

## Inhoudsopgave

- [Lezen in jouw taal](#lezen-in-jouw-taal)
- [Functies](#functies)
- [Aan de slag](#aan-de-slag)
- [Installeren als PWA op mobiel](#installeren-als-pwa-op-mobiel)
  - [iOS (alleen Safari)](#ios-alleen-safari)
  - [Android (Chrome / Edge / Firefox)](#android-chrome--edge--firefox)
- [Logboeken](#logboeken)
- [QSO's](#qsos)
- [Wedstrijden](#wedstrijden)
- [Import en export](#import-en-export)
- [Privacy en gegevens](#privacy-en-gegevens)
- [Interfacetaal](#interfacetaal)
- [Thema's](#themas)
- [Technische opmerkingen](#technische-opmerkingen)
- [Dankwoord](#dankwoord)

## Functies

- Meerdere logboeken; elk met een eigen lijst van QSO's.
- **Wedstrijdlogboeken** zijn optioneel — kies uit een catalogus van 68 ingebouwde wedstrijden bij het aanmaken van een logboek. Het QSO-formulier krijgt een wedstrijdspecifiek blok *Wedstrijduitwisseling*, de dubbelecontroledetectie respecteert de wedstrijdregel, en *Exporteer .cbr* genereert een Cabrillo v3-inzendingsbestand naast de gebruikelijke ADIF-export.
- Logboekacties: aanmaken, hernoemen, verwijderen, een logbestand importeren (ADIF of Cabrillo — formaat automatisch gedetecteerd), exporteren naar ADIF (`.adi`), plus *Exporteer .cbr* (Cabrillo v3) voor wedstrijdlogboeken. Het opnieuw importeren van een `.cbr`-bestand dat eerder door de app is geëxporteerd, herstelt het als hetzelfde wedstrijdlogboek.
- Het QSO-formulier is gegroepeerd in drie blokken: **Stationsgegevens** (roepnaam van het station, roepnaam van de operator, eigen locator) die kleven tussen QSO's; **Bedrijfsmodus** (voortplantingsmodus, satelliet, modus, satellietermodus, band, RX-band) met satellietvelden die alleen zichtbaar zijn als de voortplantingsmodus *Satelliet* is; en **QSO-gegevens** (gecontacteerde roepnaam, gecontacteerde locator, UTC-datum/-tijd bij bewerking, opmerking, RST verzonden, RST ontvangen).
- Volledige ADIF `MODE` → `SUBMODE` taxonomie in het modusdropdown — kies een hoofdmodus (`SSB`, `MFSK`, …) of ga direct naar een specifieke submodus (`USB`, `FT4`, …); de app slaat beide velden op volgens ADIF en de tabel toont de specifieke submodus wanneer aanwezig.
- Volledige ADIF-voortplantingsmodusopsomming (SAT, RPT, EME, ES, MS, Aurora, enz.) als dropdown.
- Volledige AMSAT-satellietcatalogus (~110 satellieten) en een tweeniveaus **Satellietermodus**-dropdown: voorkeur tweelettercoderingsuplink/downlink-codes bovenaan (LU, LV, SX, UU, UV, VA, VU, VV) en de oudere eenletter-aanduidingen (A/B/J/K/L/R/S/T/U/V/W/X) gegroepeerd als *verouderd* onderaan. Het kiezen van een satellietermodus past automatisch `BAND` (uplink) en `RX band` (downlink) aan.
- Bewerken en verwijderen van elk QSO (met bevestiging bij verwijderen).
- Verstandige standaardwaarden: UTC-datum/-tijd vooraf ingevuld op *nu*, modusafhankelijke RST-standaardwaarden (59 voor spraakmodi, 599 voor CW/digitaal), klevende stationsgegevens + band + modus + voortplantingsmodus over opeenvolgende QSO's (alleen de per-contactvelden — roepnaam, hun locator, opmerking, RST — worden gewist na elk *QSO loggen*).
- Live-indicator voor dubbele roepnamen (informatief — duplicaten zijn toegestaan).
- Landesvlagkolom afgeleid van het roepnaamprefix (dekt ≥99 % van de gangbare amateurradioprefixen, inclusief draagbare verbindingen zoals `9A/M0NCG`).
- Automatische detectie van **Mijn locator** met één tik: een 🌐-knop naast het veld vraagt de browser om je huidige coördinaten en vult de 6-tekens Maidenhead-locator in (gebruikt de Geolocation-API van de browser — vereist gebruikerstoestemming).
- Landinstelling-bewuste datumweergave in de QSO-tabel; ISO-opslag en ADIF-uitvoer blijven ongewijzigd.
- Interface beschikbaar in **28 talen** (Engels plus 22 Latijns schrift, 5 Cyrillisch schrift en Grieks); vlaggetjesemoji-selector in de header.
- Dag-/nachtthema's (dag is standaard; de schakelaar is in de header).
- Mobielvriendelijke responsieve lay-out met aanraakformaat knoppen.
- Werkt volledig offline — geen netwerkaanvragen op enig moment.
- Installeerbaar als PWA (Aan startscherm toevoegen / App installeren) bij hosting via HTTPS.

## Aan de slag

Open gewoon `index.html` in een moderne browser. Geen bouwstap, geen installatie, geen server.

Als je het wilt hosten, zet de statische bestanden (`index.html`, `style.css`, `app.js`, `favicon.svg`, `manifest.webmanifest`, `service-worker.js`, de enkele `i18n.js`-bundel die alle 28 taalwoordenboeken draagt, en de enkele `contests.js`-bundel die alle 68 wedstrijdconfiguraties draagt) op een willekeurige statische host (GitHub Pages, Netlify, je eigen webserver). Het werkt ook via `file://` — de service worker-registratie wordt automatisch overgeslagen op het `file:`-protocol, zodat `index.html` direct van schijf openen nog steeds schoon werkt.

Bij hosting via HTTPS wordt de app installeerbaar als PWA (de browser *App installeren* / *Aan startscherm toevoegen*-menu) en werkt offline na het eerste bezoek dankzij een cache-first service worker die alle statische bestanden vooraf in de cache plaatst (UI + alle vertalingen).

Bij het eerste bezoek wordt automatisch een standaard logboek aangemaakt, zodat je meteen kunt beginnen met loggen.

## Installeren als PWA op mobiel

Wanneer de app via HTTPS wordt gehost (bijv. GitHub Pages), kun je deze installeren op het startscherm van je telefoon zodat deze volledig scherm draait zonder browserkopbalk. Na de eerste start slaat de service worker alles op in de cache, zodat volgende starts volledig offline werken.

### iOS (alleen Safari)

Op iOS kan alleen Safari PWA's installeren — browsers van derden kunnen dat niet.

1. Open de site in **Safari**.
2. Tik op de **Deel**-knop.
3. Kies **Zet op beginscherm**, dan **Voeg toe**.

Handleiding:

![iOS-installatiehandleiding](media/iOS_add_to_home_screen.gif)

Hogere kwaliteitsbron: [media/iOS_add_to_home_screen.mp4](media/iOS_add_to_home_screen.mp4).

### Android (Chrome / Edge / Firefox)

1. Open de site in je browser. Er kan automatisch een prompt *App installeren* verschijnen.
2. Open anders het **⋮-menu** → **App installeren** (of **Aan startscherm toevoegen** op oudere versies).

Handleiding:

![Android-installatiehandleiding](media/Android_add_to_home_screen.gif)

Hogere kwaliteitsbron: [media/Android_add_to_home_screen.mp4](media/Android_add_to_home_screen.mp4).

## Logboeken

- **Aanmaken:** typ een naam in *Lognaam* en dien in. Als je de naam leeg laat, wordt `Log YYYY-MM-DD HH:MM UTC` als standaard gebruikt.
- **Wisselen:** klik op een logboek in de zijbalk.
- **Hernoemen:** klik op *Hernoemen* in de logboekheader. Druk op Enter om op te slaan, Escape om te annuleren.
- **Verwijderen:** klik op *Log verwijderen*. Je wordt gevraagd om bevestiging. Als je het laatste logboek verwijdert, wordt automatisch een nieuw aangemaakt.

## QSO's

- Vul het formulier in en druk op **QSO loggen**.
- Het formulier is georganiseerd in drie blokken:
  - **Stationsgegevens** — *Stationsroepnaam* (je zendroepnaam, ADIF `STATION_CALLSIGN`), *Operator* (de roepnaam van de individuele operator — verschilt van de *stationsroepnaam* wanneer een gastoperator aan de microfoon van een clubstation zit; ADIF `OPERATOR`) en *Mijn locator* (ADIF `MY_GRIDSQUARE`) met een 🌐-knop die de locator vult vanuit de huidige locatie van je browser (Geolocation-API — de browser vraagt de eerste keer om toestemming). Deze blijven kleven over QSO's in dezelfde sessie — stel ze eenmaal in en ze worden overgedragen.
  - **Bedrijfsmodus** — *Voortpl. modus*, *Modus*, *Band*, plus de satellit-only-velden *Satelliet* / *Satellietermodus* / *RX-band* wanneer de voortplantingsmodus *Satelliet* is. Band, modus en voortplantingsmodus kleven zoals stationsgegevens.
  - **QSO-gegevens** — per-contactvelden: *Roepnaam*, *Locator* (Maidenhead van het andere station), *Opmerking* (ADIF `COMMENT`), *RST verzonden*, *RST ontvangen*. Bij het bewerken van een bestaand QSO verschijnen *Datum (UTC)* en *Tijd (UTC)* ook in dit blok. Deze velden worden gewist na elk *QSO loggen*.
- Alle roepnamen (gecontacteerd, station, operator) worden automatisch in hoofdletters geconverteerd tijdens het typen; beide locatorvelden doen hetzelfde.
- Datum en tijd worden bij indiening vooraf ingevuld op *nu* in UTC; bij bewerking kun je elke waarde typen.
- RST verzonden / RST ontvangen, als leeg gelaten, zijn standaard **59** voor spraakmodi (SSB/FM/DIGITALVOICE) en **599** voor CW en digitale modi (CW/FT8/FT4/RTTY/PSK31/JT65). De standaard volgt de bovenliggende MODE, zodat het kiezen van een specifieke submodus zoals *USB* of *FT4* toch de juiste standaard geeft.
- Een chip *Duplicaat in dit log* verschijnt onder het roepnaamveld als het roepnaam al bestaat in het huidige logboek. Duplicaten zijn *niet* geblokkeerd.
- **Voortplantingsmodus** — optioneel dropdown van ADIF-voortplantingsmodi (SAT, RPT, EME, F2, Es, MS, LOS, enz.). Laat leeg voor normale terrestrische HF-QSO's.
- **Satelliet-QSO's** — het selecteren van voortplantingsmodus *Satelliet* onthult drie satellit-only-velden: **Satelliet** (dropdown van ~110 AMSAT-geregistreerde satellieten), **Satellietermodus** (AMSAT-letteraanduidingen, gegroepeerd als *moderne* tweelettercode uplink/downlink bovenaan en *verouderde* éénlettercodes onderaan) en **RX-band** (downlinkband). Satelliet, satellietermodus en RX-band zijn verplicht — de browser weigert in te dienen zonder hen. Het kiezen van een **Satellietermodus** vult automatisch de hoofd-**Band** met de uplinkband en **RX-band** met de downlinkband (bijv. modus J → 2m uplink, 70cm downlink). Terugschakelen naar *satelliet* vanuit een andere voortplantingsmodus reset de satellietermodus zodat je een nieuwe kiest. Niet-satelliet-QSO's dragen nooit satellietvelden; een bestaand QSO overschakelen van satelliet naar een andere voortplantingsmodus verwijdert ze netjes. **Locator** en **Mijn locator** zijn algemene velden (ook handig voor VHF/UHF-locatorkampioenschappen) en blijven zichtbaar voor alle QSO's.
- **Een QSO bewerken** met de *Bewerken*-knop op de rij. Het formulier schakelt over naar *QSO bijwerken*-modus, de rij wordt gemarkeerd en er verschijnt een *Annuleren*-knop. Van logboek wisselen of het log verwijderen annuleert het bewerken automatisch.
- **Een QSO verwijderen** met de *Verwijderen*-knop op de rij (vraagt om bevestiging).

## Wedstrijden

Een logboek kan optioneel een **wedstrijdlogboek** zijn — kies een wedstrijd uit de *Wedstrijd*-dropdown in het formulier voor het aanmaken van een logboek. Lege dropdown = normaal logboek (standaard, bestaand gedrag ongewijzigd).

Wedstrijdlogboeken krijgen:

- **Wedstrijduitwisselingsblok** in het QSO-formulier, dynamisch gerenderd op basis van het schema van de geselecteerde wedstrijd. Veldtypen zijn `text`, `number` en `serial` (auto-incrementerend, alleen-lezen). Velden gemarkeerd als *sticky* (je eigen zone / county / district / vermogen / leeftijd / …) worden vooraf ingevuld met de waarde van het vorige QSO; velden per QSO (hun zone, hun serienummer, …) worden gewist na elk *QSO loggen*.
- **Wedstrijdbadge** naast de lognaam in de detailheader.
- **Duplicaatdetectie** die de `duplicateRule` van de wedstrijd respecteert (`per-band-mode`, `per-band`, `per-day` of `off`). De chip blijft alleen informatief — blokkeert nooit het indienen.
- **Waarschuwingschip** wanneer de huidige UTC buiten een van de door de wedstrijd gedeclareerde datumvensters valt (12 jaar vooraf geladen, 2026–2037), of wanneer de geselecteerde band / modus niet in de legale set van de wedstrijd staat. Blokkeert nooit.
- **Inzendingsinfopaneel** in de detailheader: een inline formulier voor de Cabrillo-headervelden die de wedstrijd declareert (categorie, vermogen, naam, club, adres, soapbox, …). Waarden blijven op het logboek behouden, niet per QSO.
- **Exporteer .cbr**-knop in de detailheader, naast *ADI exporteren*. Genereert een Cabrillo v3-bestand: `CALLSIGN` / `GRID-LOCATOR` / `OPERATORS` vooraf ingevuld vanuit de stationsgegevens van het eerste QSO, de rest vanuit het inzendingsinfopaneel, dan één `QSO:`-regel per contact in chronologische volgorde met de `sentTemplate` / `rcvdTemplate`-kolommen van de wedstrijd.
- **Cabrillo-herimport** via de standaardknop *Logbestand importeren* — een `.cbr`-bestand dat eerder door de app is geëxporteerd (of door elke andere logger die standaard Cabrillo v3 uitvoert) keert terug naar een vers wedstrijdlogboek van het juiste type. De `CONTEST:`-header wordt vergeleken met de ingebouwde catalogus; wanneer meerdere configuraties dezelfde tag delen (bijv. `ARRL-10` komt overeen met zowel `arrl-10m-dx` als `arrl-10m-w`), disambigueert de app door de moduletter van de QSO-regel en het aantal kolommen te matchen met het sjabloon van elke kandidaat, en geeft dan de voorkeur aan de `-dx`-variant. Headervelden (categorie, naam, club, soapbox, …) rehydrateren het inzendingsinfopaneel; QSO-uitwisselingswaarden rehydrateren `q.contestExchange` volgens het sjabloon van de wedstrijd.

### Ingebouwde wedstrijdcatalogus (68 configuraties)

Gegroepeerd per familie:

- **CQ-familie** (9): CQ WW SSB/CW/RTTY, CQ WPX SSB/CW/RTTY, CQ 160 CW/SSB, CQ-M International.
- **ARRL-familie** (9): ARRL DX SSB/CW (DX-zijde), ARRL Field Day, ARRL 10m/160m/RTTY Roundup (elk geleverd vanuit *beide* DX- en W/VE-perspectieven).
- **IARU** (2): IARU HF Championship, IARU R1 Field Day.
- **WAE en overige Europese** (8): WAE DX SSB/CW, EU HF Championship, LZ DX, Baltic Contest, NRAU-Baltic SSB/CW, SP DX.
- **Centraal-/Oost-Europese asymmetrische — beide perspectieven** (14): OK/OM DX CW+SSB, HA DX, YO DX HF, Ukrainian DX, REF Contest CW+SSB.
- **Russische club / RadioSport** (12): Russian DX (beide zijden), Russian WW RTTY, Russian WW MultiMode, Yuri Gagarin International, Cup of the Russian Federation CW+SSB, RRTC, Asiatic Russia Championship, UA1DZ Memorial Cup, RDAC, RAEM.
- **Wit-Rusland + Italië + Kroatië + Spanje + Oekraïense RTTY** (12): Belarus BFRR CW+SSB (beide zijden), ARI DX (beide zijden), Croatian 9A CW (beide zijden), Spanish CNCW (beide zijden), Ukrainian RTTY (beide zijden).
- **Wereldwijd** (2): All Asian DX CW+SSB.

Asymmetrische wedstrijden (waarbij het gastland en de DX-zijde verschillende uitwisselingen sturen) worden geleverd met **twee configuraties** — één voor het perspectief van het gastland (klevende regiocode) en één voor het DX-perspectief (klevend serienummer). Het ontvangen veld is een enkel vrij tekstveld zodat de operator afhankelijk van het contact elk formaat kan typen.

Elke configuratie draagt:

- Wedstrijduitwisselingswaarden opnieuw uitgezonden in ADIF-export via `APP_LQ_*`-namespacevelden; het headerstempel `APP_LQ_CONTEST_ID` laat een latere herimport toe het logboek te rehydrateren als dezelfde wedstrijd met alle velden intact.
- 12 jaar aan datumvensters (2026–2037) zodat de chip *buiten het wedstrijdvenster* een decennium nuttig blijft zonder een nieuwe levering.
- Een Cabrillo-sjabloon die elk uitwisselingsveld in kaart brengt naar de juiste kolom van de `QSO:`-regel.

Een nieuwe wedstrijd toevoegen = plak een nieuw IIFE-blok in [`contests.js`](contests.js) op de alfabetische positie (elke bestaande wedstrijd wordt afgebakend door een `// ==== <id> ====`-headercommentaar, dus het is makkelijk te vinden waar je moet invoegen). Geen wijziging in `index.html`, geen wijziging in `service-worker.js`, geen wijziging in `app.js` nodig — de renderer, de indieningshandler, de duplicaatdetector, de ADIF-rondgang en de Cabrillo-uitzender nemen elke configuratie op als pure data.

## Import en export

- **Importeer** elk logbestand — klik op *Logbestand importeren* onder het logboek-aanmaakformulier en kies een `.adi` / `.adif` (ADIF)- of `.cbr` / `.cab` (Cabrillo v3)-bestand. Het formaat wordt automatisch gedetecteerd op basis van de eerste regel van het bestand (`<...>` → ADIF, `START-OF-LOG:` → Cabrillo, `[REG1TEST;1]` → een "EDI nog niet ondersteund"-waarschuwing). Er wordt altijd een nieuw logboek aangemaakt — import voegt nooit samen met een bestaande. ADIF-imports komen binnen als gewone logs tenzij de header een `APP_LQ_CONTEST_ID` draagt geschreven door onze eigen wedstrijdexport (in dat geval wordt het log gerehydrateerd als wedstrijdlog van die wedstrijd). Cabrillo-imports komen altijd binnen als wedstrijdlogs — zie de sectie *Wedstrijden* voor hoe de `CONTEST:`-tag wordt vergeleken met de ingebouwde catalogus.
- **ADIF-export**: klik op *ADI exporteren* in de logboekheader. Er wordt een bestand gedownload dat voldoet aan **ADIF 3.1.7**. De header declareert `ADIF_VER 3.1.7`, `PROGRAMID local-qso`, `PROGRAMVERSION` en `CREATED_TIMESTAMP` (UTC). Per-QSO-velden uitgestoten (wanneer niet leeg): `CALL`, `QSO_DATE`, `TIME_ON`, `BAND`, `MODE`, `SUBMODE`, `PROP_MODE`, `GRIDSQUARE`, `BAND_RX`, `SAT_MODE`, `SAT_NAME`, `RST_SENT`, `RST_RCVD`, `COMMENT`, `STATION_CALLSIGN`, `OPERATOR`, `MY_GRIDSQUARE` — gevolgd door elk extra ADIF-veld dat bij import is bewaard (zie hieronder).
- **Cabrillo-export** wordt gedocumenteerd in de sectie *Wedstrijden* hierboven — alleen beschikbaar voor wedstrijdlogboeken (de knop *Exporteer .cbr* verschijnt in de logboekheader wanneer het log een wedstrijd heeft).
- **Verliesvrije doorgave**: bij ADIF-import wordt elk veld dat de app niet modelleert in zijn UI (bijv. `NAME`, `FREQ`, `TX_PWR`, `DXCC`, `QSL_SENT`/`QSL_RCVD`, `POTA_REF`, `APP_*`-velden) bewaard op het QSO en woordelijk opnieuw uitgestoten bij de volgende ADIF-export. Een bestand exporteren dat zelf geïmporteerd was, bewaart dus alles.
- Veldlengte wordt in ADIF behandeld als een UTF-8-byteaantal zoals de specificatie vereist, zodat multibyte-tekst (bijv. geaccentueerde tekens in `COMMENT`) correct wordt geparseerd.

## Privacy en gegevens

- Alle gegevens worden opgeslagen in de `localStorage` van je browser onder de sleutel `local-qso:v1`.
- Er wordt niets naar nergens doorgestuurd. Er is geen backend, geen API-aanroep, geen telemetrie, geen analyses.
- Het wissen van browsersite-gegevens, het gebruik van privé-/incognitomodus of een andere browser/apparaat betekent een nieuw leeg logboek — gebruik *ADI exporteren* voor back-ups.

## Interfacetaal

Een taalkiezer in de header bestrijkt **28 talen**. Kies er een en de rest van de interface wordt direct opnieuw gerenderd; je keuze wordt opgeslagen naast je logs en gerespecteerd bij het volgende bezoek. Engels is de standaard.

Beschikbare talen (vlaggetjesemoji + eigen naam; alfabetisch geordend binnen elk schriftsysteem):

🇺🇸 English · 🇨🇿 Čeština · 🇩🇰 Dansk · 🇩🇪 Deutsch · 🇪🇪 Eesti · 🇪🇸 Español · 🇫🇷 Français · 🇮🇪 Gaeilge · 🇭🇷 Hrvatski · 🇮🇹 Italiano · 🇱🇻 Latviešu · 🇱🇹 Lietuvių · 🇭🇺 Magyar · 🇳🇱 Nederlands · 🇳🇴 Norsk · 🇵🇱 Polski · 🇵🇹 Português · 🇷🇴 Română · 🇸🇰 Slovenčina · 🇸🇮 Slovenščina · 🇫🇮 Suomi · 🇸🇪 Svenska · 🇧🇾 Беларуская · 🇧🇬 Български · 🇷🇺 Русский · 🇷🇸 Српски · 🇺🇦 Українська · 🇬🇷 Ελληνικά

Universele technische labels blijven in hun canonieke vorm in alle talen: bandnamen (`20m`, `70cm`, …), ADIF-moduscodes (`SSB`, `FT8`, `CW`, …), `QSO`, `RST`, `UTC` en ISO-landcodes.

Ontbreekt een tekst in jouw taal? Elk taalwoordenboek leeft in één enkele [`i18n.js`](i18n.js)-bundel, opgesplitst in 28 secties door `// ==== <lang> ====`-headercommentaren. Grep de header van je taal om naar diens sectie te springen, voeg dan de sleutel toe/bewerk deze. Een compleet nieuwe taal toevoegen = plak een nieuw IIFE-blok in `i18n.js` op de alfabetische positie, voeg de taalcode toe aan `SUPPORTED_LANGS` in `app.js`, en voeg een `<select>`-optie toe in `index.html`.

## Thema's

De themaschakelaar in de header schakelt tussen dag (standaard) en nacht. De voorkeur wordt opgeslagen naast je logs en gerespecteerd bij het volgende bezoek. Ingebouwde datum-/tijdkiezers volgen het thema via `color-scheme`.

## Technische opmerkingen

- Enkelpagina-app, vanilla HTML + CSS + JavaScript. Geen frameworks, geen bouwstap, geen afhankelijkheden.
- Bronbestanden:
  - `index.html` — opmaak en meta-tags.
  - `style.css` — thema's en lay-out (dag/nacht-variabelen, mobiele mediaquery's).
  - `app.js` — status, persistentie, rendering, ADIF-parser/serializer, roepnaamprefix → landopzoeking.
  - `favicon.svg` — inline SVG-favicon.
  - `manifest.webmanifest` — Web App Manifest (naam, themakleur, scope, icoon) zodat de app installeerbaar is als PWA op mobiel en desktop.
  - `service-worker.js` — cache-first service worker die bij installatie alle statische bestanden vooraf in de cache plaatst, bij activering oude caches verwijdert en de app na het eerste bezoek volledig offline houdt. De registratie wordt automatisch overgeslagen op het `file://`-protocol zodat `index.html` direct van schijf openen schoon blijft.
  - `i18n.js` — één handmatig onderhouden bundel die alle 28 taalwoordenboeken draagt. Elke taal is een zelfstandige IIFE die `window.I18N[<lang>]` een platte sleutel→waarde-map toewijst. Blokken worden afgebakend door `// ==== <lang> ====`-headercommentaren — grep er één om naar die taal te springen. Gebundeld in één bestand in plaats van 28 individuele bestanden omdat vertaalbestanden zeer repetitief zijn (dezelfde sleutelnamen, dezelfde placeholder-syntaxis) en gzip de hele set veel beter comprimeert dan 28 aparte streams — bespaart ~23 KB bij eerste laden en snijdt 27 HTTP-verzoeken weg. `t()` en `applyLanguage()` in `app.js` behandelen opzoekingen (met Engelse terugval) en lopen door de DOM en werken elk `[data-i18n*]`-element bij.
  - `contests.js` — één handmatig onderhouden bundel die alle 68 wedstrijdconfiguraties draagt. Elke wedstrijd is een zelfstandige IIFE die `window.CONTESTS[<id>]` een schema-conform configuratieobject toewijst (`{name, shortName, windows[], bands[], modes[], exchange[], duplicateRule, cabrillo}`). Blokken worden afgebakend door `// ==== <id> ====`-headercommentaren — grep er één om naar die wedstrijd te springen. Gebundeld in één bestand in plaats van 68 individuele bestanden omdat wedstrijdconfiguraties zeer repetitief zijn (hetzelfde schema, hetzelfde `APP_LQ_*`-voorvoegsel, dezelfde Cabrillo-headerveldnamen) en gzip de hele set veel beter comprimeert dan 68 aparte streams — bespaart ~42 KB bij eerste laden en snijdt 67 HTTP-verzoeken weg. Geladen door een enkele `<script>`-tag in `index.html` vóór `app.js` zodat het register gevuld is wanneer de Wedstrijd-dropdown wordt opgebouwd.
- Getest op recente Chromium, Firefox en Safari (desktop + iOS).

## Dankwoord

Gebouwd door [YL3IM](https://www.qrz.com/db/YL3IM).

Dank aan [A65BR](https://www.qrz.com/db/A65BR) Oleg voor de onschatbare tips die het satellietsgedeelte werkelijk bruikbaar maakten — de moderne tweelettercoderingsaanduidingen voor de satellietermodus, de AMSAT-catalogus en de automatische uplink/downlink-aanpassing zijn allemaal terug te voeren op zijn feedback.

Landvlaggen vertrouwen op Unicode regionaal-indicatorsequenties. Ze worden correct weergegeven op macOS, iOS, Linux (met een vlaggen-compatibel emoji-lettertype) en Android. Windows bevat geen systeemvlaggenlettertype, dus vlag-emoji kunnen daar als letterparen verschijnen.
