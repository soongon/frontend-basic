// chap07

// array
const myArray = [1, 2, 3, 4, 5];
const favoriteColors = ['red', 'blue', 'white'];

// CRUD (create, read, update, delete)
myArray.push(6);
console.log(myArray);

favoriteColors.push('tan');
console.log(favoriteColors);

console.log(myArray[2]);
console.log(favoriteColors[0]);

delete myArray[3];
console.log(myArray);

// splice 메소드 사용
favoriteColors.splice(1, 1);
console.log(favoriteColors);

myArray[0] = 25;
console.log(myArray);


// object
const product = {
  id: 'p1',
  name: 'iphone',
  description: 'blah blah blah',
  price: 99.99,
  imageUrl: 'http://example.com/product1.jpg',
  stock: 20,
};

// CRUD
console.log(product);

product['id'] = 'p2';
console.log(product);

product['category'] = 'Electronics';
console.log(product);

console.log(product['name']);


// person
const person = {
  name: 'kim',
  age: 30,
  address: {
    city: 'seoul',
    street: 'seocho',
  },
  hobbies: ['music', 'reading'],
  sayHello: function () {
    return "hello";
  }
}

console.log(person);

const name = 'lee';
const age = 35;

const person2 = { name, age, };

console.log(person2);
