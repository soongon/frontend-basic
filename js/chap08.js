// if 문과 for 문

const age = 15;

if (age > 20) {
  console.log('성인이시군요.');
} else {
  console.log('아직 어리시군요');
}

if (age > 30) {
  console.log('나이가 많으시군요');
} else if (age > 20) {
  console.log('20 대 이시군요');
} else if (age > 10) {
  console.log('10대 이시군요');
} else {
  console.log('그럼 뭐죠?');
}

// 3항 연산자
const result = (age > 20) ? '성인' : '미성년자';
console.log(result);

// for 문
//1. 특정 횟수를 반복..
for (i = 0; i < 10; i++) {
  console.log(i);
}

// collection .. array / object

const hobbies = ['reading', 'music', 'tennis'];

for (hobby of hobbies) {
  console.log(hobby);
}

const person = {
  name: 'choi',
  age: 30,
  city: 'pusan'
}

for (key in person) {
  console.log(person[key]);
}

for ([key, value] of Object.entries(person)) {
  console.log(`Key: ${key}  value : ${value}`);
}