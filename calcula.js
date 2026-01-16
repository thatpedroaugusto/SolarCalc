console.log("conectado com sucesso");

const form = document.getElementById("formSolar");
form.addEventListener("submit", function(event){
    event.preventDefault();

console.log("botao calcular clicado");

const estadoInput = document.getElementById("estado");
const estadoSigla = estadoInput.value.trim().toUpperCase();
const cidade = document.getElementById("cidade");
const inputValor = document.getElementById("gastoMensal");
const gastoMensal = Number(inputValor.value);

const resultadoSection = document.getElementById("resultado");
if(resultadoSection){
   resultadoSection.hidden = false;
   console.log("resultado apareceu");
}

const tarifaEstadual = {
AM: 0.852,
SP: 0.730,
RJ: 0.865

}

const tarifa = tarifaEstadual[estadoSigla];
//converte o gasto(em dinheiro) em kW/h
function calculadoraGasto(gastoMensal, tarifa){
 
    return Math.round(gastoMensal/tarifa);

}

const hspPorEstado = {
AM: 5.5,
SP: 5.4,
RJ: 5.1

}

const hsp = hspPorEstado[estadoSigla];

//precisa pegar as potencias de cada id e dar como parametro, e vai retornar a qnt pra cada pot

//calcula a quantidade de paineis necessarios para suprir o gasto de kw/h, seria interessante
function calculaQntP(potEspecifica){  
const perdas = 0.75;
valorkWh = calculadoraGasto(gastoMensal, tarifa);
const potNecessaria = valorkWh/(hsp*30*perdas);
let qntPaineil = potNecessaria/0.55 //potEspecifica; //a potencia total dividido por uma potencia individual de um painel de 550w
return Math.round(qntPaineil);
console.log(potNecessaria);

}

function calculaEconomia(gastoMensal, producao){


}
const temp = document.getElementById("qntPaineis");
temp.innerText = `Vai precisar de ${calculaQntP()} paineis solares`;
const economia = document.getElementById("economia");
economia.innerText = `voce vai ter uma economia de ${calculaEconomia(gastoMensal)}`;

let batata = 2;
function testeA(){
batata = batata + 1;
return batata;
}
console.log("valor do teste: " + testeA());
console.log("valor da batata: " + batata);
console.log(hsp);

});

