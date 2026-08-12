/* European HF Championship (SCC / Slovenia Contest Club).
 * https://ehfc.hamradio.si/
 * Exchange: RST + last two digits of the year the operator was first
 * licensed (e.g. "88" for someone licensed in 1988). Both sides send
 * this — it's the same everywhere. European stations only. Held the
 * first weekend of August.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["eu-hf-championship"] = {
    id: "eu-hf-championship",
    name: "European HF Championship",
    shortName: "EU HF Champ",
    url: "https://ehfc.hamradio.si/",
    windows: [
      { start: "2026-08-01T12:00:00Z", end: "2026-08-01T23:59:59Z" },
      { start: "2027-08-07T12:00:00Z", end: "2027-08-07T23:59:59Z" },
    ],
    bands: ["80m", "40m", "20m", "15m", "10m"],
    modes: ["CW", "SSB"],
    exchange: [
      {
        id: "sent_licyear", type: "text", label: "My licence year (2 dig.)",
        placeholder: "88", required: true, sticky: true, maxLength: 2,
        adifField: "APP_LQ_SENT_LICYEAR",
      },
      {
        id: "rcvd_licyear", type: "text", label: "Their licence year (2 dig.)",
        placeholder: "88", required: true, maxLength: 2,
        adifField: "APP_LQ_RCVD_LICYEAR",
      },
    ],
    duplicateRule: "per-band-mode",
    cabrillo: {
      contest: "EU-HF-CH",
      sentTemplate: ["rst_sent", "sent_licyear"],
      rcvdTemplate: ["rst_rcvd", "rcvd_licyear"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-POWER", "CATEGORY-MODE",
        "CATEGORY-BAND", "CLUB", "NAME", "ADDRESS", "EMAIL", "SOAPBOX",
      ],
    },
  };
})();
