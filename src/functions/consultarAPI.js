import * as UI from "../selectors";
import mostrarCotizacion from "./mostrarCotizacion";
import mostrarSpinner from "./mostrarSpinner";

async function consultarAPI() {
  // Consulta API usando fetch con async/await
  const { moneda, criptomoneda } = UI.objBusqueda;
  const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

  mostrarSpinner();

  // fetch(url)
  //   .then((result) => result.json())
  //   .then((cotizacion) =>
  //     mostrarCotizacion(cotizacion.DISPLAY[criptomoneda][moneda])
  //   );

  try {
    const resultado = await fetch(url);
    const cotizacion = await resultado.json();
    mostrarCotizacion(cotizacion.DISPLAY[criptomoneda][moneda]);
  } catch (e) {
    console.log(e);
  }
}

export default consultarAPI;
