import React from "react";
import {HashRouter as Router, Route} from "react-router-dom";
import Login from "../pages/loginregister/Login"
// import {Link} from "react-router-dom";
import Home from "../pages/home/Home.js"


class MyRouter extends React.Component {
    render() {
        return(
            // 路由容器：所有的Route与Link这些组件都要放置在内部
            <Router> 
                <div>

                    {/* <Route path="/login" component={loginregister}></Route> */}
                    {/* <Route path="/" component={home}></Route> */}
                    <Route path="/" component={Home}></Route>
                    <Route path="/zhanghao" component={Login}></Route>
                </div>
            </Router>
        )
    }
}
export default MyRouter;