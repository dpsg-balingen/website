---
layout: home
title: "Willkommen beim DPSG Stamm Heilig Geist"
---

<section class="hero">
  <h1>DPSG Stamm Heilig Geist Balingen</h1>
  <p>Gemeinschaft, Abenteuer und Verantwortung – bei uns finden Kinder und Jugendliche ihren Platz. Schau bei unseren Gruppenstunden vorbei oder informiere dich über aktuelle Termine.</p>
  <div class="stack" style="margin-top: 2rem;">
    <a class="btn" href="{{ '/gruppenstunden' | relative_url }}">Zu den Gruppenstunden</a>
    <a class="btn btn-secondary" href="{{ '/legal/kontakt' | relative_url }}">Kontakt aufnehmen</a>
  </div>
</section>

<div class="container" style="margin-top: 3rem;">
  <div class="grid">
    <div class="card">
      <h3>🏕️ Wer wir sind</h3>
      <p>Wir sind der Stamm Heilig Geist – Teil der Deutschen Pfadfinderschaft Sankt Georg (DPSG). Bei uns lernen Kinder und Jugendliche, Verantwortung zu übernehmen und die Welt aktiv mitzugestalten.</p>
      <a href="{{ '/wiki/stamm-heilig-geist' | relative_url }}">Mehr erfahren →</a>
    </div>
    <div class="card">
      <h3>🎒 Mitmachen</h3>
      <p>Du willst Pfadfinden erleben? Komm einfach zu einer Gruppenstunde vorbei oder melde dich bei uns. Schnuppern ist jederzeit möglich!</p>
      <a href="{{ '/legal/kontakt' | relative_url }}">Kontakt aufnehmen →</a>
    </div>
    <div class="card">
      <h3>📅 Termine & Aktionen</h3>
      <p>Vom Lagerfeuer bis zur Sommerfahrt – hier findest du alle anstehenden Termine auf einen Blick.</p>
      <a href="{{ '/kalender' | relative_url }}">Alle Termine →</a>
    </div>
  </div>
</div>

<div class="container" style="margin-top: 3rem;">
  <section>
    <h2>Unsere Stufen</h2>
    <p style="text-align: center; margin-bottom: 2rem;">Von 9 bis 99 Jahre – für jedes Alter haben wir die passende Gruppe</p>
    <div class="grid">
      {% for g in site.data.gruppen %}
      <div class="card">
        <h3>{{ g.name }}</h3>
        <p class="meta">{{ g.altersgruppe.von }}–{{ g.altersgruppe.bis }} Jahre</p>
        <p><strong>{{ g.treff.tag }}, {{ g.treff.start }}–{{ g.treff.ende }} Uhr</strong></p>
        <p>Leitung: {{ g.leiter | join: ", " }}</p>
        <a class="btn" href="{{ '/stufen/' | append: g.name | downcase | replace: ' und ', '-' | replace: ' ', '-' | relative_url }}">Zur Stufe</a>
      </div>
      {% endfor %}
    </div>
  </section>
</div>