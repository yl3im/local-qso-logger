# Local QSO Logger

## In deiner Sprache lesen

🇺🇸 [English](README.md) · 🇨🇿 [Čeština](README.cs.md) · 🇩🇰 [Dansk](README.da.md) · 🇩🇪 Deutsch · 🇪🇪 [Eesti](README.et.md) · 🇪🇸 [Español](README.es.md) · 🇫🇷 [Français](README.fr.md) · 🇮🇪 [Gaeilge](README.ga.md) · 🇭🇷 [Hrvatski](README.hr.md) · 🇮🇹 [Italiano](README.it.md) · 🇱🇻 [Latviešu](README.lv.md) · 🇱🇹 [Lietuvių](README.lt.md) · 🇭🇺 [Magyar](README.hu.md) · 🇳🇱 [Nederlands](README.nl.md) · 🇳🇴 [Norsk](README.no.md) · 🇵🇱 [Polski](README.pl.md) · 🇵🇹 [Português](README.pt.md) · 🇷🇴 [Română](README.ro.md) · 🇸🇰 [Slovenčina](README.sk.md) · 🇸🇮 [Slovenščina](README.sl.md) · 🇫🇮 [Suomi](README.fi.md) · 🇸🇪 [Svenska](README.sv.md) · 🇧🇾 [Беларуская](README.be.md) · 🇧🇬 [Български](README.bg.md) · 🇷🇺 [Русский](README.ru.md) · 🇷🇸 [Српски](README.sr.md) · 🇺🇦 [Українська](README.uk.md) · 🇬🇷 [Ελληνικά](README.el.md)

Ein datenschutzfreundlicher Amateurfunk-QSO-Logger, der vollständig im Browser läuft. Kein Konto, kein Server, kein Tracking, keine Analytik — deine Logbücher leben ausschließlich im `localStorage` deines Browsers und verlassen niemals dein Gerät.

Von [YL3IM](https://www.qrz.com/db/YL3IM). Projektwebseite: [qso.ham.lv](https://qso.ham.lv).

![Local QSO Logger auf einem iPad](media/iPad.png)

## Inhalt

- [In deiner Sprache lesen](#in-deiner-sprache-lesen)
- [Funktionen](#funktionen)
- [Erste Schritte](#erste-schritte)
- [Als PWA auf dem Mobilgerät installieren](#als-pwa-auf-dem-mobilgerät-installieren)
  - [iOS (nur Safari)](#ios-nur-safari)
  - [Android (Chrome / Edge / Firefox)](#android-chrome--edge--firefox)
- [Logbücher](#logbücher)
- [QSOs](#qsos)
- [ADIF-Import und -Export](#adif-import-und--export)
- [Datenschutz und Daten](#datenschutz-und-daten)
- [Oberflächensprache](#oberflächensprache)
- [Themes](#themes)
- [Technische Hinweise](#technische-hinweise)
- [Danksagungen](#danksagungen)

## Funktionen

- Mehrere Logbücher; jedes mit eigener QSO-Liste.
- Logbuch-Aktionen: Erstellen, Umbenennen, Löschen, Import aus ADIF, Export nach ADIF (`.adi`).
- QSO-Formular in drei Blöcke gegliedert: **Stationsdaten** (Stationsrufzeichen, Operatorrufzeichen, eigenes Locator-Feld) bleiben über QSOs hinweg haften; **Betriebsart** (Ausbreitungsmodus, Satellit, Betriebsart, Sat-Mode, Band, RX-Band) mit Satellitenfeldern, die nur sichtbar sind, wenn der Ausbreitungsmodus *Satellit* ist; und **QSO-Daten** (kontaktiertes Rufzeichen, Locator der Gegenstation, UTC-Datum/-Uhrzeit beim Bearbeiten, Kommentar, RST gesendet, RST empfangen).
- Vollständige ADIF-`MODE` → `SUBMODE`-Taxonomie im Betriebsart-Dropdown — wähle eine übergeordnete Betriebsart (`SSB`, `MFSK`, …) oder gehe direkt zu einer spezifischen Unterbetriebsart (`USB`, `FT4`, …); die App speichert beide Felder gemäß ADIF, und die Tabelle zeigt die spezifische Unterbetriebsart wenn vorhanden.
- Vollständige ADIF-Ausbreitungsmodus-Aufzählung (SAT, RPT, EME, ES, MS, Aurora usw.) als Dropdown.
- Vollständiger AMSAT-Satellitenkatalog (~110 Satelliten) und ein zweistufiges **Sat-Mode**-Dropdown: bevorzugte zweistellige Uplink/Downlink-Codes oben (LU, LV, SX, UU, UV, VA, VU, VV) und die älteren einstelligen Bezeichnungen (A/B/J/K/L/R/S/T/U/V/W/X) als *veraltet* gruppiert unten. Die Wahl eines Sat-Modes passt automatisch `BAND` (Uplink) und `RX band` (Downlink) an.
- Bearbeitung und Löschung beliebiger QSOs (mit Bestätigung beim Löschen).
- Sinnvolle Voreinstellungen: UTC-Datum/-Uhrzeit auf *jetzt* vorausgefüllt, betriebsartbewusste RST-Standards (59 für Sprachbetriebsarten, 599 für CW/Digi), klebende Stationsdaten + Band + Betriebsart + Ausbreitungsmodus über aufeinanderfolgende QSOs (nur die pro-Kontakt-Felder — Rufzeichen, Locator, Kommentar, RST — werden nach jedem *QSO loggen* geleert).
- Live-Duplikat-Rufzeichen-Anzeige (informativ — Duplikate sind erlaubt).
- Länderflaggen-Spalte aus dem Rufzeichenpräfix abgeleitet (deckt ≥99 % gängiger Amateurfunk-Präfixe ab, einschließlich Portabelbetrieb wie `9A/M0NCG`).
- Lokalisierte Datumsanzeige in der QSO-Tabelle; ISO-Speicherung und ADIF-Ausgabe bleiben unverändert.
- Oberfläche in **28 Sprachen** verfügbar (Englisch plus 22 lateinische, 5 kyrillische und Griechisch); Flaggen-Emoji-Selektor im Header.
- Tag-/Nacht-Themes (Tag ist Standard; der Umschalter ist im Header).
- Mobilfreundliches responsives Layout mit berührungsgerechten Schaltflächen.
- Funktioniert vollständig offline — keine Netzwerkanfragen zu irgendeinem Zeitpunkt.
- Als PWA installierbar (Zum Startbildschirm hinzufügen / App installieren) bei Hosting über HTTPS.

## Erste Schritte

Öffne einfach `index.html` in einem modernen Browser. Kein Build-Schritt, keine Installation, kein Server.

Wenn du es hosten möchtest, lege die statischen Dateien (`index.html`, `style.css`, `app.js`, `favicon.svg`, `manifest.webmanifest`, `service-worker.js` und das Verzeichnis `i18n/` mit den 28 Übersetzungsdateien) auf einen beliebigen statischen Host (GitHub Pages, Netlify, eigener Webserver). Es funktioniert auch über `file://` — die Service-Worker-Registrierung wird auf dem `file:`-Protokoll automatisch übersprungen, sodass das direkte Öffnen von `index.html` von der Festplatte sauber funktioniert.

Bei Hosting über HTTPS wird die App als PWA installierbar (Menü *App installieren* / *Zum Startbildschirm hinzufügen* im Browser) und funktioniert nach dem ersten Besuch dank eines Cache-First-Service-Workers, der alle statischen Dateien (UI + alle Übersetzungen) vorauszwischenspeichert, offline.

Beim ersten Besuch wird automatisch ein Standard-Logbuch erstellt, sodass du sofort mit dem Loggen beginnen kannst.

## Als PWA auf dem Mobilgerät installieren

Wenn die App über HTTPS gehostet wird (z. B. GitHub Pages), kannst du sie auf dem Startbildschirm deines Telefons installieren, wo sie vollbildschirmig ohne Browserkopfleiste läuft. Nach dem ersten Start speichert der Service Worker alles zwischen, sodass nachfolgende Starts vollständig offline funktionieren.

### iOS (nur Safari)

Unter iOS können nur Safari PWAs installieren — Browser von Drittanbietern nicht.

1. Öffne die Seite in **Safari**.
2. Tippe auf die Schaltfläche **Teilen**.
3. Wähle **Zum Home-Bildschirm**, dann **Hinzufügen**.

Anleitung:

![iOS-Installationsanleitung](media/iOS_add_to_home_screen.gif)

Quelle in höherer Qualität: [media/iOS_add_to_home_screen.mp4](media/iOS_add_to_home_screen.mp4).

### Android (Chrome / Edge / Firefox)

1. Öffne die Seite im Browser. Eine Aufforderung zum *App installieren* erscheint möglicherweise automatisch.
2. Andernfalls öffne das **⋮-Menü** → **App installieren** (oder **Zum Startbildschirm hinzufügen** bei älteren Versionen).

Anleitung:

![Android-Installationsanleitung](media/Android_add_to_home_screen.gif)

Quelle in höherer Qualität: [media/Android_add_to_home_screen.mp4](media/Android_add_to_home_screen.mp4).

## Logbücher

- **Erstellen:** gib einen Namen im Feld *Log-Name* ein und bestätige. Wenn du den Namen leer lässt, wird `Log YYYY-MM-DD HH:MM UTC` als Standard verwendet.
- **Wechseln:** klicke auf ein Logbuch in der Seitenleiste.
- **Umbenennen:** klicke auf *Umbenennen* in der Logbuch-Kopfzeile. Enter zum Speichern, Escape zum Abbrechen.
- **Löschen:** klicke auf *Log löschen*. Du wirst zur Bestätigung aufgefordert. Wenn du das letzte Logbuch löschst, wird automatisch ein neues erstellt.

## QSOs

- Fülle das Formular aus und drücke **QSO loggen**.
- Das Formular ist in drei Blöcke gegliedert:
  - **Stationsdaten** — *Stationsrufzeichen* (dein Senderufzeichen, ADIF `STATION_CALLSIGN`), *Operator* (das Rufzeichen des einzelnen Operators — unterscheidet sich vom *Stationsrufzeichen*, wenn ein Gastoperator am Mikrofon einer Klubstation sitzt; ADIF `OPERATOR`) und *Mein Locator* (ADIF `MY_GRIDSQUARE`). Diese bleiben sitzungsübergreifend über QSOs haften — einmal setzen und sie übertragen sich.
  - **Betriebsart** — *Ausbreitungsmodus*, *Betriebsart*, *Band*, plus die Satelliten-Felder *Satellit* / *Sat-Mode* / *RX-Band* wenn der Ausbreitungsmodus *Satellit* ist. Band, Betriebsart und Ausbreitungsmodus haften wie Stationsdaten.
  - **QSO-Daten** — pro-Kontakt-Felder: *Rufzeichen*, *Locator* (Maidenhead der Gegenstation), *Kommentar* (ADIF `COMMENT`), *RST gesendet*, *RST empfangen*. Beim Bearbeiten eines bestehenden QSOs erscheinen in diesem Block auch *Datum (UTC)* und *Uhrzeit (UTC)*. Diese Felder werden nach jedem *QSO loggen* geleert.
- Alle Rufzeichen (kontaktiert, Station, Operator) werden beim Tippen automatisch großgeschrieben; beide Locator-Felder machen dasselbe.
- Datum und Uhrzeit werden beim Absenden auf *jetzt* in UTC vorausgefüllt; beim Bearbeiten kannst du einen beliebigen Wert eingeben.
- RST gesendet / RST empfangen, wenn leer gelassen, sind standardmäßig **59** für Sprachbetriebsarten (SSB/FM/DIGITALVOICE) und **599** für CW und digitale Betriebsarten (CW/FT8/FT4/RTTY/PSK31/JT65). Der Standard folgt der übergeordneten MODE, sodass die Wahl einer spezifischen Unterbetriebsart wie *USB* oder *FT4* noch den richtigen Standard ergibt.
- Ein Chip *Duplikat in diesem Log* erscheint unter dem Rufzeichen-Feld, wenn das Rufzeichen bereits im aktuellen Logbuch vorhanden ist. Duplikate werden *nicht* blockiert.
- **Ausbreitungsmodus** — optionales Dropdown der ADIF-Ausbreitungsmodi (SAT, RPT, EME, F2, Es, MS, LOS usw.). Für normale terrestrische HF-QSOs leer lassen.
- **Satelliten-QSOs** — die Wahl des Ausbreitungsmodus *Satellit* zeigt drei Satellit-Felder: **Satellit** (Dropdown mit ~110 AMSAT-registrierten Satelliten), **Sat-Mode** (AMSAT-Buchstabenbezeichnungen, gruppiert als *moderne* zweistellige Uplink/Downlink-Codes oben und *veraltete* einstellige Codes unten) und **RX-Band** (Downlink-Band). Satellit, Sat-Mode und RX-Band sind Pflichtfelder — der Browser verweigert das Absenden ohne sie. Die Wahl eines **Sat-Modes** füllt automatisch das Haupt-**Band** mit dem Uplink-Band und **RX-Band** mit dem Downlink-Band (z. B. Mode J → 2m Uplink, 70cm Downlink). Das Zurückwechseln zu Satellit von einem anderen Ausbreitungsmodus setzt den Sat-Mode zurück, damit ein neuer gewählt wird. Nicht-Satelliten-QSOs tragen niemals Satelliten-Felder; das Umschalten eines bestehenden QSOs von Satellit zu einem anderen Ausbreitungsmodus entfernt sie sauber. **Locator** und **Mein Locator** sind allgemeine Felder (auch nützlich für VHF/UHF-Locator-Wettbewerbe) und bleiben für alle QSOs sichtbar.
- **Ein QSO bearbeiten** mit der Schaltfläche *Bearbeiten* in der Zeile. Das Formular wechselt in den Modus *QSO aktualisieren*, die Zeile wird hervorgehoben, und eine Schaltfläche *Abbrechen* erscheint. Das Wechseln von Logbüchern oder das Löschen des Logs bricht die Bearbeitung automatisch ab.
- **Ein QSO löschen** mit der Schaltfläche *Löschen* in der Zeile (fragt nach Bestätigung).

## ADIF-Import und -Export

- **Export**: klicke auf *Als .adi exportieren* in der Logbuch-Kopfzeile. Eine Datei wird heruntergeladen, die **ADIF 3.1.7** entspricht. Der Header deklariert `ADIF_VER 3.1.7`, `PROGRAMID local-qso`, `PROGRAMVERSION` und `CREATED_TIMESTAMP` (UTC). Pro-QSO-Felder (wenn nicht leer): `CALL`, `QSO_DATE`, `TIME_ON`, `BAND`, `MODE`, `SUBMODE`, `PROP_MODE`, `GRIDSQUARE`, `BAND_RX`, `SAT_MODE`, `SAT_NAME`, `RST_SENT`, `RST_RCVD`, `COMMENT`, `STATION_CALLSIGN`, `OPERATOR`, `MY_GRIDSQUARE` — gefolgt von jedem beim Import erhaltenen ADIF-Zusatzfeld (siehe unten).
- **Import**: klicke auf *ADI-Datei importieren* unter dem Logbuch-Erstellen-Formular und wähle eine `.adi` / `.adif`-Datei. Ein neues Logbuch wird daraus erstellt, benannt `Imported YYYY-MM-DD HH:MM UTC`. Import führt niemals mit einem bestehenden Logbuch zusammen.
- **Verlustfreier Durchlauf**: beim Import wird jedes ADIF-Feld, das die App nicht in ihrer UI modelliert (z. B. `NAME`, `FREQ`, `TX_PWR`, `DXCC`, `QSL_SENT`/`QSL_RCVD`, `POTA_REF`, `APP_*`-Felder), im QSO gespeichert und beim nächsten Export unverändert wieder ausgegeben. Der Export einer Datei, die selbst importiert wurde, erhält damit alles.
- Die Feldlänge wird als UTF-8-Byteanzahl behandelt, wie die Spezifikation es erfordert, sodass Mehrbytetext (z. B. akzentuierte Zeichen in `COMMENT`) korrekt geparst wird.

## Datenschutz und Daten

- Alle Daten werden im `localStorage` deines Browsers unter dem Schlüssel `local-qso:v1` gespeichert.
- Es wird nichts irgendwohin übertragen. Es gibt kein Backend, keinen API-Aufruf, keine Telemetrie, keine Analytik.
- Das Löschen der Browser-Seiten-Daten, die Verwendung des Privat-/Inkognito-Modus oder eines anderen Browsers/Geräts bedeutet ein neues leeres Logbuch — verwende *Als .adi exportieren* zur Sicherung.

## Oberflächensprache

Ein Sprachselektor im Header deckt **28 Sprachen** ab. Wähle eine aus, und der Rest der Oberfläche wird sofort neu gerendert; deine Wahl wird neben deinen Logs gespeichert und beim nächsten Besuch berücksichtigt. Englisch ist die Standardsprache.

Verfügbare Sprachen (Flaggen-Emoji + Eigenname; alphabetisch innerhalb jedes Schriftsystems geordnet):

🇺🇸 English · 🇨🇿 Čeština · 🇩🇰 Dansk · 🇩🇪 Deutsch · 🇪🇪 Eesti · 🇪🇸 Español · 🇫🇷 Français · 🇮🇪 Gaeilge · 🇭🇷 Hrvatski · 🇮🇹 Italiano · 🇱🇻 Latviešu · 🇱🇹 Lietuvių · 🇭🇺 Magyar · 🇳🇱 Nederlands · 🇳🇴 Norsk · 🇵🇱 Polski · 🇵🇹 Português · 🇷🇴 Română · 🇸🇰 Slovenčina · 🇸🇮 Slovenščina · 🇫🇮 Suomi · 🇸🇪 Svenska · 🇧🇾 Беларуская · 🇧🇬 Български · 🇷🇺 Русский · 🇷🇸 Српски · 🇺🇦 Українська · 🇬🇷 Ελληνικά

Universelle technische Bezeichnungen bleiben in allen Sprachen in ihrer kanonischen Form: Bandbezeichnungen (`20m`, `70cm`, …), ADIF-Betriebsartkürzel (`SSB`, `FT8`, `CW`, …), `QSO`, `RST`, `UTC` und ISO-Ländercodes.

Fehlt ein String in deiner Sprache? Jede Sprache ist eine einzige kleine Datei unter [`i18n/`](i18n/) — kopiere `i18n/en.js`, übersetze die Werte, speichere als `i18n/<code>.js`, füge dann ein `<script>`-Tag plus eine `<select>`-Option in `index.html` und den Code in `SUPPORTED_LANGS` in `app.js` hinzu.

## Themes

Der Theme-Umschalter im Header wechselt zwischen Tag (Standard) und Nacht. Die Einstellung wird neben deinen Logs gespeichert und beim nächsten Besuch berücksichtigt. Native Datum-/Uhrzeit-Auswähler folgen dem Theme über `color-scheme`.

## Technische Hinweise

- Single-Page-App, reines HTML + CSS + JavaScript. Keine Frameworks, kein Build-Schritt, keine Abhängigkeiten.
- Quelldateien:
  - `index.html` — Markup und Meta-Tags.
  - `style.css` — Themes und Layout (Tag/Nacht-Variablen, Mobile-Media-Queries).
  - `app.js` — Zustand, Persistenz, Rendering, ADIF-Parser/Serializer, Rufzeichenpräfix → Länder-Lookup.
  - `favicon.svg` — Inline-SVG-Favicon.
  - `manifest.webmanifest` — Web App Manifest (Name, Theme-Farbe, Scope, Icon), damit die App als PWA auf Mobilgeräten und dem Desktop installierbar ist.
  - `service-worker.js` — Cache-First-Service-Worker, der alle statischen Dateien bei der Installation vorauszwischenspeichert, alte Caches bei der Aktivierung löscht und die App nach dem ersten Besuch vollständig offline hält. Die Registrierung wird auf dem `file://`-Protokoll automatisch übersprungen, sodass das direkte Öffnen von `index.html` von der Festplatte sauber bleibt.
  - `i18n/<lang>.js` — eine Übersetzungsdatei pro unterstützter Sprache (28 insgesamt). Jede ist ein kleines IIFE, das `window.I18N[<lang>]` eine flache Schlüssel→Wert-Map zuweist. `t()` und `applyLanguage()` in `app.js` verarbeiten Lookups (mit englischem Fallback) und durchlaufen das DOM und aktualisieren jedes `[data-i18n*]`-Element.
- Getestet auf aktuellem Chromium, Firefox und Safari (Desktop + iOS).

## Danksagungen

Erstellt von [YL3IM](https://www.qrz.com/db/YL3IM).

Dank an [A65BR](https://www.qrz.com/db/A65BR) Oleg für die unschätzbaren Hinweise, die den Satellitenteil wirklich nutzbar gemacht haben — die modernen zweistelligen Sat-Mode-Bezeichnungen, der AMSAT-Katalog und die automatische Uplink/Downlink-Anpassung gehen allesamt auf sein Feedback zurück.

Länderflaggen beruhen auf Unicode-Regional-Indikator-Sequenzen. Sie werden auf macOS, iOS, Linux (mit einem flaggenfähigen Emoji-Font) und Android korrekt dargestellt. Windows enthält keinen System-Flaggen-Font, sodass Flaggen-Emoji dort als Buchstabenpaare erscheinen können.
