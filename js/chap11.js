
// function Person(name) {
//   this.name = name;
// }

// Person.prototype.sayHello = function() {
//   console.log(`Hello my name ${this.name}`);
// }

// const person = new Person('Kim');
// person.sayHello();

// console.log(person.name);

class Person {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log(`Hello my name ${this.name}`);
  }
}

const person = new Person('Kim');
person.sayHello();

console.log(person.name);

class Employee extends Person {
  constructor(name, jobTitle) {
    super(name);
    this.jobTitle = jobTitle;
  }

  introduce() {
    console.log(
      `
Hello, my name is ${this.name} 
and I am a ${this.jobTitle}.
      `);
  }
}

const emp = new Employee('Lee', 'freshman');
console.log(emp);
emp.introduce();


localStorage.setItem('name', 'kim soongon');

const name = localStorage.getItem('name');
console.log(name);

localStorage.removeItem('name');

localStorage.clear();