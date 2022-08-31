// BMI = mass / (height * height)
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
console.log(markBMI, johnBMI);

const markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);
