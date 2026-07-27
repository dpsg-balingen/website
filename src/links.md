---
layout: layouts/base.njk
title: Links
---

Weiterführende Seiten rund um die Pfadfinderei:

<ul class="footer-links" style="gap:12px;font-size:1.05rem">
{% for l in links %}
<li><a href="{{ l.url }}" target="_blank" rel="noopener">{{ l.name }} →</a></li>
{% endfor %}
</ul>
