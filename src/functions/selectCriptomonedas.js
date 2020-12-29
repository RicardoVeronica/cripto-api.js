import * as UI from "../selectors";

function selectCriptomonedas(criptomonedas) {
  // Itera cada una de las criptomonedas y crea las options de elige criptomoneda
  criptomonedas.forEach((criptomoneda) => {
    const { FullName, Name } = criptomoneda.CoinInfo;

    const option = document.createElement("option");
    option.value = Name;
    option.textContent = FullName;

    UI.criptomonedasSelect.appendChild(option);
  });
}

export default selectCriptomonedas;
