// const markHeight = 1.69;
// const johnHeight = 1.95;
// const markMass = 78;
// const johnMass = 92;

const markHeight = 1.88;
const johnHeight = 1.76;
const markMass = 95;
const johnMass = 85;

const markBMI = markMass / (markHeight * markHeight);
const johnBMI = johnMass / (johnHeight * johnHeight);

if (markBMI > johnBMI) {
  // console.log("Mark's BMI is higher than John's!");
  console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else {
  // console.log("John's BMI is higher than Mark's!");
  console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
}
