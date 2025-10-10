````markdown
# DPSG Balingen – Corporate Design Briefing

> Modernisierte Stilrichtlinie für Web, Print & Social Media  
> Erstellt: Oktober 2025  
> Zielgruppe: Designer, Webentwickler, Öffentlichkeitsarbeit

---

## 🧭 Zweck des Dokuments

Dieses Briefing dient als Leitfaden für alle, die grafische oder digitale Inhalte für den
Stamm **DPSG Balingen – Heilig Geist** gestalten.  
Es beschreibt das bestehende Erscheinungsbild der Website und schlägt eine modernisierte,
konsistente Gestaltungslinie vor, die die Werte der Pfadfinderbewegung – Gemeinschaft, Natur,
Verantwortung und Abenteuer – widerspiegelt.

---

## 🌿 Designprinzipien

| Prinzip | Beschreibung |
|----------|---------------|
| **Natürlich & ehrlich** | Farben, Formen und Fotos sollen an Natur, Holz, Erde und Gemeinschaft erinnern. Keine übertriebenen Effekte oder grelle Farben. |
| **Klar & offen** | Viel Weißraum, einfache Typografie, klare Hierarchie. Leser sollen schnell verstehen, worum es geht. |
| **Gemeinschaftlich** | Menschen, Gruppen und Erlebnisse stehen im Vordergrund – nie sterile Symbolik. |
| **Flexibel** | Das Design funktioniert sowohl digital (Website, Social Media) als auch im Print (Flyer, Lagerheft, Plakat). |

---

## 🎨 Farbpalette

Die aktuelle Website nutzt neutrale Farbtöne ohne klare Markierung.
Für ein konsistentes, modernes Erscheinungsbild wird folgende Palette vorgeschlagen:

| Kategorie | Farbe | Hex-Code | Verwendung |
|------------|--------|-----------|-------------|
| **Primärfarbe** | Dunkelgrün | `#2E5939` | Hauptfarbe für Buttons, Header, Akzente – symbolisiert Natur & Beständigkeit |
| **Sekundärfarbe** | Himmelblau | `#4A90E2` | Ergänzungsfarbe für Verweise, Call-to-Action, Links |
| **Akzentfarbe** | Sandbeige | `#E8D5B7` | Hintergrundflächen, Banner, harmonisch zu Fotos im Freien |
| **Neutral Hell** | Weißgrau | `#F5F5F5` | Hintergrund von Inhaltsflächen |
| **Neutral Dunkel** | Anthrazit | `#333333` | Textfarbe, starke Kontraste |
| **Warnfarbe (optional)** | Rostorange | `#E67E22` | Hinweise, Buttons, saisonale Aktionen |

> 💡 **Tipp:** Farbkombinationen orientieren sich am Pfadfinderkontext: Grün (Natur), Blau (Himmel),
Braun/Beige (Erde, Holz), Weiß (Offenheit).

---

## 🔤 Typografie

Die aktuelle Seite verwendet Standardschriften (z. B. Arial).  
Ein klarer, moderner Schriftsatz steigert die Wiedererkennbarkeit.

| Rolle | Schriftart | Ersatz / Fallback | Beschreibung |
|-------|-------------|-------------------|---------------|
| **Überschriften (H1–H3)** | `Poppins` (Google Fonts) | `Arial` | Runde, freundliche Sans-Serif für plakative Überschriften |
| **Fließtext** | `Open Sans` | `Helvetica`, `Arial` | Gute Lesbarkeit auf Web und Print |
| **Akzente (optional)** | `Caveat` | – | Handgeschriebene Schrift für Lager-Feeling, nur sparsam verwenden |

### Typografische Regeln

- Überschriften fett, klare Hierarchie (H1 36 px, H2 28 px, H3 20 px)
- Zeilenhöhe: 1.5× der Schriftgröße
- Textausrichtung: linksbündig, keine Blocksatztexte im Web
- Keine Großbuchstaben-Schreie in Überschriften

---

## 🖼️ Bildsprache

### Stil

| Kriterium | Beschreibung |
|------------|---------------|
| **Thema** | Lagerfeuer, Natur, Gemeinschaft, Abenteuer |
| **Farbwelt** | warme Töne, natürliche Sättigung, kein übermäßiger Filter |
| **Komposition** | Fokus auf Gruppenaktivität, Gesichter, Bewegung |
| **Licht** | bevorzugt Tageslicht, goldene Stunde |
| **Stimmung** | authentisch, lebendig, nahbar |

> Beispielhafte Bildstile: Lageraktionen, Zeltaufbau, gemeinsame Mahlzeiten, Naturerlebnis.

### Behandlung

- Einheitlicher Weißabgleich und Farbtemperatur  
- Dezente Nachbearbeitung: leichte Kontrastanhebung, aber kein HDR-Effekt  
- Gleiche Seitenverhältnisse (z. B. 3:2 oder 16:9 für Web)  
- Für Social Media: quadratisch oder 4:5  

---

## 🧩 Layout & Komponenten

### Grundraster

- Maximalbreite: 1200 px  
- Content-Container: 960 px  
- 12-Spalten-Raster mit 20 px Gutter  
- Außenabstand (Padding): 24 px  

### Elemente

| Element | Stilrichtlinie |
|----------|----------------|
| **Headerbereich** | Weiß oder transparent mit Logo links, Navigation rechts. Sticky empfohlen. |
| **Buttons** | Abgerundete Ecken (4 px), Primärfarbe #2E5939, Weißtext, Hover: leicht dunkler. |
| **Karten / Sektionen** | Schatten: `box-shadow: 0 2px 6px rgba(0,0,0,0.1)` |
| **Listen & Icons** | Icons in Linie (z. B. Feather Icons, Heroicons), konsistente Strichstärke. |
| **Footer** | Dunkelgrün oder Anthrazit, weiße Schrift, dezente Trennlinie oben. |

---

## 🧱 Komponentenbibliothek (Beispiele)

### Buttons
```html
<button class="btn-primary">Jetzt mitmachen</button>

<style>
.btn-primary {
  background-color: #2E5939;
  color: white;
  border-radius: 4px;
  padding: 10px 18px;
  transition: background-color 0.2s;
}
.btn-primary:hover {
  background-color: #254A30;
}
</style>
````

### Banner / Abschnittstitel

```html
<section class="hero">
  <h1>Abenteuer warten auf dich</h1>
  <p>Werde Teil der DPSG Balingen</p>
</section>
```

---

## 📸 Social Media Style

| Element              | Richtlinie                                                       |
| -------------------- | ---------------------------------------------------------------- |
| **Posting-Farben**   | Grün/Blau-Ton mit Weißtext                                       |
| **Rahmen / Overlay** | 10 % Transparenz über Fotos für Textlesbarkeit                   |
| **Hashtag-Block**    | Einheitlich: `#dpsgbalingen`, `#pfadfinden`, `#heiliggeiststamm` |
| **Logo-Position**    | immer unten rechts, max. 10 % Bildhöhe                           |

---

## ✏️ Sprache & Tonalität

* **Du-Form**, persönlich und einladend
* Kurze, klare Sätze
* Positive Formulierungen („Erlebe“, „Gestalte“, „Komm dazu“)
* Keine Verwaltungs- oder Kirchenbüro-Sprache

---

## 🧭 Zusammenfassung – Key Visual Identity

| Kategorie       | Stil                                          |
| --------------- | --------------------------------------------- |
| **Markenkern**  | Gemeinschaft, Natur, Abenteuer, Verantwortung |
| **Hauptfarben** | Dunkelgrün – Sandbeige – Himmelblau           |
| **Schrift**     | Poppins + Open Sans                           |
| **Bildsprache** | Authentisch, draußen, freundlich              |
| **Layout**      | Luftig, klare Kanten, natürliche Kontraste    |
| **Tonfall**     | Direkt, jugendlich, positiv                   |

---


## 💬 Schlusswort

Dieses Dokument dient als visuelle und kommunikative Grundlage
für zukünftige Medien des Stammes DPSG Balingen.

Es ist keine starre Regel, sondern ein Rahmen, der hilft,
**einheitlich, erkennbar und professionell** aufzutreten –
von der Website über Social Media bis zum Lagerplakat.

> „Einheit im Stil, Vielfalt in der Gestaltung.“

---

**Kontakt / Verantwortlich:**
`Öffentlichkeitsarbeit DPSG Balingen`
E-Mail: [kontakt@dpsg-balingen.de](mailto:kontakt@dpsg-balingen.de)

---
