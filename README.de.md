# Local QSO Logger

## In Ihrer Sprache lesen

🇺🇸 [English](README.md) · 🇨🇿 [Čeština](README.cs.md) · 🇩🇰 [Dansk](README.da.md) · 🇩🇪 Deutsch · 🇪🇪 [Eesti](README.et.md) · 🇪🇸 [Español](README.es.md) · 🇫🇷 [Français](README.fr.md) · 🇮🇪 [Gaeilge](README.ga.md) · 🇭🇷 [Hrvatski](README.hr.md) · 🇮🇹 [Italiano](README.it.md) · 🇱🇻 [Latviešu](README.lv.md) · 🇱🇹 [Lietuvių](README.lt.md) · 🇭🇺 [Magyar](README.hu.md) · 🇳🇱 [Nederlands](README.nl.md) · 🇳🇴 [Norsk](README.no.md) · 🇵🇱 [Polski](README.pl.md) · 🇵🇹 [Português](README.pt.md) · 🇷🇴 [Română](README.ro.md) · 🇸🇰 [Slovenčina](README.sk.md) · 🇸🇮 [Slovenščina](README.sl.md) · 🇫🇮 [Suomi](README.fi.md) · 🇸🇪 [Svenska](README.sv.md) · 🇧🇾 [Беларуская](README.be.md) · 🇧🇬 [Български](README.bg.md) · 🇷🇺 [Русский](README.ru.md) · 🇷🇸 [Српски](README.sr.md) · 🇺🇦 [Українська](README.uk.md) · 🇬🇷 [Ελληνικά](README.el.md)

Ein datenschutzfreundliches Amateurfunk-QSO-Logbuch, das vollständig in Ihrem Browser läuft. Kein Konto, kein Server, kein Tracking, keine Analyse — Ihre Logbücher liegen ausschließlich im `localStorage` Ihres Browsers und verlassen Ihr Gerät nie.

Von [YL3IM](https://www.qrz.com/db/YL3IM). Projektwebsite: [qso.ham.lv](https://qso.ham.lv).

![Local QSO Logger auf einem iPad](media/iPad.png)

## Inhalt

- [In Ihrer Sprache lesen](#in-ihrer-sprache-lesen)
- [Funktionen](#funktionen)
- [Erste Schritte](#erste-schritte)
- [Als PWA auf dem Handy installieren](#als-pwa-auf-dem-handy-installieren)
  - [iOS (nur Safari)](#ios-nur-safari)
  - [Android (Chrome / Edge / Firefox)](#android-chrome--edge--firefox)
- [Logbücher](#logbücher)
- [QSOs](#qsos)
- [ADIF-Import & -Export](#adif-import--export)
- [Datenschutz und Daten](#datenschutz-und-daten)
- [Oberflächensprache](#oberflächensprache)
- [Themes](#themes)
- [Technische Hinweise](#technische-hinweise)
- [Credits](#credits)

## Funktionen

- Mehrere Logbücher, jedes mit eigener QSO-Liste.
- Logbuchaktionen: anlegen, umbenennen, löschen, ADIF-Import, ADIF-Export (`.adi`).
- QSO-Felder: Rufzeichen, UTC-Datum, UTC-Zeit, Band, Betriebsart, RST gesendet, RST empfangen.
- Bearbeiten und Löschen beliebiger QSOs (mit Bestätigung beim Löschen).
- Sinnvolle Vorgaben: heutiges UTC-Datum/-Zeit vorausgefüllt, betriebsartabhängige RST-Vorgaben (59 für Sprachmodi, 599 für CW/Digital), sticky Band & Betriebsart über aufeinanderfolgende QSOs hinweg.
- Live-Anzeige für doppelte Rufzeichen (informativ — Duplikate sind erlaubt).
- Spalte mit der Landesflagge, abgeleitet aus dem Rufzeichenpräfix (deckt ≥99 % der häufigen Amateurfunkpräfixe ab, einschließlich portabler Rufzeichen wie `9A/M0NCG`).
- Locale-abhängige Datumsanzeige in der QSO-Tabelle; ISO-Speicherung und ADIF-Ausgabe bleiben unverändert.
- Tag-/Nacht-Theme (Tag ist Standard; Umschalter im Header).
- Mobilfreundliches responsives Layout mit berührungsgerechten Schaltflächen.
- Funktioniert vollständig offline — keinerlei Netzwerkanfragen.
- Als PWA installierbar (Zum Startbildschirm hinzufügen / Installieren), wenn über HTTPS bereitgestellt.
- Oberfläche in **28 Sprachen** verfügbar (Englisch plus 22 lateinschriftliche, 5 kyrillische und Griechisch); Auswahl mit Flaggenemojis im Header.

## Erste Schritte

Öffnen Sie einfach `index.html` in einem modernen Browser. Kein Build, kein Installer, kein Server.

Zum Hosten legen Sie die statischen Dateien (`index.html`, `style.css`, `app.js`, `favicon.svg`, `manifest.webmanifest`, `service-worker.js` und das Verzeichnis `i18n/` mit den 28 Übersetzungsdateien) auf einem beliebigen statischen Host ab (GitHub Pages, Netlify, eigener Webserver). Auch über `file://` funktioniert es — die Service-Worker-Registrierung wird beim Protokoll `file:` automatisch übersprungen, sodass das direkte Öffnen von `index.html` von der Festplatte sauber funktioniert.

Wenn die App über HTTPS bereitgestellt wird, lässt sie sich als PWA installieren (über das Menü *Installieren* / *Zum Startbildschirm hinzufügen* des Browsers) und funktioniert nach dem ersten Besuch dank eines cache-first Service Workers, der alle statischen Dateien (Oberfläche + alle Übersetzungen) vorab cached, vollständig offline.

Beim ersten Besuch wird automatisch ein Standard-Logbuch angelegt, sodass Sie sofort mit dem Loggen beginnen können.

## Als PWA auf dem Handy installieren

Wenn die App über HTTPS bereitgestellt wird (z. B. GitHub Pages), können Sie sie auf dem Startbildschirm Ihres Telefons installieren, sodass sie im Vollbild ohne Browser-Chrome läuft. Nach dem ersten Start cached der Service Worker alles, sodass folgende Starts vollständig offline funktionieren.

### iOS (nur Safari)

Auf iOS kann nur Safari PWAs installieren — Drittanbieter-Browser nicht.

1. Öffnen Sie die Seite in **Safari**.
2. Tippen Sie auf die Schaltfläche **Teilen**.
3. Wählen Sie **Zum Home-Bildschirm**, dann **Hinzufügen**.

Walkthrough:

![iOS-Installations-Walkthrough](media/iOS_add_to_home_screen.gif)

Höher aufgelöste Quelle: [media/iOS_add_to_home_screen.mp4](media/iOS_add_to_home_screen.mp4).

### Android (Chrome / Edge / Firefox)

1. Öffnen Sie die Seite in Ihrem Browser. Ein Hinweis *App installieren* erscheint möglicherweise automatisch.
2. Andernfalls öffnen Sie das **⋮-Menü** → **App installieren** (oder **Zum Startbildschirm hinzufügen** in älteren Versionen).

Walkthrough:

![Android-Installations-Walkthrough](media/Android_add_to_home_screen.gif)

Höher aufgelöste Quelle: [media/Android_add_to_home_screen.mp4](media/Android_add_to_home_screen.mp4).

## Logbücher

- **Anlegen:** Geben Sie einen Namen in *Logbuchname* ein und senden Sie ab. Wenn Sie das Feld leer lassen, lautet der Standardname `Log YYYY-MM-DD HH:MM UTC`.
- **Wechseln:** Klicken Sie in der Seitenleiste auf ein beliebiges Logbuch.
- **Umbenennen:** Klicken Sie auf *Umbenennen* im Logbuch-Header. Mit Enter speichern, mit Escape abbrechen.
- **Löschen:** Klicken Sie auf *Logbuch löschen*. Sie werden um Bestätigung gebeten. Wenn Sie das letzte Logbuch löschen, wird automatisch ein neues angelegt.

## QSOs

- Füllen Sie das Formular aus und drücken Sie **QSO eintragen**.
- Das Rufzeichen wird beim Tippen automatisch in Großbuchstaben umgewandelt.
- Datum und Zeit werden auf *jetzt* in UTC vorausgefüllt und nach jedem geloggten QSO zurückgesetzt; Sie können trotzdem beliebige Werte eingeben.
- Band und Betriebsart bleiben über QSOs derselben Session erhalten, sodass Sie sie nicht für jeden Kontakt neu auswählen müssen.
- RST gesendet / RST empfangen, falls leer gelassen, fallen auf **59** für Sprachmodi (SSB/FM/AM/DIGITALVOICE) und auf **599** für CW und Digitalmodi (CW/FT8/FT4/RTTY/PSK31/JT65) zurück.
- Ein *Duplikat in diesem Log*-Chip erscheint unterhalb des Rufzeichenfelds, wenn das Rufzeichen im aktuellen Logbuch bereits existiert. Duplikate werden *nicht* blockiert.
- **Ein QSO bearbeiten** mit der Schaltfläche *Bearbeiten* in der Zeile. Das Formular wechselt in den Modus *QSO aktualisieren*, die Zeile wird hervorgehoben, und eine Schaltfläche *Abbrechen* erscheint. Beim Wechseln des Logbuchs oder Löschen des Logs wird die Bearbeitung automatisch abgebrochen.
- **Ein QSO löschen** mit der Schaltfläche *Löschen* in der Zeile (mit Bestätigung).

## ADIF-Import & -Export

- **Export**: Klicken Sie auf *.adi exportieren* im Logbuch-Header. Eine Datei wird heruntergeladen mit `ADIF_VER 3.1.4` und `PROGRAMID local-qso` im Header. Jeder Datensatz mappt `CALL`, `QSO_DATE`, `TIME_ON`, `BAND`, `MODE`, `RST_SENT`, `RST_RCVD`.
- **Import**: Klicken Sie auf *.adi-Datei importieren* unter dem Logbuch-anlegen-Formular und wählen Sie eine `.adi`/`.adif`-Datei. Es wird ein neues Logbuch erstellt, benannt `Importiert YYYY-MM-DD HH:MM UTC`. Der Import wird nie in ein bestehendes Logbuch zusammengeführt.
- Die Feldlängenangabe wird als Zeichenanzahl interpretiert, was für ASCII-ADIF (alle Standard-QSO-Felder) funktioniert. Mehrbyte-Inhalte in unwesentlichen Textfeldern werden möglicherweise nicht korrekt geparst.

## Datenschutz und Daten

- Alle Daten werden im `localStorage` des Browsers unter dem Schlüssel `local-qso:v1` gespeichert.
- Es werden keinerlei Daten irgendwohin übertragen. Kein Backend, kein API-Aufruf, keine Telemetrie, keine Analyse.
- Browser-Daten löschen, der Inkognito-/Privat-Modus oder ein anderer Browser/anderes Gerät bedeutet ein leeres Logbuch — verwenden Sie *.adi exportieren* für Backups.

## Oberflächensprache

Ein Sprach-Auswahlmenü im Header deckt **28 Sprachen** ab. Wählen Sie eine, und die restliche Oberfläche wird sofort neu gerendert; Ihre Wahl wird zusammen mit Ihren Logs gespeichert und beim nächsten Besuch berücksichtigt. Englisch ist der Standard.

Verfügbare Sprachen (Flaggenemoji + Eigenbezeichnung; innerhalb jeder Schrift alphabetisch):

🇺🇸 English · 🇨🇿 Čeština · 🇩🇰 Dansk · 🇩🇪 Deutsch · 🇪🇪 Eesti · 🇪🇸 Español · 🇫🇷 Français · 🇮🇪 Gaeilge · 🇭🇷 Hrvatski · 🇮🇹 Italiano · 🇱🇻 Latviešu · 🇱🇹 Lietuvių · 🇭🇺 Magyar · 🇳🇱 Nederlands · 🇳🇴 Norsk · 🇵🇱 Polski · 🇵🇹 Português · 🇷🇴 Română · 🇸🇰 Slovenčina · 🇸🇮 Slovenščina · 🇫🇮 Suomi · 🇸🇪 Svenska · 🇧🇾 Беларуская · 🇧🇬 Български · 🇷🇺 Русский · 🇷🇸 Српски · 🇺🇦 Українська · 🇬🇷 Ελληνικά

Universelle technische Bezeichnungen bleiben in ihrer kanonischen Form in allen Sprachen: Bandnamen (`20m`, `70cm`, …), ADIF-Modi-Codes (`SSB`, `FT8`, `CW`, …), `QSO`, `RST`, `UTC` und ISO-Ländercodes.

Fehlt eine Zeichenfolge in Ihrer Sprache? Jede Sprache ist eine einzelne kleine Datei unter [`i18n/`](i18n/) — kopieren Sie `i18n/en.js`, übersetzen Sie die Werte, speichern Sie als `i18n/<code>.js`, dann fügen Sie ein `<script>`-Tag plus eine `<select>`-Option in `index.html` und den Code in `SUPPORTED_LANGS` in `app.js` hinzu.

## Themes

Der Theme-Umschalter im Header wechselt zwischen Tag (Standard) und Nacht. Die Einstellung wird zusammen mit Ihren Logs gespeichert und beim nächsten Besuch berücksichtigt. Native Datums-/Zeitauswählerfolgen dem Theme via `color-scheme`.

## Technische Hinweise

- Single-Page-App, reines HTML + CSS + JavaScript. Keine Frameworks, kein Build, keine Abhängigkeiten.
- Quelldateien:
  - `index.html` — Markup und Meta-Tags.
  - `style.css` — Themes und Layout (Tag-/Nacht-Variablen, Mobile-Media-Queries).
  - `app.js` — State, Persistenz, Rendering, ADIF-Parser/Serializer, Rufzeichenpräfix → Land-Lookup.
  - `favicon.svg` — Inline-SVG-Favicon.
  - `manifest.webmanifest` — Web App Manifest (Name, Theme-Farbe, Scope, Icon), damit die App auf Mobil und Desktop als PWA installierbar ist.
  - `service-worker.js` — Cache-first Service Worker, der bei der Installation jede statische Datei cached, beim Aktivieren alte Caches löscht und die App nach dem ersten Besuch vollständig offline arbeiten lässt. Die Registrierung wird beim Protokoll `file://` automatisch übersprungen, sodass das direkte Öffnen von `index.html` von der Festplatte sauber bleibt.
  - `i18n/<lang>.js` — eine Übersetzungsdatei pro unterstützter Sprache (insgesamt 28). Jede ist eine kleine IIFE, die `window.I18N[<lang>]` eine flache Schlüssel→Zeichenfolge-Map zuweist. `t()` und `applyLanguage()` in `app.js` übernehmen die Lookups (mit Englisch als Fallback) und durchlaufen das DOM, um jedes `[data-i18n*]`-Element zu aktualisieren.
- Getestet mit aktuellen Chromium-, Firefox- und Safari-Browsern (Desktop + iOS).

## Credits

Erstellt von [YL3IM](https://www.qrz.com/db/YL3IM).

Die Länderflaggen basieren auf Unicode-Regional-Indicator-Sequenzen. Sie werden auf macOS, iOS, Linux (mit flaggenfähiger Emoji-Schrift) und Android korrekt dargestellt. Windows enthält keine System-Flaggen-Schrift, sodass Flaggenemojis dort möglicherweise als Buchstabenpaare erscheinen.
