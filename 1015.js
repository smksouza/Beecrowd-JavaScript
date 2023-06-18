const input = require("fs").readFileSync("stdin", "utf8");
const lines = input.split("\n");

const [x1, y1] = lines[0].split(" ");
const [x2, y2] = lines[1].split(" ");

//const distanceTwoPoints = Math.sqrt(((x2 - x1) ** 2 + (y2 - y1) ** 2));
const distanceTwoPoints = Math.sqrt((Math.pow((x2 - x1),2) + Math.pow((y2 - y1),2)));

console.log(distanceTwoPoints.toFixed(4));
