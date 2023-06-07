var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let R = Number(lines[0]);
let pi = 3.14159;

let sphereVolume = (4/3) * pi * Math.pow(R, 3);

console.log("VOLUME = " + sphereVolume.toFixed(3))