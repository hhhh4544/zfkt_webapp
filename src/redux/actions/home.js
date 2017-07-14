import * as Types from '../action-types';
//一个个actionCreator
import {getSliders,getLessons} from '../../api/home'
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
export const getLesson = () => (dispatch,getState) =>{
    let {
        currentLesson,
        lessons:{
            hasMore,
            offset,
            limit
        }
    } = getState().home;
    if(!hasMore){ //没有更多 就停止了
        return
    }
    //loading改成正在加载的状态
    dispatch({
       type:Types.CHANGE_LOADING_STATUS,
       isLoading:true
    });
    getLessons(currentLesson,offset,limit).then(data=>{ //data=>{hasMore,lessons}
        setTimeout(()=>{
            dispatch({
                type:Types.GET_LESSON_LIST,
                ...data //将获取的数据发送给reducer
            })
        },1000)

    });
};