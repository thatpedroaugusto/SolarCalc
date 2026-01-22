// Este módulo implementa os principais operações da calculadora.

const tarifasEstaduais = {
  AM: 0.852,
  SP: 0.730,
  RJ: 0.865,
};

const hspPorEstado = {
  AM: 5.5,
  SP: 5.4,
  RJ: 5.1,
};

// Converte o gasto (em dinheiro) em gasto energético em kW/h.
function calcularGastoKWH(gastoMensalReais, siglaEstadual){
  const tarifaEstadual = tarifasEstaduais[siglaEstadual];
  return Math.round(gastoMensalReais / tarifaEstadual);
}

// Precisa pegar as potencias de cada id e dar como parametro, e vai retornar
// a quantidade de painéis pra cada potência.
// Calcular a quantidade de paineis necessarios para suprir o gasto de kw/h, seria interessante.
// Interessante! Interessante! Vejo sim Lucas!
export function calcularNumPaineis(gastoMensalReais, siglaEstadual) {  
  const hsp = hspPorEstado[siglaEstadual];
  const perdas = 0.75;
  const valorkWh = calcularGastoKWH(gastoMensalReais, siglaEstadual);
  const potNecessaria = valorkWh / (hsp * 30 * perdas);
  //potEspecifica; //a potencia total dividido por uma potencia individual de um painel de 550w
  const numPaineis = Math.round(potNecessaria / 0.55);
  return numPaineis
}