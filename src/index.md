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

<ul class="highlights">
<li><span class="icon-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 20L12 5l9 15M8 20l4-7.5 4 7.5"/></svg></span><span>10-tägiges Stammeslager in den Sommerferien</span></li>
<li><span class="icon-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18l5-9 4 5.5 3-3.5 6 7"/><circle cx="17" cy="6" r="2"/></svg></span><span>Hike – Mehrtageswanderung mit Übernachtung</span></li>
<li><span class="icon-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l2.5 5.6 6.1.6-4.6 4.1 1.3 6-5.3-3.2-5.3 3.2 1.3-6-4.6-4.1 6.1-.6z"/></svg></span><span>Pfadi-Weihnacht</span></li>
<li><span class="icon-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3"/><path d="M3.5 20c0-4 2.5-6.2 5.5-6.2S14.5 16 14.5 20"/><circle cx="17" cy="9.2" r="2.3"/><path d="M14.8 20c.3-2.9 1.9-4.8 4.2-4.8"/></svg></span><span>Stammesversammlung</span></li>
<li><span class="icon-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 21V4m0 0h13l-3 4 3 4H5"/></svg></span><span>Jugendprogramm beim Gemeindefest</span></li>
<li><span class="icon-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18M7 8.5h10"/></svg></span><span>Jugendgottesdienst</span></li>
<li><span class="icon-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8h13v5a5 5 0 01-5 5H9a5 5 0 01-5-5V8z"/><path d="M17 9.5h1.2a2.3 2.3 0 010 4.6H17"/></svg></span><span>Cafélounge</span></li>
</ul>

<p>Außerdem sind wir aktives Mitglied im DPSG-Bezirk Schwarzwald Donau und nehmen an dessen Veranstaltungen teil. Wir verstehen uns als eine lebendige Zelle der Heilig-Geist-Gemeinde. Wir haben unsere eigenen Räume direkt neben dem Edith-Stein-Zentrum – den Gruppenraum mit Küche, die Leiterstube, den Lagerraum sowie -garage und unsere Grillstelle mit direktem Anschluss zum Garten des Kindergartens.</p>

<p>Ihr findet uns natürlich auch auf <a href="{{ site.social.instagram }}" target="_blank" rel="noopener">Instagram</a> und <a href="{{ site.social.facebook }}" target="_blank" rel="noopener">Facebook</a>.</p>

<h2>Unsere Stufen</h2>
<div class="group-grid">
<a class="group-tile" href="/gruppen/woelflinge/"><h3>Wölflinge</h3><span>9–11 Jahre</span></a>
<a class="group-tile" href="/gruppen/jungpfadfinder/"><h3>Jungpfadfinder</h3><span>11–13 Jahre</span></a>
<a class="group-tile" href="/gruppen/pfadfinder/"><h3>Pfadfinder</h3><span>14–16 Jahre</span></a>
<a class="group-tile" href="/gruppen/rover/"><h3>Rover</h3><span>ab 16 Jahre</span></a>
<a class="group-tile" href="/gruppen/leiter/"><h3>Leiter</h3><span>ab 18 Jahre</span></a>
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
