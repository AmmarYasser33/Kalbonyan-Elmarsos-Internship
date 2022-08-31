"use strict";

/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millennial = true;
      const firstName = "Steven";
      output = "NEW OUTPUT!";

      const str = `Oh, and you're a millennial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    console.log(millennial);
    console.log(output);
  }
  printAge();

  return age;
}
*/
/*
const name = "Ammar";
if (name === "Ammar") {
  // Error
  console.log(`Ammar is a ${job}`);
  // anyyyyyyyyyyyyyy
  const x = 88;
  const job = "Engineer";
}
*/

/*
console.log(me);
// console.log(job);
// console.log(year);

var me = "Jonas";
let job = "teacher";
const year = 1991;

console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addArrow);
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

if (!numProducts) deleteShoppingCart();
var numProducts = 10;

function deleteShoppingCart() {
  console.log("All products deleted!");
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x); //true
console.log(y === window.y); //false
console.log(z === window.z); // false
*/

/*
console.log(this);

const calcAge = function (birthYear) {
  console.log(2022 - birthYear);
  console.log(this);
};
calcAge(2001);

const calcAgeArrow = (birthYear) => {
  console.log(2022 - birthYear);
  console.log(this);
};
calcAgeArrow(2001);

const ammar = {
  year: 2001,
  calcAge: function () {
    console.log(this);
    console.log(2022 - this.year);
  },
};
ammar.calcAge();

const jonas = {
  year: 2017,
};

jonas.calcAge = ammar.calcAge;
jonas.calcAge();

const f = ammar.calcAge;
console.log(f);
// f();
*/

/*
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: "Jonas",
  age: 30,
};
const friend = me;
friend.age = 27;
console.log("Friend:", friend);
console.log("Me", me);
*/

const jessica2 = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
  family: ["Alice", "Bob"],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = "Davis";

jessicaCopy.family.push("Mary");
jessicaCopy.family.push("John");

console.log("Before marriage:", jessica2);
console.log("After marriage: ", jessicaCopy);
