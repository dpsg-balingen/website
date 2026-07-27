---
layout: layouts/base.njk
title: Gruppenstunden
---

Übersicht über die Gruppenstunden **{{ gruppenstunden.saison }}**.

Unsere Gruppentreffen finden normalerweise im Pfadi-Haus (Edith-Stein-Zentrum, Hirschbergstraße 112/2) statt, sofern nichts anderes auf dem Gruppenprogramm steht.

Wir nehmen neue Gruppenkinder frühestens ab dem Besuch der 4. Klasse auf (entsprechend einem Alter von 9/10 Jahren).

<div class="gs-grid">
{% for g in gruppenstunden.gruppen %}
<div class="gs-card">
  <h3>{{ g.name }}</h3>
  <div class="gs-age">{{ g.alter }}</div>
  <div class="gs-when">{{ g.tag }} · {{ g.zeit }}</div>
  <div class="gs-leiter"><strong>Leiter</strong>{{ g.leiter | join(", ") }}</div>
</div>
{% endfor %}
</div>

Wenn ihr Interesse an den Pfadfindern in Balingen habt oder mal in eine Gruppenstunde reinschnuppern möchtet, könnt ihr gerne [Kontakt mit uns aufnehmen](/kontakt/).

Wenn ihr noch mehr über die Pfadfinder wissen wollt, schaut doch mal in den [DPSG Eltern Bogen](/assets/docs/DPSG-Eltern-Bogen-03.23.pdf) oder unseren [Flyer DPSG Balingen](/assets/docs/Flyer-DPSG-Balingen-2023.pdf).

### Finanzielles

Bei vielen unserer Aktivitäten müssen wir Teilnehmerbeiträge erheben. Als Pfadfinderinnen und Pfadfinder sind wir eine große solidarische Gemeinschaft. Aus finanziellen Gründen soll niemand von unseren Aktivitäten ausgeschlossen werden. Sollten finanzielle Gründe die Teilnahme eures Kindes an einer unserer Aktivitäten erschweren oder gar verhindern, so werden wir hier eine Lösung finden. Bitte meldet euch in diesem Fall bei [David Ott](/kontakt/), der euer Anliegen selbstverständlich absolut vertraulich behandelt. Diese Regelung gilt für unser Sommerlager ebenso wie für alle unsere anderen Pfadfinderaktionen und für den DPSG-Mitgliedsbeitrag.
