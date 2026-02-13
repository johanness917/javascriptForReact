import { getEmotionImage } from "../util/getEmotionImage";
import './EmotionItem.css';

const EmotionItem = ({ emotionId, emotionName, isSelected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={[
        "EmotionItem",
        isSelected ? `EmotionItem_on_${emotionId}` : "EmotionItem_off",
      ].join(" ")}
    >
      <img className="emotion_img" src={getEmotionImage(emotionId)} alt={emotionName} />
      <div className="emotion_name">{emotionName}</div>
    </div>
  );
};

export default EmotionItem;