/* Russian DX Contest — DX-station perspective (non-Russian operators).
 * https://www.rdxc.org/asp/pages/rulesg.asp
 * Exchange (DX side): send RST + serial; receive RST + Russian oblast
 * code (2 letters, e.g. "MO", "SP", "LO") from Russian stations, or
 * RST + serial from other DX stations. Held the third full weekend of
 * March, mixed CW/SSB.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["russian-dx-dx"] = {
    id: "russian-dx-dx",
    name: "Russian DX Contest (DX side)",
    shortName: "RDXC (DX)",
    url: "https://www.rdxc.org/asp/pages/rulesg.asp",
    windows: [
      { start: "2026-03-21T12:00:00Z", end: "2026-03-22T11:59:59Z" },
      { start: "2027-03-20T12:00:00Z", end: "2027-03-21T11:59:59Z" },
      { start: "2028-03-18T12:00:00Z", end: "2028-03-19T11:59:59Z" },
      { start: "2029-03-17T12:00:00Z", end: "2029-03-18T11:59:59Z" },
      { start: "2030-03-16T12:00:00Z", end: "2030-03-17T11:59:59Z" },
      { start: "2031-03-15T12:00:00Z", end: "2031-03-16T11:59:59Z" },
      { start: "2032-03-20T12:00:00Z", end: "2032-03-21T11:59:59Z" },
      { start: "2033-03-19T12:00:00Z", end: "2033-03-20T11:59:59Z" },
      { start: "2034-03-18T12:00:00Z", end: "2034-03-19T11:59:59Z" },
      { start: "2035-03-17T12:00:00Z", end: "2035-03-18T11:59:59Z" },
      { start: "2036-03-15T12:00:00Z", end: "2036-03-16T11:59:59Z" },
      { start: "2037-03-21T12:00:00Z", end: "2037-03-22T11:59:59Z" },
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
        id: "rcvd_exchange", type: "text",
        label: "Their oblast (RU) or serial (DX)",
        placeholder: "MO or 001", required: true, maxLength: 4,
        adifField: "APP_LQ_RCVD_EXCHANGE",
      },
    ],
    duplicateRule: "per-band-mode",
    cabrillo: {
      contest: "RDXC",
      sentTemplate: ["rst_sent", "sent_serial"],
      rcvdTemplate: ["rst_rcvd", "rcvd_exchange"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-POWER", "CATEGORY-MODE",
        "CATEGORY-BAND", "CLUB", "NAME", "ADDRESS", "EMAIL", "SOAPBOX",
      ],
    },
  };
})();
