# Local QSO Logger

## Skaityti savo kalba

🇺🇸 [English](README.md) · 🇨🇿 [Čeština](README.cs.md) · 🇩🇰 [Dansk](README.da.md) · 🇩🇪 [Deutsch](README.de.md) · 🇪🇪 [Eesti](README.et.md) · 🇪🇸 [Español](README.es.md) · 🇫🇷 [Français](README.fr.md) · 🇮🇪 [Gaeilge](README.ga.md) · 🇭🇷 [Hrvatski](README.hr.md) · 🇮🇹 [Italiano](README.it.md) · 🇱🇻 [Latviešu](README.lv.md) · 🇱🇹 Lietuvių · 🇭🇺 [Magyar](README.hu.md) · 🇳🇱 [Nederlands](README.nl.md) · 🇳🇴 [Norsk](README.no.md) · 🇵🇱 [Polski](README.pl.md) · 🇵🇹 [Português](README.pt.md) · 🇷🇴 [Română](README.ro.md) · 🇸🇰 [Slovenčina](README.sk.md) · 🇸🇮 [Slovenščina](README.sl.md) · 🇫🇮 [Suomi](README.fi.md) · 🇸🇪 [Svenska](README.sv.md) · 🇧🇾 [Беларуская](README.be.md) · 🇧🇬 [Български](README.bg.md) · 🇷🇺 [Русский](README.ru.md) · 🇷🇸 [Српски](README.sr.md) · 🇺🇦 [Українська](README.uk.md) · 🇬🇷 [Ελληνικά](README.el.md)

Privatumą gerbianti mėgėjiško radijo QSO žurnalo programa, veikianti visiškai jūsų naršyklėje. Jokios paskyros, jokio serverio, jokio sekimo, jokios analizės — jūsų žurnalai gyvena tik jūsų naršyklės `localStorage` ir niekada nepalieka jūsų įrenginio.

Autorius: [YL3IM](https://www.qrz.com/db/YL3IM). Projekto svetainė: [qso.lv](https://qso.lv).

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
- [Varžybos](#varžybos)
- [Importas ir eksportas](#importas-ir-eksportas)
- [Privatumas ir duomenys](#privatumas-ir-duomenys)
- [Sąsajos kalba](#sąsajos-kalba)
- [Temos](#temos)
- [Techninės pastabos](#techninės-pastabos)
- [Padėkos](#padėkos)

## Funkcijos

- Keli žurnalai; kiekvienas su savo QSO sąrašu.
- **Varžybų žurnalai** yra pasirenkami — pasirinkite iš 68 įmontuotų varžybų katalogo kuriant žurnalą. QSO forma įgauna varžyboms būdingą *Varžybų mainų* bloką, dublikatų aptikimas laikosi varžybų taisyklės, o *Eksportuoti .cbr* sukuria Cabrillo v3 pateikimo failą kartu su įprastu ADIF eksportu.
- Žurnalo veiksmai: sukurti, pervadinti, ištrinti, importuoti žurnalo failą (ADIF arba Cabrillo — formatas nustatomas automatiškai), eksportuoti į ADIF (`.adi`), plius *Eksportuoti .cbr* (Cabrillo v3) varžybų žurnalams. Pakartotinis anksčiau programos eksportuoto `.cbr` failo importavimas jį atkuria kaip tą pačią varžybų žurnalą.
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

Jei norite talpinti, nukopijuokite statinius failus (`index.html`, `style.css`, `app.js`, `favicon.svg`, `manifest.webmanifest`, `service-worker.js`, vieną `i18n.js` failą, apjungiantį visas 28 kalbų žodynus, ir vieną `contests.js` failą, apjungiantį visas 68 varžybų konfigūracijas) į bet kurį statinį talpintoją (GitHub Pages, Netlify, savą interneto serverį). Veikia ir per `file://` — aptarnavimo darbuotojo registracija automatiškai praleidžiama `file:` protokole, todėl `index.html` atidarymas tiesiogiai iš disko veikia švariai.

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

## Varžybos

Žurnalas gali papildomai būti **varžybų žurnalu** — pasirinkite varžybas iš *Varžybų* išskleidžiamojo sąrašo žurnalo kūrimo formoje. Tuščias sąrašas = įprastas žurnalas (numatytasis, esamas elgesys nepakinta).

Varžybų žurnalai gauna:

- **Varžybų mainų bloką** QSO formoje, kuris dinamiškai atvaizduojamas pagal pasirinktų varžybų schemą. Laukų tipai: `text`, `number` ir `serial` (automatiškai didėjantis, tik skaitomas). Laukai su žyme *sticky* (jūsų zona / apygarda / distriktas / galia / amžius / …) iš anksto užpildomi iš ankstesnio QSO reikšmės; kiekvieno QSO laukai (jų zona, jų serijos numeris, …) išvalomi po kiekvieno *Įrašyti QSO*.
- **Varžybų žetoną** šalia žurnalo pavadinimo antraštėje.
- **Dublikatų aptikimą**, kuris laikosi varžybų `duplicateRule` (`per-band-mode`, `per-band`, `per-day` arba `off`). Indikatorius lieka informacinis — niekada neblokuoja pateikimo.
- **Įspėjimo žetoną**, kai dabartinis UTC yra už deklaruotų varžybų datų (12 metų iš anksto įkelti, 2026–2037) arba kai pasirinkta juosta / režimas nėra varžybų leistinų sąrašuose. Niekada neblokuoja.
- **Pateikimo informacijos skydelį** žurnalo antraštėje: įmontuota forma Cabrillo antraštės laukams, kuriuos deklaruoja varžybos (kategorija, galia, vardas, klubas, adresas, komentaras, …). Reikšmės išlieka žurnale, ne kiekviename QSO.
- **Eksportuoti .cbr mygtuką** žurnalo antraštėje, šalia *Eksportuoti .adi*. Sukuria Cabrillo v3 failą: `CALLSIGN` / `GRID-LOCATOR` / `OPERATORS` iš anksto užpildyti iš pirmojo QSO stoties duomenų, likusi dalis iš pateikimo informacijos skydelio, tada po vieną `QSO:` eilutę kiekvienam kontaktui chronologine tvarka, naudojant varžybų `sentTemplate` / `rcvdTemplate` stulpelius.
- **Cabrillo pakartotinį importavimą** per standartinį *Importuoti žurnalo failą* mygtuką — `.cbr` failas, kurį anksčiau eksportavo programa (arba bet kuris kitas žurnalo įrenginys, kuris išveda standartinį Cabrillo v3), grįžta į naują tinkamo tipo varžybų žurnalą. `CONTEST:` antraštė sulyginama su įmontuotu katalogu; kai kelios konfigūracijos dalijasi ta pačia žyme (pvz., `ARRL-10` atitinka ir `arrl-10m-dx`, ir `arrl-10m-w`), programa išsprendžia dviprasmybę pagal QSO eilutės režimo raidę ir stulpelių skaičių, o tada teikia pirmenybę `-dx` variantui. Antraštės laukai (kategorija, vardas, klubas, komentarai ir kt.) atkuria pateikimo informacijos skydelį; QSO mainų reikšmės atkuria `q.contestExchange` pagal varžybų šabloną.

### Įmontuotas varžybų katalogas (68 konfigūracijos)

Sugrupuota pagal šeimas:

- **CQ šeima** (9): CQ WW SSB/CW/RTTY, CQ WPX SSB/CW/RTTY, CQ 160 CW/SSB, CQ-M International.
- **ARRL šeima** (9): ARRL DX SSB/CW (DX pusė), ARRL Field Day, ARRL 10m/160m/RTTY Roundup (kiekvienas pristatomas *abiem* DX ir W/VE perspektyvomis).
- **IARU** (2): IARU HF Championship, IARU R1 Field Day.
- **WAE ir kitos Europos** (8): WAE DX SSB/CW, EU HF Championship, LZ DX, Baltic Contest, NRAU-Baltic SSB/CW, SP DX.
- **Centrinės/Rytų Europos asimetrinės — abi perspektyvos** (14): OK/OM DX CW+SSB, HA DX, YO DX HF, Ukrainian DX, REF Contest CW+SSB.
- **Rusų klubinės / RadioSport** (12): Russian DX (abi pusės), Russian WW RTTY, Russian WW MultiMode, Yuri Gagarin International, Rusijos Federacijos taurė CW+SSB, RRTC, Asiatic Russia Championship, UA1DZ Memorial Cup, RDAC, RAEM.
- **Baltarusija + Italija + Kroatija + Ispanija + Ukrainos RTTY** (12): Belarus BFRR CW+SSB (abi pusės), ARI DX (abi pusės), Croatian 9A CW (abi pusės), Spanish CNCW (abi pusės), Ukrainian RTTY (abi pusės).
- **Pasaulinės** (2): All Asian DX CW+SSB.

Asimetriškos varžybos (kai priimančioji šalis ir DX pusė siunčia skirtingus mainus) pristatomos **dviem konfigūracijomis** — viena priimančiosios šalies perspektyvai (fiksuotas regiono kodas) ir kita DX perspektyvai (fiksuotas serijos numeris). Priimtos pusės laukas yra vienas laisvo teksto laukas, kad operatorius galėtų įvesti bet kurį formatą, priklausomai nuo kontakto.

Kiekvienoje konfigūracijoje yra:

- Varžybų mainų reikšmės, kurios pakartotinai išvedamos ADIF eksporte per `APP_LQ_*` vardų erdvės laukus; antraštės antspaudas `APP_LQ_CONTEST_ID` leidžia vėlesniam pakartotiniam importui atkurti žurnalą kaip tas pačias varžybas su visais mainų laukais nepakitusiais.
- 12 metų varžybų datos (2026–2037), kad žetonas *už varžybų lango* liktų naudingas dešimtmečiui be pakartotinio išleidimo.
- Cabrillo šablonas, kuris kartografuoja kiekvieną mainų lauką į teisingą `QSO:` eilutės stulpelį.

Naujų varžybų pridėjimas = įklijuokite naują IIFE bloką į [`contests.js`](contests.js) abėcėlinėje pozicijoje (kiekvieną esamą varžybą atskiria antraštės komentaras `// ==== <id> ====`, todėl lengva rasti, kur įterpti). Nereikia keisti `index.html`, `service-worker.js` ar `app.js` — renderer, pateikimo tvarkytojas, dublikatų detektorius, ADIF apyvartinio importo ir Cabrillo emiteris priima kiekvieną konfigūraciją kaip grynus duomenis.

## Importas ir eksportas

- **Importuokite** bet kurį žurnalo failą — spustelėkite *Importuoti žurnalo failą* po žurnalo kūrimo forma ir pasirinkite `.adi` / `.adif` (ADIF) arba `.cbr` / `.cab` (Cabrillo v3) failą. Formatas nustatomas automatiškai pagal pirmą failo eilutę (`<...>` → ADIF, `START-OF-LOG:` → Cabrillo, `[REG1TEST;1]` → pranešimas «EDI dar nepalaikomas»). Visada sukuriamas naujas žurnalas — importavimas niekada nesujungia su esamu. ADIF importas sukuria įprastą žurnalą, nebent antraštėje yra `APP_LQ_CONTEST_ID`, kurį įrašė mūsų pačių varžybų eksportas (tokiu atveju žurnalas atkuriamas kaip šių varžybų žurnalas). Cabrillo importas visada sukuria varžybų žurnalą — žr. skyrių *Varžybos* apie tai, kaip `CONTEST:` žymė sulyginama su įmontuotu katalogu.
- **ADIF eksportas**: spustelėkite *Eksportuoti .adi* žurnalo antraštėje. Atsisiunčiamas failas atitinkantis **ADIF 3.1.7**. Antraštė deklaruoja `ADIF_VER 3.1.7`, `PROGRAMID local-qso`, `PROGRAMVERSION` ir `CREATED_TIMESTAMP` (UTC). Kiekvieno QSO laukai (jei nėra tušti): `CALL`, `QSO_DATE`, `TIME_ON`, `BAND`, `MODE`, `SUBMODE`, `PROP_MODE`, `GRIDSQUARE`, `BAND_RX`, `SAT_MODE`, `SAT_NAME`, `RST_SENT`, `RST_RCVD`, `COMMENT`, `STATION_CALLSIGN`, `OPERATOR`, `MY_GRIDSQUARE` — po kurių eina kiekvienas papildomas ADIF laukas, išsaugotas importuojant (žr. žemiau).
- **Cabrillo eksportas** aprašytas aukščiau skyriuje *Varžybos* — jis prieinamas tik varžybų žurnalams (mygtukas *Eksportuoti .cbr* pasirodo žurnalo antraštėje, kai žurnalui priskirtos varžybos).
- **Be nuostolių veikimo ciklas**: ADIF importuojant kiekvienas laukas, kurio programa nemodelina savo sąsajoje (pvz., `NAME`, `FREQ`, `TX_PWR`, `DXCC`, `QSL_SENT`/`QSL_RCVD`, `POTA_REF`, `APP_*` laukai), išsaugomas QSO ir pažodžiui vėl išvedamas kito ADIF eksporto metu. Taigi eksportuojant failą, kuris pats buvo importuotas, viskas išsaugoma.
- Lauko ilgis ADIF traktuojamas kaip UTF-8 baitų skaičius, kaip reikalauja specifikacija, todėl daugiabaitis tekstas (pvz., akcentuotus ženklus `COMMENT`) analizuojamas teisingai.

## Privatumas ir duomenys

- Visi duomenys saugomi jūsų naršyklės `localStorage` raktu `local-qso:v1`.
- Niekas niekur nesiunčiama. Nėra jokio serverio, API skambučio, telemetrijos ar analizės.
- Naršyklės svetainės duomenų išvalymas, privataus/inkognito režimo naudojimas arba kitos naršyklės/įrenginio naudojimas reiškia naują tuščią žurnalą — naudokite *Eksportuoti .adi* atsarginei kopijai.

## Sąsajos kalba

Kalbos atrankos elementas antraštėje apima **28 kalbas**. Pasirinkite vieną ir likusi sąsaja nedelsiant iš naujo atvaizduojama; jūsų pasirinkimas išsaugomas kartu su žurnalais ir atsižvelgiamas kito apsilankymo metu. Numatytoji yra anglų kalba.

Galimos kalbos (vėliavėlių emoji + vietinis pavadinimas; abėcėlės tvarka kiekvienoje rašto sistemoje):

🇺🇸 English · 🇨🇿 Čeština · 🇩🇰 Dansk · 🇩🇪 Deutsch · 🇪🇪 Eesti · 🇪🇸 Español · 🇫🇷 Français · 🇮🇪 Gaeilge · 🇭🇷 Hrvatski · 🇮🇹 Italiano · 🇱🇻 Latviešu · 🇱🇹 Lietuvių · 🇭🇺 Magyar · 🇳🇱 Nederlands · 🇳🇴 Norsk · 🇵🇱 Polski · 🇵🇹 Português · 🇷🇴 Română · 🇸🇰 Slovenčina · 🇸🇮 Slovenščina · 🇫🇮 Suomi · 🇸🇪 Svenska · 🇧🇾 Беларуская · 🇧🇬 Български · 🇷🇺 Русский · 🇷🇸 Српски · 🇺🇦 Українська · 🇬🇷 Ελληνικά

Universalios techninės etiketės visomis kalbomis lieka savo kanoninėje formoje: juostų pavadinimai (`20m`, `70cm`, …), ADIF režimų kodai (`SSB`, `FT8`, `CW`, …), `QSO`, `RST`, `UTC` ir ISO šalių kodai.

Trūksta eilutės jūsų kalba? Visi kalbų žodynai yra viename [`i18n.js`](i18n.js) faile, padalintame į 28 sekcijas su `// ==== <lang> ====` antraštės komentarais. Ieškokite savo kalbos antraštės, kad pereitumėte į jos sekciją, tada pridėkite/redaguokite raktą. Visiškai naujos kalbos pridėjimas = įklijuokite naują IIFE bloką į `i18n.js` abėcėlinėje pozicijoje, pridėkite kalbos kodą į `SUPPORTED_LANGS` `app.js` ir `<select>` parinktį `index.html`.

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
  - `i18n.js` — vienas rankiniu būdu palaikomas failas su visais 28 kalbų žodynais. Kiekviena kalba yra savarankiškas IIFE, priskiriantis `window.I18N[<lang>]` plokščią raktas→eilutė atvaizdavimą. Blokai atskirti antraštės komentarais `// ==== <lang> ====` — grep pagal vieną nuveda į reikiamą kalbą. Sujungta į vieną failą vietoj 28 atskirų, nes vertimų failai yra labai pasikartojantys (tie patys raktų vardai, vietaženklių sintaksė), o gzip suspaudžia visą rinkinį daug geriau nei 28 atskirus srautus — sutaupo ~23 KB pirmojo pakrovimo metu ir pašalina 27 HTTP užklausas. `t()` ir `applyLanguage()` `app.js` tvarko paieškas (su anglų kalbos atsargine) ir eina per DOM atnaujindami kiekvieną `[data-i18n*]` elementą.
  - `contests.js` — vienas rankiniu būdu palaikomas failas su visomis 68 varžybų konfigūracijomis. Kiekviena varžyba yra savarankiškas IIFE, priskiriantis `window.CONTESTS[<id>]` schemai atitinkantį konfigūracijos objektą (`{name, shortName, windows[], bands[], modes[], exchange[], duplicateRule, cabrillo}`). Blokai atskirti antraštės komentarais `// ==== <id> ====` — grep pagal vieną nuveda į reikiamą varžybą. Sujungta į vieną failą vietoj 68 atskirų, nes varžybų konfigūracijos yra labai pasikartojančios (ta pati schema, `APP_LQ_*` prefiksas, Cabrillo antraštės laukų pavadinimai), o gzip suspaudžia visą rinkinį daug geriau nei 68 atskirus srautus — sutaupo ~42 KB pirmojo pakrovimo metu ir pašalina 67 HTTP užklausas. Įkeliamas viena `<script>` žyme `index.html` prieš `app.js`, kad registras būtų užpildytas, kai statomas varžybų išskleidžiamasis sąrašas.
- Išbandyta naujose Chromium, Firefox ir Safari versijose (staliniai + iOS).

## Padėkos

Sukūrė [YL3IM](https://www.qrz.com/db/YL3IM).

Dėkojame [A65BR](https://www.qrz.com/db/A65BR) Olegui už neįkainojamas užuominas, kurios padarė palydovo QSO dalį iš tikrųjų naudojamą — modernūs dviejų raidžių palydovo režimo žymėjimai, AMSAT katalogas ir automatinis uplink/downlink koregavimas kilo iš jo atsiliepimų.

Šalių vėliavos remiasi Unicode regioninių indikatorių sekomis. Jos teisingai rodomos macOS, iOS, Linux (su vėliavoms tinkamu emoji šriftu) ir Android. Windows neturi sistemos vėliavų šrifto, todėl vėliavų emoji ten gali rodytis kaip raidžių poros.
