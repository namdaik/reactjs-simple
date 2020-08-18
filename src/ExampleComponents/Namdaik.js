import React, { Component } from "react";
class Namdaik extends Component {
  constructor(props) {
    super(props);
    //Chỉ định một state
    this.state = { website: "namdak.com" };
  }
  render() {
    return (
      <div>
        <h1>Hello {this.props.name} ! I am a class component of Namdaik </h1>
      </div>
    );
  }
}
export default Namdaik; 