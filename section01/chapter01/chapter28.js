console.log(1);

//비동기로 처리한 방식(Web APIs 에서 실행된다) 
setTimeout(() => {
  console.log(2);
}, 3000);

console.log(3);
//출력형식 
1
3
2

//함수선언식
function task() {
  setTimeout(() => {
    console.log('hello');
  }, 3000);
}
task();

function add(a, b) {
  setTimeout(() => {
    const sum = a + b;
    console.log(sum);
  }, 3000);
}
add(1, 2);

// 함수선언식
//1번방식 3초후에 이벤트처리를 정의한것이다.
//이벤트: 시가닝 3초가 지나면 setTimeout(핸들러일, 시간이벤트)
//이벤트처리일(함수로 만든것: 핸들러일)
function task(a, b) {
  setTimeout(() => {
    let sum = a + b;
    console.log(sum);
  }, 3000);
}
task(10, 20)

//2번방식
//이벤트: 시가닝 3초가 지나면 setTimeout(핸들러일, 시간이벤트)
//이벤트처리일(핸들러함수: 화살표함수)
let callback = (sum) => {
  let sum = a + b;
  console.log(`a+b = ${sum}`)
}

function task1(a, b) {
  setTimeout(() => {
    callback(sum)
  }, 3000);
}
task1(10, 20);

//3번방식
//이벤트: 시가닝 3초가 지나면 setTimeout(핸들러일, 시간이벤트)
//이벤트처리일(핸들러함수: 화살표함수)
function task2(a, b, callbackA) {
  setTimeout(() => {
    callback(a, b);
  }, 3000);
}

task2(10, 20, (a, b) => console.log(`a+b = ${a + b}`))

// 1단계 음식을 주문하는 상황  
//이벤트: 음식을 주문하면, 3초후에
//핸들러: 음식이 완성이 되서 나오는 것
function orderFood(food, callback) {
  console.log(`${food} '음식주문'`);
  setTimeout(() => {
    callback(food);
  }, 3000);
}
orderFood('백숙', (food) => console.log(`${food} '주문완료'`));

// 1단계 음식을 차게주문하는 상황  
function coolFood(food, callback) {
  console.log(`${food} + '차갑게주문'`);
  setTimeout(() => {
    callback(food);
  }, 2000);
}

coolFood('백숙', (food) => console.log(`${food} + '차갑게완료'`));

// 1단계 음식을 냉동주문하는 상황  
function freezeFood(food, callback) {
  console.log(`${food} + '냉동주문'`);
  setTimeout(() => {
    callback(food);
  }, 2000);
}
freezeFood('백숙', (food) => console.log(`${food} + '냉동완료'`));

//2단계 음식을 주문하고 => 음식을 차갑게 주문사항.  
orderFood('백숙', (food) => {
  console.log(`${food} + '주문완료'`)
  coolFood(food, (food) => console.log(`${food} + '차갑게완성'`));
});

//3단계 음식을 주문하고 => 음식을 차갑게주문사항 => 음식냉동 주문사항 
orderFood('백숙', (food) => {
  console.log(`${food} + '완성'`);
  coolFood(food, (food) => {
    console.log(`${food} + '차갑게완성'`);
    freezeFood(food, (food) => console.log(`${food} + '냉동완성'`));
  });
}); 