/* Bulgarian translations for Local QSO Logger. */
(function () {
  window.I18N = window.I18N || {};
  window.I18N.bg = {
    "header.brand_by": "Local QSO Logger от",
    "header.tagline_html":
      'QSO дневник за радиолюбители, който уважава поверителността и работи изцяло във вашия браузър. ' +
      'Без акаунт, без сървър, без проследяване, без аналитика &mdash; вашите дневници се съхраняват само в ' +
      '<code>localStorage</code> на браузъра. Импорт и експорт на ADIF (.adi), дневна/нощна тема, работи офлайн, удобен за мобилни устройства. ' +
      'Отворен код &mdash; <a href="https://github.com/yl3im/local-qso-logger" target="_blank" rel="noopener noreferrer external">вижте в GitHub</a>.',
    "header.theme.day": "Ден",
    "header.theme.night": "Нощ",
    "aria.theme_toggle": "Превключване на дневна/нощна тема",
    "aria.language": "Език на интерфейса",

    "logbook.heading": "Дневници",
    "logbook.name.label": "Име на дневника",
    "logbook.name.placeholder": "Field Day 2026 (авто, ако е празно)",
    "logbook.create": "Създаване на дневник",
    "logbook.import": "Импорт на .adi файл",

    "nolog.empty": "Изберете или създайте дневник, за да започнете да записвате QSO.",
    "detail.rename": "Преименуване",
    "detail.export": "Експорт .adi",
    "detail.delete": "Изтриване на дневника",

    "qso.block.station": "Данни за станцията",
    "qso.block.operation": "Режим на работа",
    "qso.block.qso": "QSO данни",
    "qso.station_callsign": "Позивна на станцията",
    "qso.operator": "Оператор",
    "qso.callsign": "Позивна",
    "qso.callsign.placeholder": "DL1ABC",
    "qso.date": "Дата (UTC)",
    "qso.time": "Час (UTC)",
    "qso.band": "Диапазон",
    "qso.mode": "Вид",
    "qso.prop_mode": "Разпространение",
    "qso.prop_mode.none": "(няма)",
    "qso.sat_name": "Спътник",
    "qso.band_rx": "RX диапазон",
    "qso.sat_mode": "Сат режим",
    "qso.sat_mode.modern": "модерни",
    "qso.sat_mode.deprecated": "остарели",
    "qso.gridsquare": "Локатор",
    "qso.gridsquare.placeholder": "KO26BX",
    "qso.my_gridsquare": "Мой локатор",
    "qso.comment": "Коментар",
    "qso.comment.placeholder": "",
    "qso.rst_sent": "RST изпратен",
    "qso.rst_rcvd": "RST приет",
    "qso.rst.placeholder": "59",
    "qso.log": "Запиши QSO",
    "qso.update": "Актуализирай QSO",
    "qso.cancel": "Отказ",
    "qso.duplicate": "Дубликат в този дневник",

    "table.callsign": "Позивна",
    "table.time": "Час",
    "table.date": "Дата",
    "table.band": "Диапазон",
    "table.mode": "Вид",
    "table.prop_mode": "Разп.",
    "table.rst_s": "RST И",
    "table.rst_r": "RST П",
    "table.empty": "Все още няма записани QSO.",
    "table.edit": "Редак.",
    "table.delete": "Изтр.",
    "table.edit.title": "Редактиране на QSO",
    "table.delete.title": "Изтриване на QSO",

    "confirm.delete_logbook": "Да се изтрие ли дневникът „{0}\" и неговите {1} QSO?",
    "confirm.delete_qso": "Да се изтрие ли QSO с {0}?",
    "confirm.no_callsign": "(без позивна)",
    "alert.no_qsos_in_adif": "В този ADIF файл не са намерени QSO.",
    "alert.import_failed": "Импортът на файла не успя: {0}",

    "count.qso_one": "{0} QSO",
    "count.qso_many": "{0} QSO",
    "log.default_prefix": "Дневник",
    "log.imported_prefix": "Импортирано",
    "log.utc_suffix": "UTC",
  };
})();
