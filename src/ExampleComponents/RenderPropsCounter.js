import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count : 0
    };
  }
  increment() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  //Hàm này sẽ GIẢM giá trị của số
  decrement() {
    this.setState({
      count: this.state.count - 1,
    });
  }
  render() {
    return (
      <>
        {
          this.props.render({
          count: this.state.count,
          increment: this.increment.bind(this),
          decrement: this.decrement.bind(this)
        })
      }
      </>
    );
  }
   
}

class RenderPropsCounter extends Component {
  constructor(props) {
    super(props);
}
  render() {
    return (
      <Counter render={(data) => {
        const { count, increment, decrement } = data;
        return (
          <>
            <p>Giá trị {count}</p>
            <button onClick={increment}>Tăng</button>
            <button onClick={decrement}>Giảm</button>
          </>
          );
      }}>
      </Counter>
    );
  }
   
}
export default RenderPropsCounter; 