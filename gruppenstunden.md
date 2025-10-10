---
layout: page
title: Gruppenstunden
---

## Unsere Gruppenstunden

Unsere Gruppentreffen finden normalerweise im **Pfadi-Haus** (Edith-Stein Zentrum, Hirschbergstraße 112/2) statt, sofern nichts anderes auf dem Gruppenprogramm steht.

Wir nehmen neue Gruppenkinder frühestens ab dem Besuch der 4. Klasse auf (entsprechend einem Alter von 9/10 Jahren).

{% for gruppe in site.data.gruppen %}
<div class="card">
  <h3>{{ gruppe.name }}</h3>
  <p><strong>Alter:</strong> {{ gruppe.altersgruppe.von }}-{{ gruppe.altersgruppe.bis }} Jahre</p>
  <p><strong>Zeit:</strong> {{ gruppe.treff.tag }}, {{ gruppe.treff.start }}-{{ gruppe.treff.ende }} Uhr</p>
  <p><strong>Leitung:</strong> {{ gruppe.leiter | join: ", " }}</p>
</div>
{% endfor %}

## Interesse?

Wenn ihr Interesse an den Pfadfindern in Balingen habt, oder mal in eine Gruppenstunde reinschnuppern möchtet, könnt ihr gerne [Kontakt mit uns aufnehmen]({{ '/legal/kontakt' | relative_url }}).

<a href="{{ '/legal/kontakt' | relative_url }}" class="btn">Kontakt aufnehmen</a>

### Finanzielles

Bei vielen unserer Aktivitäten müssen wir Teilnehmerbeiträge erheben. Als Pfadfinderinnen und Pfadfinder sind wir eine große solidarische Gemeinschaft. **Aus finanziellen Gründen soll niemand von unseren Aktivitäten ausgeschlossen werden.**

Sollten finanzielle Gründe die Teilnahme Ihres Kindes an einer unserer Aktivitäten erschweren oder gar verhindern, werden wir eine Lösung finden. Bitte melden Sie sich in diesem Falle an **David Ott** (E-Mail: info@dpsg-balingen.de, Tel.: 0176 83535142), der Ihr Anliegen selbstverständlich absolut vertraulich behandeln wird.

> Geldknappheit wird die Teilnahme an unseren Pfadfinderaktionen nicht verhindern!