import * as UI from "../selectors";
import mostrarAlerta from "./mostrarAlerta";
import consultarAPI from "./consultarAPI";

function submitFormulario() {
  const { moneda, criptomoneda } = UI.objBusqueda;

  if (moneda === "" || criptomoneda === "") {
    mostrarAlerta("Ambos campos son obligatorios");
    return;
  }

  consultarAPI();
}

export default submitFormulario;
