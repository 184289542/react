import React from "react"
import axios from 'axios';
import "../../css/home/Shopping.css"

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
            console.log(this.state.mydata)
        })
    }
    render(){
        return (
            <div>
                <div className="shopping-word">为你推荐</div>
                <div className="showinfo">
                    { 
                        this.state.mydata.map((item,index)=>{
                            return (
                                <div key={index} className="showimg">
                                    <img src={item.imgsrc} alt=""  />
                                    <div className="showword">
                                        <div className="show_word">{item.word1}</div>
                                        <div className="show_word">{item.word2}</div>
                                        <div className="show_word2">{item.price}</div>
                                        {/* <div>{showtime}</div> */}
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
export default Shopping