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
    "logbook.import": "Importer un fichier .adi",

    // Detail header
    "nolog.empty": "Sélectionnez ou créez un carnet pour commencer à enregistrer des QSO.",
    "detail.rename": "Renommer",
    "detail.export": "Exporter .adi",
    "detail.delete": "Supprimer le carnet",

    // QSO form
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
    "qso.gridsquare": "Locator",
    "qso.gridsquare.placeholder": "KO26BX",
    "qso.my_gridsquare": "Mon locator",
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
    "alert.import_failed": "Échec de l’importation : {0}",

    // Counts / generated names
    "count.qso_one": "{0} QSO",
    "count.qso_many": "{0} QSO",
    "log.default_prefix": "Journal",
    "log.imported_prefix": "Importé",
    "log.utc_suffix": "UTC",
  };
})();
