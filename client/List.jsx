import React, { Component } from "react";

export default class List extends Component {
  render() {
    const { items } = this.props;
    const itemHtml = items.map((item) => <li key={item}>{item}</li>);

    return <ul>{itemHtml}</ul>;
  }
}
