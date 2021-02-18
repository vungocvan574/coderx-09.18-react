import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./Counter.css";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { number: 0 };
    this.onUpOneClicked = this.onUpOneClicked.bind(this);
    this.onDownOneClicked = this.onDownOneClicked.bind(this);
  }

  onUpOneClicked() {
    this.setState({ number: this.state.number + 1 });
  }

  onDownOneClicked() {
    this.setState({ number: this.state.number - 1 });
  }

  render() {
    const { number } = this.state;

    let { style } = { display: "block" };

    console.log("Counter render");
    return (
      <div className="container">
        <h2>Counter</h2>
        <div className="container-fluid d-flex">
          <button
            className="btn-primary rounded mx-3"
            onClick={this.onDownOneClicked}
          >
            -
          </button>
          <span style={style}>
            <h5>Recorded: {number}</h5>
          </span>
          <button
            className="btn-primary rounded mx-3"
            onClick={this.onUpOneClicked}
          >
            +
          </button>
        </div>
      </div>
    );
  }

  componentDidMount() {
    console.log("Counter did mount");
  }

  componentDidUpdate() {
    console.log("Counter did update");
  }

  componentWillUnmount() {
    console.log("Counter will unmount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.number === nextState.number) {
      return false;
    }
    return true;
  }
}

export default Counter;
