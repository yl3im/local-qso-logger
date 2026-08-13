/* REF Contest, CW — F-station perspective (French operators).
 * https://concours.r-e-f.org/reglements/actuels/reg_cdfhfdx.pdf
 * Exchange (F side): send RST + French department number (3 digits,
 * e.g. "075" for Paris); receive RST + department (F) or RST + serial
 * (DX). Held the last full weekend of January.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["ref-cw-f"] = {
    id: "ref-cw-f",
    name: "REF Contest, CW (F side)",
    shortName: "REF CW (F)",
    url: "https://concours.r-e-f.org/reglements/actuels/reg_cdfhfdx.pdf",
    windows: [
      { start: "2026-01-24T06:00:00Z", end: "2026-01-25T18:00:00Z" },
      { start: "2027-01-23T06:00:00Z", end: "2027-01-24T18:00:00Z" },
      { start: "2028-01-22T06:00:00Z", end: "2028-01-23T18:00:00Z" },
      { start: "2029-01-27T06:00:00Z", end: "2029-01-28T18:00:00Z" },
      { start: "2030-01-26T06:00:00Z", end: "2030-01-27T18:00:00Z" },
      { start: "2031-01-25T06:00:00Z", end: "2031-01-26T18:00:00Z" },
      { start: "2032-01-24T06:00:00Z", end: "2032-01-25T18:00:00Z" },
      { start: "2033-01-22T06:00:00Z", end: "2033-01-23T18:00:00Z" },
      { start: "2034-01-28T06:00:00Z", end: "2034-01-29T18:00:00Z" },
      { start: "2035-01-27T06:00:00Z", end: "2035-01-28T18:00:00Z" },
      { start: "2036-01-26T06:00:00Z", end: "2036-01-27T18:00:00Z" },
      { start: "2037-01-24T06:00:00Z", end: "2037-01-25T18:00:00Z" },
    ],
    bands: ["80m", "40m", "20m", "15m", "10m"],
    modes: ["CW"],
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
      contest: "REF-CW",
      sentTemplate: ["rst_sent", "sent_dept"],
      rcvdTemplate: ["rst_rcvd", "rcvd_exchange"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-POWER", "CATEGORY-BAND",
        "CLUB", "NAME", "ADDRESS", "EMAIL", "SOAPBOX",
      ],
    },
  };
})();
