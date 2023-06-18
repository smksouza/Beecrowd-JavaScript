let input = require("fs").readFileSync("stdin", "utf8");
let lines = input.split("\n");

let infoItem1 = lines[0].split(" ");
let infoItem2 = lines[1].split(" ");

let qtnItem1 = Number(infoItem1[1]);
let priceItem1 = Number(infoItem1[2]);
let finishItem1 = priceItem1 * qtnItem1;

let qtnItem2 = Number(infoItem2[1]);
let priceItem2 = Number(infoItem2[2]);
let finishItem2 = priceItem2 * qtnItem2;

let finish = finishItem1 + finishItem2;

console.log("VALOR A PAGAR: R$"+finish.toFixed(2))