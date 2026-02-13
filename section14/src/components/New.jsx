import Header from "./Header";
import Button from "./Button";
import Editor from "./Editor"; // ← 여기에 중괄호 { } 가 절대 없어야 합니다!
import { useNavigate } from "react-router-dom";
import { DiaryDispatchContext } from "../App";
import { useContext } from "react";
const New = () => {
  const { onCreate } = useContext(DiaryDispatchContext);
  const nav = useNavigate(); // 1. useNavigate() 실행괄호 필수!

  const onSubmit = (input) => {
    // input.createdDate가 Date 객체라면 getTime()을, 문자열이라면 new Date() 후 getTime()
    const date = new Date(input.createdDate).getTime();
    onCreate(date, input.emotionId, input.content);
    nav("/", { replace: true });
  };

  return (
    <>
      <div>
        <Header
          title={"새 일기 쓰기"}
          leftChild={<Button text={"< 뒤로 가기"} onClick={() => nav(-1)} />}
        />
        <Editor onSubmit={onSubmit} />
      </div>
    </>
  );
};

export default New;