const prompt = require("prompt-sync")(); //cette ligne permet d'autoriser prompt sur visual code

number = prompt("Entrez un nombre : ");
function premier(number) {
  if (number <= 1) {
    return console.log("le nombre" + number + "n'est pas un chiffre premier");
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return console.log("le nombre n'est pas premier");
    }
  }
  return console.log("le nombre est premier");
}

let resultat = premier(number);
console.log(resultat);
