import React from "react"
import "../../css/home/Recommend.css"

class Recommend extends React.Component {
    render(){
        return (
            <div>
                <div className="recommend-title">走心推荐</div>
                <div className="recommend-bigbox">
                    <div className="recommend-imgbox">
                        <img alt="" src="//m.360buyimg.com/n1/s240x240_jfs/t1/93615/10/16768/269047/5e7eb20eE91a3d3a7/a13600543152008d.jpg!q70.jpg.dpg"></img>
                        <div className="recommend-imgbox-word">
                            <div>炒锅榜</div>
                            <div>预售爆款</div>
                        </div>
                    </div>
                    <div className="recommend-imgbox">
                        <img alt="" src="//m.360buyimg.com/n1/s240x240_jfs/t1/73172/36/12614/297177/5d9fefcaE1ebf951c/cdc59841a8148bcc.jpg!q70.jpg.dpg"></img>
                        <div className="recommend-imgbox-word">
                            <div>牛奶乳品榜</div>
                            <div>好物预售</div>
                        </div>
                    </div>
                    <div className="recommend-imgbox">
                        <img alt="" src="//m.360buyimg.com/mobilecms/s240x240_jfs/t1/64736/38/14950/74151/5dc687b2E33654c3e/9e1b9dc5461f9899.jpg!q70.jpg.dpg"></img>
                        <div className="recommend-imgbox-word">
                            <div>钟爱智能</div>
                            <div>贴心 智能</div>
                        </div>
                    </div>
                    <div className="recommend-imgbox">
                        <img alt="" src="//m.360buyimg.com/n1/s240x240_jfs/t1/105871/15/14510/90490/5e6706a9E052ce2da/ed510da8d3d62b31.jpg!q70.jpg.dpg"></img>
                        <div className="recommend-imgbox-word">
                            <div>男装精选</div>
                            <div>低至3折</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Recommend