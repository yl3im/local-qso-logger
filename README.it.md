# Local QSO Logger

## Leggi nella tua lingua

🇺🇸 [English](README.md) · 🇨🇿 [Čeština](README.cs.md) · 🇩🇰 [Dansk](README.da.md) · 🇩🇪 [Deutsch](README.de.md) · 🇪🇪 [Eesti](README.et.md) · 🇪🇸 [Español](README.es.md) · 🇫🇷 [Français](README.fr.md) · 🇮🇪 [Gaeilge](README.ga.md) · 🇭🇷 [Hrvatski](README.hr.md) · 🇮🇹 Italiano · 🇱🇻 [Latviešu](README.lv.md) · 🇱🇹 [Lietuvių](README.lt.md) · 🇭🇺 [Magyar](README.hu.md) · 🇳🇱 [Nederlands](README.nl.md) · 🇳🇴 [Norsk](README.no.md) · 🇵🇱 [Polski](README.pl.md) · 🇵🇹 [Português](README.pt.md) · 🇷🇴 [Română](README.ro.md) · 🇸🇰 [Slovenčina](README.sk.md) · 🇸🇮 [Slovenščina](README.sl.md) · 🇫🇮 [Suomi](README.fi.md) · 🇸🇪 [Svenska](README.sv.md) · 🇧🇾 [Беларуская](README.be.md) · 🇧🇬 [Български](README.bg.md) · 🇷🇺 [Русский](README.ru.md) · 🇷🇸 [Српски](README.sr.md) · 🇺🇦 [Українська](README.uk.md) · 🇬🇷 [Ελληνικά](README.el.md)

Un logger di QSO per radioamatori rispettoso della privacy, che funziona interamente nel tuo browser. Nessun account, nessun server, nessun tracciamento, nessuna analisi — i tuoi quaderni di stazione vivono solo nel `localStorage` del tuo browser e non lasciano mai il tuo dispositivo.

Di [YL3IM](https://www.qrz.com/db/YL3IM). Sito del progetto: [qso.lv](https://qso.lv).

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
- [Contest](#contest)
- [Importazione ed esportazione](#importazione-ed-esportazione)
- [Privacy e dati](#privacy-e-dati)
- [Lingua dell'interfaccia](#lingua-dellinterfaccia)
- [Temi](#temi)
- [Note tecniche](#note-tecniche)
- [Crediti](#crediti)

## Funzionalità

- Più quaderni di stazione; ciascuno con il proprio elenco di QSO.
- I **quaderni contest** sono facoltativi — scegli da un catalogo di 68 contest integrati alla creazione di un quaderno. Il modulo QSO acquisisce un blocco *Scambio contest* specifico del contest, il rilevamento dei duplicati rispetta la regola del contest, e *Esporta .cbr* produce un file di invio Cabrillo v3 accanto alla consueta esportazione ADIF.
- Azioni sul quaderno: crea, rinomina, elimina, importa un file di log (ADIF o Cabrillo — formato rilevato automaticamente), esporta in ADIF (`.adi`), più *Esporta .cbr* (Cabrillo v3) per i quaderni contest. Reimportare un file `.cbr` precedentemente esportato dall'app lo ripristina come lo stesso quaderno contest.
- Modulo QSO suddiviso in tre blocchi: **Dati stazione** (nominativo di stazione, nominativo dell'operatore, locator proprio) che rimangono fissi tra i QSO; **Modalità operativa** (modo di propagazione, satellite, modo, modo satellite, banda, banda RX) con i campi satellite visibili solo quando il modo di propagazione è *Satellite*; e **Dati QSO** (nominativo contattato, locator contattato, data/ora UTC in modifica, commento, RST inviato, RST ricevuto).
- Tassonomia completa ADIF `MODE` → `SUBMODE` nell'elenco a discesa dei modi — scegli un modo genitore (`SSB`, `MFSK`, …) o vai direttamente a un sotto-modo specifico (`USB`, `FT4`, …); l'app memorizza entrambi i campi secondo ADIF e la tabella mostra il sotto-modo specifico quando presente.
- Enumerazione completa dei modi di propagazione ADIF (SAT, RPT, EME, ES, MS, Aurora, ecc.) come elenco a discesa.
- Catalogo completo dei satelliti AMSAT (~110 satelliti) e un elenco a discesa **Modo satellite** a due livelli: codici preferiti a due lettere uplink/downlink in cima (LU, LV, SX, UU, UV, VA, VU, VV) e le designazioni legacy a una lettera (A/B/J/K/L/R/S/T/U/V/W/X) raggruppate come *obsolete* in basso. La scelta di un modo satellite regola automaticamente `BAND` (uplink) e `RX band` (downlink).
- Modifica ed eliminazione di qualsiasi QSO (con conferma all'eliminazione).
- Valori predefiniti sensati: data/ora UTC precompilata a *adesso*, RST predefinito in base al modo (59 per i modi voce, 599 per CW/digitale), dati stazione + banda + modo + modo di propagazione fissi tra QSO consecutivi (solo i campi per contatto — nominativo, loro locator, commento, RST — vengono azzerati dopo ogni *Registra QSO*).
- Indicatore in tempo reale di nominativo duplicato (informativo — i duplicati sono consentiti).
- Colonna bandiera paese derivata dal prefisso del nominativo (copre ≥99 % dei prefissi radioamatoriali comuni, incluse le stazioni portatili come `9A/M0NCG`).
- Autorilevamento con un tocco di **Il mio locator**: un pulsante 🌐 accanto al campo chiede al browser le tue coordinate attuali e compila il locator Maidenhead a 6 caratteri (usa l'API Geolocation del browser — richiede il permesso dell'utente).
- Visualizzazione della data localizzata nella tabella QSO; la memorizzazione ISO e l'output ADIF rimangono invariati.
- Interfaccia disponibile in **28 lingue** (inglese più 22 in scrittura latina, 5 in cirillico e greco); selettore con emoji bandiera nell'intestazione.
- Temi giorno / notte (giorno è il predefinito; l'interruttore è nell'intestazione).
- Layout responsive adatto ai dispositivi mobili con pulsanti di dimensione tattile.
- Funziona completamente offline — nessuna richiesta di rete in nessun momento.
- Installabile come PWA (Aggiungi alla schermata Home / Installa app) quando ospitato su HTTPS.

## Per iniziare

Apri semplicemente `index.html` in un browser moderno. Nessun passaggio di compilazione, nessuna installazione, nessun server.

Se vuoi ospitarlo, copia i file statici (`index.html`, `style.css`, `app.js`, `favicon.svg`, `manifest.webmanifest`, `service-worker.js`, l'unico bundle `i18n.js` che porta tutti i 28 dizionari linguistici, e l'unico bundle `contests.js` che porta tutte le 68 configurazioni contest) su qualsiasi host statico (GitHub Pages, Netlify, il tuo server web). Funziona anche via `file://` — la registrazione del service worker viene automaticamente saltata sul protocollo `file:`, quindi aprire `index.html` direttamente dal disco funziona correttamente.

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
  - **Dati stazione** — *Nominativo di stazione* (il tuo nominativo trasmittente, ADIF `STATION_CALLSIGN`), *Operatore* (il nominativo dell'operatore individuale — diverso dal *nominativo di stazione* quando un operatore ospite è al microfono di una stazione di club; ADIF `OPERATOR`) e *Mio locator* (ADIF `MY_GRIDSQUARE`) con un pulsante 🌐 che compila il locator dalla posizione attuale del tuo browser (API Geolocation — il browser chiederà il permesso la prima volta). Questi rimangono fissi tra i QSO della stessa sessione — impostali una volta e si trasferiscono.
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

## Contest

Un quaderno può facoltativamente essere un **log contest** — scegli un contest dall'elenco a discesa *Contest* nel modulo di creazione quaderno. Elenco vuoto = quaderno normale (predefinito, comportamento esistente invariato).

I log contest ottengono:

- **Blocco scambio contest** nel modulo QSO, renderizzato dinamicamente in base allo schema del contest selezionato. I tipi di campo sono `text`, `number` e `serial` (auto-incrementante, sola lettura). I campi contrassegnati come *sticky* (la tua zona / contea / distretto / potenza / età / …) vengono precompilati con il valore del QSO precedente; i campi per QSO (la loro zona, il loro numero seriale, …) vengono azzerati dopo ogni *Registra QSO*.
- **Badge contest** accanto al nome del log nell'intestazione dei dettagli.
- **Rilevamento duplicati** che rispetta il `duplicateRule` del contest (`per-band-mode`, `per-band`, `per-day` o `off`). Il chip rimane solo informativo — non blocca mai l'invio.
- **Chip di avviso** quando l'UTC attuale ricade fuori da una delle finestre di data dichiarate dal contest (12 anni precaricati, 2026–2037), o quando la banda / modo selezionati non sono nel set legale del contest. Non blocca mai.
- **Pannello informazioni di invio** nell'intestazione dei dettagli: un modulo inline per i campi di intestazione Cabrillo che il contest dichiara (categoria, potenza, nome, club, indirizzo, soapbox, …). I valori persistono sul quaderno, non per QSO.
- **Pulsante Esporta .cbr** nell'intestazione dei dettagli, accanto a *Esporta .adi*. Emette un file Cabrillo v3: `CALLSIGN` / `GRID-LOCATOR` / `OPERATORS` precompilati dai dati stazione del primo QSO, il resto dal pannello informazioni di invio, poi una riga `QSO:` per contatto in ordine cronologico usando le colonne `sentTemplate` / `rcvdTemplate` del contest.
- **Reimportazione Cabrillo** tramite il pulsante standard *Importa file di log* — un file `.cbr` precedentemente esportato dall'app (o da qualsiasi altro logger che emette Cabrillo v3 standard) torna in un nuovo log contest del tipo corretto. L'intestazione `CONTEST:` viene confrontata con il catalogo integrato; quando più configurazioni condividono lo stesso tag (es. `ARRL-10` corrisponde sia a `arrl-10m-dx` che a `arrl-10m-w`), l'app disambigua confrontando la lettera del modo della riga QSO e il numero di colonne con il modello di ciascun candidato, poi preferisce la variante `-dx`. I campi di intestazione (categoria, nome, club, soapbox, …) ripristinano il pannello informazioni di invio; i valori di scambio QSO ripristinano `q.contestExchange` secondo il modello del contest.

### Catalogo contest integrato (68 configurazioni)

Raggruppati per famiglia:

- **Famiglia CQ** (9): CQ WW SSB/CW/RTTY, CQ WPX SSB/CW/RTTY, CQ 160 CW/SSB, CQ-M International.
- **Famiglia ARRL** (9): ARRL DX SSB/CW (lato DX), ARRL Field Day, ARRL 10m/160m/RTTY Roundup (ciascuno fornito da *entrambe* le prospettive DX e W/VE).
- **IARU** (2): IARU HF Championship, IARU R1 Field Day.
- **WAE e altri europei** (8): WAE DX SSB/CW, EU HF Championship, LZ DX, Baltic Contest, NRAU-Baltic SSB/CW, SP DX.
- **Europa centrale/orientale asimmetrici — entrambe le prospettive** (14): OK/OM DX CW+SSB, HA DX, YO DX HF, Ukrainian DX, REF Contest CW+SSB.
- **Club russo / RadioSport** (12): Russian DX (entrambi i lati), Russian WW RTTY, Russian WW MultiMode, Yuri Gagarin International, Cup of the Russian Federation CW+SSB, RRTC, Asiatic Russia Championship, UA1DZ Memorial Cup, RDAC, RAEM.
- **Bielorussia + Italia + Croazia + Spagna + RTTY ucraino** (12): Belarus BFRR CW+SSB (entrambi i lati), ARI DX (entrambi i lati), Croatian 9A CW (entrambi i lati), Spanish CNCW (entrambi i lati), Ukrainian RTTY (entrambi i lati).
- **Globale** (2): All Asian DX CW+SSB.

I contest asimmetrici (dove il paese ospitante e il lato DX inviano scambi diversi) vengono forniti con **due configurazioni** — una per la prospettiva del paese ospitante (codice regionale fisso) e una per la prospettiva DX (numero seriale fisso). Il campo ricevuto è un unico campo di testo libero così l'operatore può digitare entrambi i formati a seconda del contatto.

Ogni configurazione porta:

- I valori di scambio contest vengono riemessi nell'esportazione ADIF tramite campi dello spazio dei nomi `APP_LQ_*`; il timbro di intestazione `APP_LQ_CONTEST_ID` permette a una reimportazione successiva di ripristinare il quaderno come lo stesso contest con tutti i campi intatti.
- 12 anni di finestre di data (2026–2037) così che il chip *fuori dalla finestra del contest* rimanga utile per un decennio senza una nuova pubblicazione.
- Un modello Cabrillo che mappa ogni campo di scambio alla colonna corretta della riga `QSO:`.

Aggiungere un nuovo contest = incolla un nuovo blocco IIFE in [`contests.js`](contests.js) nella posizione alfabetica (ogni contest esistente è delimitato da un commento di intestazione `// ==== <id> ====`, quindi è facile trovare dove inserire). Non è necessaria alcuna modifica a `index.html`, nessuna modifica a `service-worker.js`, nessuna modifica a `app.js` — il renderer, il gestore dell'invio, il rilevatore di duplicati, il round-trip ADIF e l'emettitore Cabrillo assorbono ogni configurazione come dati puri.

## Importazione ed esportazione

- **Importa** qualsiasi file di log — clicca su *Importa file di log* sotto il modulo di creazione quaderno e scegli un file `.adi` / `.adif` (ADIF) o `.cbr` / `.cab` (Cabrillo v3). Il formato viene rilevato automaticamente dalla prima riga del file (`<...>` → ADIF, `START-OF-LOG:` → Cabrillo, `[REG1TEST;1]` → un avviso "EDI non ancora supportato"). Viene sempre creato un nuovo quaderno — l'importazione non si fonde mai con uno esistente. Le importazioni ADIF arrivano come log normali a meno che l'intestazione non porti un `APP_LQ_CONTEST_ID` scritto dalla nostra stessa esportazione contest (nel qual caso il log viene ripristinato come log contest di quel contest). Le importazioni Cabrillo arrivano sempre come log contest — vedi la sezione *Contest* per come il tag `CONTEST:` viene confrontato con il catalogo integrato.
- **Esportazione ADIF**: clicca su *Esporta .adi* nell'intestazione del quaderno. Viene scaricato un file conforme ad **ADIF 3.1.7**. L'intestazione dichiara `ADIF_VER 3.1.7`, `PROGRAMID local-qso`, `PROGRAMVERSION` e `CREATED_TIMESTAMP` (UTC). Campi per QSO emessi (quando non vuoti): `CALL`, `QSO_DATE`, `TIME_ON`, `BAND`, `MODE`, `SUBMODE`, `PROP_MODE`, `GRIDSQUARE`, `BAND_RX`, `SAT_MODE`, `SAT_NAME`, `RST_SENT`, `RST_RCVD`, `COMMENT`, `STATION_CALLSIGN`, `OPERATOR`, `MY_GRIDSQUARE` — seguiti da ogni campo ADIF aggiuntivo preservato in importazione (vedi sotto).
- **Esportazione Cabrillo** è documentata nella sezione *Contest* sopra — è disponibile solo per i quaderni contest (il pulsante *Esporta .cbr* appare nell'intestazione del quaderno quando il log ha un contest).
- **Round-trip senza perdite**: all'importazione ADIF, qualsiasi campo che l'app non modella nella sua interfaccia (es. `NAME`, `FREQ`, `TX_PWR`, `DXCC`, `QSL_SENT`/`QSL_RCVD`, `POTA_REF`, campi `APP_*`) viene conservato sul QSO e riemesso letteralmente alla prossima esportazione ADIF. Quindi esportare un file che era stato importato conserva tutto.
- La lunghezza del campo in ADIF è trattata come un conteggio di byte UTF-8 come richiede la specifica, così il testo multibyte (es. caratteri accentati in `COMMENT`) viene analizzato correttamente.

## Privacy e dati

- Tutti i dati sono memorizzati nel `localStorage` del tuo browser sotto la chiave `local-qso:v1`.
- Niente viene trasmesso da nessuna parte. Non c'è backend, nessuna chiamata API, nessuna telemetria, nessuna analisi.
- Cancellare i dati del sito dal browser, usare la modalità privata/in incognito o un browser/dispositivo diverso significa un nuovo quaderno vuoto — usa *Esporta .adi* per il backup.

## Lingua dell'interfaccia

Un selettore di lingua nell'intestazione copre **28 lingue**. Scegline una e il resto dell'interfaccia si ridisegna immediatamente; la tua scelta viene salvata insieme ai tuoi log e rispettata alla prossima visita. L'inglese è il predefinito.

Lingue disponibili (emoji bandiera + nome nativo; in ordine alfabetico per sistema di scrittura):

🇺🇸 English · 🇨🇿 Čeština · 🇩🇰 Dansk · 🇩🇪 Deutsch · 🇪🇪 Eesti · 🇪🇸 Español · 🇫🇷 Français · 🇮🇪 Gaeilge · 🇭🇷 Hrvatski · 🇮🇹 Italiano · 🇱🇻 Latviešu · 🇱🇹 Lietuvių · 🇭🇺 Magyar · 🇳🇱 Nederlands · 🇳🇴 Norsk · 🇵🇱 Polski · 🇵🇹 Português · 🇷🇴 Română · 🇸🇰 Slovenčina · 🇸🇮 Slovenščina · 🇫🇮 Suomi · 🇸🇪 Svenska · 🇧🇾 Беларуская · 🇧🇬 Български · 🇷🇺 Русский · 🇷🇸 Српски · 🇺🇦 Українська · 🇬🇷 Ελληνικά

Le etichette tecniche universali rimangono nella loro forma canonica in tutte le lingue: nomi di banda (`20m`, `70cm`, …), codici modo ADIF (`SSB`, `FT8`, `CW`, …), `QSO`, `RST`, `UTC` e codici paese ISO.

Manca una stringa nella tua lingua? Ogni dizionario linguistico vive in un unico bundle [`i18n.js`](i18n.js), suddiviso in 28 sezioni da commenti di intestazione `// ==== <lang> ====`. Cerca (grep) l'intestazione della tua lingua per saltare alla sua sezione, poi aggiungi/modifica la chiave. Aggiungere una lingua completamente nuova = incolla un nuovo blocco IIFE in `i18n.js` nella posizione alfabetica, aggiungi il codice lingua a `SUPPORTED_LANGS` in `app.js`, e aggiungi un'opzione `<select>` in `index.html`.

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
  - `i18n.js` — un unico bundle mantenuto a mano che porta tutti i 28 dizionari linguistici. Ogni lingua è un IIFE autonomo che assegna a `window.I18N[<lang>]` una mappa piatta chiave→stringa. I blocchi sono delimitati da commenti di intestazione `// ==== <lang> ====` — cerca (grep) uno per saltare a quella lingua. Raggruppato in un solo file invece di 28 file individuali perché i file di traduzione sono molto ripetitivi (stessi nomi di chiavi, stessa sintassi di placeholder) e gzip comprime l'intero set molto meglio di 28 flussi separati — risparmia ~23 KB al primo caricamento e taglia 27 richieste HTTP. `t()` e `applyLanguage()` in `app.js` gestiscono le ricerche (con fallback in inglese) e percorrono il DOM aggiornando ogni elemento `[data-i18n*]`.
  - `contests.js` — un unico bundle mantenuto a mano che porta tutte le 68 configurazioni contest. Ogni contest è un IIFE autonomo che assegna a `window.CONTESTS[<id>]` un oggetto di configurazione conforme allo schema (`{name, shortName, windows[], bands[], modes[], exchange[], duplicateRule, cabrillo}`). I blocchi sono delimitati da commenti di intestazione `// ==== <id> ====` — cerca (grep) uno per saltare a quel contest. Raggruppato in un solo file invece di 68 file individuali perché le configurazioni contest sono molto ripetitive (stesso schema, stesso prefisso `APP_LQ_*`, stessi nomi dei campi di intestazione Cabrillo) e gzip comprime l'intero set molto meglio di 68 flussi separati — risparmia ~42 KB al primo caricamento e taglia 67 richieste HTTP. Caricato da un unico tag `<script>` in `index.html` prima di `app.js` così che il registro sia popolato quando viene costruito l'elenco a discesa Contest.
- Testato su Chromium, Firefox e Safari recenti (desktop + iOS).

## Crediti

Realizzato da [YL3IM](https://www.qrz.com/db/YL3IM).

Grazie a [A65BR](https://www.qrz.com/db/A65BR) Oleg per i preziosi suggerimenti che hanno reso la parte QSO satellite davvero utilizzabile — le moderne designazioni a due lettere del modo satellite, il catalogo AMSAT e la regolazione automatica uplink/downlink derivano tutti dal suo feedback.

Le bandiere dei paesi si basano sulle sequenze di indicatori regionali Unicode. Vengono visualizzate correttamente su macOS, iOS, Linux (con un font emoji compatibile con le bandiere) e Android. Windows non include un font di sistema per le bandiere, quindi le emoji bandiera potrebbero apparire come coppie di lettere.
