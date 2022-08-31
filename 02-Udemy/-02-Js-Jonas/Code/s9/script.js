"use strict";

/*
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
};

const arr = [22, 33, 44];
const [x, y, z] = arr;
console.log(x, y, z);

let a = "ammar";
let b = "belal";
// Switching var.
[b, a] = [a, b];
console.log(a, b);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/

// Destructuring Objects
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

/*
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// take it with my var.
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// and set default val.
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

let a = 111;
let b = 999;
const obj = { a: 6, b: 7, c: 3 };
({ a, b } = obj);
console.log(a, b);

// The Spread Operator (...)
const arr = [2, 3, 4];
const newArr = [...arr, 5, 6];
console.log(newArr);
console.log(...newArr);

function logNames(n1, n2, n3) {
  console.log(`That's our awesome names. Here ${n1}, ${n2} and ${n3}`);
}

const nnn = ["mero", "mora", "3mora"];
logNames(...nnn);

//
const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const [n0, n1, ...otherNums] = nums;
console.log(otherNums);
//
function add(...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];

  console.log(sum);
}
add(3, 4, 5);
add(0, 3, 77, 4, 7, 3, 8, 4, 6, 9, 4);
*/

/*
false && console.log(555555555);

const numbers = [22, 33, 44, 55, 69666, 77, 88];
for (const num of numbers) console.log(num);
*/

/*
// Strings
const airline = "TAP Air Portugal";
const plane = "A320";

console.log(airline.indexOf("r"));
console.log(airline.indexOf("Portugal"));

console.log(airline.slice(4)); //Air Portugal
console.log(airline.slice(4, 7)); //Air

console.log(airline.slice(-3)); //gal

const name = "amMaR";
const nameLower = name.toLowerCase();
const nameCorrect = nameLower[0].toUpperCase() + nameLower.slice(1);
console.log(nameCorrect);

const email = "hello@ammar.io";
const loginEmail = "   Hello@Ammar.Io  \n";

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

const priceGB = "288,34€";
const priceUs = priceGB.replace("€", "$").replace(",", ".");
console.log(priceUs);

const t1 = "aa-ZZZZZZ";
const t2 = t1.replace("Z", "a");
const t3 = t1.replaceAll("Z", "a");

console.log(t2, t3);
//
//
console.log("a+nvx+lsnbv+the".split("+"));
const [firstName, lastName] = "Ammar Yasser".split(" ");
const newName = ["Eng.", firstName, lastName].join(" ");
console.log(newName);

console.log("love u...".repeat(20));
*/

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

const getCode = (str) => str.slice(0, 3).toUpperCase();

for (const flight of flights.split("+")) {
  const [type, from, to, time] = flight.split(";");
  const output = `${type.startsWith("_Delayed") ? "🔴" : ""}${type.replaceAll(
    "_",
    " "
  )} ${getCode(from)} ${getCode(to)} (${time.replace(":", "h")})`.padStart(36);
  console.log(output);
}
