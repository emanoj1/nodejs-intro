require('dotenv').config();

console.log(process.env.ENVIRONMENT_MESSAGE);

console.log("Terminal app is running!");

const pokemon = require('pokemon');

let randomPokemon = pokemon.random()
console.log(`Today Pokemon is ${randomPokemon}`)

console.log("Have fun! Enjoy!");