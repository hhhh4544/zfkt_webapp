import * as Types from '../action-types';
let initState = {
  currentLesson:0,//0代表全部课程
  sliders:[]
};
//{type:Types.SET_CURRENT_LESSON,num:1}
export function home(state=initState,action) {
    switch (action.type){
        case Types.SET_CURRENT_LESSON:
            return {...state,currentLesson:action.num}
        case Types.GET_SLIDERS:
            return {...state,sliders:action.sliders}
    }
    return state;
}