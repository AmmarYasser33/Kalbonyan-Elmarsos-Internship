"use strict";
/*
function fun(name) {
  console.log("Your name " + name);
}

const x = fun("Ammar");
// undefined
console.log(x); 
*/
/*
const yourAge = function (birthDate) {
  console.log(2022 - birthDate);
};
yourAge(2001);

// Arrow functions
const calcAge = (birthDay) => 2022 - birthDay;
console.log(calcAge(2001));

const yearsUntilRetirement = (birthYear) => {
  const age = 2022 - birthYear;
  const ret = 65 - age;
  return ret;
};
console.log(yearsUntilRetirement(2001));
*/
/*
// Basic Array Operations (Methods)
const arr = [22, 33, 44];
arr.push(55); //add in the end
console.log(arr);
arr.unshift(11); //add in the start
console.log(arr);
arr.pop(); //remove last and return it
console.log(arr);
arr.shift(); //remove first and return it
console.log(arr);
// [22, 33, 44]

console.log(arr.indexOf(33)); // 1
console.log(arr.includes(999)); // false
*/
/*
// Object
const Ammar = {
  firstName: "Ammar",
  lastName: "Yasser",
  birthYear: 2001,
  job: "student",
  friends: ["Abdo", "Ahmed", "Omar"],

  calcAge: function () {
    return 2022 - this.birthYear;
  },
};

const interestIn = prompt(
  "What do you want to know about Ammar? Choose: firstName, LastName, age, job or friends"
);
if (Ammar[interestIn]) {
  console.log(Ammar[interestIn]);
} else {
  console.log("Wrong request!");
}

// add propriety to object
Ammar.location = "Egypt";
Ammar["hobby"] = "Swimming";
console.log(Ammar);

console.log(Ammar.calcAge());
*/
/*
// Loops
const arr = [11, 22, 33, 44, 55];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

for (let i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i]);
}
console.log("--------------------");

let x = 1;
while (x <= 6) {
  console.log(x * 10);
  x++;
}
*/

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(dice);
  dice = Math.trunc(Math.random() * 6) + 1;
}
