const prompt = require("prompt-sync")(); //cette ligne permet d'autoriser prompt sur visual code

let number = prompt("Entrez un nombre : ");
let exposant = prompt("Entrez l'exposant : ");

resultat = number ** exposant;
console.log("Le résultat de l'opération suivante est :" + resultat);
