const prompt = require("prompt-sync")(); //cette ligne permet d'autoriser prompt sur visual code

let number = prompt("Entrez le nombre de la racine a calculer : ");
function racineCarree(number) {
  if (number < 0) {
    return console.log("Le nombre n'est pas positif");
  }
  let approximation = number / 2;
  for (let i = 0; i < 10; i++)
    approximation = 0.5 * (approximation + number / approximation); // Méthode Newton pour calculer une racine carrée
  return approximation;
}

let resultat = racineCarree(number);
console.log("La racine carrée de " + number + " " + "est de : " + resultat);
