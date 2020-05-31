import React from "react"
import {BrowserRouter as Router, Route,Link,Switch} from "react-router-dom";
import MyFenLei from "./MyFenLei.js"
import MyGouWuChe from "./MyGouWuChe.js"
import MyHome from "./MyHome.js"
import MyJingXi from "./MyJingXi.js"
import MyLogin from "./MyLogin.js"
import "../../css/home/Home.css"
import Login from "../../pages/loginregister/Login"

class Home extends React.Component {
    render(){
        return (
            <div>
                <div>
                    <Router>
                            <div className="tabarcss">
                                <Link to="/myhome">首页</Link>
                                <Link to="/fenlei">分类</Link>
                                <Link to="/jingxi">京喜</Link>
                                <Link to="/gouwuche">购物车</Link>
                                <Link to="/login">未登录</Link>
                            </div>

                            <Switch>
                                <Route path="/myhome"  component={MyHome}></Route>
                                <Route path="/fenlei"  component={MyFenLei}></Route>
                                <Route path="/jingxi"  component={MyJingXi}></Route>
                                <Route path="/gouwuche"  component={MyGouWuChe}></Route>
                                <Route path="/login"  component={MyLogin}></Route>
                                <Route path="/zhanghao" component={Login}></Route>
                            </Switch>
                    </Router>
                </div>
            </div>
        )
    }
}
export default Home