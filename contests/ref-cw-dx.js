/* REF Contest, CW — DX-station perspective (non-F operators).
 * https://concours.r-e-f.org/reglements/actuels/reg_cdfhfdx.pdf
 * Exchange (DX side): send RST + serial; receive RST + French department
 * number (3 digits, e.g. "075" Paris) from F stations, or RST + serial
 * from other DX stations. Held the last full weekend of January.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["ref-cw-dx"] = {
    id: "ref-cw-dx",
    name: "REF Contest, CW (DX side)",
    shortName: "REF CW (DX)",
    url: "https://concours.r-e-f.org/reglements/actuels/reg_cdfhfdx.pdf",
    windows: [
      { start: "2026-01-24T06:00:00Z", end: "2026-01-25T18:00:00Z" },
      { start: "2027-01-23T06:00:00Z", end: "2027-01-24T18:00:00Z" },
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
        label: "Their dept (F) or serial (DX)",
        placeholder: "075 or 001", required: true, maxLength: 4,
        adifField: "APP_LQ_RCVD_EXCHANGE",
      },
    ],
    duplicateRule: "per-band-mode",
    cabrillo: {
      contest: "REF-CW",
      sentTemplate: ["rst_sent", "sent_serial"],
      rcvdTemplate: ["rst_rcvd", "rcvd_exchange"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-POWER", "CATEGORY-BAND",
        "CLUB", "NAME", "ADDRESS", "EMAIL", "SOAPBOX",
      ],
    },
  };
})();
