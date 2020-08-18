import React, { Component } from "react";

class ExampleEvents extends Component {
  constructor(props) {
    super(props);
     //Khởi tạo inital state
    this.state = {
      isShow: true,
      textareaChange: "",
      buttonClick : "",
      mouseOver: ""
    };
    //bind this cho function mouseOver để  tránh gặp lỗi 
    //không tồn tại biến this.
    this.mouseOver = this.mouseOver.bind(this);
  }

  changeText(e) {
    this.setState({
      textareaChange: e.target.value
    });
  }

  mouseOver() {
    this.setState({
      mouseOver: this.state.mouseOver + "mouseOver..."
    });
  }

  setStateEvent(stateName, text) {
    this.setState({
      [stateName]: text,
    });
  }

  toggleMSG() {
      this.setState({
        isShow: !this.state.isShow
      });
  }

  submitForm(e) {
    e.preventDefault();
    console.log('form not submit !!');
  }
  render() {
    return (
      <div style={{margin: "5%"}}>
        <p>UnSubmit Form</p>
          <form onSubmit = {(e) => this.submitForm(e)}>
              <button type="submit">Submit</button>
          </form>
         <hr />
        <div>
         <b>Nội dung : {this.state.isShow ? "Namdaik" : "Not Namdaik"}</b>  <br />
          <button onClick={this.toggleMSG.bind(this)}>
            {this.state.isShow ? "HIDE" : "SHOW"}
          </button>
        </div>

        <hr />
        
        <div>
          <p>onClick</p>
          <button
            onClick={() => this.setStateEvent('buttonClick', this.state.buttonClick + ",onClick...")}
          >
            Click me..
          </button>{" "}
         
          <p>
            button: <code>{this.state.buttonClick}</code>
          </p>
          <hr />
          <textarea onChange={e => this.setStateEvent('textareaChange', e.target.value)} placeholder="nhập cái gì đó..."></textarea>
          <p>
            textarea: <code>{this.state.textareaChange}</code>
          </p>
   
          <hr />
          <h6 onMouseOver={() =>this.setStateEvent('mouseOver', this.state.mouseOver + ',mouseOver...')}>Di chuột vào đêyyyy nè :v</h6>
          <p>
            mouseOver: <code>{this.state.mouseOver}</code>
          </p>
        </div>

      </div>
    );
  }
   
}
export default ExampleEvents; 