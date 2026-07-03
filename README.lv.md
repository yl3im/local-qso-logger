# Local QSO Logger

## Lasīt savā valodā

🇺🇸 [English](README.md) · 🇨🇿 [Čeština](README.cs.md) · 🇩🇰 [Dansk](README.da.md) · 🇩🇪 [Deutsch](README.de.md) · 🇪🇪 [Eesti](README.et.md) · 🇪🇸 [Español](README.es.md) · 🇫🇷 [Français](README.fr.md) · 🇮🇪 [Gaeilge](README.ga.md) · 🇭🇷 [Hrvatski](README.hr.md) · 🇮🇹 [Italiano](README.it.md) · 🇱🇻 Latviešu · 🇱🇹 [Lietuvių](README.lt.md) · 🇭🇺 [Magyar](README.hu.md) · 🇳🇱 [Nederlands](README.nl.md) · 🇳🇴 [Norsk](README.no.md) · 🇵🇱 [Polski](README.pl.md) · 🇵🇹 [Português](README.pt.md) · 🇷🇴 [Română](README.ro.md) · 🇸🇰 [Slovenčina](README.sk.md) · 🇸🇮 [Slovenščina](README.sl.md) · 🇫🇮 [Suomi](README.fi.md) · 🇸🇪 [Svenska](README.sv.md) · 🇧🇾 [Беларуская](README.be.md) · 🇧🇬 [Български](README.bg.md) · 🇷🇺 [Русский](README.ru.md) · 🇷🇸 [Српски](README.sr.md) · 🇺🇦 [Українська](README.uk.md) · 🇬🇷 [Ελληνικά](README.el.md)

Privātumu respektējošs radioamatieru QSO reģistrētājs, kas darbojas pilnībā tavā pārlūkprogrammā. Nav konta, nav servera, nav izsekošanas, nav analītikas — tavi žurnāli dzīvo tikai tavas pārlūkprogrammas `localStorage` un nekad neatstāj tavu ierīci.

Autors: [YL3IM](https://www.qrz.com/db/YL3IM). Projekta tīmekļa vietne: [qso.lv](https://qso.lv).

![Local QSO Logger darbojās uz iPad](media/iPad.png)

## Saturs

- [Lasīt savā valodā](#lasīt-savā-valodā)
- [Funkcijas](#funkcijas)
- [Darba sākšana](#darba-sākšana)
- [Instalēt kā PWA mobilajā ierīcē](#instalēt-kā-pwa-mobilajā-ierīcē)
  - [iOS (tikai Safari)](#ios-tikai-safari)
  - [Android (Chrome / Edge / Firefox)](#android-chrome--edge--firefox)
- [Žurnāli](#žurnāli)
- [QSO](#qso)
- [ADIF importēšana un eksportēšana](#adif-importēšana-un-eksportēšana)
- [Privātums un dati](#privātums-un-dati)
- [Interfeisa valoda](#interfeisa-valoda)
- [Tēmas](#tēmas)
- [Tehniskie piezīmes](#tehniskie-piezīmes)
- [Pateicības](#pateicības)

## Funkcijas

- Vairāki žurnāli; katrs ar savu QSO sarakstu.
- Žurnāla darbības: izveidot, pārdēvēt, dzēst, importēt no ADIF, eksportēt ADIF (`.adi`).
- QSO veidlapa sadalīta trīs blokos: **Stacijas dati** (stacijas izsaukuma signāls, operatora izsaukuma signāls, savs tīklojums), kas paliek saistīti starp QSO; **Darbības režīms** (izplatīšanas režīms, satelīts, režīms, satelīta režīms, josla, RX josla) ar satelīta laukiem, kas redzami tikai tad, kad izplatīšanas režīms ir *Satelīts*; un **QSO dati** (saziņas izsaukuma signāls, saziņas tīklojums, UTC datums/laiks rediģēšanas laikā, komentārs, RST sūtīts, RST saņemts).
- Pilna ADIF `MODE` → `SUBMODE` taksonomija režīmu nolaižamajā sarakstā — izvēlies vecāku režīmu (`SSB`, `MFSK`, …) vai dodies tieši uz konkrētu apakšrežīmu (`USB`, `FT4`, …); lietotne saglabā abus laukus atbilstoši ADIF un tabula rāda konkrēto apakšrežīmu, ja tāds ir.
- Pilns ADIF izplatīšanas režīmu uzskaitījums (SAT, RPT, EME, ES, MS, Aurora utt.) kā nolaižamais saraksts.
- Pilns AMSAT satelītu katalogs (~110 satelīti) un divlīmeņu **Satelīta režīma** nolaižamais saraksts: vēlamie divu burtu uplink/downlink kodi augšpusē (LU, LV, SX, UU, UV, VA, VU, VV) un vecākie viena burta apzīmējumi (A/B/J/K/L/R/S/T/U/V/W/X) grupēti kā *novecojuši* apakšā. Satelīta režīma izvēle automātiski pielāgo `BAND` (uplink) un `RX band` (downlink).
- Jebkura QSO rediģēšana un dzēšana (ar apstiprinājumu dzēšanas laikā).
- Saprātīgas noklusējuma vērtības: UTC datums/laiks aizpildīts uz *tagad*, režīmam atbilstošs RST noklusējums (59 balss režīmiem, 599 CW/ciparu), saistīti stacijas dati + josla + režīms + izplatīšanas režīms starp secīgiem QSO (tikai kontakta lauki — izsaukuma signāls, viņu tīklojums, komentārs, RST — tiek notīrīti pēc katra *Reģistrēt QSO*).
- Tiešraides dublēta izsaukuma signāla indikators (informatīvs — dublāti ir atļauti).
- Valsts karoga kolonna, kas iegūta no izsaukuma signāla prefiksa (aptver ≥99 % izplatītu radioamatieru prefiksu, tostarp pārnēsājamos signālus kā `9A/M0NCG`).
- Lokalizēts datuma attēlojums QSO tabulā; ISO glabāšana un ADIF izvade paliek nemainīgas.
- Interfeiss pieejams **28 valodās** (angļu valoda plus 22 latīņu, 5 kirilicā un grieķu); karodziņu emoji atlasītājs galvenē.
- Dienas / nakts tēmas (diena ir noklusējums; pārslēgšana ir galvenē).
- Mobilajām ierīcēm draudzīgs responsīvs izkārtojums ar pieskāriena izmēra pogām.
- Darbojas pilnībā bezsaistē — nekādiem tīkla pieprasījumiem nekad.
- Instalējams kā PWA (Pievienot sākuma ekrānam / Instalēt lietotni) mitinot ar HTTPS.

## Darba sākšana

Vienkārši atver `index.html` modernā pārlūkprogrammā. Nav veidošanas soļa, nav instalācijas, nav servera.

Ja vēlies to mitināt, novieto statiskos failus (`index.html`, `style.css`, `app.js`, `favicon.svg`, `manifest.webmanifest`, `service-worker.js` un `i18n/` direktoriju ar 28 tulkojumu failiem) uz jebkura statiskā hosta (GitHub Pages, Netlify, savs tīmekļa serveris). Darbojas arī ar `file://` — pakalpojuma darbinieka reģistrācija automātiski tiek izlaista `file:` protokolā, tāpēc `index.html` atvēršana tieši no diska darbojas tīri.

Mitinot ar HTTPS, lietotne kļūst instalējama kā PWA (pārlūkprogrammas izvēlne *Instalēt lietotni* / *Pievienot sākuma ekrānam*) un darbojas bezsaistē pēc pirmās apmeklēšanas, pateicoties kešatmiņai prioritizētam pakalpojuma darbiniekam, kas iepriekš kešo visus statiskos failus (UI + visi tulkojumi).

Noklusējuma žurnāls tiek automātiski izveidots pirmajā apmeklēšanas reizē, lai varētu nekavējoties sākt reģistrēšanu.

## Instalēt kā PWA mobilajā ierīcē

Kad lietotne tiek mitināta ar HTTPS (piemēram, GitHub Pages), vari to instalēt tālruņa sākuma ekrānā, lai tā darbotos pilnekrāna režīmā bez pārlūkprogrammas elementiem. Pēc pirmās palaišanas pakalpojuma darbinieks kešo visu, tāpēc turpmākās palaišanas darbojas pilnībā bezsaistē.

### iOS (tikai Safari)

iOS ierīcēs tikai Safari var instalēt PWA — trešo pušu pārlūkprogrammas nevar.

1. Atver vietni **Safari**.
2. Pieskar pogu **Kopīgot**.
3. Izvēlies **Pievienot sākuma ekrānam**, tad **Pievienot**.

Pamācība:

![iOS instalācijas pamācība](media/iOS_add_to_home_screen.gif)

Augstākas kvalitātes avots: [media/iOS_add_to_home_screen.mp4](media/iOS_add_to_home_screen.mp4).

### Android (Chrome / Edge / Firefox)

1. Atver vietni pārlūkprogrammā. Var automātiski parādīties uzaicinājums *Instalēt lietotni*.
2. Ja nē, atver **⋮ izvēlni** → **Instalēt lietotni** (vai **Pievienot sākuma ekrānam** vecākās versijās).

Pamācība:

![Android instalācijas pamācība](media/Android_add_to_home_screen.gif)

Augstākas kvalitātes avots: [media/Android_add_to_home_screen.mp4](media/Android_add_to_home_screen.mp4).

## Žurnāli

- **Izveidot:** ieraksti nosaukumu *Žurnāla nosaukumā* un iesniedz. Ja atstāj nosaukumu tukšu, noklusējums ir `Log YYYY-MM-DD HH:MM UTC`.
- **Pārslēgt:** noklikšķini uz jebkura žurnāla sānjoslā.
- **Pārdēvēt:** noklikšķini *Pārdēvēt* žurnāla galvenē. Nospied Enter, lai saglabātu, Escape, lai atceltu.
- **Dzēst:** noklikšķini *Dzēst žurnālu*. Tiks lūgts apstiprināt. Ja dzēš pēdējo žurnālu, automātiski tiek izveidots jauns.

## QSO

- Aizpildi veidlapu un nospied **Reģistrēt QSO**.
- Veidlapa ir organizēta trīs blokos:
  - **Stacijas dati** — *Stacijas izsaukuma signāls* (tavs raidīšanas izsaukuma signāls, ADIF `STATION_CALLSIGN`), *Operators* (atsevišķa operatora izsaukuma signāls — atšķiras no *stacijas izsaukuma signāla*, ja viesoperators atrodas kluba stacijas mikrofonā; ADIF `OPERATOR`) un *Mans tīklojums* (ADIF `MY_GRIDSQUARE`). Tie paliek saistīti starp QSO tajā pašā sesijā — iestatiet tos vienu reizi un tie pārnešas.
  - **Darbības režīms** — *Izplatīšanas režīms*, *Režīms*, *Josla*, plus tikai satelīta lauki *Satelīts* / *Satelīta režīms* / *RX josla*, kad izplatīšanas režīms ir *Satelīts*. Josla, režīms un izplatīšanas režīms ir saistīti tāpat kā stacijas dati.
  - **QSO dati** — lauki katram kontaktam: *Izsaukuma signāls*, *Tīklojums* (otras stacijas Maidenhead), *Komentārs* (ADIF `COMMENT`), *RST sūtīts*, *RST saņemts*. Rediģējot esošu QSO, šajā blokā parādās arī *Datums (UTC)* un *Laiks (UTC)*. Šie lauki tiek notīrīti pēc katra *Reģistrēt QSO*.
- Visi izsaukuma signāli (saziņas, stacijas, operatora) tiek automātiski rakstīti ar lielajiem burtiem ierakstīšanas laikā; abi tīklojuma lauki dara to pašu.
- Datums un laiks iesniegšanas brīdī tiek aizpildīti uz *tagad* UTC; rediģēšanas laikā vari ierakstīt jebkuru vērtību.
- RST sūtīts / RST saņemts, ja atstāts tukšs, noklusējums ir **59** balss režīmiem (SSB/FM/DIGITALVOICE) un **599** CW un ciparu režīmiem (CW/FT8/FT4/RTTY/PSK31/JT65). Noklusējums seko vecākajam MODE, tāpēc konkrēta apakšrežīma izvēle kā *USB* vai *FT4* joprojām dod pareizo noklusējumu.
- *Dublāts šajā žurnālā* čips parādās zem izsaukuma signāla lauka, ja signāls jau pastāv pašreizējā žurnālā. Dublāti *netiek* bloķēti.
- **Izplatīšanas režīms** — izvēles ADIF izplatīšanas režīmu nolaižamais saraksts (SAT, RPT, EME, F2, Es, MS, LOS utt.). Atstāj tukšu normāliem zemes HF QSO.
- **Satelīta QSO** — izplatīšanas režīma *Satelīts* izvēle atklāj trīs tikai satelīta laukus: **Satelīts** (nolaižamais saraksts ar ~110 AMSAT reģistrētiem satelītiem), **Satelīta režīms** (AMSAT burtu apzīmējumi, grupēti kā *mūsdienīgi* divu burtu uplink/downlink kodi augšā un *novecojuši* viena burta kodi apakšā) un **RX josla** (downlink josla). Satelīts, satelīta režīms un RX josla ir obligāti — pārlūkprogramma atteiks iesniegšanu bez tiem. Izvēloties **Satelīta režīmu**, automātiski tiek aizpildīta galvenā **Josla** ar uplink joslu un **RX josla** ar downlink joslu (piemēram, režīms J → uplink 2m, downlink 70cm). Pārslēdzoties *atpakaļ* uz satelītu no cita izplatīšanas režīma, satelīta režīms tiek atiestatīts, lai varētu izvēlēties jaunu. Nesatelīta QSO nekad nesatur satelīta laukus; esošā QSO pārslēgšana no satelīta uz citu izplatīšanas režīmu tos notīra. **Tīklojums** un **Mans tīklojums** ir vispārīgi lauki (noderīgi arī VHF/UHF tīklojuma sacensībām) un paliek redzami visiem QSO.
- **Rediģēt QSO** ar pogu *Rediģēt* rindā. Veidlapa pārslēdzas uz *Atjaunināt QSO* režīmu, rinda tiek izgaismota, un parādās poga *Atcelt*. Žurnālu pārslēgšana vai žurnāla dzēšana automātiski atceļ rediģēšanu.
- **Dzēst QSO** ar pogu *Dzēst* rindā (prasa apstiprinājumu).

## ADIF importēšana un eksportēšana

- **Eksportēt**: noklikšķini *Eksportēt .adi* žurnāla galvenē. Tiek lejupielādēts fails atbilstoši **ADIF 3.1.7**. Galvene deklarē `ADIF_VER 3.1.7`, `PROGRAMID local-qso`, `PROGRAMVERSION` un `CREATED_TIMESTAMP` (UTC). Lauki par QSO, kas tiek raidīti (ja nav tukši): `CALL`, `QSO_DATE`, `TIME_ON`, `BAND`, `MODE`, `SUBMODE`, `PROP_MODE`, `GRIDSQUARE`, `BAND_RX`, `SAT_MODE`, `SAT_NAME`, `RST_SENT`, `RST_RCVD`, `COMMENT`, `STATION_CALLSIGN`, `OPERATOR`, `MY_GRIDSQUARE` — kam seko katrs papildu ADIF lauks, kas saglabāts importēšanas laikā (sk. zemāk).
- **Importēt**: noklikšķini *Importēt .adi failu* zem žurnāla izveidošanas veidlapas un izvēlies `.adi` / `.adif` failu. No tā tiek izveidots jauns žurnāls ar nosaukumu `Imported YYYY-MM-DD HH:MM UTC`. Importēšana nekad nesaplūst ar esošu žurnālu.
- **Bezraidumu aprites cikls**: importēšanas laikā jebkurš ADIF lauks, ko lietotne nemodelē savā interfeisā (piemēram, `NAME`, `FREQ`, `TX_PWR`, `DXCC`, `QSL_SENT`/`QSL_RCVD`, `POTA_REF`, `APP_*` lauki), tiek saglabāts QSO un burtiski atkārtoti raidīts nākamajā eksportēšanas reizē. Tādējādi faila eksportēšana, kas pats tika importēts, saglabā visu.
- Lauka garums tiek uzskatīts par UTF-8 baitu skaitu, kā prasa specifikācija, tāpēc daudzbaitu teksts (piemēram, uzsvērtās rakstzīmes `COMMENT`) tiek parsēts pareizi.

## Privātums un dati

- Visi dati tiek glabāti tavas pārlūkprogrammas `localStorage` zem atslēgas `local-qso:v1`.
- Nekas netiek nosūtīts nekur. Nav aizmugures sistēmas, API izsaukumu, telemetrijas vai analītikas.
- Pārlūkprogrammas vietnes datu dzēšana, privātā/inkognito režīma izmantošana vai citas pārlūkprogrammas/ierīces izmantošana nozīmē jaunu tukšu žurnālu — izmanto *Eksportēt .adi* dublēšanai.

## Interfeisa valoda

Valodas atlasītājs galvenē aptver **28 valodas**. Izvēlies vienu un pārējais interfeiss tiek nekavējoties pārrenderēts; tava izvēle tiek saglabāta kopā ar žurnāliem un tiek respektēta nākamajā apmeklēšanas reizē. Noklusējums ir angļu valoda.

Pieejamās valodas (karodziņu emoji + vietējais nosaukums; alfabētiskā secībā katrā rakstā):

🇺🇸 English · 🇨🇿 Čeština · 🇩🇰 Dansk · 🇩🇪 Deutsch · 🇪🇪 Eesti · 🇪🇸 Español · 🇫🇷 Français · 🇮🇪 Gaeilge · 🇭🇷 Hrvatski · 🇮🇹 Italiano · 🇱🇻 Latviešu · 🇱🇹 Lietuvių · 🇭🇺 Magyar · 🇳🇱 Nederlands · 🇳🇴 Norsk · 🇵🇱 Polski · 🇵🇹 Português · 🇷🇴 Română · 🇸🇰 Slovenčina · 🇸🇮 Slovenščina · 🇫🇮 Suomi · 🇸🇪 Svenska · 🇧🇾 Беларуская · 🇧🇬 Български · 🇷🇺 Русский · 🇷🇸 Српски · 🇺🇦 Українська · 🇬🇷 Ελληνικά

Universālās tehniskās etiķetes paliek savā kanoniskajā formā visās valodās: joslu nosaukumi (`20m`, `70cm`, …), ADIF režīmu kodi (`SSB`, `FT8`, `CW`, …), `QSO`, `RST`, `UTC` un ISO valstu kodi.

Trūkst virknes tavā valodā? Katra valoda ir viens neliels fails [`i18n/`](i18n/) — kopē `i18n/en.js`, tulko vērtības, saglabā kā `i18n/<code>.js`, tad pievieno `<script>` atzīmi un `<select>` opciju `index.html` un kodu `SUPPORTED_LANGS` `app.js`.

## Tēmas

Tēmas pārslēgšana galvenē pārslēdzas starp dienu (noklusējums) un nakti. Preferences tiek saglabātas kopā ar žurnāliem un tiek respektētas nākamajā apmeklēšanas reizē. Vietējie datuma/laika atlasītāji seko tēmai caur `color-scheme`.

## Tehniskie piezīmes

- Vienas lapas lietotne, vanilla HTML + CSS + JavaScript. Nav ietvaru, nav veidošanas soļa, nav atkarību.
- Avota faili:
  - `index.html` — iezīmējums un meta atzīmes.
  - `style.css` — tēmas un izkārtojums (dienas/nakts mainīgie, mobilās medija vaicājumi).
  - `app.js` — stāvoklis, noturība, renderēšana, ADIF parsētājs/serializators, izsaukuma signāla prefiksa → valsts meklēšana.
  - `favicon.svg` — iekļauta SVG favikona.
  - `manifest.webmanifest` — Web App Manifest (nosaukums, tēmas krāsa, apjoms, ikona), lai lietotne būtu instalējama kā PWA mobilajā ierīcē un darbvirsmā.
  - `service-worker.js` — kešatmiņai prioritizēts pakalpojuma darbinieks, kas instalēšanas laikā iepriekš kešo visus statiskos failus, aktivizēšanas laikā dzēš veco kešatmiņu un pēc pirmās apmeklēšanas saglabā lietotni pilnīgi bezsaistē. Reģistrācija automātiski tiek izlaista `file://` protokolā, lai `index.html` atvēršana tieši no diska paliktu tīra.
  - `i18n/<lang>.js` — viens tulkojumu fails katrai atbalstītajai valodai (kopā 28). Katrs ir neliels IIFE, kas piešķir `window.I18N[<lang>]` plakanu atslēga→virkne kartēšanu. `t()` un `applyLanguage()` `app.js` apstrādā meklēšanas (ar angļu valodas rezervi) un iziet DOM atjauninot katru `[data-i18n*]` elementu.
- Pārbaudīts uz jaunākiem Chromium, Firefox un Safari (darbvirsma + iOS).

## Pateicības

Izveidojis [YL3IM](https://www.qrz.com/db/YL3IM).

Paldies [A65BR](https://www.qrz.com/db/A65BR) Olegam par nenovērtējamajiem padomiem, kas padarīja satelīta QSO daļu patiešām lietojamu — mūsdienīgie divu burtu satelīta režīma apzīmējumi, AMSAT katalogs un automātiskā uplink/downlink pielāgošana — viss tas cēlies no viņa atgriezeniskās saites.

Valstu karogi balstās uz Unicode reģionālo indikatoru sekvencēm. Tie pareizi tiek attēloti macOS, iOS, Linux (ar karogu spējīgu emoji fontu) un Android. Windows neietver sistēmas karogu fontu, tāpēc karogu emoji tur var parādīties kā burtu pāri.
