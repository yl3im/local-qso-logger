# Local QSO Logger

## Citește în limba ta

🇺🇸 [English](README.md) · 🇨🇿 [Čeština](README.cs.md) · 🇩🇰 [Dansk](README.da.md) · 🇩🇪 [Deutsch](README.de.md) · 🇪🇪 [Eesti](README.et.md) · 🇪🇸 [Español](README.es.md) · 🇫🇷 [Français](README.fr.md) · 🇮🇪 [Gaeilge](README.ga.md) · 🇭🇷 [Hrvatski](README.hr.md) · 🇮🇹 [Italiano](README.it.md) · 🇱🇻 [Latviešu](README.lv.md) · 🇱🇹 [Lietuvių](README.lt.md) · 🇭🇺 [Magyar](README.hu.md) · 🇳🇱 [Nederlands](README.nl.md) · 🇳🇴 [Norsk](README.no.md) · 🇵🇱 [Polski](README.pl.md) · 🇵🇹 [Português](README.pt.md) · 🇷🇴 Română · 🇸🇰 [Slovenčina](README.sk.md) · 🇸🇮 [Slovenščina](README.sl.md) · 🇫🇮 [Suomi](README.fi.md) · 🇸🇪 [Svenska](README.sv.md) · 🇧🇾 [Беларуская](README.be.md) · 🇧🇬 [Български](README.bg.md) · 🇷🇺 [Русский](README.ru.md) · 🇷🇸 [Српски](README.sr.md) · 🇺🇦 [Українська](README.uk.md) · 🇬🇷 [Ελληνικά](README.el.md)

Un logger QSO pentru radioamatori care respectă confidențialitatea și rulează complet în browserul tău. Fără cont, fără server, fără urmărire, fără analiză — jurnalele tale trăiesc doar în `localStorage` al browserului și nu părăsesc niciodată dispozitivul tău.

De [YL3IM](https://www.qrz.com/db/YL3IM). Site-ul proiectului: [qso.ham.lv](https://qso.ham.lv).

![Local QSO Logger pe iPad](media/iPad.png)

## Cuprins

- [Citește în limba ta](#citește-în-limba-ta)
- [Funcționalități](#funcționalități)
- [Primii pași](#primii-pași)
- [Instalare ca PWA pe mobil](#instalare-ca-pwa-pe-mobil)
  - [iOS (doar Safari)](#ios-doar-safari)
  - [Android (Chrome / Edge / Firefox)](#android-chrome--edge--firefox)
- [Jurnale](#jurnale)
- [QSO-uri](#qso-uri)
- [Import și export ADIF](#import-și-export-adif)
- [Confidențialitate și date](#confidențialitate-și-date)
- [Limba interfeței](#limba-interfeței)
- [Teme](#teme)
- [Note tehnice](#note-tehnice)
- [Mulțumiri](#mulțumiri)

## Funcționalități

- Mai multe jurnale; fiecare cu propria listă de QSO-uri.
- Acțiuni jurnal: creare, redenumire, ștergere, import din ADIF, export în ADIF (`.adi`).
- Formularul QSO grupat în trei blocuri: **Date stație** (indicativul stației, indicativul operatorului, locatorul propriu) care rămân lipite între QSO-uri; **Mod de operare** (mod de propagare, satelit, mod, mod satelit, bandă, bandă RX) cu câmpuri de satelit vizibile doar când modul de propagare este *Satelit*; și **Date QSO** (indicativul contactat, locatorul contactat, data/ora UTC la editare, comentariu, RST trimis, RST primit).
- Taxonomie completă ADIF `MODE` → `SUBMODE` în lista derulantă a modurilor — alege un mod părinte (`SSB`, `MFSK`, …) sau mergi direct la un submod specific (`USB`, `FT4`, …); aplicația stochează ambele câmpuri conform ADIF, iar tabelul afișează submodul specific când există.
- Enumerare completă a modurilor de propagare ADIF (SAT, RPT, EME, ES, MS, Aurora etc.) ca listă derulantă.
- Catalog complet de sateliți AMSAT (~110 sateliți) și o listă derulantă **Mod satelit** pe două niveluri: coduri preferate de două litere uplink/downlink în partea de sus (LU, LV, SX, UU, UV, VA, VU, VV) și desemnările moștenite de o literă (A/B/J/K/L/R/S/T/U/V/W/X) grupate ca *depășite* jos. Alegerea unui mod satelit ajustează automat `BAND` (uplink) și `RX band` (downlink).
- Editarea și ștergerea oricărui QSO (cu confirmare la ștergere).
- Valori implicite sensibile: data/ora UTC precompletate la *acum*, RST implicit în funcție de mod (59 pentru moduri vocale, 599 pentru CW/digital), date stație + bandă + mod + mod de propagare lipite între QSO-uri consecutive (doar câmpurile per contact — indicativ, locatorul lor, comentariu, RST — sunt șterse după fiecare *Înregistrare QSO*).
- Indicator în timp real pentru indicative duplicate (informativ — duplicatele sunt permise).
- Coloana cu steagul țării derivat din prefixul indicativului (acoperă ≥99 % din prefixele obișnuite de radioamatori, inclusiv apeluri portabile ca `9A/M0NCG`).
- Afișarea datei adaptată la locale în tabelul QSO; stocarea ISO și ieșirea ADIF rămân nemodificate.
- Interfața disponibilă în **28 de limbi** (engleză plus 22 în scriere latină, 5 în chirilică și greacă); selector cu emoji steag în antet.
- Teme zi / noapte (zi este implicit; comutatorul se află în antet).
- Layout responsiv adaptat pentru mobil cu butoane de dimensiune tactilă.
- Funcționează complet offline — fără cereri de rețea în niciun moment.
- Instalabil ca PWA (Adaugă la ecranul principal / Instalează aplicația) când este găzduit pe HTTPS.

## Primii pași

Deschide pur și simplu `index.html` într-un browser modern. Fără pas de compilare, fără instalare, fără server.

Dacă dorești să-l găzduiești, pune fișierele statice (`index.html`, `style.css`, `app.js`, `favicon.svg`, `manifest.webmanifest`, `service-worker.js` și directorul `i18n/` cu cele 28 de fișiere de traducere) pe orice gazdă statică (GitHub Pages, Netlify, propriul server web). Funcționează și prin `file://` — înregistrarea service worker-ului este omisă automat pe protocolul `file:`, astfel încât deschiderea `index.html` direct de pe disc funcționează curat.

Când este găzduit pe HTTPS, aplicația devine instalabilă ca PWA (meniul browserului *Instalează aplicația* / *Adaugă la ecranul principal*) și funcționează offline după prima vizită datorită unui service worker cache-first care precachează toate fișierele statice (UI + toate traducerile).

Un jurnal implicit este creat automat la prima vizită, astfel încât poți începe să înregistrezi imediat.

## Instalare ca PWA pe mobil

Când aplicația este găzduită pe HTTPS (de ex. GitHub Pages), o poți instala pe ecranul principal al telefonului pentru a rula pe tot ecranul fără bara browserului. După prima lansare, service worker-ul cachează totul, astfel încât lansările ulterioare funcționează complet offline.

### iOS (doar Safari)

Pe iOS, doar Safari poate instala PWA-uri — browserele terțe nu pot.

1. Deschide site-ul în **Safari**.
2. Apasă butonul **Distribuie**.
3. Alege **Adaugă pe ecranul principal**, apoi **Adaugă**.

Ghid:

![Ghid de instalare iOS](media/iOS_add_to_home_screen.gif)

Sursă de calitate superioară: [media/iOS_add_to_home_screen.mp4](media/iOS_add_to_home_screen.mp4).

### Android (Chrome / Edge / Firefox)

1. Deschide site-ul în browser. Poate apărea automat o solicitare de *Instalare aplicație*.
2. Altfel, deschide **meniul ⋮** → **Instalează aplicația** (sau **Adaugă la ecranul principal** pe versiunile mai vechi).

Ghid:

![Ghid de instalare Android](media/Android_add_to_home_screen.gif)

Sursă de calitate superioară: [media/Android_add_to_home_screen.mp4](media/Android_add_to_home_screen.mp4).

## Jurnale

- **Creare:** tastează un nume în *Numele jurnalului* și trimite. Dacă lași numele gol, valoarea implicită este `Log YYYY-MM-DD HH:MM UTC`.
- **Comutare:** apasă pe orice jurnal din bara laterală.
- **Redenumire:** apasă pe *Redenumește* în antetul jurnalului. Apasă Enter pentru a salva, Escape pentru a anula.
- **Ștergere:** apasă pe *Șterge jurnalul*. Ți se va cere confirmare. Dacă ștergi ultimul jurnal, unul nou este creat automat.

## QSO-uri

- Completează formularul și apasă **Înregistrare QSO**.
- Formularul este organizat în trei blocuri:
  - **Date stație** — *Indicativul stației* (indicativul tău de transmisie, ADIF `STATION_CALLSIGN`), *Operator* (indicativul operatorului individual — diferit de *indicativul stației* când un operator invitat este la microfonul unei stații de club; ADIF `OPERATOR`) și *Locatorul meu* (ADIF `MY_GRIDSQUARE`). Acestea rămân lipite între QSO-urile din aceeași sesiune — setează-le o dată și se transferă.
  - **Mod de operare** — *Mod de prop.*, *Mod*, *Bandă*, plus câmpurile exclusiv satelit *Satelit* / *Mod satelit* / *Bandă RX* când modul de propagare este *Satelit*. Banda, modul și modul de propagare sunt lipite ca datele stației.
  - **Date QSO** — câmpuri per contact: *Indicativ*, *Locator* (Maidenhead-ul celeilalte stații), *Comentariu* (ADIF `COMMENT`), *RST trimis*, *RST primit*. La editarea unui QSO existent, *Data (UTC)* și *Ora (UTC)* apar și ele în acest bloc. Aceste câmpuri sunt șterse după fiecare *Înregistrare QSO*.
- Toate indicativele (contactat, stație, operator) sunt convertite automat la majuscule în timp ce tastezi; ambele câmpuri de locator fac același lucru.
- Data și ora sunt precompletate la *acum* în UTC la trimitere; la editare poți tasta orice valoare.
- RST trimis / RST primit, dacă sunt lăsate goale, sunt implicit **59** pentru moduri vocale (SSB/FM/DIGITALVOICE) și **599** pentru CW și moduri digitale (CW/FT8/FT4/RTTY/PSK31/JT65). Valoarea implicită urmează MODE-ul părinte, astfel încât alegerea unui submod specific ca *USB* sau *FT4* dă tot valoarea implicită corectă.
- Un cip *Duplicat în acest jurnal* apare sub câmpul indicativului dacă indicativul există deja în jurnalul curent. Duplicatele *nu* sunt blocate.
- **Mod de propagare** — listă derulantă opțională de moduri de propagare ADIF (SAT, RPT, EME, F2, Es, MS, LOS etc.). Lasă gol pentru QSO-uri HF terestre normale.
- **QSO-uri cu satelit** — selectarea modului de propagare *Satelit* dezvăluie trei câmpuri exclusiv satelit: **Satelit** (listă derulantă cu ~110 sateliți înregistrați AMSAT), **Mod satelit** (desemnări literale AMSAT, grupate ca coduri *moderne* de două litere uplink/downlink în partea de sus și coduri *depășite* de o literă jos) și **Bandă RX** (banda downlink). Satelit, mod satelit și bandă RX sunt obligatorii — browserul va refuza trimiterea fără ele. Alegerea unui **Mod satelit** completează automat **Banda** principală cu banda uplink și **Banda RX** cu banda downlink (de ex. modul J → uplink 2m, downlink 70cm). Revenirea la *satelit* de la un alt mod de propagare resetează modul satelit pentru a alege unul nou. QSO-urile non-satelit nu poartă niciodată câmpuri de satelit; schimbarea unui QSO existent de la satelit la alt mod de propagare le elimină curat. **Locatorul** și **Locatorul meu** sunt câmpuri generale (utile și pentru concursuri de locator VHF/UHF) și rămân vizibile pentru toate QSO-urile.
- **Editare QSO** cu butonul *Editează* pe rând. Formularul trece în modul *Actualizare QSO*, rândul este evidențiat și apare un buton *Anulare*. Schimbarea jurnalelor sau ștergerea jurnalului anulează editarea automat.
- **Ștergere QSO** cu butonul *Șterge* pe rând (solicită confirmare).

## Import și export ADIF

- **Export**: apasă pe *Exportă .adi* în antetul jurnalului. Se descarcă un fișier conform **ADIF 3.1.7**. Antetul declară `ADIF_VER 3.1.7`, `PROGRAMID local-qso`, `PROGRAMVERSION` și `CREATED_TIMESTAMP` (UTC). Câmpuri per QSO emise (când nu sunt goale): `CALL`, `QSO_DATE`, `TIME_ON`, `BAND`, `MODE`, `SUBMODE`, `PROP_MODE`, `GRIDSQUARE`, `BAND_RX`, `SAT_MODE`, `SAT_NAME`, `RST_SENT`, `RST_RCVD`, `COMMENT`, `STATION_CALLSIGN`, `OPERATOR`, `MY_GRIDSQUARE` — urmate de fiecare câmp ADIF suplimentar păstrat la import (vezi mai jos).
- **Import**: apasă pe *Importă fișier .adi* sub formularul de creare jurnal și alege un fișier `.adi` / `.adif`. Din acesta se creează un jurnal nou, denumit `Imported YYYY-MM-DD HH:MM UTC`. Importul nu fuzionează niciodată cu un jurnal existent.
- **Circuit fără pierderi**: la import, orice câmp ADIF pe care aplicația nu îl modelează în interfața sa (de ex. `NAME`, `FREQ`, `TX_PWR`, `DXCC`, `QSL_SENT`/`QSL_RCVD`, `POTA_REF`, câmpuri `APP_*`) este păstrat pe QSO și re-emis literal la următorul export. Astfel, exportarea unui fișier care a fost el însuși importat păstrează totul.
- Lungimea câmpului este tratată ca un număr de octeți UTF-8, așa cum solicită specificația, astfel încât textul multi-byte (de ex. caractere accentuate în `COMMENT`) este analizat corect.

## Confidențialitate și date

- Toate datele sunt stocate în `localStorage` al browserului tău sub cheia `local-qso:v1`.
- Nimic nu este transmis nicăieri. Nu există backend, apel API, telemetrie sau analize.
- Ștergerea datelor site-ului browserului, utilizarea modului privat/incognito sau a unui alt browser/dispozitiv înseamnă un jurnal nou gol — folosește *Exportă .adi* pentru a face copii de rezervă.

## Limba interfeței

Un selector de limbă în antet acoperă **28 de limbi**. Alege una și restul interfeței se redă imediat; alegerea ta este salvată alături de jurnalele tale și respectată la următoarea vizită. Engleza este implicită.

Limbi disponibile (emoji steag + nume nativ; ordonate alfabetic în cadrul fiecărui sistem de scriere):

🇺🇸 English · 🇨🇿 Čeština · 🇩🇰 Dansk · 🇩🇪 Deutsch · 🇪🇪 Eesti · 🇪🇸 Español · 🇫🇷 Français · 🇮🇪 Gaeilge · 🇭🇷 Hrvatski · 🇮🇹 Italiano · 🇱🇻 Latviešu · 🇱🇹 Lietuvių · 🇭🇺 Magyar · 🇳🇱 Nederlands · 🇳🇴 Norsk · 🇵🇱 Polski · 🇵🇹 Português · 🇷🇴 Română · 🇸🇰 Slovenčina · 🇸🇮 Slovenščina · 🇫🇮 Suomi · 🇸🇪 Svenska · 🇧🇾 Беларуская · 🇧🇬 Български · 🇷🇺 Русский · 🇷🇸 Српски · 🇺🇦 Українська · 🇬🇷 Ελληνικά

Etichetele tehnice universale rămân în forma lor canonică în toate limbile: denumirile benzilor (`20m`, `70cm`, …), codurile de mod ADIF (`SSB`, `FT8`, `CW`, …), `QSO`, `RST`, `UTC` și codurile de țară ISO.

Lipsește un șir în limba ta? Fiecare limbă este un singur fișier mic în [`i18n/`](i18n/) — copiază `i18n/en.js`, traduce valorile, salvează ca `i18n/<code>.js`, apoi adaugă un tag `<script>` și o opțiune `<select>` în `index.html` și codul în `SUPPORTED_LANGS` în `app.js`.

## Teme

Comutatorul de teme din antet comută între zi (implicit) și noapte. Preferința este salvată alături de jurnalele tale și respectată la următoarea vizită. Selectoarele native de dată/oră urmează tema prin `color-scheme`.

## Note tehnice

- Aplicație cu o singură pagină, HTML + CSS + JavaScript pur. Fără framework-uri, fără pas de compilare, fără dependențe.
- Fișiere sursă:
  - `index.html` — marcaj și metaetichete.
  - `style.css` — teme și layout (variabile zi/noapte, media queries pentru mobil).
  - `app.js` — stare, persistență, randare, analizor/serializator ADIF, căutare prefix indicativ → țară.
  - `favicon.svg` — favicon SVG inline.
  - `manifest.webmanifest` — Web App Manifest (nume, culoare temă, domeniu, pictogramă) pentru ca aplicația să fie instalabilă ca PWA pe mobil și desktop.
  - `service-worker.js` — service worker cache-first care precachează toate fișierele statice la instalare, elimină cachele vechi la activare și menține aplicația complet offline după prima vizită. Înregistrarea este omisă automat pe protocolul `file://`, astfel încât deschiderea `index.html` direct de pe disc rămâne curată.
  - `i18n/<lang>.js` — un fișier de traducere per limbă acceptată (28 în total). Fiecare este un mic IIFE care atribuie `window.I18N[<lang>]` o mapă plată cheie→șir. `t()` și `applyLanguage()` în `app.js` gestionează căutările (cu fallback în engleză) și parcurg DOM-ul actualizând fiecare element `[data-i18n*]`.
- Testat pe Chromium, Firefox și Safari recente (desktop + iOS).

## Mulțumiri

Creat de [YL3IM](https://www.qrz.com/db/YL3IM).

Mulțumiri lui [A65BR](https://www.qrz.com/db/A65BR) Oleg pentru sfaturile neprețuite care au făcut ca partea de QSO prin satelit să fie cu adevărat utilizabilă — desemnările moderne de două litere ale modului satelit, catalogul AMSAT și ajustarea automată uplink/downlink provin toate din feedback-ul său.

Steagurile țărilor se bazează pe secvențe de indicatori regionali Unicode. Sunt afișate corect pe macOS, iOS, Linux (cu un font emoji compatibil cu steaguri) și Android. Windows nu include un font de sistem pentru steaguri, deci emoji-urile de steag pot apărea ca perechi de litere acolo.
