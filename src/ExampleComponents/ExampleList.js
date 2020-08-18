import React, { Component } from "react";

class ExampleList extends Component {
  constructor(props) {
    super(props);
     //Khởi tạo inital state
      this.state = { myList : [
      {
        id : 'p',
        name : 'php'
      },
      {
        id : 'j',
        name : 'javascript'
      },
      {
        id : 'py',
        name : 'python'
      },
      {
        id : 'c',
        name : 'C++'
      },
    ]
  };
  }

  render() {
    const listItems = this.state.myList.map((item) =>
    <li key = {item.id}>{item.name}</li>
  );
    return (
      <ul>{listItems}</ul>
    );
  }
   
}
export default ExampleList; 