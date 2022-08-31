"use strict";

/*
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this!
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const p1 = new Person("Ammar", 2001);
const p2 = new Person("Omar", 2012);
// console.log(p1, p2);

// console.log(p1 instanceof Person);

//
Person.prototype.calcAge = function () {
  console.log(2022 - this.birthYear);
};
console.log(Person.prototype);

p1.calcAge();
p2.calcAge();

console.log(p1.__proto__);
console.log(Person.prototype.isPrototypeOf(p2));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.hisColor = "Blue";
console.log(p1.hisColor, p2.hisColor);

console.log(p1.hasOwnProperty("firstName"));
console.log(p1.hasOwnProperty("hisColor"));

//
const arr = [4, 6, 3, 6, 7, 4, 1];
console.log(arr.__proto__);
console.log(arr.__proto__.__proto__);
*/

/*
// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode

// const PersonCl = class {};
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype
  calcAge() {
    console.log(2022 - this.birthYear);
  }

  get age() {
    return 2022 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log("Hi there!");
  }
}

const ammar = new PersonCl("Ammar Yasser", 2001);
ammar.calcAge();
console.log(ammar.__proto__);

PersonCl.hey();
// ammar.hey();
*/

/*
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2022 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`I am ${this.firstName} and I study ${this.course}`);
};

const ammar = new Student("Ammar", 2001, "CS");
console.log(ammar);
ammar.introduce();
ammar.calcAge();

Student.prototype.constructor = Student;
*/

/*
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2022 - this.birthYear);
  }

  get age() {
    return 2022 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log("Hi there!");
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`I am ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(`I'm ${2022 - this.birthYear} 🔺🔺`);
  }
}

const s1 = new StudentCl("Omar Yasser", 2007, "CS");
console.log(s1);
s1.calcAge();
s1.introduce();
*/

/*
const PersonProto = {
  calcAge() {
    console.log(2022 - this.birthYear);
  },

  init(name, birthYear) {
    this.name = name;
    this.birthYear = birthYear;
  },
};

const ammar = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (name, birthYear, course) {
  PersonProto.init.call(this, name, birthYear);
  this.course = course;
};

const s1 = Object.create(StudentProto);
s1.init("Ammar", 2001, "CS");

console.log(PersonProto);
console.log(StudentProto);
console.log(ammar);
console.log(s1);
s1.calcAge();
*/

// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods
// (there is also the static version)

class Account {
  // 1) Public fields (instances)
  locale = navigator.language;

  // 2) Private fields (instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    // Protected property
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // 3) Public methods

  // Public interface
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      // if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this;
    }
  }

  static helper() {
    console.log("Helper");
  }

  // 4) Private methods
  #approveLoan(val) {
    // _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account("Jonas", "EUR", 1111);

// acc1._movements.push(250);
// acc1._movements.push(-140);
// acc1.approveLoan(1000);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1.getMovements());
console.log(acc1);
Account.helper();

// console.log(acc1.#movements);
// console.log(acc1.#pin);
// console.log(acc1.#approveLoan(100));

// Chaining
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());
