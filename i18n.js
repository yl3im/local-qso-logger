/* Bundled i18n catalog — 28 language dicts, one file for network efficiency.
 * Each language is a self-contained IIFE assigning window.I18N[<lang>] a
 * flat key→string map. Grep for "==== <lang> ====" to jump to a specific
 * language. Adding a new language = paste a new IIFE block at the
 * alphabetical position AND add its code to SUPPORTED_LANGS in app.js
 * plus a <select> option in index.html.
 *
 * Ships as one asset because the 28 individual files compressed to
 * ~50 KB gzipped where this bundle is ~27 KB — translation files are
 * highly repetitive (same key names, same placeholder syntax, same
 * section-comment structure), so gzip works far better across the whole
 * set than 28 tiny per-file streams. Saves ~23 KB / 27 HTTP requests
 * on first load.
 */

// ================================================================
// ==== be
// ================================================================
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
    "logbook.import": "Імпартаваць файл журнала",

    "logbook.contest": "Спаборніцтва",
    "logbook.contest.none": "— няма (звычайны журнал) —",
    "nolog.empty": "Абярыце або стварыце журнал, каб пачаць запісваць QSO.",
    "detail.rename": "Перайменаваць",
    "detail.export": "Экспарт .adi",
    "detail.delete": "Выдаліць журнал",

    "contest.export_cabrillo": "Экспартаваць .cbr",
    "contest.submission.heading": "Інфармацыя для падачы спаборніцтва (для .cbr)",
    "contest.window.warn": "Па-за акном часу спаборніцтва",
    "contest.band_mode.warn.band": "Дыяпазон {0} не ў спаборніцтве",
    "contest.band_mode.warn.mode": "Рэжым {0} не ў спаборніцтве",
    "qso.block.station": "Даныя станцыі",
    "qso.block.operation": "Рэжым працы",
    "qso.block.qso": "Даныя QSO",
    "qso.block.contest": "Абмен спаборніцтва",
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
    "alert.no_qsos_in_cbr": "У гэтым файле Cabrillo не знойдзена радкоў QSO:.",
    "alert.contest_not_recognized": "Метка спаборніцтва \"{0}\" адсутнічае ва ўбудаваным каталогу. Імпарт скасаваны.",
    "alert.cbr_malformed_qso": "Радкі QSO Cabrillo не адпавядаюць чаканай раскладцы слупкоў для {0}.",
    "alert.edi_unsupported": "Файлы EDI (REG1TEST) яшчэ не падтрымліваюцца — можна імпартаваць толькі ADIF (.adi) і Cabrillo (.cbr).",
    "alert.import_failed": "Не атрымалася імпартаваць файл: {0}",

    "count.qso_one": "{0} QSO",
    "count.qso_many": "{0} QSO",
    "log.default_prefix": "Журнал",
    "log.imported_prefix": "Імпарт",
    "log.utc_suffix": "UTC",
  };
})();

// ================================================================
// ==== bg
// ================================================================
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
    "logbook.import": "Импортиране на лог файл",

    "logbook.contest": "Състезание",
    "logbook.contest.none": "— няма (обикновен дневник) —",
    "nolog.empty": "Изберете или създайте дневник, за да започнете да записвате QSO.",
    "detail.rename": "Преименуване",
    "detail.export": "Експорт .adi",
    "detail.delete": "Изтриване на дневника",

    "contest.export_cabrillo": "Експорт .cbr",
    "contest.submission.heading": "Данни за подаване на състезанието (за .cbr)",
    "contest.window.warn": "Извън времевия прозорец на състезанието",
    "contest.band_mode.warn.band": "Обхватът {0} не е в състезанието",
    "contest.band_mode.warn.mode": "Режимът {0} не е в състезанието",
    "qso.block.station": "Данни за станцията",
    "qso.block.operation": "Режим на работа",
    "qso.block.qso": "QSO данни",
    "qso.block.contest": "Обмен на състезанието",
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
    "alert.no_qsos_in_cbr": "В този Cabrillo файл не бяха намерени редове QSO:.",
    "alert.contest_not_recognized": "Етикетът на състезание \"{0}\" не е в вградения каталог. Импортът е отменен.",
    "alert.cbr_malformed_qso": "Cabrillo QSO редовете не отговарят на очакваната подредба на колони за {0}.",
    "alert.edi_unsupported": "EDI (REG1TEST) файлове все още не се поддържат — могат да се импортират само ADIF (.adi) и Cabrillo (.cbr).",
    "alert.import_failed": "Импортът на файла не успя: {0}",

    "count.qso_one": "{0} QSO",
    "count.qso_many": "{0} QSO",
    "log.default_prefix": "Дневник",
    "log.imported_prefix": "Импортирано",
    "log.utc_suffix": "UTC",
  };
})();

// ================================================================
// ==== cs
// ================================================================
/* Czech translations for Local QSO Logger. */
(function () {
  window.I18N = window.I18N || {};
  window.I18N.cs = {
    "header.brand_by": "Local QSO Logger od",
    "header.tagline_html":
      'QSO deník pro radioamatéry respektující soukromí, který běží zcela ve vašem prohlížeči. ' +
      'Bez účtu, bez serveru, bez sledování, bez analytiky &mdash; vaše deníky jsou uloženy pouze v ' +
      '<code>localStorage</code> prohlížeče. Import a export ADIF (.adi), denní/noční motiv, funguje offline, vhodné pro mobilní zařízení. ' +
      'Otevřený zdrojový kód &mdash; <a href="https://github.com/yl3im/local-qso-logger" target="_blank" rel="noopener noreferrer external">prohlédnout na GitHubu</a>.',
    "header.theme.day": "Den",
    "header.theme.night": "Noc",
    "aria.theme_toggle": "Přepnout denní/noční motiv",
    "aria.language": "Jazyk rozhraní",

    "logbook.heading": "Deníky",
    "logbook.name.label": "Název deníku",
    "logbook.name.placeholder": "Field Day 2026 (auto, pokud prázdné)",
    "logbook.create": "Vytvořit deník",
    "logbook.import": "Importovat soubor deníku",

    "logbook.contest": "Soutěž",
    "logbook.contest.none": "— žádná (běžný deník) —",
    "nolog.empty": "Vyberte nebo vytvořte deník pro zahájení záznamu QSO.",
    "detail.rename": "Přejmenovat",
    "detail.export": "Exportovat .adi",
    "detail.delete": "Smazat deník",

    "contest.export_cabrillo": "Exportovat .cbr",
    "contest.submission.heading": "Informace pro odevzdání soutěže (pro .cbr)",
    "contest.window.warn": "Mimo časové okno soutěže",
    "contest.band_mode.warn.band": "Pásmo {0} není v soutěži",
    "contest.band_mode.warn.mode": "Mód {0} není v soutěži",
    "qso.block.station": "Údaje o stanici",
    "qso.block.operation": "Provozní režim",
    "qso.block.qso": "Údaje o QSO",
    "qso.block.contest": "Soutěžní výměna",
    "qso.station_callsign": "Značka stanice",
    "qso.operator": "Operátor",
    "qso.callsign": "Volací značka",
    "qso.callsign.placeholder": "DL1ABC",
    "qso.date": "Datum (UTC)",
    "qso.time": "Čas (UTC)",
    "qso.band": "Pásmo",
    "qso.mode": "Druh provozu",
    "qso.prop_mode": "Šíření",
    "qso.prop_mode.none": "(žádný)",
    "qso.sat_name": "Družice",
    "qso.band_rx": "RX pásmo",
    "qso.sat_mode": "Družicový mód",
    "qso.sat_mode.modern": "moderní",
    "qso.sat_mode.deprecated": "zastaralé",
    "qso.gridsquare": "Lokátor",
    "qso.gridsquare.placeholder": "KO26BX",
    "qso.my_gridsquare": "Můj lokátor",
    "qso.comment": "Komentář",
    "qso.comment.placeholder": "",
    "qso.rst_sent": "RST odeslaný",
    "qso.rst_rcvd": "RST přijatý",
    "qso.rst.placeholder": "59",
    "qso.log": "Zapsat QSO",
    "qso.update": "Aktualizovat QSO",
    "qso.cancel": "Zrušit",
    "qso.duplicate": "Duplikát v tomto deníku",

    "table.callsign": "Značka",
    "table.time": "Čas",
    "table.date": "Datum",
    "table.band": "Pásmo",
    "table.mode": "Druh",
    "table.prop_mode": "Šíř.",
    "table.rst_s": "RST O",
    "table.rst_r": "RST P",
    "table.empty": "Žádné QSO ještě nezapsáno.",
    "table.edit": "Upravit",
    "table.delete": "Smazat",
    "table.edit.title": "Upravit QSO",
    "table.delete.title": "Smazat QSO",

    "confirm.delete_logbook": "Smazat deník „{0}\" a jeho {1} QSO?",
    "confirm.delete_qso": "Smazat QSO s {0}?",
    "confirm.no_callsign": "(bez značky)",
    "alert.no_qsos_in_adif": "V tomto ADIF souboru nebyly nalezeny žádné QSO.",
    "alert.no_qsos_in_cbr": "V tomto souboru Cabrillo nebyly nalezeny žádné řádky QSO:.",
    "alert.contest_not_recognized": "Značka soutěže \"{0}\" není v zabudovaném katalogu. Import zrušen.",
    "alert.cbr_malformed_qso": "Řádky QSO Cabrillo neodpovídají očekávanému rozvržení sloupců pro {0}.",
    "alert.edi_unsupported": "Soubory EDI (REG1TEST) zatím nejsou podporovány — lze importovat pouze ADIF (.adi) a Cabrillo (.cbr).",
    "alert.import_failed": "Import souboru selhal: {0}",

    "count.qso_one": "{0} QSO",
    "count.qso_many": "{0} QSO",
    "log.default_prefix": "Deník",
    "log.imported_prefix": "Importováno",
    "log.utc_suffix": "UTC",
  };
})();

// ================================================================
// ==== da
// ================================================================
/* Danish translations for Local QSO Logger. */
(function () {
  window.I18N = window.I18N || {};
  window.I18N.da = {
    "header.brand_by": "Local QSO Logger af",
    "header.tagline_html":
      'En privatlivsrespekterende amatørradio-QSO-logger, der kører helt i din browser. ' +
      'Ingen konto, ingen server, ingen sporing, ingen analyse &mdash; dine logbøger findes kun i browserens ' +
      '<code>localStorage</code>. ADIF (.adi) import &amp; eksport, dag-/nattema, virker offline, mobilvenlig. ' +
      'Open source &mdash; <a href="https://github.com/yl3im/local-qso-logger" target="_blank" rel="noopener noreferrer external">se det på GitHub</a>.',
    "header.theme.day": "Dag",
    "header.theme.night": "Nat",
    "aria.theme_toggle": "Skift dag-/nattilstand",
    "aria.language": "Brugerfladesprog",

    "logbook.heading": "Logbøger",
    "logbook.name.label": "Logbogsnavn",
    "logbook.name.placeholder": "Field Day 2026 (auto hvis tomt)",
    "logbook.create": "Opret logbog",
    "logbook.import": "Importér logfil",

    "logbook.contest": "Konkurrence",
    "logbook.contest.none": "— ingen (almindelig log) —",
    "nolog.empty": "Vælg eller opret en logbog for at begynde at logge QSO.",
    "detail.rename": "Omdøb",
    "detail.export": "Eksportér .adi",
    "detail.delete": "Slet logbog",

    "contest.export_cabrillo": "Eksportér .cbr",
    "contest.submission.heading": "Konkurrence-indsendelsesinfo (til .cbr)",
    "contest.window.warn": "Uden for konkurrencens tidsvindue",
    "contest.band_mode.warn.band": "Bånd {0} indgår ikke i konkurrencen",
    "contest.band_mode.warn.mode": "Mode {0} indgår ikke i konkurrencen",
    "qso.block.station": "Stationsdata",
    "qso.block.operation": "Driftstilstand",
    "qso.block.qso": "QSO-data",
    "qso.block.contest": "Konkurrence-udveksling",
    "qso.station_callsign": "Stationskaldesignal",
    "qso.operator": "Operatør",
    "qso.callsign": "Kaldesignal",
    "qso.callsign.placeholder": "DL1ABC",
    "qso.date": "Dato (UTC)",
    "qso.time": "Tid (UTC)",
    "qso.band": "Bånd",
    "qso.mode": "Modulation",
    "qso.prop_mode": "Udbredelse",
    "qso.prop_mode.none": "(ingen)",
    "qso.sat_name": "Satellit",
    "qso.band_rx": "RX bånd",
    "qso.sat_mode": "Sat mode",
    "qso.sat_mode.modern": "moderne",
    "qso.sat_mode.deprecated": "forældet",
    "qso.gridsquare": "Locator",
    "qso.gridsquare.placeholder": "KO26BX",
    "qso.my_gridsquare": "Min locator",
    "qso.comment": "Kommentar",
    "qso.comment.placeholder": "",
    "qso.rst_sent": "RST sendt",
    "qso.rst_rcvd": "RST modtaget",
    "qso.rst.placeholder": "59",
    "qso.log": "Log QSO",
    "qso.update": "Opdater QSO",
    "qso.cancel": "Annuller",
    "qso.duplicate": "Dublet i denne logbog",

    "table.callsign": "Kaldesignal",
    "table.time": "Tid",
    "table.date": "Dato",
    "table.band": "Bånd",
    "table.mode": "Modulation",
    "table.prop_mode": "Udbr.",
    "table.rst_s": "RST S",
    "table.rst_r": "RST M",
    "table.empty": "Ingen QSO logget endnu.",
    "table.edit": "Rediger",
    "table.delete": "Slet",
    "table.edit.title": "Rediger QSO",
    "table.delete.title": "Slet QSO",

    "confirm.delete_logbook": "Slet logbogen „{0}\" og dens {1} QSO?",
    "confirm.delete_qso": "Slet QSO med {0}?",
    "confirm.no_callsign": "(intet kaldesignal)",
    "alert.no_qsos_in_adif": "Ingen QSO-poster fundet i denne ADIF-fil.",
    "alert.no_qsos_in_cbr": "Ingen QSO:-linjer fundet i denne Cabrillo-fil.",
    "alert.contest_not_recognized": "Konkurrence-tag \"{0}\" findes ikke i det medfølgende katalog. Import annulleret.",
    "alert.cbr_malformed_qso": "Cabrillo QSO-linjer matcher ikke den forventede kolonneopstilling for {0}.",
    "alert.edi_unsupported": "EDI-filer (REG1TEST) understøttes endnu ikke — kun ADIF (.adi) og Cabrillo (.cbr) kan importeres.",
    "alert.import_failed": "Kunne ikke importere filen: {0}",

    "count.qso_one": "{0} QSO",
    "count.qso_many": "{0} QSO",
    "log.default_prefix": "Log",
    "log.imported_prefix": "Importeret",
    "log.utc_suffix": "UTC",
  };
})();

// ================================================================
// ==== de
// ================================================================
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
    "logbook.import": "Log-Datei importieren",

    "logbook.contest": "Contest",
    "logbook.contest.none": "— keiner (normales Logbuch) —",
    // Detail header
    "nolog.empty": "Wählen Sie ein Logbuch aus oder legen Sie eines an, um QSOs zu erfassen.",
    "detail.rename": "Umbenennen",
    "detail.export": ".adi exportieren",
    "detail.delete": "Logbuch löschen",

    "contest.export_cabrillo": ".cbr exportieren",
    "contest.submission.heading": "Contest-Einreichungsdaten (für .cbr)",
    "contest.window.warn": "Außerhalb des Contest-Zeitfensters",
    "contest.band_mode.warn.band": "Band {0} nicht im Contest",
    "contest.band_mode.warn.mode": "Betriebsart {0} nicht im Contest",
    // QSO form
    "qso.block.station": "Stationsdaten",
    "qso.block.operation": "Betriebsart",
    "qso.block.qso": "QSO-Daten",
    "qso.block.contest": "Contest-Austausch",
    "qso.station_callsign": "Stationsrufzeichen",
    "qso.operator": "Operator",
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
    "qso.sat_mode.modern": "modern",
    "qso.sat_mode.deprecated": "veraltet",
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
    "alert.no_qsos_in_cbr": "In dieser Cabrillo-Datei wurden keine QSO:-Zeilen gefunden.",
    "alert.contest_not_recognized": "Contest-Kürzel \"{0}\" ist nicht im mitgelieferten Katalog. Import abgebrochen.",
    "alert.cbr_malformed_qso": "Cabrillo QSO-Zeilen passen nicht zum erwarteten Spaltenlayout für {0}.",
    "alert.edi_unsupported": "EDI-Dateien (REG1TEST) werden noch nicht unterstützt — es können nur ADIF (.adi) und Cabrillo (.cbr) importiert werden.",
    "alert.import_failed": "Datei konnte nicht importiert werden: {0}",

    // Counts / generated names
    "count.qso_one": "{0} QSO",
    "count.qso_many": "{0} QSOs",
    "log.default_prefix": "Log",
    "log.imported_prefix": "Importiert",
    "log.utc_suffix": "UTC",
  };
})();

// ================================================================
// ==== el
// ================================================================
/* Greek translations for Local QSO Logger. */
(function () {
  window.I18N = window.I18N || {};
  window.I18N.el = {
    "header.brand_by": "Local QSO Logger από",
    "header.tagline_html":
      'Ένας καταγραφέας QSO ραδιοερασιτεχνών που σέβεται την ιδιωτικότητα και εκτελείται εξ ολοκλήρου στον περιηγητή σας. ' +
      'Χωρίς λογαριασμό, χωρίς διακομιστή, χωρίς παρακολούθηση, χωρίς αναλυτικά &mdash; τα ημερολόγιά σας υπάρχουν μόνο στο ' +
      '<code>localStorage</code> του περιηγητή σας. Εισαγωγή και εξαγωγή ADIF (.adi), θέμα ημέρας/νύχτας, λειτουργεί εκτός σύνδεσης, φιλικό προς κινητά. ' +
      'Ανοιχτός κώδικας &mdash; <a href="https://github.com/yl3im/local-qso-logger" target="_blank" rel="noopener noreferrer external">δείτε στο GitHub</a>.',
    "header.theme.day": "Ημέρα",
    "header.theme.night": "Νύχτα",
    "aria.theme_toggle": "Εναλλαγή θέματος ημέρας/νύχτας",
    "aria.language": "Γλώσσα διεπαφής",

    "logbook.heading": "Ημερολόγια",
    "logbook.name.label": "Όνομα ημερολογίου",
    "logbook.name.placeholder": "Field Day 2026 (αυτόματα αν είναι κενό)",
    "logbook.create": "Δημιουργία ημερολογίου",
    "logbook.import": "Εισαγωγή αρχείου καταγραφής",

    "logbook.contest": "Αγώνας",
    "logbook.contest.none": "— κανένας (κανονική καταγραφή) —",
    "nolog.empty": "Επιλέξτε ή δημιουργήστε ένα ημερολόγιο για να ξεκινήσετε την καταγραφή QSO.",
    "detail.rename": "Μετονομασία",
    "detail.export": "Εξαγωγή .adi",
    "detail.delete": "Διαγραφή ημερολογίου",

    "contest.export_cabrillo": "Εξαγωγή .cbr",
    "contest.submission.heading": "Πληροφορίες υποβολής αγώνα (για .cbr)",
    "contest.window.warn": "Εκτός χρονικού παραθύρου του αγώνα",
    "contest.band_mode.warn.band": "Η ζώνη {0} δεν είναι στον αγώνα",
    "contest.band_mode.warn.mode": "Ο τρόπος {0} δεν είναι στον αγώνα",
    "qso.block.station": "Στοιχεία σταθμού",
    "qso.block.operation": "Λειτουργία",
    "qso.block.qso": "Στοιχεία QSO",
    "qso.block.contest": "Ανταλλαγή αγώνα",
    "qso.station_callsign": "Διακριτικό σταθμού",
    "qso.operator": "Χειριστής",
    "qso.callsign": "Διακριτικό",
    "qso.callsign.placeholder": "DL1ABC",
    "qso.date": "Ημερομηνία (UTC)",
    "qso.time": "Ώρα (UTC)",
    "qso.band": "Μπάντα",
    "qso.mode": "Τρόπος",
    "qso.prop_mode": "Διάδοση",
    "qso.prop_mode.none": "(κανένα)",
    "qso.sat_name": "Δορυφόρος",
    "qso.band_rx": "RX μπάντα",
    "qso.sat_mode": "Sat τρόπος",
    "qso.sat_mode.modern": "μοντέρνα",
    "qso.sat_mode.deprecated": "παρωχημένα",
    "qso.gridsquare": "Locator",
    "qso.gridsquare.placeholder": "KO26BX",
    "qso.my_gridsquare": "Ο locator μου",
    "qso.comment": "Σχόλιο",
    "qso.comment.placeholder": "",
    "qso.rst_sent": "RST απεσταλμένο",
    "qso.rst_rcvd": "RST ληφθέν",
    "qso.rst.placeholder": "59",
    "qso.log": "Καταγραφή QSO",
    "qso.update": "Ενημέρωση QSO",
    "qso.cancel": "Ακύρωση",
    "qso.duplicate": "Διπλότυπο σε αυτό το ημερολόγιο",

    "table.callsign": "Διακριτικό",
    "table.time": "Ώρα",
    "table.date": "Ημ/νία",
    "table.band": "Μπάντα",
    "table.mode": "Τρόπος",
    "table.prop_mode": "Διάδ.",
    "table.rst_s": "RST Α",
    "table.rst_r": "RST Λ",
    "table.empty": "Δεν έχουν καταγραφεί ακόμα QSO.",
    "table.edit": "Επεξ.",
    "table.delete": "Διαγρ.",
    "table.edit.title": "Επεξεργασία QSO",
    "table.delete.title": "Διαγραφή QSO",

    "confirm.delete_logbook": "Διαγραφή του ημερολογίου «{0}» και των {1} QSO του;",
    "confirm.delete_qso": "Διαγραφή QSO με {0};",
    "confirm.no_callsign": "(χωρίς διακριτικό)",
    "alert.no_qsos_in_adif": "Δεν βρέθηκαν εγγραφές QSO σε αυτό το αρχείο ADIF.",
    "alert.no_qsos_in_cbr": "Δεν βρέθηκαν γραμμές QSO: σε αυτό το αρχείο Cabrillo.",
    "alert.contest_not_recognized": "Η ετικέτα αγώνα \"{0}\" δεν υπάρχει στον ενσωματωμένο κατάλογο. Η εισαγωγή ακυρώθηκε.",
    "alert.cbr_malformed_qso": "Οι γραμμές QSO Cabrillo δεν ταιριάζουν με τη διάταξη στηλών που αναμένεται για τον αγώνα {0}.",
    "alert.edi_unsupported": "Τα αρχεία EDI (REG1TEST) δεν υποστηρίζονται ακόμα — μπορούν να εισαχθούν μόνο ADIF (.adi) και Cabrillo (.cbr).",
    "alert.import_failed": "Η εισαγωγή του αρχείου απέτυχε: {0}",

    "count.qso_one": "{0} QSO",
    "count.qso_many": "{0} QSO",
    "log.default_prefix": "Ημερολόγιο",
    "log.imported_prefix": "Εισήχθη",
    "log.utc_suffix": "UTC",
  };
})();

// ================================================================
// ==== en
// ================================================================
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
    "logbook.import": "Import log file",
    "logbook.contest": "Contest",
    "logbook.contest.none": "— none (regular log) —",

    // Detail header
    "nolog.empty": "Select or create a logbook to start logging QSOs.",
    "detail.rename": "Rename",
    "detail.export": "Export .adi",
    "detail.delete": "Delete log",
    "contest.export_cabrillo": "Export .cbr",
    "contest.submission.heading": "Contest submission info (for .cbr)",
    "contest.window.warn": "Outside contest window",
    "contest.band_mode.warn.band": "Band {0} not in contest",
    "contest.band_mode.warn.mode": "Mode {0} not in contest",

    // QSO form
    "qso.block.station": "Station data",
    "qso.block.operation": "Operation mode",
    "qso.block.qso": "QSO data",
    "qso.block.contest": "Contest exchange",
    "qso.station_callsign": "Station callsign",
    "qso.operator": "Operator",
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
    "qso.sat_mode.modern": "modern",
    "qso.sat_mode.deprecated": "deprecated",
    "qso.gridsquare": "Grid",
    "qso.gridsquare.placeholder": "KO26BX",
    "qso.my_gridsquare": "My grid",
    "qso.my_gridsquare.locate": "🌐",
    "qso.my_gridsquare.locate.aria": "Fetch grid from browser location",
    "qso.comment": "Comment",
    "qso.comment.placeholder": "",
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
    "alert.no_qsos_in_cbr": "No QSO: lines found in this Cabrillo file.",
    "alert.contest_not_recognized": "Contest tag \"{0}\" is not in the bundled catalog. Import cancelled.",
    "alert.cbr_malformed_qso": "Cabrillo QSO lines don't match the expected column layout for {0}.",
    "alert.edi_unsupported": "EDI (REG1TEST) files aren't supported yet — only ADIF (.adi) and Cabrillo (.cbr) can be imported.",
    "alert.import_failed": "Failed to import file: {0}",
    "alert.geolocation_unsupported": "Geolocation is not supported by this browser.",
    "alert.geolocation_failed": "Failed to get location: {0}",

    // Counts / generated names
    "count.qso_one": "{0} QSO",
    "count.qso_many": "{0} QSOs",
    "log.default_prefix": "Log",
    "log.imported_prefix": "Imported",
    "log.utc_suffix": "UTC",
  };
})();

// ================================================================
// ==== es
// ================================================================
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
    "logbook.import": "Importar archivo de registro",

    "logbook.contest": "Concurso",
    "logbook.contest.none": "— ninguno (registro normal) —",
    "nolog.empty": "Seleccione o cree un cuaderno para empezar a registrar QSO.",
    "detail.rename": "Renombrar",
    "detail.export": "Exportar .adi",
    "detail.delete": "Eliminar cuaderno",

    "contest.export_cabrillo": "Exportar .cbr",
    "contest.submission.heading": "Datos de envío del concurso (para .cbr)",
    "contest.window.warn": "Fuera de la ventana del concurso",
    "contest.band_mode.warn.band": "Banda {0} no incluida en el concurso",
    "contest.band_mode.warn.mode": "Modo {0} no incluido en el concurso",
    "qso.block.station": "Datos de la estación",
    "qso.block.operation": "Modo de operación",
    "qso.block.qso": "Datos del QSO",
    "qso.block.contest": "Intercambio del concurso",
    "qso.station_callsign": "Indicativo de la estación",
    "qso.operator": "Operador",
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
    "qso.sat_mode.modern": "moderno",
    "qso.sat_mode.deprecated": "obsoleto",
    "qso.gridsquare": "Localizador",
    "qso.gridsquare.placeholder": "KO26BX",
    "qso.my_gridsquare": "Mi localizador",
    "qso.comment": "Comentario",
    "qso.comment.placeholder": "",
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
    "alert.no_qsos_in_cbr": "No se encontraron líneas QSO: en este archivo Cabrillo.",
    "alert.contest_not_recognized": "La etiqueta de concurso \"{0}\" no está en el catálogo incluido. Importación cancelada.",
    "alert.cbr_malformed_qso": "Las líneas QSO de Cabrillo no coinciden con la disposición de columnas esperada para {0}.",
    "alert.edi_unsupported": "Los archivos EDI (REG1TEST) aún no son compatibles — solo se pueden importar ADIF (.adi) y Cabrillo (.cbr).",
    "alert.import_failed": "Error al importar el archivo: {0}",

    "count.qso_one": "{0} QSO",
    "count.qso_many": "{0} QSO",
    "log.default_prefix": "Registro",
    "log.imported_prefix": "Importado",
    "log.utc_suffix": "UTC",
  };
})();

// ================================================================
// ==== et
// ================================================================
/* Estonian translations for Local QSO Logger. */
(function () {
  window.I18N = window.I18N || {};
  window.I18N.et = {
    "header.brand_by": "Local QSO Logger — autor",
    "header.tagline_html":
      'Privaatsust austav amatöörraadio QSO-logija, mis töötab täielikult sinu brauseris. ' +
      'Konto pole vaja, serverit pole, jälgimist pole, analüütikat pole &mdash; sinu logiraamatud asuvad ainult brauseri ' +
      '<code>localStorage</code> mälus. ADIF (.adi) import ja eksport, päeva/öö teema, töötab võrguta, mobiilisõbralik. ' +
      'Avatud lähtekoodiga &mdash; <a href="https://github.com/yl3im/local-qso-logger" target="_blank" rel="noopener noreferrer external">vaata GitHubis</a>.',
    "header.theme.day": "Päev",
    "header.theme.night": "Öö",
    "aria.theme_toggle": "Vaheta päeva/öö teemat",
    "aria.language": "Liidese keel",

    "logbook.heading": "Logiraamatud",
    "logbook.name.label": "Logiraamatu nimi",
    "logbook.name.placeholder": "Field Day 2026 (auto, kui tühi)",
    "logbook.create": "Loo logiraamat",
    "logbook.import": "Impordi logifail",

    "logbook.contest": "Võistlus",
    "logbook.contest.none": "— pole (tavaline logi) —",
    "nolog.empty": "Vali või loo logiraamat, et alustada QSO-de registreerimist.",
    "detail.rename": "Nimeta ümber",
    "detail.export": "Ekspordi .adi",
    "detail.delete": "Kustuta logiraamat",

    "contest.export_cabrillo": "Ekspordi .cbr",
    "contest.submission.heading": "Võistluse esitamise info (.cbr jaoks)",
    "contest.window.warn": "Väljaspool võistluse ajaakent",
    "contest.band_mode.warn.band": "Sagedusala {0} ei ole võistluses",
    "contest.band_mode.warn.mode": "Töörežiim {0} ei ole võistluses",
    "qso.block.station": "Jaama andmed",
    "qso.block.operation": "Töörežiim",
    "qso.block.qso": "QSO andmed",
    "qso.block.contest": "Võistluse vahetus",
    "qso.station_callsign": "Jaama kutsung",
    "qso.operator": "Operaator",
    "qso.callsign": "Kutsung",
    "qso.callsign.placeholder": "DL1ABC",
    "qso.date": "Kuupäev (UTC)",
    "qso.time": "Aeg (UTC)",
    "qso.band": "Riba",
    "qso.mode": "Liik",
    "qso.prop_mode": "Levik",
    "qso.prop_mode.none": "(pole)",
    "qso.sat_name": "Satelliit",
    "qso.band_rx": "RX riba",
    "qso.sat_mode": "Sat režiim",
    "qso.sat_mode.modern": "kaasaegsed",
    "qso.sat_mode.deprecated": "vananenud",
    "qso.gridsquare": "Lokaator",
    "qso.gridsquare.placeholder": "KO26BX",
    "qso.my_gridsquare": "Minu lokaator",
    "qso.comment": "Kommentaar",
    "qso.comment.placeholder": "",
    "qso.rst_sent": "RST saadetud",
    "qso.rst_rcvd": "RST vastu võetud",
    "qso.rst.placeholder": "59",
    "qso.log": "Salvesta QSO",
    "qso.update": "Uuenda QSO-d",
    "qso.cancel": "Loobu",
    "qso.duplicate": "Duplikaat selles logis",

    "table.callsign": "Kutsung",
    "table.time": "Aeg",
    "table.date": "Kuupäev",
    "table.band": "Riba",
    "table.mode": "Liik",
    "table.prop_mode": "Levik",
    "table.rst_s": "RST S",
    "table.rst_r": "RST V",
    "table.empty": "QSO-sid pole veel salvestatud.",
    "table.edit": "Muuda",
    "table.delete": "Kustuta",
    "table.edit.title": "Muuda QSO-d",
    "table.delete.title": "Kustuta QSO",

    "confirm.delete_logbook": "Kustutada logiraamat „{0}\" ja selle {1} QSO?",
    "confirm.delete_qso": "Kustutada QSO {0}-ga?",
    "confirm.no_callsign": "(kutsungita)",
    "alert.no_qsos_in_adif": "Selles ADIF-failis ei leitud ühtegi QSO-d.",
    "alert.no_qsos_in_cbr": "Sellest Cabrillo failist ei leitud ühtegi QSO: rida.",
    "alert.contest_not_recognized": "Võistluse silt \"{0}\" ei ole komplekti kuuluvas kataloogis. Import tühistatud.",
    "alert.cbr_malformed_qso": "Cabrillo QSO read ei vasta oodatud veerupaigutusele võistluse {0} jaoks.",
    "alert.edi_unsupported": "EDI (REG1TEST) faile veel ei toetata — importida saab ainult ADIF (.adi) ja Cabrillo (.cbr).",
    "alert.import_failed": "Faili importimine ebaõnnestus: {0}",

    "count.qso_one": "{0} QSO",
    "count.qso_many": "{0} QSO-d",
    "log.default_prefix": "Logi",
    "log.imported_prefix": "Imporditud",
    "log.utc_suffix": "UTC",
  };
})();

// ================================================================
// ==== fi
// ================================================================
/* Finnish translations for Local QSO Logger. */
(function () {
  window.I18N = window.I18N || {};
  window.I18N.fi = {
    "header.brand_by": "Local QSO Logger — tekijä",
    "header.tagline_html":
      'Yksityisyyttä kunnioittava amatööriradion QSO-loki, joka toimii kokonaan selaimessasi. ' +
      'Ei tiliä, ei palvelinta, ei seurantaa, ei analytiikkaa &mdash; lokikirjasi pysyvät vain selaimesi ' +
      '<code>localStorage</code>-muistissa. ADIF (.adi) -tuonti ja -vienti, päivä-/yöteema, toimii offline-tilassa, mobiiliystävällinen. ' +
      'Avoimen lähdekoodin sovellus &mdash; <a href="https://github.com/yl3im/local-qso-logger" target="_blank" rel="noopener noreferrer external">katso GitHubista</a>.',
    "header.theme.day": "Päivä",
    "header.theme.night": "Yö",
    "aria.theme_toggle": "Vaihda päivä-/yötila",
    "aria.language": "Käyttöliittymän kieli",

    "logbook.heading": "Lokikirjat",
    "logbook.name.label": "Lokikirjan nimi",
    "logbook.name.placeholder": "Field Day 2026 (auto, jos tyhjä)",
    "logbook.create": "Luo lokikirja",
    "logbook.import": "Tuo lokitiedosto",

    "logbook.contest": "Kilpailu",
    "logbook.contest.none": "— ei mikään (tavallinen loki) —",
    "nolog.empty": "Valitse tai luo lokikirja aloittaaksesi QSO-tallennuksen.",
    "detail.rename": "Nimeä uudelleen",
    "detail.export": "Vie .adi",
    "detail.delete": "Poista lokikirja",

    "contest.export_cabrillo": "Vie .cbr",
    "contest.submission.heading": "Kilpailun lähetystiedot (.cbr:tä varten)",
    "contest.window.warn": "Kilpailun aikaikkunan ulkopuolella",
    "contest.band_mode.warn.band": "Kaista {0} ei ole mukana kilpailussa",
    "contest.band_mode.warn.mode": "Modi {0} ei ole mukana kilpailussa",
    "qso.block.station": "Aseman tiedot",
    "qso.block.operation": "Käyttötila",
    "qso.block.qso": "QSO-tiedot",
    "qso.block.contest": "Kilpailun vaihto",
    "qso.station_callsign": "Aseman kutsu",
    "qso.operator": "Operaattori",
    "qso.callsign": "Kutsumerkki",
    "qso.callsign.placeholder": "DL1ABC",
    "qso.date": "Päivä (UTC)",
    "qso.time": "Aika (UTC)",
    "qso.band": "Taajuusalue",
    "qso.mode": "Tila",
    "qso.prop_mode": "Eteneminen",
    "qso.prop_mode.none": "(ei mitään)",
    "qso.sat_name": "Satelliitti",
    "qso.band_rx": "RX-alue",
    "qso.sat_mode": "Sat tila",
    "qso.sat_mode.modern": "nykyaikaiset",
    "qso.sat_mode.deprecated": "vanhentuneet",
    "qso.gridsquare": "Lokaattori",
    "qso.gridsquare.placeholder": "KO26BX",
    "qso.my_gridsquare": "Oma lokaattori",
    "qso.comment": "Kommentti",
    "qso.comment.placeholder": "",
    "qso.rst_sent": "RST lähetetty",
    "qso.rst_rcvd": "RST vastaanotettu",
    "qso.rst.placeholder": "59",
    "qso.log": "Tallenna QSO",
    "qso.update": "Päivitä QSO",
    "qso.cancel": "Peruuta",
    "qso.duplicate": "Kaksoiskappale tässä lokissa",

    "table.callsign": "Kutsumerkki",
    "table.time": "Aika",
    "table.date": "Päivä",
    "table.band": "Taajuus",
    "table.mode": "Tila",
    "table.prop_mode": "Eten.",
    "table.rst_s": "RST L",
    "table.rst_r": "RST V",
    "table.empty": "Ei vielä tallennettuja QSO:ita.",
    "table.edit": "Muokkaa",
    "table.delete": "Poista",
    "table.edit.title": "Muokkaa QSO:ta",
    "table.delete.title": "Poista QSO",

    "confirm.delete_logbook": "Poistetaanko lokikirja ”{0}” ja sen {1} QSO?",
    "confirm.delete_qso": "Poistetaanko QSO {0} kanssa?",
    "confirm.no_callsign": "(ei kutsumerkkiä)",
    "alert.no_qsos_in_adif": "Tästä ADIF-tiedostosta ei löytynyt QSO-merkintöjä.",
    "alert.no_qsos_in_cbr": "Tästä Cabrillo-tiedostosta ei löytynyt QSO:-rivejä.",
    "alert.contest_not_recognized": "Kilpailutunnistetta \"{0}\" ei ole mukana toimitetussa luettelossa. Tuonti peruttu.",
    "alert.cbr_malformed_qso": "Cabrillo QSO -rivit eivät vastaa odotettua sarakejärjestystä kilpailulle {0}.",
    "alert.edi_unsupported": "EDI-tiedostoja (REG1TEST) ei vielä tueta — vain ADIF (.adi) ja Cabrillo (.cbr) voidaan tuoda.",
    "alert.import_failed": "Tiedoston tuonti epäonnistui: {0}",

    "count.qso_one": "{0} QSO",
    "count.qso_many": "{0} QSO",
    "log.default_prefix": "Loki",
    "log.imported_prefix": "Tuotu",
    "log.utc_suffix": "UTC",
  };
})();

// ================================================================
// ==== fr
// ================================================================
/* French translations for Local QSO Logger. */
(function () {
  window.I18N = window.I18N || {};
  window.I18N.fr = {
    // Header
    "header.brand_by": "Local QSO Logger par",
    "header.tagline_html":
      'Un journal de QSO radioamateur respectueux de la vie privée qui fonctionne entièrement dans votre navigateur. ' +
      'Pas de compte, pas de serveur, pas de pistage, pas d&rsquo;analytique &mdash; vos carnets ne quittent jamais le ' +
      '<code>localStorage</code> de votre navigateur. Import &amp; export ADIF (.adi), thème jour/nuit, fonctionne hors ligne, adapté au mobile. ' +
      'Open source &mdash; <a href="https://github.com/yl3im/local-qso-logger" target="_blank" rel="noopener noreferrer external">voir sur GitHub</a>.',
    "header.theme.day": "Jour",
    "header.theme.night": "Nuit",
    "aria.theme_toggle": "Basculer thème jour/nuit",
    "aria.language": "Langue de l’interface",

    // Logbook panel
    "logbook.heading": "Carnets",
    "logbook.name.label": "Nom du carnet",
    "logbook.name.placeholder": "Field Day 2026 (auto si vide)",
    "logbook.create": "Créer un carnet",
    "logbook.import": "Importer un fichier log",

    "logbook.contest": "Concours",
    "logbook.contest.none": "— aucun (carnet ordinaire) —",
    // Detail header
    "nolog.empty": "Sélectionnez ou créez un carnet pour commencer à enregistrer des QSO.",
    "detail.rename": "Renommer",
    "detail.export": "Exporter .adi",
    "detail.delete": "Supprimer le carnet",

    "contest.export_cabrillo": "Exporter .cbr",
    "contest.submission.heading": "Infos d'envoi du concours (pour .cbr)",
    "contest.window.warn": "Hors de la fenêtre horaire du concours",
    "contest.band_mode.warn.band": "Bande {0} pas dans le concours",
    "contest.band_mode.warn.mode": "Mode {0} pas dans le concours",
    // QSO form
    "qso.block.station": "Données de la station",
    "qso.block.operation": "Mode d'opération",
    "qso.block.qso": "Données du QSO",
    "qso.block.contest": "Échange du concours",
    "qso.station_callsign": "Indicatif de la station",
    "qso.operator": "Opérateur",
    "qso.callsign": "Indicatif",
    "qso.callsign.placeholder": "DL1ABC",
    "qso.date": "Date (UTC)",
    "qso.time": "Heure (UTC)",
    "qso.band": "Bande",
    "qso.mode": "Mode",
    "qso.prop_mode": "Propagation",
    "qso.prop_mode.none": "(aucun)",
    "qso.sat_name": "Satellite",
    "qso.band_rx": "Bande RX",
    "qso.sat_mode": "Mode sat",
    "qso.sat_mode.modern": "moderne",
    "qso.sat_mode.deprecated": "obsolète",
    "qso.gridsquare": "Locator",
    "qso.gridsquare.placeholder": "KO26BX",
    "qso.my_gridsquare": "Mon locator",
    "qso.comment": "Commentaire",
    "qso.comment.placeholder": "",
    "qso.rst_sent": "RST envoyé",
    "qso.rst_rcvd": "RST reçu",
    "qso.rst.placeholder": "59",
    "qso.log": "Enregistrer QSO",
    "qso.update": "Mettre à jour QSO",
    "qso.cancel": "Annuler",
    "qso.duplicate": "Doublon dans ce carnet",

    // QSO table
    "table.callsign": "Indicatif",
    "table.time": "Heure",
    "table.date": "Date",
    "table.band": "Bande",
    "table.mode": "Mode",
    "table.prop_mode": "Prop.",
    "table.rst_s": "RST E",
    "table.rst_r": "RST R",
    "table.empty": "Aucun QSO enregistré.",
    "table.edit": "Éditer",
    "table.delete": "Suppr.",
    "table.edit.title": "Éditer le QSO",
    "table.delete.title": "Supprimer le QSO",

    // Confirms / alerts
    "confirm.delete_logbook": "Supprimer le carnet « {0} » et ses {1} QSO ?",
    "confirm.delete_qso": "Supprimer le QSO avec {0} ?",
    "confirm.no_callsign": "(sans indicatif)",
    "alert.no_qsos_in_adif": "Aucun QSO trouvé dans ce fichier ADIF.",
    "alert.no_qsos_in_cbr": "Aucune ligne QSO: trouvée dans ce fichier Cabrillo.",
    "alert.contest_not_recognized": "L'étiquette de concours « {0} » ne figure pas dans le catalogue fourni. Import annulé.",
    "alert.cbr_malformed_qso": "Les lignes QSO Cabrillo ne correspondent pas à la disposition des colonnes attendue pour {0}.",
    "alert.edi_unsupported": "Les fichiers EDI (REG1TEST) ne sont pas encore pris en charge — seuls ADIF (.adi) et Cabrillo (.cbr) peuvent être importés.",
    "alert.import_failed": "Échec de l’importation : {0}",

    // Counts / generated names
    "count.qso_one": "{0} QSO",
    "count.qso_many": "{0} QSO",
    "log.default_prefix": "Journal",
    "log.imported_prefix": "Importé",
    "log.utc_suffix": "UTC",
  };
})();

// ================================================================
// ==== ga
// ================================================================
/* Irish (Gaeilge) translations for Local QSO Logger. */
(function () {
  window.I18N = window.I18N || {};
  window.I18N.ga = {
    "header.brand_by": "Local QSO Logger le",
    "header.tagline_html":
      'Loga QSO raidió amaitéarach a thugann meas don phríobháideacht agus a ritheann go hiomlán i do bhrabhsálaí. ' +
      'Gan cuntas, gan freastalaí, gan rianú, gan anailísíocht &mdash; ní fhanann do lóganna ach in ' +
      '<code>localStorage</code> do bhrabhsálaí. Iompórtáil agus easpórtáil ADIF (.adi), téama lae/oíche, oibríonn as líne, oiriúnach do ghuthán póca. ' +
      'Foinse oscailte &mdash; <a href="https://github.com/yl3im/local-qso-logger" target="_blank" rel="noopener noreferrer external">féach ar GitHub</a>.',
    "header.theme.day": "Lá",
    "header.theme.night": "Oíche",
    "aria.theme_toggle": "Athraigh téama lae/oíche",
    "aria.language": "Teanga an chomhéadain",

    "logbook.heading": "Lóganna",
    "logbook.name.label": "Ainm an lóga",
    "logbook.name.placeholder": "Field Day 2026 (uathoibríoch má tá folamh)",
    "logbook.create": "Cruthaigh lóg",
    "logbook.import": "Iompórtáil comhad loga",

    "logbook.contest": "Comórtas",
    "logbook.contest.none": "— aon (loga rialta) —",
    "nolog.empty": "Roghnaigh nó cruthaigh lóg chun QSOnna a thaifeadadh.",
    "detail.rename": "Athainmnigh",
    "detail.export": "Easpórtáil .adi",
    "detail.delete": "Scrios an lóg",

    "contest.export_cabrillo": "Easpórtáil .cbr",
    "contest.submission.heading": "Eolas seolta an chomórtais (le haghaidh .cbr)",
    "contest.window.warn": "Lasmuigh d'fhuinneog an chomórtais",
    "contest.band_mode.warn.band": "Níl an banda {0} sa chomórtas",
    "contest.band_mode.warn.mode": "Níl an mód {0} sa chomórtas",
    "qso.block.station": "Sonraí an stáisiúin",
    "qso.block.operation": "Modh oibrithe",
    "qso.block.qso": "Sonraí QSO",
    "qso.block.contest": "Malartú comórtais",
    "qso.station_callsign": "Comhartha glaoigh an stáisiúin",
    "qso.operator": "Oibreoir",
    "qso.callsign": "Glaomharc",
    "qso.callsign.placeholder": "DL1ABC",
    "qso.date": "Dáta (UTC)",
    "qso.time": "Am (UTC)",
    "qso.band": "Banda",
    "qso.mode": "Mód",
    "qso.prop_mode": "Iomadú",
    "qso.prop_mode.none": "(gan aon)",
    "qso.sat_name": "Satailít",
    "qso.band_rx": "Banda RX",
    "qso.sat_mode": "Mód sat",
    "qso.sat_mode.modern": "nua-aimseartha",
    "qso.sat_mode.deprecated": "dímholta",
    "qso.gridsquare": "Locator",
    "qso.gridsquare.placeholder": "KO26BX",
    "qso.my_gridsquare": "Mo locator",
    "qso.comment": "Nóta",
    "qso.comment.placeholder": "",
    "qso.rst_sent": "RST seolta",
    "qso.rst_rcvd": "RST faighte",
    "qso.rst.placeholder": "59",
    "qso.log": "Taifead QSO",
    "qso.update": "Nuashonraigh QSO",
    "qso.cancel": "Cealaigh",
    "qso.duplicate": "Dúblach sa lóg seo",

    "table.callsign": "Glaomharc",
    "table.time": "Am",
    "table.date": "Dáta",
    "table.band": "Banda",
    "table.mode": "Mód",
    "table.prop_mode": "Iom.",
    "table.rst_s": "RST S",
    "table.rst_r": "RST F",
    "table.empty": "Níl QSO ar bith taifeadta fós.",
    "table.edit": "Cuir in eagar",
    "table.delete": "Scrios",
    "table.edit.title": "Cuir QSO in eagar",
    "table.delete.title": "Scrios QSO",

    "confirm.delete_logbook": "Scrios an lóg „{0}\" agus a {1} QSO?",
    "confirm.delete_qso": "Scrios an QSO le {0}?",
    "confirm.no_callsign": "(gan glaomharc)",
    "alert.no_qsos_in_adif": "Níor aimsíodh aon QSO sa chomhad ADIF seo.",
    "alert.no_qsos_in_cbr": "Níor aimsíodh aon líne QSO: sa chomhad Cabrillo seo.",
    "alert.contest_not_recognized": "Níl an chlib chomórtais \"{0}\" sa chatalóg cumaisc. Iompórtáil cealaithe.",
    "alert.cbr_malformed_qso": "Ní chomhoireann línte QSO Cabrillo do leagan amach na gcolún atá súil leo don chomórtas {0}.",
    "alert.edi_unsupported": "Ní thacaítear le comhaid EDI (REG1TEST) fós — ní féidir ach ADIF (.adi) agus Cabrillo (.cbr) a iompórtáil.",
    "alert.import_failed": "Theip ar iompórtáil an chomhaid: {0}",

    "count.qso_one": "{0} QSO",
    "count.qso_many": "{0} QSO",
    "log.default_prefix": "Lóg",
    "log.imported_prefix": "Iompórtáilte",
    "log.utc_suffix": "UTC",
  };
})();

// ================================================================
// ==== hr
// ================================================================
/* Croatian translations for Local QSO Logger. */
(function () {
  window.I18N = window.I18N || {};
  window.I18N.hr = {
    "header.brand_by": "Local QSO Logger autor",
    "header.tagline_html":
      'QSO dnevnik za radioamatere koji poštuje privatnost i radi u potpunosti u vašem pregledniku. ' +
      'Bez računa, bez poslužitelja, bez praćenja, bez analitike &mdash; vaši dnevnici postoje samo u ' +
      '<code>localStorage</code> preglednika. Uvoz i izvoz ADIF (.adi), tema dan/noć, radi izvanmrežno, prilagođeno mobilnim uređajima. ' +
      'Otvoreni kod &mdash; <a href="https://github.com/yl3im/local-qso-logger" target="_blank" rel="noopener noreferrer external">pogledaj na GitHubu</a>.',
    "header.theme.day": "Dan",
    "header.theme.night": "Noć",
    "aria.theme_toggle": "Prebaci temu dan/noć",
    "aria.language": "Jezik sučelja",

    "logbook.heading": "Dnevnici",
    "logbook.name.label": "Naziv dnevnika",
    "logbook.name.placeholder": "Field Day 2026 (auto ako je prazno)",
    "logbook.create": "Stvori dnevnik",
    "logbook.import": "Uvezi datoteku dnevnika",

    "logbook.contest": "Natjecanje",
    "logbook.contest.none": "— nema (obični dnevnik) —",
    "nolog.empty": "Odaberite ili stvorite dnevnik za bilježenje QSO-a.",
    "detail.rename": "Preimenuj",
    "detail.export": "Izvezi .adi",
    "detail.delete": "Obriši dnevnik",

    "contest.export_cabrillo": "Izvezi .cbr",
    "contest.submission.heading": "Podaci za prijavu natjecanja (za .cbr)",
    "contest.window.warn": "Izvan vremenskog prozora natjecanja",
    "contest.band_mode.warn.band": "Pojas {0} nije u natjecanju",
    "contest.band_mode.warn.mode": "Mod {0} nije u natjecanju",
    "qso.block.station": "Podaci o stanici",
    "qso.block.operation": "Način rada",
    "qso.block.qso": "Podaci o QSO",
    "qso.block.contest": "Razmjena natjecanja",
    "qso.station_callsign": "Pozivni znak stanice",
    "qso.operator": "Operater",
    "qso.callsign": "Pozivni znak",
    "qso.callsign.placeholder": "DL1ABC",
    "qso.date": "Datum (UTC)",
    "qso.time": "Vrijeme (UTC)",
    "qso.band": "Pojas",
    "qso.mode": "Vrsta rada",
    "qso.prop_mode": "Propagacija",
    "qso.prop_mode.none": "(nema)",
    "qso.sat_name": "Satelit",
    "qso.band_rx": "RX pojas",
    "qso.sat_mode": "Sat način",
    "qso.sat_mode.modern": "moderno",
    "qso.sat_mode.deprecated": "zastarjelo",
    "qso.gridsquare": "Lokator",
    "qso.gridsquare.placeholder": "KO26BX",
    "qso.my_gridsquare": "Moj lokator",
    "qso.comment": "Komentar",
    "qso.comment.placeholder": "",
    "qso.rst_sent": "RST poslan",
    "qso.rst_rcvd": "RST primljen",
    "qso.rst.placeholder": "59",
    "qso.log": "Zabilježi QSO",
    "qso.update": "Ažuriraj QSO",
    "qso.cancel": "Odustani",
    "qso.duplicate": "Duplikat u ovom dnevniku",

    "table.callsign": "Znak",
    "table.time": "Vrijeme",
    "table.date": "Datum",
    "table.band": "Pojas",
    "table.mode": "Vrsta",
    "table.prop_mode": "Prop.",
    "table.rst_s": "RST P",
    "table.rst_r": "RST Pr",
    "table.empty": "Nema zabilježenih QSO-a.",
    "table.edit": "Uredi",
    "table.delete": "Obriši",
    "table.edit.title": "Uredi QSO",
    "table.delete.title": "Obriši QSO",

    "confirm.delete_logbook": "Obrisati dnevnik „{0}\" i njegovih {1} QSO?",
    "confirm.delete_qso": "Obrisati QSO sa {0}?",
    "confirm.no_callsign": "(bez pozivnog znaka)",
    "alert.no_qsos_in_adif": "U ovoj ADIF datoteci nije pronađen niti jedan QSO.",
    "alert.no_qsos_in_cbr": "U ovoj Cabrillo datoteci nisu pronađeni redovi QSO:.",
    "alert.contest_not_recognized": "Oznaka natjecanja \"{0}\" nije u priloženom katalogu. Uvoz otkazan.",
    "alert.cbr_malformed_qso": "Cabrillo QSO redovi ne odgovaraju očekivanom rasporedu stupaca za {0}.",
    "alert.edi_unsupported": "EDI (REG1TEST) datoteke još nisu podržane — mogu se uvesti samo ADIF (.adi) i Cabrillo (.cbr).",
    "alert.import_failed": "Uvoz datoteke nije uspio: {0}",

    "count.qso_one": "{0} QSO",
    "count.qso_many": "{0} QSO",
    "log.default_prefix": "Dnevnik",
    "log.imported_prefix": "Uvezeno",
    "log.utc_suffix": "UTC",
  };
})();

// ================================================================
// ==== hu
// ================================================================
/* Hungarian translations for Local QSO Logger. */
(function () {
  window.I18N = window.I18N || {};
  window.I18N.hu = {
    "header.brand_by": "Local QSO Logger — készítette",
    "header.tagline_html":
      'Adatvédelmet tisztelő amatőr rádió QSO-napló, amely teljes egészében a böngészőjében fut. ' +
      'Nincs fiók, nincs szerver, nincs követés, nincs analitika &mdash; naplói kizárólag a böngésző ' +
      '<code>localStorage</code> tárában találhatók. ADIF (.adi) import és export, nappali/éjszakai téma, offline működés, mobilbarát. ' +
      'Nyílt forráskódú &mdash; <a href="https://github.com/yl3im/local-qso-logger" target="_blank" rel="noopener noreferrer external">megnézés a GitHubon</a>.',
    "header.theme.day": "Nappal",
    "header.theme.night": "Éjszaka",
    "aria.theme_toggle": "Nappali/éjszakai téma váltása",
    "aria.language": "Felhasználói felület nyelve",

    "logbook.heading": "Naplók",
    "logbook.name.label": "Napló neve",
    "logbook.name.placeholder": "Field Day 2026 (auto, ha üres)",
    "logbook.create": "Napló létrehozása",
    "logbook.import": "Naplófájl importálása",

    "logbook.contest": "Verseny",
    "logbook.contest.none": "— nincs (szokásos napló) —",
    "nolog.empty": "Válasszon vagy hozzon létre egy naplót QSO-k rögzítéséhez.",
    "detail.rename": "Átnevezés",
    "detail.export": ".adi exportálása",
    "detail.delete": "Napló törlése",

    "contest.export_cabrillo": ".cbr exportálása",
    "contest.submission.heading": "Verseny beküldési adatai (.cbr fájlhoz)",
    "contest.window.warn": "A verseny időablakán kívül",
    "contest.band_mode.warn.band": "A(z) {0} sáv nincs a versenyben",
    "contest.band_mode.warn.mode": "A(z) {0} mód nincs a versenyben",
    "qso.block.station": "Állomás adatai",
    "qso.block.operation": "Üzemmód",
    "qso.block.qso": "QSO adatai",
    "qso.block.contest": "Verseny csere",
    "qso.station_callsign": "Állomás hívójele",
    "qso.operator": "Operátor",
    "qso.callsign": "Hívójel",
    "qso.callsign.placeholder": "DL1ABC",
    "qso.date": "Dátum (UTC)",
    "qso.time": "Idő (UTC)",
    "qso.band": "Sáv",
    "qso.mode": "Mód",
    "qso.prop_mode": "Terjedés",
    "qso.prop_mode.none": "(nincs)",
    "qso.sat_name": "Műhold",
    "qso.band_rx": "RX sáv",
    "qso.sat_mode": "Sat mód",
    "qso.sat_mode.modern": "modern",
    "qso.sat_mode.deprecated": "elavult",
    "qso.gridsquare": "Locator",
    "qso.gridsquare.placeholder": "KO26BX",
    "qso.my_gridsquare": "Saját locator",
    "qso.comment": "Megjegyzés",
    "qso.comment.placeholder": "",
    "qso.rst_sent": "RST adott",
    "qso.rst_rcvd": "RST kapott",
    "qso.rst.placeholder": "59",
    "qso.log": "QSO rögzítése",
    "qso.update": "QSO frissítése",
    "qso.cancel": "Mégse",
    "qso.duplicate": "Duplikátum ebben a naplóban",

    "table.callsign": "Hívójel",
    "table.time": "Idő",
    "table.date": "Dátum",
    "table.band": "Sáv",
    "table.mode": "Mód",
    "table.prop_mode": "Terj.",
    "table.rst_s": "RST A",
    "table.rst_r": "RST K",
    "table.empty": "Még nincs rögzített QSO.",
    "table.edit": "Szerk.",
    "table.delete": "Törlés",
    "table.edit.title": "QSO szerkesztése",
    "table.delete.title": "QSO törlése",

    "confirm.delete_logbook": "Törli a(z) „{0}\" naplót és annak {1} QSO-ját?",
    "confirm.delete_qso": "Törli a QSO-t {0} hívójellel?",
    "confirm.no_callsign": "(nincs hívójel)",
    "alert.no_qsos_in_adif": "Ebben az ADIF fájlban nem található QSO.",
    "alert.no_qsos_in_cbr": "Ebben a Cabrillo fájlban nem található QSO: sor.",
    "alert.contest_not_recognized": "A(z) \"{0}\" versenycímke nincs a beépített katalógusban. Importálás megszakítva.",
    "alert.cbr_malformed_qso": "A Cabrillo QSO sorok nem felelnek meg a(z) {0} versenyhez várt oszlopelrendezésnek.",
    "alert.edi_unsupported": "EDI (REG1TEST) fájlok még nem támogatottak — csak ADIF (.adi) és Cabrillo (.cbr) importálható.",
    "alert.import_failed": "A fájl importálása sikertelen: {0}",

    "count.qso_one": "{0} QSO",
    "count.qso_many": "{0} QSO",
    "log.default_prefix": "Napló",
    "log.imported_prefix": "Importálva",
    "log.utc_suffix": "UTC",
  };
})();

// ================================================================
// ==== it
// ================================================================
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
    "logbook.import": "Importa file di log",

    "logbook.contest": "Contest",
    "logbook.contest.none": "— nessuno (log normale) —",
    "nolog.empty": "Seleziona o crea un diario per iniziare a registrare i QSO.",
    "detail.rename": "Rinomina",
    "detail.export": "Esporta .adi",
    "detail.delete": "Elimina diario",

    "contest.export_cabrillo": "Esporta .cbr",
    "contest.submission.heading": "Dati di invio del contest (per .cbr)",
    "contest.window.warn": "Fuori dalla finestra temporale del contest",
    "contest.band_mode.warn.band": "Banda {0} non nel contest",
    "contest.band_mode.warn.mode": "Modo {0} non nel contest",
    "qso.block.station": "Dati stazione",
    "qso.block.operation": "Modalità operativa",
    "qso.block.qso": "Dati QSO",
    "qso.block.contest": "Scambio del contest",
    "qso.station_callsign": "Nominativo stazione",
    "qso.operator": "Operatore",
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
    "qso.sat_mode.modern": "moderno",
    "qso.sat_mode.deprecated": "obsoleto",
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
    "alert.no_qsos_in_cbr": "Nessuna riga QSO: trovata in questo file Cabrillo.",
    "alert.contest_not_recognized": "L'etichetta di contest \"{0}\" non è nel catalogo incluso. Importazione annullata.",
    "alert.cbr_malformed_qso": "Le righe QSO Cabrillo non corrispondono al layout di colonne atteso per {0}.",
    "alert.edi_unsupported": "I file EDI (REG1TEST) non sono ancora supportati — si possono importare solo ADIF (.adi) e Cabrillo (.cbr).",
    "alert.import_failed": "Importazione del file fallita: {0}",

    "count.qso_one": "{0} QSO",
    "count.qso_many": "{0} QSO",
    "log.default_prefix": "Log",
    "log.imported_prefix": "Importato",
    "log.utc_suffix": "UTC",
  };
})();

// ================================================================
// ==== lt
// ================================================================
/* Lithuanian translations for Local QSO Logger. */
(function () {
  window.I18N = window.I18N || {};
  window.I18N.lt = {
    "header.brand_by": "Local QSO Logger autorius",
    "header.tagline_html":
      'Privatumą gerbiantis radijo mėgėjų QSO žurnalas, veikiantis tik jūsų naršyklėje. ' +
      'Be paskyros, be serverio, be sekimo, be analitikos &mdash; jūsų žurnalai saugomi tik naršyklės ' +
      '<code>localStorage</code> atmintyje. ADIF (.adi) importas ir eksportas, dienos/nakties tema, veikia neprisijungus, pritaikyta mobiliesiems. ' +
      'Atvirojo kodo &mdash; <a href="https://github.com/yl3im/local-qso-logger" target="_blank" rel="noopener noreferrer external">žiūrėti GitHub</a>.',
    "header.theme.day": "Diena",
    "header.theme.night": "Naktis",
    "aria.theme_toggle": "Perjungti dienos/nakties temą",
    "aria.language": "Sąsajos kalba",

    "logbook.heading": "Žurnalai",
    "logbook.name.label": "Žurnalo pavadinimas",
    "logbook.name.placeholder": "Field Day 2026 (auto, jei tuščia)",
    "logbook.create": "Sukurti žurnalą",
    "logbook.import": "Importuoti žurnalo failą",

    "logbook.contest": "Varžybos",
    "logbook.contest.none": "— nėra (paprastas žurnalas) —",
    "nolog.empty": "Pasirinkite arba sukurkite žurnalą, kad pradėtumėte registruoti QSO.",
    "detail.rename": "Pervadinti",
    "detail.export": "Eksportuoti .adi",
    "detail.delete": "Ištrinti žurnalą",

    "contest.export_cabrillo": "Eksportuoti .cbr",
    "contest.submission.heading": "Varžybų teikimo informacija (.cbr failui)",
    "contest.window.warn": "Už varžybų laiko lango ribų",
    "contest.band_mode.warn.band": "Diapazonas {0} nėra varžybose",
    "contest.band_mode.warn.mode": "Režimas {0} nėra varžybose",
    "qso.block.station": "Stoties duomenys",
    "qso.block.operation": "Darbo režimas",
    "qso.block.qso": "QSO duomenys",
    "qso.block.contest": "Varžybų mainai",
    "qso.station_callsign": "Stoties šaukinys",
    "qso.operator": "Operatorius",
    "qso.callsign": "Šaukinys",
    "qso.callsign.placeholder": "DL1ABC",
    "qso.date": "Data (UTC)",
    "qso.time": "Laikas (UTC)",
    "qso.band": "Diapazonas",
    "qso.mode": "Modas",
    "qso.prop_mode": "Sklidimas",
    "qso.prop_mode.none": "(nėra)",
    "qso.sat_name": "Palydovas",
    "qso.band_rx": "RX diapazonas",
    "qso.sat_mode": "Sat modas",
    "qso.sat_mode.modern": "modernieji",
    "qso.sat_mode.deprecated": "pasenę",
    "qso.gridsquare": "Lokatorius",
    "qso.gridsquare.placeholder": "KO26BX",
    "qso.my_gridsquare": "Mano lokatorius",
    "qso.comment": "Komentaras",
    "qso.comment.placeholder": "",
    "qso.rst_sent": "RST išsiųsta",
    "qso.rst_rcvd": "RST gauta",
    "qso.rst.placeholder": "59",
    "qso.log": "Įrašyti QSO",
    "qso.update": "Atnaujinti QSO",
    "qso.cancel": "Atšaukti",
    "qso.duplicate": "Dublikatas šiame žurnale",

    "table.callsign": "Šaukinys",
    "table.time": "Laikas",
    "table.date": "Data",
    "table.band": "Diapazonas",
    "table.mode": "Modas",
    "table.prop_mode": "Skl.",
    "table.rst_s": "RST I",
    "table.rst_r": "RST G",
    "table.empty": "QSO dar neįrašyta.",
    "table.edit": "Redag.",
    "table.delete": "Trinti",
    "table.edit.title": "Redaguoti QSO",
    "table.delete.title": "Ištrinti QSO",

    "confirm.delete_logbook": "Ištrinti žurnalą „{0}\" ir jo {1} QSO?",
    "confirm.delete_qso": "Ištrinti QSO su {0}?",
    "confirm.no_callsign": "(be šaukinio)",
    "alert.no_qsos_in_adif": "Šiame ADIF faile QSO įrašų nerasta.",
    "alert.no_qsos_in_cbr": "Šiame Cabrillo faile nerasta QSO: eilučių.",
    "alert.contest_not_recognized": "Varžybų žymė \"{0}\" nėra pridedamajame kataloge. Importas atšauktas.",
    "alert.cbr_malformed_qso": "Cabrillo QSO eilutės neatitinka laukiamos stulpelių išdėstymo varžyboms {0}.",
    "alert.edi_unsupported": "EDI (REG1TEST) failai dar nepalaikomi — galima importuoti tik ADIF (.adi) ir Cabrillo (.cbr).",
    "alert.import_failed": "Nepavyko importuoti failo: {0}",

    "count.qso_one": "{0} QSO",
    "count.qso_many": "{0} QSO",
    "log.default_prefix": "Žurnalas",
    "log.imported_prefix": "Importuota",
    "log.utc_suffix": "UTC",
  };
})();

// ================================================================
// ==== lv
// ================================================================
/* Latvian translations for Local QSO Logger. */
(function () {
  window.I18N = window.I18N || {};
  window.I18N.lv = {
    // Header
    "header.brand_by": "Local QSO Logger no",
    "header.tagline_html":
      'Privātumu cienošs amatieru radio QSO žurnāls, kas pilnībā strādā jūsu pārlūkprogrammā. ' +
      'Bez konta, bez servera, bez izsekošanas, bez analītikas &mdash; jūsu žurnāli glabājas tikai pārlūka ' +
      '<code>localStorage</code> atmiņā. ADIF (.adi) imports un eksports, dienas/nakts tēma, strādā bezsaistē, piemērots mobilajām ierīcēm. ' +
      'Atvērtais pirmkods &mdash; <a href="https://github.com/yl3im/local-qso-logger" target="_blank" rel="noopener noreferrer external">skatīt GitHub</a>.',
    "header.theme.day": "Diena",
    "header.theme.night": "Nakts",
    "aria.theme_toggle": "Pārslēgt dienas/nakts tēmu",
    "aria.language": "Saskarnes valoda",

    // Logbook panel
    "logbook.heading": "Žurnāli",
    "logbook.name.label": "Žurnāla nosaukums",
    "logbook.name.placeholder": "Field Day 2026 (auto, ja tukšs)",
    "logbook.create": "Izveidot žurnālu",
    "logbook.import": "Importēt žurnāla failu",

    "logbook.contest": "Sacensības",
    "logbook.contest.none": "— nav (parasts žurnāls) —",
    // Detail header
    "nolog.empty": "Izvēlieties vai izveidojiet žurnālu, lai sāktu reģistrēt QSO.",
    "detail.rename": "Pārdēvēt",
    "detail.export": "Eksportēt .adi",
    "detail.delete": "Dzēst žurnālu",

    "contest.export_cabrillo": "Eksportēt .cbr",
    "contest.submission.heading": "Sacensību iesniegšanas informācija (priekš .cbr)",
    "contest.window.warn": "Ārpus sacensību laika loga",
    "contest.band_mode.warn.band": "Josla {0} nav sacensībās",
    "contest.band_mode.warn.mode": "Režīms {0} nav sacensībās",
    // QSO form
    "qso.block.station": "Stacijas dati",
    "qso.block.operation": "Darbības režīms",
    "qso.block.qso": "QSO dati",
    "qso.block.contest": "Sacensību apmaiņa",
    "qso.station_callsign": "Stacijas izsaukuma signāls",
    "qso.operator": "Operators",
    "qso.callsign": "Izsaukums",
    "qso.callsign.placeholder": "DL1ABC",
    "qso.date": "Datums (UTC)",
    "qso.time": "Laiks (UTC)",
    "qso.band": "Josla",
    "qso.mode": "Veids",
    "qso.prop_mode": "Izplatība",
    "qso.prop_mode.none": "(nav)",
    "qso.sat_name": "Satelīts",
    "qso.band_rx": "RX josla",
    "qso.sat_mode": "Sat režīms",
    "qso.sat_mode.modern": "modernie",
    "qso.sat_mode.deprecated": "novecojušie",
    "qso.gridsquare": "Lokators",
    "qso.gridsquare.placeholder": "KO26BX",
    "qso.my_gridsquare": "Mans lokators",
    "qso.comment": "Komentārs",
    "qso.comment.placeholder": "",
    "qso.rst_sent": "RST nosūtīts",
    "qso.rst_rcvd": "RST saņemts",
    "qso.rst.placeholder": "59",
    "qso.log": "Reģistrēt QSO",
    "qso.update": "Atjaunināt QSO",
    "qso.cancel": "Atcelt",
    "qso.duplicate": "Dublikāts šajā žurnālā",

    // QSO table
    "table.callsign": "Izsaukums",
    "table.time": "Laiks",
    "table.date": "Datums",
    "table.band": "Josla",
    "table.mode": "Veids",
    "table.prop_mode": "Izpl.",
    "table.rst_s": "RST Nos",
    "table.rst_r": "RST Saņ",
    "table.empty": "Vēl nav reģistrēts neviens QSO.",
    "table.edit": "Labot",
    "table.delete": "Dzēst",
    "table.edit.title": "Labot QSO",
    "table.delete.title": "Dzēst QSO",

    // Confirms / alerts
    "confirm.delete_logbook": "Dzēst žurnālu «{0}» un tā {1} QSO ierakstu(s)?",
    "confirm.delete_qso": "Dzēst QSO ar {0}?",
    "confirm.no_callsign": "(bez izsaukuma)",
    "alert.no_qsos_in_adif": "Šajā ADIF failā nav atrasts neviens QSO ieraksts.",
    "alert.no_qsos_in_cbr": "Šajā Cabrillo failā nav atrastas QSO: rindas.",
    "alert.contest_not_recognized": "Sacensību iezīme \"{0}\" nav iebūvētajā katalogā. Imports atcelts.",
    "alert.cbr_malformed_qso": "Cabrillo QSO rindas neatbilst gaidītajam kolonnu izkārtojumam sacensībām {0}.",
    "alert.edi_unsupported": "EDI (REG1TEST) faili vēl netiek atbalstīti — var importēt tikai ADIF (.adi) un Cabrillo (.cbr).",
    "alert.import_failed": "Neizdevās importēt failu: {0}",

    // Counts / generated names
    "count.qso_one": "{0} QSO",
    "count.qso_many": "{0} QSO",
    "log.default_prefix": "Žurnāls",
    "log.imported_prefix": "Importēts",
    "log.utc_suffix": "UTC",
  };
})();

// ================================================================
// ==== nl
// ================================================================
/* Dutch translations for Local QSO Logger. */
(function () {
  window.I18N = window.I18N || {};
  window.I18N.nl = {
    "header.brand_by": "Local QSO Logger door",
    "header.tagline_html":
      'Een privacyrespecterende amateurradio-QSO-logger die volledig in je browser draait. ' +
      'Geen account, geen server, geen tracking, geen analytics &mdash; je logboeken worden uitsluitend in de ' +
      '<code>localStorage</code> van je browser bewaard. ADIF (.adi) import en export, dag/nacht thema, werkt offline, mobielvriendelijk. ' +
      'Open source &mdash; <a href="https://github.com/yl3im/local-qso-logger" target="_blank" rel="noopener noreferrer external">bekijk op GitHub</a>.',
    "header.theme.day": "Dag",
    "header.theme.night": "Nacht",
    "aria.theme_toggle": "Schakel dag-/nachtthema om",
    "aria.language": "Interfacetaal",

    "logbook.heading": "Logboeken",
    "logbook.name.label": "Logboeknaam",
    "logbook.name.placeholder": "Field Day 2026 (auto indien leeg)",
    "logbook.create": "Logboek aanmaken",
    "logbook.import": "Log-bestand importeren",

    "logbook.contest": "Contest",
    "logbook.contest.none": "— geen (gewoon logboek) —",
    "nolog.empty": "Selecteer of maak een logboek aan om QSO's te loggen.",
    "detail.rename": "Hernoemen",
    "detail.export": ".adi exporteren",
    "detail.delete": "Logboek verwijderen",

    "contest.export_cabrillo": ".cbr exporteren",
    "contest.submission.heading": "Contest-indieningsgegevens (voor .cbr)",
    "contest.window.warn": "Buiten het contest-tijdvenster",
    "contest.band_mode.warn.band": "Band {0} niet in contest",
    "contest.band_mode.warn.mode": "Mode {0} niet in contest",
    "qso.block.station": "Stationsgegevens",
    "qso.block.operation": "Bedrijfsmodus",
    "qso.block.qso": "QSO-gegevens",
    "qso.block.contest": "Contest-uitwisseling",
    "qso.station_callsign": "Stationsroepnaam",
    "qso.operator": "Operator",
    "qso.callsign": "Roepteken",
    "qso.callsign.placeholder": "DL1ABC",
    "qso.date": "Datum (UTC)",
    "qso.time": "Tijd (UTC)",
    "qso.band": "Band",
    "qso.mode": "Modus",
    "qso.prop_mode": "Propagatie",
    "qso.prop_mode.none": "(geen)",
    "qso.sat_name": "Satelliet",
    "qso.band_rx": "RX band",
    "qso.sat_mode": "Sat mode",
    "qso.sat_mode.modern": "modern",
    "qso.sat_mode.deprecated": "verouderd",
    "qso.gridsquare": "Locator",
    "qso.gridsquare.placeholder": "KO26BX",
    "qso.my_gridsquare": "Mijn locator",
    "qso.comment": "Opmerking",
    "qso.comment.placeholder": "",
    "qso.rst_sent": "RST verzonden",
    "qso.rst_rcvd": "RST ontvangen",
    "qso.rst.placeholder": "59",
    "qso.log": "QSO loggen",
    "qso.update": "QSO bijwerken",
    "qso.cancel": "Annuleren",
    "qso.duplicate": "Duplicaat in dit logboek",

    "table.callsign": "Roepteken",
    "table.time": "Tijd",
    "table.date": "Datum",
    "table.band": "Band",
    "table.mode": "Modus",
    "table.prop_mode": "Prop.",
    "table.rst_s": "RST V",
    "table.rst_r": "RST O",
    "table.empty": "Nog geen QSO's gelogd.",
    "table.edit": "Bewerken",
    "table.delete": "Verwijderen",
    "table.edit.title": "QSO bewerken",
    "table.delete.title": "QSO verwijderen",

    "confirm.delete_logbook": "Logboek „{0}\" en zijn {1} QSO('s) verwijderen?",
    "confirm.delete_qso": "QSO met {0} verwijderen?",
    "confirm.no_callsign": "(geen roepteken)",
    "alert.no_qsos_in_adif": "Geen QSO's gevonden in dit ADIF-bestand.",
    "alert.no_qsos_in_cbr": "Geen QSO:-regels gevonden in dit Cabrillo-bestand.",
    "alert.contest_not_recognized": "Contest-tag \"{0}\" staat niet in de meegeleverde catalogus. Import geannuleerd.",
    "alert.cbr_malformed_qso": "Cabrillo QSO-regels komen niet overeen met de verwachte kolomindeling voor {0}.",
    "alert.edi_unsupported": "EDI-bestanden (REG1TEST) worden nog niet ondersteund — alleen ADIF (.adi) en Cabrillo (.cbr) kunnen worden geïmporteerd.",
    "alert.import_failed": "Importeren van bestand mislukt: {0}",

    "count.qso_one": "{0} QSO",
    "count.qso_many": "{0} QSO's",
    "log.default_prefix": "Log",
    "log.imported_prefix": "Geïmporteerd",
    "log.utc_suffix": "UTC",
  };
})();

// ================================================================
// ==== no
// ================================================================
/* Norwegian (Bokmål) translations for Local QSO Logger. */
(function () {
  window.I18N = window.I18N || {};
  window.I18N.no = {
    "header.brand_by": "Local QSO Logger av",
    "header.tagline_html":
      'En personvernvennlig amatørradio-QSO-logger som kjører helt i nettleseren din. ' +
      'Ingen konto, ingen server, ingen sporing, ingen analyse &mdash; loggbøkene dine ligger kun i nettleserens ' +
      '<code>localStorage</code>. ADIF (.adi) import og eksport, dag-/nattema, fungerer offline, mobilvennlig. ' +
      'Åpen kildekode &mdash; <a href="https://github.com/yl3im/local-qso-logger" target="_blank" rel="noopener noreferrer external">se det på GitHub</a>.',
    "header.theme.day": "Dag",
    "header.theme.night": "Natt",
    "aria.theme_toggle": "Bytt dag-/nattmodus",
    "aria.language": "Grensesnittspråk",

    "logbook.heading": "Loggbøker",
    "logbook.name.label": "Loggboknavn",
    "logbook.name.placeholder": "Field Day 2026 (auto hvis tomt)",
    "logbook.create": "Opprett loggbok",
    "logbook.import": "Importer loggfil",

    "logbook.contest": "Konkurranse",
    "logbook.contest.none": "— ingen (vanlig logg) —",
    "nolog.empty": "Velg eller opprett en loggbok for å begynne å logge QSO.",
    "detail.rename": "Gi nytt navn",
    "detail.export": "Eksporter .adi",
    "detail.delete": "Slett loggbok",

    "contest.export_cabrillo": "Eksporter .cbr",
    "contest.submission.heading": "Konkurranse-innsendingsinfo (for .cbr)",
    "contest.window.warn": "Utenfor konkurransens tidsvindu",
    "contest.band_mode.warn.band": "Bånd {0} er ikke med i konkurransen",
    "contest.band_mode.warn.mode": "Modus {0} er ikke med i konkurransen",
    "qso.block.station": "Stasjonsdata",
    "qso.block.operation": "Driftsmodus",
    "qso.block.qso": "QSO-data",
    "qso.block.contest": "Konkurranse-utveksling",
    "qso.station_callsign": "Stasjonens kallesignal",
    "qso.operator": "Operatør",
    "qso.callsign": "Kallesignal",
    "qso.callsign.placeholder": "DL1ABC",
    "qso.date": "Dato (UTC)",
    "qso.time": "Tid (UTC)",
    "qso.band": "Bånd",
    "qso.mode": "Modus",
    "qso.prop_mode": "Utbredelse",
    "qso.prop_mode.none": "(ingen)",
    "qso.sat_name": "Satellitt",
    "qso.band_rx": "RX bånd",
    "qso.sat_mode": "Sat modus",
    "qso.sat_mode.modern": "moderne",
    "qso.sat_mode.deprecated": "utdatert",
    "qso.gridsquare": "Locator",
    "qso.gridsquare.placeholder": "KO26BX",
    "qso.my_gridsquare": "Min locator",
    "qso.comment": "Kommentar",
    "qso.comment.placeholder": "",
    "qso.rst_sent": "RST sendt",
    "qso.rst_rcvd": "RST mottatt",
    "qso.rst.placeholder": "59",
    "qso.log": "Logg QSO",
    "qso.update": "Oppdater QSO",
    "qso.cancel": "Avbryt",
    "qso.duplicate": "Duplikat i denne loggboken",

    "table.callsign": "Kallesignal",
    "table.time": "Tid",
    "table.date": "Dato",
    "table.band": "Bånd",
    "table.mode": "Modus",
    "table.prop_mode": "Utbr.",
    "table.rst_s": "RST S",
    "table.rst_r": "RST M",
    "table.empty": "Ingen QSO loggført ennå.",
    "table.edit": "Endre",
    "table.delete": "Slett",
    "table.edit.title": "Endre QSO",
    "table.delete.title": "Slett QSO",

    "confirm.delete_logbook": "Slette loggboken «{0}» og dens {1} QSO?",
    "confirm.delete_qso": "Slette QSO med {0}?",
    "confirm.no_callsign": "(uten kallesignal)",
    "alert.no_qsos_in_adif": "Ingen QSO-oppføringer funnet i denne ADIF-filen.",
    "alert.no_qsos_in_cbr": "Ingen QSO:-linjer funnet i denne Cabrillo-filen.",
    "alert.contest_not_recognized": "Konkurranse-taggen \"{0}\" finnes ikke i den medfølgende katalogen. Import avbrutt.",
    "alert.cbr_malformed_qso": "Cabrillo QSO-linjer samsvarer ikke med forventet kolonneoppsett for {0}.",
    "alert.edi_unsupported": "EDI-filer (REG1TEST) støttes ikke ennå — bare ADIF (.adi) og Cabrillo (.cbr) kan importeres.",
    "alert.import_failed": "Kunne ikke importere filen: {0}",

    "count.qso_one": "{0} QSO",
    "count.qso_many": "{0} QSO",
    "log.default_prefix": "Logg",
    "log.imported_prefix": "Importert",
    "log.utc_suffix": "UTC",
  };
})();

// ================================================================
// ==== pl
// ================================================================
/* Polish translations for Local QSO Logger. */
(function () {
  window.I18N = window.I18N || {};
  window.I18N.pl = {
    "header.brand_by": "Local QSO Logger autorstwa",
    "header.tagline_html":
      'Szanujący prywatność dziennik QSO dla krótkofalowców, działający w całości w przeglądarce. ' +
      'Bez konta, bez serwera, bez śledzenia, bez analityki &mdash; Twoje dzienniki są przechowywane tylko w ' +
      '<code>localStorage</code> przeglądarki. Import i eksport ADIF (.adi), motyw dzień/noc, działa offline, przyjazny dla urządzeń mobilnych. ' +
      'Otwarte źródła &mdash; <a href="https://github.com/yl3im/local-qso-logger" target="_blank" rel="noopener noreferrer external">zobacz na GitHubie</a>.',
    "header.theme.day": "Dzień",
    "header.theme.night": "Noc",
    "aria.theme_toggle": "Przełącz motyw dzień/noc",
    "aria.language": "Język interfejsu",

    "logbook.heading": "Dzienniki",
    "logbook.name.label": "Nazwa dziennika",
    "logbook.name.placeholder": "Field Day 2026 (auto, jeśli puste)",
    "logbook.create": "Utwórz dziennik",
    "logbook.import": "Importuj plik dziennika",

    "logbook.contest": "Zawody",
    "logbook.contest.none": "— żadne (zwykły dziennik) —",
    "nolog.empty": "Wybierz lub utwórz dziennik, aby rozpocząć zapisywanie QSO.",
    "detail.rename": "Zmień nazwę",
    "detail.export": "Eksportuj .adi",
    "detail.delete": "Usuń dziennik",

    "contest.export_cabrillo": "Eksportuj .cbr",
    "contest.submission.heading": "Dane do zgłoszenia zawodów (dla .cbr)",
    "contest.window.warn": "Poza oknem czasowym zawodów",
    "contest.band_mode.warn.band": "Pasmo {0} nie jest w zawodach",
    "contest.band_mode.warn.mode": "Tryb {0} nie jest w zawodach",
    "qso.block.station": "Dane stacji",
    "qso.block.operation": "Tryb pracy",
    "qso.block.qso": "Dane QSO",
    "qso.block.contest": "Wymiana zawodów",
    "qso.station_callsign": "Znak stacji",
    "qso.operator": "Operator",
    "qso.callsign": "Znak",
    "qso.callsign.placeholder": "DL1ABC",
    "qso.date": "Data (UTC)",
    "qso.time": "Czas (UTC)",
    "qso.band": "Pasmo",
    "qso.mode": "Emisja",
    "qso.prop_mode": "Propagacja",
    "qso.prop_mode.none": "(brak)",
    "qso.sat_name": "Satelita",
    "qso.band_rx": "RX pasmo",
    "qso.sat_mode": "Sat tryb",
    "qso.sat_mode.modern": "nowoczesne",
    "qso.sat_mode.deprecated": "przestarzałe",
    "qso.gridsquare": "Lokator",
    "qso.gridsquare.placeholder": "KO26BX",
    "qso.my_gridsquare": "Mój lokator",
    "qso.comment": "Komentarz",
    "qso.comment.placeholder": "",
    "qso.rst_sent": "RST wysłany",
    "qso.rst_rcvd": "RST odebrany",
    "qso.rst.placeholder": "59",
    "qso.log": "Zapisz QSO",
    "qso.update": "Zaktualizuj QSO",
    "qso.cancel": "Anuluj",
    "qso.duplicate": "Duplikat w tym dzienniku",

    "table.callsign": "Znak",
    "table.time": "Czas",
    "table.date": "Data",
    "table.band": "Pasmo",
    "table.mode": "Emisja",
    "table.prop_mode": "Prop.",
    "table.rst_s": "RST W",
    "table.rst_r": "RST O",
    "table.empty": "Brak zapisanych QSO.",
    "table.edit": "Edytuj",
    "table.delete": "Usuń",
    "table.edit.title": "Edytuj QSO",
    "table.delete.title": "Usuń QSO",

    "confirm.delete_logbook": "Usunąć dziennik „{0}\" i jego {1} QSO?",
    "confirm.delete_qso": "Usunąć QSO z {0}?",
    "confirm.no_callsign": "(bez znaku)",
    "alert.no_qsos_in_adif": "Nie znaleziono wpisów QSO w tym pliku ADIF.",
    "alert.no_qsos_in_cbr": "W tym pliku Cabrillo nie znaleziono linii QSO:.",
    "alert.contest_not_recognized": "Znacznik zawodów \"{0}\" nie jest w wbudowanym katalogu. Import anulowany.",
    "alert.cbr_malformed_qso": "Linie QSO Cabrillo nie odpowiadają oczekiwanemu układowi kolumn dla {0}.",
    "alert.edi_unsupported": "Pliki EDI (REG1TEST) nie są jeszcze obsługiwane — można importować tylko ADIF (.adi) i Cabrillo (.cbr).",
    "alert.import_failed": "Nie udało się zaimportować pliku: {0}",

    "count.qso_one": "{0} QSO",
    "count.qso_many": "{0} QSO",
    "log.default_prefix": "Dziennik",
    "log.imported_prefix": "Zaimportowano",
    "log.utc_suffix": "UTC",
  };
})();

// ================================================================
// ==== pt
// ================================================================
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
    "logbook.import": "Importar ficheiro de log",

    "logbook.contest": "Concurso",
    "logbook.contest.none": "— nenhum (log regular) —",
    "nolog.empty": "Selecione ou crie um caderno para começar a registar QSO.",
    "detail.rename": "Renomear",
    "detail.export": "Exportar .adi",
    "detail.delete": "Eliminar caderno",

    "contest.export_cabrillo": "Exportar .cbr",
    "contest.submission.heading": "Dados de submissão do concurso (para .cbr)",
    "contest.window.warn": "Fora da janela do concurso",
    "contest.band_mode.warn.band": "Banda {0} não está no concurso",
    "contest.band_mode.warn.mode": "Modo {0} não está no concurso",
    "qso.block.station": "Dados da estação",
    "qso.block.operation": "Modo de operação",
    "qso.block.qso": "Dados do QSO",
    "qso.block.contest": "Troca do concurso",
    "qso.station_callsign": "Indicativo da estação",
    "qso.operator": "Operador",
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
    "qso.sat_mode.modern": "moderno",
    "qso.sat_mode.deprecated": "obsoleto",
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
    "alert.no_qsos_in_cbr": "Não foram encontradas linhas QSO: neste ficheiro Cabrillo.",
    "alert.contest_not_recognized": "A etiqueta de concurso \"{0}\" não está no catálogo incluído. Importação cancelada.",
    "alert.cbr_malformed_qso": "As linhas QSO Cabrillo não correspondem à disposição de colunas esperada para {0}.",
    "alert.edi_unsupported": "Ficheiros EDI (REG1TEST) ainda não são suportados — só ADIF (.adi) e Cabrillo (.cbr) podem ser importados.",
    "alert.import_failed": "Falha ao importar o ficheiro: {0}",

    "count.qso_one": "{0} QSO",
    "count.qso_many": "{0} QSO",
    "log.default_prefix": "Registo",
    "log.imported_prefix": "Importado",
    "log.utc_suffix": "UTC",
  };
})();

// ================================================================
// ==== ro
// ================================================================
/* Romanian translations for Local QSO Logger. */
(function () {
  window.I18N = window.I18N || {};
  window.I18N.ro = {
    "header.brand_by": "Local QSO Logger de",
    "header.tagline_html":
      'Un jurnal QSO pentru radioamatori care respectă confidențialitatea și rulează în întregime în browserul dvs. ' +
      'Fără cont, fără server, fără urmărire, fără analitică &mdash; jurnalele dvs. există doar în ' +
      '<code>localStorage</code>-ul browserului. Import și export ADIF (.adi), temă zi/noapte, funcționează offline, prietenos cu mobilul. ' +
      'Cod sursă deschis &mdash; <a href="https://github.com/yl3im/local-qso-logger" target="_blank" rel="noopener noreferrer external">vezi pe GitHub</a>.',
    "header.theme.day": "Zi",
    "header.theme.night": "Noapte",
    "aria.theme_toggle": "Comută tema zi/noapte",
    "aria.language": "Limba interfeței",

    "logbook.heading": "Jurnale",
    "logbook.name.label": "Numele jurnalului",
    "logbook.name.placeholder": "Field Day 2026 (auto dacă e gol)",
    "logbook.create": "Creează jurnal",
    "logbook.import": "Importă fișier de jurnal",

    "logbook.contest": "Concurs",
    "logbook.contest.none": "— niciunul (jurnal obișnuit) —",
    "nolog.empty": "Selectați sau creați un jurnal pentru a începe să înregistrați QSO-uri.",
    "detail.rename": "Redenumește",
    "detail.export": "Exportă .adi",
    "detail.delete": "Șterge jurnalul",

    "contest.export_cabrillo": "Exportă .cbr",
    "contest.submission.heading": "Informații de trimitere pentru concurs (pentru .cbr)",
    "contest.window.warn": "În afara ferestrei de timp a concursului",
    "contest.band_mode.warn.band": "Banda {0} nu este în concurs",
    "contest.band_mode.warn.mode": "Modul {0} nu este în concurs",
    "qso.block.station": "Date stație",
    "qso.block.operation": "Mod de operare",
    "qso.block.qso": "Date QSO",
    "qso.block.contest": "Schimb de concurs",
    "qso.station_callsign": "Indicativ stație",
    "qso.operator": "Operator",
    "qso.callsign": "Indicativ",
    "qso.callsign.placeholder": "DL1ABC",
    "qso.date": "Dată (UTC)",
    "qso.time": "Oră (UTC)",
    "qso.band": "Bandă",
    "qso.mode": "Mod",
    "qso.prop_mode": "Propagare",
    "qso.prop_mode.none": "(niciunul)",
    "qso.sat_name": "Satelit",
    "qso.band_rx": "Bandă RX",
    "qso.sat_mode": "Mod sat",
    "qso.sat_mode.modern": "modern",
    "qso.sat_mode.deprecated": "învechit",
    "qso.gridsquare": "Locator",
    "qso.gridsquare.placeholder": "KO26BX",
    "qso.my_gridsquare": "Locator propriu",
    "qso.comment": "Comentariu",
    "qso.comment.placeholder": "",
    "qso.rst_sent": "RST transmis",
    "qso.rst_rcvd": "RST recepționat",
    "qso.rst.placeholder": "59",
    "qso.log": "Înregistrează QSO",
    "qso.update": "Actualizează QSO",
    "qso.cancel": "Anulează",
    "qso.duplicate": "Duplicat în acest jurnal",

    "table.callsign": "Indicativ",
    "table.time": "Oră",
    "table.date": "Dată",
    "table.band": "Bandă",
    "table.mode": "Mod",
    "table.prop_mode": "Prop.",
    "table.rst_s": "RST T",
    "table.rst_r": "RST R",
    "table.empty": "Niciun QSO înregistrat încă.",
    "table.edit": "Editează",
    "table.delete": "Șterge",
    "table.edit.title": "Editează QSO",
    "table.delete.title": "Șterge QSO",

    "confirm.delete_logbook": "Ștergi jurnalul „{0}\" și cele {1} QSO-uri ale sale?",
    "confirm.delete_qso": "Ștergi QSO-ul cu {0}?",
    "confirm.no_callsign": "(fără indicativ)",
    "alert.no_qsos_in_adif": "Nu s-au găsit QSO-uri în acest fișier ADIF.",
    "alert.no_qsos_in_cbr": "Nu s-au găsit linii QSO: în acest fișier Cabrillo.",
    "alert.contest_not_recognized": "Eticheta de concurs \"{0}\" nu este în catalogul inclus. Import anulat.",
    "alert.cbr_malformed_qso": "Liniile QSO Cabrillo nu corespund cu aranjamentul de coloane așteptat pentru {0}.",
    "alert.edi_unsupported": "Fișierele EDI (REG1TEST) nu sunt încă suportate — se pot importa doar ADIF (.adi) și Cabrillo (.cbr).",
    "alert.import_failed": "Importul fișierului a eșuat: {0}",

    "count.qso_one": "{0} QSO",
    "count.qso_many": "{0} QSO",
    "log.default_prefix": "Jurnal",
    "log.imported_prefix": "Importat",
    "log.utc_suffix": "UTC",
  };
})();

// ================================================================
// ==== ru
// ================================================================
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
    "logbook.import": "Импортировать файл журнала",

    "logbook.contest": "Соревнование",
    "logbook.contest.none": "— нет (обычный журнал) —",
    // Detail header
    "nolog.empty": "Выберите или создайте журнал, чтобы начать записывать QSO.",
    "detail.rename": "Переименовать",
    "detail.export": "Экспорт .adi",
    "detail.delete": "Удалить журнал",

    "contest.export_cabrillo": "Экспортировать .cbr",
    "contest.submission.heading": "Информация для подачи соревнования (для .cbr)",
    "contest.window.warn": "Вне временного окна соревнования",
    "contest.band_mode.warn.band": "Диапазон {0} не в соревновании",
    "contest.band_mode.warn.mode": "Режим {0} не в соревновании",
    // QSO form
    "qso.block.station": "Данные станции",
    "qso.block.operation": "Режим работы",
    "qso.block.qso": "Данные QSO",
    "qso.block.contest": "Обмен соревнования",
    "qso.station_callsign": "Позывной станции",
    "qso.operator": "Оператор",
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
    "qso.sat_mode.modern": "современные",
    "qso.sat_mode.deprecated": "устаревшие",
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
    "alert.no_qsos_in_cbr": "В этом файле Cabrillo не найдено строк QSO:.",
    "alert.contest_not_recognized": "Метка соревнования \"{0}\" отсутствует во встроенном каталоге. Импорт отменён.",
    "alert.cbr_malformed_qso": "Строки QSO Cabrillo не соответствуют ожидаемой раскладке столбцов для {0}.",
    "alert.edi_unsupported": "Файлы EDI (REG1TEST) пока не поддерживаются — можно импортировать только ADIF (.adi) и Cabrillo (.cbr).",
    "alert.import_failed": "Не удалось импортировать файл: {0}",

    // Counts / generated names
    "count.qso_one": "{0} QSO",
    "count.qso_many": "{0} QSO",
    "log.default_prefix": "Журнал",
    "log.imported_prefix": "Импорт",
    "log.utc_suffix": "UTC",
  };
})();

// ================================================================
// ==== sk
// ================================================================
/* Slovak translations for Local QSO Logger. */
(function () {
  window.I18N = window.I18N || {};
  window.I18N.sk = {
    "header.brand_by": "Local QSO Logger od",
    "header.tagline_html":
      'QSO denník pre rádioamatérov rešpektujúci súkromie, ktorý beží úplne vo vašom prehliadači. ' +
      'Bez účtu, bez servera, bez sledovania, bez analytiky &mdash; vaše denníky sú uložené iba v ' +
      '<code>localStorage</code> prehliadača. Import a export ADIF (.adi), denný/nočný motív, funguje offline, vhodné pre mobilné zariadenia. ' +
      'Otvorený zdrojový kód &mdash; <a href="https://github.com/yl3im/local-qso-logger" target="_blank" rel="noopener noreferrer external">pozrieť na GitHube</a>.',
    "header.theme.day": "Deň",
    "header.theme.night": "Noc",
    "aria.theme_toggle": "Prepnúť denný/nočný motív",
    "aria.language": "Jazyk rozhrania",

    "logbook.heading": "Denníky",
    "logbook.name.label": "Názov denníka",
    "logbook.name.placeholder": "Field Day 2026 (auto, ak prázdne)",
    "logbook.create": "Vytvoriť denník",
    "logbook.import": "Importovať súbor denníka",

    "logbook.contest": "Súťaž",
    "logbook.contest.none": "— žiadna (bežný denník) —",
    "nolog.empty": "Vyberte alebo vytvorte denník na začatie záznamu QSO.",
    "detail.rename": "Premenovať",
    "detail.export": "Exportovať .adi",
    "detail.delete": "Vymazať denník",

    "contest.export_cabrillo": "Exportovať .cbr",
    "contest.submission.heading": "Informácie na odovzdanie súťaže (pre .cbr)",
    "contest.window.warn": "Mimo časového okna súťaže",
    "contest.band_mode.warn.band": "Pásmo {0} nie je v súťaži",
    "contest.band_mode.warn.mode": "Mód {0} nie je v súťaži",
    "qso.block.station": "Údaje o stanici",
    "qso.block.operation": "Prevádzkový režim",
    "qso.block.qso": "Údaje o QSO",
    "qso.block.contest": "Súťažná výmena",
    "qso.station_callsign": "Značka stanice",
    "qso.operator": "Operátor",
    "qso.callsign": "Volacia značka",
    "qso.callsign.placeholder": "DL1ABC",
    "qso.date": "Dátum (UTC)",
    "qso.time": "Čas (UTC)",
    "qso.band": "Pásmo",
    "qso.mode": "Druh prevádzky",
    "qso.prop_mode": "Šírenie",
    "qso.prop_mode.none": "(žiadny)",
    "qso.sat_name": "Družica",
    "qso.band_rx": "RX pásmo",
    "qso.sat_mode": "Družicový mód",
    "qso.sat_mode.modern": "moderné",
    "qso.sat_mode.deprecated": "zastarané",
    "qso.gridsquare": "Lokátor",
    "qso.gridsquare.placeholder": "KO26BX",
    "qso.my_gridsquare": "Môj lokátor",
    "qso.comment": "Komentár",
    "qso.comment.placeholder": "",
    "qso.rst_sent": "RST odoslaný",
    "qso.rst_rcvd": "RST prijatý",
    "qso.rst.placeholder": "59",
    "qso.log": "Zapísať QSO",
    "qso.update": "Aktualizovať QSO",
    "qso.cancel": "Zrušiť",
    "qso.duplicate": "Duplikát v tomto denníku",

    "table.callsign": "Značka",
    "table.time": "Čas",
    "table.date": "Dátum",
    "table.band": "Pásmo",
    "table.mode": "Druh",
    "table.prop_mode": "Šír.",
    "table.rst_s": "RST O",
    "table.rst_r": "RST P",
    "table.empty": "Žiadne QSO ešte nezapísané.",
    "table.edit": "Upraviť",
    "table.delete": "Vymazať",
    "table.edit.title": "Upraviť QSO",
    "table.delete.title": "Vymazať QSO",

    "confirm.delete_logbook": "Vymazať denník „{0}\" a jeho {1} QSO?",
    "confirm.delete_qso": "Vymazať QSO s {0}?",
    "confirm.no_callsign": "(bez značky)",
    "alert.no_qsos_in_adif": "V tomto ADIF súbore neboli nájdené žiadne QSO.",
    "alert.no_qsos_in_cbr": "V tomto súbore Cabrillo neboli nájdené žiadne riadky QSO:.",
    "alert.contest_not_recognized": "Značka súťaže \"{0}\" nie je v zabudovanom katalógu. Import zrušený.",
    "alert.cbr_malformed_qso": "Riadky QSO Cabrillo nezodpovedajú očakávanému rozloženiu stĺpcov pre {0}.",
    "alert.edi_unsupported": "Súbory EDI (REG1TEST) zatiaľ nie sú podporované — možno importovať iba ADIF (.adi) a Cabrillo (.cbr).",
    "alert.import_failed": "Import súboru zlyhal: {0}",

    "count.qso_one": "{0} QSO",
    "count.qso_many": "{0} QSO",
    "log.default_prefix": "Denník",
    "log.imported_prefix": "Importované",
    "log.utc_suffix": "UTC",
  };
})();

// ================================================================
// ==== sl
// ================================================================
/* Slovenian translations for Local QSO Logger. */
(function () {
  window.I18N = window.I18N || {};
  window.I18N.sl = {
    "header.brand_by": "Local QSO Logger avtor",
    "header.tagline_html":
      'QSO dnevnik za radioamaterje, ki spoštuje zasebnost in deluje v celoti v vašem brskalniku. ' +
      'Brez računa, brez strežnika, brez sledenja, brez analitike &mdash; vaši dnevniki obstajajo le v ' +
      '<code>localStorage</code> brskalnika. Uvoz in izvoz ADIF (.adi), tema dan/noč, deluje brez povezave, prijazno do mobilnih naprav. ' +
      'Odprta koda &mdash; <a href="https://github.com/yl3im/local-qso-logger" target="_blank" rel="noopener noreferrer external">poglej na GitHubu</a>.',
    "header.theme.day": "Dan",
    "header.theme.night": "Noč",
    "aria.theme_toggle": "Preklopi temo dan/noč",
    "aria.language": "Jezik vmesnika",

    "logbook.heading": "Dnevniki",
    "logbook.name.label": "Ime dnevnika",
    "logbook.name.placeholder": "Field Day 2026 (samodejno, če je prazno)",
    "logbook.create": "Ustvari dnevnik",
    "logbook.import": "Uvozi datoteko dnevnika",

    "logbook.contest": "Tekmovanje",
    "logbook.contest.none": "— nič (običajen dnevnik) —",
    "nolog.empty": "Izberite ali ustvarite dnevnik za začetek beleženja QSO.",
    "detail.rename": "Preimenuj",
    "detail.export": "Izvozi .adi",
    "detail.delete": "Izbriši dnevnik",

    "contest.export_cabrillo": "Izvozi .cbr",
    "contest.submission.heading": "Informacije za oddajo tekmovanja (za .cbr)",
    "contest.window.warn": "Izven časovnega okna tekmovanja",
    "contest.band_mode.warn.band": "Pas {0} ni v tekmovanju",
    "contest.band_mode.warn.mode": "Način {0} ni v tekmovanju",
    "qso.block.station": "Podatki postaje",
    "qso.block.operation": "Način delovanja",
    "qso.block.qso": "Podatki QSO",
    "qso.block.contest": "Tekmovalna izmenjava",
    "qso.station_callsign": "Klicni znak postaje",
    "qso.operator": "Operater",
    "qso.callsign": "Klicni znak",
    "qso.callsign.placeholder": "DL1ABC",
    "qso.date": "Datum (UTC)",
    "qso.time": "Čas (UTC)",
    "qso.band": "Pas",
    "qso.mode": "Vrsta",
    "qso.prop_mode": "Širjenje",
    "qso.prop_mode.none": "(brez)",
    "qso.sat_name": "Satelit",
    "qso.band_rx": "RX pas",
    "qso.sat_mode": "Sat način",
    "qso.sat_mode.modern": "sodobno",
    "qso.sat_mode.deprecated": "opuščeno",
    "qso.gridsquare": "Lokator",
    "qso.gridsquare.placeholder": "KO26BX",
    "qso.my_gridsquare": "Moj lokator",
    "qso.comment": "Komentar",
    "qso.comment.placeholder": "",
    "qso.rst_sent": "RST oddan",
    "qso.rst_rcvd": "RST sprejet",
    "qso.rst.placeholder": "59",
    "qso.log": "Zabeleži QSO",
    "qso.update": "Posodobi QSO",
    "qso.cancel": "Prekliči",
    "qso.duplicate": "Dvojnik v tem dnevniku",

    "table.callsign": "Znak",
    "table.time": "Čas",
    "table.date": "Datum",
    "table.band": "Pas",
    "table.mode": "Vrsta",
    "table.prop_mode": "Šir.",
    "table.rst_s": "RST O",
    "table.rst_r": "RST S",
    "table.empty": "Še ni zabeleženih QSO.",
    "table.edit": "Uredi",
    "table.delete": "Izbriši",
    "table.edit.title": "Uredi QSO",
    "table.delete.title": "Izbriši QSO",

    "confirm.delete_logbook": "Izbrišem dnevnik »{0}« in njegovih {1} QSO?",
    "confirm.delete_qso": "Izbrišem QSO z {0}?",
    "confirm.no_callsign": "(brez klicnega znaka)",
    "alert.no_qsos_in_adif": "V tej datoteki ADIF ni najdenih QSO.",
    "alert.no_qsos_in_cbr": "V tej datoteki Cabrillo ni najdenih vrstic QSO:.",
    "alert.contest_not_recognized": "Oznaka tekmovanja \"{0}\" ni v vgrajenem katalogu. Uvoz preklican.",
    "alert.cbr_malformed_qso": "Vrstice QSO Cabrillo se ne ujemajo s pričakovano razporeditvijo stolpcev za {0}.",
    "alert.edi_unsupported": "Datoteke EDI (REG1TEST) še niso podprte — uvoziti je mogoče samo ADIF (.adi) in Cabrillo (.cbr).",
    "alert.import_failed": "Uvoz datoteke ni uspel: {0}",

    "count.qso_one": "{0} QSO",
    "count.qso_many": "{0} QSO",
    "log.default_prefix": "Dnevnik",
    "log.imported_prefix": "Uvožen",
    "log.utc_suffix": "UTC",
  };
})();

// ================================================================
// ==== sr
// ================================================================
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
    "logbook.import": "Увези датотеку дневника",

    "logbook.contest": "Такмичење",
    "logbook.contest.none": "— ниједно (обичан дневник) —",
    "nolog.empty": "Изаберите или креирајте дневник да бисте почели да бележите QSO.",
    "detail.rename": "Преименуј",
    "detail.export": "Извези .adi",
    "detail.delete": "Обриши дневник",

    "contest.export_cabrillo": "Извези .cbr",
    "contest.submission.heading": "Подаци за пријаву такмичења (за .cbr)",
    "contest.window.warn": "Ван временског прозора такмичења",
    "contest.band_mode.warn.band": "Опсег {0} није у такмичењу",
    "contest.band_mode.warn.mode": "Режим {0} није у такмичењу",
    "qso.block.station": "Подаци станице",
    "qso.block.operation": "Режим рада",
    "qso.block.qso": "QSO подаци",
    "qso.block.contest": "Размена такмичења",
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
    "alert.no_qsos_in_cbr": "У овој Cabrillo датотеци нису пронађени редови QSO:.",
    "alert.contest_not_recognized": "Ознака такмичења \"{0}\" није у уграђеном каталогу. Увоз отказан.",
    "alert.cbr_malformed_qso": "Cabrillo QSO редови не одговарају очекиваном распореду колона за {0}.",
    "alert.edi_unsupported": "EDI (REG1TEST) датотеке још нису подржане — могу се увести само ADIF (.adi) и Cabrillo (.cbr).",
    "alert.import_failed": "Увоз датотеке није успео: {0}",

    "count.qso_one": "{0} QSO",
    "count.qso_many": "{0} QSO",
    "log.default_prefix": "Дневник",
    "log.imported_prefix": "Увезено",
    "log.utc_suffix": "UTC",
  };
})();

// ================================================================
// ==== sv
// ================================================================
/* Swedish translations for Local QSO Logger. */
(function () {
  window.I18N = window.I18N || {};
  window.I18N.sv = {
    "header.brand_by": "Local QSO Logger av",
    "header.tagline_html":
      'En integritetsvänlig amatörradio-QSO-logg som körs helt i din webbläsare. ' +
      'Inget konto, ingen server, ingen spårning, ingen analys &mdash; dina loggböcker finns enbart i webbläsarens ' +
      '<code>localStorage</code>. ADIF (.adi) import &amp; export, dag-/nattema, fungerar offline, mobilvänlig. ' +
      'Öppen källkod &mdash; <a href="https://github.com/yl3im/local-qso-logger" target="_blank" rel="noopener noreferrer external">se på GitHub</a>.',
    "header.theme.day": "Dag",
    "header.theme.night": "Natt",
    "aria.theme_toggle": "Växla dag-/nattläge",
    "aria.language": "Gränssnittsspråk",

    "logbook.heading": "Loggböcker",
    "logbook.name.label": "Loggboksnamn",
    "logbook.name.placeholder": "Field Day 2026 (auto om tomt)",
    "logbook.create": "Skapa loggbok",
    "logbook.import": "Importera loggfil",

    "logbook.contest": "Tävling",
    "logbook.contest.none": "— ingen (vanlig logg) —",
    "nolog.empty": "Välj eller skapa en loggbok för att börja logga QSO.",
    "detail.rename": "Byt namn",
    "detail.export": "Exportera .adi",
    "detail.delete": "Radera loggbok",

    "contest.export_cabrillo": "Exportera .cbr",
    "contest.submission.heading": "Tävlingsinlämningsinfo (för .cbr)",
    "contest.window.warn": "Utanför tävlingens tidsfönster",
    "contest.band_mode.warn.band": "Bandet {0} ingår inte i tävlingen",
    "contest.band_mode.warn.mode": "Läget {0} ingår inte i tävlingen",
    "qso.block.station": "Stationsdata",
    "qso.block.operation": "Driftläge",
    "qso.block.qso": "QSO-data",
    "qso.block.contest": "Tävlingsutbyte",
    "qso.station_callsign": "Stationens anropssignal",
    "qso.operator": "Operatör",
    "qso.callsign": "Anropssignal",
    "qso.callsign.placeholder": "DL1ABC",
    "qso.date": "Datum (UTC)",
    "qso.time": "Tid (UTC)",
    "qso.band": "Band",
    "qso.mode": "Mod",
    "qso.prop_mode": "Utbredning",
    "qso.prop_mode.none": "(ingen)",
    "qso.sat_name": "Satellit",
    "qso.band_rx": "RX-band",
    "qso.sat_mode": "Sat mod",
    "qso.sat_mode.modern": "moderna",
    "qso.sat_mode.deprecated": "föråldrade",
    "qso.gridsquare": "Locator",
    "qso.gridsquare.placeholder": "KO26BX",
    "qso.my_gridsquare": "Min locator",
    "qso.comment": "Kommentar",
    "qso.comment.placeholder": "",
    "qso.rst_sent": "RST skickat",
    "qso.rst_rcvd": "RST mottaget",
    "qso.rst.placeholder": "59",
    "qso.log": "Logga QSO",
    "qso.update": "Uppdatera QSO",
    "qso.cancel": "Avbryt",
    "qso.duplicate": "Dublett i denna loggbok",

    "table.callsign": "Anrop",
    "table.time": "Tid",
    "table.date": "Datum",
    "table.band": "Band",
    "table.mode": "Mod",
    "table.prop_mode": "Utb.",
    "table.rst_s": "RST S",
    "table.rst_r": "RST M",
    "table.empty": "Inga QSO loggade ännu.",
    "table.edit": "Ändra",
    "table.delete": "Radera",
    "table.edit.title": "Ändra QSO",
    "table.delete.title": "Radera QSO",

    "confirm.delete_logbook": "Radera loggboken ”{0}” och dess {1} QSO?",
    "confirm.delete_qso": "Radera QSO med {0}?",
    "confirm.no_callsign": "(ingen anropssignal)",
    "alert.no_qsos_in_adif": "Inga QSO-poster hittades i denna ADIF-fil.",
    "alert.no_qsos_in_cbr": "Inga QSO:-rader hittades i denna Cabrillo-fil.",
    "alert.contest_not_recognized": "Tävlingstaggen \"{0}\" finns inte i den medföljande katalogen. Import avbruten.",
    "alert.cbr_malformed_qso": "Cabrillo QSO-rader stämmer inte med den förväntade kolumnlayouten för {0}.",
    "alert.edi_unsupported": "EDI-filer (REG1TEST) stöds ännu inte — endast ADIF (.adi) och Cabrillo (.cbr) kan importeras.",
    "alert.import_failed": "Kunde inte importera filen: {0}",

    "count.qso_one": "{0} QSO",
    "count.qso_many": "{0} QSO",
    "log.default_prefix": "Logg",
    "log.imported_prefix": "Importerad",
    "log.utc_suffix": "UTC",
  };
})();

// ================================================================
// ==== uk
// ================================================================
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
    "logbook.import": "Імпортувати файл журналу",

    "logbook.contest": "Змагання",
    "logbook.contest.none": "— немає (звичайний журнал) —",
    "nolog.empty": "Виберіть або створіть журнал, щоб почати записувати QSO.",
    "detail.rename": "Перейменувати",
    "detail.export": "Експорт .adi",
    "detail.delete": "Видалити журнал",

    "contest.export_cabrillo": "Експортувати .cbr",
    "contest.submission.heading": "Інформація для подання змагання (для .cbr)",
    "contest.window.warn": "Поза часовим вікном змагання",
    "contest.band_mode.warn.band": "Діапазон {0} не в змаганні",
    "contest.band_mode.warn.mode": "Режим {0} не в змаганні",
    "qso.block.station": "Дані станції",
    "qso.block.operation": "Режим роботи",
    "qso.block.qso": "Дані QSO",
    "qso.block.contest": "Обмін змагання",
    "qso.station_callsign": "Позивний станції",
    "qso.operator": "Оператор",
    "qso.callsign": "Позивний",
    "qso.callsign.placeholder": "DL1ABC",
    "qso.date": "Дата (UTC)",
    "qso.time": "Час (UTC)",
    "qso.band": "Діапазон",
    "qso.mode": "Вид",
    "qso.prop_mode": "Поширення",
    "qso.prop_mode.none": "(немає)",
    "qso.sat_name": "Супутник",
    "qso.band_rx": "RX діапазон",
    "qso.sat_mode": "Сат режим",
    "qso.sat_mode.modern": "сучасні",
    "qso.sat_mode.deprecated": "застарілі",
    "qso.gridsquare": "Локатор",
    "qso.gridsquare.placeholder": "KO26BX",
    "qso.my_gridsquare": "Мій локатор",
    "qso.comment": "Коментар",
    "qso.comment.placeholder": "",
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
    "table.prop_mode": "Пош.",
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
    "alert.no_qsos_in_cbr": "У цьому файлі Cabrillo не знайдено рядків QSO:.",
    "alert.contest_not_recognized": "Мітка змагання \"{0}\" відсутня у вбудованому каталозі. Імпорт скасовано.",
    "alert.cbr_malformed_qso": "Рядки QSO Cabrillo не відповідають очікуваному розкладу стовпців для {0}.",
    "alert.edi_unsupported": "Файли EDI (REG1TEST) ще не підтримуються — можна імпортувати лише ADIF (.adi) і Cabrillo (.cbr).",
    "alert.import_failed": "Не вдалося імпортувати файл: {0}",

    "count.qso_one": "{0} QSO",
    "count.qso_many": "{0} QSO",
    "log.default_prefix": "Журнал",
    "log.imported_prefix": "Імпорт",
    "log.utc_suffix": "UTC",
  };
})();
