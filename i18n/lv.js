/* Latvian translations for Local QSO Logger. */
(function () {
  window.I18N = window.I18N || {};
  window.I18N.lv = {
    // Header
    "header.brand_by": "Local QSO Logger no",
    "header.tagline_html":
      'Privātumu cienošs amatieru radio QSO žurnāls, kas pilnībā strādā jūsu pārlūkprogrammā. ' +
      'Bez konta, bez servera, bez izsekošanas, bez analītikas &mdash; jūsu žurnāli glabājas tikai pārlūka ' +
      '<code>localStorage</code> atmiņā. ADIF (.adi) imports un eksports, dienas/nakts tēma, strādā bezsaistē, piemērots mobilajām ierīcēm. ' +
      'Atvērtais pirmkods &mdash; <a href="https://github.com/yl3im/local-qso-logger" target="_blank" rel="noopener noreferrer external">skatīt GitHub</a>.',
    "header.theme.day": "Diena",
    "header.theme.night": "Nakts",
    "aria.theme_toggle": "Pārslēgt dienas/nakts tēmu",
    "aria.language": "Saskarnes valoda",

    // Logbook panel
    "logbook.heading": "Žurnāli",
    "logbook.name.label": "Žurnāla nosaukums",
    "logbook.name.placeholder": "Field Day 2026 (auto, ja tukšs)",
    "logbook.create": "Izveidot žurnālu",
    "logbook.import": "Importēt .adi failu",

    // Detail header
    "nolog.empty": "Izvēlieties vai izveidojiet žurnālu, lai sāktu reģistrēt QSO.",
    "detail.rename": "Pārdēvēt",
    "detail.export": "Eksportēt .adi",
    "detail.delete": "Dzēst žurnālu",

    // QSO form
    "qso.block.station": "Stacijas dati",
    "qso.block.operation": "Darbības režīms",
    "qso.block.qso": "QSO dati",
    "qso.station_callsign": "Stacijas izsaukuma signāls",
    "qso.operator": "Operators",
    "qso.callsign": "Izsaukums",
    "qso.callsign.placeholder": "DL1ABC",
    "qso.date": "Datums (UTC)",
    "qso.time": "Laiks (UTC)",
    "qso.band": "Josla",
    "qso.mode": "Veids",
    "qso.prop_mode": "Izplatība",
    "qso.prop_mode.none": "(nav)",
    "qso.sat_name": "Satelīts",
    "qso.band_rx": "RX josla",
    "qso.sat_mode": "Sat režīms",
    "qso.sat_mode.modern": "modernie",
    "qso.sat_mode.deprecated": "novecojušie",
    "qso.gridsquare": "Lokators",
    "qso.gridsquare.placeholder": "KO26BX",
    "qso.my_gridsquare": "Mans lokators",
    "qso.comment": "Komentārs",
    "qso.comment.placeholder": "",
    "qso.rst_sent": "RST nosūtīts",
    "qso.rst_rcvd": "RST saņemts",
    "qso.rst.placeholder": "59",
    "qso.log": "Reģistrēt QSO",
    "qso.update": "Atjaunināt QSO",
    "qso.cancel": "Atcelt",
    "qso.duplicate": "Dublikāts šajā žurnālā",

    // QSO table
    "table.callsign": "Izsaukums",
    "table.time": "Laiks",
    "table.date": "Datums",
    "table.band": "Josla",
    "table.mode": "Veids",
    "table.prop_mode": "Izpl.",
    "table.rst_s": "RST Nos",
    "table.rst_r": "RST Saņ",
    "table.empty": "Vēl nav reģistrēts neviens QSO.",
    "table.edit": "Labot",
    "table.delete": "Dzēst",
    "table.edit.title": "Labot QSO",
    "table.delete.title": "Dzēst QSO",

    // Confirms / alerts
    "confirm.delete_logbook": "Dzēst žurnālu «{0}» un tā {1} QSO ierakstu(s)?",
    "confirm.delete_qso": "Dzēst QSO ar {0}?",
    "confirm.no_callsign": "(bez izsaukuma)",
    "alert.no_qsos_in_adif": "Šajā ADIF failā nav atrasts neviens QSO ieraksts.",
    "alert.import_failed": "Neizdevās importēt failu: {0}",

    // Counts / generated names
    "count.qso_one": "{0} QSO",
    "count.qso_many": "{0} QSO",
    "log.default_prefix": "Žurnāls",
    "log.imported_prefix": "Importēts",
    "log.utc_suffix": "UTC",
  };
})();
