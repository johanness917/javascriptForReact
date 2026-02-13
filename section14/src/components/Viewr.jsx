import "./Viewer.css";
import { getEmotionImage } from "../util/get-emotion-image";
import { emotionList } from "../util/constants";

const Viewer = ({ emotionId, content }) => {
  // 1. props로 받은 emotionId를 사용해 해당 감정 아이템을 찾는다.
  // item.id가 아니라 item.emotionId로 비교해야 한다.
  const emotionItem = emotionList.find(
    (item) => String(item.emotionId) === String(emotionId)
  );

  return (
    <div className="Viewer">
      <section className="img_section">
        <h4>오늘의 감정</h4>
        <div className={`emotion_img_wrapper emotion_img_wrapper_${emotionId}`}>
          <img
            src={getEmotionImage(emotionId)}
            alt={emotionItem?.emotionName}
          />
          <div>{emotionItem?.emotionName}</div>
        </div>
      </section>

      <section className="content_section">
        <h4>오늘의 일기</h4>
        <div className="content_wrapper">
          <p>{content}</p>
        </div>
      </section>
    </div>
  );
};

export default Viewer;