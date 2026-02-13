import { useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import Header from "./Header";
import Button from "./Button";
import Editor from "./Editor";
import { DiaryDispatchContext, DiaryStateContext } from "../App";

const Edit = () => {
  const params = useParams();
  const nav = useNavigate();
  const { onUpdate, onDelete } = useContext(DiaryDispatchContext);
  const data = useContext(DiaryStateContext);

  // 1. 상태(useState)와 useEffect를 사용하는 대신, 렌더링 중에 바로 데이터를 찾는다.
  const curDiaryItem = data.find(
    (item) => String(item.id) === String(params.id)
  );

  // 2. 존재하지 않는 아이디일 때 처리 (이것은 부수 효과이므로 useEffect 사용)
  /*
  useEffect(() => {
    if (data && data.length > 0 && !curDiaryItem) {
      alert("존재하지 않는 일기입니다.");
      nav("/", { replace: true });
    }
  }, [data, curDiaryItem, nav]);
  */

  const onClickDelete = () => {
    if (window.confirm("일기를 정말 삭제할까요?")) {
      onDelete(Number(params.id));
      nav("/", { replace: true });
    }
  };

  const onSubmit = (input) => {
    if (window.confirm("일기를 정말 수정할까요?")) {
      onUpdate(Number(params.id), input.createdDate, input.emotionId, input.content);
      nav("/", { replace: true });
    }
  };

  if (!curDiaryItem) {
    return <div>데이터를 불러오는 중입니다...</div>;
  }

  return (
    <div>
      <Header
        title="일기 수정하기"
        leftChild={<Button text="< 뒤로가기" onClick={() => nav(-1)} />}
        rightChild={<Button text="삭제하기" type="NEGATIVE" onClick={onClickDelete} />}
      />
      {/* 3. key를 부여하면 curDiaryItem이 바뀔 때마다 Editor가 새로 초기화된다 */}
      <Editor key={curDiaryItem.id} initData={curDiaryItem} onSubmit={onSubmit} />
    </div>
  );
};

export default Edit;