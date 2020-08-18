import React, { useState } from 'react';
//Import kết nối tới react-redux
import {connect} from 'react-redux';
//Import action dùng để dispatch
import {actAddNote} from '../actions/index';

function ExampleRedux(props) {
  const [note, setNote] = useState('namdaik');
 const handleSubmit = (e) =>{
  setNote('namdaik2');
    e.preventDefault();
   {
      props.addNote(note);
    }
  };
  return (
    <>
      <p>{note}</p> 
         <button onClick={e => handleSubmit(e) }>
        Click me
      </button>
    </>
  );
}
 
//Gán dispatch thành props
const mapDispatchToProps = (dispatch) =>  {
  return {
    addNote: (content) => {
      console.log(content);
      dispatch(actAddNote(content))
    }
  }
}
 
//Gán giá trị của state thành props
const mapStateToProps = (state, ownProps) => {
  return {
    note: state.note
  }
}
 
//Export component với két nối redux.
export default connect(mapStateToProps, mapDispatchToProps)(ExampleRedux);