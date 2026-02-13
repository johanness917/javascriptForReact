import { useParams } from "react-router-dom";

const Edit = () => {
  const params = useParams();

  return <>
    <h1>{params.id}Edit</h1>
  </>

}
export default Edit;