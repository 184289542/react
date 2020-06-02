import React from "react"
import Nav from "../../components/home/Nav.js"
import Lunbo from "../../components/home/Lunbo.js"
import Icon from "../../components/home/Icon.js"
import Recommend from "../../components/home/Recommend.js"
import Shopping from "../../components/home/Shopping.js"



class MyHome extends React.Component {
    render(){
        return (
            <div>
                {/* 头部搜索框 */}
                <Nav></Nav>
                {/* 轮播图 */}
                <Lunbo></Lunbo>
                {/* 图标 */}
                <Icon></Icon>
                {/* 走心推荐 */}
                <Recommend></Recommend>
                {/* 商品 */}
                <Shopping></Shopping>
            </div>
        )
    }
}
export default MyHome