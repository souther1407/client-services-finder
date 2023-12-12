import React from "react";
import FindAService from "../FindAService/FindAService";
import { Navigate, useParams } from "react-router-dom";
import { FIND_SERVICE } from "../../utils/constants/routes";
const ShowProfesionalByLink = () => {
  const { link } = useParams();

  try {
    const json = atob(link);

    const detail = JSON.parse(json);

    return <FindAService showDetail={detail} />;
  } catch (error) {
    return <Navigate to={FIND_SERVICE} />;
  }
};

export default ShowProfesionalByLink;
