var input = require("fs").readFileSync("stdin", "utf8");
var [A, B, C] = input.split(" ");
let pi = 3.14159;

let triangleArea = (A * C) / 2;
let circleArea = pi * Math.pow(C, 2);
let trapeziumArea = ((Number(A) + Number(B)) * C) / 2.0;
let squareArea = B * B;
let rectangleArea = A * B;

console.log("TRIANGULO: " + triangleArea.toFixed(3));
console.log("CIRCULO: " + circleArea.toFixed(3));
console.log("TRAPEZIO: " + trapeziumArea.toFixed(3));
console.log("QUADRADO: " + squareArea.toFixed(3));
console.log("RETANGULO: " + rectangleArea.toFixed(3));
