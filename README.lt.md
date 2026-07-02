# Local QSO Logger

## Skaityti savo kalba

🇺🇸 [English](README.md) · 🇨🇿 [Čeština](README.cs.md) · 🇩🇰 [Dansk](README.da.md) · 🇩🇪 [Deutsch](README.de.md) · 🇪🇪 [Eesti](README.et.md) · 🇪🇸 [Español](README.es.md) · 🇫🇷 [Français](README.fr.md) · 🇮🇪 [Gaeilge](README.ga.md) · 🇭🇷 [Hrvatski](README.hr.md) · 🇮🇹 [Italiano](README.it.md) · 🇱🇻 [Latviešu](README.lv.md) · 🇱🇹 Lietuvių · 🇭🇺 [Magyar](README.hu.md) · 🇳🇱 [Nederlands](README.nl.md) · 🇳🇴 [Norsk](README.no.md) · 🇵🇱 [Polski](README.pl.md) · 🇵🇹 [Português](README.pt.md) · 🇷🇴 [Română](README.ro.md) · 🇸🇰 [Slovenčina](README.sk.md) · 🇸🇮 [Slovenščina](README.sl.md) · 🇫🇮 [Suomi](README.fi.md) · 🇸🇪 [Svenska](README.sv.md) · 🇧🇾 [Беларуская](README.be.md) · 🇧🇬 [Български](README.bg.md) · 🇷🇺 [Русский](README.ru.md) · 🇷🇸 [Српски](README.sr.md) · 🇺🇦 [Українська](README.uk.md) · 🇬🇷 [Ελληνικά](README.el.md)

Privatumą gerbianti mėgėjiško radijo QSO žurnalo programa, veikianti visiškai jūsų naršyklėje. Jokios paskyros, jokio serverio, jokio sekimo, jokios analizės — jūsų žurnalai gyvena tik jūsų naršyklės `localStorage` ir niekada nepalieka jūsų įrenginio.

Autorius: [YL3IM](https://www.qrz.com/db/YL3IM). Projekto svetainė: [qso.ham.lv](https://qso.ham.lv).

![Local QSO Logger veikiantis iPad'e](media/iPad.png)

## Turinys

- [Skaityti savo kalba](#skaityti-savo-kalba)
- [Funkcijos](#funkcijos)
- [Pradžia](#pradžia)
- [Įdiegti kaip PWA mobiliajame](#įdiegti-kaip-pwa-mobiliajame)
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

- Keli žurnalai; kiekvienas su savo QSO sąrašu.
- Žurnalo veiksmai: sukurti, pervadinti, ištrinti, importuoti iš ADIF, eksportuoti į ADIF (`.adi`).
- QSO forma suskirstyta į tris blokus: **Stoties duomenys** (stoties šaukinys, operatoriaus šaukinys, savasis tinklelis), kurie išlieka prisikabinę tarp QSO; **Darbo režimas** (sklidimo režimas, palydovas, režimas, palydovo režimas, dažnių juosta, RX juosta) su palydovo laukais, kurie matomi tik tada, kai sklidimo režimas yra *Palydovas*; ir **QSO duomenys** (kontaktuoto šaukinys, kontaktuoto tinklelis, UTC data/laikas redaguojant, komentaras, RST siųstas, RST gautas).
- Pilna ADIF `MODE` → `SUBMODE` taksonomija režimų išskleidžiamajame sąraše — pasirinkite pirminį režimą (`SSB`, `MFSK`, …) arba eikite tiesiai iki konkretaus papildomo režimo (`USB`, `FT4`, …); programa saugo abu laukus pagal ADIF ir lentelė rodo konkretų papildomą režimą, kai jis yra.
- Pilnas ADIF sklidimo režimų sąrašas (SAT, RPT, EME, ES, MS, Aurora ir t. t.) kaip išskleidžiamasis sąrašas.
- Pilnas AMSAT palydovų katalogas (~110 palydovų) ir dviejų lygių **Palydovo režimo** išskleidžiamasis sąrašas: pageidaujami dviejų raidžių uplink/downlink kodai viršuje (LU, LV, SX, UU, UV, VA, VU, VV) ir senesni vienos raidės žymėjimai (A/B/J/K/L/R/S/T/U/V/W/X) sugrupuoti kaip *pasenę* apačioje. Pasirinkus palydovo režimą, automatiškai koreguojama `BAND` (uplink) ir `RX band` (downlink).
- Bet kokio QSO redagavimas ir ištrynimas (su patvirtinimu trinant).
- Protingos numatytosios reikšmės: UTC data/laikas iš anksto užpildytas *dabar*, nuo režimo priklausančios RST numatytosios reikšmės (59 balso režimams, 599 CW/skaitmeniniam), prisikabinę stoties duomenys + juosta + režimas + sklidimo režimas tarp eilės QSO (tik kontakto laukai — šaukinys, jų tinklelis, komentaras, RST — išvalomi po kiekvieno *Įrašyti QSO*).
- Realaus laiko dublikato šaukinio indikatorius (informacinis — dublikatai leidžiami).
- Šalies vėliavos stulpelis, gautas iš šaukinio prefikso (apima ≥99 % įprastų mėgėjiško radijo prefiksų, įskaitant nešiojamus šaukinius kaip `9A/M0NCG`).
- Lokalei pritaikytas datos rodymas QSO lentelėje; ISO saugojimas ir ADIF išvestis lieka nepakitę.
- Sąsaja prieinama **28 kalbomis** (anglų kalba ir dar 22 lotyniško rašto, 5 kirilicos ir graikų); vėliavėlių emoji atrankos elementas antraštėje.
- Dienos / nakties temos (diena yra numatytoji; perjungimas yra antraštėje).
- Mobiliesiems prietaisams draugiška atsaki layout'as su liečiamojo dydžio mygtukais.
- Veikia visiškai neprisijungus — jokių tinklo užklausų bet kuriuo momentu.
- Galima įdiegti kaip PWA (Pridėti į pradžios ekraną / Įdiegti programą) talpinant per HTTPS.

## Pradžia

Tiesiog atidarykite `index.html` modernioje naršyklėje. Jokio kūrimo žingsnio, jokio diegimo, jokio serverio.

Jei norite talpinti, nukopijuokite statinius failus (`index.html`, `style.css`, `app.js`, `favicon.svg`, `manifest.webmanifest`, `service-worker.js` ir `i18n/` katalogą su 28 vertimų failais) į bet kurį statinį talpintoją (GitHub Pages, Netlify, savą interneto serverį). Veikia ir per `file://` — aptarnavimo darbuotojo registracija automatiškai praleidžiama `file:` protokole, todėl `index.html` atidarymas tiesiogiai iš disko veikia švariai.

Talpinant per HTTPS, programa tampa įdiegiama kaip PWA (naršyklės meniu *Įdiegti programą* / *Pridėti į pradžios ekraną*) ir veikia neprisijungus po pirmojo apsilankymo dėl talpyklos prioriteto aptarnavimo darbuotojo, kuris iš anksto saugo visus statinius failus (UI + visi vertimai).

Pirmojo apsilankymo metu automatiškai sukuriamas numatytasis žurnalas, todėl galite nedelsiant pradėti registruoti.

## Įdiegti kaip PWA mobiliajame

Kai programa talpinama per HTTPS (pvz., GitHub Pages), galite ją įdiegti telefono pradžios ekrane, kad veiktų visu ekranu be naršyklės sąsajos. Po pirmojo paleidimo aptarnavimo darbuotojas išsaugo viską talpykloje, todėl tolesni paleidimai veikia visiškai neprisijungus.

### iOS (tik Safari)

iOS sistemoje tik Safari gali įdiegti PWA — trečiųjų šalių naršyklės negali.

1. Atidarykite svetainę **Safari**.
2. Palieskite mygtuką **Bendrinti**.
3. Pasirinkite **Pridėti į pradžios ekraną**, tada **Pridėti**.

Apžvalga:

![iOS diegimo apžvalga](media/iOS_add_to_home_screen.gif)

Aukštesnės kokybės šaltinis: [media/iOS_add_to_home_screen.mp4](media/iOS_add_to_home_screen.mp4).

### Android (Chrome / Edge / Firefox)

1. Atidarykite svetainę naršyklėje. Gali automatiškai pasirodyti raginimas *Įdiegti programą*.
2. Kitu atveju atidarykite **⋮ meniu** → **Įdiegti programą** (arba **Pridėti į pradžios ekraną** senesnėse versijose).

Apžvalga:

![Android diegimo apžvalga](media/Android_add_to_home_screen.gif)

Aukštesnės kokybės šaltinis: [media/Android_add_to_home_screen.mp4](media/Android_add_to_home_screen.mp4).

## Žurnalai

- **Sukurti:** įveskite pavadinimą *Žurnalo pavadinimas* ir pateikite. Jei pavadinimas paliekamas tuščias, numatytasis yra `Log YYYY-MM-DD HH:MM UTC`.
- **Perjungti:** spustelėkite bet kurį žurnalą šoninėje juostoje.
- **Pervadinti:** spustelėkite *Pervadinti* žurnalo antraštėje. Paspauskite Enter, kad išsaugotumėte, Escape, kad atšauktumėte.
- **Ištrinti:** spustelėkite *Ištrinti žurnalą*. Bus paprašyta patvirtinimo. Jei ištrinsite paskutinį žurnalą, automatiškai sukuriamas naujas.

## QSO

- Užpildykite formą ir paspauskite **Įrašyti QSO**.
- Forma organizuota trijuose blokuose:
  - **Stoties duomenys** — *Stoties šaukinys* (jūsų siuntimo šaukinys, ADIF `STATION_CALLSIGN`), *Operatorius* (atskiro operatoriaus šaukinys — skiriasi nuo *stoties šaukinio*, kai svečias operatorius yra prie klubo stoties mikrofono; ADIF `OPERATOR`) ir *Mano tinklelis* (ADIF `MY_GRIDSQUARE`). Jie išlieka prisikabinę tarp to paties seanso QSO — nustatykite juos vieną kartą ir jie perkeliami.
  - **Darbo režimas** — *Sklidimo režimas*, *Režimas*, *Juosta*, taip pat tik palydovo laukai *Palydovas* / *Palydovo režimas* / *RX juosta*, kai sklidimo režimas yra *Palydovas*. Juosta, režimas ir sklidimo režimas yra prisikabinę kaip stoties duomenys.
  - **QSO duomenys** — kiekvieno kontakto laukai: *Šaukinys*, *Tinklelis* (kitos stoties Maidenhead), *Komentaras* (ADIF `COMMENT`), *RST siųstas*, *RST gautas*. Redaguojant esamą QSO, šiame bloke taip pat pasirodo *Data (UTC)* ir *Laikas (UTC)*. Šie laukai išvalomi po kiekvieno *Įrašyti QSO*.
- Visi šaukiniai (kontaktuotas, stoties, operatoriaus) rašant automatiškai konvertuojami į didžiąsias raides; abu tinklelio laukai daro tą patį.
- Data ir laikas pateikiant iš anksto užpildomi *dabar* UTC; redaguojant galite įvesti bet kokią reikšmę.
- RST siųstas / RST gautas, jei paliekami tušti, numatytoji reikšmė yra **59** balso režimams (SSB/FM/DIGITALVOICE) ir **599** CW ir skaitmeniniams režimams (CW/FT8/FT4/RTTY/PSK31/JT65). Numatytoji reikšmė seka pirminį MODE, todėl pasirinkus konkretų papildomą režimą kaip *USB* ar *FT4* vis tiek gaunama teisinga numatytoji reikšmė.
- *Dublikatas šiame žurnale* lustas pasirodo po šaukinio lauku, jei šaukinys jau egzistuoja dabartiniame žurnale. Dublikatai *nėra* blokuojami.
- **Sklidimo režimas** — neprivalomas ADIF sklidimo režimų išskleidžiamasis sąrašas (SAT, RPT, EME, F2, Es, MS, LOS ir t. t.). Palikite tuščią įprastiems žemės HF QSO.
- **Palydovo QSO** — pasirinkus sklidimo režimą *Palydovas* atsiskleidžia trys tik palydovo laukai: **Palydovas** (išskleidžiamasis sąrašas su ~110 AMSAT registruotų palydovų), **Palydovo režimas** (AMSAT raidžių žymėjimai, sugrupuoti kaip *modernūs* dviejų raidžių uplink/downlink kodai viršuje ir *pasenę* vienos raidės kodai apačioje) ir **RX juosta** (downlink juosta). Palydovas, palydovo režimas ir RX juosta yra privalomi — naršyklė atsisakys pateikti be jų. Pasirinkus **Palydovo režimą**, automatiškai užpildoma pagrindinė **Juosta** uplink juosta ir **RX juosta** downlink juosta (pvz., režimas J → uplink 2m, downlink 70cm). Grįžus *atgal* į palydovą iš kito sklidimo režimo, palydovo režimas nustatomas iš naujo, kad būtų pasirinktas naujas. Ne palydovo QSO niekada neturi palydovo laukų; perjungus esamą QSO iš palydovo į kitą sklidimo režimą, jie švariai pašalinami. **Tinklelis** ir **Mano tinklelis** yra bendrieji laukai (taip pat naudingi VHF/UHF tinklelio varžyboms) ir išlieka matomi visiems QSO.
- **Redaguoti QSO** mygtuku *Redaguoti* eilutėje. Forma persijungia į *Atnaujinti QSO* režimą, eilutė paryškinama ir pasirodo mygtukas *Atšaukti*. Perjungus žurnalus arba ištrynus žurnalą, redagavimas automatiškai atšaukiamas.
- **Ištrinti QSO** mygtuku *Ištrinti* eilutėje (prašoma patvirtinimo).

## ADIF importas ir eksportas

- **Eksportuoti**: spustelėkite *Eksportuoti .adi* žurnalo antraštėje. Atsisiunčiamas failas atitinkantis **ADIF 3.1.7**. Antraštė deklaruoja `ADIF_VER 3.1.7`, `PROGRAMID local-qso`, `PROGRAMVERSION` ir `CREATED_TIMESTAMP` (UTC). Kiekvieno QSO laukai (jei nėra tušti): `CALL`, `QSO_DATE`, `TIME_ON`, `BAND`, `MODE`, `SUBMODE`, `PROP_MODE`, `GRIDSQUARE`, `BAND_RX`, `SAT_MODE`, `SAT_NAME`, `RST_SENT`, `RST_RCVD`, `COMMENT`, `STATION_CALLSIGN`, `OPERATOR`, `MY_GRIDSQUARE` — po kurių eina kiekvienas papildomas ADIF laukas, išsaugotas importuojant (žr. žemiau).
- **Importuoti**: spustelėkite *Importuoti .adi failą* po žurnalo kūrimo forma ir pasirinkite `.adi` / `.adif` failą. Iš jo sukuriamas naujas žurnalas, pavadintas `Imported YYYY-MM-DD HH:MM UTC`. Importavimas niekada nesujungia su esamu žurnalu.
- **Be nuostolių veikimo ciklas**: importuojant kiekvienas ADIF laukas, kurio programa nemodelina savo sąsajoje (pvz., `NAME`, `FREQ`, `TX_PWR`, `DXCC`, `QSL_SENT`/`QSL_RCVD`, `POTA_REF`, `APP_*` laukai), išsaugomas QSO ir pažodžiui vėl išvedamas kito eksporto metu. Taigi eksportuojant failą, kuris pats buvo importuotas, viskas išsaugoma.
- Lauko ilgis traktuojamas kaip UTF-8 baitų skaičius, kaip reikalauja specifikacija, todėl daugiabaitis tekstas (pvz., akcentuotus ženklus `COMMENT`) analizuojamas teisingai.

## Privatumas ir duomenys

- Visi duomenys saugomi jūsų naršyklės `localStorage` raktu `local-qso:v1`.
- Niekas niekur nesiunčiama. Nėra jokio serverio, API skambučio, telemetrijos ar analizės.
- Naršyklės svetainės duomenų išvalymas, privataus/inkognito režimo naudojimas arba kitos naršyklės/įrenginio naudojimas reiškia naują tuščią žurnalą — naudokite *Eksportuoti .adi* atsarginei kopijai.

## Sąsajos kalba

Kalbos atrankos elementas antraštėje apima **28 kalbas**. Pasirinkite vieną ir likusi sąsaja nedelsiant iš naujo atvaizduojama; jūsų pasirinkimas išsaugomas kartu su žurnalais ir atsižvelgiamas kito apsilankymo metu. Numatytoji yra anglų kalba.

Galimos kalbos (vėliavėlių emoji + vietinis pavadinimas; abėcėlės tvarka kiekvienoje rašto sistemoje):

🇺🇸 English · 🇨🇿 Čeština · 🇩🇰 Dansk · 🇩🇪 Deutsch · 🇪🇪 Eesti · 🇪🇸 Español · 🇫🇷 Français · 🇮🇪 Gaeilge · 🇭🇷 Hrvatski · 🇮🇹 Italiano · 🇱🇻 Latviešu · 🇱🇹 Lietuvių · 🇭🇺 Magyar · 🇳🇱 Nederlands · 🇳🇴 Norsk · 🇵🇱 Polski · 🇵🇹 Português · 🇷🇴 Română · 🇸🇰 Slovenčina · 🇸🇮 Slovenščina · 🇫🇮 Suomi · 🇸🇪 Svenska · 🇧🇾 Беларуская · 🇧🇬 Български · 🇷🇺 Русский · 🇷🇸 Српски · 🇺🇦 Українська · 🇬🇷 Ελληνικά

Universalios techninės etiketės visomis kalbomis lieka savo kanoninėje formoje: juostų pavadinimai (`20m`, `70cm`, …), ADIF režimų kodai (`SSB`, `FT8`, `CW`, …), `QSO`, `RST`, `UTC` ir ISO šalių kodai.

Trūksta eilutės jūsų kalba? Kiekviena kalba yra vienas mažas failas [`i18n/`](i18n/) — nukopijuokite `i18n/en.js`, išverskite reikšmes, išsaugokite kaip `i18n/<code>.js`, tada pridėkite `<script>` žymę ir `<select>` parinktį `index.html` ir kodą `SUPPORTED_LANGS` `app.js`.

## Temos

Temos perjungiklis antraštėje perjungia tarp dienos (numatytoji) ir nakties. Pirmenybė išsaugoma kartu su žurnalais ir atsižvelgiama kito apsilankymo metu. Vietiniai datos/laiko atrankos elementai seka temą per `color-scheme`.

## Techninės pastabos

- Vieno puslapio programa, vanilla HTML + CSS + JavaScript. Jokių karkasų, jokio kūrimo žingsnio, jokių priklausomybių.
- Šaltinio failai:
  - `index.html` — žymėjimas ir meta žymės.
  - `style.css` — temos ir išdėstymas (dienos/nakties kintamieji, mobiliojo medijos užklausos).
  - `app.js` — būsena, išlikimas, atvaizdavimas, ADIF analizatorius/serializatorius, šaukinio prefikso → šalies paieška.
  - `favicon.svg` — įterptinė SVG favikona.
  - `manifest.webmanifest` — Web App Manifest (pavadinimas, temos spalva, apimtis, piktograma), kad programa būtų įdiegiama kaip PWA mobiliajame ir staliniame.
  - `service-worker.js` — talpyklos prioriteto aptarnavimo darbuotojas, kuris įdiegiant iš anksto saugo visus statinius failus, aktyvuojant ištrina senas talpyklas ir po pirmojo apsilankymo palaiko programą visiškai neprisijungus. Registracija automatiškai praleidžiama `file://` protokole, kad `index.html` atidarymas tiesiogiai iš disko liktų švaresnis.
  - `i18n/<lang>.js` — vienas vertimų failas kiekvienai palaikomai kalbai (iš viso 28). Kiekvienas yra mažas IIFE, kuris priskiria `window.I18N[<lang>]` plokščią raktas→eilutė atvaizdavimą. `t()` ir `applyLanguage()` `app.js` tvarko paieškas (su anglų kalbos atsargine) ir eina per DOM atnaujindami kiekvieną `[data-i18n*]` elementą.
- Išbandyta naujose Chromium, Firefox ir Safari versijose (staliniai + iOS).

## Padėkos

Sukūrė [YL3IM](https://www.qrz.com/db/YL3IM).

Dėkojame [A65BR](https://www.qrz.com/db/A65BR) Olegui už neįkainojamas užuominas, kurios padarė palydovo QSO dalį iš tikrųjų naudojamą — modernūs dviejų raidžių palydovo režimo žymėjimai, AMSAT katalogas ir automatinis uplink/downlink koregavimas kilo iš jo atsiliepimų.

Šalių vėliavos remiasi Unicode regioninių indikatorių sekomis. Jos teisingai rodomos macOS, iOS, Linux (su vėliavoms tinkamu emoji šriftu) ir Android. Windows neturi sistemos vėliavų šrifto, todėl vėliavų emoji ten gali rodytis kaip raidžių poros.
