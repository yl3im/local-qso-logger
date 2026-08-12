/* REF Contest, SSB — F-station perspective.
 * https://concours.r-e-f.org/reglements/actuels/reg_cdfhfdx.pdf
 * Exchange (F side): send RST + French department; receive RST + dept
 * (F) or serial (DX). Held the last full weekend of February.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["ref-ssb-f"] = {
    id: "ref-ssb-f",
    name: "REF Contest, SSB (F side)",
    shortName: "REF SSB (F)",
    url: "https://concours.r-e-f.org/reglements/actuels/reg_cdfhfdx.pdf",
    windows: [
      { start: "2026-02-28T06:00:00Z", end: "2026-03-01T18:00:00Z" },
      { start: "2027-02-27T06:00:00Z", end: "2027-02-28T18:00:00Z" },
    ],
    bands: ["80m", "40m", "20m", "15m", "10m"],
    modes: ["SSB"],
    exchange: [
      {
        id: "sent_dept", type: "text", label: "My département (3 dig.)",
        placeholder: "075", required: true, sticky: true, maxLength: 3,
        adifField: "APP_LQ_SENT_DEPT",
      },
      {
        id: "rcvd_exchange", type: "text",
        label: "Their dept (F) or serial (DX)",
        placeholder: "075 or 001", required: true, maxLength: 4,
        adifField: "APP_LQ_RCVD_EXCHANGE",
      },
    ],
    duplicateRule: "per-band-mode",
    cabrillo: {
      contest: "REF-SSB",
      sentTemplate: ["rst_sent", "sent_dept"],
      rcvdTemplate: ["rst_rcvd", "rcvd_exchange"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-POWER", "CATEGORY-BAND",
        "CLUB", "NAME", "ADDRESS", "EMAIL", "SOAPBOX",
      ],
    },
  };
})();
