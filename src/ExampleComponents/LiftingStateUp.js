import React, { Component } from "react";

class LiftingStateUp extends Component {
  constructor(props) {
    super(props);
     //Khởi tạo inital state
    this.state = {
      usd: 0,
      vnd: 0,
    };
  }

  handleChange = (data) => {
    this.setState(data);
  };

  render() {
    return (
      <div style={{margin: "3%"}}>
        <USDtoVND onHandleChange={this.handleChange} value={this.state.usd} />
        <VNDtoUSD onHandleChange={this.handleChange} value={this.state.vnd} />
        <hr />
        <code>freetuts.net</code>
      </div>  
    );
  }
   
}
export default LiftingStateUp; 

const USDtoVND = function (props) {
  const convert = function (usd) {
    return usd * 23632;
  };
  function setCurrency (event) {
    const usd = event.target.value;
    const vnd = convert(usd);
    props.onHandleChange({
      usd,
      vnd,
    });
  }
  return (
    <div>
      <span>USD </span>
      <input
        onChange={(e) => setCurrency(e) }
        value={props.value}
      />
    </div>
  );
};
const VNDtoUSD = function (props) {
  const convert = function (vnd) {
    return vnd / 23632;
  };

  function setCurrency (event) {
    const vnd = event.target.value;
    const usd = convert(vnd);
    props.onHandleChange({
      usd,
      vnd,
    });
  }
  return (
    <div>
      <span>VND </span>
      <input
        onChange={(e) => setCurrency(e) }
        value={props.value}
      />
    </div>
  );
};
