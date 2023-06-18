var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let kmTotal = Number(lines[0]);
let gasoline = Number(lines[1]);

let consumPerKm = (kmTotal / gasoline);

console.log(`${consumPerKm.toFixed(3)} km/l`);