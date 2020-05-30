import React from "react";
import {HashRouter as Router, Route} from "react-router-dom";
import loginregister from "../pages/loginregister/Loginregister"
import {Link} from "react-router-dom";
// import home from "../pages/loginregister/Home"

class MyRouter extends React.Component {
    render() {
        return(
            // 路由容器：所有的Route与Link这些组件都要放置在内部
            <Router> 
                <div>
                    {/* <Route path="/login" component={loginregister}></Route> */}
                    {/* <Route path="/" component={home}></Route> */}
                </div>
            </Router>
        )
    }
}
export default MyRouter;