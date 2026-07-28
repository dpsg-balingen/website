# DPSG Balingen – Website

Website des Stammes Heilig Geist, gebaut mit dem Static-Site-Generator
**[Eleventy (11ty)](https://www.11ty.dev/)**, veröffentlicht über **GitHub
Actions** auf **GitHub Pages** (Domain **dpsg-balingen.de**).

Die Termine werden automatisch aus dem öffentlichen **Google-Kalender** (iCal)
geholt – bei jedem Build und zusätzlich **jede Nacht automatisch**.

---

## 🚀 Schnellstart (lokal ansehen)

Voraussetzung: [Node.js](https://nodejs.org) (Version 18 oder neuer).

```bash
npm install       # einmalig, installiert die Werkzeuge
npm start         # startet eine Vorschau unter http://localhost:8080
```

Zum Erzeugen der fertigen Seite (Ordner `_site/`):

```bash
npm run build
```

---

## ✏️ Inhalte pflegen (das Wichtigste)

Du brauchst **keine Programmierkenntnisse**. Fast alles sind einfache
Text-Dateien.

### Gruppenstunden & Leiter → `src/_data/gruppenstunden.yaml`

Das ist die wichtigste Datei. Sie steuert die Seite **Gruppenstunden**. Einfach
die Zeiten und Namen anpassen – Reihenfolge = Reihenfolge auf der Seite:

```yaml
saison: "2024/2025"

gruppen:
  - name: "Wichtel & Wölflinge"
    alter: "ca. 9–11 Jahre"
    tag: "Donnerstag"
    zeit: "18:00–19:30 Uhr"
    leiter: [Laura, Ella, Sina, Kathi, Lara, Emilia]
```

- **Leiter hinzufügen/entfernen:** Namen in der eckigen Klammer `[ ]` durch
  Komma getrennt.
- **Neue Gruppe:** einen kompletten `- name:` … Block kopieren und anpassen.
- Auf die Einrückung mit Leerzeichen achten (keine Tabs).

### Kontakt & Ansprechpartner → `src/_data/kontakt.yaml`

Anschrift, E-Mail und die Ansprechpartner (Name, Rolle, Telefon, E-Mail). Diese
Daten erscheinen automatisch auf **Kontakt** und **Impressum** und im Footer.

### Termine → nichts zu tun ✨

Die Termine kommen aus dem Google-Kalender. Einfach im **Google Kalender** einen
Termin anlegen – über Nacht (oder beim nächsten `git push`) erscheint er
automatisch auf **Kalender** und **Startseite**. Der Kalender-Link steht in
`src/_data/site.json` (`icalUrl`).

### Ankündigungs-Banner → `src/_data/banner.yaml`

Ein Banner, das oben auf **jeder Seite** erscheint, solange es aktuell ist –
z. B. für "Anmeldung fürs Sommerlager ist ab jetzt möglich!".

```yaml
nachricht: "Anmeldung fürs Sommerlager ist ab jetzt möglich!"
gueltig_bis: "2026-08-01"
link: "/kontakt/"
link_text: "Kontakt aufnehmen"
```

- **Anzeigen:** `nachricht` und `gueltig_bis` (Format `JJJJ-MM-TT`) ausfüllen.
  Das Banner verschwindet automatisch einen Tag nach `gueltig_bis` – ganz ohne
  weiteres Zutun, beim nächsten nächtlichen Build oder `git push`.
- **Vorzeitig ausblenden:** `nachricht` leeren (`""`) oder `gueltig_bis` auf
  ein vergangenes Datum setzen.
- **Link ist optional:** `link` und `link_text` leer lassen, wenn das Banner
  nur Text zeigen soll.

### Fotos → `src/_data/bilder.yaml`

Die Fotos liegen alle in **`src/assets/img/eindruecke/`**. Wo welches Foto
erscheint, steht gesammelt in `src/_data/bilder.yaml` – dort nur der Dateiname
**ohne** `.jpg`:

```yaml
stufen:
  woelflinge: kistenklettern-gruppenstunde # Kopfbild der Wölflinge-Seite

seiten:
  gesetz: sternenhimmel-milchstrasse # Kopfbild von /pfadfinder/gesetz/

stammesleben: # die fünf Kacheln auf der Startseite
  - titel: "72h Aktion"
    bild: bauaktion-feuerstelle
```

**Ein Foto austauschen – zwei Wege:**

1. Neues Foto in den Ordner legen und in `bilder.yaml` den Namen ändern.
2. Oder die vorhandene Datei einfach überschreiben – dann bleibt die
   `bilder.yaml` unverändert.

**Kein Foto:** Zeile leer lassen oder mit `#` auskommentieren. Die Seite sieht
dann aus wie vorher – nur Überschrift, kein Bild. (So ist es z. B. bei
`/pfadfinder/gruender/`.)

**Worauf beim Fotografieren achten:**

- **Querformat.** Hochformat wird stark beschnitten.
- Das Wichtigste **nicht ganz unten** ins Bild legen – dort liegen Motto, Name
  und Alter.
- Nur Fotos verwenden, für die eine **Einwilligung** der abgebildeten Personen
  vorliegt (bei Kindern der Eltern). Siehe Abschnitt „Fotos auf dieser Website"
  in der Datenschutzerklärung.

**Größe:** Die Bilder im Ordner sollten höchstens ca. 2000 Pixel breit sein
(unter 1 MB). Beim Bauen der Seite werden daraus automatisch die passenden
Größen fürs Handy und für große Bildschirme erzeugt. Fotos direkt aus der Kamera
(10–20 MB) bitte vorher verkleinern – sonst wird das Repository unnötig groß.

### Texte der Seiten → `src/**/*.md`

Jede Seite ist eine **Markdown**-Datei in `src/`, z. B.:

| Seite          | Datei                       |
| -------------- | --------------------------- |
| Startseite     | `src/index.md`              |
| Wölflinge      | `src/gruppen/woelflinge.md` |
| Gruppenstunden | `src/gruppenstunden.md`     |
| Kalender       | `src/kalender.md`           |
| Kontakt        | `src/kontakt.md`            |
| Impressum      | `src/impressum.md`          |

Der Text zwischen den `---` oben (Front-Matter) enthält nur den Titel – der
eigentliche Inhalt steht darunter und lässt sich wie normaler Text bearbeiten
(**fett** = `**fett**`, Überschrift = `## Überschrift`, Link = `[Text](url)`).

### Links → `src/_data/links.yaml`

### Navigation / Social Media / Kalender-Link → `src/_data/site.json`

---

## 🌐 Veröffentlichen (Deployment)

Bei jedem `git push` auf den Branch `main` baut GitHub Actions die Seite und
veröffentlicht sie. Zusätzlich läuft der Build **jede Nacht um 4 Uhr**
automatisch (damit neue Kalendertermine erscheinen).

**Einmalige Einrichtung im GitHub-Repository:**

1. **Settings → Pages → Source:** „GitHub Actions“ auswählen.
2. **Settings → Pages → Custom domain:** `dpsg-balingen.de` eintragen. (Die
   Datei `src/CNAME` sorgt dafür automatisch – die Domain muss beim
   Domain-Anbieter per DNS auf GitHub Pages zeigen.)
3. Fertig – ab jetzt genügt bei Änderungen ein `git push`.

Den nächtlichen Build kann man auch manuell auslösen: **Actions → „Build &
Deploy“ → Run workflow**.

---

## 📁 Projektstruktur

```
src/
  _data/        Daten (gruppenstunden, kontakt, bilder, links, site, events)
  _includes/    Layout & Bausteine (Kopf, Fuß, Seitenleiste, Seitenheader)
  assets/
    img/eindruecke/   die Fotos – hier neue ablegen
    css, js, fonts, docs
  *.md          die einzelnen Seiten als Markdown
.eleventy.js    Konfiguration des Generators
.github/        automatischer Build & Deploy
_originale/     unverkleinerte Foto-Originale (nicht im Repository)
```

> Beim Bauen entsteht zusätzlich `_site/assets/img/gen/` mit den automatisch
> erzeugten Bildgrößen. Dieser Ordner wird nicht von Hand gepflegt.
