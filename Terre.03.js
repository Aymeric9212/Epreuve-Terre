const prompt = require("prompt-sync")(); //cette ligne permet d'autoriser prompt sur visual code

let lettre = prompt("Entrez une lettre de l'alphabet en minuscule: ");
lettre = lettre.toLowerCase();

const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

if (lettre >= "a" && lettre <= "z") {
  const index = alphabet.indexOf(lettre);
  for (let i = index; i < alphabet.length; i++) {
    console.log(alphabet[i]);
  }
} else {
  console.log("Ce n'est pas une lettre.");
}
