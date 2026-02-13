import { Route, Routes } from 'react-router-dom';
import { useReducer, useRef, createContext, useMemo } from 'react';
import './App.css';
import Home from './components/Home';
import New from './components/New';
import Diary from './components/Diary';
import Edit from './components/Edit';
import NotFound from './components/NotFound';

const mockData = [
  { id: 1, createdDate: new Date(2026, 1, 1).getTime(), emotionId: 1, content: "1번 일기 내용" },
  { id: 2, createdDate: new Date(2026, 1, 2).getTime(), emotionId: 2, content: "2번 일기 내용" },
  { id: 3, createdDate: new Date(2026, 0, 1).getTime(), emotionId: 1, content: "3번 일기 내용" },
];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE": return [action.data, ...state];
    case "UPDATE":
      return state.map((item) =>
        String(item.id) === String(action.data.id) ? { ...action.data } : item
      );
    case "DELETE":
      return state.filter((item) => String(item.id) !== String(action.id));
    default: return state;
  }
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(4);

  const onCreate = (createdDate, emotionId, content) => {
    dispatch({ type: "CREATE", data: { id: idRef.current++, createdDate, emotionId, content } });
  };

  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({ type: "UPDATE", data: { id, createdDate, emotionId, content } });
  };

  const onDelete = (id) => {
    dispatch({ type: "DELETE", id });
  };

  // dispatch 함수들을 하나로 묶어 메모이제이션 (성능 최적화 및 에러 방지)
  const memoizedDispatch = useMemo(() => ({ onCreate, onUpdate, onDelete }), []);

  return (
    <DiaryStateContext.Provider value={state}>
      <DiaryDispatchContext.Provider value={memoizedDispatch}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/diary/:id" element={<Diary />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;