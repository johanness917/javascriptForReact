//1. 구조분해할당 (배열, 분해, 변수할당)
let arr = [1, 2];
let one = arr[0];
let two = arr[1];
let three = arr[2];

let [_one, _two, _three = 10, four = 4] = arr;
console.log(_one);
console.log(_two);
console.log(_three);
console.log(_four);

//2. 구조분해할당 (배열, 분해, 변수할당)
let person = {
  name: "홍길동",
  age: 27,
  hobby: "테니스",
};

let person3 = person;
console.log(person3 === person);

let {
  age: myAge,
  name: myName,
  bobby: myHobby,
  extra = "hello"
} = person;

let _myAge = person.age;
let _myName = person.name;

console.log(myAge, myName, myHobby, extra);

//3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법 
//각 멤버변수를 변수로 저장하고, 출력하고 싶다.
let printPerson = ({ name, age, hobby, extra = "hello" }) => {
  console.log(`name = ${name}`);
  console.log(`age = ${age}`);
  console.log(`hobby = ${bobby}`);
  console.log(`extra = ${extra}`);
}
printPerson(person);

const func = ({ name, age, hobby, extra }) => {
  console.log(name, age, hobby, extra);
};

func(person); 