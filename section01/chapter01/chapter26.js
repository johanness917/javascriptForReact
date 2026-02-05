// 1. Spread 연산자 
//객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할 

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [10, ...arr1, 20, 30];
let arr3 = arr1; // 얕은복사
let arr4 = [...arr1] // 깊은복사

console.log(arr4 === arr1);

// 2. Spread 연산자(객체) 사용해서 깊은복사
let obj1 = {
  a: 1,
  b: 2,
};

let obj2 = {
  a: obj1.a,
  b: obj1.b,
  c: 3,
  d: 4,
};

let obj3 = {
  ...obj1,
  c: 3,
  d: 4,
};
console.log(obj2);


// 3. Spread 연산자(함수매개변수) 구조분해할당, 스프레드 연산자 비교
function funcA([p1, p2, p3]) {
  console.log(p1 * 10, p2 * 10, p3 / 10);
}

const arr5 = [1, 2, 3]
funcA(arr5);

function funcB([p1, p2, p3]) {
  console.log(p1 * 10, p2 * 10, p3 / 10);
}

const arr6 = [1, 2, 3]
funcB(...arr6);

// 4. rest 매개변수 
// rest는 나머지 , 나머지 매개변수 
arr1 = [11, 12, 13];
function funcC(one, ...ds) {
  console.log(ds);      //[2, 3] 출력 
}
funcC(...arr7);


//주의: rest매개변수 뒤에는 추가로 다른 변수가 올수 없다. 
function funcB(one, ...ds, as) {  //as 추가로 올 수 없다. 
  console.log(ds);
}