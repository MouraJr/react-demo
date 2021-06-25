import React, { Component } from "react";
import Counter from "./Counter.jsx";
import List from "./List.jsx";
import Form from "./Form.jsx";

const items = ["one", "two", "three"];

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Guest",
    };
  }

  changeName = (name) => {
    this.setState({ name });
  };

  render() {
    return (
      <div>
        <h1>Welcome {this.state.name}, to our counter app</h1>
        <Counter startingCount={3} />
        <Counter />
        <List items={items} />
        <Form onSubmit={this.changeName} />
      </div>
    );
  }
}
