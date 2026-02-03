//함수선언식
function namefunc(name) {
  console.log(name);
}

namefunc("병합null");
let namefunc2 = namefunc;
namefunc2("삼항연산자");
console.log(typeof namefunc2);

//함수 표현식
let nameFunc = function(name) {
  console.log(name);
}

nameFunc("함수표현식");