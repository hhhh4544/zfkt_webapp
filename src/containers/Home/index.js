import React,{Component} from 'react';
import HomeHeader from "../../components/HomeHeader/index";
import {connect} from 'react-redux';
import * as action from '../../redux/actions/home'
import Swiper from "../../components/Swiper/index";
//mapStateToProps（获取redux中的状态） mapDispatchToProps（更改redux中的状态）
@connect(state=>({
    ...state.home
}),action)
export default class Home extends Component{
    chooseLesson=(data)=>{ //data代表的是 获取的类型
        console.log(data);
        this.props.setCurrentLesson(data);
        //会自动派发setCurrentLesson返回的对象
    };
    componentWillMount(){
        this.props.getSlider();
    }
    render(){
        console.log(this.props);
        return (
            <div style={{height:'100%'}}>
                <HomeHeader choose={this.chooseLesson}/>
                <div className="content-scroll">
                    <Swiper {...this.props}/>
                </div>
            </div>
        )
    }
}