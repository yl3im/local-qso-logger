/* Portuguese (European) translations for Local QSO Logger. */
(function () {
  window.I18N = window.I18N || {};
  window.I18N.pt = {
    "header.brand_by": "Local QSO Logger por",
    "header.tagline_html":
      'Um logger de QSO radioamador respeitador da privacidade que funciona inteiramente no seu navegador. ' +
      'Sem conta, sem servidor, sem rastreio, sem analítica &mdash; os seus cadernos vivem apenas no ' +
      '<code>localStorage</code> do navegador. Importação e exportação ADIF (.adi), tema dia/noite, funciona offline, adaptado para móvel. ' +
      'Código aberto &mdash; <a href="https://github.com/yl3im/local-qso-logger" target="_blank" rel="noopener noreferrer external">ver no GitHub</a>.',
    "header.theme.day": "Dia",
    "header.theme.night": "Noite",
    "aria.theme_toggle": "Alternar tema dia/noite",
    "aria.language": "Idioma da interface",

    "logbook.heading": "Cadernos",
    "logbook.name.label": "Nome do caderno",
    "logbook.name.placeholder": "Field Day 2026 (auto se vazio)",
    "logbook.create": "Criar caderno",
    "logbook.import": "Importar ficheiro .adi",

    "nolog.empty": "Selecione ou crie um caderno para começar a registar QSO.",
    "detail.rename": "Renomear",
    "detail.export": "Exportar .adi",
    "detail.delete": "Eliminar caderno",

    "qso.block.station": "Dados da estação",
    "qso.block.operation": "Modo de operação",
    "qso.block.qso": "Dados do QSO",
    "qso.station_callsign": "Indicativo da estação",
    "qso.operator": "Operador",
    "qso.operator.placeholder": "João Silva",
    "qso.callsign": "Indicativo",
    "qso.callsign.placeholder": "DL1ABC",
    "qso.date": "Data (UTC)",
    "qso.time": "Hora (UTC)",
    "qso.band": "Banda",
    "qso.mode": "Modo",
    "qso.prop_mode": "Propagação",
    "qso.prop_mode.none": "(nenhuma)",
    "qso.sat_name": "Satélite",
    "qso.band_rx": "Banda RX",
    "qso.sat_mode": "Modo sat",
    "qso.gridsquare": "Localizador",
    "qso.gridsquare.placeholder": "KO26BX",
    "qso.my_gridsquare": "Meu localizador",
    "qso.comment": "Comentário",
    "qso.comment.placeholder": "",
    "qso.rst_sent": "RST enviado",
    "qso.rst_rcvd": "RST recebido",
    "qso.rst.placeholder": "59",
    "qso.log": "Registar QSO",
    "qso.update": "Atualizar QSO",
    "qso.cancel": "Cancelar",
    "qso.duplicate": "Duplicado neste caderno",

    "table.callsign": "Indicativo",
    "table.time": "Hora",
    "table.date": "Data",
    "table.band": "Banda",
    "table.mode": "Modo",
    "table.prop_mode": "Prop.",
    "table.rst_s": "RST E",
    "table.rst_r": "RST R",
    "table.empty": "Ainda não há QSO registados.",
    "table.edit": "Editar",
    "table.delete": "Eliminar",
    "table.edit.title": "Editar QSO",
    "table.delete.title": "Eliminar QSO",

    "confirm.delete_logbook": "Eliminar o caderno «{0}» e os seus {1} QSO?",
    "confirm.delete_qso": "Eliminar o QSO com {0}?",
    "confirm.no_callsign": "(sem indicativo)",
    "alert.no_qsos_in_adif": "Nenhum QSO encontrado neste ficheiro ADIF.",
    "alert.import_failed": "Falha ao importar o ficheiro: {0}",

    "count.qso_one": "{0} QSO",
    "count.qso_many": "{0} QSO",
    "log.default_prefix": "Registo",
    "log.imported_prefix": "Importado",
    "log.utc_suffix": "UTC",
  };
})();
