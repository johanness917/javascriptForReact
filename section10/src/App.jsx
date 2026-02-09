import { useState } from 'react';
import './App.css';

// 1. Viewer2 컴포넌트
const Viewer2 = ({ calculate }) => {
  return (
    <div style={{ margin: "20px 0", padding: "10px", border: "1px solid #ccc" }}>
      <h2>{calculate}</h2>
    </div>
  );
};

// 2. InputController 컴포넌트
const InputController = ({ onClickCalculate }) => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const onChangeNum = (e) => {
    const { name, value } = e.target;
    if (name === 'num1') setNum1(Number(value)); // 숫자로 형변환
    if (name === 'num2') setNum2(Number(value));
  };

  return (
    <>
      <div className='input_controller'>
        <label>숫자1 </label>
        <input type="number" name="num1" value={num1} onChange={onChangeNum} />
        <br />
        <label>숫자2 </label>
        <input type="number" name="num2" value={num2} onChange={onChangeNum} />
      </div>
      <br />
      {/* 중요: 화살표 함수 () => 를 꼭 붙여야 즉시 실행되지 않습니다 */}
      <button onClick={() => onClickCalculate(num1, num2, '+')}>+</button>
      <button onClick={() => onClickCalculate(num1, num2, '-')}>-</button>
      <button onClick={() => onClickCalculate(num1, num2, '*')}>*</button>
      <button onClick={() => onClickCalculate(num1, num2, '/')}>/</button>
    </>
  );
};

// 3. 메인 App 컴포넌트
function App() {
  const [calculate, setCalculate] = useState(0);

  const onClickCalculate = (n1, n2, op) => {
    let sum = 0;
    switch (op) {
      case '+': sum = n1 + n2; break;
      case '-': sum = n1 - n2; break;
      case '*': sum = n1 * n2; break;
      case '/': sum = n2 !== 0 ? n1 / n2 : "Error"; break;
      default: break;
    }
    setCalculate(sum);
  };

  return (
    <div className='App' style={{ textAlign: "center", padding: "20px" }}>
      <h1>계산기</h1>
      <div className='viewer'>
        <h3>계산결과</h3>
        <Viewer2 calculate={calculate} />
        <InputController onClickCalculate={onClickCalculate} />
      </div>
    </div>
  );
}

export default App; // 파일 가장 마지막에 한 번만!