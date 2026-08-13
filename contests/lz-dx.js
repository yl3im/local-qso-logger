/* LZ DX Contest (Bulgarian Federation of Radio Amateurs).
 * https://lzdx.bfra.org/rulesen.html
 * Exchange: RST + ITU zone (both LZ and DX stations send zone). Held
 * the third full weekend of November.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["lz-dx"] = {
    id: "lz-dx",
    name: "LZ DX Contest",
    shortName: "LZ DX",
    url: "https://lzdx.bfra.org/rulesen.html",
    windows: [
      { start: "2026-11-21T12:00:00Z", end: "2026-11-22T11:59:59Z" },
      { start: "2027-11-20T12:00:00Z", end: "2027-11-21T11:59:59Z" },
      { start: "2028-11-18T12:00:00Z", end: "2028-11-19T11:59:59Z" },
      { start: "2029-11-17T12:00:00Z", end: "2029-11-18T11:59:59Z" },
      { start: "2030-11-16T12:00:00Z", end: "2030-11-17T11:59:59Z" },
      { start: "2031-11-15T12:00:00Z", end: "2031-11-16T11:59:59Z" },
      { start: "2032-11-20T12:00:00Z", end: "2032-11-21T11:59:59Z" },
      { start: "2033-11-19T12:00:00Z", end: "2033-11-20T11:59:59Z" },
      { start: "2034-11-18T12:00:00Z", end: "2034-11-19T11:59:59Z" },
      { start: "2035-11-17T12:00:00Z", end: "2035-11-18T11:59:59Z" },
      { start: "2036-11-15T12:00:00Z", end: "2036-11-16T11:59:59Z" },
      { start: "2037-11-21T12:00:00Z", end: "2037-11-22T11:59:59Z" },
    ],
    bands: ["80m", "40m", "20m", "15m", "10m"],
    modes: ["CW", "SSB"],
    exchange: [
      {
        id: "sent_itu", type: "text", label: "My ITU Zone",
        placeholder: "28", required: true, sticky: true, maxLength: 2,
        adifField: "APP_LQ_SENT_ITU",
      },
      {
        id: "rcvd_itu", type: "text", label: "Their ITU Zone",
        placeholder: "28", required: true, maxLength: 2,
        adifField: "APP_LQ_RCVD_ITU",
      },
    ],
    duplicateRule: "per-band-mode",
    cabrillo: {
      contest: "LZ-DX",
      sentTemplate: ["rst_sent", "sent_itu"],
      rcvdTemplate: ["rst_rcvd", "rcvd_itu"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-POWER", "CATEGORY-MODE",
        "CATEGORY-BAND", "CLUB", "NAME", "ADDRESS", "EMAIL", "SOAPBOX",
      ],
    },
  };
})();
