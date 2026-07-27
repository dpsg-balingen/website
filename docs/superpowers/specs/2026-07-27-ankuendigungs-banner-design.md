# Ankündigungs-Banner – Design

## Kontext

Die Website hat aktuell keine Möglichkeit, kurzfristige Neuigkeiten
("Anmeldung fürs Sommerlager ist offen", "Gruppenstunde diese Woche
ausnahmsweise verlegt") anzukündigen, außer über den Google-Kalender.
Ein einzelnes, zeitlich begrenztes Text-Banner soll diese Lücke schließen –
ohne Archiv, ohne mehrere gleichzeitige Meldungen, ohne neue Abhängigkeiten.

## Ziel

Eine Person ohne Programmierkenntnisse kann eine kurze Ankündigung in einer
Datei eintragen, die automatisch auf jeder Seite erscheint und nach einem
festgelegten Datum von selbst wieder verschwindet – ganz ohne erneutes
Bearbeiten der Datei.

## Datenstruktur

Neue Datei `src/_data/banner.yaml`, editierbar nach demselben Muster wie
`kontakt.yaml` und `links.yaml` (Kommentarzeile erklärt das Format):

```yaml
# Ankündigungs-Banner – erscheint oben auf jeder Seite, solange "gueltig_bis"
# nicht in der Vergangenheit liegt.
# Zum Ausblenden: nachricht leer lassen ("") oder gueltig_bis in die
# Vergangenheit setzen.
nachricht: ""
gueltig_bis: "" # Format: JJJJ-MM-TT, z. B. 2026-08-01
link: "" # optional, z. B. /kontakt/
link_text: "" # optional, nur genutzt wenn link gesetzt ist
```

- `nachricht`: der angezeigte Text (Klartext, kein Markdown/HTML).
- `gueltig_bis`: letzter Tag, an dem das Banner noch angezeigt wird
  (inklusiv). Am Folgetag verschwindet es automatisch.
- `link` / `link_text`: optional. Ist `link` gesetzt, erscheint am Ende des
  Banners ein Pfeil-Link (`link_text →`). Ist `link` leer, wird kein Link
  gerendert.

## Sichtbarkeits-Logik

Neuer Filter `istGueltig` in `.eleventy.js` (gleiches Muster wie die
bestehenden Filter `d2`, `whereStufe`, `eventWhen`), der ein Datum
(`gueltig_bis`) entgegennimmt und mit dem heutigen Datum
(Datums-Granularität, ohne Uhrzeit) vergleicht:

- Banner wird angezeigt, wenn `nachricht` nicht leer **und** `gueltig_bis`
  ein gültiges Datum **und** `gueltig_bis >= heute` ist.
- Fehlt `nachricht`, fehlt `gueltig_bis`, ist das Datum ungültig, oder liegt
  es in der Vergangenheit → Banner wird nicht gerendert. Kein Fehler, kein
  kaputtes Layout – "fail closed".

Da der Build täglich um 04:00 Uhr sowie bei jedem `git push` läuft (bestehende
GitHub Action), verschwindet ein abgelaufenes Banner spätestens am Folgetag
automatisch – im selben Rhythmus, in dem auch der Kalender aktualisiert wird.

## Platzierung

Das Banner wird einmal zentral in `src/_includes/layouts/base.njk` gerendert,
direkt oberhalb des bestehenden `{% include "partials/header.njk" %}` –
dadurch erscheint es auf jeder Seite, unabhängig davon, über welche Seite ein
Besucher einsteigt (z. B. direkt über eine Google-Suche auf
"Gruppenstunden").

```njk
{% if banner.nachricht and (banner.gueltig_bis | istGueltig) %}
<div class="ankuendigung">
  <span>{{ banner.nachricht }}</span>
  {% if banner.link %}<a class="ankuendigung-link" href="{{ banner.link }}">{{ banner.link_text }} →</a>{% endif %}
</div>
{% endif %}
{% include "partials/header.njk" %}
```

## Styling

Gewählt: **Sand/Ruhig** (Variante A aus dem visuellen Vergleich). Volle
Breite, dezenter Sand-Ton statt Alarmfarbe, zentrierter Text, dünne
Trennlinie zum Header darunter:

- Hintergrund: `var(--sand-bg)` (`#f5efe2`)
- Text: `var(--sand-dark)` (`#8a6c38`)
- Untere Trennlinie: 1px `var(--sand-line)` (`#e6dcc6`)
- Link (falls gesetzt): `var(--brand-dark)`, fett, mit `→`-Pfeil (bestehende
  Konvention, z. B. "Alle Termine ansehen →")
- Zeilenumbruch auf Mobile: Text und Link brechen bei Bedarf um, bleiben
  zentriert.

Neue CSS-Klasse `.ankuendigung` in `style.css`, direkt vor dem
`Header`-Abschnitt einsortiert.

## Fehlerbehandlung / Edge Cases

- Leere/fehlende `banner.yaml`-Werte → kein Banner, keine Warnung nötig (kein
  Build-Fehler, da YAML-Datei mit leeren Strings gültig ist).
- Ungültiges Datumsformat in `gueltig_bis` (z. B. Tippfehler) → Filter
  behandelt `Invalid Date` als "nicht gültig" → Banner wird nicht angezeigt
  (fail closed, kein kaputtes Layout).
- Sehr langer Text in `nachricht` → CSS erlaubt Umbruch, kein Abschneiden
  (Redaktion ist selbst dafür verantwortlich, den Text kurz zu halten;
  keine technische Längenbegrenzung nötig für dieses kleine Feature).

## Dokumentation

Neuer Abschnitt in `README.md` (gleiches Format wie der bestehende Abschnitt
"Kontakt & Ansprechpartner"), der beschreibt:

- Wo die Datei liegt (`src/_data/banner.yaml`)
- Wie man eine Ankündigung einträgt (`nachricht` + `gueltig_bis`, optional
  `link`/`link_text`)
- Wie man sie wieder ausblendet (Text leeren oder Datum in die Vergangenheit
  setzen)

## Nicht-Ziele (bewusst nicht Teil dieses Designs)

- Kein Archiv/keine Liste mehrerer Ankündigungen – immer nur eine aktive
  Meldung gleichzeitig.
- Kein Dismiss-Button / kein Speichern der Ausblendung im Browser
  (localStorage/Cookies) – passt nicht zur bestehenden "keine
  Cookies"-Haltung der Seite und ist für ein kurzlebiges Banner nicht nötig.
- Kein Markdown/HTML in `nachricht` – reiner Text, um die Redaktion einfach
  zu halten.
- Keine Uhrzeit-Granularität bei `gueltig_bis` – nur ganze Tage.

## Betroffene Dateien

| Datei | Änderung |
| --- | --- |
| `src/_data/banner.yaml` | neu |
| `.eleventy.js` | neuer Filter `istGueltig` |
| `src/_includes/layouts/base.njk` | Banner-Markup oberhalb des Headers |
| `src/assets/css/style.css` | neue `.ankuendigung`-Styles |
| `README.md` | neuer Abschnitt zur Pflege des Banners |
