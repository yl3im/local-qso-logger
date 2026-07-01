/* English (default) translations for Local QSO Logger. */
(function () {
  window.I18N = window.I18N || {};
  window.I18N.en = {
    // Header
    "header.brand_by": "Local QSO Logger by",
    "header.tagline_html":
      'A privacy-respecting amateur-radio QSO logger that runs entirely in your browser. ' +
      'No account, no server, no tracking, no analytics &mdash; your logbooks live only in your browser&rsquo;s ' +
      '<code>localStorage</code>. ADIF (.adi) import &amp; export, day/night theme, works offline, mobile-friendly. ' +
      'Open source &mdash; <a href="https://github.com/yl3im/local-qso-logger" target="_blank" rel="noopener noreferrer external">see it on GitHub</a>.',
    "header.theme.day": "Day",
    "header.theme.night": "Night",
    "aria.theme_toggle": "Toggle day/night theme",
    "aria.language": "Interface language",

    // Logbook panel
    "logbook.heading": "Logbooks",
    "logbook.name.label": "Log name",
    "logbook.name.placeholder": "Field Day 2026 (auto if blank)",
    "logbook.create": "Create logbook",
    "logbook.import": "Import .adi file",

    // Detail header
    "nolog.empty": "Select or create a logbook to start logging QSOs.",
    "detail.rename": "Rename",
    "detail.export": "Export .adi",
    "detail.delete": "Delete log",

    // QSO form
    "qso.callsign": "Callsign",
    "qso.callsign.placeholder": "DL1ABC",
    "qso.date": "Date (UTC)",
    "qso.time": "Time (UTC)",
    "qso.band": "Band",
    "qso.mode": "Mode",
    "qso.prop_mode": "Prop. mode",
    "qso.prop_mode.none": "(none)",
    "qso.sat_name": "Satellite",
    "qso.band_rx": "RX band",
    "qso.sat_mode": "Sat mode",
    "qso.gridsquare": "Grid",
    "qso.gridsquare.placeholder": "KO26BX",
    "qso.my_gridsquare": "My grid",
    "qso.rst_sent": "RST sent",
    "qso.rst_rcvd": "RST rcvd",
    "qso.rst.placeholder": "59",
    "qso.log": "Log QSO",
    "qso.update": "Update QSO",
    "qso.cancel": "Cancel",
    "qso.duplicate": "Duplicate in this log",

    // QSO table
    "table.callsign": "Callsign",
    "table.time": "Time",
    "table.date": "Date",
    "table.band": "Band",
    "table.mode": "Mode",
    "table.prop_mode": "Prop",
    "table.rst_s": "RST S",
    "table.rst_r": "RST R",
    "table.empty": "No QSOs logged yet.",
    "table.edit": "Edit",
    "table.delete": "Delete",
    "table.edit.title": "Edit QSO",
    "table.delete.title": "Delete QSO",

    // Confirms / alerts
    "confirm.delete_logbook": 'Delete logbook "{0}" and its {1} QSO(s)?',
    "confirm.delete_qso": "Delete QSO with {0}?",
    "confirm.no_callsign": "(no callsign)",
    "alert.no_qsos_in_adif": "No QSO records found in this ADIF file.",
    "alert.import_failed": "Failed to import file: {0}",

    // Counts / generated names
    "count.qso_one": "{0} QSO",
    "count.qso_many": "{0} QSOs",
    "log.default_prefix": "Log",
    "log.imported_prefix": "Imported",
    "log.utc_suffix": "UTC",
  };
})();
