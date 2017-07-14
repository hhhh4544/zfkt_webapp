import React,{Component} from 'react';
import ReactSwipe from 'react-swipe';
import './index.less'
export default class Swiper extends Component{
    constructor(){
        super();
        this.state = {i:0}
    }
    render(){
        let opts = {
            continuous: true,
            callback:(index,item)=>{
                this.setState({
                    i:index
                })
            }
        };
        return (
            <div className="slider">
                {this.props.sliders.length>0?<ReactSwipe className="carousel" swipeOptions={opts}>
                    {this.props.sliders.map((item,index)=>(
                        <div key={index}>
                            <img src={item} alt=""/>
                        </div>
                    ))}
                </ReactSwipe>:'正在加载'}
                <div className="dots">
                    {this.props.sliders.map((item,index)=>(
                        <span key={index} className={this.state.i==index?'active':''}></span>
                    ))}
                </div>
            </div>
        )
    }
}