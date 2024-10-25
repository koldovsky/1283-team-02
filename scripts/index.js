function init() {
  import("./header.js");
<<<<<<< Updated upstream
  import("./product-tabs.js")
  import("./dinamic-prodicts-cards-rendering.js")
=======
  import("./product-tabs.js");
  import("./headphones.js");
>>>>>>> Stashed changes
}

const totalPartials = document.querySelectorAll('[hx-trigger="load"], [data-hx-trigger="load"]').length;
let loadedPartialsCount = 0;

document.body.addEventListener('htmx:afterOnLoad', () => {
  loadedPartialsCount++;
  if (loadedPartialsCount === totalPartials) init();
});