/* CQ WPX Contest, SSB.
 * https://cqwpx.com/rules.htm
 * Exchange: RST + serial number (starting at 001, per-contact incrementing).
 * Prefix multiplier — every distinct prefix counted once for the whole log.
 * Runs the last full weekend of March.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["cq-wpx-ssb"] = {
    id: "cq-wpx-ssb",
    name: "CQ Worldwide WPX Contest, SSB",
    shortName: "CQ WPX SSB",
    url: "https://cqwpx.com/rules.htm",
    windows: [
      { start: "2026-03-28T00:00:00Z", end: "2026-03-29T23:59:59Z" },
      { start: "2027-03-27T00:00:00Z", end: "2027-03-28T23:59:59Z" },
    ],
    bands: ["160m", "80m", "40m", "20m", "15m", "10m"],
    modes: ["SSB"],
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
    duplicateRule: "per-band-mode",
    cabrillo: {
      contest: "CQ-WPX-SSB",
      sentTemplate: ["rst_sent", "sent_serial"],
      rcvdTemplate: ["rst_rcvd", "rcvd_serial"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-ASSISTED", "CATEGORY-BAND",
        "CATEGORY-POWER",    "CATEGORY-MODE",     "CATEGORY-TRANSMITTER",
        "CATEGORY-OVERLAY",  "CLUB",              "NAME",
        "ADDRESS",           "EMAIL",             "SOAPBOX",
      ],
    },
  };
})();
