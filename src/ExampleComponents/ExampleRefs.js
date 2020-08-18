import React, { Component } from "react";

class ExampleRefs extends Component {
  constructor(props) {
    super(props);
    //Khởi tạo một ref
    this.myRef = React.createRef();
    this.ref = React.createRef();
    this.ref2 = React.createRef();
  }
  focusInput() {
    this.ref2.current.focus();
  }
  
  render() {
    return (
      <div style={{margin: "5%"}}>
        <input name="email"
        ref={this.myRef} type="text" />
        <br />
        <MyInput name="email"  ref={this.ref} />
        <br />
        <MyInput2 name="email"  ref={this.ref2} />
        <br />
        <button onClick={this.focusInput.bind(this)}>Focus</button>
      </div>
    );
  }
   
}
export default ExampleRefs;

const MyInput = React.forwardRef((props, ref) => {
   return(<input name={props.name} ref={ref} />);
});

class WrappedComponent extends Component {
  render() {
    return (
      <input 
        type="text"
        name={this.props.name}
        ref={this.props.innerRef}
       />
    )
  }
}

const MyInput2 = React.forwardRef((props, ref) => {
  return (<WrappedComponent innerRef={ref} {...props} />);
});