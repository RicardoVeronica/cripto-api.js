/*
 * Consumir API de criptomonedas con JS
 * */
import imprimirCriptomonedas from "./functions/imprimirCriptomonedas";
import eventListeners from "./eventListeners";

window.onload = () => {
  imprimirCriptomonedas();
  eventListeners();
};
