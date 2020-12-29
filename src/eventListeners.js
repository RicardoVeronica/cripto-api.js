import * as UI from "./selectors";
import submitFormulario from "./functions/submitFormulario";
import leerValor from "./functions/leerValor";

function eventListeners() {
  // Inicia la aplicacion
  UI.formulario.addEventListener("click", (e) => {
    if (e.target.matches("input[type='submit']")) {
      e.preventDefault();
      submitFormulario();
    }

    if (e.target.matches("#criptomonedas")) leerValor(e);

    if (e.target.matches("#moneda")) leerValor(e);
  });
}

export default eventListeners;
