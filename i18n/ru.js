/* Russian translations for Local QSO Logger. */
(function () {
  window.I18N = window.I18N || {};
  window.I18N.ru = {
    // Header
    "header.brand_by": "Local QSO Logger от",
    "header.tagline_html":
      'Аппаратный QSO-журнал для радиолюбителей с уважением к приватности, работающий полностью в вашем браузере. ' +
      'Без аккаунта, без сервера, без слежки, без аналитики &mdash; ваши журналы хранятся только в ' +
      '<code>localStorage</code> браузера. Импорт и экспорт ADIF (.adi), дневная и ночная тема, работа офлайн, удобство на мобильных. ' +
      'Открытый исходный код &mdash; <a href="https://github.com/yl3im/local-qso-logger" target="_blank" rel="noopener noreferrer external">посмотреть на GitHub</a>.',
    "header.theme.day": "День",
    "header.theme.night": "Ночь",
    "aria.theme_toggle": "Переключить дневную/ночную тему",
    "aria.language": "Язык интерфейса",

    // Logbook panel
    "logbook.heading": "Журналы",
    "logbook.name.label": "Название журнала",
    "logbook.name.placeholder": "Field Day 2026 (авто, если пусто)",
    "logbook.create": "Создать журнал",
    "logbook.import": "Импорт файла .adi",

    // Detail header
    "nolog.empty": "Выберите или создайте журнал, чтобы начать записывать QSO.",
    "detail.rename": "Переименовать",
    "detail.export": "Экспорт .adi",
    "detail.delete": "Удалить журнал",

    // QSO form
    "qso.block.station": "Данные станции",
    "qso.block.operation": "Режим работы",
    "qso.block.qso": "Данные QSO",
    "qso.station_callsign": "Позывной станции",
    "qso.operator": "Оператор",
    "qso.operator.placeholder": "Иван Иванов",
    "qso.callsign": "Позывной",
    "qso.callsign.placeholder": "DL1ABC",
    "qso.date": "Дата (UTC)",
    "qso.time": "Время (UTC)",
    "qso.band": "Диапазон",
    "qso.mode": "Вид",
    "qso.prop_mode": "Распространение",
    "qso.prop_mode.none": "(нет)",
    "qso.sat_name": "Спутник",
    "qso.band_rx": "RX диапазон",
    "qso.sat_mode": "Сат режим",
    "qso.gridsquare": "Локатор",
    "qso.gridsquare.placeholder": "KO26BX",
    "qso.my_gridsquare": "Мой локатор",
    "qso.comment": "Комментарий",
    "qso.comment.placeholder": "",
    "qso.rst_sent": "RST передал",
    "qso.rst_rcvd": "RST принял",
    "qso.rst.placeholder": "59",
    "qso.log": "Записать QSO",
    "qso.update": "Обновить QSO",
    "qso.cancel": "Отмена",
    "qso.duplicate": "Уже есть в журнале",

    // QSO table
    "table.callsign": "Позывной",
    "table.time": "Время",
    "table.date": "Дата",
    "table.band": "Диапазон",
    "table.mode": "Вид",
    "table.prop_mode": "Расп.",
    "table.rst_s": "RST П",
    "table.rst_r": "RST Пр",
    "table.empty": "QSO ещё не записаны.",
    "table.edit": "Изм.",
    "table.delete": "Удал.",
    "table.edit.title": "Изменить QSO",
    "table.delete.title": "Удалить QSO",

    // Confirms / alerts
    "confirm.delete_logbook": "Удалить журнал «{0}» и его записей QSO: {1}?",
    "confirm.delete_qso": "Удалить QSO с {0}?",
    "confirm.no_callsign": "(без позывного)",
    "alert.no_qsos_in_adif": "В этом ADIF-файле не найдено QSO.",
    "alert.import_failed": "Не удалось импортировать файл: {0}",

    // Counts / generated names
    "count.qso_one": "{0} QSO",
    "count.qso_many": "{0} QSO",
    "log.default_prefix": "Журнал",
    "log.imported_prefix": "Импорт",
    "log.utc_suffix": "UTC",
  };
})();
