import { useState, onClickCalculate } from "react";

const InputController = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const onChangeNum = (e) => {
    const { name, value } = e.target;
    if (name === 'num1') setNum1(value);
    if (name === 'num2') setNum2(value);
  }
  const onClickButton = (e) => {
    onClickCalculate(num1, num2, e.target.value)
  }

  return <>
    <div>
      <div className='input_controller'>
        <label htmlFor="num1">숫자1</label>
        <input type="number" name="num1" id="num1" value={num1} onChange={onChangeNum} />
        <br />
        <label htmlFor="num2">숫자2</label>
        <input type="number" name="num2" id="num2" value={num2} onChange={onChangeNum} />
      </div>
    </div><br />

    <button type='button' value={'+'} onClick={onClickButton}>+</button>
    <button type='button' value={'-'} onClick={onClickButton}>-</button>
    <button type='button' value={'*'} onClick={onClickButton}>*</button>
    <button type='button' value={'/'} onClick={onClickButton}>/</button>
  </>

}

export default InputController;