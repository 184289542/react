import React from "react"
import '../../assets/iconfont/iconfont.css'	//引入第三方图标
import "../../css/pulic/login.css"
import store from "../../store/store";
// import { withRouter } from 'react-router-dom';

class MyLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sevalue: "+86",
            invalue: ""
        }
    }
    changesc(e) {
        this.setState({
            sevalue: e.target.value
        })
    }
    getvalue(e) {
        this.setState({
            invalue: e.target.value
        })
    }
    getveif() {

    }
    tozhlogin() {
        // console.log(this.props)
        this.props.history.push("/zhanghao")
    }
    componentDidMount() {
        // 当直接输入地址访问此页面，底部的TabBar会使用初始值显示，这个操作是为了隐藏TabBar
        store.dispatch({ type: "HIDDEN" })
    }
    toregister() {
        this.props.history.push("/register")
    }
    goback(){
        this.props.history.goBack();
    }
    render() {
        return (
            <div className="box">
                <span onClick={this.goback.bind(this)} className="iconfont icon-jiantou-copy icon"></span>
                <span className="top">京东登陆注册</span>
                <div className="boxinput">
                    <select className="sel" value={this.state.sevalue} onChange={this.changesc.bind(this)}>
                        <option value="+86">+86</option>
                        <option>+852</option>
                        <option>+853</option>
                        <option>+886</option>
                        <option>+65</option>
                        <option>+60</option>
                        <option>+61</option>
                        <option>+64</option>
                        <option>+81</option>
                    </select>
                    <input className="myinput" value={this.state.invalue} onChange={this.getvalue.bind(this)}></input>
                </div>
                <div className="veif">
                    <input className="veifinput" placeholder="请输入收到的验证码"></input>
                    <button onClick={this.getveif.bind(this)}>获取验证码</button>
                </div>
                <div className="login">
                    <button>登 陆</button>
                </div>
                <div className="onelogin">
                    <button>一键登录</button>
                </div>
                <div className="changestate">
                    <button onClick={this.tozhlogin.bind(this)}>账号密码登陆</button>
                    <button onClick={this.toregister.bind(this)}>手机快速注册</button>
                </div>
                <div className="bto">
                    <p className="other">其它方式登陆</p>
                </div>
                <div className="bto2">
                    <span className="iconfont icon-QQ s1" ></span>
                    <span className="iconfont icon-weixin s2" ></span>
                    <span className="iconfont icon-pingguo s3" ></span>
                </div>
                <div className="bto3">
                    <span>QQ</span>
                    <span>微信</span>
                    <span>苹果</span>
                </div>
                <div className="lastbto">
                    <p>未注册过的手机号验证过后将自动创建京东账号，登陆即代表</p>
                </div>
                <div className="lastbto2">
                    <p>您已同意京东隐私协议</p>
                </div>
            </div>
        )
    }
}
export default MyLogin