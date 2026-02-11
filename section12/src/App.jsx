import './App.css'
import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'
import './css/App.css'
import { useState, useRef, useReducer, useCallback } from 'react'
import Exam from './components/Exsam'

//전역변수
const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React 공부 또 하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "스프링부트 공부 또 하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "자바 공부 또 하기",
    date: new Date().getTime(),
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) =>
        item.id === action.targetId
          ? { ...item, isDone: !item.isDone }
          : item
      );
    case "DELETE":
      return state.filter(
        (item) => item.id !== action.targetId
      );
    default:
      return state;
  }
}
function App() {
  //const [todos, setTodos] = useState(mockData)
  const [count, setCount] = useState(10);
  const [todos, dispatch] = useReducer(reducer, mockData)
  const idRef = useRef(3);

  //이벤트함수(setTodos 생성)
  const onCreate = useCallback((content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      }, // 1. data 객체 닫기
    });  // 2. dispatch 함수 닫기
  }, []); // 3. useCallback 닫기 및 의존성 배열

  // 이벤트함수(setTodos 수정)
  const onUpdate = useCallback((id) => {
    dispatch({ type: "UPDATE", targetId: id });
  }, [])
  //이벤트함수(setTodo)
  const onDelete = useCallback((id) => {
    dispatch({ type: "DELETE", targetId: id });
  }, [])

  return (
    <>
      <div className="App">
        <Header count={count} />
        <Exam />
        <Editor onCreate={onCreate} />
        <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
      </div>
    </>
  )
}

export default App;