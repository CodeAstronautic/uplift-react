import React, { Component } from "react";

class Demo extends Component {
  state = {
    value: 0,
    xys: "kjkfrsdhfkjsdgf",
  };
  onIncrement() {
    this.setState(
      (prevState) => ({
        counter: prevState.counter + 1,
      }),
      () => console.log(this.state.counter)
    );
  }
  render() {
    return (
      <div>
        <h1>{this.state.xys}</h1>
        <h1>{this.state.value}</h1>
        <button onClick={() => this.setState(this.state.value + 1)}>
          {" "}
          Increment
        </button>
        <button onClick={() => this.setState(this.state.value - 1)}>
          {" "}
          minus
        </button>
      </div>
    );
  }
}
export default Demo;
