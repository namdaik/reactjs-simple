import React, { Component } from "react";

class ExampleForm extends Component {
  constructor(props) {
    super(props);
     //Khởi tạo inital state
    this.state = {
      email : ''
    };
  }
   changeInputValue(event){
       // Cập nhật state
      this.setState({
        [event.target.name]: event.target.value
      });
  }

  submitForm(e) {
    e.preventDefault();
    console.log(this.state);
    console.log('form not submit !!');

    //Gọi hàm validationForm() dùng để kiểm tra form
    const validation = this.validationForm()
 
    //Kiểm tra lỗi của input trong form và hiển thị
    if (validation.error) {
      alert(validation.msg)
    }else{
      alert('Submit form success')
    }
  }

  validationForm() {
    let returnData = {
      error : false,
      msg: ''
    }
    const {email, password} = this.state
    //Kiểm tra email
    const re = /\S+@\S+\.\S+/;
    if (!re.test(email)) {
      returnData = {
        error: true,
        msg: 'Không đúng định dạng email'
      }
    }
    //Kiểm tra password
    if (password.length < 8) {
      returnData = {
        error: true,
        msg: 'Mật khẩu phải lớn hơn 8 ký tự'
      }
    }
    return returnData;
  }

  render() {
    const {number1} = this.props;
    return (
      <div style={{margin: "5%"}}>
        <p>UnSubmit Form</p>
          <form onSubmit = {(event) => this.submitForm(event)}>
            <div className="form-group">
              <label htmlFor="pwd">Password:</label>
              <input
                type="email"
                className="form-control"
                name="email"
                onChange={e => this.changeInputValue(e)}
              />
            </div>
           <div className="form-group">
            <label htmlFor="pwd">Password:</label>
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Enter password"
              onChange={e => this.changeInputValue(e)}
            />
          </div>

              <button type="submit">Submit</button>
          </form>
         <hr />  
      </div>
    );
  }
   
}
export default ExampleForm; 