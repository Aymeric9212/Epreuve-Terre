const prompt = require("prompt-sync")(); //cette ligne permet d'autoriser prompt sur visual code

let heure = prompt("Entrez une heure au format 12 : ");
let minute = prompt("Entrez les minutes : ");
let moment = prompt("Entrez am ou pm : am : ").toLowerCase();

let tableau = [heure, "H", minute, moment];

if (moment === "pm") {
  tableau[0] = String((Number(heure) + 12) % 24);
}

let resultat = tableau.splice(0, 3).join(" ");
console.log(("il sera") + (" ") + resultat);
