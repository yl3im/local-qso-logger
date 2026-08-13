/* Croatian CW Contest (9A CW) — DX-station perspective (non-9A stations).
 * https://www.hamradio.hr/en/
 * Exchange (DX side): send RST + serial; receive RST + 2-char Croatian
 * county code from 9A stations, or RST + serial from other DX. Held third
 * full weekend of December.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["9a-cw-dx"] = {
    id: "9a-cw-dx",
    name: "Croatian CW Contest (DX side)",
    shortName: "9A CW (DX)",
    url: "https://www.hamradio.hr/en/",
    windows: [
      { start: "2026-12-19T14:00:00Z", end: "2026-12-20T13:59:59Z" },
      { start: "2027-12-18T14:00:00Z", end: "2027-12-19T13:59:59Z" },
      { start: "2028-12-16T14:00:00Z", end: "2028-12-17T13:59:59Z" },
      { start: "2029-12-15T14:00:00Z", end: "2029-12-16T13:59:59Z" },
      { start: "2030-12-21T14:00:00Z", end: "2030-12-22T13:59:59Z" },
      { start: "2031-12-20T14:00:00Z", end: "2031-12-21T13:59:59Z" },
      { start: "2032-12-18T14:00:00Z", end: "2032-12-19T13:59:59Z" },
      { start: "2033-12-17T14:00:00Z", end: "2033-12-18T13:59:59Z" },
      { start: "2034-12-16T14:00:00Z", end: "2034-12-17T13:59:59Z" },
      { start: "2035-12-15T14:00:00Z", end: "2035-12-16T13:59:59Z" },
      { start: "2036-12-20T14:00:00Z", end: "2036-12-21T13:59:59Z" },
      { start: "2037-12-19T14:00:00Z", end: "2037-12-20T13:59:59Z" },
    ],
    bands: ["80m", "40m", "20m", "15m", "10m"],
    modes: ["CW"],
    exchange: [
      {
        id: "sent_serial", type: "serial", label: "My serial",
        placeholder: "001", required: true, maxLength: 4,
        adifField: "APP_LQ_SENT_SERIAL",
      },
      {
        id: "rcvd_exchange", type: "text",
        label: "Their county (9A) or serial (DX)",
        placeholder: "ZG or 001", required: true, maxLength: 4,
        adifField: "APP_LQ_RCVD_EXCHANGE",
      },
    ],
    duplicateRule: "per-band-mode",
    cabrillo: {
      contest: "9A-CW",
      sentTemplate: ["rst_sent", "sent_serial"],
      rcvdTemplate: ["rst_rcvd", "rcvd_exchange"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-POWER", "CATEGORY-BAND",
        "CLUB", "NAME", "ADDRESS", "EMAIL", "SOAPBOX",
      ],
    },
  };
})();
