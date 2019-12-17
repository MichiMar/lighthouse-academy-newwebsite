import React from "react";
import peaceImage from "../../img/peace.jpg";

const PeaceEducation = () => {
  return (
    <div className="peace-container">
      <div className="header">
        <h1>Peace Education</h1>
      </div>
      <div className="container">
        <p>
          Montessori views the chid wholistically. The inner well-being of the
          child is just as important as any other subject. Peace education
          refers to the skills that help one feel at peace. In this area of the
          curriculum we talk about respect, we see beautiful things, we quiet
          our minds, we observe and live in the present. We focus on being (not
          only on doing). Maria Montessori developed this area of the curriculum
          as she journied towards peace in her personal life. She fled to India
          from her homecountry Italy during World War II, because she refused to
          use her teaching methodology to indoctrinate children under Mussolini.
        </p>
        <div className="image">
          <img src={peaceImage} />
        </div>
        <p>
          Mussolini wanted her life. She went to India because she had a friend
          who invited her, Ghandi. Maria Montessori had been wearing only black
          since the death of her mother, decades before. In India, she began to
          wear white, and to smile much more in pictures. She herslef found
          peace during this period of her life, and designated "peace education"
          as an important curriculum area in the Montessori method.
        </p>
      </div>
    </div>
  );
};

export default PeaceEducation;
