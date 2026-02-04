// 방법1: OR (||) 연산자의 단락 평가
// 첫 번째 값이 true이면 두 번째 값은 확인조차 하지 않습니다.
function returnFalse() {
  console.log("False 함수");
  return false;
}

function returnTrue() {
  console.log("True 함수");
  return true;
}

console.log(returnTrue() || returnFalse());
// 결과: "True 함수" 출력 후 true 반환 (returnFalse는 실행 안 됨)


// 방법2: AND (&&) 연산자의 단락 평가
// 첫 번째 값이 Falsy(undefined, null 등)이면 두 번째 값은 확인하지 않습니다.
function returnFalse2() { // 함수 이름 중복 방지를 위해 2를 붙였습니다.
  console.log("False 함수");
  return undefined;
}

function returnTrue2() {
  console.log("True 함수");
  return 10;
}

console.log(returnFalse2() && returnTrue2());
// 결과: "False 함수" 출력 후 undefined 반환 (returnTrue2는 실행 안 됨)

//0, "", false, null, undefined, NaN
let test = () => { };
if (test) {
  console.log(`${test} = true 취급한다`)
} else {
  console.log(`${test} = false 취급한다`)
}

// 단락 평가 활용 사례 
function printName(person) {
  // person이 없으면 undefined, 있으면 person.name을 할당 (에러 방지)
  const name = person && person.name;
  // name이 Falsy("" 또는 undefined 등)이면 기본 메시지 출력
  console.log(name || "person의 값이 없음");
}

printName();                  // 출력: person의 값이 없음  
printName({ name: "홍길동" }); // 출력: 홍길동