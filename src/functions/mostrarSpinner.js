import * as UI from "../selectors";
import limpiarHTML from "./limpiarHTML";

function mostrarSpinner() {
  // Muestra spinner de carga
  limpiarHTML();

  const spinner = document.createElement("div");
  spinner.classList.add("spinner");
  spinner.innerHTML = `
      <div class="bounce1"></div>
      <div class="bounce2"></div>
      <div class="bounce3"></div>
    `;

  UI.resultado.appendChild(spinner);
}

export default mostrarSpinner;
