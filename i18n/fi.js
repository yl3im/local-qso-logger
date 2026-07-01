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
    "logbook.import": "Tuo .adi-tiedosto",

    "nolog.empty": "Valitse tai luo lokikirja aloittaaksesi QSO-tallennuksen.",
    "detail.rename": "Nimeä uudelleen",
    "detail.export": "Vie .adi",
    "detail.delete": "Poista lokikirja",

    "qso.block.station": "Aseman tiedot",
    "qso.block.operation": "Käyttötila",
    "qso.block.qso": "QSO-tiedot",
    "qso.station_callsign": "Aseman kutsu",
    "qso.operator": "Operaattori",
    "qso.operator.placeholder": "Matti Meikäläinen",
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
    "alert.import_failed": "Tiedoston tuonti epäonnistui: {0}",

    "count.qso_one": "{0} QSO",
    "count.qso_many": "{0} QSO",
    "log.default_prefix": "Loki",
    "log.imported_prefix": "Tuotu",
    "log.utc_suffix": "UTC",
  };
})();
