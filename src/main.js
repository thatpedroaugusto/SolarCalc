import { calcularNumPaineis } from "./utilidades.js";


const form = document.getElementById("formSolar");
form.addEventListener("submit", function(event) {
  event.preventDefault();

  const estadoInput = document.getElementById("estado");
  const siglaEstadual = estadoInput.value.trim().toUpperCase();
  const cidade = document.getElementById("cidade");
  const inputValor = document.getElementById("gastoMensal");
  const gastoMensal = Number(inputValor.value);

  const resultadoSection = document.getElementById("resultado");
  if(resultadoSection){
    resultadoSection.hidden = false;
    console.log("resultado apareceu");
  }

  const temp = document.getElementById("qntPaineis");
  const numPaineis = calcularNumPaineis(gastoMensal, siglaEstadual)
  temp.innerText = `Vai precisar de ${numPaineis} paineis solares`;
  // const economia = document.getElementById("economia");
  // economia.innerText = `voce vai ter uma economia de ${calculaEconomia(gastoMensal)}`;
});

