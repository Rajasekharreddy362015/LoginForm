import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import LoginForm from './component/LoginForm/login_form'
// import RoutingData from './component/SignUpForm/routing'
import SignUp from './component/SignUpForm/sign_Up'
import ForgetPassword from './component/LoginForm/forget_Password'

class App extends Component {
  render() {
    return (
      <div className="ui container">
         <LoginForm /> 
        {/* <RoutingData /> */}
        <SignUp />
        <ForgetPassword />
      </div>
    );
  }
}

export default App;
