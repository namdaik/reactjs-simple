import React, { Component } from "react";

class StateSample extends Component {
  constructor(props) {
    super(props);
    //Chỉ định một state
    this.state = { index: 1 };
  }
  setStateIndex(number){
      this.setState({
              index: this.state.index + number
      });
   }
  render() {
    return (
      <div>
        <p>Giá trị {this.state.index}</p>
        <button
          onClick={() => {this.setStateIndex(1)}}
        >
          Tăng
        </button>

        <button
          onClick={() => {this.setStateIndex(-1)}}

        >
          Giảm
        </button>
      </div>
    );
  }
   
}
export default StateSample; 