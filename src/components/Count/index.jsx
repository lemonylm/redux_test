import React, { Component } from "react";
import store from "../../redux/store";
import {addAction,subAction,asyncAction} from '../../redux/count_action'
export default class Count extends Component {
  // componentDidMount() {
  //   store.subscribe(() => {
  //     this.setState({});
  //   });
  // }
  // state = { count: 0 };
  add = () => {
    const { value } = this.selectedNum;
    // const { count } = this.state;
    // this.setState({ count: count + parseInt(value) });
    store.dispatch(addAction(value));
  };
  sub = () => {
    const { value } = this.selectedNum;
    // const { count } = this.state;
    // this.setState({ count: count - parseInt(value) });
    store.dispatch(subAction(value));
  };
  add2 = () => {
    const { value } = this.selectedNum;
    // const { count } = this.state;
    // count % 2 !== 0 && this.setState({ count: count + parseInt(value) });
    const count = store.getState();
    count % 2 !== 0 && store.dispatch(addAction(value));
  };
  add3 = () => {
    const { value } = this.selectedNum;
    // setTimeout(() => {
      store.dispatch(asyncAction(value,500));
    // }, 1000);
  };
  render() {
    return (
      <div>
        <h1>当前求和为：{store.getState()}</h1>
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
