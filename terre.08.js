const prompt = require("prompt-sync")(); //cette ligne permet d'autoriser prompt sur visual code

let number = prompt("Entrez un nombre : ");
let exposant = prompt("Entrez l'exposant :");
let resultat = 1;

for (let i = 0; i < exposant; i++) {
  resultat *= number;
}
console.log(
  "Le résultat de " +
    number +
    " " +
    "exposant de " +
    exposant +
    " est : " +
    resultat
);
