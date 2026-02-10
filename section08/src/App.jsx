import './App.css'
import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'
import './css/App.css'
import { useState, useRef } from 'react'

//전역변수
const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "스프링부트 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "자바 공부하기",
    date: new Date().getTime(),
  },
];

function App() {
  const [todos, setTodos] = useState(mockData)
  const idRef = useRef(3);
  //이벤트함수(setTodos 생성)
  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current, // 현재 id 값 사용
      isDone: false,
      content: content,
      date: new Date().getTime(),
    }
    // 이벤트함수(setTodos 수정)
    const onUpdate = (id) => {
      setTodos(todos.map((todo) => {
        return todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      }));
    }
    //이벤트함수(setTodo)
    const onDelete = (id) => {
      setTodos(todos.filter((todo) => {
        return todo.id !== id
      }))
    }

    return (
      <>
        <div className="App">
          <Header />
          <Editor onCreate={onCreate} />
          <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
        </div>
      </>
    )
  }

  export default App