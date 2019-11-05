import React from "react";
import { Link } from "react-router-dom";
import TopicItem from "./topic-item";

export default class TopicsAndEducation extends React.Component {
  constructor() {
    super();

    this.state = {
      topics: [],
      topic: ""
    };
  }

  componentDidMount() {
    fetch("https://api-lighthouse.herokuapp.com/topics/json")
      .then(response => response.json())
      .then(data => {
        const loadedTopics = [];
        for (const id in data) {
          loadedTopics.push({ id, ...data[id] });
        }
        this.setState({ topics: loadedTopics });
      });
  }

  renderTopics = () => {
    return this.state.topics.map(topic => {
      return (
        <TopicItem
          key={topic.id}
          title={topic.title}
          description={topic.description}
          delete={this.deleteTopic}
        />
      );
    });
  };

  handleChange = event => {
    this.setState({ topic: event.target.value });
  };

  addTopic = event => {
    event.preventDefault();
    fetch("https://api-lighthouse.herokuapp.com/topics/json", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        title: this.state.topic,
        description: this.state.topic
      })
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          topics: [
            ...this.state.topics,
            {
              id: data.name,
              title: this.state.topic,
              description: this.state.topic
            }
          ],
          topic: ""
        });
      });
  };

  deleteTopic = id => {
    fetch(`https://api-lighthouse.herokuapp.com/topics/${id}.json`, {
      method: "DELETE"
    }).then(
      // @ts-ignore
      this.setState({
        topics: this.state.topics.filter(topic => topic.id !== id)
      })
    );
  };

  render() {
    return (
      <div className="curriculum-list">
        <h1>Knowing our Curriculum</h1>
        <form onSubmit={this.addTopic}>
          <input
            type="text"
            placeholder="Add title topic"
            value={this.state.topic.title}
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="Describe the topic"
            value={this.state.topic.description}
            onChange={this.handleChange}
          />
          <button type="submit" className="btn">
            Add
          </button>
        </form>
        {this.renderTopics()}
      </div>
    );
  }
}
