
/*************************************************************
let task = function () {
  setTimeout(() => {
    console.log("안녕");
    if (true) {
      //resolve 상태
    } else {
      //reject 상태
    }
  }, 3000);
}

//task();
// pending 상태
let promise = new Promise(() => {
  setTimeout(() => {
    console.log("안녕");
    if (true) {
      //resolve 상태
    } else {
      //reject 상태
    }
  }, 3000);
});

//console.log(promise);

// resolve 상태
let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("안녕");
    if (true) {
      resolve("promise 안녕")
    } else {
      //reject 상태
    }
  }, 2000);
});

setTimeout(() => {
  console.log(promise2);
}, 3000);

// reject
let promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("안녕3");
    if (false) {
      resolve("promise 성공")
    } else {
      reject("promise 실패")
    }
  }, 2000);
});

setTimeout(() => {
  console.log(promise3);
}, 3000);


//4. Promise 를 실제로 활용해보자. 
const promise4 = new Promise((resolve, reject) => {
  // 비동기 작업 실행하는 함수 
  // executor 
  setTimeout(() => {
    const num = "10";
    if (typeof num === 'number') {
      resolve(num + 10);
    } else {
      reject('num이 숫자가 아닙니다');
    }
  }, 2000);
});

setTimeout(() => {
  console.log(poromise4);
}, 3000);


// 4.1 promise에서 then 메소드는 성공했을때만 실행해주는 함수이다. 
//promise 실행한 후에 불러준다. 
const promise5 = new Promise((resolve, reject) => {
  // 비동기 작업 실행하는 함수 
  // executor 
  setTimeout(() => {
    const num = 10;
    if (typeof num === 'number') {
      resolve(num + 10);
    } else {
      reject('num이 숫자가 아닙니다');
    }
  }, 2000);
});

//promise5 가 성공하면 작업실행
promise5.then((value) => console.log(`성공한 결과 ${value}`));
//promise5 가 실패하면 작업실행
promise5.catch((value) => console.log(`실패한 결과 ${value}`));

setTimeout(() => {
  console.log(poromise5);
}, 3000);


//promise chain 방식으로 실행한 후에 불러준다. 
const promise6 = new Promise((resolve, reject) => {
  // 비동기 작업 실행하는 함수 
  // executor 
  setTimeout(() => {
    const num = "10";
    if (typeof num === 'number') {
      resolve(num + 10);
    } else {
      reject('num이 숫자가 아닙니다');
    }
  }, 2000);
});

//promise chain 방식으로 표현한다.
promise6
  .then((value) => console.log(`성공한 결과 ${value}`))
  .catch((value) => console.log(`실패한 결과 ${value}`));

setTimeout(() => {
  console.log(poromise6);
}, 3000);


//promise를 함수를 통해서 실행하기
function add10(num) {
  const promise = new Promise((resolve, reject) => {
    // 비동기 작업 실행하는 함수 
    // executor 
    setTimeout(() => {
      if (typeof num === 'number') {
        resolve(num + 10);
      } else {
        reject('num이 숫자가 아닙니다');
      }
    }, 2000);
  });
  return promise
}

//1단계
let promise7 = add10("100");
promise7
  .then((value) => console.log(`성공한 결과 ${value}`))
  .catch((value) => console.log(`실패한 결과 ${value}`));

//2단계
let promise8 = add10("100");
promise8
  .then((value) => {
    console.log(`성공한 결과 ${value}`)
    let _promise = add10(value);
    _promise.then((value) => {
      console.log(`성공한 결과 ${value}`)
    });
  })
  .catch((value) => console.log(`실패한 결과 ${value}`));

//2단계 수정
let promise9 = add10("100");
promise9
  .then((value) => {
    console.log(`성공한 결과 ${value}`)
    // promise 리턴
    return add10(value);
  })
  .then((value) => console.log(`성공한 결과 ${value}`))
  .catch((value) => console.log(`실패한 결과 ${value}`));

//3단계
add10(100)
  .then((value) => {
    console.log(`성공한 결과 ${value}`)
    // promise 리턴
    return add10(value);
  })
  .then((value2) => {
    console.log(`성공한 결과 ${value2}`)
    return add10(value2)
  })
  .then((value3) => console.log(`성공한 결과 ${value3}`))
  .catch((value) => { console.log(`실패한 결과 ${value}`) });
*****************************************************************/

/*************************************************************
// 음식주문사항을 1단계, 2단계, 3단계로 해결하시오.
function orderFood(food, callback) {
  console.log(`${food} '음식주문'`);
  setTimeout(() => {
    callback(food);
  }, 3000);
}

//1단계 주문
function orderFood2(food) {
  const promise = new Promise((resolve, reject) => {
    console.log(`${food} '음식주문'`);
    setTimeout(() => {
      let flag = true;
      if (flag) {
        resolve(food + '완료')
      } else {
        reject(food + '실패')
      }
    }, 2000)
  });
  return promise;
}

orderFood2("백숙")
  .then((value) => console.log(value))
  .catch((error) => console.log(error))

//1단계 차갑게주문
function coolFood2(food) {
  const promise = new Promise((resolve, reject) => {
    console.log(`${food} '차갑게주문'`);
    setTimeout(() => {
      let flag = true;
      if (flag) {
        resolve(food + '차갑게 완료')
      } else {
        reject(food + '차갑게 실패')
      }
    }, 2000)
  });
  return promise;
}

coolFood2("백숙")
  .then((value) => console.log(value))
  .catch((error) => console.log(error))

//1단계 냉동주문
function freezeFood2(food) {
  const promise = new Promise((resolve, reject) => {
    console.log(`${food} '냉동 주문'`);
    setTimeout(() => {
      let flag = true;
      if (flag) {
        resolve(food + '냉동 완료')
      } else {
        reject(food + '냉동 실패')
      }
    }, 2000)
  });
  return promise;
}

freezeFood2("백숙")
  .then((value) => console.log(value))
  .catch((error) => console.log(error))



//2단계 처리방식
orderFood2("백숙")
  .then((value) => {
    console.log(value)
    return coolFood2(value)
  })
  .then((value) => console.log(value))
  .catch((error) => console.log(error))
******************************************/


//3단계 처리방식
orderFood2("백숙")
  .then((value) => {
    console.log(value)
    return coolFood2("백숙")
  })
  .then((value) => {
    console.log(value)
    return freezeFood2("백숙")
  })
  .then((value) => console.log(value))
  .catch((error) => console.log(error))
