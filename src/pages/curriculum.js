import React from "react";
import { Link } from "react-router-dom";

// import TopicsAndEducation from "../cursos/api-education";
import Topics from "../cursos/topics-curriculum";

export default class Activities extends React.Component {
  render() {
    return (
      <div className="Topics-wrapper">
        {/* <TopicsAndEducation /> */}

        <form className="ages-n-summer">
          <Link to="/ages" className="btn">
            Ages Information
          </Link>
          <Link to="/summer-course" className="btn">
            Summer Courses
          </Link>
        </form>
        <Topics />
      </div>
    );
  }
}
