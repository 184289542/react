import React from "react"
import '../../assets/iconfont/iconfont.css'	//引入第三方图标
import "../../css/pulic/login2.css"
import axios from "axios"
import store from "../../store/index";
// import { withRouter } from 'react-router-dom';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tel: "",
            password: "",
            ispassword: "password",
            iseye: "iconfont icon-yanjing1"
        }
    }
    componentDidMount() {
        // 订阅store改变事件
        store.subscribe(this.update.bind(this));
    }
    update() {

        this.setState(store.getState())

    }
    componentWillUnmount = () => {
        this.setState = (state,callback)=>{
          return;
        };
    }    
    gettel(e) {
        this.setState({
            tel: e.target.value
        })
    }
    getpasd(e) {
        this.setState({
            password: e.target.value
        })
    }
    getveif() {

    }
    tozhlogin() {
        // console.log(this.props)
        this.props.history.push("/login")
    }
    changeeye() {
        if (this.state.ispassword == "password") {
            this.setState({
                iseye: "iconfont icon-yanjing",
                ispassword: "text"
            })
        } else {
            this.setState({
                iseye: "iconfont icon-yanjing1",
                ispassword: "password"
            })
        }
    }
    toregister() {
        this.props.history.push("/register")
    }
    goback() {
        this.props.history.goBack()
    }
    changedata(){
        store.dispatch({
            type: "REDUCE",
            data: "个人中心"
        });
    }
    login() {
        let url = "http://localhost:7001/login"
        let params = { tel: this.state.tel, password: this.state.password }
        axios.post(url, params)
            .then((res) => {
                if (res.data.code == 2000) {
                    alert(res.data.info)
                    // window.localStorage.setItem("tel", res.data.sta)//设置前端缓存
                    localStorage["noLogin"]="个人中心"
                    localStorage["isout"]="退出"
                    localStorage["isLogin"]=true
                    // this.changedata()
                    this.props.history.replace("/myhome")//跳转到首页
                    window.location.reload([true])
                   

                }
                else {
                    alert(res.data.info)
                }

            })
    }
    render() {
        return (
            <div className="box">
                <span onClick={this.goback.bind(this)} className="iconfont icon-jiantou-copy icon"></span>
                <span className="top">京东登陆注册</span>
                <div className="boxinput">
                    <input className="myinput2" placeholder="用户/邮箱/手机" value={this.state.tel} onChange={this.gettel.bind(this)}></input>
                </div>
                <div className="veif">
                    <input type={this.state.ispassword} className="veifinput" placeholder="请输入密码" value={this.state.password} onChange={this.getpasd.bind(this)}></input>
                    <button onClick={this.getveif.bind(this)}>忘记密码</button>
                </div>
                <div className="login">
                    <button onClick={this.login.bind(this)}>登 陆</button>
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
                <div className="iseye" onClick={this.changeeye.bind(this)}>
                    <i className={this.state.iseye}></i>
                </div>
            </div>
        )
    }
}
export default Login