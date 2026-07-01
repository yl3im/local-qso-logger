/* German translations for Local QSO Logger. */
(function () {
  window.I18N = window.I18N || {};
  window.I18N.de = {
    // Header
    "header.brand_by": "Local QSO Logger von",
    "header.tagline_html":
      'Ein datenschutzfreundliches Amateurfunk-QSO-Logbuch, das vollständig in Ihrem Browser läuft. ' +
      'Kein Konto, kein Server, kein Tracking, keine Analyse &mdash; Ihre Logbücher liegen nur im ' +
      '<code>localStorage</code> Ihres Browsers. ADIF-(.adi)-Import &amp; -Export, Tag-/Nacht-Theme, funktioniert offline, mobilfreundlich. ' +
      'Open Source &mdash; <a href="https://github.com/yl3im/local-qso-logger" target="_blank" rel="noopener noreferrer external">auf GitHub ansehen</a>.',
    "header.theme.day": "Tag",
    "header.theme.night": "Nacht",
    "aria.theme_toggle": "Tag-/Nacht-Theme umschalten",
    "aria.language": "Oberflächensprache",

    // Logbook panel
    "logbook.heading": "Logbücher",
    "logbook.name.label": "Logbuchname",
    "logbook.name.placeholder": "Field Day 2026 (automatisch, wenn leer)",
    "logbook.create": "Logbuch anlegen",
    "logbook.import": ".adi-Datei importieren",

    // Detail header
    "nolog.empty": "Wählen Sie ein Logbuch aus oder legen Sie eines an, um QSOs zu erfassen.",
    "detail.rename": "Umbenennen",
    "detail.export": ".adi exportieren",
    "detail.delete": "Logbuch löschen",

    // QSO form
    "qso.block.station": "Stationsdaten",
    "qso.block.operation": "Betriebsart",
    "qso.block.qso": "QSO-Daten",
    "qso.station_callsign": "Stationsrufzeichen",
    "qso.operator": "Operator",
    "qso.operator.placeholder": "Max Mustermann",
    "qso.callsign": "Rufzeichen",
    "qso.callsign.placeholder": "DL1ABC",
    "qso.date": "Datum (UTC)",
    "qso.time": "Zeit (UTC)",
    "qso.band": "Band",
    "qso.mode": "Betriebsart",
    "qso.prop_mode": "Ausbreitung",
    "qso.prop_mode.none": "(keine)",
    "qso.sat_name": "Satellit",
    "qso.band_rx": "RX-Band",
    "qso.sat_mode": "Sat-Modus",
    "qso.gridsquare": "Locator",
    "qso.gridsquare.placeholder": "KO26BX",
    "qso.my_gridsquare": "Mein Locator",
    "qso.comment": "Kommentar",
    "qso.comment.placeholder": "",
    "qso.rst_sent": "RST gesendet",
    "qso.rst_rcvd": "RST empfangen",
    "qso.rst.placeholder": "59",
    "qso.log": "QSO eintragen",
    "qso.update": "QSO aktualisieren",
    "qso.cancel": "Abbrechen",
    "qso.duplicate": "Duplikat in diesem Log",

    // QSO table
    "table.callsign": "Rufzeichen",
    "table.time": "Zeit",
    "table.date": "Datum",
    "table.band": "Band",
    "table.mode": "Betriebsart",
    "table.prop_mode": "Ausbr.",
    "table.rst_s": "RST G",
    "table.rst_r": "RST E",
    "table.empty": "Noch keine QSOs eingetragen.",
    "table.edit": "Bearb.",
    "table.delete": "Lösch.",
    "table.edit.title": "QSO bearbeiten",
    "table.delete.title": "QSO löschen",

    // Confirms / alerts
    "confirm.delete_logbook": "Logbuch „{0}\" und seine {1} QSO(s) löschen?",
    "confirm.delete_qso": "QSO mit {0} löschen?",
    "confirm.no_callsign": "(kein Rufzeichen)",
    "alert.no_qsos_in_adif": "Keine QSO-Einträge in dieser ADIF-Datei gefunden.",
    "alert.import_failed": "Datei konnte nicht importiert werden: {0}",

    // Counts / generated names
    "count.qso_one": "{0} QSO",
    "count.qso_many": "{0} QSOs",
    "log.default_prefix": "Log",
    "log.imported_prefix": "Importiert",
    "log.utc_suffix": "UTC",
  };
})();
