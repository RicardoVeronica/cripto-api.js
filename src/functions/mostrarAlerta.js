import * as UI from "../selectors";

function mostrarAlerta(mensaje) {
  // Muestra alerta en HTML
  const existeError = document.querySelector(".error");

  if (!existeError) {
    const div = document.createElement("div");
    div.classList.add("error");
    div.textContent = mensaje;

    UI.formulario.appendChild(div);

    setTimeout(() => {
      div.remove();
    }, 2500);
  }
}

export default mostrarAlerta;
