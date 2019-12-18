import React from "react";
import Spanish from "../../cursos/spanish";
import English from "../../cursos/english";

const Languages = () => {
  return (
    <div className="languages-container">
      <div className="spanish">
        <Spanish />
      </div>
      <div className="English">
        <English />
      </div>
    </div>
  );
};

export default Languages;
