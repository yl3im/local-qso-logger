/* Serbian (Cyrillic) translations for Local QSO Logger. */
(function () {
  window.I18N = window.I18N || {};
  window.I18N.sr = {
    "header.brand_by": "Local QSO Logger од",
    "header.tagline_html":
      'QSO дневник за радиоаматере који поштује приватност и ради у потпуности у вашем прегледачу. ' +
      'Без налога, без сервера, без праћења, без аналитике &mdash; ваши дневници постоје само у ' +
      '<code>localStorage</code> прегледача. Увоз и извоз ADIF (.adi), тема дан/ноћ, ради ван мреже, прилагођено мобилним уређајима. ' +
      'Отворени код &mdash; <a href="https://github.com/yl3im/local-qso-logger" target="_blank" rel="noopener noreferrer external">погледајте на GitHub</a>.',
    "header.theme.day": "Дан",
    "header.theme.night": "Ноћ",
    "aria.theme_toggle": "Промени тему дан/ноћ",
    "aria.language": "Језик интерфејса",

    "logbook.heading": "Дневници",
    "logbook.name.label": "Назив дневника",
    "logbook.name.placeholder": "Field Day 2026 (ауто ако је празно)",
    "logbook.create": "Креирај дневник",
    "logbook.import": "Увези .adi датотеку",

    "nolog.empty": "Изаберите или креирајте дневник да бисте почели да бележите QSO.",
    "detail.rename": "Преименуј",
    "detail.export": "Извези .adi",
    "detail.delete": "Обриши дневник",

    "qso.block.station": "Подаци станице",
    "qso.block.operation": "Режим рада",
    "qso.block.qso": "QSO подаци",
    "qso.station_callsign": "Позивни знак станице",
    "qso.operator": "Оператер",
    "qso.callsign": "Позивни знак",
    "qso.callsign.placeholder": "DL1ABC",
    "qso.date": "Датум (UTC)",
    "qso.time": "Време (UTC)",
    "qso.band": "Опсег",
    "qso.mode": "Врста",
    "qso.prop_mode": "Простирање",
    "qso.prop_mode.none": "(нема)",
    "qso.sat_name": "Сателит",
    "qso.band_rx": "RX опсег",
    "qso.sat_mode": "Сат режим",
    "qso.sat_mode.modern": "модерни",
    "qso.sat_mode.deprecated": "застарели",
    "qso.gridsquare": "Локатор",
    "qso.gridsquare.placeholder": "KO26BX",
    "qso.my_gridsquare": "Мој локатор",
    "qso.comment": "Коментар",
    "qso.comment.placeholder": "",
    "qso.rst_sent": "RST послато",
    "qso.rst_rcvd": "RST примљено",
    "qso.rst.placeholder": "59",
    "qso.log": "Забележи QSO",
    "qso.update": "Ажурирај QSO",
    "qso.cancel": "Одустани",
    "qso.duplicate": "Дупликат у овом дневнику",

    "table.callsign": "Знак",
    "table.time": "Време",
    "table.date": "Датум",
    "table.band": "Опсег",
    "table.mode": "Врста",
    "table.prop_mode": "Прост.",
    "table.rst_s": "RST П",
    "table.rst_r": "RST Пр",
    "table.empty": "Још нема забележених QSO.",
    "table.edit": "Уреди",
    "table.delete": "Обриши",
    "table.edit.title": "Уреди QSO",
    "table.delete.title": "Обриши QSO",

    "confirm.delete_logbook": "Обрисати дневник „{0}\" и његових {1} QSO?",
    "confirm.delete_qso": "Обрисати QSO са {0}?",
    "confirm.no_callsign": "(без позивног знака)",
    "alert.no_qsos_in_adif": "У овој ADIF датотеци нису пронађени QSO.",
    "alert.import_failed": "Увоз датотеке није успео: {0}",

    "count.qso_one": "{0} QSO",
    "count.qso_many": "{0} QSO",
    "log.default_prefix": "Дневник",
    "log.imported_prefix": "Увезено",
    "log.utc_suffix": "UTC",
  };
})();
