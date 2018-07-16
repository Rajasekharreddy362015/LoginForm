import React, { Component } from 'react';
import { Form } from 'semantic-ui-react'
// import Img from 'react-image'
// import SignUp from './sign_Up'
class LoginForm extends Component {
    render() {
        return (
            <div>
                <div>
                    <Form className="ui form" style={{ marginTop: 10, alignItems: "center" }}>
                        <div style={{ marginBottom: 10 }}>
                            <h3 style={{ color: "#1a69a4" }}>Login</h3>
                        </div>
                        <div className="col-md-4 field input-group">
                            <span className="input-group-addon"><i className="glyphicon glyphicon-envelope"></i></span>
                            {/* <span class="glyphicon glyphicon-envelope form-control-feedback"></span> */}
                            <input id="email" type="text" className="form-control" name="email" placeholder="Email" />
                        </div>
                        <div className="col-md-4 field input-group">
                            <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                            <input id="password" type="password" className="form-control" name="password" placeholder="Password" />
                        </div>
                        <div className="checkbox">
                            <label><input type="checkbox" /><p style={{ marginTop: 4 }}> Remember me</p></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span data-toggle="modal" data-target="#forget_password" style={{color: "#1212cc"}}>Forget Password ?</span> 
                        </div>
                        <div>
                         
                    </div>
                        <div>
                            <button className="col-md-4 btn btn-primary" type="submit">Login</button><br />
                        </div><br /><br />
                    </Form>
                    <div>
                        <p>Not a Number yet? <button type="button" style={{background:"#218838",color: "white",border: 0,borderColor: "#218838"}} data-toggle="modal" data-target="#myModal">SignUp</button></p>
                    </div><br />
                    <div className="col-md-4 ui horizontal divider block_or">OR </div><br /><br />
                    <div>
                        <button className="col-md-4 btn btn-default" style={{ background: "#fff" }} type="submit">
                            {/* <img alt="" src="E:\Collabera-React\login-form\src\Images\gmail.png" class="ui avatar image" /> */}
                            {/* <img src='../Images/gmail.png' alt={'img'} /> */}
                            <a href="https://www.google.com/" style={{ color: "#757575", textDecoration: "none" }}>Sign in with Google</a>
                        </button><br />
                    </div><br />
                    <div>
                        <button className="col-md-4 btn btn-default" style={{ background: "#3b5998" }} type="submit">
                            <a href="https://www.facebook.com/" style={{ color: "#fff", textDecoration: "none" }}>Sign in with Facebook</a>
                        </button><br />
                    </div><br />
                    <div>
                        <button className="col-md-4 btn" style={{ background: "#55acee" }} type="submit">
                            <a href="https://www.twitter.com/" style={{ color: "#fff", textDecoration: "none" }}>Sign in with Twitter</a>
                        </button><br />
                    </div><br />
                </div>

            </div>



        );
    }
}

export default LoginForm;