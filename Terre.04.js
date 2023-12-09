const prompt = require("prompt-sync")(); //cette ligne permet d'autoriser prompt sur visual code

let number = prompt("Tapez un chiffre : ");
let entier = Math.floor(number);
if (entier % 2 === 0) {
  console.log("Ce chiffre est paire");
} else {
  console.log(entier + " " + "Ce chiffre est impaire");
}
