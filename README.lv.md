# Local QSO Logger

## Lasiet savā valodā

🇺🇸 [English](README.md) · 🇨🇿 [Čeština](README.cs.md) · 🇩🇰 [Dansk](README.da.md) · 🇩🇪 [Deutsch](README.de.md) · 🇪🇪 [Eesti](README.et.md) · 🇪🇸 [Español](README.es.md) · 🇫🇷 [Français](README.fr.md) · 🇮🇪 [Gaeilge](README.ga.md) · 🇭🇷 [Hrvatski](README.hr.md) · 🇮🇹 [Italiano](README.it.md) · 🇱🇻 Latviešu · 🇱🇹 [Lietuvių](README.lt.md) · 🇭🇺 [Magyar](README.hu.md) · 🇳🇱 [Nederlands](README.nl.md) · 🇳🇴 [Norsk](README.no.md) · 🇵🇱 [Polski](README.pl.md) · 🇵🇹 [Português](README.pt.md) · 🇷🇴 [Română](README.ro.md) · 🇸🇰 [Slovenčina](README.sk.md) · 🇸🇮 [Slovenščina](README.sl.md) · 🇫🇮 [Suomi](README.fi.md) · 🇸🇪 [Svenska](README.sv.md) · 🇧🇾 [Беларуская](README.be.md) · 🇧🇬 [Български](README.bg.md) · 🇷🇺 [Русский](README.ru.md) · 🇷🇸 [Српски](README.sr.md) · 🇺🇦 [Українська](README.uk.md) · 🇬🇷 [Ελληνικά](README.el.md)

Privātumu cienošs amatieru radio QSO žurnāls, kas pilnībā strādā jūsu pārlūkprogrammā. Bez konta, bez servera, bez izsekošanas, bez analītikas — jūsu žurnāli glabājas tikai pārlūka `localStorage` atmiņā un nekad neaiziet no jūsu ierīces.

Autors: [YL3IM](https://www.qrz.com/db/YL3IM). Projekta tīmekļa vietne: [qso.ham.lv](https://qso.ham.lv).

![Local QSO Logger uz iPad](media/iPad.png)

## Saturs

- [Lasiet savā valodā](#lasiet-savā-valodā)
- [Funkcijas](#funkcijas)
- [Darba sākšana](#darba-sākšana)
- [Instalēt kā PWA mobilajā ierīcē](#instalēt-kā-pwa-mobilajā-ierīcē)
  - [iOS (tikai Safari)](#ios-tikai-safari)
  - [Android (Chrome / Edge / Firefox)](#android-chrome--edge--firefox)
- [Žurnāli](#žurnāli)
- [QSO](#qso)
- [ADIF imports un eksports](#adif-imports-un-eksports)
- [Privātums un dati](#privātums-un-dati)
- [Saskarnes valoda](#saskarnes-valoda)
- [Tēmas](#tēmas)
- [Tehniskās piezīmes](#tehniskās-piezīmes)
- [Pateicības](#pateicības)

## Funkcijas

- Vairāki žurnāli, katram savs QSO saraksts.
- Žurnāla darbības: izveidot, pārdēvēt, dzēst, importēt no ADIF, eksportēt uz ADIF (`.adi`).
- QSO lauki: izsaukums, UTC datums, UTC laiks, josla, veids, RST nosūtīts, RST saņemts.
- Jebkura QSO labošana un dzēšana (ar apstiprinājumu dzēšanai).
- Saprātīgi noklusējumi: šodienas UTC datums/laiks iepriekš aizpildīts, no veida atkarīgi RST noklusējumi (59 balss veidiem, 599 CW/digital), lipīga josla un veids starp secīgiem QSO.
- Reāllaika dublikāta izsaukuma indikators (informatīvs — dublikāti ir atļauti).
- Valsts karoga kolonna, kas atvasināta no izsaukuma prefiksa (sedz ≥99 % bieži sastopamo amatieru radio prefiksu, ieskaitot pārvietojamus izsaukumus kā `9A/M0NCG`).
- Lokalizācijai atbilstoša datuma attēlošana QSO tabulā; ISO uzglabāšana un ADIF izvade paliek nemainīgas.
- Dienas/nakts tēmas (diena pēc noklusējuma; pārslēgs atrodas galvenē).
- Mobilajām ierīcēm draudzīgs reaģējošs izkārtojums ar pieskāriena izmēra pogām.
- Strādā pilnībā bezsaistē — nekādu tīkla pieprasījumu.
- Instalējams kā PWA (Pievienot sākuma ekrānam / Instalēt lietotni), kad hostēts caur HTTPS.
- Saskarne pieejama **28 valodās** (angļu plus 22 latīņu, 5 kirilicas un grieķu); karoga emoji izvēlne galvenē.

## Darba sākšana

Vienkārši atveriet `index.html` modernā pārlūkā. Nav nepieciešama būvēšana, instalēšana, serveris.

Ja vēlaties to mitināt, novietojiet statiskos failus (`index.html`, `style.css`, `app.js`, `favicon.svg`, `manifest.webmanifest`, `service-worker.js` un mapi `i18n/` ar 28 tulkojumu failiem) jebkurā statiskā mitinātājā (GitHub Pages, Netlify, savs tīmekļa serveris). Tas darbosies arī caur `file://` — service workera reģistrācija tiek automātiski izlaista `file:` protokolam, tāpēc `index.html` tieša atvēršana no diska darbojas tīri.

Kad tas tiek pasniegts caur HTTPS, lietotne kļūst instalējama kā PWA (caur pārlūka *Instalēt lietotni* / *Pievienot sākuma ekrānam* izvēlni) un strādā bezsaistē pēc pirmās apmeklējuma, pateicoties cache-first service workerim, kas iepriekš kešo katru statisko failu (UI + visi tulkojumi).

Noklusējuma žurnāls tiek automātiski izveidots pirmajā apmeklējumā, lai jūs varētu nekavējoties sākt reģistrēšanu.

## Instalēt kā PWA mobilajā ierīcē

Kad lietotne tiek pasniegta caur HTTPS (piemēram, GitHub Pages), jūs varat to instalēt savā telefona sākuma ekrānā, lai tā darbotos pilnekrāna režīmā bez pārlūka apvalka. Pēc pirmā palaišanas service worker kešo visu, tāpēc nākamie palaišana darbojas pilnībā bezsaistē.

### iOS (tikai Safari)

iOS sistēmā tikai Safari var instalēt PWA — trešās puses pārlūki to nevar.

1. Atveriet vietni programmā **Safari**.
2. Pieskarieties pogai **Kopīgot**.
3. Izvēlieties **Pievienot sākuma ekrānam**, pēc tam **Pievienot**.

Demonstrācija:

![iOS instalēšanas demonstrācija](media/iOS_add_to_home_screen.gif)

Augstākas kvalitātes avots: [media/iOS_add_to_home_screen.mp4](media/iOS_add_to_home_screen.mp4).

### Android (Chrome / Edge / Firefox)

1. Atveriet vietni savā pārlūkā. Var automātiski parādīties *Instalēt lietotni* uzaicinājums.
2. Pretējā gadījumā atveriet **⋮ izvēlni** → **Instalēt lietotni** (vai **Pievienot sākuma ekrānam** vecākās versijās).

Demonstrācija:

![Android instalēšanas demonstrācija](media/Android_add_to_home_screen.gif)

Augstākas kvalitātes avots: [media/Android_add_to_home_screen.mp4](media/Android_add_to_home_screen.mp4).

## Žurnāli

- **Izveidot:** ievadiet nosaukumu laukā *Žurnāla nosaukums* un iesniedziet. Ja atstājat nosaukumu tukšu, pēc noklusējuma būs `Log YYYY-MM-DD HH:MM UTC`.
- **Pārslēgties:** noklikšķiniet uz jebkura žurnāla sānu joslā.
- **Pārdēvēt:** noklikšķiniet uz *Pārdēvēt* žurnāla galvenē. Enter saglabā, Escape atceļ.
- **Dzēst:** noklikšķiniet uz *Dzēst žurnālu*. Jums tiks lūgts apstiprināt. Ja izdzēsīsiet pēdējo žurnālu, automātiski tiks izveidots jauns.

## QSO

- Aizpildiet formu un nospiediet **Reģistrēt QSO**.
- Izsaukums automātiski tiek pārveidots lielajos burtos rakstīšanas laikā.
- Datums un laiks tiek iepriekš aizpildīti uz *tagad* UTC un atiestatās pēc katra reģistrētā QSO; jūs joprojām varat ievadīt jebkuru vērtību.
- Josla un veids saglabājas starp QSO vienas sesijas ietvaros, lai jums nebūtu jāatlasa tie no jauna katram kontaktam.
- RST nosūtīts / RST saņemts, ja atstāti tukši, pārslēdzas uz **59** balss veidiem (SSB/FM/AM/DIGITALVOICE) un uz **599** CW un digitālajiem veidiem (CW/FT8/FT4/RTTY/PSK31/JT65).
- *Dublikāts šajā žurnālā* žetons parādās zem izsaukuma lauka, ja izsaukums jau eksistē pašreizējā žurnālā. Dublikāti *netiek* bloķēti.
- **Labot QSO** ar *Labot* pogu rindā. Forma pārslēdzas uz *Atjaunināt QSO* režīmu, rinda tiek izgaismota un parādās *Atcelt* poga. Žurnāla pārslēgšana vai žurnāla dzēšana automātiski atceļ labošanu.
- **Dzēst QSO** ar *Dzēst* pogu rindā (lūdz apstiprinājumu).

## ADIF imports un eksports

- **Eksports**: noklikšķiniet uz *Eksportēt .adi* žurnāla galvenē. Tiek lejupielādēts fails ar `ADIF_VER 3.1.4` un `PROGRAMID local-qso` galvenē. Katrs ieraksts kartē `CALL`, `QSO_DATE`, `TIME_ON`, `BAND`, `MODE`, `RST_SENT`, `RST_RCVD`.
- **Imports**: noklikšķiniet uz *Importēt .adi failu* zem žurnāla izveides formas un atlasiet `.adi`/`.adif` failu. Tiek izveidots jauns žurnāls ar nosaukumu `Importēts YYYY-MM-DD HH:MM UTC`. Imports nekad netiek apvienots esošā žurnālā.
- Lauka garuma skaitlis tiek apstrādāts kā rakstzīmju skaits, kas darbojas ASCII ADIF (visiem standarta QSO laukiem). Daudzbaitu saturs nesvarīgos teksta laukos var tikt parsēts dīvaini.

## Privātums un dati

- Visi dati tiek glabāti pārlūka `localStorage` ar atslēgu `local-qso:v1`.
- Nekas netiek pārraidīts uz nekurieni. Nav backend, nav API izsaukumu, nav telemetrijas, nav analītikas.
- Pārlūka vietnes datu dzēšana, privātā/inkognito režīma izmantošana vai cita pārlūka/ierīces izmantošana nozīmē tukšu žurnālu — izmantojiet *Eksportēt .adi* dublēšanai.

## Saskarnes valoda

Galvenē esošā valodas izvēlne aptver **28 valodas**. Izvēlieties vienu un pārējā saskarne nekavējoties tiek atjaunota; jūsu izvēle tiek saglabāta kopā ar jūsu žurnāliem un ievērota nākamajā apmeklējumā. Pēc noklusējuma — angļu.

Pieejamās valodas (karoga emoji + dzimtais nosaukums; alfabētiskā secībā katras rakstības ietvaros):

🇺🇸 English · 🇨🇿 Čeština · 🇩🇰 Dansk · 🇩🇪 Deutsch · 🇪🇪 Eesti · 🇪🇸 Español · 🇫🇷 Français · 🇮🇪 Gaeilge · 🇭🇷 Hrvatski · 🇮🇹 Italiano · 🇱🇻 Latviešu · 🇱🇹 Lietuvių · 🇭🇺 Magyar · 🇳🇱 Nederlands · 🇳🇴 Norsk · 🇵🇱 Polski · 🇵🇹 Português · 🇷🇴 Română · 🇸🇰 Slovenčina · 🇸🇮 Slovenščina · 🇫🇮 Suomi · 🇸🇪 Svenska · 🇧🇾 Беларуская · 🇧🇬 Български · 🇷🇺 Русский · 🇷🇸 Српски · 🇺🇦 Українська · 🇬🇷 Ελληνικά

Universālas tehniskās etiķetes paliek savā kanoniskajā formā visās valodās: joslu nosaukumi (`20m`, `70cm`, …), ADIF režīmu kodi (`SSB`, `FT8`, `CW`, …), `QSO`, `RST`, `UTC` un ISO valstu kodi.

Trūkst rinda jūsu valodā? Katra valoda ir viens mazs fails mapē [`i18n/`](i18n/) — kopējiet `i18n/en.js`, tulkojiet vērtības, saglabājiet kā `i18n/<kods>.js`, pēc tam pievienojiet `<script>` tagu plus `<select>` opciju `index.html` un kodu `SUPPORTED_LANGS` `app.js`.

## Tēmas

Galvenē esošais tēmas pārslēgs maina starp dienu (noklusējums) un nakti. Iestatījums tiek saglabāts kopā ar jūsu žurnāliem un ievērots nākamajā apmeklējumā. Vietējās datuma/laika izvēlnes seko tēmai caur `color-scheme`.

## Tehniskās piezīmes

- Viena lapas lietotne, tīrs HTML + CSS + JavaScript. Nav ietvaru, nav būvēšanas, nav atkarību.
- Pirmkoda faili:
  - `index.html` — iezīmējums un meta tagi.
  - `style.css` — tēmas un izkārtojums (dienas/nakts mainīgie, mobilās media query).
  - `app.js` — stāvoklis, persistence, renderēšana, ADIF parsētājs/sērjalizators, izsaukuma prefiksa → valsts meklēšana.
  - `favicon.svg` — iekļauts SVG favicon.
  - `manifest.webmanifest` — Web App Manifest (nosaukums, tēmas krāsa, scope, ikona), lai lietotne būtu instalējama kā PWA mobilajā un galddatorā.
  - `service-worker.js` — cache-first service worker, kas instalācijā iepriekš kešo katru statisko failu, aktivizācijā izmet vecās keša un saglabā lietotni pilnībā bezsaistē pēc pirmās apmeklējuma. Reģistrācija automātiski tiek izlaista `file://` protokolam, lai `index.html` tieša atvēršana no diska paliktu tīra.
  - `i18n/<lang>.js` — viens tulkojuma fails katrai atbalstītajai valodai (kopā 28). Katrs ir maza IIFE, kas piešķir `window.I18N[<lang>]` plakanu atslēgas→teksta karti. `t()` un `applyLanguage()` `app.js` apstrādā meklējumus (ar angļu valodas atkāpšanos) un staigā pa DOM, atjauninot katru `[data-i18n*]` elementu.
- Pārbaudīts pēdējās Chromium, Firefox un Safari versijās (galddators + iOS).

## Pateicības

Veidojis [YL3IM](https://www.qrz.com/db/YL3IM).

Valstu karogi balstās uz Unicode reģionālo indikatoru secībām. Tie pareizi atveidojas macOS, iOS, Linux (ar karoga atbalstu emoji fontu) un Android. Windows nesatur sistēmas karoga fontu, tāpēc karoga emoji tur var parādīties kā burtu pāri.
