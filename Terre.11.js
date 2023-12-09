const prompt = require("prompt-sync")(); //cette ligne permet d'autoriser prompt sur visual code

let heure = prompt("Entrez une heure au format 24 :");
let minute = prompt("Entrez les minutes : ");

let tableau = [heure, "H", minute];

if (heure > 12) {
  tableau[3] = "pm";
  tableau[0] = heure - 12;
} else {
  tableau[3] = "am";
}

resultat = tableau.join(" ");
console.log(resultat);
