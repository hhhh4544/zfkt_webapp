import React,{Component} from 'react';
import HomeHeader from "../../components/HomeHeader/index";
import {connect} from 'react-redux';
import * as action from '../../redux/actions/home'
//mapStateToProps（获取redux中的状态） mapDispatchToProps（更改redux中的状态）
@connect(state=>({}),action)
export default class Home extends Component{
    chooseLesson=(data)=>{ //data代表的是 获取的类型
        console.log(data);
        this.props.setCurrentLesson(data);
        //会自动派发setCurrentLesson返回的对象
    }
    render(){
        return (
            <div style={{height:'100%'}}>
                <HomeHeader choose={this.chooseLesson}/>
                <div className="content-scroll">

                </div>
            </div>
        )
    }
}