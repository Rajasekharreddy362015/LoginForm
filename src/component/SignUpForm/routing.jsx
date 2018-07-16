import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import SignUp from './sign_Up'
class RoutingData extends Component {
    render() {
        return (

            <Router>
                <div>
                     {/* <div>
                          <Link to={"/SignUp"} target="_blank">SignUp</Link>  
                        </div>  */}
                    <div>
                        <Switch>
                            <Route exact path="/SignUp" component={SignUp}  />
                        </Switch>
                    </div>
                </div>
            </Router>

        );
    }
}

export default RoutingData;