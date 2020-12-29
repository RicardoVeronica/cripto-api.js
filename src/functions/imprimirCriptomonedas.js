import obtenerCriptomonedas from "./obtenerCriptomonedas";
import selectCriptomonedas from "./selectCriptomonedas";

function imprimirCriptomonedas() {
  // Consulta API de criptomonedas
  const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`;

  fetch(url)
    .then((response) => response.json())
    .then((criptomonedas) => obtenerCriptomonedas(criptomonedas.Data))
    .then((criptomonedas) => selectCriptomonedas(criptomonedas));
}

export default imprimirCriptomonedas;
