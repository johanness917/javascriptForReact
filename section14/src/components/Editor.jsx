import Button from "./Button";
import EmotionItem from "./EmotionItem";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Editor.css';

const emotionList = [
  { emotionId: 1, emotionName: "완전 좋음" },
  { emotionId: 2, emotionName: "좋음" },
  { emotionId: 3, emotionName: "그럭저럭" },
  { emotionId: 4, emotionName: "나쁨" },
  { emotionId: 5, emotionName: "끔찍함" },
];

const getStringDate = (targetDate) => {
  const year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();
  if (month < 10) month = `0${month}`;
  if (date < 10) date = `0${date}`;
  return `${year}-${month}-${date}`;
};

const Editor = ({ onSubmit, initData }) => {
  const nav = useNavigate();

  // 1. props로 받은 initData를 초기값으로 바로 설정
  // key를 사용했기 때문에 수정 시 데이터가 바뀌면 이 컴포넌트가 다시 그려지며 초기값이 갱신된다.
  const [input, setInput] = useState(
    initData || {
      createdDate: new Date().getTime(),
      emotionId: 3,
      content: "",
    }
  );

  const onChangeInput = (e) => {
    let { name, value } = e.target;
    if (name === "createdDate") {
      value = new Date(value).getTime();
    }
    setInput({ ...input, [name]: value });
  };

  return (
    <div className="Editor">
      <section className="date_section">
        <h4>오늘의 날짜</h4>
        <input
          type="date"
          name="createdDate"
          value={getStringDate(new Date(input.createdDate))}
          onChange={onChangeInput}
        />
      </section>
      <section className="emotion_section">
        <h4>오늘의 감정</h4>
        <div className="emotion_list_wrapper">
          {emotionList.map((item) => (
            <EmotionItem
              key={item.emotionId}
              {...item}
              onClick={() => onChangeInput({ target: { name: "emotionId", value: item.emotionId } })}
              isSelected={item.emotionId === input.emotionId}
            />
          ))}
        </div>
      </section>
      <section className="content_section">
        <h4>오늘의 일기</h4>
        <textarea
          name="content"
          value={input.content}
          placeholder="오늘은 어땠나요?"
          onChange={onChangeInput}
        />
      </section>
      <section className="button_section">
        <Button text="취소하기" onClick={() => nav(-1)} />
        <Button text="작성완료" type="POSITIVE" onClick={() => onSubmit(input)} />
      </section>
    </div>
  );
};

export default Editor;