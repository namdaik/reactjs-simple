import React, { Component } from "react";
//Import kết nối tới react-redux
import {connect} from 'react-redux';
//Import action dùng để dispatch
import {getSettings} from '../actions/index';
import Footer from './base/footer';
import Robot2 from './units/Robot2';
import TextLinkGray from './units/TextLinkGray';
import Breadcrumb from '../units/Breadcrumb';

class UrlContinue extends Component {
    constructor(props) {
        super(props);
        //Khởi tạo một ref
     }

    render() {
        return (
          <>
            <Robot2 link='dsds'/>
            <Breadcrumb breadcrumb={[{link : 1, name: 2}]} />
            {this.props.image
                <img src={this.props.image} alt="{{ $url->name }}">
            }
            {this.props.h3.map((h3Item, index) => {
                  this.props.children(person);
                  return <h3 key={index}>{hItem}</h3>;
                })
            }
            {this.props.h4.map((hItem, index) => {
                  this.props.children(person);
                  return <h4 key={index}>{hItem}</h4>;
                })
            }
            <TextLinkGray links={[{url : "qdq", name: "2323"}]}/>
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
 

export default connect(null, mapDispatchToProps)(UrlContinue);
