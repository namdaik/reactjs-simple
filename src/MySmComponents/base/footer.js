import React from 'react'
import ReactDOM from 'react-dom'
import {connect} from 'react-redux';

const SmFooter = (props) => {
    console.log(props.settings, 1);
  return (
    <>
        <div class="footer">
            <div class="powered-link text-center">
                <p>
                    <a href={props.settings.tiny_path}>
                        {props.settings.tiny_path}
                    </a>
                </p>
            </div>
        </div>
    </>
    );
};

const mapStateToProps = state => {
    return {
        settings : state.settings
    }
}
export default connect(mapStateToProps, null)(SmFooter);