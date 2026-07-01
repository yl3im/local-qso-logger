/* Lithuanian translations for Local QSO Logger. */
(function () {
  window.I18N = window.I18N || {};
  window.I18N.lt = {
    "header.brand_by": "Local QSO Logger autorius",
    "header.tagline_html":
      'Privatumą gerbiantis radijo mėgėjų QSO žurnalas, veikiantis tik jūsų naršyklėje. ' +
      'Be paskyros, be serverio, be sekimo, be analitikos &mdash; jūsų žurnalai saugomi tik naršyklės ' +
      '<code>localStorage</code> atmintyje. ADIF (.adi) importas ir eksportas, dienos/nakties tema, veikia neprisijungus, pritaikyta mobiliesiems. ' +
      'Atvirojo kodo &mdash; <a href="https://github.com/yl3im/local-qso-logger" target="_blank" rel="noopener noreferrer external">žiūrėti GitHub</a>.',
    "header.theme.day": "Diena",
    "header.theme.night": "Naktis",
    "aria.theme_toggle": "Perjungti dienos/nakties temą",
    "aria.language": "Sąsajos kalba",

    "logbook.heading": "Žurnalai",
    "logbook.name.label": "Žurnalo pavadinimas",
    "logbook.name.placeholder": "Field Day 2026 (auto, jei tuščia)",
    "logbook.create": "Sukurti žurnalą",
    "logbook.import": "Importuoti .adi failą",

    "nolog.empty": "Pasirinkite arba sukurkite žurnalą, kad pradėtumėte registruoti QSO.",
    "detail.rename": "Pervadinti",
    "detail.export": "Eksportuoti .adi",
    "detail.delete": "Ištrinti žurnalą",

    "qso.block.station": "Stoties duomenys",
    "qso.block.operation": "Darbo režimas",
    "qso.block.qso": "QSO duomenys",
    "qso.station_callsign": "Stoties šaukinys",
    "qso.operator": "Operatorius",
    "qso.operator.placeholder": "Jonas Jonaitis",
    "qso.callsign": "Šaukinys",
    "qso.callsign.placeholder": "DL1ABC",
    "qso.date": "Data (UTC)",
    "qso.time": "Laikas (UTC)",
    "qso.band": "Diapazonas",
    "qso.mode": "Modas",
    "qso.prop_mode": "Sklidimas",
    "qso.prop_mode.none": "(nėra)",
    "qso.sat_name": "Palydovas",
    "qso.band_rx": "RX diapazonas",
    "qso.sat_mode": "Sat modas",
    "qso.gridsquare": "Lokatorius",
    "qso.gridsquare.placeholder": "KO26BX",
    "qso.my_gridsquare": "Mano lokatorius",
    "qso.comment": "Komentaras",
    "qso.comment.placeholder": "",
    "qso.rst_sent": "RST išsiųsta",
    "qso.rst_rcvd": "RST gauta",
    "qso.rst.placeholder": "59",
    "qso.log": "Įrašyti QSO",
    "qso.update": "Atnaujinti QSO",
    "qso.cancel": "Atšaukti",
    "qso.duplicate": "Dublikatas šiame žurnale",

    "table.callsign": "Šaukinys",
    "table.time": "Laikas",
    "table.date": "Data",
    "table.band": "Diapazonas",
    "table.mode": "Modas",
    "table.prop_mode": "Skl.",
    "table.rst_s": "RST I",
    "table.rst_r": "RST G",
    "table.empty": "QSO dar neįrašyta.",
    "table.edit": "Redag.",
    "table.delete": "Trinti",
    "table.edit.title": "Redaguoti QSO",
    "table.delete.title": "Ištrinti QSO",

    "confirm.delete_logbook": "Ištrinti žurnalą „{0}\" ir jo {1} QSO?",
    "confirm.delete_qso": "Ištrinti QSO su {0}?",
    "confirm.no_callsign": "(be šaukinio)",
    "alert.no_qsos_in_adif": "Šiame ADIF faile QSO įrašų nerasta.",
    "alert.import_failed": "Nepavyko importuoti failo: {0}",

    "count.qso_one": "{0} QSO",
    "count.qso_many": "{0} QSO",
    "log.default_prefix": "Žurnalas",
    "log.imported_prefix": "Importuota",
    "log.utc_suffix": "UTC",
  };
})();
