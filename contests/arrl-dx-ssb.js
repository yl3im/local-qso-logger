/* ARRL International DX Contest, SSB.
 * https://www.arrl.org/arrl-dx
 * Configured for the DX-station perspective (YL3IM):
 *   sent  = RST + TX power (whole watts)
 *   rcvd  = RST + US/Canada state or province (2- or 3-letter abbreviation)
 * A W/VE-perspective variant would flip these.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["arrl-dx-ssb"] = {
    id: "arrl-dx-ssb",
    name: "ARRL International DX Contest, SSB",
    shortName: "ARRL DX SSB",
    url: "https://www.arrl.org/arrl-dx",
    windows: [
      { start: "2026-03-07T00:00:00Z", end: "2026-03-08T23:59:59Z" },
      { start: "2027-03-06T00:00:00Z", end: "2027-03-07T23:59:59Z" },
    ],
    bands: ["160m", "80m", "40m", "20m", "15m", "10m"],
    modes: ["SSB"],
    exchange: [
      {
        id: "sent_pwr", type: "number", label: "My power (W)",
        placeholder: "100", required: true, sticky: true, maxLength: 4,
        adifField: "APP_LQ_SENT_PWR",
      },
      {
        id: "rcvd_qth", type: "text", label: "Their state/province",
        placeholder: "PA", required: true, maxLength: 3,
        adifField: "APP_LQ_RCVD_QTH",
      },
    ],
    duplicateRule: "per-band-mode",
    cabrillo: {
      contest: "ARRL-DX-SSB",
      sentTemplate: ["rst_sent", "sent_pwr"],
      rcvdTemplate: ["rst_rcvd", "rcvd_qth"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-ASSISTED", "CATEGORY-BAND",
        "CATEGORY-POWER",    "CATEGORY-MODE",     "CATEGORY-TRANSMITTER",
        "CATEGORY-OVERLAY",  "CLUB",              "NAME",
        "ADDRESS",           "EMAIL",             "SOAPBOX",
      ],
    },
  };
})();
