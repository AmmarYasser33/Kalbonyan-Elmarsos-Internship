// LECTURE: Values and Variables
const country = "Egypt";
console.log(country);
const continent = "Africa";
console.log(continent);
let population = 100;
console.log(population);

/////////////////////////////////////
// LECTURE: Data Types
const isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

/////////////////////////////////////
// LECTURE: let, const and var
language = "Arabic";
// country = "Masr";  //Error

/////////////////////////////////////
// LECTURE: Basic Operators
console.log(population / 2);
population++;
console.log(population);
const finlandPopulation = 6;
console.log(population > finlandPopulation);
console.log(population < 33);
let description =
  country +
  " is in " +
  continent +
  ", and its " +
  population +
  " million people speak " +
  language;

/////////////////////////////////////
// LECTURE: Strings and Template Literals
description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;

/////////////////////////////////////
// LECTURE: if / else Statements
if (population > 33) {
  console.log("Egypt's population is above average");
} else {
  console.log(`Egypt's population is ${33 - population} million below average`);
}
population = 13;
if (population > 33) {
  console.log("Egypt's population is above average");
} else {
  console.log(`Egypt's population is ${33 - population} million below average`);
}
population = 130;
if (population > 33) {
  console.log("Egypt's population is above average");
} else {
  console.log(`Egypt's population is ${33 - population} million below average`);
}
population = 100;

/////////////////////////////////////
// LECTURE: Type Conversion and Coercion
"9" - "5"; // 4
"19" - "13" + "17"; // "617"
"19" - "13" + 17; // 23
"123" < 57; // false
5 + 6 + "4" + 9 - 4 - 2; //1143

/////////////////////////////////////
// LECTURE: Equality Operators
/*
const numNeighbours = prompt(
  "How many neighbour countries does your countryhave?"
);

if (numNeighbours === 1) console.log("Only 1 border!");
else if (numNeighbours > 1) console.log("More than 1 border");
else console.log("No borders");
// should use: Number(numNeighbours)
*/

/////////////////////////////////////
// LECTURE: Logical Operators
if (language === "English" && population < 50 && !isIsland)
  console.log(`You should live in ${country}`);
else console.log(`${country} does not meet your criteria :(`);

/////////////////////////////////////
// LECTURE: The switch Statement
switch (language) {
  case "chinese":
  case "mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "Arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
}

/////////////////////////////////////
// LECTURE: Ternary Operator
console.log(
  `${country}'s population is ${population > 33 ? "above" : "below"} average`
);
