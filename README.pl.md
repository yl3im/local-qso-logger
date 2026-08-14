# Local QSO Logger

## Czytaj w swoim języku

🇺🇸 [English](README.md) · 🇨🇿 [Čeština](README.cs.md) · 🇩🇰 [Dansk](README.da.md) · 🇩🇪 [Deutsch](README.de.md) · 🇪🇪 [Eesti](README.et.md) · 🇪🇸 [Español](README.es.md) · 🇫🇷 [Français](README.fr.md) · 🇮🇪 [Gaeilge](README.ga.md) · 🇭🇷 [Hrvatski](README.hr.md) · 🇮🇹 [Italiano](README.it.md) · 🇱🇻 [Latviešu](README.lv.md) · 🇱🇹 [Lietuvių](README.lt.md) · 🇭🇺 [Magyar](README.hu.md) · 🇳🇱 [Nederlands](README.nl.md) · 🇳🇴 [Norsk](README.no.md) · 🇵🇱 Polski · 🇵🇹 [Português](README.pt.md) · 🇷🇴 [Română](README.ro.md) · 🇸🇰 [Slovenčina](README.sk.md) · 🇸🇮 [Slovenščina](README.sl.md) · 🇫🇮 [Suomi](README.fi.md) · 🇸🇪 [Svenska](README.sv.md) · 🇧🇾 [Беларуская](README.be.md) · 🇧🇬 [Български](README.bg.md) · 🇷🇺 [Русский](README.ru.md) · 🇷🇸 [Српски](README.sr.md) · 🇺🇦 [Українська](README.uk.md) · 🇬🇷 [Ελληνικά](README.el.md)

Szanujący prywatność logger QSO dla radioamatorów, działający w całości w przeglądarce. Bez konta, bez serwera, bez śledzenia, bez analityki — twoje dzienniki żyją wyłącznie w `localStorage` przeglądarki i nigdy nie opuszczają urządzenia.

Autor: [YL3IM](https://www.qrz.com/db/YL3IM). Strona projektu: [qso.lv](https://qso.lv).

![Local QSO Logger na iPadzie](media/iPad.png)

## Spis treści

- [Czytaj w swoim języku](#czytaj-w-swoim-języku)
- [Funkcje](#funkcje)
- [Pierwsze kroki](#pierwsze-kroki)
- [Instalacja jako PWA na urządzeniu mobilnym](#instalacja-jako-pwa-na-urządzeniu-mobilnym)
  - [iOS (tylko Safari)](#ios-tylko-safari)
  - [Android (Chrome / Edge / Firefox)](#android-chrome--edge--firefox)
- [Dzienniki](#dzienniki)
- [QSO](#qso)
- [Zawody](#zawody)
- [Import i eksport](#import-i-eksport)
- [Prywatność i dane](#prywatność-i-dane)
- [Język interfejsu](#język-interfejsu)
- [Motywy](#motywy)
- [Uwagi techniczne](#uwagi-techniczne)
- [Podziękowania](#podziękowania)

## Funkcje

- Wiele dzienników; każdy z własną listą QSO.
- **Dzienniki zawodów** są opcjonalne — wybierz z katalogu 68 wbudowanych zawodów przy tworzeniu dziennika. Formularz QSO zyskuje specyficzny dla zawodów blok *Wymiana zawodów*, wykrywanie duplikatów respektuje regułę zawodów, a *Eksportuj .cbr* generuje plik zgłoszenia Cabrillo v3 obok zwykłego eksportu ADIF.
- Akcje dziennika: tworzenie, zmiana nazwy, usuwanie, import pliku dziennika (ADIF lub Cabrillo — format wykrywany automatycznie), eksport do ADIF (`.adi`), plus *Eksportuj .cbr* (Cabrillo v3) dla dzienników zawodów. Ponowny import pliku `.cbr` wcześniej wyeksportowanego przez aplikację przywraca go jako ten sam dziennik zawodów.
- Formularz QSO podzielony na trzy bloki: **Dane stacji** (znak stacji, znak operatora, własny kwadrat), które pozostają przyklejone między QSO; **Tryb pracy** (tryb propagacji, satelita, tryb emisji, tryb satelitarny, pasmo, pasmo odbiorcze) z polami satelitarnymi widocznymi tylko gdy tryb propagacji to *Satelita*; i **Dane QSO** (znak wywoływanego, kwadrat wywoływanego, data/czas UTC podczas edycji, komentarz, RST nadany, RST odebrany).
- Pełna taksonomia ADIF `MODE` → `SUBMODE` w liście emisji — wybierz emisję nadrzędną (`SSB`, `MFSK`, …) lub przejdź bezpośrednio do konkretnej subemisji (`USB`, `FT4`, …); aplikacja przechowuje oba pola zgodnie z ADIF, a tabela pokazuje konkretną subemisję gdy istnieje.
- Pełne wyliczenie trybów propagacji ADIF (SAT, RPT, EME, ES, MS, Aurora itd.) jako lista rozwijana.
- Pełny katalog satelitów AMSAT (~110 satelitów) i dwupoziomowa lista **Trybu satelitarnego**: preferowane dwuliterowe kody uplink/downlink u góry (LU, LV, SX, UU, UV, VA, VU, VV) i starsze jednoliterowe oznaczenia (A/B/J/K/L/R/S/T/U/V/W/X) zgrupowane jako *przestarzałe* poniżej. Wybór trybu satelitarnego automatycznie dostosowuje `BAND` (uplink) i `RX band` (downlink).
- Edycja i usuwanie dowolnego QSO (z potwierdzeniem przy usuwaniu).
- Rozsądne wartości domyślne: data/czas UTC wypełnione wstępnie na *teraz*, domyślny RST zależny od emisji (59 dla emisji głosowych, 599 dla CW/cyfrowych), przyklejone dane stacji + pasmo + emisja + tryb propagacji dla kolejnych QSO (tylko pola per-kontakt — znak, ich kwadrat, komentarz, RST — są czyszczone po każdym *Zaloguj QSO*).
- Wskaźnik duplikatu znaku w czasie rzeczywistym (informacyjny — duplikaty są dozwolone).
- Kolumna flagi kraju wywiedziona z prefiksu znaku (pokrywa ≥99 % popularnych prefiksów radioamatorskich, w tym przenośne jak `9A/M0NCG`).
- Automatyczne wykrywanie **Mój kwadrat** jednym dotknięciem: przycisk 🌐 obok pola pyta przeglądarkę o twoje aktualne współrzędne i wypełnia 6-znakowy kwadrat Maidenhead (używa API Geolocation przeglądarki — wymaga zgody użytkownika).
- Lokalizowane wyświetlanie daty w tabeli QSO; przechowywanie ISO i wyjście ADIF pozostają niezmienione.
- Interfejs dostępny w **28 językach** (angielski plus 22 pisma łacińskie, 5 cyrylickich i greka); selektor z emoji flag w nagłówku.
- Motywy dzienny / nocny (dzienny jest domyślny; przełącznik jest w nagłówku).
- Responsywny układ przyjazny dla urządzeń mobilnych z przyciskami w rozmiarze dotykowym.
- Działa w pełni offline — żadnych żądań sieciowych w żadnym momencie.
- Możliwość instalacji jako PWA (Dodaj do ekranu głównego / Zainstaluj aplikację) przy hostowaniu przez HTTPS.

## Pierwsze kroki

Wystarczy otworzyć `index.html` w nowoczesnej przeglądarce. Bez etapu budowania, bez instalacji, bez serwera.

Jeśli chcesz to hostować, umieść pliki statyczne (`index.html`, `style.css`, `app.js`, `favicon.svg`, `manifest.webmanifest`, `service-worker.js`, pojedynczy pakiet `i18n.js` niosący wszystkie 28 słowników językowych, i pojedynczy pakiet `contests.js` niosący wszystkie 68 konfiguracji zawodów) na dowolnym hoście statycznym (GitHub Pages, Netlify, własny serwer WWW). Działa też przez `file://` — rejestracja service workera jest automatycznie pomijana na protokole `file:`, więc otwieranie `index.html` bezpośrednio z dysku działa czysto.

Przy hostowaniu przez HTTPS aplikacja staje się instalowalna jako PWA (menu przeglądarki *Zainstaluj aplikację* / *Dodaj do ekranu głównego*) i działa offline po pierwszej wizycie dzięki service workerowi cache-first, który z wyprzedzeniem buforuje wszystkie pliki statyczne (UI + wszystkie tłumaczenia).

Przy pierwszej wizycie automatycznie tworzony jest domyślny dziennik, więc możesz od razu zacząć logować.

## Instalacja jako PWA na urządzeniu mobilnym

Gdy aplikacja jest hostowana przez HTTPS (np. GitHub Pages), możesz ją zainstalować na ekranie głównym telefonu, gdzie działa pełnoekranowo bez paska przeglądarki. Po pierwszym uruchomieniu service worker buforuje wszystko, więc kolejne uruchomienia działają w pełni offline.

### iOS (tylko Safari)

Na iOS tylko Safari może instalować PWA — przeglądarki innych firm nie mogą.

1. Otwórz stronę w **Safari**.
2. Dotknij przycisku **Udostępnij**.
3. Wybierz **Dodaj do ekranu głównego**, następnie **Dodaj**.

Instrukcja:

![Instrukcja instalacji na iOS](media/iOS_add_to_home_screen.gif)

Źródło wyższej jakości: [media/iOS_add_to_home_screen.mp4](media/iOS_add_to_home_screen.mp4).

### Android (Chrome / Edge / Firefox)

1. Otwórz stronę w przeglądarce. Monit *Zainstaluj aplikację* może pojawić się automatycznie.
2. Jeśli nie, otwórz **menu ⋮** → **Zainstaluj aplikację** (lub **Dodaj do ekranu głównego** w starszych wersjach).

Instrukcja:

![Instrukcja instalacji na Androidzie](media/Android_add_to_home_screen.gif)

Źródło wyższej jakości: [media/Android_add_to_home_screen.mp4](media/Android_add_to_home_screen.mp4).

## Dzienniki

- **Utwórz:** wpisz nazwę w *Nazwa dziennika* i prześlij. Jeśli zostawisz nazwę pustą, domyślną będzie `Log YYYY-MM-DD HH:MM UTC`.
- **Przełącz:** kliknij dowolny dziennik na pasku bocznym.
- **Zmień nazwę:** kliknij *Zmień nazwę* w nagłówku dziennika. Naciśnij Enter, aby zapisać, Escape, aby anulować.
- **Usuń:** kliknij *Usuń dziennik*. Zostaniesz poproszony o potwierdzenie. Jeśli usuniesz ostatni dziennik, automatycznie tworzony jest nowy.

## QSO

- Wypełnij formularz i naciśnij **Zaloguj QSO**.
- Formularz jest zorganizowany w trzy bloki:
  - **Dane stacji** — *Znak stacji* (twój znak nadawczy, ADIF `STATION_CALLSIGN`), *Operator* (znak wywoławczy indywidualnego operatora — różny od *znaku stacji* gdy gościny operator jest przy mikrofonie stacji klubowej; ADIF `OPERATOR`) i *Mój kwadrat* (ADIF `MY_GRIDSQUARE`) z przyciskiem 🌐, który wypełnia kwadrat na podstawie aktualnej lokalizacji twojej przeglądarki (API Geolocation — przeglądarka poprosi o zgodę pierwszym razem). Te pola pozostają przyklejone między QSO w tej samej sesji — ustaw je raz i przenoszą się.
  - **Tryb pracy** — *Tryb propagacji*, *Emisja*, *Pasmo*, plus pola wyłącznie satelitarne *Satelita* / *Tryb satelitarny* / *Pasmo odbiorcze* gdy tryb propagacji to *Satelita*. Pasmo, emisja i tryb propagacji są przyklejone jak dane stacji.
  - **Dane QSO** — pola per-kontakt: *Znak*, *Kwadrat* (Maidenhead drugiej stacji), *Komentarz* (ADIF `COMMENT`), *RST nadany*, *RST odebrany*. Podczas edycji istniejącego QSO w tym bloku pojawiają się też *Data (UTC)* i *Godzina (UTC)*. Te pola czyszczone są po każdym *Zaloguj QSO*.
- Wszystkie znaki (wywoływanego, stacji, operatora) są automatycznie zamieniane na wielkie litery podczas pisania; oba pola kwadratów działają tak samo.
- Data i godzina przy przesłaniu są wypełniane wstępnie na *teraz* w UTC; podczas edycji możesz wpisać dowolną wartość.
- RST nadany / RST odebrany, jeśli pozostawione puste, domyślnie wynoszą **59** dla emisji głosowych (SSB/FM/DIGITALVOICE) i **599** dla CW i emisji cyfrowych (CW/FT8/FT4/RTTY/PSK31/JT65). Wartość domyślna podąża za nadrzędnym MODE, więc wybranie konkretnej subemisji jak *USB* czy *FT4* nadal daje właściwą wartość domyślną.
- Chip *Duplikat w tym dzienniku* pojawia się pod polem znaku, jeśli znak już istnieje w bieżącym dzienniku. Duplikaty *nie* są blokowane.
- **Tryb propagacji** — opcjonalna lista trybów propagacji ADIF (SAT, RPT, EME, F2, Es, MS, LOS itd.). Zostaw puste dla zwykłych ziemskich QSO na KF.
- **QSO satelitarne** — wybranie trybu propagacji *Satelita* ujawnia trzy pola wyłącznie satelitarne: **Satelita** (lista ~110 satelitów zarejestrowanych w AMSAT), **Tryb satelitarny** (oznaczenia literowe AMSAT, zgrupowane jako *nowoczesne* dwuliterowe kody uplink/downlink u góry i *przestarzałe* jednoliterowe kody poniżej) i **Pasmo odbiorcze** (pasmo downlink). Satelita, tryb satelitarny i pasmo odbiorcze są obowiązkowe — przeglądarka odmówi przesłania bez nich. Wybranie **Trybu satelitarnego** automatycznie wypełnia główne **Pasmo** pasmem uplink i **Pasmo odbiorcze** pasmem downlink (np. tryb J → uplink 2m, downlink 70cm). Przełączenie *z powrotem* na satelitę z innego trybu propagacji resetuje tryb satelitarny, aby wybrać nowy. Nie-satelitarne QSO nigdy nie zawierają pól satelitarnych; przełączenie istniejącego QSO z satelity na inny tryb propagacji czyści je. **Kwadrat** i **Mój kwadrat** są polami ogólnymi (przydatne też dla zawodów kwadratowych VHF/UHF) i pozostają widoczne dla wszystkich QSO.
- **Edytuj QSO** przyciskiem *Edytuj* w wierszu. Formularz przechodzi w tryb *Zaktualizuj QSO*, wiersz jest podświetlony, a pojawia się przycisk *Anuluj*. Przełączenie dzienników lub usunięcie dziennika automatycznie anuluje edycję.
- **Usuń QSO** przyciskiem *Usuń* w wierszu (prosi o potwierdzenie).

## Zawody

Dziennik może opcjonalnie być **dziennikiem zawodów** — wybierz zawody z listy rozwijanej *Zawody* w formularzu tworzenia dziennika. Pusta lista = zwykły dziennik (domyślnie, istniejące zachowanie bez zmian).

Dzienniki zawodów otrzymują:

- **Blok wymiany zawodów** w formularzu QSO, renderowany dynamicznie na podstawie schematu wybranych zawodów. Typy pól to `text`, `number` i `serial` (auto-inkrementujące, tylko do odczytu). Pola oznaczone jako *sticky* (twoja własna strefa / powiat / dystrykt / moc / wiek / …) są wstępnie wypełniane wartością z poprzedniego QSO; pola per-QSO (ich strefa, ich numer seryjny, …) są czyszczone po każdym *Zaloguj QSO*.
- **Odznaka zawodów** obok nazwy dziennika w nagłówku szczegółów.
- **Wykrywanie duplikatów** respektujące `duplicateRule` zawodów (`per-band-mode`, `per-band`, `per-day` lub `off`). Chip pozostaje wyłącznie informacyjny — nigdy nie blokuje przesłania.
- **Chip ostrzegawczy**, gdy bieżący UTC wypada poza którymkolwiek z deklarowanych okien dat zawodów (12 lat wczytanych z wyprzedzeniem, 2026–2037), lub gdy wybrane pasmo / emisja nie są w dozwolonym zestawie zawodów. Nigdy nie blokuje.
- **Panel informacji o zgłoszeniu** w nagłówku szczegółów: wbudowany formularz dla pól nagłówka Cabrillo, które deklarują zawody (kategoria, moc, imię, klub, adres, soapbox, …). Wartości zapisywane są na dzienniku, nie per QSO.
- **Przycisk Eksportuj .cbr** w nagłówku szczegółów, obok *Eksportuj .adi*. Emituje plik Cabrillo v3: `CALLSIGN` / `GRID-LOCATOR` / `OPERATORS` wypełnione wstępnie z danych stacji pierwszego QSO, reszta z panelu informacji o zgłoszeniu, następnie jeden wiersz `QSO:` na kontakt w porządku chronologicznym, wykorzystujący kolumny `sentTemplate` / `rcvdTemplate` zawodów.
- **Ponowny import Cabrillo** przez standardowy przycisk *Importuj plik dziennika* — plik `.cbr` wcześniej wyeksportowany przez aplikację (lub przez dowolny inny logger emitujący standardowy Cabrillo v3) wraca jako nowy dziennik zawodów właściwego typu. Nagłówek `CONTEST:` jest porównywany z wbudowanym katalogiem; gdy kilka konfiguracji dzieli ten sam tag (np. `ARRL-10` pasuje zarówno do `arrl-10m-dx`, jak i `arrl-10m-w`), aplikacja rozstrzyga niejednoznaczność, dopasowując literę emisji wiersza QSO i liczbę kolumn do szablonu każdego kandydata, a następnie preferuje wariant `-dx`. Pola nagłówka (kategoria, imię, klub, soapbox, …) odtwarzają panel informacji o zgłoszeniu; wartości wymiany QSO odtwarzają `q.contestExchange` zgodnie z szablonem zawodów.

### Wbudowany katalog zawodów (68 konfiguracji)

Pogrupowane według rodzin:

- **Rodzina CQ** (9): CQ WW SSB/CW/RTTY, CQ WPX SSB/CW/RTTY, CQ 160 CW/SSB, CQ-M International.
- **Rodzina ARRL** (9): ARRL DX SSB/CW (strona DX), ARRL Field Day, ARRL 10m/160m/RTTY Roundup (każdy dostarczony z obu perspektyw — DX i W/VE).
- **IARU** (2): IARU HF Championship, IARU R1 Field Day.
- **WAE i inne europejskie** (8): WAE DX SSB/CW, EU HF Championship, LZ DX, Baltic Contest, NRAU-Baltic SSB/CW, SP DX.
- **Środkowo-/wschodnioeuropejskie asymetryczne — obie perspektywy** (14): OK/OM DX CW+SSB, HA DX, YO DX HF, Ukrainian DX, REF Contest CW+SSB.
- **Klub rosyjski / RadioSport** (12): Russian DX (obie strony), Russian WW RTTY, Russian WW MultiMode, Yuri Gagarin International, Cup of the Russian Federation CW+SSB, RRTC, Asiatic Russia Championship, UA1DZ Memorial Cup, RDAC, RAEM.
- **Białoruś + Włochy + Chorwacja + Hiszpania + ukraiński RTTY** (12): Belarus BFRR CW+SSB (obie strony), ARI DX (obie strony), Croatian 9A CW (obie strony), Spanish CNCW (obie strony), Ukrainian RTTY (obie strony).
- **Globalne** (2): All Asian DX CW+SSB.

Asymetryczne zawody (gdzie kraj gospodarz i strona DX wysyłają różne wymiany) dostarczane są z **dwiema konfiguracjami** — jedna dla perspektywy kraju gospodarza (przyklejony kod regionu) i jedna dla perspektywy DX (przyklejony numer seryjny). Pole strony otrzymanej to pojedyncze pole wolnego tekstu, aby operator mógł wpisać dowolny format w zależności od kontaktu.

Każda konfiguracja niesie:

- Wartości wymiany zawodów ponownie emitowane w eksporcie ADIF przez pola przestrzeni nazw `APP_LQ_*`; znacznik nagłówka `APP_LQ_CONTEST_ID` pozwala kolejnemu ponownemu importowi odtworzyć dziennik jako te same zawody z wszystkimi polami nienaruszonymi.
- 12 lat okien dat (2026–2037), aby chip *poza oknem zawodów* pozostawał użyteczny przez dekadę bez nowego wydania.
- Szablon Cabrillo mapujący każde pole wymiany na właściwą kolumnę wiersza `QSO:`.

Dodanie nowych zawodów = wklej nowy blok IIFE do [`contests.js`](contests.js) na pozycji alfabetycznej (każde istniejące zawody są ograniczone komentarzem nagłówka `// ==== <id> ====`, więc łatwo znaleźć, gdzie wstawić). Nie jest potrzebna żadna zmiana w `index.html`, żadna zmiana w `service-worker.js`, żadna zmiana w `app.js` — renderer, obsługa przesyłania, detektor duplikatów, obieg ADIF i emiter Cabrillo pochłaniają każdą konfigurację jako czyste dane.

## Import i eksport

- **Import** dowolnego pliku dziennika — kliknij *Importuj plik dziennika* pod formularzem tworzenia dziennika i wybierz plik `.adi` / `.adif` (ADIF) lub `.cbr` / `.cab` (Cabrillo v3). Format jest wykrywany automatycznie na podstawie pierwszej linii pliku (`<...>` → ADIF, `START-OF-LOG:` → Cabrillo, `[REG1TEST;1]` → alert „EDI nie jest jeszcze obsługiwane”). Zawsze tworzony jest nowy dziennik — import nigdy nie łączy z istniejącym. Importy ADIF przychodzą jako zwykłe dzienniki, chyba że nagłówek nosi `APP_LQ_CONTEST_ID` zapisany przez nasz własny eksport zawodów (w takim przypadku dziennik jest odtwarzany jako dziennik zawodów tych zawodów). Importy Cabrillo zawsze przychodzą jako dzienniki zawodów — zobacz sekcję *Zawody* dla sposobu, w jaki tag `CONTEST:` jest porównywany z wbudowanym katalogiem.
- **Eksport ADIF**: kliknij *Eksportuj .adi* w nagłówku dziennika. Pobierany jest plik zgodny z **ADIF 3.1.7**. Nagłówek deklaruje `ADIF_VER 3.1.7`, `PROGRAMID local-qso`, `PROGRAMVERSION` i `CREATED_TIMESTAMP` (UTC). Pola per-QSO emitowane (gdy niepuste): `CALL`, `QSO_DATE`, `TIME_ON`, `BAND`, `MODE`, `SUBMODE`, `PROP_MODE`, `GRIDSQUARE`, `BAND_RX`, `SAT_MODE`, `SAT_NAME`, `RST_SENT`, `RST_RCVD`, `COMMENT`, `STATION_CALLSIGN`, `OPERATOR`, `MY_GRIDSQUARE` — a po nich każde dodatkowe pole ADIF zachowane podczas importu (patrz niżej).
- **Eksport Cabrillo** jest udokumentowany w sekcji *Zawody* powyżej — dostępny tylko dla dzienników zawodów (przycisk *Eksportuj .cbr* pojawia się w nagłówku dziennika, gdy dziennik ma zawody).
- **Bezstratny obieg**: przy imporcie ADIF każde pole, którego aplikacja nie modeluje w interfejsie (np. `NAME`, `FREQ`, `TX_PWR`, `DXCC`, `QSL_SENT`/`QSL_RCVD`, `POTA_REF`, pola `APP_*`), jest zachowywane w QSO i dosłownie emitowane ponownie przy następnym eksporcie ADIF. Eksportowanie pliku, który sam był importowany, zachowuje więc wszystko.
- Długość pola w ADIF jest traktowana jako liczba bajtów UTF-8, jak wymaga specyfikacja, więc wielobajtowy tekst (np. znaki ze znakami diakrytycznymi w `COMMENT`) jest poprawnie parsowany.

## Prywatność i dane

- Wszystkie dane są przechowywane w `localStorage` przeglądarki pod kluczem `local-qso:v1`.
- Nic nie jest przesyłane nigdzie. Nie ma backendu, wywołań API, telemetrii ani analityki.
- Wyczyszczenie danych witryny w przeglądarce, użycie trybu prywatnego/incognito lub innej przeglądarki/urządzenia oznacza nowy pusty dziennik — użyj *Eksportuj .adi* do tworzenia kopii zapasowych.

## Język interfejsu

Selektor języka w nagłówku obejmuje **28 języków**. Wybierz jeden, a reszta interfejsu od razu przerysuje się; twój wybór jest zapisywany obok dzienników i respektowany przy następnej wizycie. Angielski jest domyślny.

Dostępne języki (emoji flagi + nazwa własna; alfabetycznie w obrębie każdego systemu pisma):

🇺🇸 English · 🇨🇿 Čeština · 🇩🇰 Dansk · 🇩🇪 Deutsch · 🇪🇪 Eesti · 🇪🇸 Español · 🇫🇷 Français · 🇮🇪 Gaeilge · 🇭🇷 Hrvatski · 🇮🇹 Italiano · 🇱🇻 Latviešu · 🇱🇹 Lietuvių · 🇭🇺 Magyar · 🇳🇱 Nederlands · 🇳🇴 Norsk · 🇵🇱 Polski · 🇵🇹 Português · 🇷🇴 Română · 🇸🇰 Slovenčina · 🇸🇮 Slovenščina · 🇫🇮 Suomi · 🇸🇪 Svenska · 🇧🇾 Беларуская · 🇧🇬 Български · 🇷🇺 Русский · 🇷🇸 Српски · 🇺🇦 Українська · 🇬🇷 Ελληνικά

Uniwersalne etykiety techniczne pozostają w swojej kanonicznej formie we wszystkich językach: nazwy pasm (`20m`, `70cm`, …), kody emisji ADIF (`SSB`, `FT8`, `CW`, …), `QSO`, `RST`, `UTC` i kody krajów ISO.

Brakuje tekstu w twoim języku? Każdy słownik językowy żyje w jednym pakiecie [`i18n.js`](i18n.js), podzielonym na 28 sekcji komentarzami nagłówka `// ==== <lang> ====`. Znajdź (grep) nagłówek swojego języka, aby przejść do jego sekcji, następnie dodaj/edytuj klucz. Dodanie zupełnie nowego języka = wklej nowy blok IIFE do `i18n.js` na pozycji alfabetycznej, dodaj kod języka do `SUPPORTED_LANGS` w `app.js`, i dodaj opcję `<select>` w `index.html`.

## Motywy

Przełącznik motywu w nagłówku przełącza między dniem (domyślny) a nocą. Preferencja jest zapisywana obok dzienników i respektowana przy następnej wizycie. Natywne selektory daty/czasu podążają za motywem przez `color-scheme`.

## Uwagi techniczne

- Aplikacja jednostronicowa, vanilla HTML + CSS + JavaScript. Bez frameworków, bez etapu budowania, bez zależności.
- Pliki źródłowe:
  - `index.html` — znaczniki i znaczniki meta.
  - `style.css` — motywy i układ (zmienne dzień/noc, media queries dla urządzeń mobilnych).
  - `app.js` — stan, trwałość, renderowanie, parser/serializator ADIF, wyszukiwanie prefiksu znaku → kraj.
  - `favicon.svg` — wbudowana ikona SVG.
  - `manifest.webmanifest` — Web App Manifest (nazwa, kolor motywu, zakres, ikona), aby aplikacja była instalowalna jako PWA na urządzeniach mobilnych i stacjonarnych.
  - `service-worker.js` — service worker cache-first, który przy instalacji z wyprzedzeniem buforuje wszystkie pliki statyczne, przy aktywacji usuwa stare bufory i po pierwszej wizycie utrzymuje aplikację w pełni offline. Rejestracja jest automatycznie pomijana na protokole `file://`, więc otwieranie `index.html` bezpośrednio z dysku pozostaje czyste.
  - `i18n.js` — jeden ręcznie utrzymywany pakiet niosący wszystkie 28 słowników językowych. Każdy język to samodzielny IIFE, który przypisuje `window.I18N[<lang>]` płaską mapę klucz→ciąg. Bloki są ograniczone komentarzami nagłówka `// ==== <lang> ====` — znajdź (grep) jeden, aby przejść do tego języka. Spakowane w jeden plik zamiast 28 osobnych, ponieważ pliki tłumaczeń są bardzo powtarzalne (te same nazwy kluczy, ta sama składnia symboli zastępczych) i gzip kompresuje cały zestaw znacznie lepiej niż 28 osobnych strumieni — oszczędza ~23 KB przy pierwszym wczytaniu i tnie 27 żądań HTTP. `t()` i `applyLanguage()` w `app.js` obsługują wyszukiwania (z angielskim rezerwowym) i przeglądają DOM aktualizując każdy element `[data-i18n*]`.
  - `contests.js` — jeden ręcznie utrzymywany pakiet niosący wszystkie 68 konfiguracji zawodów. Każde zawody to samodzielny IIFE, który przypisuje `window.CONTESTS[<id>]` obiekt konfiguracji zgodny ze schematem (`{name, shortName, windows[], bands[], modes[], exchange[], duplicateRule, cabrillo}`). Bloki są ograniczone komentarzami nagłówka `// ==== <id> ====` — znajdź (grep) jeden, aby przejść do tych zawodów. Spakowane w jeden plik zamiast 68 osobnych, ponieważ konfiguracje zawodów są bardzo powtarzalne (ten sam schemat, ten sam prefiks `APP_LQ_*`, te same nazwy pól nagłówka Cabrillo) i gzip kompresuje cały zestaw znacznie lepiej niż 68 osobnych strumieni — oszczędza ~42 KB przy pierwszym wczytaniu i tnie 67 żądań HTTP. Wczytywany przez pojedynczy znacznik `<script>` w `index.html` przed `app.js`, aby rejestr był wypełniony, gdy budowana jest lista rozwijana Zawody.
- Testowane na aktualnych wersjach Chromium, Firefoksa i Safari (desktop + iOS).

## Podziękowania

Wykonał [YL3IM](https://www.qrz.com/db/YL3IM).

Podziękowania dla [A65BR](https://www.qrz.com/db/A65BR) Olega za bezcenne wskazówki, które sprawiły, że część dotycząca QSO satelitarnych jest naprawdę użyteczna — nowoczesne dwuliterowe oznaczenia trybu satelitarnego, katalog AMSAT i automatyczne dostosowanie uplink/downlink wywodzą się z jego opinii.

Flagi krajów bazują na sekwencjach regionalnych wskaźników Unicode. Są poprawnie wyświetlane na macOS, iOS, Linuxie (z czcionką emoji obsługującą flagi) i Androidzie. Windows nie zawiera systemowej czcionki flag, więc emoji flag mogą tam wyświetlać się jako pary liter.
