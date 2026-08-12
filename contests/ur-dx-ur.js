/* Ukrainian DX Contest — UR-station perspective.
 * https://uz2hz.com/en/uz2hz-rules-en/
 * Exchange (UR side): send RST + Ukrainian oblast code (e.g. "KI", "OD");
 * receive RST + oblast (UR) or RST + serial (DX). Held the first weekend
 * of November.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["ur-dx-ur"] = {
    id: "ur-dx-ur",
    name: "Ukrainian DX Contest (UR side)",
    shortName: "UR DX (UR)",
    url: "https://uz2hz.com/en/uz2hz-rules-en/",
    windows: [
      { start: "2026-11-07T12:00:00Z", end: "2026-11-08T11:59:59Z" },
      { start: "2027-11-06T12:00:00Z", end: "2027-11-07T11:59:59Z" },
    ],
    bands: ["160m", "80m", "40m", "20m", "15m", "10m"],
    modes: ["CW", "SSB"],
    exchange: [
      {
        id: "sent_oblast", type: "text", label: "My oblast",
        placeholder: "KI", required: true, sticky: true, maxLength: 2,
        adifField: "APP_LQ_SENT_OBLAST",
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
      contest: "UKR-DX",
      sentTemplate: ["rst_sent", "sent_oblast"],
      rcvdTemplate: ["rst_rcvd", "rcvd_exchange"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-POWER", "CATEGORY-MODE",
        "CATEGORY-BAND", "CLUB", "NAME", "ADDRESS", "EMAIL", "SOAPBOX",
      ],
    },
  };
})();
