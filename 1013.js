var input = require("fs").readFileSync("stdin", "utf8");
const [A, B, C] = input.split(" ").map(item => Number(item));

const maiorAB = (A + B + Math.abs(A - B)) / 2 ;
const maiorXC = (C + maiorAB + Math.abs(C - maiorAB)) /2 ;

console.log(maiorXC + " eh oo maior")

