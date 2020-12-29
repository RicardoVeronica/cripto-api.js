import * as UI from "../selectors";
import limpiarHTML from "./limpiarHTML";

function mostrarCotizacion(cotizacion) {
  // Mustra los resultados de la cotizacion de la criptomoneda
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR } = cotizacion;

  limpiarHTML();

  const precio = document.createElement("p");
  precio.classList.add("precio");
  precio.innerHTML = `El precio es: <span>${PRICE}</span>`;

  const precioAlto = document.createElement("p");
  precioAlto.innerHTML = `Precio mas alto del dia: <span>${HIGHDAY}</span>`;

  const precioBajo = document.createElement("p");
  precioBajo.innerHTML = `Precio mas bajo del dia: <span>${LOWDAY}</span>`;

  const variacion = document.createElement("p");
  variacion.innerHTML = `Variacion ultimas 24Hrs: <span>${CHANGEPCT24HOUR}%</span>`;

  UI.resultado.appendChild(precio);
  UI.resultado.appendChild(precioAlto);
  UI.resultado.appendChild(precioBajo);
  UI.resultado.appendChild(variacion);
}

export default mostrarCotizacion;
