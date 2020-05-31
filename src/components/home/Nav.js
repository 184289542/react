import React from "react"
import { SearchBar } from 'antd-mobile';
import "../../css/home/Nav.css"

class Nav extends React.Component{
    state = {
        value: '显示gtx系列',
      };
      componentDidMount() {
        this.autoFocusInst.focus();

      }
      onChange= (value) => {
        this.setState({ value });
        // console.log(this.state.value)
      };
      clear = () => {
        this.setState({ value: '' });
      };
      handleClick = () => {
        this.manualFocusInst.focus();
      }
    render(){
        return (
            <div>
                <div className="nav">
                    <div className="imgwidth"><img className="caidan" alt="" src={require("../../assets/img/菜单.png")}></img></div>
                    <SearchBar placeholder="" ref={ref => this.autoFocusInst = ref} value={this.state.value} onChange={this.onChange}/>
                    <div className="login">登录</div>
                </div>
            </div>
        )
    }
}
export default Nav

