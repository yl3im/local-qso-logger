/* Italian translations for Local QSO Logger. */
(function () {
  window.I18N = window.I18N || {};
  window.I18N.it = {
    "header.brand_by": "Local QSO Logger di",
    "header.tagline_html":
      'Un logger QSO radioamatoriale rispettoso della privacy che funziona interamente nel tuo browser. ' +
      'Niente account, niente server, niente tracciamento, niente analitica &mdash; i tuoi diari vivono solo nel ' +
      '<code>localStorage</code> del browser. Import &amp; export ADIF (.adi), tema giorno/notte, funziona offline, ottimizzato per mobile. ' +
      'Open source &mdash; <a href="https://github.com/yl3im/local-qso-logger" target="_blank" rel="noopener noreferrer external">vedilo su GitHub</a>.',
    "header.theme.day": "Giorno",
    "header.theme.night": "Notte",
    "aria.theme_toggle": "Cambia tema giorno/notte",
    "aria.language": "Lingua dell'interfaccia",

    "logbook.heading": "Diari",
    "logbook.name.label": "Nome del diario",
    "logbook.name.placeholder": "Field Day 2026 (auto se vuoto)",
    "logbook.create": "Crea diario",
    "logbook.import": "Importa file .adi",

    "nolog.empty": "Seleziona o crea un diario per iniziare a registrare i QSO.",
    "detail.rename": "Rinomina",
    "detail.export": "Esporta .adi",
    "detail.delete": "Elimina diario",

    "qso.block.station": "Dati stazione",
    "qso.block.operation": "Modalità operativa",
    "qso.block.qso": "Dati QSO",
    "qso.station_callsign": "Nominativo stazione",
    "qso.operator": "Operatore",
    "qso.operator.placeholder": "Mario Rossi",
    "qso.callsign": "Nominativo",
    "qso.callsign.placeholder": "DL1ABC",
    "qso.date": "Data (UTC)",
    "qso.time": "Ora (UTC)",
    "qso.band": "Banda",
    "qso.mode": "Modo",
    "qso.prop_mode": "Propagazione",
    "qso.prop_mode.none": "(nessuna)",
    "qso.sat_name": "Satellite",
    "qso.band_rx": "Banda RX",
    "qso.sat_mode": "Modo sat",
    "qso.gridsquare": "Locatore",
    "qso.gridsquare.placeholder": "KO26BX",
    "qso.my_gridsquare": "Mio locatore",
    "qso.comment": "Commento",
    "qso.comment.placeholder": "",
    "qso.rst_sent": "RST inviato",
    "qso.rst_rcvd": "RST ricevuto",
    "qso.rst.placeholder": "59",
    "qso.log": "Registra QSO",
    "qso.update": "Aggiorna QSO",
    "qso.cancel": "Annulla",
    "qso.duplicate": "Duplicato in questo diario",

    "table.callsign": "Nominativo",
    "table.time": "Ora",
    "table.date": "Data",
    "table.band": "Banda",
    "table.mode": "Modo",
    "table.prop_mode": "Prop.",
    "table.rst_s": "RST I",
    "table.rst_r": "RST R",
    "table.empty": "Nessun QSO ancora registrato.",
    "table.edit": "Modifica",
    "table.delete": "Elimina",
    "table.edit.title": "Modifica QSO",
    "table.delete.title": "Elimina QSO",

    "confirm.delete_logbook": "Eliminare il diario «{0}» e i suoi {1} QSO?",
    "confirm.delete_qso": "Eliminare il QSO con {0}?",
    "confirm.no_callsign": "(senza nominativo)",
    "alert.no_qsos_in_adif": "Nessun QSO trovato in questo file ADIF.",
    "alert.import_failed": "Importazione del file fallita: {0}",

    "count.qso_one": "{0} QSO",
    "count.qso_many": "{0} QSO",
    "log.default_prefix": "Log",
    "log.imported_prefix": "Importato",
    "log.utc_suffix": "UTC",
  };
})();
