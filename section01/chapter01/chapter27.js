//1. 사용자 정의 객체
let obj1 = { name: "홍길동", age: 30 }

let obj2 = { ...obj1 };
obj2.hobby = "테니스";

// let obj2 = obj1;

console.log(obj2);
console.log(JSON.stringify(obj1) === JSON.stringify(obj2));


