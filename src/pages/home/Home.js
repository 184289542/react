import React from "react"
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import MyFenLei from "./MyFenLei.js"
import MyGouWuChe from "./MyGouWuChe.js"
import MyHome from "./MyHome.js"
import MyLogin from "./MyLogin.js"
import "../../css/home/Home.css"
import Login from "../../pages/loginregister/Login"
import Register from "../../pages/loginregister/Register"
import ProductShow from "../product/ProductShow.js"
// import store from "../../store/index"
import Mine from "../loginregister/Mine"
import Authoroutr from "../../components/Authorrouter"
import ProductDetails from "../product/ProductDetails.js"

class Home extends React.Component {
    componentDidMount(){
        
            // window.location.reload([true])
        
    }
    render() {
        return (
            <div >
                <div>
                    <Router>
                        <div className="tabarcss">
                            <Link to="/myhome">首页</Link>
                            <Link to="/fenlei">分类</Link>
                            <Link to="/gouwuche">购物车</Link>
        {localStorage["isLogin"]?<Link to="/minepa">{localStorage["noLogin"]}</Link>:<Link to="/login">未登陆</Link>}
                        </div>

                        <Switch>
                            <Route path="/myhome" component={MyHome}></Route>
                            <Route path="/fenlei" component={MyFenLei}></Route>
                            <Route path="/gouwuche" component={MyGouWuChe}></Route>
                            <Route path="/login" component={MyLogin}></Route>
                            <Route path="/zhanghao" component={Login}></Route>
                            <Route path="/register" component={Register}></Route>
                            <Route path="/product" component={ProductShow}></Route>
                            <Authoroutr path="/minepa" component={Mine}></Authoroutr>
                            {/*通过重定向显示默认的子组件,先有path再有重定向*/}
                            <Redirect to="/myhome"></Redirect>
                        </Switch>
                    </Router>
                </div>
            </div>
        )
    }
}
export default Home