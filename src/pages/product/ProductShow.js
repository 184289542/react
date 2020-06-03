import React from "react"
import localParam from '../../js/utils.js';
import axios from "axios"
import Nav from "../../components/home/Nav.js"
import Lunbo from "../../components/home/Lunbo.js"
import Icon from "../../components/home/Icon.js"
import "../../css/Product/ProductShow.css"

class ProductShow extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            mydata:[],
            mybrand:""
        }
    }
    componentDidMount(){
        // localParam(this.props.location.search).search.id
        let brand = localParam(this.props.location.search).search.brand;
        this.setState({
            mybrand:brand
        })
        let url = "http://localhost:7001/productShow";
        let obj = {
            sqllistname: brand
        };
        axios.post(url, obj)
            .then((result) => {
                console.log(result.data);
                this.setState({
                    mydata:result.data
                })
            })

    }
    getid(id){
        // console.log(id,this.state.mybrand)
        this.props.history.replace(`/productdetails?listname=${this.state.mybrand}&id=${id}&title=单件商品详情`)
    }
    render(){
        return (
            <div>
                {/* <div>我是商品的展示页面</div> */}
                {/* 头部搜索框 */}
                <Nav></Nav>
                {/* 轮播图 */}
                <Lunbo></Lunbo>
                {/* 图标 */}
                <Icon></Icon>
                {/* 展示商品组件 */}
                <div className="product">
                    {
                        this.state.mydata.map((item,index)=>{
                            return (
                                <div key={index} className="imgbox" onClick={this.getid.bind(this,item.id)}>
                                    <a href="#" title="阿迪达斯运动生活-跑步运动圆领短袖T恤-白色-EJ7080" ><img src={item.imgurl}
                                    alt="阿迪达斯运动生活-跑步运动圆领短袖T恤-白色-EJ7080" className="zt_25_img" /></a>
                                    <span className="zt_25_logobg"><span className="BLB"><img src={item.icon} /></span></span>
                                    <a href="#" className="zt_25_link" title="阿迪达斯运动生活-跑步运动圆领短袖T恤-白色-EJ7080" >{item.text}</a>
                                    <span className="zt_25_link"><span id="17777750" className="zt_25_pr">¥:{item.nowprice}</span><i><span className="zt_25_pr_preprice">{item.prevprice}</span></i></span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
export default ProductShow