// Obtine las criptomonedas de la API por medio de una promise
const obtenerCriptomonedas = (criptomonedas) =>
  new Promise((resolver) => {
    resolver(criptomonedas);
  });

export default obtenerCriptomonedas;
