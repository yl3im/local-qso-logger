/* IARU HF World Championship.
 * https://www.arrl.org/iaru-hf-world-championship
 * Exchange: RST + ITU Zone (non-HQ) OR RST + IARU HQ multiplier
 * abbreviation (e.g. "ARRL", "RSGB", "DARC"). We store the received value
 * as a single free-text field — the operator types either an ITU zone or
 * a society abbreviation.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["iaru-hf"] = {
    id: "iaru-hf",
    name: "IARU HF World Championship",
    shortName: "IARU HF",
    url: "https://www.arrl.org/iaru-hf-world-championship",
    windows: [
      { start: "2026-07-11T12:00:00Z", end: "2026-07-12T12:00:00Z" },
      { start: "2027-07-10T12:00:00Z", end: "2027-07-11T12:00:00Z" },
      { start: "2028-07-08T12:00:00Z", end: "2028-07-09T12:00:00Z" },
      { start: "2029-07-14T12:00:00Z", end: "2029-07-15T12:00:00Z" },
      { start: "2030-07-13T12:00:00Z", end: "2030-07-14T12:00:00Z" },
      { start: "2031-07-12T12:00:00Z", end: "2031-07-13T12:00:00Z" },
      { start: "2032-07-10T12:00:00Z", end: "2032-07-11T12:00:00Z" },
      { start: "2033-07-09T12:00:00Z", end: "2033-07-10T12:00:00Z" },
      { start: "2034-07-08T12:00:00Z", end: "2034-07-09T12:00:00Z" },
      { start: "2035-07-14T12:00:00Z", end: "2035-07-15T12:00:00Z" },
      { start: "2036-07-12T12:00:00Z", end: "2036-07-13T12:00:00Z" },
      { start: "2037-07-11T12:00:00Z", end: "2037-07-12T12:00:00Z" },
    ],
    bands: ["160m", "80m", "40m", "20m", "15m", "10m"],
    modes: ["CW", "SSB"],
    exchange: [
      {
        id: "sent_itu", type: "text", label: "My ITU Zone or HQ abbr.",
        placeholder: "29", required: true, sticky: true, maxLength: 4,
        adifField: "APP_LQ_SENT_ITU",
      },
      {
        id: "rcvd_itu", type: "text", label: "Their ITU Zone or HQ abbr.",
        placeholder: "29 or RSGB", required: true, maxLength: 6,
        adifField: "APP_LQ_RCVD_ITU",
      },
    ],
    duplicateRule: "per-band-mode",
    cabrillo: {
      contest: "IARU-HF",
      sentTemplate: ["rst_sent", "sent_itu"],
      rcvdTemplate: ["rst_rcvd", "rcvd_itu"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-ASSISTED", "CATEGORY-BAND",
        "CATEGORY-POWER",    "CATEGORY-MODE",     "CATEGORY-TRANSMITTER",
        "CATEGORY-OVERLAY",  "CLUB",              "NAME",
        "ADDRESS",           "EMAIL",             "SOAPBOX",
      ],
    },
  };
})();
