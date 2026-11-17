// Mobile-Navigation & Dropdowns
(function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }
  // Untermenüs: auf Mobile per Klick aufklappen
  document
    .querySelectorAll(".nav-item.has-children > .nav-parent")
    .forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        if (window.matchMedia("(max-width: 900px)").matches) {
          e.preventDefault();
          btn.parentElement.classList.toggle("open");
        }
      });
    });
})();

// Farbschema-Knopf (hell/dunkel)
// Von Haus aus folgt die Seite dem Gerät. Ein Klick legt das Gegenteil
// des aktuellen Schemas fest und merkt es sich. Landet man damit wieder
// bei dem, was das Gerät ohnehin will, wird die Wahl vergessen – dann
// folgt die Seite wieder dem Gerät, auch wenn es abends umschaltet.
// Das erste Setzen beim Laden passiert schon im <head> (base.njk).
(function () {
  var knopf = document.querySelector(".farbschema-knopf");
  var css = document.getElementById("dunkel-css");
  if (!knopf || !css || !window.matchMedia) return;
  var geraet = window.matchMedia("(prefers-color-scheme: dark)");

  function gemerkt() {
    try {
      var w = localStorage.getItem("farbschema");
      return w === "hell" || w === "dunkel" ? w : null;
    } catch (e) {
      return null;
    }
  }
  function merken(w) {
    try {
      if (w) localStorage.setItem("farbschema", w);
      else localStorage.removeItem("farbschema");
    } catch (e) {}
  }
  function istDunkel() {
    var w = gemerkt();
    return w ? w === "dunkel" : geraet.matches;
  }
  function anwenden() {
    var w = gemerkt();
    css.media = w ? (w === "dunkel" ? "all" : "not all") : "(prefers-color-scheme: dark)";
    var dunkel = istDunkel();
    document.documentElement.setAttribute("data-farbschema", dunkel ? "dunkel" : "hell");
    knopf.setAttribute("aria-pressed", dunkel ? "true" : "false");
    knopf.title = dunkel ? "Hell anzeigen" : "Dunkel anzeigen";
  }

  knopf.addEventListener("click", function () {
    var neu = istDunkel() ? "hell" : "dunkel";
    merken((neu === "dunkel") === geraet.matches ? null : neu);
    anwenden();
  });
  // Gerät schaltet um (z. B. abends) oder ein anderer Tab hat gewählt
  if (geraet.addEventListener) geraet.addEventListener("change", anwenden);
  window.addEventListener("storage", function (e) {
    if (e.key === "farbschema") anwenden();
  });

  anwenden();
  knopf.hidden = false;
})();
