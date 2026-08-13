/* Belarus BFRR Championship, SSB — DX-station perspective.
 * https://ewhfc.brl.by/
 * SSB segment runs immediately after the CW segment on the same evening.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["bfrr-ssb-dx"] = {
    id: "bfrr-ssb-dx",
    name: "Belarus BFRR Championship, SSB (DX side)",
    shortName: "BFRR SSB (DX)",
    url: "https://ewhfc.brl.by/",
    windows: [
      { start: "2026-10-03T22:00:00Z", end: "2026-10-04T01:59:59Z" },
      { start: "2027-10-02T22:00:00Z", end: "2027-10-03T01:59:59Z" },
      { start: "2028-10-07T22:00:00Z", end: "2028-10-08T01:59:59Z" },
      { start: "2029-10-06T22:00:00Z", end: "2029-10-07T01:59:59Z" },
      { start: "2030-10-05T22:00:00Z", end: "2030-10-06T01:59:59Z" },
      { start: "2031-10-04T22:00:00Z", end: "2031-10-05T01:59:59Z" },
      { start: "2032-10-02T22:00:00Z", end: "2032-10-03T01:59:59Z" },
      { start: "2033-10-01T22:00:00Z", end: "2033-10-02T01:59:59Z" },
      { start: "2034-10-07T22:00:00Z", end: "2034-10-08T01:59:59Z" },
      { start: "2035-10-06T22:00:00Z", end: "2035-10-07T01:59:59Z" },
      { start: "2036-10-04T22:00:00Z", end: "2036-10-05T01:59:59Z" },
      { start: "2037-10-03T22:00:00Z", end: "2037-10-04T01:59:59Z" },
    ],
    bands: ["80m", "40m"],
    modes: ["SSB"],
    exchange: [
      {
        id: "sent_serial", type: "serial", label: "My serial",
        placeholder: "001", required: true, maxLength: 4,
        adifField: "APP_LQ_SENT_SERIAL",
      },
      {
        id: "rcvd_exchange", type: "text",
        label: "Their area (EW) or serial (DX)",
        placeholder: "MI or 001", required: true, maxLength: 4,
        adifField: "APP_LQ_RCVD_EXCHANGE",
      },
    ],
    duplicateRule: "per-band-mode",
    cabrillo: {
      contest: "BFRR-SSB",
      sentTemplate: ["rst_sent", "sent_serial"],
      rcvdTemplate: ["rst_rcvd", "rcvd_exchange"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-POWER", "CATEGORY-BAND",
        "CLUB", "NAME", "ADDRESS", "EMAIL", "SOAPBOX",
      ],
    },
  };
})();
