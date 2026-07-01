/* Slovak translations for Local QSO Logger. */
(function () {
  window.I18N = window.I18N || {};
  window.I18N.sk = {
    "header.brand_by": "Local QSO Logger od",
    "header.tagline_html":
      'QSO denník pre rádioamatérov rešpektujúci súkromie, ktorý beží úplne vo vašom prehliadači. ' +
      'Bez účtu, bez servera, bez sledovania, bez analytiky &mdash; vaše denníky sú uložené iba v ' +
      '<code>localStorage</code> prehliadača. Import a export ADIF (.adi), denný/nočný motív, funguje offline, vhodné pre mobilné zariadenia. ' +
      'Otvorený zdrojový kód &mdash; <a href="https://github.com/yl3im/local-qso-logger" target="_blank" rel="noopener noreferrer external">pozrieť na GitHube</a>.',
    "header.theme.day": "Deň",
    "header.theme.night": "Noc",
    "aria.theme_toggle": "Prepnúť denný/nočný motív",
    "aria.language": "Jazyk rozhrania",

    "logbook.heading": "Denníky",
    "logbook.name.label": "Názov denníka",
    "logbook.name.placeholder": "Field Day 2026 (auto, ak prázdne)",
    "logbook.create": "Vytvoriť denník",
    "logbook.import": "Importovať súbor .adi",

    "nolog.empty": "Vyberte alebo vytvorte denník na začatie záznamu QSO.",
    "detail.rename": "Premenovať",
    "detail.export": "Exportovať .adi",
    "detail.delete": "Vymazať denník",

    "qso.callsign": "Volacia značka",
    "qso.callsign.placeholder": "DL1ABC",
    "qso.date": "Dátum (UTC)",
    "qso.time": "Čas (UTC)",
    "qso.band": "Pásmo",
    "qso.mode": "Druh prevádzky",
    "qso.prop_mode": "Šírenie",
    "qso.prop_mode.none": "(žiadny)",
    "qso.sat_name": "Družica",
    "qso.band_rx": "RX pásmo",
    "qso.sat_mode": "Družicový mód",
    "qso.gridsquare": "Lokátor",
    "qso.gridsquare.placeholder": "KO26BX",
    "qso.my_gridsquare": "Môj lokátor",
    "qso.rst_sent": "RST odoslaný",
    "qso.rst_rcvd": "RST prijatý",
    "qso.rst.placeholder": "59",
    "qso.log": "Zapísať QSO",
    "qso.update": "Aktualizovať QSO",
    "qso.cancel": "Zrušiť",
    "qso.duplicate": "Duplikát v tomto denníku",

    "table.callsign": "Značka",
    "table.time": "Čas",
    "table.date": "Dátum",
    "table.band": "Pásmo",
    "table.mode": "Druh",
    "table.prop_mode": "Šír.",
    "table.rst_s": "RST O",
    "table.rst_r": "RST P",
    "table.empty": "Žiadne QSO ešte nezapísané.",
    "table.edit": "Upraviť",
    "table.delete": "Vymazať",
    "table.edit.title": "Upraviť QSO",
    "table.delete.title": "Vymazať QSO",

    "confirm.delete_logbook": "Vymazať denník „{0}\" a jeho {1} QSO?",
    "confirm.delete_qso": "Vymazať QSO s {0}?",
    "confirm.no_callsign": "(bez značky)",
    "alert.no_qsos_in_adif": "V tomto ADIF súbore neboli nájdené žiadne QSO.",
    "alert.import_failed": "Import súboru zlyhal: {0}",

    "count.qso_one": "{0} QSO",
    "count.qso_many": "{0} QSO",
    "log.default_prefix": "Denník",
    "log.imported_prefix": "Importované",
    "log.utc_suffix": "UTC",
  };
})();
