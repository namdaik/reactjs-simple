import React, { Component } from "react";

class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
       date : new Date(),
       clickedStatus: false,
       list:[]
     };
  }
  componentWillMount() {
      console.log('Component will mount!')
   }
  componentDidMount() {
      console.log('Component did mount!')
      this.getList();
   }
  getList=()=>{
   /*** method to make api call***/
   fetch('https://fonts.googleapis.com/css?family=Roboto%20Condensed')
      .then(response => response)
      .then(data => this.setState({ list:data }));
  }
  shouldComponentUpdate(nextProps, nextState){
     console.log('should Component Update!');
     return this.state.list!== nextState.list
    }
   componentWillUpdate(nextProps, nextState) {
      console.log('Component will update!');
   }
  componentDidUpdate(prevProps, prevState) {
      console.log('Component did update!')
   }
  componentWillUnmount() {
    console.log('component will unmount')
  }
  render() {
      return (
         <div>
            <h3>Mounting Lifecycle Methods</h3>
         </div>
      );
   }
}
export default LifeCycle; 