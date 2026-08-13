/* Belarus BFRR Championship, CW — EW-station perspective.
 * https://ewhfc.brl.by/
 * Exchange (EW side): send RST + 2-char Belarus area code (MI, VI, MO,
 * BR, GO, GR); receive RST + area (EW) or RST + serial (DX). Held early
 * October.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["bfrr-cw-ew"] = {
    id: "bfrr-cw-ew",
    name: "Belarus BFRR Championship, CW (EW side)",
    shortName: "BFRR CW (EW)",
    url: "https://ewhfc.brl.by/",
    windows: [
      { start: "2026-10-03T18:00:00Z", end: "2026-10-03T21:59:59Z" },
      { start: "2027-10-02T18:00:00Z", end: "2027-10-02T21:59:59Z" },
      { start: "2028-10-07T18:00:00Z", end: "2028-10-07T21:59:59Z" },
      { start: "2029-10-06T18:00:00Z", end: "2029-10-06T21:59:59Z" },
      { start: "2030-10-05T18:00:00Z", end: "2030-10-05T21:59:59Z" },
      { start: "2031-10-04T18:00:00Z", end: "2031-10-04T21:59:59Z" },
      { start: "2032-10-02T18:00:00Z", end: "2032-10-02T21:59:59Z" },
      { start: "2033-10-01T18:00:00Z", end: "2033-10-01T21:59:59Z" },
      { start: "2034-10-07T18:00:00Z", end: "2034-10-07T21:59:59Z" },
      { start: "2035-10-06T18:00:00Z", end: "2035-10-06T21:59:59Z" },
      { start: "2036-10-04T18:00:00Z", end: "2036-10-04T21:59:59Z" },
      { start: "2037-10-03T18:00:00Z", end: "2037-10-03T21:59:59Z" },
    ],
    bands: ["80m", "40m"],
    modes: ["CW"],
    exchange: [
      {
        id: "sent_area", type: "text", label: "My Belarus area",
        placeholder: "MI", required: true, sticky: true, maxLength: 2,
        adifField: "APP_LQ_SENT_AREA",
      },
      {
        id: "rcvd_exchange", type: "text",
        label: "Their area (EW) or serial (DX)",
        placeholder: "MI or 001", required: true, maxLength: 4,
        adifField: "APP_LQ_RCVD_EXCHANGE",
      },
    ],
    duplicateRule: "per-band-mode",
    cabrillo: {
      contest: "BFRR-CW",
      sentTemplate: ["rst_sent", "sent_area"],
      rcvdTemplate: ["rst_rcvd", "rcvd_exchange"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-POWER", "CATEGORY-BAND",
        "CLUB", "NAME", "ADDRESS", "EMAIL", "SOAPBOX",
      ],
    },
  };
})();
