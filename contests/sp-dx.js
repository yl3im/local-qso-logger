/* SP DX Contest (PZK, Poland).
 * https://spdxcontest.pzk.org.pl/en/
 * Exchange (DX side): RST + serial; SP stations send RST + 2-letter
 * province code (e.g. "WA", "MZ", "SL"). We store the received value as
 * a single free-text field — the operator types either a serial or a
 * province code depending on the contact. Runs the first weekend of April.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["sp-dx"] = {
    id: "sp-dx",
    name: "SP DX Contest",
    shortName: "SP DX",
    url: "https://spdxcontest.pzk.org.pl/en/",
    windows: [
      { start: "2026-04-04T15:00:00Z", end: "2026-04-05T15:00:00Z" },
      { start: "2027-04-03T15:00:00Z", end: "2027-04-04T15:00:00Z" },
      { start: "2028-04-01T15:00:00Z", end: "2028-04-02T15:00:00Z" },
      { start: "2029-04-07T15:00:00Z", end: "2029-04-08T15:00:00Z" },
      { start: "2030-04-06T15:00:00Z", end: "2030-04-07T15:00:00Z" },
      { start: "2031-04-05T15:00:00Z", end: "2031-04-06T15:00:00Z" },
      { start: "2032-04-03T15:00:00Z", end: "2032-04-04T15:00:00Z" },
      { start: "2033-04-02T15:00:00Z", end: "2033-04-03T15:00:00Z" },
      { start: "2034-04-01T15:00:00Z", end: "2034-04-02T15:00:00Z" },
      { start: "2035-04-07T15:00:00Z", end: "2035-04-08T15:00:00Z" },
      { start: "2036-04-05T15:00:00Z", end: "2036-04-06T15:00:00Z" },
      { start: "2037-04-04T15:00:00Z", end: "2037-04-05T15:00:00Z" },
    ],
    bands: ["160m", "80m", "40m", "20m", "15m", "10m"],
    modes: ["CW", "SSB"],
    exchange: [
      {
        id: "sent_serial", type: "serial", label: "My serial",
        placeholder: "001", required: true, maxLength: 4,
        adifField: "APP_LQ_SENT_SERIAL",
      },
      {
        id: "rcvd_serial_or_prov", type: "text",
        label: "Their serial (DX) or SP province",
        placeholder: "001 or WA", required: true, maxLength: 4,
        adifField: "APP_LQ_RCVD_SERIAL",
      },
    ],
    duplicateRule: "per-band-mode",
    cabrillo: {
      contest: "SP-DX-CONTEST",
      sentTemplate: ["rst_sent", "sent_serial"],
      rcvdTemplate: ["rst_rcvd", "rcvd_serial_or_prov"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-POWER",  "CATEGORY-MODE",
        "CATEGORY-BAND",     "CLUB",            "NAME",
        "ADDRESS",           "EMAIL",           "SOAPBOX",
      ],
    },
  };
})();
