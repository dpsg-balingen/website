---
layout: page
title: Unsere Stufen
---

In der DPSG sind die Kinder und Jugendlichen in vier Altersstufen aufgeteilt. Jede Stufe hat ihr eigenes Programm, passend zum Alter und den Interessen.

Unsere Gruppentreffen finden normalerweise im **Pfadi-Haus** (Edith-Stein Zentrum, Hirschbergstraße 112/2) statt, sofern nichts anderes auf dem Gruppenprogramm steht.

<div class="space-y-12 my-12 not-prose">
  {% for gruppe in site.data.gruppen %}
    {% assign mod = forloop.index | modulo: 2 %}
    <div class="flex flex-col {% if mod == 0 %}md:flex-row-reverse{% else %}md:flex-row{% endif %} gap-8 items-center">
      
      <!-- Image Section -->
      <div class="w-full md:w-1/2">
        <div class="relative aspect-video rounded-2xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-transform duration-500">
          <img 
            src="{{ '/assets/images/' | append: gruppe.image | relative_url }}" 
            alt="{{ gruppe.name }}" 
            class="w-full h-full object-cover"
          >
        </div>
      </div>
      
      <!-- Content Section -->
      <div class="w-full md:w-1/2 space-y-4">
        <div class="flex items-center gap-4 mb-2">
          <span class="text-sm font-bold uppercase tracking-wider text-muted-foreground">
            {{ gruppe.altersgruppe.von }} - {{ gruppe.altersgruppe.bis }} Jahre
          </span>
          <div class="h-px bg-border flex-grow"></div>
        </div>
        
        <a href="{{ '/stufen/' | append: gruppe.id | relative_url }}">
          <h2 class="text-3xl font-bold" style="color: {{ gruppe.hex_farbe }}">{{ gruppe.name }}</h2>
        </a>
        <p class="text-lg leading-relaxed text-muted-foreground">
          {{ gruppe.description }}
        </p>
        
        <div class="bg-white/50 rounded-lg border border-border inline-block mt-4">
          <p class="font-semibold" style="color: {{ gruppe.hex_farbe }}">
            Gruppenstunde: <span class="font-normal text-foreground">{{ gruppe.treff.tag }}, {{ gruppe.treff.start }} - {{ gruppe.treff.ende }}</span>
          </p>
        </div>

        <a href="{{ '/stufen/' | append: gruppe.id | relative_url }}" class="btn text-white border-0 shadow-md hover:opacity-90 transition-opacity" style="background-color: {{ gruppe.hex_farbe }};">
            Mehr erfahren
        </a>
      </div>

    </div>

{% endfor %}

</div>

## Interesse?

Wenn ihr Interesse an den Pfadfindern in Balingen habt, oder mal in eine Gruppenstunde reinschnuppern möchtet, könnt ihr gerne [Kontakt mit uns aufnehmen]({{ '/legal/kontakt' | relative_url }}).

### Finanzielles

Bei vielen unserer Aktivitäten müssen wir Teilnehmerbeiträge erheben. Als Pfadfinderinnen und Pfadfinder sind wir eine große solidarische Gemeinschaft. **Aus finanziellen Gründen soll niemand von unseren Aktivitäten ausgeschlossen werden.**

Sollten finanzielle Gründe die Teilnahme Ihres Kindes an einer unserer Aktivitäten erschweren oder gar verhindern, werden wir eine Lösung finden. Bitte melden Sie sich in diesem Falle an **David Ott** (E-Mail: info@dpsg-balingen.de, Tel.: 0176 83535142), der Ihr Anliegen selbstverständlich absolut vertraulich behandeln wird.

> Geldknappheit wird die Teilnahme an unseren Pfadfinderaktionen nicht verhindern!

