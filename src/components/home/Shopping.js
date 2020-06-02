import React from "react"
import axios from 'axios';
import "../../css/home/Shopping.css"
import { withRouter } from 'react-router-dom'

class Shopping extends React.Component {
    constructor(props){
        super(props)
        this.state={
            mydata:[]
        }
    }
    componentDidMount(){
        let url = "http://localhost:7001/allshoppings";
        axios.post(url)
        .then((result)=>{
            this.setState({
                mydata:result.data
            })
            // console.log(this.state.mydata)
        })
    }
    getid(brand){
        // this.props.history.push("/news/detail?id=2&title=新闻详情3")
        this.props.history.replace(`/product?brand=${brand}&title=商品详情`)
    }
    render(){
        return (
            <div>
                <div className="shopping-word">为你推荐</div>
                <div className="showinfo">
                    { 
                        this.state.mydata.map((item,index)=>{
                            return (
                                <div key={index} className="showimg" onClick={this.getid.bind(this,item.brand)}>
                                    <img src={item.imgsrc} alt=""  />
                                    <div className="showword">
                                        <div className="show_word">{item.word1}</div>
                                        <div className="show_word">{item.word2}</div>
                                        <div className="show_word2">{item.price}</div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
export default withRouter(Shopping)