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
      { start: "2028-01-08T07:30:00Z", end: "2028-01-08T09:30:00Z" },
      { start: "2029-01-13T07:30:00Z", end: "2029-01-13T09:30:00Z" },
      { start: "2030-01-12T07:30:00Z", end: "2030-01-12T09:30:00Z" },
      { start: "2031-01-11T07:30:00Z", end: "2031-01-11T09:30:00Z" },
      { start: "2032-01-10T07:30:00Z", end: "2032-01-10T09:30:00Z" },
      { start: "2033-01-08T07:30:00Z", end: "2033-01-08T09:30:00Z" },
      { start: "2034-01-14T07:30:00Z", end: "2034-01-14T09:30:00Z" },
      { start: "2035-01-13T07:30:00Z", end: "2035-01-13T09:30:00Z" },
      { start: "2036-01-12T07:30:00Z", end: "2036-01-12T09:30:00Z" },
      { start: "2037-01-10T07:30:00Z", end: "2037-01-10T09:30:00Z" },
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
