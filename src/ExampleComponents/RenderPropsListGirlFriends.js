import React, { Component } from "react";

class ShowGirlFriends extends Component {
  constructor(props) {
    super(props);
    //Chỉ định một state
  }

  render() {
    return (
      <ul>
        {this.props.listGrilFriends.map((person, index) => {
          this.props.children(person);
          return <li key={person.id}>{person.name}</li>;
        })}
      </ul>
    );
  }
   
}

class RenderPropsListGirlFriends extends Component {
  constructor(props) {
    super(props);
    //Chỉ định một state
    this.state = {myGirlFriends : [
        {
          id: 1,
          name: "Khanh Huyen",
          email: "khanhhuyen123@freetuts.net",
        },
        {
          id: 2,
          name: "Nguyen Hang",
          email: "nguyenhang3dzas@freetuts.net",
        },
        {
          id: 3,
          name: "Pham Uyen",
          email: "phamuyenz@freetuts.net",
        }
      ]
    };
}
  render() {
    return (
      <ShowGirlFriends listGrilFriends={this.state.myGirlFriends}>
        {(data) => {
          console.log(data);
        }}
      </ShowGirlFriends>
    );
  }
   
}
export default RenderPropsListGirlFriends; 