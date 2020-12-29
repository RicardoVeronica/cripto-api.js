import * as UI from "../selectors";

function leerValor(e) {
  // Lee valor de criptomoneda
  UI.objBusqueda[e.target.name] = e.target.value;
}

export default leerValor;
