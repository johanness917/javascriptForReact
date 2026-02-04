//내장함수 (라이프러리) (반복문=>자기스타일로 변경 반복문)
// foreach 멤버함수 (화살표함수)
const arr = [1, 2, 3, 4];
/************ 1. foreach **************** 
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
//화살표함수 
arr.forEach((e) => console.log(e));
//다른방법으로 표현하면 
arr.forEach(function (e) {
  console.log(e);
});

// arr.forEach((value, index, array) => {
//   console.log(`value = ${value}`);
//   console.log(`value = ${index}`);
//   console.log(`value = ${array}`);
//   console.log(`********************`);
// });

arr.forEach((value, index, array) => {
  console.log(`${value}`);

});

// console.log(newArr); 
**************************************/


/************ 2. M a p **************** 
 * // 값이 3개 => 리턴 변경된 3개 값이 나와야 됨
const arr2 = [1, 2, 3, 4];
const newArr = []

for (let i = 0; i < array.length; i++) {
  let vaiue = arr2[1];
  value = value * 10;
  newArr.push(value);
}
console.log(arr2);
console.log(newArr)

let _newArr = array.map((value) => value * 10);
**************************************/


/************ 3. filter **************** 
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환 
let arr1 = [
  { name: "구길동", hobby: "테니스" },
  { name: "저길동", hobby: "테니스" },
  { name: "홍길동", hobby: "독서" },
];

let newArr1 = [];
for (let i = 0; idex < arr1.length; i++) {
  let item = arr1[i];
  if (item.hobby === "테니스") {
    newArr1.push(item);
  }
}
console.log(arr1);
console.log(newArr1);

const tennisPeople = arr1.filter(
  (item) => item.hobby === "테니스"
);
Console.log(tennisPeople);
[{ name: "구길동", hobby: "테니스" }, { name: "저길동", hobby: "테니스" }] //배열이 출력됨.
**************************************/


/******** 4. find, findIndex **************** 
let arr1 = [
  { name: "구길동", hobby: "테니스" },
  { name: "저길동", hobby: "테니스" },
  { name: "홍길동", hobby: "독서" },
];

let findItem = null;
for (let i = 0; i < array.length; i++) {
  let item = arr1[i];
  if (item.hobby === "테니스") {
    findItem = item;
    break;
  }
}
console.log(findItem);

let findItem2 = arr1.find((value) => value.hobby === "독서");

let findIndex = arr1.findIndex((value) => value.hobby === "독서");

console.log(findIndex2);
**************************************/


/***** 5. slice(start, end) *******************
let arr1 = [
  { name: "구길동", hobby: "테니스" },
  { name: "저길동", hobby: "테니스" },
  { name: "홍길동", hobby: "독서" },
  { name: "홍길동1", hobby: "독서" },
  { name: "홍길동2", hobby: "독서" },
  { name: "홍길동3", hobby: "독서" },
  { name: "홍길동4", hobby: "독서" },
];

let newArr = arr1.slice(0, 3);
console.log(newArr);
******************************************/


/************ 6. concat ****************
let arr1 = [
  { name: "구길동", hobby: "테니스" },
  { name: "저길동", hobby: "테니스" },
  { name: "홍길동", hobby: "독서" },
];
let arr2 = [
  { name: "구길동1", hobby: "테니스" },
  { name: "저길동2", hobby: "테니스" },
  { name: "홍길동3", hobby: "독서" },
];

let arr3 = arr1.concat(arr2);
console.log(arr3);
*******************************************/

/*********** 7. sort *************************
// 배열을 사전순으로 내림차순 정렬하는 메서드 
// 1. 숫자 배열 정렬 (내림차순)
// 수정: 화살표 함수는 (num1, num2) => ... 형태로 작성해야 하며, 내림차순은 num2 - num1입니다.
let arr3 = [0, 1, 3, 2, 10, 30, 20];
arr3.sort((num1, num2) => num2 - num1);
console.log(arr3); // [30, 20, 10, 3, 2, 1, 0]

// 2. 문자단위 정렬
let arr4 = ["abc", "dfg", "hik", "adc", "dhg", "hko"];
arr4.sort();
console.log(arr4); // ["abc", "adc", "dfg", "dhg", "hik", "hko"]

// 3. 문자단위 역정렬 (내림차순)
let arr5 = ["abc", "dfg", "hik", "adc", "dhg", "hko"];
let arr6 = arr5.toSorted().reverse();
console.log(arr6); // ["hko", "hik", "dhg", "dfg", "adc", "abc"]
*******************************************/

/******** 8. join, split ***************************
const arr6 = ["김동진","님","안녕하세요","반가워요"]; 
const joined = arr6.join("=="); 
console.log(joined); 

const arr7 = joined.split("==");
console.log(arr7);
 ********************************************/