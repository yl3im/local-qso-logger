/* Baltic Contest (LRSF).
 * https://www.lrsf.lt/baltic/
 * Exchange: RST + serial. Baltic-area event (LY / YL / ES / SM / OH etc.
 * work everyone; other stations work only Baltic-area participants).
 * Runs a Saturday evening in May, 21:00-01:00 UTC. Both CW and SSB in
 * the same 4-hour window.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["baltic"] = {
    id: "baltic",
    name: "Baltic Contest",
    shortName: "Baltic",
    url: "https://www.lrsf.lt/baltic/",
    windows: [
      { start: "2026-05-16T21:00:00Z", end: "2026-05-17T01:00:00Z" },
      { start: "2027-05-15T21:00:00Z", end: "2027-05-16T01:00:00Z" },
    ],
    bands: ["80m", "40m"],
    modes: ["CW", "SSB"],
    exchange: [
      {
        id: "sent_serial", type: "serial", label: "My serial",
        placeholder: "001", required: true, maxLength: 4,
        adifField: "APP_LQ_SENT_SERIAL",
      },
      {
        id: "rcvd_serial", type: "number", label: "Their serial",
        placeholder: "001", required: true, maxLength: 4,
        adifField: "APP_LQ_RCVD_SERIAL",
      },
    ],
    duplicateRule: "per-band",
    cabrillo: {
      contest: "BALTIC",
      sentTemplate: ["rst_sent", "sent_serial"],
      rcvdTemplate: ["rst_rcvd", "rcvd_serial"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-POWER",  "CATEGORY-MODE",
        "CLUB",              "NAME",            "ADDRESS",
        "EMAIL",             "SOAPBOX",
      ],
    },
  };
})();
