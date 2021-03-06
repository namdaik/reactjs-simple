import React, { Component } from "react";
//Import kết nối tới react-redux
import {connect} from 'react-redux';
//Import action dùng để dispatch
import {getSettings} from '../actions/index';
import Footer from './base/footer';
import TextLinkGray from './units/TextLinkGray';
import Breadcrumb from './units/Breadcrumb';

import UrlContinuePage from './page/UrlContinue';

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
	      	<UrlContinuePage />
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