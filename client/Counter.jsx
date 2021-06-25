import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.startingCount || 0,
    };
  }

  handleIncr = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  handleDecr = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  componentDidMount = () => {
    this.timerID = setInterval(() => {
      this.setState({
        count: this.state.count + 1,
      });
    }, 1000);
  };

  componentWillUnmount = () => {
    clearInterval(this.timerID);
  };

  render() {
    const { count } = this.state;

    const parityMessage = count % 2 === 0 ? <div>even</div> : <div>odd</div>;

    return (
      <div className="counter">
        <button className="action-btn" onClick={this.handleIncr}>
          +
        </button>
        <button className="action-btn" onClick={this.handleDecr}>
          -
        </button>
        <span>Current count: {count}</span>
        {parityMessage}
      </div>
    );
  }
}
