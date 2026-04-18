// Inicialização
document.addEventListener("DOMContentLoaded", () => {
  window.populateRoutes();

  document.getElementById("calculateBtn").addEventListener("click", () => {
    const routeId = document.getElementById("route").value;
    const transport = document.getElementById("transport").value;

    const route = window.ROUTES.find(r => r.id === routeId);
    const emission = window.calculateEmission(route.distance, transport);

    window.showResult(emission);
  });
});
