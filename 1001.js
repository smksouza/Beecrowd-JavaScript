var input = require("fs").readFileSync("stdin", "utf8");

var linhas = input.split("\n");

let A = Number(linhas[0]);
let B = Number(linhas[1]);

let soma = A + B;

console.log(soma);

// const A = lines[0];
// const B = lines[1];

// const X = Number(A) + Number(B);

// console.log("X = " + X);
