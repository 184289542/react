import React from "react"
import { SearchBar } from 'antd-mobile';
import "../../css/home/Nav.css"
import axios from "axios"
import { withRouter } from 'react-router-dom';

class Nav extends React.Component {
  state = {
    value: '显示gtx系列',
  };
  componentDidMount() {
    this.autoFocusInst.focus();
    localStorage["tel"]="登陆"
  }
  onChange = (value) => {
    this.setState({ value });
    // console.log(this.state.value)
  };
  clear = () => {
    this.setState({ value: '' });
  };
  handleClick = () => {
    this.manualFocusInst.focus();
  }
  loginis(){
    let flag=localStorage["isLogin"]
    if(flag){
        let url="http://localhost:7001/outlogin"
        axios.get(url)
        .then((res)=>{
          if(res.data.code==2001){
          // window.localStorage.setItem("tel",null)//取消前端缓存
          // localStorage["nologin"]="登陆"
          localStorage.clear()
          localStorage["noLogin"]="登陆"
          alert("退出成功")
          this.props.history.replace("/myhome")
          window.location.reload([true])
          // this.$router.push({path:"/"})
        }
        })
    }else{
      // console.log(this.props)
      this.props.history.push("/login") 
    }
  }
  render() {
    return (
      <div>
        <div className="nav">
          <div className="imgwidth"><img className="caidan" alt="" src={require("../../assets/img/菜单.png")}></img></div>
          <SearchBar placeholder="" ref={ref => this.autoFocusInst = ref} value={this.state.value} onChange={this.onChange} />
          {localStorage["isLogin"]?<div className="login" onClick={this.loginis.bind(this)}>{localStorage["isout"]}</div>:<div className="login" onClick={this.loginis.bind(this)}>登陆</div>}
        </div>
      </div>
    )
  }
}
export default withRouter(Nav)

