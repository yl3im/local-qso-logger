/* Swedish translations for Local QSO Logger. */
(function () {
  window.I18N = window.I18N || {};
  window.I18N.sv = {
    "header.brand_by": "Local QSO Logger av",
    "header.tagline_html":
      'En integritetsvänlig amatörradio-QSO-logg som körs helt i din webbläsare. ' +
      'Inget konto, ingen server, ingen spårning, ingen analys &mdash; dina loggböcker finns enbart i webbläsarens ' +
      '<code>localStorage</code>. ADIF (.adi) import &amp; export, dag-/nattema, fungerar offline, mobilvänlig. ' +
      'Öppen källkod &mdash; <a href="https://github.com/yl3im/local-qso-logger" target="_blank" rel="noopener noreferrer external">se på GitHub</a>.',
    "header.theme.day": "Dag",
    "header.theme.night": "Natt",
    "aria.theme_toggle": "Växla dag-/nattläge",
    "aria.language": "Gränssnittsspråk",

    "logbook.heading": "Loggböcker",
    "logbook.name.label": "Loggboksnamn",
    "logbook.name.placeholder": "Field Day 2026 (auto om tomt)",
    "logbook.create": "Skapa loggbok",
    "logbook.import": "Importera .adi-fil",

    "nolog.empty": "Välj eller skapa en loggbok för att börja logga QSO.",
    "detail.rename": "Byt namn",
    "detail.export": "Exportera .adi",
    "detail.delete": "Radera loggbok",

    "qso.block.station": "Stationsdata",
    "qso.block.operation": "Driftläge",
    "qso.block.qso": "QSO-data",
    "qso.station_callsign": "Stationens anropssignal",
    "qso.operator": "Operatör",
    "qso.operator.placeholder": "Anna Andersson",
    "qso.callsign": "Anropssignal",
    "qso.callsign.placeholder": "DL1ABC",
    "qso.date": "Datum (UTC)",
    "qso.time": "Tid (UTC)",
    "qso.band": "Band",
    "qso.mode": "Mod",
    "qso.prop_mode": "Utbredning",
    "qso.prop_mode.none": "(ingen)",
    "qso.sat_name": "Satellit",
    "qso.band_rx": "RX-band",
    "qso.sat_mode": "Sat mod",
    "qso.gridsquare": "Locator",
    "qso.gridsquare.placeholder": "KO26BX",
    "qso.my_gridsquare": "Min locator",
    "qso.comment": "Kommentar",
    "qso.comment.placeholder": "",
    "qso.rst_sent": "RST skickat",
    "qso.rst_rcvd": "RST mottaget",
    "qso.rst.placeholder": "59",
    "qso.log": "Logga QSO",
    "qso.update": "Uppdatera QSO",
    "qso.cancel": "Avbryt",
    "qso.duplicate": "Dublett i denna loggbok",

    "table.callsign": "Anrop",
    "table.time": "Tid",
    "table.date": "Datum",
    "table.band": "Band",
    "table.mode": "Mod",
    "table.prop_mode": "Utb.",
    "table.rst_s": "RST S",
    "table.rst_r": "RST M",
    "table.empty": "Inga QSO loggade ännu.",
    "table.edit": "Ändra",
    "table.delete": "Radera",
    "table.edit.title": "Ändra QSO",
    "table.delete.title": "Radera QSO",

    "confirm.delete_logbook": "Radera loggboken ”{0}” och dess {1} QSO?",
    "confirm.delete_qso": "Radera QSO med {0}?",
    "confirm.no_callsign": "(ingen anropssignal)",
    "alert.no_qsos_in_adif": "Inga QSO-poster hittades i denna ADIF-fil.",
    "alert.import_failed": "Kunde inte importera filen: {0}",

    "count.qso_one": "{0} QSO",
    "count.qso_many": "{0} QSO",
    "log.default_prefix": "Logg",
    "log.imported_prefix": "Importerad",
    "log.utc_suffix": "UTC",
  };
})();
