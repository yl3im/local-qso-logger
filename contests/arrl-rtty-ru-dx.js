/* ARRL RTTY Roundup — DX-station perspective.
 * https://www.arrl.org/rtty-roundup
 * Exchange (DX side): send RST + serial; receive RST + state/province
 * (W/VE) or serial (DX). RTTY (+ other digital modes). Runs the first full
 * weekend of January.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["arrl-rtty-ru-dx"] = {
    id: "arrl-rtty-ru-dx",
    name: "ARRL RTTY Roundup (DX side)",
    shortName: "ARRL RTTY RU (DX)",
    url: "https://www.arrl.org/rtty-roundup",
    windows: [
      { start: "2026-01-03T18:00:00Z", end: "2026-01-05T00:00:00Z" },
      { start: "2027-01-02T18:00:00Z", end: "2027-01-04T00:00:00Z" },
    ],
    bands: ["80m", "40m", "20m", "15m", "10m"],
    modes: ["RTTY"],
    exchange: [
      {
        id: "sent_serial", type: "serial", label: "My serial",
        placeholder: "001", required: true, maxLength: 4,
        adifField: "APP_LQ_SENT_SERIAL",
      },
      {
        id: "rcvd_qth", type: "text", label: "Their state/prov (W/VE) or serial (DX)",
        placeholder: "PA or 001", required: true, maxLength: 4,
        adifField: "APP_LQ_RCVD_QTH",
      },
    ],
    duplicateRule: "per-band-mode",
    cabrillo: {
      contest: "ARRL-RTTY",
      sentTemplate: ["rst_sent", "sent_serial"],
      rcvdTemplate: ["rst_rcvd", "rcvd_qth"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-ASSISTED", "CATEGORY-BAND",
        "CATEGORY-POWER",    "CATEGORY-STATION",  "CLUB",
        "NAME",              "ADDRESS",           "EMAIL", "SOAPBOX",
      ],
    },
  };
})();
