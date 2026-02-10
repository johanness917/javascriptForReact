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
    name: "홍길동",
    kor: 90,
    eng: 80,
    math: 70,
    date: new Date().getTime(),
  },
];

function App() {
  const [students, setStudents] = useState(mockData)
  const idRef = useRef(1);

  //이벤트함수(setTodos 생성)
  const onCreate = (name, kor, eng, math) => {
    const newStudent = {
      id: idRef.current++, // 현재 id 값 사용
      name,
      kor,
      eng,
      math,
      date: new Date().getTime(),
    }
    setStudents([newStudent, ...students]);
  };

  // 이벤트함수(setTodos 수정)
  const onUpdate = (id) => {
    setStudents(students.map((student) =>
      student.id === id
        ? { ...student, isSelected: !student.isSelected } // 선택 상태 반전
        : student
    ));
  };

  //이벤트함수(setTodo)
  const onDelete = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  }

  return (
    <>
      <div className="App">
        <Header />
        <Editor onCreate={onCreate} />
        <List
          students={students}
          onUpdate={onUpdate}
          onDelete={onDelete} />
      </div>
    </>
  )
}

export default App;