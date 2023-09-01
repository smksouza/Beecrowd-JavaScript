const input = require("fs").readFileSync("./stdin", "Utf8");
const lines = input.split("\n");

const kmPerLite = 12;
let VacationTime = Number(lines[0]);
let kmPerHours = Number(lines[1]);
let kmTotal = (kmPerHours * VacationTime) / kmPerLite;

console.log(kmTotal.toFixed(3));

{
  /* Joaozinho quer calcular e mostrar a quantidade de litros de combustível gastos
  em uma viagem, ao utilizar um automóvel que faz 12 KM/L. Para isso, ele
  gostaria que você o auxiliasse através de um simples programa. Para efetuar o
  cálculo, deve-se fornecer o tempo gasto na viagem (em horas) e a velocidade
  média durante a mesma (em km/h). Assim, pode-se obter distância percorrida e,
  em seguida, calcular quantos litros seriam necessários. Mostre o valor com 3
  casas decimais após o ponto. 
  
  Saída
  Imprima a quantidade de litros necessária para realizar a viagem, com três dígitos após o ponto decimal
  */
}
