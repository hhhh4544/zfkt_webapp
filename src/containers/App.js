import React,{Component} from 'react';
import Tab from "../components/Tab/index";
export default class App extends Component{
    render(){
        return (
            <div style={{height:'100%'}}>
                {this.props.children}
                <Tab/>
            </div>
        )
    }
}