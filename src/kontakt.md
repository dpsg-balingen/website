---
created_at: 2026-07-27 12:01:49
modified_at: 2026-07-27 12:02:28
layout: layouts/base.njk
title: Kontakt
---

# kontakt

Wenn ihr Interesse an den Pfadfindern habt oder einfach mal vorbeischauen wollt,
könnt ihr euch gerne bei uns melden.

**Anschrift:** {{ kontakt.anschrift.verein }}, {{ kontakt.anschrift.strasse }},
{{ kontakt.anschrift.ort }}<br> **Allgemeine E-Mail:** [{{ kontakt.email
}}](mailto:{{ kontakt.email }})

<div class="contact-grid">
{% for p in kontakt.personen %}
<div class="person">
  <div class="role">{{ p.rolle }}</div>
  <div class="name">{{ p.name }}</div>
  <p>Tel. {{ p.tel }}<br><a href="mailto:{{ p.email }}">{{ p.email }}</a></p>
</div>
{% endfor %}
</div>

### Mailverteiler

Wenn ihr Infos der DPSG Balingen ab sofort auch per Mail erhalten wollt, könnt
ihr unserem Mailverteiler beitreten. Schreibt dazu einfach eine E-Mail an [{{
kontakt.email }}](mailto:{{ kontakt.email }}?subject=Mailverteiler%20Beitreten)
mit dem Betreff „Mailverteiler Beitreten“.
