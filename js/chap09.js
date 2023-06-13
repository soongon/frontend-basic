// 자바스크립트 함수

// 1. 함수 선언문
function addTwoNumbers(numOne, numTwo) {
  return numOne + numTwo;
}

// 2. 함수 표현식
const subTwoNumbers = function (numOne, numTwo) {
  return numOne + numTwo;
};

// 3. 화살표 함수
// 파라미터의 기본값 (참고: 파라미터 기본값은 함수선언문, 함수표현식 모두에 사용 가능)
const mulTwoNumbers = (numOne = 0, numTwo = 0) => numOne + numTwo;


// 함수의 파라미터
console.log(addTwoNumbers(3, 5));
console.log(mulTwoNumbers(3)); // 두번째 파라미터에 -> undefined 전달됨

// rest parameters
function sum(...numbers) {
  console.log(numbers);
}

sum(1,2,3,4,5,6,7);

// spread operator
function sum2(a, b, c) {
  return a + b + c;
}

const numbers = [1, 2, 3, 4, 5, 6];
console.log(sum2(...numbers));

// sample array
const favoriteColors = ['red', 'blue', 'violet', 'white', 'orange'];

// 배열의 원본을 변경하지 않는 연산
// map, filter, reduce 

// map
const uppered =  favoriteColors.map(color => color.toUpperCase());
console.log(uppered);
console.log(favoriteColors);

// filter
const filtered = favoriteColors.filter(color => color.length > 4);
console.log(filtered);

// reduce
// 두번째 파라미터로 초기값 설정
const total = favoriteColors.reduce((a, b) => a + b.length, 0);
console.log(total);