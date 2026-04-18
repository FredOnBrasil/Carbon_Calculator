// Manipulação do DOM
window.populateRoutes = function() {
  const select = document.getElementById("route");
  window.ROUTES.forEach(route => {
    const option = document.createElement("option");
    option.value = route.id;
    option.textContent = route.name;
    select.appendChild(option);
  });
};

window.showResult = function(emission) {
  const resultDiv = document.getElementById("result");
  resultDiv.textContent = `Emissão estimada: ${emission} kg CO₂`;
};
