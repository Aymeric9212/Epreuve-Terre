const prompt = require("prompt-sync")(); //cette ligne permet d'autoriser prompt sur visual code

dividende = prompt(" Entrez un nombre comme dividende : ");
diviseur = prompt(" Entrez un nombre comme diviseur : ");
quotient = dividende / diviseur;
quotient = Math.floor(quotient);
reste = dividende % diviseur;
console.log("Le quotient est de : " + " " + quotient);
console.log("Le reste est de :" + " " + reste);
