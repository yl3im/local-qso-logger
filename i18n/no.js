/* Norwegian (Bokmål) translations for Local QSO Logger. */
(function () {
  window.I18N = window.I18N || {};
  window.I18N.no = {
    "header.brand_by": "Local QSO Logger av",
    "header.tagline_html":
      'En personvernvennlig amatørradio-QSO-logger som kjører helt i nettleseren din. ' +
      'Ingen konto, ingen server, ingen sporing, ingen analyse &mdash; loggbøkene dine ligger kun i nettleserens ' +
      '<code>localStorage</code>. ADIF (.adi) import og eksport, dag-/nattema, fungerer offline, mobilvennlig. ' +
      'Åpen kildekode &mdash; <a href="https://github.com/yl3im/local-qso-logger" target="_blank" rel="noopener noreferrer external">se det på GitHub</a>.',
    "header.theme.day": "Dag",
    "header.theme.night": "Natt",
    "aria.theme_toggle": "Bytt dag-/nattmodus",
    "aria.language": "Grensesnittspråk",

    "logbook.heading": "Loggbøker",
    "logbook.name.label": "Loggboknavn",
    "logbook.name.placeholder": "Field Day 2026 (auto hvis tomt)",
    "logbook.create": "Opprett loggbok",
    "logbook.import": "Importer .adi-fil",

    "nolog.empty": "Velg eller opprett en loggbok for å begynne å logge QSO.",
    "detail.rename": "Gi nytt navn",
    "detail.export": "Eksporter .adi",
    "detail.delete": "Slett loggbok",

    "qso.block.station": "Stasjonsdata",
    "qso.block.operation": "Driftsmodus",
    "qso.block.qso": "QSO-data",
    "qso.station_callsign": "Stasjonens kallesignal",
    "qso.operator": "Operatør",
    "qso.operator.placeholder": "Ola Nordmann",
    "qso.callsign": "Kallesignal",
    "qso.callsign.placeholder": "DL1ABC",
    "qso.date": "Dato (UTC)",
    "qso.time": "Tid (UTC)",
    "qso.band": "Bånd",
    "qso.mode": "Modus",
    "qso.prop_mode": "Utbredelse",
    "qso.prop_mode.none": "(ingen)",
    "qso.sat_name": "Satellitt",
    "qso.band_rx": "RX bånd",
    "qso.sat_mode": "Sat modus",
    "qso.gridsquare": "Locator",
    "qso.gridsquare.placeholder": "KO26BX",
    "qso.my_gridsquare": "Min locator",
    "qso.comment": "Kommentar",
    "qso.comment.placeholder": "",
    "qso.rst_sent": "RST sendt",
    "qso.rst_rcvd": "RST mottatt",
    "qso.rst.placeholder": "59",
    "qso.log": "Logg QSO",
    "qso.update": "Oppdater QSO",
    "qso.cancel": "Avbryt",
    "qso.duplicate": "Duplikat i denne loggboken",

    "table.callsign": "Kallesignal",
    "table.time": "Tid",
    "table.date": "Dato",
    "table.band": "Bånd",
    "table.mode": "Modus",
    "table.prop_mode": "Utbr.",
    "table.rst_s": "RST S",
    "table.rst_r": "RST M",
    "table.empty": "Ingen QSO loggført ennå.",
    "table.edit": "Endre",
    "table.delete": "Slett",
    "table.edit.title": "Endre QSO",
    "table.delete.title": "Slett QSO",

    "confirm.delete_logbook": "Slette loggboken «{0}» og dens {1} QSO?",
    "confirm.delete_qso": "Slette QSO med {0}?",
    "confirm.no_callsign": "(uten kallesignal)",
    "alert.no_qsos_in_adif": "Ingen QSO-oppføringer funnet i denne ADIF-filen.",
    "alert.import_failed": "Kunne ikke importere filen: {0}",

    "count.qso_one": "{0} QSO",
    "count.qso_many": "{0} QSO",
    "log.default_prefix": "Logg",
    "log.imported_prefix": "Importert",
    "log.utc_suffix": "UTC",
  };
})();
