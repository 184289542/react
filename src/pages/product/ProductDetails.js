import React from "react"
import localParam from "../../js/utils"
import axios from "axios"
import Nav from "../../components/home/Nav.js"
import Lunbo from "../../components/home/Lunbo.js"
import Icon from "../../components/home/Icon.js"
import "../../css/Product/ProductDetails.css"
import store from "../../store/store"

class ProductDetails extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            mydata:[],
            size:store.getState().size
        }
    }
    componentDidMount(){
        let id = (localParam(this.props.location.search).search.id);
        let listname = (localParam(this.props.location.search).search.listname);
        // console.log(id,listname)
        let url = "http://localhost:7001/getsingleitem";
        let obj = {
            myid: id,
            mylistanme: listname
        };
        axios.post(url, obj)
        .then((result) => {
            this.setState({
                mydata:result.data[0]
            })
            // console.log(this.state.mydata)
        })
        //数据订阅：及时响应更新的数据 
        store.subscribe(this.changeValue.bind(this));

        // 测试默认尺寸
        // console.log(this.state.size)
    }
    //
    changeValue() {
        this.setState(store.getState())
    }
    async size1(){
        store.dispatch({
            type: "mysizeS"
        });
        await this.setState({
            size:store.getState().size
        })
       console.log(this.state.size)
    }
    async size2(){
        store.dispatch({
            type: "mysizeM"
        });
        await this.setState({
            size:store.getState().size
        })
       console.log(this.state.size)
    }
    async size3(){
        store.dispatch({
            type: "mysizeL"
        });
        await this.setState({
            size:store.getState().size
        })
       console.log(this.state.size)
    }
    async size4(){
        store.dispatch({
            type: "mysizeXL"
        });
        await this.setState({
            size:store.getState().size
        })
       console.log(this.state.size)
    }
    addcart(){
        // console.log(this.state.mydata.id,this.state.size)
        if(this.state.size === ""){
            alert("请您选择适合的尺寸")
        }else{
            let url = 'http://localhost:7001/setcart'
            axios.get(url,{params:{id: this.state.mydata.id ,size: this.state.size}})
            .then((result) => {
                console.log(result, 88)
            })
            this.props.history.replace("/gouwuche")
        }
       
    }
    // back(){
    //     this.props.history.replace("/product")
    // }
    render(){
        return (
            <div>
                {/* <div className="icon_zuojiantou" onClick={this.back.bind(this)}><img src={require('../../assets/img/左箭头.png')} alt=""></img></div> */}
                {/* <div>我是商品的详情页面</div> */}
                {/* 头部搜索框 */}
                <Nav></Nav>
                {/* 轮播图 */}
                <Lunbo></Lunbo>
                {/* 图标 */}
                <Icon></Icon>
                {/* 展示商品组件 */}
                <div className="product_word">商品详情</div>
                {/* {id: 1, imgurl: "http://0.image.al.okbuycdn.com/nbn/s270_270/static/e66607a4b8b4f74eed0d1f45460fe49b.jpg", 
                icon: "http://0.image.al.okbuycdn.com//nbn/l72_50_detect/static/50914de9daeb0112a84387487d4a4b24.png",
                 text: "阿迪达斯运动生活-跑步运动圆领短袖T恤-白色-EJ7080", nowprice: "239", …} */}
                <div className="shopping">
                    <img className="img1" alt="" src={this.state.mydata.imgurl} />
                    <div className="shopping_icon"><img alt="" src={this.state.mydata.icon} /></div>
                    <div className="shopping_introduction">{this.state.mydata.text}</div>
                    <div className="shopping_price">￥：{this.state.mydata.nowprice}</div>
                    <div className="shopping_size">
                        请您选择：<br/>
                        <div className="shopping_selectsize">
                            <div onClick={this.size1.bind(this)}>S</div>
                            <div onClick={this.size2.bind(this)}>M</div>
                            <div onClick={this.size3.bind(this)}>L</div>
                            <div onClick={this.size4.bind(this)}>XL</div>
                        </div>
                    </div>
                    <div className="shopping_carbox">
                        <div className="shopping_car" onClick={this.addcart.bind(this)}>添加购物车</div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ProductDetails