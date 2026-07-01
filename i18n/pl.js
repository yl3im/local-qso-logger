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
    "logbook.import": "Importuj plik .adi",

    "nolog.empty": "Wybierz lub utwórz dziennik, aby rozpocząć zapisywanie QSO.",
    "detail.rename": "Zmień nazwę",
    "detail.export": "Eksportuj .adi",
    "detail.delete": "Usuń dziennik",

    "qso.block.station": "Dane stacji",
    "qso.block.operation": "Tryb pracy",
    "qso.block.qso": "Dane QSO",
    "qso.station_callsign": "Znak stacji",
    "qso.operator": "Operator",
    "qso.operator.placeholder": "Jan Kowalski",
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
    "alert.import_failed": "Nie udało się zaimportować pliku: {0}",

    "count.qso_one": "{0} QSO",
    "count.qso_many": "{0} QSO",
    "log.default_prefix": "Dziennik",
    "log.imported_prefix": "Zaimportowano",
    "log.utc_suffix": "UTC",
  };
})();
