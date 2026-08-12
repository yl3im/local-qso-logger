/* Russian DX Contest — Russian-station perspective.
 * https://www.rdxc.org/asp/pages/rulesg.asp
 * Exchange (RU side): send RST + Russian oblast code (2 letters, e.g.
 * "MO", "SP", "LO"); receive RST + oblast (from other RU stations) or
 * RST + serial (from DX). Held the third full weekend of March.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["russian-dx-ru"] = {
    id: "russian-dx-ru",
    name: "Russian DX Contest (RU side)",
    shortName: "RDXC (RU)",
    url: "https://www.rdxc.org/asp/pages/rulesg.asp",
    windows: [
      { start: "2026-03-21T12:00:00Z", end: "2026-03-22T11:59:59Z" },
      { start: "2027-03-20T12:00:00Z", end: "2027-03-21T11:59:59Z" },
    ],
    bands: ["160m", "80m", "40m", "20m", "15m", "10m"],
    modes: ["CW", "SSB"],
    exchange: [
      {
        id: "sent_oblast", type: "text", label: "My oblast",
        placeholder: "MO", required: true, sticky: true, maxLength: 2,
        adifField: "APP_LQ_SENT_OBLAST",
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
      sentTemplate: ["rst_sent", "sent_oblast"],
      rcvdTemplate: ["rst_rcvd", "rcvd_exchange"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-POWER", "CATEGORY-MODE",
        "CATEGORY-BAND", "CLUB", "NAME", "ADDRESS", "EMAIL", "SOAPBOX",
      ],
    },
  };
})();
