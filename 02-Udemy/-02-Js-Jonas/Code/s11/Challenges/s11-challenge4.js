"use strict";

const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },

  { weight: 8, curFood: 200, owners: ["Matilda"] },

  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },

  { weight: 32, curFood: 340, owners: ["Michael"] },
];

// dogs.forEach((dog, i) => {
//   const recommendedFood = dog.weight ** 0.75 * 28;

//   if (
//     dog.curFood < recommendedFood * 1.1 &&
//     dog.curFood > recommendedFood * 0.9
//   ) {
//     console.log(`Dog ${i + 1}: Good`);
//   } else {
//     console.log(`Dog ${i + 1}: Bad`);
//   }
// });

dogs.forEach((dog) => (dog.recoFood = Math.trunc(dog.weight ** 0.75 * 28)));
console.log(dogs);

const SarahDog = dogs.find((dog) => dog.owners.includes("Sarah"));
if (SarahDog.curFood > SarahDog.recoFood * 1.1) {
  console.log(`Sarah's Dog eat too much`);
} else if (SarahDog.curFood < SarahDog.recoFood * 0.9) {
  console.log(`Sarah's Dog eat too little`);
} else {
  console.log(`Sarah's Dog eat well`);
}

const ownersEatTooMuch = [];
const ownersEatTooLittle = [];
dogs.forEach((dog) => {
  if (dog.curFood > dog.recoFood) {
    ownersEatTooMuch.push(...dog.owners);
  } else if (dog.curFood < dog.recoFood) {
    ownersEatTooLittle.push(...dog.owners);
  }
});
console.log(ownersEatTooMuch, ownersEatTooLittle);

console.log(ownersEatTooMuch.join(" and ") + "'s dogs eat too much");
console.log(ownersEatTooLittle.join(" and ") + "'s dogs eat too little");

console.log(dogs.some((dog) => dog.curFood === dog.recoFood));

const isEatingOK = function (dog) {
  return dog.curFood < dog.recoFood * 1.1 && dog.curFood > dog.recoFood * 0.9;
};

console.log(dogs.some((dog) => isEatingOK(dog)));

console.log(dogs.filter((dog) => isEatingOK(dog)));

const dogsCopy = dogs.slice();
dogsCopy.sort((a, b) => a.recoFood - b.recoFood);
console.log(dogsCopy);
