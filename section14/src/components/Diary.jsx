import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DiaryStateContext } from "../App";
import Header from "./Header";
import Button from "./Button";
import { getEmotionImage } from "../util/getEmotionImage";

const Diary = () => {
  const params = useParams();
  const nav = useNavigate();
  const data = useContext(DiaryStateContext);

  const curDiaryItem = data.find((item) => String(item.id) === String(params.id));

  if (!curDiaryItem) {
    return <div>데이터를 불러오는 중입니다...</div>;
  }

  const { createdDate, emotionId, content } = curDiaryItem;
  const date = new Date(createdDate).toLocaleDateString();

  return (
    <div>
      <Header
        title={`${date} 기록`}
        leftChild={<Button text="< 뒤로가기" onClick={() => nav(-1)} />}
        rightChild={<Button text="수정하기" onClick={() => nav(`/edit/${params.id}`)} />}
      />
      <article>
        <section>
          <h4>오늘의 감정</h4>
          <div className={`emotion_img_wrapper emotion_img_wrapper_${emotionId}`}>
            <img src={getEmotionImage(emotionId)} alt={emotionId} />
          </div>
        </section>
        <section>
          <h4>오늘의 일기</h4>
          <div className="content_wrapper">
            <p>{content}</p>
          </div>
        </section>
      </article>
    </div>
  );
};

export default Diary;