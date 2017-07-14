import * as Types from '../action-types';
//一个个actionCreator
import {getSliders} from '../../api/home'
export function setCurrentLesson(num) {
    return {
        type:Types.SET_CURRENT_LESSON,
        num
    }
}
//在action中发送异步请求
export const getSlider=()=>(dispatch,getState)=>{
    getSliders().then(sliders=>{
        dispatch({
            type:Types.GET_SLIDERS,
            sliders
        })
    });
};