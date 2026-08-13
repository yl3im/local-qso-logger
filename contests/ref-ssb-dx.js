/* REF Contest, SSB — DX-station perspective.
 * https://concours.r-e-f.org/reglements/actuels/reg_cdfhfdx.pdf
 * Exchange (DX side): send RST + serial; receive RST + French dept (F)
 * or serial (DX). Held the last full weekend of February.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["ref-ssb-dx"] = {
    id: "ref-ssb-dx",
    name: "REF Contest, SSB (DX side)",
    shortName: "REF SSB (DX)",
    url: "https://concours.r-e-f.org/reglements/actuels/reg_cdfhfdx.pdf",
    windows: [
      { start: "2026-02-28T06:00:00Z", end: "2026-03-01T18:00:00Z" },
      { start: "2027-02-27T06:00:00Z", end: "2027-02-28T18:00:00Z" },
      { start: "2028-02-26T06:00:00Z", end: "2028-02-27T18:00:00Z" },
      { start: "2029-02-24T06:00:00Z", end: "2029-02-25T18:00:00Z" },
      { start: "2030-02-23T06:00:00Z", end: "2030-02-24T18:00:00Z" },
      { start: "2031-02-22T06:00:00Z", end: "2031-02-23T18:00:00Z" },
      { start: "2032-02-28T06:00:00Z", end: "2032-02-29T18:00:00Z" },
      { start: "2033-02-26T06:00:00Z", end: "2033-02-27T18:00:00Z" },
      { start: "2034-02-25T06:00:00Z", end: "2034-02-26T18:00:00Z" },
      { start: "2035-02-24T06:00:00Z", end: "2035-02-25T18:00:00Z" },
      { start: "2036-02-23T06:00:00Z", end: "2036-02-24T18:00:00Z" },
      { start: "2037-02-28T06:00:00Z", end: "2037-03-01T18:00:00Z" },
    ],
    bands: ["80m", "40m", "20m", "15m", "10m"],
    modes: ["SSB"],
    exchange: [
      {
        id: "sent_serial", type: "serial", label: "My serial",
        placeholder: "001", required: true, maxLength: 4,
        adifField: "APP_LQ_SENT_SERIAL",
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
      sentTemplate: ["rst_sent", "sent_serial"],
      rcvdTemplate: ["rst_rcvd", "rcvd_exchange"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-POWER", "CATEGORY-BAND",
        "CLUB", "NAME", "ADDRESS", "EMAIL", "SOAPBOX",
      ],
    },
  };
})();
