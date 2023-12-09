const prompt = require("prompt-sync")(); //cette ligne permet d'autoriser prompt sur visual code

let argument = prompt("Entrez un argument à inverser: ");
let reverse = argument.split("");
let reverseString = "";

for (let i = reverse.length - 1; i >= 0; i--) {
  reverseString += reverse[i];
}
console.log(reverseString);
