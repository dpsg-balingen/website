const yaml = require("js-yaml");
const fs = require("fs");
const path = require("path");
const Image = require("@11ty/eleventy-img");

const FOTO_DIR = "src/assets/img/eindruecke";

function parseYmd(s) {
  if (!s || typeof s !== "string") return null;
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(s.trim());
  if (!m) return null;
  const y = Number(m[1]);
  const mo = Number(m[2]);
  const da = Number(m[3]);
  if (mo < 1 || mo > 12 || da < 1 || da > 31) return null;
  return new Date(y, mo - 1, da);
}

function isGueltig(gueltigBis, heute = new Date()) {
  const g = parseYmd(gueltigBis);
  if (!g) return false;
  const h = new Date(heute.getFullYear(), heute.getMonth(), heute.getDate());
  return g >= h;
}

module.exports = function (eleventyConfig) {
  // Statische Dateien kopieren.
  // src/assets/img/eindruecke/ ist bewusst NICHT dabei: aus diesen Fotos
  // erzeugt der "foto"-Shortcode die passenden Größen nach assets/img/gen/.
  // Die großen Ausgangsdateien müssen nicht mit ausgeliefert werden.
  eleventyConfig.addPassthroughCopy({ "src/assets/css": "assets/css" });
  eleventyConfig.addPassthroughCopy({ "src/assets/js": "assets/js" });
  eleventyConfig.addPassthroughCopy({ "src/assets/fonts": "assets/fonts" });
  eleventyConfig.addPassthroughCopy({ "src/assets/docs": "assets/docs" });
  eleventyConfig.addPassthroughCopy({ "src/assets/img/*.png": "assets/img" });
  eleventyConfig.addPassthroughCopy({ "src/CNAME": "CNAME" });

  // .yaml-Dateien in _data als Daten einlesen (von Eleventy nicht nativ unterstützt)
  eleventyConfig.addDataExtension("yaml", (contents) => yaml.load(contents));

  const pad = (n) => String(n).padStart(2, "0");
  const d2 = (d) =>
    `${pad(d.getDate())}.${pad(d.getMonth() + 1)}.${d.getFullYear()}`;
  const hm = (d) => `${pad(d.getHours())}:${pad(d.getMinutes())}`;
  const WEEKDAYS = ["So.", "Mo.", "Di.", "Mi.", "Do.", "Fr.", "Sa."];

  eleventyConfig.addFilter("d2", (d) => (d ? d2(new Date(d)) : ""));
  eleventyConfig.addFilter("hm", (d) => (d ? hm(new Date(d)) : ""));
  eleventyConfig.addFilter("weekday", (d) =>
    d ? WEEKDAYS[new Date(d).getDay()] : "",
  );
  eleventyConfig.addFilter("limit", (arr, n) => (arr || []).slice(0, n));
  eleventyConfig.addFilter("whereStufe", (arr, stufe) => (arr || []).filter((g) => g.stufe === stufe));
  eleventyConfig.addFilter("istGueltig", (d) => isGueltig(d));

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
    const MONTHS = [
      "Januar",
      "Februar",
      "März",
      "April",
      "Mai",
      "Juni",
      "Juli",
      "August",
      "September",
      "Oktober",
      "November",
      "Dezember",
    ];
    for (const ev of events || []) {
      const d = new Date(ev.start);
      const key = `${d.getFullYear()}-${pad(d.getMonth() + 1)}`;
      if (!groups[key])
        groups[key] = {
          label: `${MONTHS[d.getMonth()]} ${d.getFullYear()}`,
          events: [],
        };
      groups[key].events.push(ev);
    }
    return Object.keys(groups)
      .sort()
      .map((k) => groups[k]);
  });

  eleventyConfig.addShortcode("year", () => new Date().getFullYear());

  // Alter einer Stufe aus gruppenstunden.yaml holen (eine Quelle für alle
  // Seiten). Hat eine Stufe mehrere Gruppen, spannt sich die Angabe über
  // alle: aus "11–12 Jahre" und "12–13 Jahre" wird "11–13 Jahre". So bleibt
  // das Alter eine gepflegte Zahl je Gruppe und muss für die Stufe nicht
  // noch einmal von Hand irgendwo daneben stehen.
  //
  // Lässt sich die Spanne nicht ablesen – etwa weil eine Gruppe "ab 16
  // Jahren" schreibt –, bleibt die Angabe leer, und der Seitenkopf in
  // src/gruppen/ übernimmt (dort steht sie für Leiter und Altrover ohnehin).
  const ALTERSSPANNE = /^\s*(\d+)\s*[–-]\s*(\d+)\s*Jahren?\s*$/;
  eleventyConfig.addFilter("alterFuerStufe", (gruppen, stufe) => {
    const treffer = (gruppen || []).filter((x) => x.stufe === stufe);
    if (!treffer.length) return "";
    if (treffer.length === 1) return treffer[0].alter || "";
    const spannen = treffer.map((g) => ALTERSSPANNE.exec(g.alter || ""));
    if (spannen.some((s) => !s)) return "";
    const zahlen = spannen.flatMap((s) => [Number(s[1]), Number(s[2])]);
    return `${Math.min(...zahlen)}–${Math.max(...zahlen)} Jahre`;
  });

  // Die sechs Stufen-Seiten aus src/gruppen/. Der Stufenwähler auf der
  // Startseite holt sich daraus Titel, Motto und Teaser – so steht der Text
  // nur einmal im Repo, nämlich im Kopf der jeweiligen Seite.
  eleventyConfig.addCollection("stufen", (api) =>
    api.getFilteredByGlob("src/gruppen/*.md"),
  );

  // Die Stufen in der Reihenfolge, in der ihre Gruppen in
  // gruppenstunden.yaml stehen – jede Stufe nur einmal, auch wenn sie
  // mehrere Gruppen hat. Der Stufenwähler auf der Startseite baut daraus
  // seine Reiter: einen je Stufe, nicht einen je Gruppe.
  eleventyConfig.addFilter("stufenMitGruppe", (gruppen) => [
    ...new Set((gruppen || []).map((g) => g.stufe)),
  ]);

  // Eine einzelne Stufen-Seite über ihren "stufe"-Schlüssel finden.
  eleventyConfig.addFilter("stufeSeite", (stufen, stufe) =>
    (stufen || []).find((s) => s.data.stufe === stufe),
  );

  // Foto aus src/assets/img/eindruecke/ in mehreren Größen ausgeben.
  // Erwartet den Dateinamen ohne Endung, so wie er in bilder.yaml steht.
  //
  // Bewusst synchron: ein async-Shortcode liefert innerhalb von
  // {% include %} in einem Layout keine Ausgabe. statsSync rechnet die
  // Dateinamen sofort aus, das eigentliche Verkleinern läuft daneben und
  // wird unten bei "eleventy.after" abgewartet.
  const IMG_OPTS = {
    widths: [480, 960, 1600],
    formats: ["webp", "jpeg"],
    outputDir: "_site/assets/img/gen/",
    urlPath: "/assets/img/gen/",
    filenameFormat: (id, s, width, format) =>
      `${path.basename(s, path.extname(s))}-${width}.${format}`,
  };
  const offeneBilder = [];

  eleventyConfig.addShortcode("foto", function (name, sizes, eager) {
    if (!name) return "";
    const src = path.join(FOTO_DIR, `${name}.jpg`);
    if (!fs.existsSync(src)) {
      console.warn(
        `[bilder] "${name}" steht in bilder.yaml, aber ${src} gibt es nicht.`,
      );
      return "";
    }
    offeneBilder.push(Image(src, IMG_OPTS));
    const metadata = Image.statsSync(src, IMG_OPTS);
    return Image.generateHTML(metadata, {
      // Die Bilder liegen hinter Text, der dasselbe aussagt -> dekorativ.
      alt: "",
      sizes: sizes || "100vw",
      loading: eager ? "eager" : "lazy",
      decoding: "async",
    });
  });

  // Build erst beenden, wenn alle Bilder wirklich geschrieben sind.
  eleventyConfig.on("eleventy.after", async () => {
    await Promise.all(offeneBilder);
    offeneBilder.length = 0;
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    pathPrefix: "/",
  };
};

module.exports.isGueltig = isGueltig;
