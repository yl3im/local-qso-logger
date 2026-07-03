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
- [ADIF-import en -export](#adif-import-en--export)
- [Privacy en gegevens](#privacy-en-gegevens)
- [Interfacetaal](#interfacetaal)
- [Thema's](#themas)
- [Technische opmerkingen](#technische-opmerkingen)
- [Dankwoord](#dankwoord)

## Functies

- Meerdere logboeken; elk met een eigen lijst van QSO's.
- Logboekacties: aanmaken, hernoemen, verwijderen, importeren uit ADIF, exporteren naar ADIF (`.adi`).
- Het QSO-formulier is gegroepeerd in drie blokken: **Stationsgegevens** (roepnaam van het station, roepnaam van de operator, eigen locator) die kleven tussen QSO's; **Bedrijfsmodus** (voortplantingsmodus, satelliet, modus, satellietermodus, band, RX-band) met satellietvelden die alleen zichtbaar zijn als de voortplantingsmodus *Satelliet* is; en **QSO-gegevens** (gecontacteerde roepnaam, gecontacteerde locator, UTC-datum/-tijd bij bewerking, opmerking, RST verzonden, RST ontvangen).
- Volledige ADIF `MODE` → `SUBMODE` taxonomie in het modusdropdown — kies een hoofdmodus (`SSB`, `MFSK`, …) of ga direct naar een specifieke submodus (`USB`, `FT4`, …); de app slaat beide velden op volgens ADIF en de tabel toont de specifieke submodus wanneer aanwezig.
- Volledige ADIF-voortplantingsmodusopsomming (SAT, RPT, EME, ES, MS, Aurora, enz.) als dropdown.
- Volledige AMSAT-satellietcatalogus (~110 satellieten) en een tweeniveaus **Satellietermodus**-dropdown: voorkeur tweelettercoderingsuplink/downlink-codes bovenaan (LU, LV, SX, UU, UV, VA, VU, VV) en de oudere eenletter-aanduidingen (A/B/J/K/L/R/S/T/U/V/W/X) gegroepeerd als *verouderd* onderaan. Het kiezen van een satellietermodus past automatisch `BAND` (uplink) en `RX band` (downlink) aan.
- Bewerken en verwijderen van elk QSO (met bevestiging bij verwijderen).
- Verstandige standaardwaarden: UTC-datum/-tijd vooraf ingevuld op *nu*, modusafhankelijke RST-standaardwaarden (59 voor spraakmodi, 599 voor CW/digitaal), klevende stationsgegevens + band + modus + voortplantingsmodus over opeenvolgende QSO's (alleen de per-contactvelden — roepnaam, hun locator, opmerking, RST — worden gewist na elk *QSO loggen*).
- Live-indicator voor dubbele roepnamen (informatief — duplicaten zijn toegestaan).
- Landesvlagkolom afgeleid van het roepnaamprefix (dekt ≥99 % van de gangbare amateurradioprefixen, inclusief draagbare verbindingen zoals `9A/M0NCG`).
- Landinstelling-bewuste datumweergave in de QSO-tabel; ISO-opslag en ADIF-uitvoer blijven ongewijzigd.
- Interface beschikbaar in **28 talen** (Engels plus 22 Latijns schrift, 5 Cyrillisch schrift en Grieks); vlaggetjesemoji-selector in de header.
- Dag-/nachtthema's (dag is standaard; de schakelaar is in de header).
- Mobielvriendelijke responsieve lay-out met aanraakformaat knoppen.
- Werkt volledig offline — geen netwerkaanvragen op enig moment.
- Installeerbaar als PWA (Aan startscherm toevoegen / App installeren) bij hosting via HTTPS.

## Aan de slag

Open gewoon `index.html` in een moderne browser. Geen bouwstap, geen installatie, geen server.

Als je het wilt hosten, zet de statische bestanden (`index.html`, `style.css`, `app.js`, `favicon.svg`, `manifest.webmanifest`, `service-worker.js` en de map `i18n/` met de 28 vertaalbestanden) op een willekeurige statische host (GitHub Pages, Netlify, je eigen webserver). Het werkt ook via `file://` — de service worker-registratie wordt automatisch overgeslagen op het `file:`-protocol, zodat `index.html` direct van schijf openen nog steeds schoon werkt.

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
  - **Stationsgegevens** — *Stationsroepnaam* (je zendroepnaam, ADIF `STATION_CALLSIGN`), *Operator* (de roepnaam van de individuele operator — verschilt van de *stationsroepnaam* wanneer een gastoperator aan de microfoon van een clubstation zit; ADIF `OPERATOR`) en *Mijn locator* (ADIF `MY_GRIDSQUARE`). Deze blijven kleven over QSO's in dezelfde sessie — stel ze eenmaal in en ze worden overgedragen.
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

## ADIF-import en -export

- **Export**: klik op *ADI exporteren* in de logboekheader. Er wordt een bestand gedownload dat voldoet aan **ADIF 3.1.7**. De header declareert `ADIF_VER 3.1.7`, `PROGRAMID local-qso`, `PROGRAMVERSION` en `CREATED_TIMESTAMP` (UTC). Per-QSO-velden uitgestoten (wanneer niet leeg): `CALL`, `QSO_DATE`, `TIME_ON`, `BAND`, `MODE`, `SUBMODE`, `PROP_MODE`, `GRIDSQUARE`, `BAND_RX`, `SAT_MODE`, `SAT_NAME`, `RST_SENT`, `RST_RCVD`, `COMMENT`, `STATION_CALLSIGN`, `OPERATOR`, `MY_GRIDSQUARE` — gevolgd door elk extra ADIF-veld dat bij import is bewaard (zie hieronder).
- **Import**: klik op *ADI-bestand importeren* onder het logboek-aanmaakformulier en kies een `.adi` / `.adif`-bestand. Er wordt een nieuw logboek van aangemaakt, genaamd `Imported YYYY-MM-DD HH:MM UTC`. Import voegt nooit samen met een bestaand logboek.
- **Verliesvrije doorgave**: bij import wordt elk ADIF-veld dat de app niet modelleert in zijn UI (bijv. `NAME`, `FREQ`, `TX_PWR`, `DXCC`, `QSL_SENT`/`QSL_RCVD`, `POTA_REF`, `APP_*`-velden) bewaard op het QSO en woordelijk opnieuw uitgestoten bij de volgende export. Een bestand exporteren dat zelf geïmporteerd was, bewaart dus alles.
- Veldlengte wordt behandeld als een UTF-8-byteaantal zoals de specificatie vereist, zodat multibyte-tekst (bijv. geaccentueerde tekens in `COMMENT`) correct wordt geparseerd.

## Privacy en gegevens

- Alle gegevens worden opgeslagen in de `localStorage` van je browser onder de sleutel `local-qso:v1`.
- Er wordt niets naar nergens doorgestuurd. Er is geen backend, geen API-aanroep, geen telemetrie, geen analyses.
- Het wissen van browsersite-gegevens, het gebruik van privé-/incognitomodus of een andere browser/apparaat betekent een nieuw leeg logboek — gebruik *ADI exporteren* voor back-ups.

## Interfacetaal

Een taalkiezer in de header bestrijkt **28 talen**. Kies er een en de rest van de interface wordt direct opnieuw gerenderd; je keuze wordt opgeslagen naast je logs en gerespecteerd bij het volgende bezoek. Engels is de standaard.

Beschikbare talen (vlaggetjesemoji + eigen naam; alfabetisch geordend binnen elk schriftsysteem):

🇺🇸 English · 🇨🇿 Čeština · 🇩🇰 Dansk · 🇩🇪 Deutsch · 🇪🇪 Eesti · 🇪🇸 Español · 🇫🇷 Français · 🇮🇪 Gaeilge · 🇭🇷 Hrvatski · 🇮🇹 Italiano · 🇱🇻 Latviešu · 🇱🇹 Lietuvių · 🇭🇺 Magyar · 🇳🇱 Nederlands · 🇳🇴 Norsk · 🇵🇱 Polski · 🇵🇹 Português · 🇷🇴 Română · 🇸🇰 Slovenčina · 🇸🇮 Slovenščina · 🇫🇮 Suomi · 🇸🇪 Svenska · 🇧🇾 Беларуская · 🇧🇬 Български · 🇷🇺 Русский · 🇷🇸 Српски · 🇺🇦 Українська · 🇬🇷 Ελληνικά

Universele technische labels blijven in hun canonieke vorm in alle talen: bandnamen (`20m`, `70cm`, …), ADIF-moduscodes (`SSB`, `FT8`, `CW`, …), `QSO`, `RST`, `UTC` en ISO-landcodes.

Ontbreekt een tekst in jouw taal? Elke taal is een enkel klein bestand in [`i18n/`](i18n/) — kopieer `i18n/en.js`, vertaal de waarden, sla op als `i18n/<code>.js`, voeg dan een `<script>`-tag plus een `<select>`-optie toe in `index.html` en de code in `SUPPORTED_LANGS` in `app.js`.

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
  - `i18n/<lang>.js` — één vertaalbestand per ondersteunde taal (28 in totaal). Elk is een kleine IIFE die `window.I18N[<lang>]` een platte sleutel→waarde-map toewijst. `t()` en `applyLanguage()` in `app.js` behandelen opzoekingen (met Engelse terugval) en lopen door de DOM en werken elk `[data-i18n*]`-element bij.
- Getest op recente Chromium, Firefox en Safari (desktop + iOS).

## Dankwoord

Gebouwd door [YL3IM](https://www.qrz.com/db/YL3IM).

Dank aan [A65BR](https://www.qrz.com/db/A65BR) Oleg voor de onschatbare tips die het satellietsgedeelte werkelijk bruikbaar maakten — de moderne tweelettercoderingsaanduidingen voor de satellietermodus, de AMSAT-catalogus en de automatische uplink/downlink-aanpassing zijn allemaal terug te voeren op zijn feedback.

Landvlaggen vertrouwen op Unicode regionaal-indicatorsequenties. Ze worden correct weergegeven op macOS, iOS, Linux (met een vlaggen-compatibel emoji-lettertype) en Android. Windows bevat geen systeemvlaggenlettertype, dus vlag-emoji kunnen daar als letterparen verschijnen.
