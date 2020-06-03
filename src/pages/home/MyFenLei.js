import React from "react"
import {BrowserRouter as Router, Route,Link,Switch} from "react-router-dom";
import ReMen from "../../components/fenlei/ReMen.js"
import ShouJi from "../../components/fenlei/ShouJi.js"
import "../../css/myenlei/MyFenLei.css"

class MyFenLei extends React.Component {
    render(){
        return (
            <div>
                <div className="fenlei_css">
                    <Router>
                        <div className="fenlei_css_router">
                            <Link to="/fenlei/remen">热门推荐</Link>
                            <Link to="/fenlei/shouji">手机数码</Link>
                            <Link to="/fenlei/diannao">电脑办公</Link>
                            <Link to="/fenlei/jiayon">家用电器</Link>
                            <Link to="/fenlei/jisheng">计生情趣</Link>
                            <Link to="/fenlei/meizhuang">美妆护肤</Link>
                        </div>
                        <div className="fenlei_css_component">
                            <Switch>
                                <Route path="/fenlei/remen" component={ReMen}></Route>
                                <Route path="/fenlei/shouji" component={ShouJi}></Route>
                            </Switch>
                        </div>
                    </Router>
                </div>
            </div>
        )
    }
}
export default MyFenLei