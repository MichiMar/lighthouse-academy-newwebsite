import React from "react";

const schoolInfo =
  "https://images.unsplash.com/photo-1453749024858-4bca89bd9edc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=707&q=80";

const TuitionAndFees = () => {
  return (
    <div className="about-container">
      <h1>Request 2019-2020 Tuition Rates</h1>
      <div className="teachers"></div>

      <div className="about-text">
        <p>
          Please complete the information below and then check your email inbox
          to confirm.
          <br />
          <a
            href="https://www.lighthousemontessoriacademy.com/tuition-and-fees/"
            target="blank"
          >
            Registration
          </a>
          <br />
          Once you have confirmed your email, you will receive our tuition
          rates. Don't worry, we won't share your email. You will receive a few
          emails from us over the next two weeks with more information about
          Montessori and our program. We ask that you utilize this system for
          downloading our tuition rates so that you can maintain the abiity to
          choose whether you receive future updates from us or not.
        </p>
        <img src={schoolInfo} />
      </div>
    </div>
  );
};

export default TuitionAndFees;
