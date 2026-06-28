# Local QSO Logger

## Citiți în limba dvs.

🇺🇸 [English](README.md) · 🇨🇿 [Čeština](README.cs.md) · 🇩🇰 [Dansk](README.da.md) · 🇩🇪 [Deutsch](README.de.md) · 🇪🇪 [Eesti](README.et.md) · 🇪🇸 [Español](README.es.md) · 🇫🇷 [Français](README.fr.md) · 🇮🇪 [Gaeilge](README.ga.md) · 🇭🇷 [Hrvatski](README.hr.md) · 🇮🇹 [Italiano](README.it.md) · 🇱🇻 [Latviešu](README.lv.md) · 🇱🇹 [Lietuvių](README.lt.md) · 🇭🇺 [Magyar](README.hu.md) · 🇳🇱 [Nederlands](README.nl.md) · 🇳🇴 [Norsk](README.no.md) · 🇵🇱 [Polski](README.pl.md) · 🇵🇹 [Português](README.pt.md) · 🇷🇴 Română · 🇸🇰 [Slovenčina](README.sk.md) · 🇸🇮 [Slovenščina](README.sl.md) · 🇫🇮 [Suomi](README.fi.md) · 🇸🇪 [Svenska](README.sv.md) · 🇧🇾 [Беларуская](README.be.md) · 🇧🇬 [Български](README.bg.md) · 🇷🇺 [Русский](README.ru.md) · 🇷🇸 [Српски](README.sr.md) · 🇺🇦 [Українська](README.uk.md) · 🇬🇷 [Ελληνικά](README.el.md)

Un jurnal QSO pentru radioamatori care respectă confidențialitatea și rulează în întregime în browserul dvs. Fără cont, fără server, fără urmărire, fără analitică — jurnalele dvs. există doar în `localStorage`-ul browserului și nu părăsesc niciodată dispozitivul dvs.

Autor: [YL3IM](https://www.qrz.com/db/YL3IM). Site-ul proiectului: [qso.ham.lv](https://qso.ham.lv).

![Local QSO Logger pe iPad](media/iPad.png)

## Cuprins

- [Citiți în limba dvs.](#citiți-în-limba-dvs)
- [Caracteristici](#caracteristici)
- [Pentru a începe](#pentru-a-începe)
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

## Caracteristici

- Mai multe jurnale, fiecare cu propria listă de QSO.
- Acțiuni de jurnal: creare, redenumire, ștergere, import din ADIF, export în ADIF (`.adi`).
- Câmpuri QSO: indicativ, dată UTC, oră UTC, bandă, mod, RST transmis, RST recepționat.
- Editarea și ștergerea oricărui QSO (cu confirmare la ștergere).
- Valori implicite rezonabile: data/ora UTC de azi precompletate, valori RST implicite în funcție de mod (59 pentru moduri vocale, 599 pentru CW/digital), bandă și mod persistente între QSO-uri consecutive.
- Indicator în timp real pentru indicativ duplicat (informativ — duplicatele sunt permise).
- Coloană cu drapelul țării derivată din prefixul indicativului (acoperă ≥99 % din prefixele comune de radioamatorism, inclusiv indicative portabile precum `9A/M0NCG`).
- Afișare a datei conform locale-ului în tabelul QSO; stocarea ISO și ieșirea ADIF rămân neschimbate.
- Teme zi/noapte (zi implicit; comutatorul se află în antet).
- Aspect responsiv prietenos cu mobilul, cu butoane potrivite pentru atingere.
- Funcționează complet offline — fără nicio cerere de rețea.
- Instalabil ca PWA (Adaugă pe ecranul de pornire / Instalează aplicația) când este găzduit prin HTTPS.
- Interfață disponibilă în **28 de limbi** (engleză plus 22 latine, 5 chirilice și greacă); selector cu emoji de drapel în antet.

## Pentru a începe

Pur și simplu deschideți `index.html` într-un browser modern. Fără build, fără instalare, fără server.

Pentru a-l găzdui, plasați fișierele statice (`index.html`, `style.css`, `app.js`, `favicon.svg`, `manifest.webmanifest`, `service-worker.js` și directorul `i18n/` cu cele 28 de fișiere de traducere) pe orice gazdă statică (GitHub Pages, Netlify, propriul server web). Va funcționa și prin `file://` — înregistrarea service worker-ului este omisă automat pentru protocolul `file:`, astfel încât deschiderea `index.html` direct de pe disc funcționează curat.

Când este servit prin HTTPS, aplicația devine instalabilă ca PWA (prin meniul *Instalează aplicația* / *Adaugă pe ecranul de pornire* al browserului) și funcționează offline după prima vizită datorită unui service worker cache-first care precachează fiecare fișier static (UI + toate traducerile).

Un jurnal implicit este creat automat la prima vizită, astfel încât să puteți începe să înregistrați imediat.

## Instalare ca PWA pe mobil

Când aplicația este servită prin HTTPS (de ex. GitHub Pages), o puteți instala pe ecranul de pornire al telefonului astfel încât să ruleze pe ecran complet fără cromul browserului. După prima lansare, service worker-ul cachează totul, astfel încât lansările ulterioare funcționează complet offline.

### iOS (doar Safari)

Pe iOS, doar Safari poate instala PWA — browserele terțe nu pot.

1. Deschideți site-ul în **Safari**.
2. Atingeți butonul **Partajare**.
3. Alegeți **Adaugă în ecran acasă**, apoi **Adaugă**.

Tutorial:

![Tutorial de instalare iOS](media/iOS_add_to_home_screen.gif)

Sursă de calitate superioară: [media/iOS_add_to_home_screen.mp4](media/iOS_add_to_home_screen.mp4).

### Android (Chrome / Edge / Firefox)

1. Deschideți site-ul în browserul dvs. Poate apărea automat o solicitare *Instalează aplicația*.
2. În caz contrar, deschideți **meniul ⋮** → **Instalează aplicația** (sau **Adaugă pe ecranul de pornire** în versiuni mai vechi).

Tutorial:

![Tutorial de instalare Android](media/Android_add_to_home_screen.gif)

Sursă de calitate superioară: [media/Android_add_to_home_screen.mp4](media/Android_add_to_home_screen.mp4).

## Jurnale

- **Creare:** tastați un nume în câmpul *Numele jurnalului* și trimiteți. Dacă lăsați numele gol, implicit va fi `Log YYYY-MM-DD HH:MM UTC`.
- **Comutare:** faceți clic pe orice jurnal din bara laterală.
- **Redenumire:** faceți clic pe *Redenumește* în antetul jurnalului. Enter salvează, Escape anulează.
- **Ștergere:** faceți clic pe *Șterge jurnalul*. Vi se va cere să confirmați. Dacă ștergeți ultimul jurnal, unul nou va fi creat automat.

## QSO-uri

- Completați formularul și apăsați **Înregistrează QSO**.
- Indicativul este convertit automat în majuscule pe măsură ce tastați.
- Data și ora sunt precompletate la *acum* în UTC și resetate după fiecare QSO înregistrat; puteți încă introduce orice valoare.
- Banda și modul persistă între QSO-uri din aceeași sesiune, astfel încât nu trebuie să le selectați din nou pentru fiecare contact.
- RST transmis / RST recepționat, dacă sunt lăsate goale, revin la **59** pentru modurile vocale (SSB/FM/AM/DIGITALVOICE) și la **599** pentru CW și modurile digitale (CW/FT8/FT4/RTTY/PSK31/JT65).
- Un chip *Duplicat în acest jurnal* apare sub câmpul indicativului dacă indicativul există deja în jurnalul curent. Duplicatele *nu* sunt blocate.
- **Editați un QSO** cu butonul *Editează* de pe rând. Formularul comută la modul *Actualizează QSO*, rândul este evidențiat, și apare un buton *Anulează*. Comutarea jurnalului sau ștergerea acestuia anulează editarea automat.
- **Ștergeți un QSO** cu butonul *Șterge* de pe rând (cere confirmare).

## Import și export ADIF

- **Export**: faceți clic pe *Exportă .adi* în antetul jurnalului. Se descarcă un fișier cu `ADIF_VER 3.1.4` și `PROGRAMID local-qso` în antet. Fiecare înregistrare mapează `CALL`, `QSO_DATE`, `TIME_ON`, `BAND`, `MODE`, `RST_SENT`, `RST_RCVD`.
- **Import**: faceți clic pe *Importă fișier .adi* sub formularul de creare a jurnalului și alegeți un fișier `.adi`/`.adif`. Se creează un jurnal nou cu numele `Importat YYYY-MM-DD HH:MM UTC`. Importul nu este niciodată fuzionat într-un jurnal existent.
- Numărul lungimii câmpului este tratat ca număr de caractere, ceea ce funcționează pentru ADIF ASCII (toate câmpurile QSO standard). Conținutul multi-byte în câmpuri de text neesențiale poate fi analizat în mod ciudat.

## Confidențialitate și date

- Toate datele sunt stocate în `localStorage`-ul browserului sub cheia `local-qso:v1`.
- Nimic nu este transmis nicăieri. Fără backend, fără apeluri API, fără telemetrie, fără analitică.
- Ștergerea datelor site-ului, utilizarea modului privat/incognito, sau utilizarea unui alt browser/dispozitiv înseamnă un jurnal gol — utilizați *Exportă .adi* pentru backup.

## Limba interfeței

Un selector de limbă în antet acoperă **28 de limbi**. Alegeți una și restul interfeței este redat din nou imediat; alegerea dvs. este salvată împreună cu jurnalele dvs. și respectată la următoarea vizită. Engleza este implicită.

Limbi disponibile (emoji drapel + nume nativ; ordonate alfabetic în cadrul fiecărui sistem de scriere):

🇺🇸 English · 🇨🇿 Čeština · 🇩🇰 Dansk · 🇩🇪 Deutsch · 🇪🇪 Eesti · 🇪🇸 Español · 🇫🇷 Français · 🇮🇪 Gaeilge · 🇭🇷 Hrvatski · 🇮🇹 Italiano · 🇱🇻 Latviešu · 🇱🇹 Lietuvių · 🇭🇺 Magyar · 🇳🇱 Nederlands · 🇳🇴 Norsk · 🇵🇱 Polski · 🇵🇹 Português · 🇷🇴 Română · 🇸🇰 Slovenčina · 🇸🇮 Slovenščina · 🇫🇮 Suomi · 🇸🇪 Svenska · 🇧🇾 Беларуская · 🇧🇬 Български · 🇷🇺 Русский · 🇷🇸 Српски · 🇺🇦 Українська · 🇬🇷 Ελληνικά

Etichetele tehnice universale rămân în forma lor canonică în toate limbile: numele benzilor (`20m`, `70cm`, …), codurile de mod ADIF (`SSB`, `FT8`, `CW`, …), `QSO`, `RST`, `UTC` și codurile ISO ale țărilor.

Lipsește un șir în limba dvs.? Fiecare limbă este un fișier mic în [`i18n/`](i18n/) — copiați `i18n/en.js`, traduceți valorile, salvați ca `i18n/<cod>.js`, apoi adăugați o etichetă `<script>` plus o opțiune `<select>` în `index.html` și codul în `SUPPORTED_LANGS` în `app.js`.

## Teme

Comutatorul de temă din antet comută între zi (implicit) și noapte. Preferința este salvată împreună cu jurnalele dvs. și respectată la următoarea vizită. Selectoarele native de dată/oră urmează tema prin `color-scheme`.

## Note tehnice

- Aplicație cu o singură pagină, HTML + CSS + JavaScript pur. Fără cadre, fără build, fără dependențe.
- Fișiere sursă:
  - `index.html` — markup și meta tag-uri.
  - `style.css` — teme și aspect (variabile zi/noapte, media queries pentru mobil).
  - `app.js` — stare, persistență, randare, parser/serializer ADIF, căutare prefix indicativ → țară.
  - `favicon.svg` — favicon SVG încorporat.
  - `manifest.webmanifest` — Web App Manifest (nume, culoarea temei, scope, pictogramă) astfel încât aplicația să fie instalabilă ca PWA pe mobil și desktop.
  - `service-worker.js` — service worker cache-first care la instalare precachează fiecare fișier static, la activare șterge cache-urile vechi și menține aplicația complet offline după prima vizită. Înregistrarea este omisă automat pentru protocolul `file://`, astfel încât deschiderea `index.html` direct de pe disc rămâne curată.
  - `i18n/<lang>.js` — un fișier de traducere pentru fiecare limbă acceptată (28 în total). Fiecare este un mic IIFE care atribuie `window.I18N[<lang>]` o hartă plată cheie→șir. `t()` și `applyLanguage()` din `app.js` se ocupă de căutări (cu fallback la engleză) și parcurg DOM-ul actualizând fiecare element `[data-i18n*]`.
- Testat pe versiuni recente Chromium, Firefox și Safari (desktop + iOS).

## Mulțumiri

Construit de [YL3IM](https://www.qrz.com/db/YL3IM).

Drapelele țărilor se bazează pe secvențe de indicator regional Unicode. Se redau corect pe macOS, iOS, Linux (cu o font emoji compatibilă cu drapele) și Android. Windows nu include o font de drapele de sistem, astfel încât emoji-urile cu drapel pot apărea ca perechi de litere acolo.
