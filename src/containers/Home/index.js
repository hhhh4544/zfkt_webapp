import React,{Component} from 'react';
import HomeHeader from "../../components/HomeHeader/index";
export default class Home extends Component{
    render(){
        return (
            <div style={{height:'100%'}}>
                <HomeHeader/>
                <div className="content-scroll">

                </div>
            </div>
        )
    }
}