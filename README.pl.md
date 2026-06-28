# Local QSO Logger

## Czytaj w swoim języku

🇺🇸 [English](README.md) · 🇨🇿 [Čeština](README.cs.md) · 🇩🇰 [Dansk](README.da.md) · 🇩🇪 [Deutsch](README.de.md) · 🇪🇪 [Eesti](README.et.md) · 🇪🇸 [Español](README.es.md) · 🇫🇷 [Français](README.fr.md) · 🇮🇪 [Gaeilge](README.ga.md) · 🇭🇷 [Hrvatski](README.hr.md) · 🇮🇹 [Italiano](README.it.md) · 🇱🇻 [Latviešu](README.lv.md) · 🇱🇹 [Lietuvių](README.lt.md) · 🇭🇺 [Magyar](README.hu.md) · 🇳🇱 [Nederlands](README.nl.md) · 🇳🇴 [Norsk](README.no.md) · 🇵🇱 Polski · 🇵🇹 [Português](README.pt.md) · 🇷🇴 [Română](README.ro.md) · 🇸🇰 [Slovenčina](README.sk.md) · 🇸🇮 [Slovenščina](README.sl.md) · 🇫🇮 [Suomi](README.fi.md) · 🇸🇪 [Svenska](README.sv.md) · 🇧🇾 [Беларуская](README.be.md) · 🇧🇬 [Български](README.bg.md) · 🇷🇺 [Русский](README.ru.md) · 🇷🇸 [Српски](README.sr.md) · 🇺🇦 [Українська](README.uk.md) · 🇬🇷 [Ελληνικά](README.el.md)

Szanujący prywatność dziennik QSO dla krótkofalowców, działający w całości w przeglądarce. Bez konta, bez serwera, bez śledzenia, bez analityki — Twoje dzienniki są przechowywane tylko w `localStorage` przeglądarki i nigdy nie opuszczają Twojego urządzenia.

Autor: [YL3IM](https://www.qrz.com/db/YL3IM). Strona projektu: [qso.ham.lv](https://qso.ham.lv).

![Local QSO Logger na iPadzie](media/iPad.png)

## Spis treści

- [Czytaj w swoim języku](#czytaj-w-swoim-języku)
- [Funkcje](#funkcje)
- [Pierwsze kroki](#pierwsze-kroki)
- [Instalacja jako PWA na telefonie](#instalacja-jako-pwa-na-telefonie)
  - [iOS (tylko Safari)](#ios-tylko-safari)
  - [Android (Chrome / Edge / Firefox)](#android-chrome--edge--firefox)
- [Dzienniki](#dzienniki)
- [QSO](#qso)
- [Import i eksport ADIF](#import-i-eksport-adif)
- [Prywatność i dane](#prywatność-i-dane)
- [Język interfejsu](#język-interfejsu)
- [Motywy](#motywy)
- [Uwagi techniczne](#uwagi-techniczne)
- [Podziękowania](#podziękowania)

## Funkcje

- Wiele dzienników, każdy z własną listą QSO.
- Akcje dziennika: tworzenie, zmiana nazwy, usuwanie, import z ADIF, eksport do ADIF (`.adi`).
- Pola QSO: znak wywoławczy, data UTC, czas UTC, pasmo, emisja, RST wysłany, RST odebrany.
- Edycja i usuwanie dowolnego QSO (z potwierdzeniem przy usuwaniu).
- Sensowne wartości domyślne: dzisiejsza data/czas UTC wstępnie wypełnione, domyślne RST zależne od emisji (59 dla emisji głosowych, 599 dla CW/cyfrowych), pasmo i emisja utrzymywane między kolejnymi QSO.
- Wskaźnik duplikatu znaku w czasie rzeczywistym (informacyjny — duplikaty są dozwolone).
- Kolumna flagi kraju wywiedziona z prefiksu znaku (pokrywa ≥99 % popularnych prefiksów krótkofalarskich, w tym znaki portable jak `9A/M0NCG`).
- Wyświetlanie daty zgodne z ustawieniami regionalnymi w tabeli QSO; pamięć ISO i wyjście ADIF pozostają niezmienione.
- Motywy dzień/noc (dzień domyślnie; przełącznik w nagłówku).
- Responsywny układ przyjazny dla urządzeń mobilnych z przyciskami dostosowanymi do dotyku.
- Działa w pełni offline — żadnych żądań sieciowych.
- Instalowalna jako PWA (Dodaj do ekranu głównego / Zainstaluj aplikację), gdy hostowana przez HTTPS.
- Interfejs dostępny w **28 językach** (angielski plus 22 łacińskie, 5 cyrylickich i grecki); selektor z flagami w nagłówku.

## Pierwsze kroki

Po prostu otwórz `index.html` w nowoczesnej przeglądarce. Bez budowania, bez instalacji, bez serwera.

Aby hostować, umieść pliki statyczne (`index.html`, `style.css`, `app.js`, `favicon.svg`, `manifest.webmanifest`, `service-worker.js` i katalog `i18n/` z 28 plikami tłumaczeń) na dowolnym hostingu statycznym (GitHub Pages, Netlify, własny serwer). Będzie też działać przez `file://` — rejestracja service workera jest automatycznie pomijana dla protokołu `file:`, więc otwarcie `index.html` bezpośrednio z dysku działa czysto.

Gdy serwowana przez HTTPS, aplikacja staje się instalowalna jako PWA (przez menu *Zainstaluj aplikację* / *Dodaj do ekranu głównego* w przeglądarce) i działa offline po pierwszej wizycie dzięki service workerowi cache-first, który wstępnie buforuje każdy plik statyczny (UI + wszystkie tłumaczenia).

Domyślny dziennik jest tworzony automatycznie przy pierwszej wizycie, więc można od razu zacząć rejestrować.

## Instalacja jako PWA na telefonie

Gdy aplikacja jest serwowana przez HTTPS (np. GitHub Pages), możesz ją zainstalować na ekranie głównym telefonu, aby działała na pełnym ekranie bez interfejsu przeglądarki. Po pierwszym uruchomieniu service worker buforuje wszystko, więc kolejne uruchomienia działają w pełni offline.

### iOS (tylko Safari)

W iOS tylko Safari może instalować PWA — przeglądarki firm trzecich nie mogą.

1. Otwórz stronę w **Safari**.
2. Dotknij przycisku **Udostępnij**.
3. Wybierz **Do ekranu początkowego**, następnie **Dodaj**.

Demonstracja:

![Demonstracja instalacji iOS](media/iOS_add_to_home_screen.gif)

Źródło wyższej jakości: [media/iOS_add_to_home_screen.mp4](media/iOS_add_to_home_screen.mp4).

### Android (Chrome / Edge / Firefox)

1. Otwórz stronę w przeglądarce. Może automatycznie pojawić się monit *Zainstaluj aplikację*.
2. W przeciwnym razie otwórz **menu ⋮** → **Zainstaluj aplikację** (lub **Dodaj do ekranu głównego** w starszych wersjach).

Demonstracja:

![Demonstracja instalacji Android](media/Android_add_to_home_screen.gif)

Źródło wyższej jakości: [media/Android_add_to_home_screen.mp4](media/Android_add_to_home_screen.mp4).

## Dzienniki

- **Utwórz:** wpisz nazwę w polu *Nazwa dziennika* i prześlij. Jeśli zostawisz puste, domyślnie będzie `Log YYYY-MM-DD HH:MM UTC`.
- **Przełącz:** kliknij dowolny dziennik w panelu bocznym.
- **Zmień nazwę:** kliknij *Zmień nazwę* w nagłówku dziennika. Enter zapisuje, Escape anuluje.
- **Usuń:** kliknij *Usuń dziennik*. Zostaniesz poproszony o potwierdzenie. Jeśli usuniesz ostatni dziennik, automatycznie zostanie utworzony nowy.

## QSO

- Wypełnij formularz i naciśnij **Zapisz QSO**.
- Znak jest automatycznie zamieniany na wielkie litery podczas pisania.
- Data i czas są wstępnie ustawiane na *teraz* w UTC i resetowane po każdym zapisanym QSO; nadal możesz wprowadzić dowolną wartość.
- Pasmo i emisja są zachowywane między QSO w tej samej sesji, więc nie musisz ich wybierać ponownie dla każdego kontaktu.
- RST wysłany / RST odebrany, jeśli pozostawione puste, ustawiają się na **59** dla emisji głosowych (SSB/FM/AM/DIGITALVOICE) i **599** dla CW i emisji cyfrowych (CW/FT8/FT4/RTTY/PSK31/JT65).
- Pod polem znaku pojawia się żeton *Duplikat w tym dzienniku*, jeśli znak już istnieje w bieżącym dzienniku. Duplikaty *nie* są blokowane.
- **Edytuj QSO** przyciskiem *Edytuj* w wierszu. Formularz przełącza się w tryb *Zaktualizuj QSO*, wiersz jest podświetlany, pojawia się przycisk *Anuluj*. Przełączenie dziennika lub jego usunięcie automatycznie anuluje edycję.
- **Usuń QSO** przyciskiem *Usuń* w wierszu (prosi o potwierdzenie).

## Import i eksport ADIF

- **Eksport**: kliknij *Eksportuj .adi* w nagłówku dziennika. Pobrany zostanie plik z `ADIF_VER 3.1.4` i `PROGRAMID local-qso` w nagłówku. Każdy rekord mapuje `CALL`, `QSO_DATE`, `TIME_ON`, `BAND`, `MODE`, `RST_SENT`, `RST_RCVD`.
- **Import**: kliknij *Importuj plik .adi* pod formularzem tworzenia dziennika i wybierz plik `.adi`/`.adif`. Tworzony jest nowy dziennik o nazwie `Zaimportowano YYYY-MM-DD HH:MM UTC`. Import nigdy nie jest łączony z istniejącym dziennikiem.
- Długość pola jest interpretowana jako liczba znaków, co działa dla ASCII ADIF (wszystkie standardowe pola QSO). Treść wielobajtowa w nieistotnych polach tekstowych może być parsowana dziwnie.

## Prywatność i dane

- Wszystkie dane są przechowywane w `localStorage` przeglądarki pod kluczem `local-qso:v1`.
- Nic nie jest nigdzie przesyłane. Bez backendu, bez wywołań API, bez telemetrii, bez analityki.
- Wyczyszczenie danych strony, użycie trybu prywatnego/incognito lub innej przeglądarki/urządzenia oznacza pusty dziennik — użyj *Eksportuj .adi* do kopii zapasowej.

## Język interfejsu

Selektor języka w nagłówku obsługuje **28 języków**. Wybierz jeden i reszta interfejsu jest natychmiast renderowana ponownie; Twój wybór jest zapisywany razem z dziennikami i respektowany przy następnej wizycie. Angielski jest domyślny.

Dostępne języki (emoji flagi + natywna nazwa; uporządkowane alfabetycznie w obrębie każdego pisma):

🇺🇸 English · 🇨🇿 Čeština · 🇩🇰 Dansk · 🇩🇪 Deutsch · 🇪🇪 Eesti · 🇪🇸 Español · 🇫🇷 Français · 🇮🇪 Gaeilge · 🇭🇷 Hrvatski · 🇮🇹 Italiano · 🇱🇻 Latviešu · 🇱🇹 Lietuvių · 🇭🇺 Magyar · 🇳🇱 Nederlands · 🇳🇴 Norsk · 🇵🇱 Polski · 🇵🇹 Português · 🇷🇴 Română · 🇸🇰 Slovenčina · 🇸🇮 Slovenščina · 🇫🇮 Suomi · 🇸🇪 Svenska · 🇧🇾 Беларуская · 🇧🇬 Български · 🇷🇺 Русский · 🇷🇸 Српски · 🇺🇦 Українська · 🇬🇷 Ελληνικά

Uniwersalne etykiety techniczne pozostają w kanonicznej formie we wszystkich językach: nazwy pasm (`20m`, `70cm`, …), kody emisji ADIF (`SSB`, `FT8`, `CW`, …), `QSO`, `RST`, `UTC` i kody ISO krajów.

Brakuje ciągu w Twoim języku? Każdy język to jeden mały plik w [`i18n/`](i18n/) — skopiuj `i18n/en.js`, przetłumacz wartości, zapisz jako `i18n/<kod>.js`, następnie dodaj znacznik `<script>` plus opcję `<select>` w `index.html` i kod w `SUPPORTED_LANGS` w `app.js`.

## Motywy

Przełącznik motywu w nagłówku przełącza między dniem (domyślnie) i nocą. Preferencja jest zapisywana razem z dziennikami i respektowana przy następnej wizycie. Natywne wybieraki daty/czasu podążają za motywem przez `color-scheme`.

## Uwagi techniczne

- Aplikacja jednostronicowa, czysty HTML + CSS + JavaScript. Bez frameworków, bez budowania, bez zależności.
- Pliki źródłowe:
  - `index.html` — znaczniki i meta tagi.
  - `style.css` — motywy i układ (zmienne dzień/noc, mobile media queries).
  - `app.js` — stan, trwałość, renderowanie, parser/serializer ADIF, wyszukiwanie prefiks znaku → kraj.
  - `favicon.svg` — wbudowany SVG favicon.
  - `manifest.webmanifest` — Web App Manifest (nazwa, kolor motywu, scope, ikona), dzięki czemu aplikacja jest instalowalna jako PWA na mobilnych i desktopach.
  - `service-worker.js` — cache-first service worker, który przy instalacji wstępnie buforuje każdy plik statyczny, przy aktywacji usuwa stare bufory i utrzymuje aplikację w pełni offline po pierwszej wizycie. Rejestracja jest automatycznie pomijana dla protokołu `file://`, więc otwarcie `index.html` bezpośrednio z dysku pozostaje czyste.
  - `i18n/<lang>.js` — jeden plik tłumaczenia na każdy obsługiwany język (łącznie 28). Każdy to mały IIFE, który przypisuje `window.I18N[<lang>]` płaską mapę klucz→ciąg. `t()` i `applyLanguage()` w `app.js` obsługują wyszukiwania (z fallbackiem na angielski) i przechodzą przez DOM, aktualizując każdy element `[data-i18n*]`.
- Testowano w najnowszych Chromium, Firefox i Safari (desktop + iOS).

## Podziękowania

Zbudowane przez [YL3IM](https://www.qrz.com/db/YL3IM).

Flagi krajów opierają się na sekwencjach indykatorów regionalnych Unicode. Renderują się poprawnie na macOS, iOS, Linux (z czcionką emoji obsługującą flagi) i Android. Windows nie zawiera systemowej czcionki flag, więc emoji flag mogą tam pojawiać się jako pary liter.
