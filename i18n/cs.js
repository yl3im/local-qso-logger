/* Czech translations for Local QSO Logger. */
(function () {
  window.I18N = window.I18N || {};
  window.I18N.cs = {
    "header.brand_by": "Local QSO Logger od",
    "header.tagline_html":
      'QSO deník pro radioamatéry respektující soukromí, který běží zcela ve vašem prohlížeči. ' +
      'Bez účtu, bez serveru, bez sledování, bez analytiky &mdash; vaše deníky jsou uloženy pouze v ' +
      '<code>localStorage</code> prohlížeče. Import a export ADIF (.adi), denní/noční motiv, funguje offline, vhodné pro mobilní zařízení. ' +
      'Otevřený zdrojový kód &mdash; <a href="https://github.com/yl3im/local-qso-logger" target="_blank" rel="noopener noreferrer external">prohlédnout na GitHubu</a>.',
    "header.theme.day": "Den",
    "header.theme.night": "Noc",
    "aria.theme_toggle": "Přepnout denní/noční motiv",
    "aria.language": "Jazyk rozhraní",

    "logbook.heading": "Deníky",
    "logbook.name.label": "Název deníku",
    "logbook.name.placeholder": "Field Day 2026 (auto, pokud prázdné)",
    "logbook.create": "Vytvořit deník",
    "logbook.import": "Importovat soubor .adi",

    "nolog.empty": "Vyberte nebo vytvořte deník pro zahájení záznamu QSO.",
    "detail.rename": "Přejmenovat",
    "detail.export": "Exportovat .adi",
    "detail.delete": "Smazat deník",

    "qso.callsign": "Volací značka",
    "qso.callsign.placeholder": "DL1ABC",
    "qso.date": "Datum (UTC)",
    "qso.time": "Čas (UTC)",
    "qso.band": "Pásmo",
    "qso.mode": "Druh provozu",
    "qso.prop_mode": "Šíření",
    "qso.prop_mode.none": "(žádný)",
    "qso.sat_name": "Družice",
    "qso.band_rx": "RX pásmo",
    "qso.sat_mode": "Družicový mód",
    "qso.gridsquare": "Lokátor",
    "qso.gridsquare.placeholder": "KO26BX",
    "qso.my_gridsquare": "Můj lokátor",
    "qso.rst_sent": "RST odeslaný",
    "qso.rst_rcvd": "RST přijatý",
    "qso.rst.placeholder": "59",
    "qso.log": "Zapsat QSO",
    "qso.update": "Aktualizovat QSO",
    "qso.cancel": "Zrušit",
    "qso.duplicate": "Duplikát v tomto deníku",

    "table.callsign": "Značka",
    "table.time": "Čas",
    "table.date": "Datum",
    "table.band": "Pásmo",
    "table.mode": "Druh",
    "table.prop_mode": "Šíř.",
    "table.rst_s": "RST O",
    "table.rst_r": "RST P",
    "table.empty": "Žádné QSO ještě nezapsáno.",
    "table.edit": "Upravit",
    "table.delete": "Smazat",
    "table.edit.title": "Upravit QSO",
    "table.delete.title": "Smazat QSO",

    "confirm.delete_logbook": "Smazat deník „{0}\" a jeho {1} QSO?",
    "confirm.delete_qso": "Smazat QSO s {0}?",
    "confirm.no_callsign": "(bez značky)",
    "alert.no_qsos_in_adif": "V tomto ADIF souboru nebyly nalezeny žádné QSO.",
    "alert.import_failed": "Import souboru selhal: {0}",

    "count.qso_one": "{0} QSO",
    "count.qso_many": "{0} QSO",
    "log.default_prefix": "Deník",
    "log.imported_prefix": "Importováno",
    "log.utc_suffix": "UTC",
  };
})();
