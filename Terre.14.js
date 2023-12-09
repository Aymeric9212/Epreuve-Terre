const prompt = require("prompt-sync")(); //cette ligne permet d'autoriser prompt sur visual code

let n1 = prompt("saisissez le premier chiffre : ");
let n2 = prompt("saisissez le deuxieme chiffre : ");
let n3 = prompt("saisissez le troisieme chiffre : ");

let tableau = [n1, n2, n3];
if (tableau[0] < tableau[1] && tableau[1] < tableau[2]) {
  console.log("Les éléments sont triès");
} else {
  console.log("Les éléments ne sont pas triès");
}
