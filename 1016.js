const input = require("fs").readFileSync("./stdin", "utf8");
let lines = input.split("\n");

let carX = 60;
let carY = 90;

const distance = lines[0];

let relativeVelocity = (carY - carX) / 60;

let KmPerMinutes = Number(distance) / relativeVelocity;

console.log(KmPerMinutes + " minutos");

// Dois carros (X e Y) partem em uma mesma direção. O carro X sai com velocidade constante de 60 Km/h e o carro Y sai com velocidade constante de 90 Km/h.

// Em uma hora (60 minutos) o carro Y consegue se distanciar 30 quilômetros do carro X, ou seja, consegue se afastar um quilômetro a cada 2 minutos.

// Leia a distância (em Km) e calcule quanto tempo leva (em minutos) para o carro Y tomar essa distância do outro carro.

// 60 - 90 = 30 / 60 = 0,5 distance = 30 / relativeVelocity = 0,5 = 60
