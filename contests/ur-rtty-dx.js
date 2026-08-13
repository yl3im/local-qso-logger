/* Ukrainian RTTY Championship — DX-station perspective (non-UR).
 * https://uz2hz.com/en/ur-dx-contest-rules-en/
 * Exchange (DX side): send RST + serial; receive RST + Ukrainian oblast
 * code (e.g. "KI", "OD") from UR stations, or RST + serial from other DX.
 * RTTY-only companion to URDX; held last full weekend of April.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["ur-rtty-dx"] = {
    id: "ur-rtty-dx",
    name: "Ukrainian RTTY Championship (DX side)",
    shortName: "UR RTTY (DX)",
    url: "https://uz2hz.com/en/ur-dx-contest-rules-en/",
    windows: [
      { start: "2026-04-25T12:00:00Z", end: "2026-04-26T11:59:59Z" },
      { start: "2027-04-24T12:00:00Z", end: "2027-04-25T11:59:59Z" },
      { start: "2028-04-22T12:00:00Z", end: "2028-04-23T11:59:59Z" },
      { start: "2029-04-28T12:00:00Z", end: "2029-04-29T11:59:59Z" },
      { start: "2030-04-27T12:00:00Z", end: "2030-04-28T11:59:59Z" },
      { start: "2031-04-26T12:00:00Z", end: "2031-04-27T11:59:59Z" },
      { start: "2032-04-24T12:00:00Z", end: "2032-04-25T11:59:59Z" },
      { start: "2033-04-23T12:00:00Z", end: "2033-04-24T11:59:59Z" },
      { start: "2034-04-22T12:00:00Z", end: "2034-04-23T11:59:59Z" },
      { start: "2035-04-28T12:00:00Z", end: "2035-04-29T11:59:59Z" },
      { start: "2036-04-26T12:00:00Z", end: "2036-04-27T11:59:59Z" },
      { start: "2037-04-25T12:00:00Z", end: "2037-04-26T11:59:59Z" },
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
        id: "rcvd_exchange", type: "text",
        label: "Their oblast (UR) or serial (DX)",
        placeholder: "KI or 001", required: true, maxLength: 4,
        adifField: "APP_LQ_RCVD_EXCHANGE",
      },
    ],
    duplicateRule: "per-band-mode",
    cabrillo: {
      contest: "UKR-RTTY",
      sentTemplate: ["rst_sent", "sent_serial"],
      rcvdTemplate: ["rst_rcvd", "rcvd_exchange"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-POWER", "CATEGORY-BAND",
        "CLUB", "NAME", "ADDRESS", "EMAIL", "SOAPBOX",
      ],
    },
  };
})();
