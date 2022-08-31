// BMI = mass / (height * height)

const Mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
  },
};
const John = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
  },
};
Mark.calcBMI();
John.calcBMI();

if (Mark.BMI > John.BMI) {
  console.log(
    `${Mark.fullName}'s BMI (${Mark.BMI}) is higher than ${John.fullName}'s (${John.BMI})`
  );
} else if (Mark.BMI < John.BMI) {
  console.log(
    `${John.fullName}'s BMI (${John.BMI}) is higher than ${Mark.fullName}'s (${Mark.BMI})`
  );
} else {
  console.log("BMI = BMI");
}
