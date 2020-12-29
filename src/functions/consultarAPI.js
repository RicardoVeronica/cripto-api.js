import * as UI from "../selectors";
import mostrarCotizacion from "./mostrarCotizacion";
import mostrarSpinner from "./mostrarSpinner";

function consultarAPI() {
  const { moneda, criptomoneda } = UI.objBusqueda;
  const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

  mostrarSpinner();

  fetch(url)
    .then((result) => result.json())
    .then((cotizacion) =>
      mostrarCotizacion(cotizacion.DISPLAY[criptomoneda][moneda])
    );
}

export default consultarAPI;
