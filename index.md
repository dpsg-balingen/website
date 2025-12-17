---
layout: home
title: "Willkommen beim DPSG Stamm Heilig Geist"
---

<section>
  <div class="text-center mb-12">
    <h2 class="text-3xl md:text-4xl font-bold mb-4">Unsere Stufen</h2>
    <p class="text-lg text-muted-foreground">Von 9 bis 99 Jahre – für jedes Alter haben wir die passende Gruppe</p>
  </div>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    {% for g in site.data.gruppen %}
    <div class="card hover:shadow-md transition-shadow group relative overflow-hidden">
      <div class="flex flex-col h-full">
        <div class="mb-4">
            <h3 class="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{{ g.name }}</h3>
            <span class="inline-block py-1 px-2 rounded bg-secondary/10 text-secondary-foreground text-xs font-bold uppercase tracking-wider">
                {{ g.altersgruppe.von }}–{{ g.altersgruppe.bis }} Jahre
            </span>
        </div>
        
        <div class="space-y-2 mb-6 flex-grow text-sm text-muted-foreground">
            <p class="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                {{ g.treff.tag }}, {{ g.treff.start }}–{{ g.treff.ende }} Uhr
            </p>
            <p class="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                Leitung: {{ g.leiter | join: ", " }}
            </p>
        </div>

        <a class="btn w-full mt-auto" href="{{ '/stufen/' | append: g.name | downcase | replace: ' und ', '-' | replace: ' ', '-' | relative_url }}">
            Zur Stufe
        </a>
      </div>
    </div>
    {% endfor %}
  </div>
</section>