// var generateName = require("sillyname");

import generateName from "sillyname";
var sillyName = generateName();

console.log(`Name is ${sillyName}.`);

import generateSuperName from "superheroes";
const superHeroName = generateSuperName.random();

console.log(`I am ${superHeroName}.`);
