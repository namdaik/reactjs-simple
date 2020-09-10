import React, { Component } from "react";
import RecaptchaImg from '../images/recaptcha.png';
import '../css/robot2.css';

export default class Robot2 extends Component {
    constructor(props) {
        super(props);
        //Khởi tạo một ref
     }

    render() {
        return (
          <>
             <div class="robot-max-witgh">
              <div class="robot-center">
                <div class="text-center">
                    <img src={RecaptchaImg} class="image-cursor" alt="foo" />
                  <div class="clear-both"></div>
                <a class="btn success acontinue" href={this.props.link}>Tiếp tục</a>
                </div>
              </div>
            </div>
          </>
        );
    }
}

