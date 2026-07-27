---
layout: layouts/base.njk
title: Kalender
description: Alle Termine der DPSG Balingen im Überblick.
---

Alle kommenden Termine unseres Stammes. Die Übersicht wird automatisch aus
unserem Online-Kalender aktualisiert.

<p><a class="btn btn-navy btn-sm" href="{{ site.icalSubscribe }}" target="_blank" rel="noopener">Kalender abonnieren</a> &nbsp; <a class="btn btn-outline btn-sm" href="{{ site.icalUrl }}">iCal-Datei (.ics)</a></p>

{% set months = events | byMonth %} {% if months.length %} {% for m in months %}

<h2 class="cal-month">{{ m.label }}</h2>
<ul class="cal-list">
{% for ev in m.events %}
<li class="cal-item"><span class="cal-when">{{ ev | eventWhen }}</span><span><span class="cal-title">{{ ev.title }}</span>{% if ev.location %}<span class="cal-loc">{{ ev.location }}</span>{% endif %}</span></li>
{% endfor %}
</ul>
{% endfor %}
{% else %}
<p class="muted">Zurzeit sind keine kommenden Termine eingetragen.</p>
{% endif %}
