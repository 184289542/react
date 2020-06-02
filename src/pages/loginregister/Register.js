import React from "react";
import "../../css/pulic/register.css"
import axios from "axios"

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sverif: "",
            tel:"",
            password:"",
            verif:""
        }
    }
    componentDidMount() {
        this.getveif()
    }
    goback() {
        this.props.history.goBack()
    }
    getveif() {
        axios("http://localhost:7001/verif")
            .then((res) => {
                // console.log(res.data.data)
                this.setState({
                    sverif: res.data.data
                })
            })
    }
    register(){
        let url="http://localhost:7001/register"
				let params={tel:this.state.tel,password:this.state.password,verif:this.state.verif}
				axios.post(url,params)
				.then((res)=>{
					if(res.data.code==2000){
					   alert(res.data.info)
					   this.props.history.replace("/zhanghao")//注册成功跳转到登陆模块
					}
					else{
					    alert(res.data.info)
					}
				})
    }
    gettel(e){
        this.setState({
            tel:e.target.value
        })
    }
    getpasd(e){
        this.setState({
            password:e.target.value
        })
    }
    getverif(e){
        this.setState({
            verif:e.target.value
        })
    }
    render() {
        return (
            <div className="box">
                <span onClick={this.goback.bind(this)} className="iconfont icon-jiantou-copy icon"></span>
                <span className="top">京东注册</span>
                <div className="registerbox">
                    <input value={this.state.tel} className="in1" placeholder="请输入手机号" onChange={this.gettel.bind(this)}></input><br />
                    <input value={this.state.password} className="in2" placeholder="请输入6位数字字母组合密码" onChange={this.getpasd.bind(this)}></input><br />
                    <input value={this.state.verif} className="in3" placeholder="请输入验证码" onChange={this.getverif.bind(this)}></input><button onClick={this.getveif.bind(this)} dangerouslySetInnerHTML={{__html: this.state.sverif}}></button>
                </div>
                <div className="bjm">
                    <button className="btt" onClick={this.register.bind(this)}>注册</button>
                </div>
            </div>
        )
    }
}
export default Register