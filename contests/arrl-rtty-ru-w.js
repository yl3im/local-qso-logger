/* ARRL RTTY Roundup — US/Canadian station perspective.
 * https://www.arrl.org/rtty-roundup
 * Exchange (W/VE side): send RST + state/province; receive RST + state/prov
 * (from other W/VE) or serial (from DX). RTTY. Runs the first full weekend
 * of January.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["arrl-rtty-ru-w"] = {
    id: "arrl-rtty-ru-w",
    name: "ARRL RTTY Roundup (W/VE side)",
    shortName: "ARRL RTTY RU (W/VE)",
    url: "https://www.arrl.org/rtty-roundup",
    windows: [
      { start: "2026-01-03T18:00:00Z", end: "2026-01-05T00:00:00Z" },
      { start: "2027-01-02T18:00:00Z", end: "2027-01-04T00:00:00Z" },
    ],
    bands: ["80m", "40m", "20m", "15m", "10m"],
    modes: ["RTTY"],
    exchange: [
      {
        id: "sent_qth", type: "text", label: "My state/prov",
        placeholder: "PA", required: true, sticky: true, maxLength: 3,
        adifField: "APP_LQ_SENT_QTH",
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
      sentTemplate: ["rst_sent", "sent_qth"],
      rcvdTemplate: ["rst_rcvd", "rcvd_qth"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-ASSISTED", "CATEGORY-BAND",
        "CATEGORY-POWER",    "CATEGORY-STATION",  "CLUB",
        "NAME",              "ADDRESS",           "EMAIL", "SOAPBOX",
      ],
    },
  };
})();
