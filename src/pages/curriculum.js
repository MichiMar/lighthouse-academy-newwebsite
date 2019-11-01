import React from "react";
import Curriculum from "../cursos/education";
import seasonCourses from "../cursos/cursos-de-temporada";

const Activities = () => {
  return (
    <div className="">
      <h1>curriculum list</h1>
      <Curriculum />
      <seasonCourses />
    </div>
  );
};

export default Activities;
