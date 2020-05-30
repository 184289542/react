import React from "react";
import {HashRouter as Router, Route} from "react-router-dom";


class MyRouter extends React.Component {
    render() {
        return(
            // 路由容器：所有的Route与Link这些组件都要放置在内部
            <Router> 
                <div>
                    // <Route path="/" exact component={IndexPage}></Route>
                </div>
            </Router>
        )
    }
}
export default MyRouter;