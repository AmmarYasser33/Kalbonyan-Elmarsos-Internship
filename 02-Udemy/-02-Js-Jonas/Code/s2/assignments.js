"use strict";

/////////////////////////////////////
// LECTURE: Functions
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital is ${capitalCity}`;
}
const finDes = describeCountry("Finland", 6, "Helsinki");
console.log(finDes);
const egyDes = describeCountry("Egypt", 100, "Cairo");
console.log(egyDes);

/////////////////////////////////////
// LECTURE: Function Declarations vs. Expressions
function percentageOfWorld1(population) {
  return ((population / 7900) * 100).toFixed(2);
}
const chnPercentage = percentageOfWorld1(1441);
const egyPercentage = percentageOfWorld1(100);
console.log(chnPercentage);
console.log(egyPercentage);

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};
const chnPercentage2 = percentageOfWorld2(1441);
const egyPercentage2 = percentageOfWorld2(100);
console.log(chnPercentage2);
console.log(egyPercentage2);

/////////////////////////////////////
// LECTURE: Arrow Functions
const percentageOfWorld3 = (population) => (population / 7900) * 100;
const chnPercentage3 = percentageOfWorld2(1441);
console.log(chnPercentage3);

/////////////////////////////////////
// LECTURE:  Functions Calling Other Functions
function describePopulation(country, population) {
  const str = `${country} has ${population} million people, which is about ${percentageOfWorld1(
    population
  )}% of the world`;
  return str;
}
console.log(describePopulation("China", 1441));
console.log(describePopulation("Egypt", 110));

/////////////////////////////////////
// LECTURE: Introduction to Arrays
const populationss = [1441, 110, 10, 200];
console.log(populationss.length === 4);

const percentages = [
  percentageOfWorld1(populationss[0]),
  percentageOfWorld1(populationss[1]),
  percentageOfWorld1(populationss[2]),
  percentageOfWorld1(populationss[3]),
];
console.log(percentages);

/////////////////////////////////////
// LECTURE:  Basic Array Operations
const neighbours = ["Sudan", "Libya"];
neighbours.push("Utopia");
neighbours.pop();

if (!neighbours.includes("Germany"))
  console.log("Probably not a central European country :D");

neighbours[neighbours.indexOf("Sudan")] = "Republic of Sudan";
console.log(neighbours);

/////////////////////////////////////
// LECTURE: Introduction to Objects
let myCountry = {
  country: "Egypt",
  capital: "Cairo",
  language: "Arabic",
  population: 110,
  neighbours: ["Sudan", "Libya"],
};

/////////////////////////////////////
// LECTURE: Dot vs. Bracket Notation
console.log(
  `${myCountry.country} has ${myCountry.population} million
  ${myCountry.language}-speaking people,
  ${myCountry.neighbours.length} neighbouring countries and
  a capital called ${myCountry.capital}.`
);
myCountry.population += 2;
console.log(myCountry.population);
myCountry["population"] -= 2;
console.log(myCountry.population);

/////////////////////////////////////
// LECTURE: Object Methods
myCountry = {
  country: "Egypt",
  capital: "Cairo",
  language: "Arabic",
  population: 110,
  neighbours: ["Sudan", "Libya"],
  describe: function () {
    console.log(
      `${this.country} has ${this.population} million
  ${this.language}-speaking people,
  ${this.neighbours.length} neighbouring countries and a
  capital called ${this.capital}.`
    );
  },
  checkIsland: function () {
    this.isIsland = this.neighbours.length === 0 ? true : false;
  },
};
myCountry.describe();
myCountry.checkIsland();
console.log(myCountry);

/////////////////////////////////////
// LECTURE: Iteration: The for Loop
for (let voter = 1; voter <= 50; voter++)
  console.log(`Voter number ${voter} is currently voting`);

/////////////////////////////////////
// LECTURE: Looping Arrays, Breaking and Continuing
const populations = [10, 1441, 332, 83];
const percentages2 = [];
for (let i = 0; i < populations.length; i++) {
  const per = percentageOfWorld1(populations[i]);
  percentages2.push(per);
}
console.log(percentages2);

/////////////////////////////////////
// LECTURE: Looping Backwards and Loops in Loops
const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];
for (let i = 0; i < listOfNeighbours.length; i++)
  for (let y = 0; y < listOfNeighbours[i].length; y++)
    console.log(`Neighbour: ${listOfNeighbours[i][y]}`);

/////////////////////////////////////
// LECTURE: The while Loop
const percentages3 = [];
let i = 0;
while (i < populations.length) {
  const per = percentageOfWorld1(populations[i]);
  percentages3.push(per);
  i++;
}
console.log(percentages3);
