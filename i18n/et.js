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
    "logbook.import": "Impordi .adi fail",

    "nolog.empty": "Vali või loo logiraamat, et alustada QSO-de registreerimist.",
    "detail.rename": "Nimeta ümber",
    "detail.export": "Ekspordi .adi",
    "detail.delete": "Kustuta logiraamat",

    "qso.callsign": "Kutsung",
    "qso.callsign.placeholder": "DL1ABC",
    "qso.date": "Kuupäev (UTC)",
    "qso.time": "Aeg (UTC)",
    "qso.band": "Riba",
    "qso.mode": "Liik",
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
    "alert.import_failed": "Faili importimine ebaõnnestus: {0}",

    "count.qso_one": "{0} QSO",
    "count.qso_many": "{0} QSO-d",
    "log.default_prefix": "Logi",
    "log.imported_prefix": "Imporditud",
    "log.utc_suffix": "UTC",
  };
})();
