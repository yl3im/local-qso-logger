# Local QSO Logger

## Leggi nella tua lingua

🇺🇸 [English](README.md) · 🇨🇿 [Čeština](README.cs.md) · 🇩🇰 [Dansk](README.da.md) · 🇩🇪 [Deutsch](README.de.md) · 🇪🇪 [Eesti](README.et.md) · 🇪🇸 [Español](README.es.md) · 🇫🇷 [Français](README.fr.md) · 🇮🇪 [Gaeilge](README.ga.md) · 🇭🇷 [Hrvatski](README.hr.md) · 🇮🇹 Italiano · 🇱🇻 [Latviešu](README.lv.md) · 🇱🇹 [Lietuvių](README.lt.md) · 🇭🇺 [Magyar](README.hu.md) · 🇳🇱 [Nederlands](README.nl.md) · 🇳🇴 [Norsk](README.no.md) · 🇵🇱 [Polski](README.pl.md) · 🇵🇹 [Português](README.pt.md) · 🇷🇴 [Română](README.ro.md) · 🇸🇰 [Slovenčina](README.sk.md) · 🇸🇮 [Slovenščina](README.sl.md) · 🇫🇮 [Suomi](README.fi.md) · 🇸🇪 [Svenska](README.sv.md) · 🇧🇾 [Беларуская](README.be.md) · 🇧🇬 [Български](README.bg.md) · 🇷🇺 [Русский](README.ru.md) · 🇷🇸 [Српски](README.sr.md) · 🇺🇦 [Українська](README.uk.md) · 🇬🇷 [Ελληνικά](README.el.md)

Un logger di QSO per radioamatori rispettoso della privacy, che funziona interamente nel tuo browser. Nessun account, nessun server, nessun tracciamento, nessuna analisi — i tuoi quaderni di stazione vivono solo nel `localStorage` del tuo browser e non lasciano mai il tuo dispositivo.

Di [YL3IM](https://www.qrz.com/db/YL3IM). Sito del progetto: [qso.ham.lv](https://qso.ham.lv).

![Local QSO Logger su iPad](media/iPad.png)

## Contenuto

- [Leggi nella tua lingua](#leggi-nella-tua-lingua)
- [Funzionalità](#funzionalità)
- [Per iniziare](#per-iniziare)
- [Installa come PWA su mobile](#installa-come-pwa-su-mobile)
  - [iOS (solo Safari)](#ios-solo-safari)
  - [Android (Chrome / Edge / Firefox)](#android-chrome--edge--firefox)
- [Quaderni di stazione](#quaderni-di-stazione)
- [QSO](#qso)
- [Importazione ed esportazione ADIF](#importazione-ed-esportazione-adif)
- [Privacy e dati](#privacy-e-dati)
- [Lingua dell'interfaccia](#lingua-dellinterfaccia)
- [Temi](#temi)
- [Note tecniche](#note-tecniche)
- [Crediti](#crediti)

## Funzionalità

- Più quaderni di stazione; ciascuno con il proprio elenco di QSO.
- Azioni sul quaderno: crea, rinomina, elimina, importa da ADIF, esporta in ADIF (`.adi`).
- Modulo QSO suddiviso in tre blocchi: **Dati stazione** (nominativo di stazione, nominativo dell'operatore, locator proprio) che rimangono fissi tra i QSO; **Modalità operativa** (modo di propagazione, satellite, modo, modo satellite, banda, banda RX) con i campi satellite visibili solo quando il modo di propagazione è *Satellite*; e **Dati QSO** (nominativo contattato, locator contattato, data/ora UTC in modifica, commento, RST inviato, RST ricevuto).
- Tassonomia completa ADIF `MODE` → `SUBMODE` nell'elenco a discesa dei modi — scegli un modo genitore (`SSB`, `MFSK`, …) o vai direttamente a un sotto-modo specifico (`USB`, `FT4`, …); l'app memorizza entrambi i campi secondo ADIF e la tabella mostra il sotto-modo specifico quando presente.
- Enumerazione completa dei modi di propagazione ADIF (SAT, RPT, EME, ES, MS, Aurora, ecc.) come elenco a discesa.
- Catalogo completo dei satelliti AMSAT (~110 satelliti) e un elenco a discesa **Modo satellite** a due livelli: codici preferiti a due lettere uplink/downlink in cima (LU, LV, SX, UU, UV, VA, VU, VV) e le designazioni legacy a una lettera (A/B/J/K/L/R/S/T/U/V/W/X) raggruppate come *obsolete* in basso. La scelta di un modo satellite regola automaticamente `BAND` (uplink) e `RX band` (downlink).
- Modifica ed eliminazione di qualsiasi QSO (con conferma all'eliminazione).
- Valori predefiniti sensati: data/ora UTC precompilata a *adesso*, RST predefinito in base al modo (59 per i modi voce, 599 per CW/digitale), dati stazione + banda + modo + modo di propagazione fissi tra QSO consecutivi (solo i campi per contatto — nominativo, loro locator, commento, RST — vengono azzerati dopo ogni *Registra QSO*).
- Indicatore in tempo reale di nominativo duplicato (informativo — i duplicati sono consentiti).
- Colonna bandiera paese derivata dal prefisso del nominativo (copre ≥99 % dei prefissi radioamatoriali comuni, incluse le stazioni portatili come `9A/M0NCG`).
- Visualizzazione della data localizzata nella tabella QSO; la memorizzazione ISO e l'output ADIF rimangono invariati.
- Interfaccia disponibile in **28 lingue** (inglese più 22 in scrittura latina, 5 in cirillico e greco); selettore con emoji bandiera nell'intestazione.
- Temi giorno / notte (giorno è il predefinito; l'interruttore è nell'intestazione).
- Layout responsive adatto ai dispositivi mobili con pulsanti di dimensione tattile.
- Funziona completamente offline — nessuna richiesta di rete in nessun momento.
- Installabile come PWA (Aggiungi alla schermata Home / Installa app) quando ospitato su HTTPS.

## Per iniziare

Apri semplicemente `index.html` in un browser moderno. Nessun passaggio di compilazione, nessuna installazione, nessun server.

Se vuoi ospitarlo, copia i file statici (`index.html`, `style.css`, `app.js`, `favicon.svg`, `manifest.webmanifest`, `service-worker.js` e la cartella `i18n/` con i 28 file di traduzione) su qualsiasi host statico (GitHub Pages, Netlify, il tuo server web). Funziona anche via `file://` — la registrazione del service worker viene automaticamente saltata sul protocollo `file:`, quindi aprire `index.html` direttamente dal disco funziona correttamente.

Quando ospitato su HTTPS, l'app diventa installabile come PWA (menu *Installa app* / *Aggiungi alla schermata Home* del browser) e funziona offline dopo la prima visita grazie a un service worker cache-first che pre-cacha tutti i file statici (UI + tutte le traduzioni).

Un quaderno predefinito viene creato automaticamente alla prima visita, così puoi iniziare subito a registrare.

## Installa come PWA su mobile

Quando l'app è ospitata su HTTPS (es. GitHub Pages), puoi installarla sulla schermata Home del tuo telefono per farla funzionare a schermo intero senza la barra del browser. Dopo il primo avvio, il service worker mette in cache tutto, quindi gli avvii successivi funzionano completamente offline.

### iOS (solo Safari)

Su iOS, solo Safari può installare PWA — i browser di terze parti non possono.

1. Apri il sito in **Safari**.
2. Tocca il pulsante **Condividi**.
3. Scegli **Aggiungi alla schermata Home**, poi **Aggiungi**.

Procedura guidata:

![Procedura guidata installazione iOS](media/iOS_add_to_home_screen.gif)

Fonte in qualità superiore: [media/iOS_add_to_home_screen.mp4](media/iOS_add_to_home_screen.mp4).

### Android (Chrome / Edge / Firefox)

1. Apri il sito nel browser. Potrebbe apparire automaticamente un messaggio *Installa app*.
2. Altrimenti apri il **menu ⋮** → **Installa app** (o **Aggiungi alla schermata Home** su versioni precedenti).

Procedura guidata:

![Procedura guidata installazione Android](media/Android_add_to_home_screen.gif)

Fonte in qualità superiore: [media/Android_add_to_home_screen.mp4](media/Android_add_to_home_screen.mp4).

## Quaderni di stazione

- **Crea:** digita un nome in *Nome log* e invia. Se lasci il nome vuoto, il predefinito è `Log YYYY-MM-DD HH:MM UTC`.
- **Cambia:** clicca su un quaderno nella barra laterale.
- **Rinomina:** clicca su *Rinomina* nell'intestazione del quaderno. Premi Invio per salvare, Esc per annullare.
- **Elimina:** clicca su *Elimina log*. Ti verrà chiesta conferma. Se elimini l'ultimo quaderno, ne viene creato automaticamente uno nuovo.

## QSO

- Compila il modulo e premi **Registra QSO**.
- Il modulo è organizzato in tre blocchi:
  - **Dati stazione** — *Nominativo di stazione* (il tuo nominativo trasmittente, ADIF `STATION_CALLSIGN`), *Operatore* (il nominativo dell'operatore individuale — diverso dal *nominativo di stazione* quando un operatore ospite è al microfono di una stazione di club; ADIF `OPERATOR`) e *Mio locator* (ADIF `MY_GRIDSQUARE`). Questi rimangono fissi tra i QSO della stessa sessione — impostali una volta e si trasferiscono.
  - **Modalità operativa** — *Modo prop.*, *Modo*, *Banda*, più i campi solo satellite *Satellite* / *Modo satellite* / *Banda RX* quando il modo di propagazione è *Satellite*. La banda, il modo e il modo di propagazione sono fissi come i dati stazione.
  - **Dati QSO** — campi per contatto: *Nominativo*, *Locator* (Maidenhead dell'altra stazione), *Commento* (ADIF `COMMENT`), *RST inviato*, *RST ricevuto*. Modificando un QSO esistente, *Data (UTC)* e *Ora (UTC)* appaiono anch'essi in questo blocco. Questi campi vengono azzerati dopo ogni *Registra QSO*.
- Tutti i nominativi (contattato, stazione, operatore) vengono automaticamente convertiti in maiuscolo durante la digitazione; entrambi i campi locator fanno lo stesso.
- Data e ora vengono precompilate a *adesso* in UTC all'invio; in modifica puoi digitare qualsiasi valore.
- RST inviato / RST ricevuto, se lasciati vuoti, valgono di default **59** per i modi voce (SSB/FM/DIGITALVOICE) e **599** per CW e modi digitali (CW/FT8/FT4/RTTY/PSK31/JT65). Il predefinito segue il MODE genitore, quindi scegliere un sotto-modo specifico come *USB* o *FT4* dà ancora il valore predefinito corretto.
- Un chip *Duplicato in questo log* appare sotto il campo nominativo se il nominativo esiste già nel quaderno corrente. I duplicati *non* sono bloccati.
- **Modo di propagazione** — elenco a discesa opzionale dei modi di propagazione ADIF (SAT, RPT, EME, F2, Es, MS, LOS, ecc.). Lascia vuoto per i normali QSO HF terrestri.
- **QSO satellite** — selezionare il modo di propagazione *Satellite* rivela tre campi solo satellite: **Satellite** (elenco a discesa di ~110 satelliti registrati AMSAT), **Modo satellite** (designazioni in lettere AMSAT, raggruppate come codici *moderni* a due lettere uplink/downlink in alto e codici *obsoleti* a una lettera in basso) e **Banda RX** (banda downlink). Satellite, modo satellite e banda RX sono obbligatori — il browser rifiuterà l'invio senza di essi. Scegliendo un **Modo satellite** si compila automaticamente la **Banda** principale con la banda uplink e la **Banda RX** con la banda downlink (es. modo J → uplink 2m, downlink 70cm). Tornare a *satellite* da un altro modo di propagazione reimposta il modo satellite affinché tu ne scelga uno nuovo. I QSO non satellite non portano mai campi satellite; cambiare un QSO esistente da satellite a un altro modo di propagazione li rimuove correttamente. **Locator** e **Mio locator** sono campi generali (utili anche per i contest di locator VHF/UHF) e rimangono visibili per tutti i QSO.
- **Modifica un QSO** con il pulsante *Modifica* sulla riga. Il modulo passa alla modalità *Aggiorna QSO*, la riga viene evidenziata e appare un pulsante *Annulla*. Cambiare quaderno o eliminare il log annulla la modifica automaticamente.
- **Elimina un QSO** con il pulsante *Elimina* sulla riga (chiede conferma).

## Importazione ed esportazione ADIF

- **Esporta**: clicca su *Esporta .adi* nell'intestazione del quaderno. Viene scaricato un file conforme ad **ADIF 3.1.7**. L'intestazione dichiara `ADIF_VER 3.1.7`, `PROGRAMID local-qso`, `PROGRAMVERSION` e `CREATED_TIMESTAMP` (UTC). Campi per QSO emessi (quando non vuoti): `CALL`, `QSO_DATE`, `TIME_ON`, `BAND`, `MODE`, `SUBMODE`, `PROP_MODE`, `GRIDSQUARE`, `BAND_RX`, `SAT_MODE`, `SAT_NAME`, `RST_SENT`, `RST_RCVD`, `COMMENT`, `STATION_CALLSIGN`, `OPERATOR`, `MY_GRIDSQUARE` — seguiti da ogni campo ADIF aggiuntivo preservato in importazione (vedi sotto).
- **Importa**: clicca su *Importa file .adi* sotto il modulo di creazione quaderno e scegli un file `.adi` / `.adif`. Da esso viene creato un nuovo quaderno, denominato `Imported YYYY-MM-DD HH:MM UTC`. L'importazione non si fonde mai con un quaderno esistente.
- **Round-trip senza perdite**: all'importazione, qualsiasi campo ADIF che l'app non modella nella sua interfaccia (es. `NAME`, `FREQ`, `TX_PWR`, `DXCC`, `QSL_SENT`/`QSL_RCVD`, `POTA_REF`, campi `APP_*`) viene conservato sul QSO e riemesso letteralmente alla prossima esportazione. Quindi esportare un file che era stato importato conserva tutto.
- La lunghezza del campo è trattata come un conteggio di byte UTF-8 come richiede la specifica, così il testo multibyte (es. caratteri accentati in `COMMENT`) viene analizzato correttamente.

## Privacy e dati

- Tutti i dati sono memorizzati nel `localStorage` del tuo browser sotto la chiave `local-qso:v1`.
- Niente viene trasmesso da nessuna parte. Non c'è backend, nessuna chiamata API, nessuna telemetria, nessuna analisi.
- Cancellare i dati del sito dal browser, usare la modalità privata/in incognito o un browser/dispositivo diverso significa un nuovo quaderno vuoto — usa *Esporta .adi* per il backup.

## Lingua dell'interfaccia

Un selettore di lingua nell'intestazione copre **28 lingue**. Scegline una e il resto dell'interfaccia si ridisegna immediatamente; la tua scelta viene salvata insieme ai tuoi log e rispettata alla prossima visita. L'inglese è il predefinito.

Lingue disponibili (emoji bandiera + nome nativo; in ordine alfabetico per sistema di scrittura):

🇺🇸 English · 🇨🇿 Čeština · 🇩🇰 Dansk · 🇩🇪 Deutsch · 🇪🇪 Eesti · 🇪🇸 Español · 🇫🇷 Français · 🇮🇪 Gaeilge · 🇭🇷 Hrvatski · 🇮🇹 Italiano · 🇱🇻 Latviešu · 🇱🇹 Lietuvių · 🇭🇺 Magyar · 🇳🇱 Nederlands · 🇳🇴 Norsk · 🇵🇱 Polski · 🇵🇹 Português · 🇷🇴 Română · 🇸🇰 Slovenčina · 🇸🇮 Slovenščina · 🇫🇮 Suomi · 🇸🇪 Svenska · 🇧🇾 Беларуская · 🇧🇬 Български · 🇷🇺 Русский · 🇷🇸 Српски · 🇺🇦 Українська · 🇬🇷 Ελληνικά

Le etichette tecniche universali rimangono nella loro forma canonica in tutte le lingue: nomi di banda (`20m`, `70cm`, …), codici modo ADIF (`SSB`, `FT8`, `CW`, …), `QSO`, `RST`, `UTC` e codici paese ISO.

Manca una stringa nella tua lingua? Ogni lingua è un singolo file piccolo in [`i18n/`](i18n/) — copia `i18n/en.js`, traduci i valori, salva come `i18n/<code>.js`, poi aggiungi un tag `<script>` più un'opzione `<select>` in `index.html` e il codice in `SUPPORTED_LANGS` in `app.js`.

## Temi

L'interruttore del tema nell'intestazione alterna tra giorno (predefinito) e notte. La preferenza viene salvata insieme ai tuoi log e rispettata alla prossima visita. I selettori nativi di data/ora seguono il tema tramite `color-scheme`.

## Note tecniche

- App a pagina singola, HTML + CSS + JavaScript puro. Nessun framework, nessun passaggio di compilazione, nessuna dipendenza.
- File sorgente:
  - `index.html` — markup e meta tag.
  - `style.css` — temi e layout (variabili giorno/notte, media query per dispositivi mobili).
  - `app.js` — stato, persistenza, rendering, parser/serializzatore ADIF, ricerca prefisso nominativo → paese.
  - `favicon.svg` — favicon SVG inline.
  - `manifest.webmanifest` — Web App Manifest (nome, colore tema, scope, icona) affinché l'app sia installabile come PWA su mobile e desktop.
  - `service-worker.js` — service worker cache-first che pre-cacha tutti i file statici all'installazione, elimina le cache vecchie all'attivazione e mantiene l'app completamente offline dopo la prima visita. La registrazione viene automaticamente saltata sul protocollo `file://` affinché aprire `index.html` direttamente dal disco rimanga pulito.
  - `i18n/<lang>.js` — un file di traduzione per lingua supportata (28 in totale). Ciascuno è un piccolo IIFE che assegna a `window.I18N[<lang>]` una mappa piatta chiave→stringa. `t()` e `applyLanguage()` in `app.js` gestiscono le ricerche (con fallback in inglese) e percorrono il DOM aggiornando ogni elemento `[data-i18n*]`.
- Testato su Chromium, Firefox e Safari recenti (desktop + iOS).

## Crediti

Realizzato da [YL3IM](https://www.qrz.com/db/YL3IM).

Grazie a [A65BR](https://www.qrz.com/db/A65BR) Oleg per i preziosi suggerimenti che hanno reso la parte QSO satellite davvero utilizzabile — le moderne designazioni a due lettere del modo satellite, il catalogo AMSAT e la regolazione automatica uplink/downlink derivano tutti dal suo feedback.

Le bandiere dei paesi si basano sulle sequenze di indicatori regionali Unicode. Vengono visualizzate correttamente su macOS, iOS, Linux (con un font emoji compatibile con le bandiere) e Android. Windows non include un font di sistema per le bandiere, quindi le emoji bandiera potrebbero apparire come coppie di lettere.
