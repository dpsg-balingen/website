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

## 🖼️ Bilder / Galerie

Fotos in den Ordner `src/assets/img/` legen. In der Galerie (`src/bilder.md`)
die Platzhalter ersetzen, z. B.:

```html
<div class="gallery">
  <a href="/assets/img/lager1.jpg"
    ><img src="/assets/img/lager1.jpg" alt="Stammeslager"
  /></a>
</div>
```

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
  _data/        Daten (gruppenstunden, kontakt, links, site, events)
  _includes/    Layout & Bausteine (Kopf, Fuß, Seitenleiste)
  assets/       CSS, JS, Bilder (Logo)
  *.md          die einzelnen Seiten als Markdown
.eleventy.js    Konfiguration des Generators
.github/        automatischer Build & Deploy
```
