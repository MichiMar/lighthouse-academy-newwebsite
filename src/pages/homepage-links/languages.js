import React from "react";
import Spanish from "../../cursos/spanish";
import English from "../../cursos/english";
import spanishImange from "../../img/good-comunicator.jpg";
const Languages = () => {
  return (
    <div className="languages-container">
      <div className="image">
        <img src={spanishImange} />
        <div className="spanish">
          <Spanish />
        </div>

        <div className="image">
          <img src="https://cdn.pixabay.com/photo/2017/09/07/10/07/english-2724442_960_720.jpg" />
        </div>
        <div className="English">
          <English />
        </div>
      </div>
    </div>
  );
};

export default Languages;
