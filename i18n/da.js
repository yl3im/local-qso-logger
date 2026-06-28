/* Danish translations for Local QSO Logger. */
(function () {
  window.I18N = window.I18N || {};
  window.I18N.da = {
    "header.brand_by": "Local QSO Logger af",
    "header.tagline_html":
      'En privatlivsrespekterende amatørradio-QSO-logger, der kører helt i din browser. ' +
      'Ingen konto, ingen server, ingen sporing, ingen analyse &mdash; dine logbøger findes kun i browserens ' +
      '<code>localStorage</code>. ADIF (.adi) import &amp; eksport, dag-/nattema, virker offline, mobilvenlig. ' +
      'Open source &mdash; <a href="https://github.com/yl3im/local-qso-logger" target="_blank" rel="noopener noreferrer external">se det på GitHub</a>.',
    "header.theme.day": "Dag",
    "header.theme.night": "Nat",
    "aria.theme_toggle": "Skift dag-/nattilstand",
    "aria.language": "Brugerfladesprog",

    "logbook.heading": "Logbøger",
    "logbook.name.label": "Logbogsnavn",
    "logbook.name.placeholder": "Field Day 2026 (auto hvis tomt)",
    "logbook.create": "Opret logbog",
    "logbook.import": "Importér .adi-fil",

    "nolog.empty": "Vælg eller opret en logbog for at begynde at logge QSO.",
    "detail.rename": "Omdøb",
    "detail.export": "Eksportér .adi",
    "detail.delete": "Slet logbog",

    "qso.callsign": "Kaldesignal",
    "qso.callsign.placeholder": "DL1ABC",
    "qso.date": "Dato (UTC)",
    "qso.time": "Tid (UTC)",
    "qso.band": "Bånd",
    "qso.mode": "Modulation",
    "qso.rst_sent": "RST sendt",
    "qso.rst_rcvd": "RST modtaget",
    "qso.rst.placeholder": "59",
    "qso.log": "Log QSO",
    "qso.update": "Opdater QSO",
    "qso.cancel": "Annuller",
    "qso.duplicate": "Dublet i denne logbog",

    "table.callsign": "Kaldesignal",
    "table.time": "Tid",
    "table.date": "Dato",
    "table.band": "Bånd",
    "table.mode": "Modulation",
    "table.rst_s": "RST S",
    "table.rst_r": "RST M",
    "table.empty": "Ingen QSO logget endnu.",
    "table.edit": "Rediger",
    "table.delete": "Slet",
    "table.edit.title": "Rediger QSO",
    "table.delete.title": "Slet QSO",

    "confirm.delete_logbook": "Slet logbogen „{0}\" og dens {1} QSO?",
    "confirm.delete_qso": "Slet QSO med {0}?",
    "confirm.no_callsign": "(intet kaldesignal)",
    "alert.no_qsos_in_adif": "Ingen QSO-poster fundet i denne ADIF-fil.",
    "alert.import_failed": "Kunne ikke importere filen: {0}",

    "count.qso_one": "{0} QSO",
    "count.qso_many": "{0} QSO",
    "log.default_prefix": "Log",
    "log.imported_prefix": "Importeret",
    "log.utc_suffix": "UTC",
  };
})();
