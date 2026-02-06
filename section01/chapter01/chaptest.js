//1. forEach
const fruits = [10, 20, 30];
fruits.forEach(score => console.log(score));

//2. map
const numbers = [1, 2, 3];
let _newArr = array.map((value) => value * 10);
console.log(_newArr);
//3. filter
const nums = [5, 12, 8, 130, 44];
const filtered = nums.filter(num => num > 10);
console.log(filtered);

//4. find, findIndex
const person = [{ name: 'Lee' }, { name: 'Kim' }, { name: 'Park' }];
const found = person.find(user => user.name === 'Kim');
const index = person.findIndex(user => user.name === 'Kim');
console.log(found, index);

//5. slice(start, end)
const alphabet = ['a', 'b', 'c', 'd', 'e'];
const sliced = alphabet.slice(1, 3);
console.log(sliced);

//6. concat
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = arr1.concat(arr2);
console.log(combined);

//7. sort
const scores = [40, 100, 1, 5];
scores.sort((a, b) => a - b);
console.log(scores);

//8. join, split
const date = "2024.05.20";
const parts = date.split(".");
console.log(parts);
const joined = parts.join("-");
console.log(joined);

//9. Object.keys(obj) Object.values(obj)
const perso2n = { name: '홍길동', age: 25 };
const keys = Object.keys(person2);
const values = Object.values(person2);

//10. for of
const values2 = [10, 20, 30];
let total = 0;
for (const val of values2) {
  total += val;
}
console.log(total);

//11. for in
const person3 = { name: '홍길동', age: 30 };
for (const key in person3) {
  console.log(`${key}: ${person3[key]}`);
}