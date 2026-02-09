import './App.css';
import Viewer from './components/Viewer';
import Controller from './components/Controller';
import { useState, useEffect, useRef } from 'react';
import Even from './components/Even';

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');
  const isMount = useRef(false);
  const countValue = useRef(0);

  //업데이트: 마운트할때와 스테이트가 변화될 때 즉 리렌더링 될 때 사용된다. 
  useEffect(() => {
    console.log('update');
  });
  //언마운트: 죽음 

  const onClickButton = (value) => {
    setCount(count + value);
  };

  useEffect(() => {
    console.log(`countValue=${countValue.current}`)
    countValue.current = countValue + 1;
    if (isMount.current === false) {
      isMount.current = true
      return;
    } else {
      console.log('App mount')
    }
  })

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input
          value={input}
          type="text"
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}
export default App;