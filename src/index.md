---
layout: layouts/base.njk
title: Startseite
sidebar: false
heroTitle: Pfadfinder in Balingen
heroSubtitle: Stamm Heilig Geist
description:
  DPSG Balingen – Stamm Heilig Geist. Pfadfinder in Balingen seit 1996 mit über
  100 Mitgliedern.
---

<div class="content prose">

<p class="lead">Seit 1996 gibt es unseren Stamm in Balingen. Wir sind inzwischen mehr als 100 Mitglieder. Neben den wöchentlichen Gruppentreffen, die wir für alle Stufen anbieten, bilden diese Veranstaltungen die Highlights unseres Jahresprogramms:</p>

{% include "partials/programmband.njk" %}

<p>Dazu kommen die Stammesversammlung, unser Jugendgottesdienst, das Jugendprogramm beim Gemeindefest und die Cafélounge.</p>

<p>Außerdem sind wir aktives Mitglied im DPSG-Bezirk Schwarzwald Donau und nehmen an dessen Veranstaltungen teil. Wir verstehen uns als eine lebendige Zelle der Heilig-Geist-Gemeinde. Wir haben unsere eigenen Räume direkt neben dem Edith-Stein-Zentrum – den Gruppenraum mit Küche, die Leiterstube, den Lagerraum sowie -garage und unsere Grillstelle mit direktem Anschluss zum Garten des Kindergartens.</p>

<p>Ihr findet uns natürlich auch auf <a href="{{ site.social.instagram }}" target="_blank" rel="noopener">Instagram</a> und <a href="{{ site.social.facebook }}" target="_blank" rel="noopener">Facebook</a>.</p>

<h2>Unsere Stufen</h2>
<div class="group-grid">
<a class="group-tile" href="/gruppen/woelflinge/"><h3>Wölflinge</h3><span>{{ gruppenstunden.gruppen | alterFuerStufe("woelflinge") }}</span></a>
<a class="group-tile" href="/gruppen/jungpfadfinder/"><h3>Jungpfadfinder</h3><span>{{ gruppenstunden.gruppen | alterFuerStufe("jungpfadfinder") }}</span></a>
<a class="group-tile" href="/gruppen/pfadfinder/"><h3>Pfadfinder</h3><span>{{ gruppenstunden.gruppen | alterFuerStufe("pfadfinder") }}</span></a>
<a class="group-tile" href="/gruppen/rover/"><h3>Rover</h3><span>{{ gruppenstunden.gruppen | alterFuerStufe("rover") }}</span></a>
<a class="group-tile" href="/gruppen/leiter/"><h3>Leiter</h3><span>ab 18 Jahren</span></a>
<a class="group-tile" href="/gruppen/altrover/"><h3>Altrover</h3><span>Ehemalige</span></a>
</div>

<h2>Aktuelle Termine</h2>
{% if events and events.length %}
<ul class="cal-list">
{% for ev in events | limit(4) %}
<li class="cal-item"><span class="cal-when">{{ ev | eventWhen }}</span><span><span class="cal-title">{{ ev.title }}</span>{% if ev.location %}<span class="cal-loc">{{ ev.location }}</span>{% endif %}</span></li>
{% endfor %}
</ul>
<p><a class="btn" href="/kalender/">Alle Termine ansehen →</a></p>
{% else %}
<p class="muted">Zurzeit sind keine Termine eingetragen. Schau in unseren <a href="/kalender/">Kalender</a>.</p>
{% endif %}

</div>
