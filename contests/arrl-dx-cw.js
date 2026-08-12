/* ARRL International DX Contest, CW.
 * https://www.arrl.org/arrl-dx
 * Configured for the DX-station perspective (YL3IM):
 *   sent  = RST + TX power (whole watts)
 *   rcvd  = RST + US/Canada state or province
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["arrl-dx-cw"] = {
    id: "arrl-dx-cw",
    name: "ARRL International DX Contest, CW",
    shortName: "ARRL DX CW",
    url: "https://www.arrl.org/arrl-dx",
    windows: [
      { start: "2026-02-21T00:00:00Z", end: "2026-02-22T23:59:59Z" },
      { start: "2027-02-20T00:00:00Z", end: "2027-02-21T23:59:59Z" },
    ],
    bands: ["160m", "80m", "40m", "20m", "15m", "10m"],
    modes: ["CW"],
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
      contest: "ARRL-DX-CW",
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
