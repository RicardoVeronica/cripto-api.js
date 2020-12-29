import * as UI from "../selectors";

function limpiarHTML() {
  while (UI.resultado.firstChild) {
    UI.resultado.removeChild(UI.resultado.firstChild);
  }
}

export default limpiarHTML;
