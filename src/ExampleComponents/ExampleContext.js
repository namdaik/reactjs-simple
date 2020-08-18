import React, { Component } from "react";


const MessageContext = React.createContext();

class ComponentChau extends React.Component {
  render() {
    return <h1>Ông bảo là : "{this.context}"</h1>;
  }
}

const ComponentCha = (props) => {
  return <ComponentChau {...props} />;
};

ComponentChau.contextType = MessageContext; 

const ComponentOng = () => {
  const message = "Vào freetuts.net học lập trình";
  return (<MessageContext.Provider value={message}>
      <ComponentChau />
    </MessageContext.Provider>);
};

export default ComponentOng;