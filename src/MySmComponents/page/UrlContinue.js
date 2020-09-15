import React, { Component } from "react";
//Import kết nối tới react-redux
import {connect} from 'react-redux';
//Import action dùng để dispatch

import Robot2 from '../units/Robot2';
import TextLinkGray from '../units/TextLinkGray';
import Breadcrumb from '../units/Breadcrumb';
import FakeContentUrl from '../../module/fake-content/FakeContentUrl';

class UrlContinue extends Component {
    constructor(props) {
        super(props);
        //Khởi tạo một ref
     }

    componentDidMount() {
        var fakeContent = new FakeContentUrl();
        fakeContent.parseAll();
    }

    renderHeadings(Heading) {
        if (!this.props[Heading]){
            return '';
        }
        return  this.props[Heading].map((hItem, index) =>{
          return <h1 key={index.toString()}>{hItem}</h1>;
        })(Heading);      
    }

    render() {
        return (
          <>
            <Robot2 link='dsds'/>
            <Breadcrumb breadcrumb={[{link : 1, name: 2}]} />
            {this.props.image !== 'Underfired' &&
                <img src={this.props.image} alt="" />
            }
            {this.renderHeadings('h3')}
            {this.renderHeadings('h4')}
            <TextLinkGray links={[{url : "qdq", name: "2323"}]}/>
          </>
        );
    }
}

//Gán dispatch thành props
const mapDispatchToProps = (dispatch) =>  {
}
 

export default connect(null, mapDispatchToProps)(UrlContinue);
