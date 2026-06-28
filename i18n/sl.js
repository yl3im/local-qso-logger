/* Slovenian translations for Local QSO Logger. */
(function () {
  window.I18N = window.I18N || {};
  window.I18N.sl = {
    "header.brand_by": "Local QSO Logger avtor",
    "header.tagline_html":
      'QSO dnevnik za radioamaterje, ki spoštuje zasebnost in deluje v celoti v vašem brskalniku. ' +
      'Brez računa, brez strežnika, brez sledenja, brez analitike &mdash; vaši dnevniki obstajajo le v ' +
      '<code>localStorage</code> brskalnika. Uvoz in izvoz ADIF (.adi), tema dan/noč, deluje brez povezave, prijazno do mobilnih naprav. ' +
      'Odprta koda &mdash; <a href="https://github.com/yl3im/local-qso-logger" target="_blank" rel="noopener noreferrer external">poglej na GitHubu</a>.',
    "header.theme.day": "Dan",
    "header.theme.night": "Noč",
    "aria.theme_toggle": "Preklopi temo dan/noč",
    "aria.language": "Jezik vmesnika",

    "logbook.heading": "Dnevniki",
    "logbook.name.label": "Ime dnevnika",
    "logbook.name.placeholder": "Field Day 2026 (samodejno, če je prazno)",
    "logbook.create": "Ustvari dnevnik",
    "logbook.import": "Uvozi datoteko .adi",

    "nolog.empty": "Izberite ali ustvarite dnevnik za začetek beleženja QSO.",
    "detail.rename": "Preimenuj",
    "detail.export": "Izvozi .adi",
    "detail.delete": "Izbriši dnevnik",

    "qso.callsign": "Klicni znak",
    "qso.callsign.placeholder": "DL1ABC",
    "qso.date": "Datum (UTC)",
    "qso.time": "Čas (UTC)",
    "qso.band": "Pas",
    "qso.mode": "Vrsta",
    "qso.rst_sent": "RST oddan",
    "qso.rst_rcvd": "RST sprejet",
    "qso.rst.placeholder": "59",
    "qso.log": "Zabeleži QSO",
    "qso.update": "Posodobi QSO",
    "qso.cancel": "Prekliči",
    "qso.duplicate": "Dvojnik v tem dnevniku",

    "table.callsign": "Znak",
    "table.time": "Čas",
    "table.date": "Datum",
    "table.band": "Pas",
    "table.mode": "Vrsta",
    "table.rst_s": "RST O",
    "table.rst_r": "RST S",
    "table.empty": "Še ni zabeleženih QSO.",
    "table.edit": "Uredi",
    "table.delete": "Izbriši",
    "table.edit.title": "Uredi QSO",
    "table.delete.title": "Izbriši QSO",

    "confirm.delete_logbook": "Izbrišem dnevnik »{0}« in njegovih {1} QSO?",
    "confirm.delete_qso": "Izbrišem QSO z {0}?",
    "confirm.no_callsign": "(brez klicnega znaka)",
    "alert.no_qsos_in_adif": "V tej datoteki ADIF ni najdenih QSO.",
    "alert.import_failed": "Uvoz datoteke ni uspel: {0}",

    "count.qso_one": "{0} QSO",
    "count.qso_many": "{0} QSO",
    "log.default_prefix": "Dnevnik",
    "log.imported_prefix": "Uvožen",
    "log.utc_suffix": "UTC",
  };
})();
