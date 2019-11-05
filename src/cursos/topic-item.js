import React, { Component } from "react";

export default class TopicItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      description: props.description
    };
  }

  getTopics = () => {
    fetch(`heroku/${this.props.id}.json`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        descrption: this.state.description
      })
    }).then(this.setState({ description: this.state.description }));
  };

  render() {
    return (
      <div className="topic-item">
        <div className="header">
          <h6>{this.props.title}</h6>
        </div>
        <div className="description">
          <p>{this.state.description}</p>
        </div>
      </div>
    );
  }
}
