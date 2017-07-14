import React,{Component} from 'react';
import './index.less';
import logo from '../../common/images/logo.png';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
export default class HomeHeader extends Component{
    constructor(){
        super();
        this.state = {isShow:false}
    }
    handleChange = () =>{
        this.setState({
            isShow:!this.state.isShow
        })
    };
    render(){
        return (
            <div className="home-header">
                <div className="header-nav">
                    <img src={logo} alt=""/>
                    <div onClick={this.handleChange}>
                        {this.state.isShow?
                            <i className="iconfont icon-guanbi"></i>
                            :<i className="iconfont icon-uilist"></i>}
                    </div>
                </div>
                <ReactCSSTransitionGroup
                    transitionName="example"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                    {this.state.isShow?<ul className="header-menu">
                        <li>node课程</li>
                        <li>javascript课程</li>
                        <li>css课程</li>
                    </ul>:''}
                </ReactCSSTransitionGroup>




            </div>
        )
    }
}