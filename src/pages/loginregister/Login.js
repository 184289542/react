import React from "react"
import '../../assets/iconfont/iconfont.css'	//引入第三方图标
import "../../css/pulic/login.css"
// import { withRouter } from 'react-router-dom';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            invalue: ""
        }
    }
    getvalue(e) {
        this.setState({
            invalue: e.target.value
        })
    }
    getveif() {

    }
    tozhlogin(){
        // console.log(this.props)
        this.props.history.push("/zhanghao")
    }
    render() {
        return (
            <div className="box">
                <span className="iconfont icon-jiantou-copy icon"></span>
                <span className="top">京东登陆注册</span>
                <div className="boxinput">
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
                    <button>手机快速注册</button>
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
export default Login