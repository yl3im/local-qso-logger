/* Hungarian translations for Local QSO Logger. */
(function () {
  window.I18N = window.I18N || {};
  window.I18N.hu = {
    "header.brand_by": "Local QSO Logger — készítette",
    "header.tagline_html":
      'Adatvédelmet tisztelő amatőr rádió QSO-napló, amely teljes egészében a böngészőjében fut. ' +
      'Nincs fiók, nincs szerver, nincs követés, nincs analitika &mdash; naplói kizárólag a böngésző ' +
      '<code>localStorage</code> tárában találhatók. ADIF (.adi) import és export, nappali/éjszakai téma, offline működés, mobilbarát. ' +
      'Nyílt forráskódú &mdash; <a href="https://github.com/yl3im/local-qso-logger" target="_blank" rel="noopener noreferrer external">megnézés a GitHubon</a>.',
    "header.theme.day": "Nappal",
    "header.theme.night": "Éjszaka",
    "aria.theme_toggle": "Nappali/éjszakai téma váltása",
    "aria.language": "Felhasználói felület nyelve",

    "logbook.heading": "Naplók",
    "logbook.name.label": "Napló neve",
    "logbook.name.placeholder": "Field Day 2026 (auto, ha üres)",
    "logbook.create": "Napló létrehozása",
    "logbook.import": ".adi fájl importálása",

    "nolog.empty": "Válasszon vagy hozzon létre egy naplót QSO-k rögzítéséhez.",
    "detail.rename": "Átnevezés",
    "detail.export": ".adi exportálása",
    "detail.delete": "Napló törlése",

    "qso.callsign": "Hívójel",
    "qso.callsign.placeholder": "DL1ABC",
    "qso.date": "Dátum (UTC)",
    "qso.time": "Idő (UTC)",
    "qso.band": "Sáv",
    "qso.mode": "Mód",
    "qso.rst_sent": "RST adott",
    "qso.rst_rcvd": "RST kapott",
    "qso.rst.placeholder": "59",
    "qso.log": "QSO rögzítése",
    "qso.update": "QSO frissítése",
    "qso.cancel": "Mégse",
    "qso.duplicate": "Duplikátum ebben a naplóban",

    "table.callsign": "Hívójel",
    "table.time": "Idő",
    "table.date": "Dátum",
    "table.band": "Sáv",
    "table.mode": "Mód",
    "table.rst_s": "RST A",
    "table.rst_r": "RST K",
    "table.empty": "Még nincs rögzített QSO.",
    "table.edit": "Szerk.",
    "table.delete": "Törlés",
    "table.edit.title": "QSO szerkesztése",
    "table.delete.title": "QSO törlése",

    "confirm.delete_logbook": "Törli a(z) „{0}\" naplót és annak {1} QSO-ját?",
    "confirm.delete_qso": "Törli a QSO-t {0} hívójellel?",
    "confirm.no_callsign": "(nincs hívójel)",
    "alert.no_qsos_in_adif": "Ebben az ADIF fájlban nem található QSO.",
    "alert.import_failed": "A fájl importálása sikertelen: {0}",

    "count.qso_one": "{0} QSO",
    "count.qso_many": "{0} QSO",
    "log.default_prefix": "Napló",
    "log.imported_prefix": "Importálva",
    "log.utc_suffix": "UTC",
  };
})();
