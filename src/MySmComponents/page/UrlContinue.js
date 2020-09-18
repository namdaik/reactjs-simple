import React, { Component } from "react";
//Import kết nối tới react-redux
import {connect} from 'react-redux';
//Import action dùng để dispatch

import Robot2 from '../units/Robot2';
import TextLinkGray from '../units/TextLinkGray';
import Breadcrumb from '../units/Breadcrumb';
import FakeContentUrl from '../../module/fake-content/FakeContentUrl';
import {actGetUrlMySmRequest} from '../../actions/mySm';

class UrlContinue extends Component {
    constructor(props) {
        super(props);
        //Khởi tạo một ref
     }

    componentDidMount() {
        this.props.actGetUrlMySmRequest();
    }

    renderHeadings(Heading) {
        setTimeout(()=> {
            console.log(this, 5);
        }, 8000);
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
function mapStateToProps(state) {
    console.log(state,1313);
    return {
        mysm : state
    };
}
// const mapStateToProps = state => {
//     console.log(state,44);
//     return {
//         mysm : state.mysm
//     }
// }

export default connect(mapStateToProps, {actGetUrlMySmRequest})(UrlContinue);
