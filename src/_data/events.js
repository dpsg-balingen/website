const ical = require("node-ical");

// Öffentlicher iCal-Link des Google-Kalenders (in site.json gepflegt)
const ICS_URL =
  "https://calendar.google.com/calendar/ical/htv06j7337loagigeeivdk8c5c%40group.calendar.google.com/public/basic.ics";

module.exports = async function () {
  let data;
  try {
    data = await ical.async.fromURL(ICS_URL);
  } catch (err) {
    console.warn("[events] Kalender konnte nicht geladen werden:", err.message);
    return [];
  }

  const now = new Date();
  const from = new Date(now.getFullYear(), now.getMonth(), now.getDate()); // ab heute 00:00
  const to = new Date(from);
  to.setFullYear(to.getFullYear() + 2); // Horizont: 2 Jahre

  const out = [];

  for (const key in data) {
    const ev = data[key];
    if (!ev || ev.type !== "VEVENT") continue;

    const start = ev.start ? new Date(ev.start) : null;
    if (!start) continue;
    const end = ev.end ? new Date(ev.end) : start;
    const durationMs = end - start;
    const allDay = ev.datetype === "date";

    const add = (s) => {
      const e = new Date(s.getTime() + durationMs);
      if (e < from || s > to) return;
      out.push({
        title: ev.summary || "Termin",
        start: s,
        end: e,
        allDay,
        location: ev.location || "",
        description: ev.description || "",
      });
    };

    if (ev.rrule) {
      // Wiederkehrende Termine im Zeitfenster auflösen
      let dates = [];
      try {
        dates = ev.rrule.between(from, to, true);
      } catch (e) {
        dates = [];
      }
      const ex = ev.exdate
        ? Object.values(ev.exdate).map((d) => new Date(d).toDateString())
        : [];
      for (const d of dates) {
        if (ex.includes(new Date(d).toDateString())) continue;
        add(new Date(d));
      }
    } else {
      add(start);
    }
  }

  out.sort((a, b) => a.start - b.start);
  return out;
};
