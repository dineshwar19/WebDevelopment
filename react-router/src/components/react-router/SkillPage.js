import React from "react";
import { useParams } from "react-router-dom";

const SkillPage = () => {
  const { id } = useParams();
  return <div>post {id}</div>;
};

export default SkillPage;
