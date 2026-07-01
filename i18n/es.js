/* Spanish translations for Local QSO Logger. */
(function () {
  window.I18N = window.I18N || {};
  window.I18N.es = {
    "header.brand_by": "Local QSO Logger por",
    "header.tagline_html":
      'Un registro de QSO de radioaficionado respetuoso con la privacidad que funciona enteramente en su navegador. ' +
      'Sin cuenta, sin servidor, sin rastreo, sin analítica &mdash; sus cuadernos viven solo en el ' +
      '<code>localStorage</code> del navegador. Importación y exportación ADIF (.adi), tema día/noche, funciona sin conexión, adaptado a móviles. ' +
      'Código abierto &mdash; <a href="https://github.com/yl3im/local-qso-logger" target="_blank" rel="noopener noreferrer external">verlo en GitHub</a>.',
    "header.theme.day": "Día",
    "header.theme.night": "Noche",
    "aria.theme_toggle": "Cambiar tema día/noche",
    "aria.language": "Idioma de la interfaz",

    "logbook.heading": "Cuadernos",
    "logbook.name.label": "Nombre del cuaderno",
    "logbook.name.placeholder": "Field Day 2026 (auto si vacío)",
    "logbook.create": "Crear cuaderno",
    "logbook.import": "Importar archivo .adi",

    "nolog.empty": "Seleccione o cree un cuaderno para empezar a registrar QSO.",
    "detail.rename": "Renombrar",
    "detail.export": "Exportar .adi",
    "detail.delete": "Eliminar cuaderno",

    "qso.callsign": "Indicativo",
    "qso.callsign.placeholder": "DL1ABC",
    "qso.date": "Fecha (UTC)",
    "qso.time": "Hora (UTC)",
    "qso.band": "Banda",
    "qso.mode": "Modo",
    "qso.prop_mode": "Propagación",
    "qso.prop_mode.none": "(ninguno)",
    "qso.sat_name": "Satélite",
    "qso.band_rx": "Banda RX",
    "qso.sat_mode": "Modo sat",
    "qso.gridsquare": "Localizador",
    "qso.gridsquare.placeholder": "KO26BX",
    "qso.my_gridsquare": "Mi localizador",
    "qso.rst_sent": "RST enviado",
    "qso.rst_rcvd": "RST recibido",
    "qso.rst.placeholder": "59",
    "qso.log": "Registrar QSO",
    "qso.update": "Actualizar QSO",
    "qso.cancel": "Cancelar",
    "qso.duplicate": "Duplicado en este cuaderno",

    "table.callsign": "Indicativo",
    "table.time": "Hora",
    "table.date": "Fecha",
    "table.band": "Banda",
    "table.mode": "Modo",
    "table.prop_mode": "Prop.",
    "table.rst_s": "RST E",
    "table.rst_r": "RST R",
    "table.empty": "Aún no hay QSO registrados.",
    "table.edit": "Editar",
    "table.delete": "Eliminar",
    "table.edit.title": "Editar QSO",
    "table.delete.title": "Eliminar QSO",

    "confirm.delete_logbook": "¿Eliminar el cuaderno «{0}» y sus {1} QSO?",
    "confirm.delete_qso": "¿Eliminar el QSO con {0}?",
    "confirm.no_callsign": "(sin indicativo)",
    "alert.no_qsos_in_adif": "No se han encontrado registros QSO en este archivo ADIF.",
    "alert.import_failed": "Error al importar el archivo: {0}",

    "count.qso_one": "{0} QSO",
    "count.qso_many": "{0} QSO",
    "log.default_prefix": "Registro",
    "log.imported_prefix": "Importado",
    "log.utc_suffix": "UTC",
  };
})();
