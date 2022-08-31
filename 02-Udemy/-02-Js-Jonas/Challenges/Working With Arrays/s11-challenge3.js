"use strict";

const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = (ages) => {
  const average = ages
    .map((age, i) => (age = age <= 2 ? 2 * age : 16 + age * 4))
    .filter((age) => age >= 18)
    .reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

  console.log(average);
};

calcAverageHumanAge(data1);
calcAverageHumanAge(data2);
