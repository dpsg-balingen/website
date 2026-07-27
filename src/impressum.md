---
layout: layouts/base.njk
title: Impressum
---

Diese Seiten werden von der Deutschen Pfadfinderschaft St. Georg, Stamm Balingen Heilig Geist betreut.

**Anschrift:** {{ kontakt.anschrift.verein }}, {{ kontakt.anschrift.strasse }}, {{ kontakt.anschrift.ort }}
**Allgemeine E-Mail:** [{{ kontakt.email }}](mailto:{{ kontakt.email }})

<div class="contact-grid">
{% for p in kontakt.personen %}
<div class="person">
  <div class="role">{{ p.rolle }}</div>
  <div class="name">{{ p.name }}</div>
  <p>Tel. {{ p.tel }}<br><a href="mailto:{{ p.email }}">{{ p.email }}</a></p>
</div>
{% endfor %}
</div>

## Rechtliche Hinweise (Disclaimer)

### Inhalte dieser Website
Die Inhalte dieser Webseite werden mit größtmöglicher Sorgfalt erstellt. Der Webseitenbetreiber übernimmt jedoch keine Gewähr für die Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten Inhalte.

### Urheberrecht
Alle Inhalte und Strukturen dieser Webseite sind urheber- und leistungsschutzrechtlich geschützt. Die Veröffentlichung im World Wide Web oder in sonstigen Diensten des Internet bedeutet noch keine Einverständniserklärung für eine anderweitige Nutzung durch Dritte. Jede vom deutschen Urheberrecht nicht zugelassene Verwertung bedarf der vorherigen schriftlichen Zustimmung des Webseitenbetreibers.

Wir erlauben und begrüßen ausdrücklich das Zitieren unserer Dokumente sowie das Setzen von Links auf unsere Website, solange kenntlich gemacht wird, dass es sich um Inhalte des Webseitenbetreibers handelt und diese Inhalte nicht in Verbindung mit Inhalten Dritter gebracht werden, die den Interessen des Webseitenbetreibers widersprechen.

### Datenschutzhinweise
Unser Webserver erhebt keine personenbezogenen Daten, außer Fehlermeldungen zu Diagnosezwecken. Nach § 28 Abs. 3 Bundesdatenschutzgesetz widersprechen wir der Nutzung unserer Daten für Werbezwecke oder für die Markt- und Meinungsforschung.

### Links
Der Webseitenbetreiber ist als Inhaltsanbieter nach § 7 Abs. 1 Telemediengesetz für die „eigenen Inhalte“, die er zur Nutzung bereithält, nach den allgemeinen Gesetzen verantwortlich. Von diesen eigenen Inhalten sind Querverweise („Links“) auf die von anderen Anbietern bereitgehaltenen Inhalte zu unterscheiden. Für diese fremden Inhalte übernehmen wir keine Gewähr. Wenn wir feststellen oder darauf hingewiesen werden, dass ein konkretes Angebot, zu dem wir einen Link bereitgestellt haben, eine zivil- oder strafrechtliche Verantwortlichkeit auslöst, wird der Verweis auf dieses Angebot aufgehoben.
