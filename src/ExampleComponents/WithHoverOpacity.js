import React, { Component } from "react";

const WithHoverOpacity = (ImageComponent) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        opacity: 1,
      };
      //bind this
      this.onMouseLeave = this.onMouseLeave.bind(this);
      this.onMouseEnter = this.onMouseEnter.bind(this);
    }
    //Được gọi khi chuột được di vào
    onMouseEnter() {
      this.setState({
        opacity: 0.5,
      });
    }
    //Được gọi khi chuột được rời đi
    onMouseLeave() {
      this.setState({
        opacity: 1,
      });
    }
    render() {
      return (
        <div
          style={{ opacity: this.state.opacity }}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
        >
          <ImageComponent />
        </div>
      );
    }
  };
};

export default WithHoverOpacity;