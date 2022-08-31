"use strict";

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.speed);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.speed);
};

const c1 = new Car("BMW", 120);
const c2 = new Car("Mercedes", 95);

c2.accelerate();
c2.accelerate();
c2.accelerate();
c2.brake();
