import { useState, useRef } from 'react';
import '../css/Editor.css';

const Editor = ({ onCreate }) => {
  // 1. 입력 폼 상태 하나로 관리
  const [form, setForm] = useState({
    name: '',
    kor: '',
    eng: '',
    math: ''
  });

  // 이름 입력창에 포커스를 주기 위한 Ref
  const nameRef = useRef();

  // 2. 입력 핸들러
  const onChangeForm = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  // 3. 전송 핸들러
  const onSubmit = () => {
    // 유효성 검사: 이름이 없거나 점수가 비어있으면 중단
    if (form.name === "" ||
      form.kor === "" ||
      form.eng === "" ||
      form.math === "") {
      nameRef.current.focus();
      return;
    }

    // 부모 컴포넌트(App)에서 받은 onCreate 함수 호출
    // 입력값들을 숫자로 변환해서 전달
    onCreate(
      form.name,
      Number(form.kor),
      Number(form.eng),
      Number(form.math)
    );

    // 입력창 초기화
    setForm({ name: '', kor: '', eng: '', math: '' });
  };

  // 엔터키 지원
  const onKeyDown = (e) => {
    if (e.key === 'Enter') onSubmit();
  };

  return (
    <div className="Editor">
      <input
        ref={nameRef}
        name="name"
        value={form.name}
        onChange={onChangeForm}
        placeholder="이름"
      />
      <input
        name="kor"
        type="number"
        value={form.kor}
        onChange={onChangeForm}
        placeholder="국어점수"
      />
      <input
        name="eng"
        type="number"
        value={form.eng}
        onChange={onChangeForm}
        placeholder="영어점수"
      />
      <input
        name="math"
        type="number"
        value={form.math}
        onChange={onChangeForm}
        placeholder="수학점수"
        onKeyDown={onKeyDown}
      />
      <button onClick={onSubmit}>등록하기</button>
    </div>
  );
};

export default Editor;