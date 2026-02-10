import '../css/ListItem.css'

const ListItem = ({ id, isSelected, name, kor, eng, math, date, onDelete, onUpdate }) => {

  // 체크박스 변경 시 실행
  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onClickDelete = () => {
    onDelete(id)
  }

  const total = kor + eng + math;
  const avg = (total / 3).toFixed(2);

  return (
    <div className="ListItem">
      <input
        type="checkbox"
        checked={isSelected}
        onChange={onChangeCheckbox}
      />

      {/* 기존 이름 영역 */}
      <div className="name">{name}</div>

      <div className="score">국어: {kor}</div>
      <div className="score">영어: {eng}</div>
      <div className="score">수학: {math}</div>

      <div className="total">합계: {total}</div>
      <div className="avg">평균: {avg}</div>

      <div className="date">{new Date(date).toLocaleDateString()}</div>

      <button onClick={onClickDelete}>삭제</button>
    </div>
  );
};

export default ListItem;