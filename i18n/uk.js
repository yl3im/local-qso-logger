/* Ukrainian translations for Local QSO Logger. */
(function () {
  window.I18N = window.I18N || {};
  window.I18N.uk = {
    "header.brand_by": "Local QSO Logger від",
    "header.tagline_html":
      'Журнал QSO для радіоаматорів, що шанує приватність і повністю працює у вашому браузері. ' +
      'Без облікового запису, без сервера, без відстеження, без аналітики &mdash; ваші журнали зберігаються лише в ' +
      '<code>localStorage</code> браузера. Імпорт та експорт ADIF (.adi), денна/нічна тема, працює офлайн, зручно на мобільних. ' +
      'Відкритий код &mdash; <a href="https://github.com/yl3im/local-qso-logger" target="_blank" rel="noopener noreferrer external">подивитися на GitHub</a>.',
    "header.theme.day": "День",
    "header.theme.night": "Ніч",
    "aria.theme_toggle": "Перемкнути денну/нічну тему",
    "aria.language": "Мова інтерфейсу",

    "logbook.heading": "Журнали",
    "logbook.name.label": "Назва журналу",
    "logbook.name.placeholder": "Field Day 2026 (авто, якщо порожньо)",
    "logbook.create": "Створити журнал",
    "logbook.import": "Імпорт файлу .adi",

    "nolog.empty": "Виберіть або створіть журнал, щоб почати записувати QSO.",
    "detail.rename": "Перейменувати",
    "detail.export": "Експорт .adi",
    "detail.delete": "Видалити журнал",

    "qso.callsign": "Позивний",
    "qso.callsign.placeholder": "DL1ABC",
    "qso.date": "Дата (UTC)",
    "qso.time": "Час (UTC)",
    "qso.band": "Діапазон",
    "qso.mode": "Вид",
    "qso.rst_sent": "RST передано",
    "qso.rst_rcvd": "RST прийнято",
    "qso.rst.placeholder": "59",
    "qso.log": "Записати QSO",
    "qso.update": "Оновити QSO",
    "qso.cancel": "Скасувати",
    "qso.duplicate": "Дублікат у цьому журналі",

    "table.callsign": "Позивний",
    "table.time": "Час",
    "table.date": "Дата",
    "table.band": "Діапазон",
    "table.mode": "Вид",
    "table.rst_s": "RST П",
    "table.rst_r": "RST Пр",
    "table.empty": "QSO ще не записано.",
    "table.edit": "Змін.",
    "table.delete": "Видал.",
    "table.edit.title": "Змінити QSO",
    "table.delete.title": "Видалити QSO",

    "confirm.delete_logbook": "Видалити журнал «{0}» та його {1} QSO?",
    "confirm.delete_qso": "Видалити QSO з {0}?",
    "confirm.no_callsign": "(без позивного)",
    "alert.no_qsos_in_adif": "У цьому ADIF-файлі не знайдено QSO.",
    "alert.import_failed": "Не вдалося імпортувати файл: {0}",

    "count.qso_one": "{0} QSO",
    "count.qso_many": "{0} QSO",
    "log.default_prefix": "Журнал",
    "log.imported_prefix": "Імпорт",
    "log.utc_suffix": "UTC",
  };
})();
