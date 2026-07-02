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
    "logbook.import": "Uvezi .adi datoteku",

    "nolog.empty": "Odaberite ili stvorite dnevnik za bilježenje QSO-a.",
    "detail.rename": "Preimenuj",
    "detail.export": "Izvezi .adi",
    "detail.delete": "Obriši dnevnik",

    "qso.block.station": "Podaci o stanici",
    "qso.block.operation": "Način rada",
    "qso.block.qso": "Podaci o QSO",
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
    "alert.import_failed": "Uvoz datoteke nije uspio: {0}",

    "count.qso_one": "{0} QSO",
    "count.qso_many": "{0} QSO",
    "log.default_prefix": "Dnevnik",
    "log.imported_prefix": "Uvezeno",
    "log.utc_suffix": "UTC",
  };
})();
