import React from "react";
import FindAService from "../FindAService/FindAService";
import { useParams } from "react-router-dom";

const ShowProfesionalByLink = () => {
  const { link } = useParams();
  try {
    const json = atob(link);

    const detail = JSON.parse(json);
    console.log(detail);
    return <FindAService showDetail={detail} />;
  } catch (error) {
    return <FindAService />;
  }
};

export default ShowProfesionalByLink;
