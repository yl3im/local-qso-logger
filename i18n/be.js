/* Belarusian translations for Local QSO Logger. */
(function () {
  window.I18N = window.I18N || {};
  window.I18N.be = {
    "header.brand_by": "Local QSO Logger ад",
    "header.tagline_html":
      'Прыватны журнал QSO для радыёаматараў, які цалкам працуе ў вашым браўзеры. ' +
      'Без уліковага запісу, без сервера, без сачэння, без аналітыкі &mdash; вашы журналы захоўваюцца толькі ў ' +
      '<code>localStorage</code> браўзера. Імпарт і экспарт ADIF (.adi), дзённая і начная тэма, працуе афлайн, зручна для мабільных. ' +
      'Адкрыты зыходны код &mdash; <a href="https://github.com/yl3im/local-qso-logger" target="_blank" rel="noopener noreferrer external">паглядзець на GitHub</a>.',
    "header.theme.day": "Дзень",
    "header.theme.night": "Ноч",
    "aria.theme_toggle": "Пераключыць дзённую/начную тэму",
    "aria.language": "Мова інтэрфэйсу",

    "logbook.heading": "Журналы",
    "logbook.name.label": "Назва журнала",
    "logbook.name.placeholder": "Field Day 2026 (аўта, калі пуста)",
    "logbook.create": "Стварыць журнал",
    "logbook.import": "Імпарт файла .adi",

    "nolog.empty": "Абярыце або стварыце журнал, каб пачаць запісваць QSO.",
    "detail.rename": "Перайменаваць",
    "detail.export": "Экспарт .adi",
    "detail.delete": "Выдаліць журнал",

    "qso.block.station": "Даныя станцыі",
    "qso.block.operation": "Рэжым працы",
    "qso.block.qso": "Даныя QSO",
    "qso.station_callsign": "Пазыўны станцыі",
    "qso.operator": "Аператар",
    "qso.callsign": "Пазыўны",
    "qso.callsign.placeholder": "DL1ABC",
    "qso.date": "Дата (UTC)",
    "qso.time": "Час (UTC)",
    "qso.band": "Дыяпазон",
    "qso.mode": "Від",
    "qso.prop_mode": "Распаўсюджванне",
    "qso.prop_mode.none": "(няма)",
    "qso.sat_name": "Спадарожнік",
    "qso.band_rx": "RX дыяпазон",
    "qso.sat_mode": "Сат рэжым",
    "qso.sat_mode.modern": "сучасныя",
    "qso.sat_mode.deprecated": "састарэлыя",
    "qso.gridsquare": "Лакатар",
    "qso.gridsquare.placeholder": "KO26BX",
    "qso.my_gridsquare": "Мой лакатар",
    "qso.comment": "Каментар",
    "qso.comment.placeholder": "",
    "qso.rst_sent": "RST перададзены",
    "qso.rst_rcvd": "RST прыняты",
    "qso.rst.placeholder": "59",
    "qso.log": "Запісаць QSO",
    "qso.update": "Абнавіць QSO",
    "qso.cancel": "Скасаваць",
    "qso.duplicate": "Дублікат у гэтым журнале",

    "table.callsign": "Пазыўны",
    "table.time": "Час",
    "table.date": "Дата",
    "table.band": "Дыяпазон",
    "table.mode": "Від",
    "table.prop_mode": "Расп.",
    "table.rst_s": "RST П",
    "table.rst_r": "RST Пр",
    "table.empty": "QSO яшчэ не запісана.",
    "table.edit": "Змен.",
    "table.delete": "Выдал.",
    "table.edit.title": "Змяніць QSO",
    "table.delete.title": "Выдаліць QSO",

    "confirm.delete_logbook": "Выдаліць журнал «{0}» і яго {1} QSO?",
    "confirm.delete_qso": "Выдаліць QSO з {0}?",
    "confirm.no_callsign": "(без пазыўнога)",
    "alert.no_qsos_in_adif": "У гэтым ADIF-файле не знойдзена QSO.",
    "alert.import_failed": "Не атрымалася імпартаваць файл: {0}",

    "count.qso_one": "{0} QSO",
    "count.qso_many": "{0} QSO",
    "log.default_prefix": "Журнал",
    "log.imported_prefix": "Імпарт",
    "log.utc_suffix": "UTC",
  };
})();
