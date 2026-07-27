const yaml = require("js-yaml");

module.exports = function (eleventyConfig) {
  // Statische Dateien kopieren
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/CNAME": "CNAME" });

  // .yaml-Dateien in _data als Daten einlesen (von Eleventy nicht nativ unterstützt)
  eleventyConfig.addDataExtension("yaml", (contents) => yaml.load(contents));

  const pad = (n) => String(n).padStart(2, "0");
  const d2 = (d) => `${pad(d.getDate())}.${pad(d.getMonth() + 1)}.${d.getFullYear()}`;
  const hm = (d) => `${pad(d.getHours())}:${pad(d.getMinutes())}`;
  const WEEKDAYS = ["So.", "Mo.", "Di.", "Mi.", "Do.", "Fr.", "Sa."];

  eleventyConfig.addFilter("d2", (d) => (d ? d2(new Date(d)) : ""));
  eleventyConfig.addFilter("hm", (d) => (d ? hm(new Date(d)) : ""));
  eleventyConfig.addFilter("weekday", (d) => (d ? WEEKDAYS[new Date(d).getDay()] : ""));
  eleventyConfig.addFilter("limit", (arr, n) => (arr || []).slice(0, n));

  // Termin-Zeitraum menschenlesbar formatieren
  eleventyConfig.addFilter("eventWhen", (ev) => {
    if (!ev || !ev.start) return "";
    const s = new Date(ev.start);
    const e = new Date(ev.end || ev.start);
    if (ev.allDay) {
      const endDisp = new Date(e.getTime() - 86400000); // DTEND ist exklusiv
      if (d2(endDisp) <= d2(s)) return d2(s);
      return `${d2(s)} – ${d2(endDisp)}`;
    }
    if (d2(s) === d2(e)) return `${d2(s)}, ${hm(s)} – ${hm(e)} Uhr`;
    return `${d2(s)}, ${hm(s)} – ${d2(e)}, ${hm(e)} Uhr`;
  });

  // Termine nach Monat gruppieren (für Kalenderseite)
  eleventyConfig.addFilter("byMonth", (events) => {
    const groups = {};
    const MONTHS = ["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"];
    for (const ev of events || []) {
      const d = new Date(ev.start);
      const key = `${d.getFullYear()}-${pad(d.getMonth() + 1)}`;
      if (!groups[key]) groups[key] = { label: `${MONTHS[d.getMonth()]} ${d.getFullYear()}`, events: [] };
      groups[key].events.push(ev);
    }
    return Object.keys(groups).sort().map((k) => groups[k]);
  });

  eleventyConfig.addShortcode("year", () => new Date().getFullYear());

  return {
    dir: { input: "src", output: "_site", includes: "_includes", data: "_data" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    pathPrefix: "/",
  };
};
