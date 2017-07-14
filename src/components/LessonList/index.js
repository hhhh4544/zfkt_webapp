import React,{Component} from 'react';
import './index.less'
export default class LessonList extends Component{
    render(){
        let {
            lessons:{
                list
            }
        } = this.props;
        return (
            <ul className="lesson-list">
                {list.length>0?list.map((item,index)=>{
                    let {url,lesson,lessonId,price} = item;
                    return (<li key={index}>
                        <img src={url} alt=""/>
                        <p>{lesson}</p>
                        <strong>{price}</strong>
                    </li>)
                }):'正在加载'}
            </ul>
        )
    }
}