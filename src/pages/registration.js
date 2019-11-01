import React, { Component } from "react";

export default class Registration extends Component {
  constructor() {
    super();

    this.parentHandbook = this.parentHandbook.bind(this);
  }

  parentHandbook() {
    return (
      <a href="https://docs.google.com/document/d/1To1AAkVmQaRhCJJSNcit1aWoVFcAAu7ZkFJkXpkWx3E/edit" />
    );
  }

  render() {
    return (
      <div className="content-wrapper">
        <h1>Registration</h1>
        <h5>Welcome</h5>

        <div className="instructions">
          <ol>
            <li>
              Go over the
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfPnKQnzaFTQPhQHoYfPfh8qEAJu7CUWQYryvUl23r2Ncczaw/viewform"
                target="blank"
              >
                Application
              </a>
            </li>
          </ol>
        </div>
      </div>
    );
  }
}
