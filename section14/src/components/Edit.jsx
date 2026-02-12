import { useState } from "react";
import { useSearchParams, useParams } from "react-router-dom";
import Header from "./Header";
import Button from "./Button";

const Edit = () => {
  const params = useParams();

  return <>
    <h1>{params.id} Edit </h1>
  </>

}
export default Edit;