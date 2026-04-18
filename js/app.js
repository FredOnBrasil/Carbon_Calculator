document.addEventListener("DOMContentLoaded", () => {
  window.populateCities();

  document.getElementById("calculateBtn").addEventListener("click", () => {
    const cityFrom = document.getElementById("cityFrom").value;
    const cityTo = document.getElementById("cityTo").value;
    const transport = document.querySelector("input[name='transport']:checked").value;

    if (cityFrom === cityTo) {
      window.showResult("Selecione cidades diferentes para calcular.");
      return;
    }

    const route = window.ROUTES.find(r => r.from === cityFrom && r.to === cityTo);
    if (!route) {
      window.showResult("Rota não disponível.");
      return;
    }

    const emission = window.calculateEmission(route.distance, transport);
    window.showResult(emission);
  });
});
