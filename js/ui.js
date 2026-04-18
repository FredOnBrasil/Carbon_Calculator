// Preenche combobox de cidades
window.populateCities = function() {
  const fromSelect = document.getElementById("cityFrom");
  const toSelect = document.getElementById("cityTo");

  window.CITIES.forEach(city => {
    const optionFrom = document.createElement("option");
    optionFrom.value = city;
    optionFrom.textContent = city;
    fromSelect.appendChild(optionFrom);

    const optionTo = document.createElement("option");
    optionTo.value = city;
    optionTo.textContent = city;
    toSelect.appendChild(optionTo);
  });
};

window.showResult = function(emission) {
  const resultDiv = document.getElementById("result");
  resultDiv.textContent = `Emissão estimada: ${emission} kg CO₂`;
};
