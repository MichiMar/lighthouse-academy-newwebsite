import React, { Component } from "react";

export default class Registration extends Component {
  render() {
    return (
      <div className="content-wrapper">
        <h1>Registration</h1>

        <div className="instructions">
          <ol>
            <li>
              Go over the{" "}
              <a href="https://docs.google.com/document/d/1To1AAkVmQaRhCJJSNcit1aWoVFcAAu7ZkFJkXpkWx3E/edit">
                Parent Handbook
              </a>
            </li>

            <li>
              Complete the{" "}
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSeuFm3sR_blShyG1mWIFb6eCq7Me1PETCQXsjpXAPiVONhuRg/viewform">
                Registration Form
              </a>{" "}
              or
            </li>
            <li>
              Review our{" "}
              <a href="https://www.lighthousemontessoriacademy.com/summer-gain/">
                Summer Program
              </a>
              <br /> and{" "}
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSfPnKQnzaFTQPhQHoYfPfh8qEAJu7CUWQYryvUl23r2Ncczaw/viewform">
                Register for Summer
              </a>
              <br />
            </li>
            <li>
              Secure your spot by paying the $150 Enrollment fee ($100 credited
              towards the last month tuition and $50 materials) Venmo preferred
              to Maraly-Frandsen (checks and cash accepted)
            </li>
          </ol>

          <p>
            We start the day after Labor day, and from then on we follow the{" "}
            <a href="https://provo.edu/wp-content/uploads/2018/09/09282018-shoolyear-2018-2019-Contract-Calendars.pdf">
              Provo School District School Calendar
            </a>{" "}
          </p>
        </div>
      </div>
    );
  }
}

// *feb-19/20* Cambie la fecha de registro, y Arregle las palabras que estaban mal escritas
