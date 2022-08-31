"use strict";

const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];

const checkDogs = function (arr1, arr2) {
  const arrJulia = arr1.slice();
  arrJulia.splice(0, 1);
  arrJulia.splice(-2);

  const bothArr = [...arrJulia, ...arr2];

  bothArr.forEach((ele, i) => {
    if (ele >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${ele} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy 🐶`);
    }
  });
};

checkDogs(dogsJulia, dogsKate);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
