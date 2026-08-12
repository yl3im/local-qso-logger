/* NRAU-Baltic Contest, SSB.
 * https://www.nrau.net/activities/nrau-baltic-contest/
 * Nordic + Baltic regional event (Nordic Radio Amateur Union + Baltic
 * amateur societies). SSB segment runs 07:30-09:30 UTC; CW segment 06:30-
 * 08:30 UTC — same Saturday, distinct Cabrillo submissions.
 * Exchange: RST + serial + NRAU district code (e.g. LA1, OH2, SM3, YL3).
 */
(function () {
  window.CONTESTS = window.CONTESTS || {};
  window.CONTESTS["nrau-baltic-ssb"] = {
    id: "nrau-baltic-ssb",
    name: "NRAU-Baltic Contest, SSB",
    shortName: "NRAU Baltic SSB",
    url: "https://www.nrau.net/activities/nrau-baltic-contest/",
    windows: [
      { start: "2026-01-10T07:30:00Z", end: "2026-01-10T09:30:00Z" },
      { start: "2027-01-09T07:30:00Z", end: "2027-01-09T09:30:00Z" },
    ],
    bands: ["80m", "40m"],
    modes: ["SSB"],
    exchange: [
      {
        id: "sent_serial", type: "serial", label: "My serial",
        placeholder: "001", required: true, maxLength: 4,
        adifField: "APP_LQ_SENT_SERIAL",
      },
      {
        id: "sent_district", type: "text", label: "My NRAU district",
        placeholder: "YL3", required: true, sticky: true, maxLength: 4,
        adifField: "APP_LQ_SENT_DISTRICT",
      },
      {
        id: "rcvd_serial", type: "number", label: "Their serial",
        placeholder: "001", required: true, maxLength: 4,
        adifField: "APP_LQ_RCVD_SERIAL",
      },
      {
        id: "rcvd_district", type: "text", label: "Their NRAU district",
        placeholder: "OH2", required: true, maxLength: 4,
        adifField: "APP_LQ_RCVD_DISTRICT",
      },
    ],
    duplicateRule: "per-band-mode",
    cabrillo: {
      contest: "NRAU-BALTIC-SSB",
      sentTemplate: ["rst_sent", "sent_serial", "sent_district"],
      rcvdTemplate: ["rst_rcvd", "rcvd_serial", "rcvd_district"],
      headerFields: [
        "CATEGORY-OPERATOR", "CATEGORY-POWER",
        "CLUB", "NAME", "ADDRESS", "EMAIL", "SOAPBOX",
      ],
    },
  };
})();
