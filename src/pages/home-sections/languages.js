import React from "react";
import spanishClass from "../../img/spanish-class.jpg";
import Youtube from "react-youtube";

const LanguagesSection = () => {
  return (
    <div className="languages-wrapper">
      <h5 className="subtitle">Spanish, English and Chinneese</h5>
      <Youtube></Youtube>
      {/* <img src={spanishClass} /> */}
      <p className="introduction">
        Children enjoy learning useful phrases as they learn to communicate
        their needs and desires through interactive games and activities. Two of
        our staff members are fluent Spanish speakers, so the possibilities for
        learning Spanish are endless!
      </p>
    </div>
  );
};

export default LanguagesSection;
