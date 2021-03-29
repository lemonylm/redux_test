import React, { Component } from "react";

export default class Count extends Component {
  state = { count: 0 };
  add = () => {
    const { value } = this.selectedNum;
    const { count } = this.state;
    this.setState({ count: count + parseInt(value) });
  };
  sub = () => {
    const { value } = this.selectedNum;
    const { count } = this.state;
    this.setState({ count: count - parseInt(value) });
  };
  add2 = () => {
    const { value } = this.selectedNum;
    const { count } = this.state;
    count % 2 !== 0 && this.setState({ count: count + parseInt(value) });
  };
  add3 = () => {
    const { value } = this.selectedNum;
    const { count } = this.state;
    setTimeout(() => {
      this.setState({ count: count + parseInt(value) });
    }, 1000);
  };
  render() {
    return (
      <div>
        <h1>当前求和为：{this.state.count}</h1>
        <select ref={(c) => (this.selectedNum = c)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <br />
        <button onClick={this.add}>+</button>
        <button onClick={this.sub}>-</button>
        <button onClick={this.add2}>奇数加</button>
        <button onClick={this.add3}>async</button>
      </div>
    );
  }
}
