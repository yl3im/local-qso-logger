/* ARRL 160-Meter Contest — US/Canadian station perspective.
 * https://www.arrl.org/160-meter
 * Exchange (W/VE side): send RST + ARRL/RAC section; receive RST + section
 * (from other W/VE) or RST only (from DX). CW only. Single-band, 160m.
 * Runs the first full weekend of December.
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["arrl-160m-w"] = {
    id: "arrl-160m-w",
    name: "ARRL 160-Meter Contest (W/VE side)",
    shortName: "ARRL 160m (W/VE)",
    url: "https://www.arrl.org/160-meter",
    windows: [
      { start: "2025-12-05T22:00:00Z", end: "2025-12-07T16:00:00Z" },
      { start: "2026-12-04T22:00:00Z", end: "2026-12-06T16:00:00Z" },
    ],
    bands: ["160m"],
    modes: ["CW"],
    exchange: [
      {
        id: "sent_section", type: "text", label: "My ARRL/RAC section",
        placeholder: "EMA", required: true, sticky: true, maxLength: 4,
        adifField: "APP_LQ_SENT_SECTION",
      },
      // DX stations only send RST — leave rcvd_section blank for DX contacts.
      {
        id: "rcvd_section", type: "text", label: "Their section (W/VE only)",
        placeholder: "EMA", maxLength: 4,
        adifField: "APP_LQ_RCVD_SECTION",
      },
    ],
    duplicateRule: "per-band",
    cabrillo: {
      contest: "ARRL-160",
      sentTemplate: ["rst_sent", "sent_section"],
      rcvdTemplate: ["rst_rcvd", "rcvd_section"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-ASSISTED", "CATEGORY-POWER",
        "CATEGORY-STATION",  "CLUB",              "NAME",
        "ADDRESS",           "EMAIL",             "SOAPBOX",
      ],
    },
  };
})();
