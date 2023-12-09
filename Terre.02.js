const prompt = require("prompt-sync")(); //cette ligne permet d'autoriser prompt sur visual code

let stg = prompt("Entrez un argument : ");
let arg = stg.split(" ");

for (let a = 0; a < arg.length; a++) {
  console.log(arg[a]);
}
