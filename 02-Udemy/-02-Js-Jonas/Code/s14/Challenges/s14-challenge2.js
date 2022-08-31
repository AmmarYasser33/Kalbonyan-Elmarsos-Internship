"use strict";

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(this.speed);
  }

  brake() {
    this.speed -= 5;
    console.log(this.speed);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(s) {
    this.speed = s * 1.6;
  }
}

const c1 = new CarCl("ford", 120);

c1.accelerate();
c1.brake();
c1.accelerate();
c1.accelerate();
console.log(c1.speedUS);
c1.speedUS = 33;
console.log(c1);
