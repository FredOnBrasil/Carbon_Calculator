// Função de cálculo
window.calculateEmission = function(distance, transport) {
  const factor = window.CO2_FACTORS[transport];
  return (distance * factor).toFixed(2);
};
