import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";

class ComponentApi extends Component {
  constructor(props) {
    super(props);
    this.state = { number2: 1 };
  }
  static defaultProps = {
    number1: 1,
    number2: 2
  }
  getNumber2(){
      this.setState({
              number2: Math.random()
      });
   }
  reloadComponent(){
      this.getNumber2();
  }
  changeColor() {
    let h1 = document.getElementsByTagName('h1')[0];
    ReactDOM.findDOMNode(h1).style.color = "red";
  }
 static propTypes = {
    number1: PropTypes.number,
    number2: PropTypes.number,
    // number3: PropTypes.func.isRequired
  }
  render() {
    const {number1} = this.props;
    return (
      <div>
        <h1>{number1} + {this.state.number2} = {number1 + this.state.number2}</h1>
        <button onClick={() => this.reloadComponent()}>Reload</button>
        <button onClick={() => this.changeColor()}>changeColor</button>
      </div>
    );
  }
   
}
export default ComponentApi; 