// 클래스속에 있는 멤버변수를 반복문을 이용해서 출력
const person = {
  name: "김동진",
  age: 25,
  tall: 179
};
//Object.keys
const personKeys = Object.keys(person);
// const personKeys = ['name', 'age', 'tall']
console.log(personKeys);

for (let index = 0; index < personKeys.length; index++) {
  const key = personKeys[index];
  console.log(`${key} = {person[key]}`);
}
//Object.values
const personValues = Object.values(person); //객체의 value값을 배열로가져온다. 
for (let i = 0; i < personValues.length; i++) {
  console.log(personValues[i]);
} 