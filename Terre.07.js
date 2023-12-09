const prompt = require("prompt-sync")(); //cette ligne permet d'autoriser prompt sur visual code

argument = prompt("Entrez un argument : ");
compteur = 0;

for (let i = 0; argument[i] !== undefined; i++) {
  compteur++;
}
console.log(
  "Le nombre de caractère dans " + argument + " " + "est de : " + compteur
);
