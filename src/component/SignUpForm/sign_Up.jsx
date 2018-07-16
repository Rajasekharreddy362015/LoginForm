import React, { Component } from 'react';

class SignUp extends Component {
    render() {
        return (
            <div className="container">

                {/* Trigger the modal with a button */}
                {/* <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">SignUp</button> */}

                {/* Modal  */}
                <div className="modal fade" id="myModal" role="dialog">
                    <div className="modal-dialog modal-sm">
                        <div className="modal-content">
                            <form className="ui form" style={{ marginTop: 10, alignItems: "center", padding: 15 }}>
                                <div style={{ marginBottom: 10 }}>
                                    <h3 style={{ color: "#f11313" }}>SignUp</h3>
                                </div>
                                <div className="col-md-12 field input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                                    <input id="name" type="name" className="form-control" name="Firstname" placeholder="FirstName" />
                                </div>
                                <div className="col-md-12 field input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                                    <input id="name1" type="name" className="form-control" name="Lastname" placeholder="LastName" />
                                </div>
                                <div className="col-md-12 field input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-envelope"></i></span>
                                    <input id="Email" type="email" className="form-control" name="Email" placeholder="Email" style={{ fontSize: 14 }} />
                                </div>
                                <div className="col-md-12 field input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-phone"></i></span>

                                    <input id="phone" type="phone" className="form-control" name="Phone" placeholder="PhoneNumber" />
                                </div>
                                <div className="col-md-12 field input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                                    <input id="password1" type="password" className="form-control" name="Password" placeholder="Password" style={{ fontSize: 14 }} />
                                </div>
                                <div className="col-md-12 field input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                                    <input id="password2" type="password" className="form-control" name="Confirm" placeholder="ConfirmPassword" style={{ fontSize: 14 }} />
                                </div>
                                <div>
                                    <button className="col-md-12 btn btn-success" type="submit">SignUp</button><br />
                                </div><br />
                            </form>
                            <div>
                                <p style={{marginLeft: 15}}>Are you a member? <a href="click here to login">click here to login</a></p>
                            </div><br /><br />

                            {/* <div id="firebaseui_container" lang="en">
                                <div class="firebaseui-container firebaseui-page-provider-sign-in firebaseui-id-page-provider-sign-in">
                                    <div class="firebaseui-card-content">
                                        <form onsubmit="return false;">
                                            <ul class="firebaseui-idp-list">
                                                <li class="firebaseui-list-item"><button class="firebaseui-idp-button mdl-button mdl-js-button mdl-button--raised firebaseui-idp-google firebaseui-id-idp-button" data-provider-id="google.com" data-upgraded=",MaterialButton">
                                                    <span class="firebaseui-idp-icon-wrapper">
                                                         <img class="firebaseui-idp-icon" alt="" src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" /> 
                                                        </span>
                                                        <span class="firebaseui-idp-text firebaseui-idp-text-long">Sign in with Google</span>
                                                        <span class="firebaseui-idp-text firebaseui-idp-text-short">Google</span></button>
                                                        </li>
                                                         <li class="firebaseui-list-item"><button class="firebaseui-idp-button mdl-button mdl-js-button mdl-button--raised firebaseui-idp-facebook firebaseui-id-idp-button" data-provider-id="facebook.com" data-upgraded=",MaterialButton">
                                                            <span class="firebaseui-idp-icon-wrapper">
                                                            <img class="firebaseui-idp-icon" alt="" src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/facebook.svg" /></span>
                                                            <span class="firebaseui-idp-text firebaseui-idp-text-long">Sign in with Facebook</span><span class="firebaseui-idp-text firebaseui-idp-text-short">Facebook</span></button>
                                                            </li>
                                                            {<li class="firebaseui-list-item"><button class="firebaseui-idp-button mdl-button mdl-js-button mdl-button--raised firebaseui-idp-twitter firebaseui-id-idp-button" data-provider-id="twitter.com" data-upgraded=",MaterialButton">
                                                                <span class="firebaseui-idp-icon-wrapper">
                                                                    <img class="firebaseui-idp-icon" alt="" src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/twitter.svg" />
                                                                    </span><span class="firebaseui-idp-text firebaseui-idp-text-long">Sign in with Twitter</span>
                                                                    <span class="firebaseui-idp-text firebaseui-idp-text-short">Twitter</span>
                                                                    </button>
                                                                    </li> 
                                                                    </ul>
                                                                    </form>
                                                                     </div> 
                                                                    </div>
                                                                    </div>
         */}

                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default SignUp;