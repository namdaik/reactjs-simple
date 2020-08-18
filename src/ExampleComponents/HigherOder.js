import React, { Component } from "react";
import WithHoverOpacity from './WithHoverOpacity';

const Image1 = (props) => {
  return <img src="https://freetuts.net/public/logo/logo.png" alt="freetuts" />;
};
const Image2 = (props) => {
  return (
    <img
      src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512"
      alt="facebook"
    />
  );
};
const ImageWithHoverOpacity1 = WithHoverOpacity(Image1);
const ImageWithHoverOpacity2 = WithHoverOpacity(Image2);

class HigherOder extends Component {
  constructor(props) {
    super(props);
    //Chỉ định một state
    this.state = { index: 1 };
  }
  render() {
     return (
        <>
          <ImageWithHoverOpacity1 />
          <ImageWithHoverOpacity2 />
        </>
      );
  }
}
export default HigherOder; 