import React, { Component } from "react";
import RecaptchaImg from '../images/recaptcha.png';
import '../css/TextLinkGray.css';

export default class TextLinkGray extends Component {
    constructor(props) {
        super(props);
        //Khởi tạo một ref
     }

    render() {
        return (
          <>
             <div class="container marginb7">
		        <div class="row rowlink">
		            <div class="col-md-3 com-sm-4">
		            	{this.props.links.map((linkItem, index) => {
			                  return <h4><a href={linkItem.url}>
				                    {linkItem.name}
				                </a></h4>;
			                })
			            }
		            </div>
		        </div>
			</div>
          </>
        );
    }
}
