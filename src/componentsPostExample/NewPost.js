import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class NewPost extends Component {
    constructor(props) {
        super(props)
        this.state = { // Khởi tạo 1 state content dùng để lưu dữ liệu người dùng nhập vào
            title: '',
        };
    }
    handleInputChange(e) {
        this.setState({
            title: e.target.value // Thay đổi state khi người dùng nhập data vào textbox
        });
    };
    handleSubmit(e) {
        e.preventDefault();
        const { title } = this.state
        if (title) {
            this.props.onAddPost(title);
            this.setState({
                title: '',
            });
        }
    };
    render() {
        return (
            <div>
            <form onSubmit={ this.handleSubmit.bind(this) }>
              <div className="form-group">
                <input type="text" placeholder="Content" className="form-control"
                  onChange={ this.handleInputChange.bind(this) }  value={this.state.title}/>
              
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary">Add Post</button>
              </div>
            </form>
          </div>
        );
    }
}
const mapDispatchToProps = dispatch => {
  return {
    onAddPost(post){
      dispatch(createPost(post));
    }
  };
};


export default connect(
    null,
    mapDispatchToProps
)(NewPost);