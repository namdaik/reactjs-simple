import React, { Component } from "react";
//Import kết nối tới react-redux
import {connect} from 'react-redux';
//Import action dùng để dispatch
import {getSettings} from '../actions/index';
import Footer from './base/footer';

class MySmIndex extends Component {
	constructor(props) {
	    super(props);
	    //Khởi tạo một ref
	 }
	componentDidMount() {
        var { settings } = this.props;
        if (!settings) {
            this.props.getSettings();
        }
    }
	render() {
	    return (
	      <>
	        <Footer />
	      </>
	    );
	}
}

//Gán dispatch thành props
const mapDispatchToProps = (dispatch) =>  {
  return {
    getSettings: () => {
      dispatch(getSettings());
    }
  }
}
 

export default connect(null, mapDispatchToProps)(MySmIndex);