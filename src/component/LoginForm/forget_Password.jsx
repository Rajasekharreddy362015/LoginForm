import React, {Component} from 'react';

class ForgetPassword extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    {/* <!-- Trigger the modal with a button --> */}
                     {/* <a href="ForgetPassword" data-toggle="modal" data-target="#myModal">ForgetPassword</a>  */}

                    {/* <!-- Modal --> */}
                    <div className="modal" id="forget_password" role="dialog">
                        <div className="modal-dialog">

                            {/* <!-- Modal content--> */}
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    <h4 className="modal-title" style={{color: "#d75f26"}}>Forget Password</h4>
                                </div>
                                <div className="modal-body">
                                    <p>Please provide email ID for password reset :</p>

                                    <input type="email" placeholder="Add here" style={{width: "100%",borderRadius: 10,padding: 5}} />
                                </div>
                                <div>
                                <button type="button" className="btn btn-warning" style={{color: "#201c1c", marginBottom:10, marginLeft:18}}>Submit
                                    <i className="glyphicon glyphicon-chevron-right"></i>
                                </button>
                                </div>


                                <div className="modal-footer">
                                    <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default ForgetPassword;