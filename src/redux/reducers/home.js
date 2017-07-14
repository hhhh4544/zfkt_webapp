import * as Types from '../action-types';
let initState = {
  currentLesson:0,//0代表全部课程
  sliders:[],
  lessons:{
      hasMore:true, //是否有更多
      offset:0, //默认偏移量
      limit:10, //限制条数
      isLoading:false,//是否正在加载
      list:[] //获取的数据，每次将获取的数据放到数组中
  }
};
//{type:Types.SET_CURRENT_LESSON,num:1}
export function home(state=initState,action) {
    switch (action.type){
        case Types.SET_CURRENT_LESSON:
            return {...state,currentLesson:action.num}
        case Types.GET_SLIDERS:
            return {...state,sliders:action.sliders}
        case Types.GET_LESSON_LIST:
            return {
                ...state,
                lessons:{
                    ...state.lessons,
                    hasMore:action.hasMore,
                    list:[...state.lessons.list,...action.lessons],
                    isLoading:false,
                    offset:state.lessons.list.length+action.lessons.length
                }
            }
        case Types.CHANGE_LOADING_STATUS:
            return {
                ...state,
                lessons:{
                    ...state.lessons,
                    isLoading:action.isLoading
                }
            }
    }
    return state;
}