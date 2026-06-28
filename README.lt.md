# Local QSO Logger

## Skaitykite savo kalba

🇺🇸 [English](README.md) · 🇨🇿 [Čeština](README.cs.md) · 🇩🇰 [Dansk](README.da.md) · 🇩🇪 [Deutsch](README.de.md) · 🇪🇪 [Eesti](README.et.md) · 🇪🇸 [Español](README.es.md) · 🇫🇷 [Français](README.fr.md) · 🇮🇪 [Gaeilge](README.ga.md) · 🇭🇷 [Hrvatski](README.hr.md) · 🇮🇹 [Italiano](README.it.md) · 🇱🇻 [Latviešu](README.lv.md) · 🇱🇹 Lietuvių · 🇭🇺 [Magyar](README.hu.md) · 🇳🇱 [Nederlands](README.nl.md) · 🇳🇴 [Norsk](README.no.md) · 🇵🇱 [Polski](README.pl.md) · 🇵🇹 [Português](README.pt.md) · 🇷🇴 [Română](README.ro.md) · 🇸🇰 [Slovenčina](README.sk.md) · 🇸🇮 [Slovenščina](README.sl.md) · 🇫🇮 [Suomi](README.fi.md) · 🇸🇪 [Svenska](README.sv.md) · 🇧🇾 [Беларуская](README.be.md) · 🇧🇬 [Български](README.bg.md) · 🇷🇺 [Русский](README.ru.md) · 🇷🇸 [Српски](README.sr.md) · 🇺🇦 [Українська](README.uk.md) · 🇬🇷 [Ελληνικά](README.el.md)

Privatumą gerbiantis radijo mėgėjų QSO žurnalas, veikiantis tik jūsų naršyklėje. Be paskyros, be serverio, be sekimo, be analitikos — jūsų žurnalai saugomi tik naršyklės `localStorage` atmintyje ir niekada nepalieka jūsų įrenginio.

Autorius: [YL3IM](https://www.qrz.com/db/YL3IM). Projekto svetainė: [qso.ham.lv](https://qso.ham.lv).

![Local QSO Logger iPad'e](media/iPad.png)

## Turinys

- [Skaitykite savo kalba](#skaitykite-savo-kalba)
- [Funkcijos](#funkcijos)
- [Pradžia](#pradžia)
- [Įdiegimas kaip PWA mobiliajame įrenginyje](#įdiegimas-kaip-pwa-mobiliajame-įrenginyje)
  - [iOS (tik Safari)](#ios-tik-safari)
  - [Android (Chrome / Edge / Firefox)](#android-chrome--edge--firefox)
- [Žurnalai](#žurnalai)
- [QSO](#qso)
- [ADIF importas ir eksportas](#adif-importas-ir-eksportas)
- [Privatumas ir duomenys](#privatumas-ir-duomenys)
- [Sąsajos kalba](#sąsajos-kalba)
- [Temos](#temos)
- [Techninės pastabos](#techninės-pastabos)
- [Padėkos](#padėkos)

## Funkcijos

- Keli žurnalai, kiekvienas su savo QSO sąrašu.
- Žurnalo veiksmai: kurti, pervadinti, ištrinti, importuoti iš ADIF, eksportuoti į ADIF (`.adi`).
- QSO laukai: šaukinys, UTC data, UTC laikas, diapazonas, modas, RST išsiųstas, RST gautas.
- Bet kurio QSO redagavimas ir trynimas (su patvirtinimu trynimo metu).
- Protingi numatytieji parametrai: šios dienos UTC data/laikas iš anksto užpildyti, nuo modo priklausomi RST numatytieji parametrai (59 balso modams, 599 CW/skaitmeniniams), lipnus diapazonas ir modas tarp iš eilės einančių QSO.
- Realaus laiko dublikato šaukinio indikatorius (informatyvus — dublikatai leidžiami).
- Šalies vėliavos stulpelis, gautas iš šaukinio priesagos (apima ≥99 % įprastų radijo mėgėjų priesagų, įskaitant nešiojamus šaukinius kaip `9A/M0NCG`).
- Lokalei atsižvelgiantis datos rodymas QSO lentelėje; ISO saugojimas ir ADIF išvestis lieka nepakitę.
- Dienos/nakties temos (diena numatytoji; perjungiklis antraštėje).
- Mobiliesiems pritaikytas reaguojantis maketas su jutimui patogiais mygtukais.
- Veikia visiškai neprisijungus — jokio tinklo užklausų jokiu metu.
- Įdiegiama kaip PWA (Pridėti į pradžios ekraną / Įdiegti programą), kai talpinama per HTTPS.
- Sąsaja prieinama **28 kalbomis** (anglų plius 22 lotyniškomis, 5 kirilicos ir graikų); vėliavos emoji prefiksu pasirinkimo elementas antraštėje.

## Pradžia

Tiesiog atidarykite `index.html` šiuolaikinėje naršyklėje. Be kompiliavimo, be diegimo, be serverio.

Norėdami talpinti, patalpinkite statinius failus (`index.html`, `style.css`, `app.js`, `favicon.svg`, `manifest.webmanifest`, `service-worker.js` ir `i18n/` katalogą su 28 vertimų failais) bet kuriame statiniame priglobiklyje (GitHub Pages, Netlify, savame žiniatinklio serveryje). Veiks ir per `file://` — service worker registracija automatiškai praleidžiama `file:` protokolui, todėl `index.html` tiesioginis atidarymas iš disko veikia švariai.

Kai aptarnaujama per HTTPS, programa tampa įdiegiama kaip PWA (per naršyklės *Įdiegti programą* / *Pridėti į pradžios ekraną* meniu) ir veikia neprisijungus po pirmojo apsilankymo dėka cache-first service worker, kuris iš anksto talpina visus statinius failus (UI + visi vertimai).

Numatytasis žurnalas automatiškai sukuriamas pirmojo apsilankymo metu, kad galėtumėte iš karto pradėti registruoti.

## Įdiegimas kaip PWA mobiliajame įrenginyje

Kai programa aptarnaujama per HTTPS (pvz., GitHub Pages), galite ją įdiegti į savo telefono pradžios ekraną, kad ji veiktų visu ekranu be naršyklės apvalkalo. Po pirmojo paleidimo service worker viską talpina, todėl tolesni paleidimai veikia visiškai neprisijungus.

### iOS (tik Safari)

iOS sistemoje tik Safari gali įdiegti PWA — trečiųjų šalių naršyklės negali.

1. Atidarykite svetainę su **Safari**.
2. Bakstelėkite **Bendrinti** mygtuką.
3. Pasirinkite **Pridėti į pradžios ekraną**, tada **Pridėti**.

Vaizdo įrašas:

![iOS įdiegimo vaizdo įrašas](media/iOS_add_to_home_screen.gif)

Aukštesnės kokybės šaltinis: [media/iOS_add_to_home_screen.mp4](media/iOS_add_to_home_screen.mp4).

### Android (Chrome / Edge / Firefox)

1. Atidarykite svetainę savo naršyklėje. Gali automatiškai atsirasti *Įdiegti programą* raginimas.
2. Kitaip atidarykite **⋮ meniu** → **Įdiegti programą** (arba **Pridėti į pradžios ekraną** senesnėse versijose).

Vaizdo įrašas:

![Android įdiegimo vaizdo įrašas](media/Android_add_to_home_screen.gif)

Aukštesnės kokybės šaltinis: [media/Android_add_to_home_screen.mp4](media/Android_add_to_home_screen.mp4).

## Žurnalai

- **Sukurti:** įveskite pavadinimą lauke *Žurnalo pavadinimas* ir pateikite. Jei paliksite pavadinimą tuščią, numatytasis bus `Log YYYY-MM-DD HH:MM UTC`.
- **Perjungti:** spustelėkite bet kurį žurnalą šoninėje juostoje.
- **Pervadinti:** spustelėkite *Pervadinti* žurnalo antraštėje. Enter išsaugo, Escape atšaukia.
- **Ištrinti:** spustelėkite *Ištrinti žurnalą*. Bus prašoma patvirtinti. Jei ištrinsite paskutinį žurnalą, naujas bus sukurtas automatiškai.

## QSO

- Užpildykite formą ir paspauskite **Įrašyti QSO**.
- Šaukinys automatiškai paverčiamas didžiosiomis raidėmis rašymo metu.
- Data ir laikas iš anksto užpildomi į *dabar* UTC ir atstatomi po kiekvieno užregistruoto QSO; vis tiek galite įvesti bet kokią reikšmę.
- Diapazonas ir modas išlieka tarp QSO toje pačioje sesijoje, todėl jums nereikia jų vėl pasirinkti kiekvienam kontaktui.
- RST išsiųstas / RST gautas, jei palikti tušti, nustatomi į **59** balso modams (SSB/FM/AM/DIGITALVOICE) ir į **599** CW ir skaitmeniniams modams (CW/FT8/FT4/RTTY/PSK31/JT65).
- Po šaukinio lauku atsiranda *Dublikatas šiame žurnale* ženkliukas, jei šaukinys jau egzistuoja dabartiniame žurnale. Dublikatai *neuždraudžiami*.
- **Redaguoti QSO** eilutės *Redag.* mygtuku. Forma persijungia į *Atnaujinti QSO* režimą, eilutė paryškinama ir atsiranda *Atšaukti* mygtukas. Žurnalo perjungimas arba žurnalo ištrynimas automatiškai atšaukia redagavimą.
- **Ištrinti QSO** eilutės *Trinti* mygtuku (prašo patvirtinimo).

## ADIF importas ir eksportas

- **Eksportas**: spustelėkite žurnalo antraštėje *Eksportuoti .adi*. Atsisiunčiamas failas su `ADIF_VER 3.1.4` ir `PROGRAMID local-qso` antraštėje. Kiekvienas įrašas susieja `CALL`, `QSO_DATE`, `TIME_ON`, `BAND`, `MODE`, `RST_SENT`, `RST_RCVD`.
- **Importas**: spustelėkite po sukurti-žurnalą formos *Importuoti .adi failą* ir pasirinkite `.adi`/`.adif` failą. Sukuriamas naujas žurnalas pavadinimu `Importuota YYYY-MM-DD HH:MM UTC`. Importas niekada nesulieja į esamą žurnalą.
- Lauko ilgio skaičius traktuojamas kaip simbolių skaičius, kuris veikia ASCII ADIF (visiems standartiniams QSO laukams). Daugiabaitis turinys nepamatiniuose teksto laukuose gali parsuotis keistai.

## Privatumas ir duomenys

- Visi duomenys saugomi naršyklės `localStorage`'e raktu `local-qso:v1`.
- Niekas niekur nesiunčiama. Be backendo, be API iškvietimų, be telemetrijos, be analitikos.
- Svetainės duomenų valymas, privačiojo/inkognito režimo naudojimas arba kito naršyklės/įrenginio naudojimas reiškia tuščią žurnalą — naudokite *Eksportuoti .adi* atsarginei kopijai.

## Sąsajos kalba

Antraštėje esantis kalbos selektorius apima **28 kalbas**. Pasirinkite vieną ir likusi sąsajos dalis nedelsiant atvaizduojama iš naujo; jūsų pasirinkimas saugomas kartu su jūsų žurnalais ir gerbiamas kitą apsilankymą. Anglų kalba yra numatytoji.

Galimos kalbos (vėliavos emoji + savitas pavadinimas; abėcėliškai kiekvienoje rašysenoje):

🇺🇸 English · 🇨🇿 Čeština · 🇩🇰 Dansk · 🇩🇪 Deutsch · 🇪🇪 Eesti · 🇪🇸 Español · 🇫🇷 Français · 🇮🇪 Gaeilge · 🇭🇷 Hrvatski · 🇮🇹 Italiano · 🇱🇻 Latviešu · 🇱🇹 Lietuvių · 🇭🇺 Magyar · 🇳🇱 Nederlands · 🇳🇴 Norsk · 🇵🇱 Polski · 🇵🇹 Português · 🇷🇴 Română · 🇸🇰 Slovenčina · 🇸🇮 Slovenščina · 🇫🇮 Suomi · 🇸🇪 Svenska · 🇧🇾 Беларуская · 🇧🇬 Български · 🇷🇺 Русский · 🇷🇸 Српски · 🇺🇦 Українська · 🇬🇷 Ελληνικά

Universalios techninės etiketės išlieka kanoninėje formoje visomis kalbomis: diapazonų pavadinimai (`20m`, `70cm`, …), ADIF modo kodai (`SSB`, `FT8`, `CW`, …), `QSO`, `RST`, `UTC` ir ISO šalių kodai.

Trūksta eilutės jūsų kalba? Kiekviena kalba yra vienas mažas failas kataloge [`i18n/`](i18n/) — nukopijuokite `i18n/en.js`, išverskite reikšmes, išsaugokite kaip `i18n/<kodas>.js`, tada pridėkite `<script>` žymą plius `<select>` parinktį `index.html` ir kodą `SUPPORTED_LANGS` `app.js`.

## Temos

Antraštėje esantis temos perjungiklis perjungia tarp dienos (numatytoji) ir nakties. Nuostata saugoma kartu su jūsų žurnalais ir gerbiama kitą apsilankymą. Natyvūs datos/laiko parinkikliai seka temą per `color-scheme`.

## Techninės pastabos

- Vieno puslapio programa, grynas HTML + CSS + JavaScript. Jokių karkasų, jokio kompiliavimo, jokių priklausomybių.
- Šaltinio failai:
  - `index.html` — žymėjimas ir meta žymos.
  - `style.css` — temos ir maketas (dienos/nakties kintamieji, mobiliųjų media užklausos).
  - `app.js` — būsena, persistencija, atvaizdavimas, ADIF parseris/serializatorius, šaukinio priesagos → šalies paieška.
  - `favicon.svg` — įdiegtas SVG favicon.
  - `manifest.webmanifest` — Web App Manifest (pavadinimas, temos spalva, scope, piktograma), kad programa būtų įdiegiama kaip PWA mobiliajame ir staliniame.
  - `service-worker.js` — cache-first service worker, kuris diegimo metu iš anksto talpina kiekvieną statinį failą, aktyvacijos metu pašalina senas talpyklas ir laiko programą visiškai neprisijungus po pirmojo apsilankymo. Registracija automatiškai praleidžiama `file://` protokolui, todėl `index.html` tiesioginis atidarymas iš disko išlieka švarus.
  - `i18n/<lang>.js` — vienas vertimo failas kiekvienai palaikomai kalbai (iš viso 28). Kiekvienas yra mažas IIFE, kuris priskiria `window.I18N[<lang>]` plokščią raktas→eilutė žemėlapį. `t()` ir `applyLanguage()` `app.js` tvarko paieškas (su angliškosios atsarginės kopijos) ir eina per DOM atnaujindami kiekvieną `[data-i18n*]` elementą.
- Testuota naujausiose Chromium, Firefox ir Safari versijose (stalinis + iOS).

## Padėkos

Sukūrė [YL3IM](https://www.qrz.com/db/YL3IM).

Šalių vėliavos remiasi Unicode regional indicator sekomis. Jos teisingai atvaizduojamos macOS, iOS, Linux (su vėliavomis suderinamu emoji šriftu) ir Android. Windows neturi sistemos vėliavų šrifto, todėl vėliavų emoji ten gali atrodyti kaip raidžių poros.
