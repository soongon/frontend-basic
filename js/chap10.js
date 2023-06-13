// 펼침 연산자, spread 연산자

const arr1 = [1, 2, 3];
const obj1 = { a: 1, b: 2};

console.log([...arr1, 4, 5, 6]);

console.log({ ...obj1, c: 3, d: 4 });

console.log({ ...obj1, a: 3, d: 4 }); // overriding

// 객체 복사 (얕은 복사, Shallow copy)
const copyArr1 = [...arr1];
console.log(copyArr1);

const copyObj1 = {...obj1};
console.log(copyObj1);

// 참고 : lodash 의 딥카피 함수를 사용해서 딥카피 수행..

const str = 'Hello';
const chars = [...str];
console.log(chars);


// 구조분해, Destructuring
// 배열 구조분해
const arr = [1, 2, 3, 4, 5];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
const [a, b, c, d, e, f] = arr;
console.log(a, b, c, d, e, f);

const [aa, bb, ...rest] = arr;
console.log(aa, bb);
console.log(rest);

const [aaa, , ccc] = arr;
console.log(aaa, ccc);



// 객체 구조분해
const obj = { aaaa: 1, bbbb: 2, cccc: 3 };

const {aaaa, cccc} = obj;
console.log(aaaa, cccc);

// 함수 파라미터 구조분해
function print({aaaa, bbbb, cccc}) {
  console.log(aaaa, bbbb, cccc, 'from obj');
}

print(obj);