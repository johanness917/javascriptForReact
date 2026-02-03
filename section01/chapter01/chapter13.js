//콜백함수의 활용 
function repeat(count, callback) {
  for (let idx = 0; idx <= count; idx++) {
    callback(idx);
  }
}
//화살표함수
repeat(5, (idx) => { console.log(idx); });
repeat(5, (idx) => { console.log(idx * 2); });
repeat(5, (idx) => { console.log(idx * 3); });

console.log(indefined * 10);

//콜백함수적용 함수선언, 함수표현, 화살표함수
//함수선언문
function repeat(count, callback) {
  for (let index = 0; index < count; index++) {
    //콜백함수를 진행한다
    callback(index);
  }
}

//함수표현식
let funcA = function (index) {
  console.log(index);
}
//함수표현식
let funcB = function (index) {
  console.log(index * 10);
}

//함수표현식
let funcC = function (index) {
  console.log(index * 10 + 5);
}

//let callback = funcA;

repeat(5, funcB);

//callback(10);