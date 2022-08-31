"use strict";

const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = function (ages) {
  const humanAges = ages
    .map((age, i) => (age = age <= 2 ? 2 * age : 16 + age * 4))
    .filter((age) => age >= 18);

  const average =
    humanAges.reduce((acc, cur) => acc + cur, 0) / humanAges.length;

  console.log(average);
};

calcAverageHumanAge(data1);
calcAverageHumanAge(data2);
