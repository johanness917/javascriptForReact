import { useParams } from "react-router-dom"

const Diary = () => {
  const params = useParams();
  const onClickButton = (e) => {
    alert(e.target.innerText)
  }

  return <>
    <h1>{params.id}Diary</h1>
  </>

}

export default Diary;