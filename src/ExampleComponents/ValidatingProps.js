import React, { Component } from "react";
import PropTypes from "prop-types";

class ValidatingProps extends Component {
  constructor(props) {
    super(props);
  }
  static defaultProps = {
    number1: 1,
    number2: 2
  }
 static propTypes = {
    number1: PropTypes.number,
    number2: PropTypes.number,
    number3: PropTypes.func.isRequired
  }
  render() {
    const {number1, number2} = this.props;
    return (
      <div>
        <h1>{number1} + {number2} = {number1 + number2}</h1>
      </div>
    );
  }
   
}
export default ValidatingProps; 