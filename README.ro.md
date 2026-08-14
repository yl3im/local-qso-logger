# Local QSO Logger

## Citește în limba ta

🇺🇸 [English](README.md) · 🇨🇿 [Čeština](README.cs.md) · 🇩🇰 [Dansk](README.da.md) · 🇩🇪 [Deutsch](README.de.md) · 🇪🇪 [Eesti](README.et.md) · 🇪🇸 [Español](README.es.md) · 🇫🇷 [Français](README.fr.md) · 🇮🇪 [Gaeilge](README.ga.md) · 🇭🇷 [Hrvatski](README.hr.md) · 🇮🇹 [Italiano](README.it.md) · 🇱🇻 [Latviešu](README.lv.md) · 🇱🇹 [Lietuvių](README.lt.md) · 🇭🇺 [Magyar](README.hu.md) · 🇳🇱 [Nederlands](README.nl.md) · 🇳🇴 [Norsk](README.no.md) · 🇵🇱 [Polski](README.pl.md) · 🇵🇹 [Português](README.pt.md) · 🇷🇴 Română · 🇸🇰 [Slovenčina](README.sk.md) · 🇸🇮 [Slovenščina](README.sl.md) · 🇫🇮 [Suomi](README.fi.md) · 🇸🇪 [Svenska](README.sv.md) · 🇧🇾 [Беларуская](README.be.md) · 🇧🇬 [Български](README.bg.md) · 🇷🇺 [Русский](README.ru.md) · 🇷🇸 [Српски](README.sr.md) · 🇺🇦 [Українська](README.uk.md) · 🇬🇷 [Ελληνικά](README.el.md)

Un logger QSO pentru radioamatori care respectă confidențialitatea și rulează complet în browserul tău. Fără cont, fără server, fără urmărire, fără analiză — jurnalele tale trăiesc doar în `localStorage` al browserului și nu părăsesc niciodată dispozitivul tău.

De [YL3IM](https://www.qrz.com/db/YL3IM). Site-ul proiectului: [qso.lv](https://qso.lv).

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
- [Concursuri](#concursuri)
- [Import și export](#import-și-export)
- [Confidențialitate și date](#confidențialitate-și-date)
- [Limba interfeței](#limba-interfeței)
- [Teme](#teme)
- [Note tehnice](#note-tehnice)
- [Mulțumiri](#mulțumiri)

## Funcționalități

- Mai multe jurnale; fiecare cu propria listă de QSO-uri.
- **Jurnalele de concurs** sunt opționale — alege dintr-un catalog de 68 de concursuri integrate la crearea unui jurnal. Formularul QSO capătă un bloc *Schimb de concurs* specific concursului, detectarea duplicatelor respectă regula concursului, iar *Exportă .cbr* generează un fișier de trimitere Cabrillo v3 alături de exportul ADIF obișnuit.
- Acțiuni jurnal: creare, redenumire, ștergere, import fișier jurnal (ADIF sau Cabrillo — formatul detectat automat), export în ADIF (`.adi`), plus *Exportă .cbr* (Cabrillo v3) pentru jurnalele de concurs. Reimportarea unui fișier `.cbr` exportat anterior de aplicație îl restabilește ca același jurnal de concurs.
- Formularul QSO grupat în trei blocuri: **Date stație** (indicativul stației, indicativul operatorului, locatorul propriu) care rămân lipite între QSO-uri; **Mod de operare** (mod de propagare, satelit, mod, mod satelit, bandă, bandă RX) cu câmpuri de satelit vizibile doar când modul de propagare este *Satelit*; și **Date QSO** (indicativul contactat, locatorul contactat, data/ora UTC la editare, comentariu, RST trimis, RST primit).
- Taxonomie completă ADIF `MODE` → `SUBMODE` în lista derulantă a modurilor — alege un mod părinte (`SSB`, `MFSK`, …) sau mergi direct la un submod specific (`USB`, `FT4`, …); aplicația stochează ambele câmpuri conform ADIF, iar tabelul afișează submodul specific când există.
- Enumerare completă a modurilor de propagare ADIF (SAT, RPT, EME, ES, MS, Aurora etc.) ca listă derulantă.
- Catalog complet de sateliți AMSAT (~110 sateliți) și o listă derulantă **Mod satelit** pe două niveluri: coduri preferate de două litere uplink/downlink în partea de sus (LU, LV, SX, UU, UV, VA, VU, VV) și desemnările moștenite de o literă (A/B/J/K/L/R/S/T/U/V/W/X) grupate ca *depășite* jos. Alegerea unui mod satelit ajustează automat `BAND` (uplink) și `RX band` (downlink).
- Editarea și ștergerea oricărui QSO (cu confirmare la ștergere).
- Valori implicite sensibile: data/ora UTC precompletate la *acum*, RST implicit în funcție de mod (59 pentru moduri vocale, 599 pentru CW/digital), date stație + bandă + mod + mod de propagare lipite între QSO-uri consecutive (doar câmpurile per contact — indicativ, locatorul lor, comentariu, RST — sunt șterse după fiecare *Înregistrare QSO*).
- Indicator în timp real pentru indicative duplicate (informativ — duplicatele sunt permise).
- Coloana cu steagul țării derivat din prefixul indicativului (acoperă ≥99 % din prefixele obișnuite de radioamatori, inclusiv apeluri portabile ca `9A/M0NCG`).
- Autodetectare cu o singură atingere pentru **Locatorul meu**: un buton 🌐 lângă câmp cere browserului coordonatele tale actuale și completează locatorul Maidenhead de 6 caractere (folosește API-ul de geolocalizare al browserului — necesită permisiunea utilizatorului).
- Afișarea datei adaptată la locale în tabelul QSO; stocarea ISO și ieșirea ADIF rămân nemodificate.
- Interfața disponibilă în **28 de limbi** (engleză plus 22 în scriere latină, 5 în chirilică și greacă); selector cu emoji steag în antet.
- Teme zi / noapte (zi este implicit; comutatorul se află în antet).
- Layout responsiv adaptat pentru mobil cu butoane de dimensiune tactilă.
- Funcționează complet offline — fără cereri de rețea în niciun moment.
- Instalabil ca PWA (Adaugă la ecranul principal / Instalează aplicația) când este găzduit pe HTTPS.

## Primii pași

Deschide pur și simplu `index.html` într-un browser modern. Fără pas de compilare, fără instalare, fără server.

Dacă dorești să-l găzduiești, pune fișierele statice (`index.html`, `style.css`, `app.js`, `favicon.svg`, `manifest.webmanifest`, `service-worker.js`, singurul pachet `i18n.js` care poartă toate cele 28 de dicționare lingvistice, și singurul pachet `contests.js` care poartă toate cele 68 de configurații de concurs) pe orice gazdă statică (GitHub Pages, Netlify, propriul server web). Funcționează și prin `file://` — înregistrarea service worker-ului este omisă automat pe protocolul `file:`, astfel încât deschiderea `index.html` direct de pe disc funcționează curat.

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
  - **Date stație** — *Indicativul stației* (indicativul tău de transmisie, ADIF `STATION_CALLSIGN`), *Operator* (indicativul operatorului individual — diferit de *indicativul stației* când un operator invitat este la microfonul unei stații de club; ADIF `OPERATOR`) și *Locatorul meu* (ADIF `MY_GRIDSQUARE`) cu un buton 🌐 care completează locatorul din locația curentă a browserului tău (API de geolocalizare — browserul va solicita permisiunea prima dată). Acestea rămân lipite între QSO-urile din aceeași sesiune — setează-le o dată și se transferă.
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

## Concursuri

Un jurnal poate fi opțional un **jurnal de concurs** — alege un concurs din lista derulantă *Concurs* din formularul de creare a jurnalului. Listă goală = jurnal obișnuit (implicit, comportamentul existent neschimbat).

Jurnalele de concurs primesc:

- **Bloc de schimb de concurs** în formularul QSO, redat dinamic din schema concursului selectat. Tipurile de câmp sunt `text`, `number` și `serial` (auto-incrementat, doar citire). Câmpurile marcate ca *sticky* (propria ta zonă / județ / district / putere / vârstă / …) se precompletează din valoarea QSO-ului anterior; câmpurile per QSO (zona lor, numărul lor de serie, …) sunt șterse după fiecare *Înregistrare QSO*.
- **Insignă de concurs** lângă numele jurnalului în antetul de detaliu.
- **Detectarea duplicatelor** respectă `duplicateRule` a concursului (`per-band-mode`, `per-band`, `per-day` sau `off`). Cipul rămâne doar informativ — nu blochează niciodată trimiterea.
- **Cip de avertizare** când UTC-ul curent iese din oricare dintre ferestrele de dată declarate de concurs (12 ani preîncărcați, 2026–2037), sau când banda / modul selectate nu sunt în setul legal al concursului. Nu blochează niciodată.
- **Panou de informații de trimitere** în antetul de detaliu: un formular inline pentru câmpurile de antet Cabrillo pe care le declară concursul (categorie, putere, nume, club, adresă, soapbox, …). Valorile persistă pe jurnal, nu per QSO.
- **Buton Exportă .cbr** în antetul de detaliu, lângă *Exportă .adi*. Emite un fișier Cabrillo v3: `CALLSIGN` / `GRID-LOCATOR` / `OPERATORS` precompletate din datele stației primului QSO, restul din panoul de informații de trimitere, apoi o linie `QSO:` per contact în ordine cronologică folosind coloanele `sentTemplate` / `rcvdTemplate` ale concursului.
- **Reimportare Cabrillo** prin butonul standard *Importă fișier jurnal* — un fișier `.cbr` exportat anterior de aplicație (sau de orice alt logger care emite Cabrillo v3 standard) revine într-un jurnal de concurs nou de tipul corect. Antetul `CONTEST:` este comparat cu catalogul integrat; când mai multe configurații partajează aceeași etichetă (de ex. `ARRL-10` se potrivește atât cu `arrl-10m-dx`, cât și cu `arrl-10m-w`), aplicația dezambiguizează comparând litera de mod a liniei QSO și numărul de coloane cu șablonul fiecărui candidat, apoi preferă varianta `-dx`. Câmpurile de antet (categorie, nume, club, soapbox, …) rehidratează panoul de informații de trimitere; valorile de schimb QSO rehidratează `q.contestExchange` conform șablonului concursului.

### Catalog de concursuri integrat (68 de configurații)

Grupate pe familii:

- **Familia CQ** (9): CQ WW SSB/CW/RTTY, CQ WPX SSB/CW/RTTY, CQ 160 CW/SSB, CQ-M International.
- **Familia ARRL** (9): ARRL DX SSB/CW (partea DX), ARRL Field Day, ARRL 10m/160m/RTTY Roundup (fiecare livrat din *ambele* perspective DX și W/VE).
- **IARU** (2): IARU HF Championship, IARU R1 Field Day.
- **WAE și altele europene** (8): WAE DX SSB/CW, EU HF Championship, LZ DX, Baltic Contest, NRAU-Baltic SSB/CW, SP DX.
- **Central-/Est-europene asimetrice — ambele perspective** (14): OK/OM DX CW+SSB, HA DX, YO DX HF, Ukrainian DX, REF Contest CW+SSB.
- **Club rusesc / RadioSport** (12): Russian DX (ambele părți), Russian WW RTTY, Russian WW MultiMode, Yuri Gagarin International, Cup of the Russian Federation CW+SSB, RRTC, Asiatic Russia Championship, UA1DZ Memorial Cup, RDAC, RAEM.
- **Belarus + Italia + Croația + Spania + RTTY ucrainean** (12): Belarus BFRR CW+SSB (ambele părți), ARI DX (ambele părți), Croatian 9A CW (ambele părți), Spanish CNCW (ambele părți), Ukrainian RTTY (ambele părți).
- **Global** (2): All Asian DX CW+SSB.

Concursurile asimetrice (unde țara gazdă și partea DX trimit schimburi diferite) sunt livrate cu **două configurații** — una pentru perspectiva țării gazdă (cod de regiune lipit) și una pentru perspectiva DX (număr de serie lipit). Câmpul primit este un singur câmp de text liber, astfel încât operatorul poate tasta orice format în funcție de contact.

Fiecare configurație include:

- Valorile de schimb de concurs sunt reemise în exportul ADIF prin câmpuri din spațiul de nume `APP_LQ_*`; ștampila de antet `APP_LQ_CONTEST_ID` permite unei reimportări ulterioare să rehidrateze jurnalul ca același concurs cu toate câmpurile intacte.
- 12 ani de ferestre de dată (2026–2037), astfel încât cipul *în afara ferestrei de concurs* rămâne util un deceniu fără o nouă livrare.
- Un șablon Cabrillo care mapează fiecare câmp de schimb la coloana corectă a liniei `QSO:`.

Adăugarea unui concurs nou = lipește un nou bloc IIFE în [`contests.js`](contests.js) la poziția alfabetică (fiecare concurs existent este delimitat de un comentariu de antet `// ==== <id> ====`, deci este ușor de găsit unde să inserezi). Nu este necesară nicio modificare la `index.html`, nicio modificare la `service-worker.js`, nicio modificare la `app.js` — randorul, gestionarul de trimitere, detectorul de duplicate, circuitul ADIF și emițătorul Cabrillo absorb fiecare configurație ca date pure.

## Import și export

- **Importă** orice fișier jurnal — apasă pe *Importă fișier jurnal* sub formularul de creare a jurnalului și alege un fișier `.adi` / `.adif` (ADIF) sau `.cbr` / `.cab` (Cabrillo v3). Formatul este detectat automat din prima linie a fișierului (`<...>` → ADIF, `START-OF-LOG:` → Cabrillo, `[REG1TEST;1]` → o alertă „EDI încă nu este suportat”). Se creează întotdeauna un jurnal nou — importul nu fuzionează niciodată cu unul existent. Importurile ADIF sosesc ca jurnale obișnuite, cu excepția cazului în care antetul poartă un `APP_LQ_CONTEST_ID` scris de propriul nostru export de concurs (caz în care jurnalul este rehidratat ca jurnal de concurs al acelui concurs). Importurile Cabrillo sosesc întotdeauna ca jurnale de concurs — vezi secțiunea *Concursuri* pentru modul în care eticheta `CONTEST:` este comparată cu catalogul integrat.
- **Export ADIF**: apasă pe *Exportă .adi* în antetul jurnalului. Se descarcă un fișier conform **ADIF 3.1.7**. Antetul declară `ADIF_VER 3.1.7`, `PROGRAMID local-qso`, `PROGRAMVERSION` și `CREATED_TIMESTAMP` (UTC). Câmpuri per QSO emise (când nu sunt goale): `CALL`, `QSO_DATE`, `TIME_ON`, `BAND`, `MODE`, `SUBMODE`, `PROP_MODE`, `GRIDSQUARE`, `BAND_RX`, `SAT_MODE`, `SAT_NAME`, `RST_SENT`, `RST_RCVD`, `COMMENT`, `STATION_CALLSIGN`, `OPERATOR`, `MY_GRIDSQUARE` — urmate de fiecare câmp ADIF suplimentar păstrat la import (vezi mai jos).
- **Exportul Cabrillo** este documentat în secțiunea *Concursuri* de mai sus — este disponibil doar pentru jurnalele de concurs (butonul *Exportă .cbr* apare în antetul jurnalului când jurnalul are un concurs).
- **Circuit fără pierderi**: la importul ADIF, orice câmp pe care aplicația nu îl modelează în interfața sa (de ex. `NAME`, `FREQ`, `TX_PWR`, `DXCC`, `QSL_SENT`/`QSL_RCVD`, `POTA_REF`, câmpuri `APP_*`) este păstrat pe QSO și re-emis literal la următorul export ADIF. Astfel, exportarea unui fișier care a fost el însuși importat păstrează totul.
- Lungimea câmpului în ADIF este tratată ca un număr de octeți UTF-8, așa cum solicită specificația, astfel încât textul multi-byte (de ex. caractere accentuate în `COMMENT`) este analizat corect.

## Confidențialitate și date

- Toate datele sunt stocate în `localStorage` al browserului tău sub cheia `local-qso:v1`.
- Nimic nu este transmis nicăieri. Nu există backend, apel API, telemetrie sau analize.
- Ștergerea datelor site-ului browserului, utilizarea modului privat/incognito sau a unui alt browser/dispozitiv înseamnă un jurnal nou gol — folosește *Exportă .adi* pentru a face copii de rezervă.

## Limba interfeței

Un selector de limbă în antet acoperă **28 de limbi**. Alege una și restul interfeței se redă imediat; alegerea ta este salvată alături de jurnalele tale și respectată la următoarea vizită. Engleza este implicită.

Limbi disponibile (emoji steag + nume nativ; ordonate alfabetic în cadrul fiecărui sistem de scriere):

🇺🇸 English · 🇨🇿 Čeština · 🇩🇰 Dansk · 🇩🇪 Deutsch · 🇪🇪 Eesti · 🇪🇸 Español · 🇫🇷 Français · 🇮🇪 Gaeilge · 🇭🇷 Hrvatski · 🇮🇹 Italiano · 🇱🇻 Latviešu · 🇱🇹 Lietuvių · 🇭🇺 Magyar · 🇳🇱 Nederlands · 🇳🇴 Norsk · 🇵🇱 Polski · 🇵🇹 Português · 🇷🇴 Română · 🇸🇰 Slovenčina · 🇸🇮 Slovenščina · 🇫🇮 Suomi · 🇸🇪 Svenska · 🇧🇾 Беларуская · 🇧🇬 Български · 🇷🇺 Русский · 🇷🇸 Српски · 🇺🇦 Українська · 🇬🇷 Ελληνικά

Etichetele tehnice universale rămân în forma lor canonică în toate limbile: denumirile benzilor (`20m`, `70cm`, …), codurile de mod ADIF (`SSB`, `FT8`, `CW`, …), `QSO`, `RST`, `UTC` și codurile de țară ISO.

Lipsește un șir în limba ta? Fiecare dicționar lingvistic trăiește într-un singur pachet [`i18n.js`](i18n.js), împărțit în 28 de secțiuni prin comentarii de antet `// ==== <lang> ====`. Caută (grep) antetul limbii tale pentru a sări la secțiunea sa, apoi adaugă/editează cheia. Adăugarea unei limbi complet noi = lipește un nou bloc IIFE în `i18n.js` la poziția alfabetică, adaugă codul limbii la `SUPPORTED_LANGS` în `app.js`, și adaugă o opțiune `<select>` în `index.html`.

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
  - `i18n.js` — un singur pachet întreținut manual care poartă toate cele 28 de dicționare lingvistice. Fiecare limbă este o IIFE de sine stătătoare care atribuie `window.I18N[<lang>]` o mapă plată cheie→șir. Blocurile sunt delimitate de comentarii de antet `// ==== <lang> ====` — caută (grep) unul pentru a sări la acea limbă. Pachetizat într-un singur fișier în loc de 28 de fișiere individuale deoarece fișierele de traducere sunt foarte repetitive (aceleași nume de chei, aceeași sintaxă de substituent) și gzip comprimă întregul set mult mai bine decât 28 de fluxuri separate — economisește ~23 KB la prima încărcare și elimină 27 de cereri HTTP. `t()` și `applyLanguage()` în `app.js` gestionează căutările (cu rezervă în engleză) și parcurg DOM-ul actualizând fiecare element `[data-i18n*]`.
  - `contests.js` — un singur pachet întreținut manual care poartă toate cele 68 de configurații de concurs. Fiecare concurs este o IIFE de sine stătătoare care atribuie `window.CONTESTS[<id>]` un obiect de configurație conform schemei (`{name, shortName, windows[], bands[], modes[], exchange[], duplicateRule, cabrillo}`). Blocurile sunt delimitate de comentarii de antet `// ==== <id> ====` — caută (grep) unul pentru a sări la acel concurs. Pachetizat într-un singur fișier în loc de 68 de fișiere individuale deoarece configurațiile de concurs sunt foarte repetitive (aceeași schemă, același prefix `APP_LQ_*`, aceleași nume de câmpuri de antet Cabrillo) și gzip comprimă întregul set mult mai bine decât 68 de fluxuri separate — economisește ~42 KB la prima încărcare și elimină 67 de cereri HTTP. Încărcat de o singură etichetă `<script>` în `index.html` înainte de `app.js` astfel încât registrul să fie populat când se construiește lista derulantă Concurs.
- Testat pe Chromium, Firefox și Safari recente (desktop + iOS).

## Mulțumiri

Creat de [YL3IM](https://www.qrz.com/db/YL3IM).

Mulțumiri lui [A65BR](https://www.qrz.com/db/A65BR) Oleg pentru sfaturile neprețuite care au făcut ca partea de QSO prin satelit să fie cu adevărat utilizabilă — desemnările moderne de două litere ale modului satelit, catalogul AMSAT și ajustarea automată uplink/downlink provin toate din feedback-ul său.

Steagurile țărilor se bazează pe secvențe de indicatori regionali Unicode. Sunt afișate corect pe macOS, iOS, Linux (cu un font emoji compatibil cu steaguri) și Android. Windows nu include un font de sistem pentru steaguri, deci emoji-urile de steag pot apărea ca perechi de litere acolo.
