import * as Types from '../action-types';
//一个个actionCreator

export function setCurrentLesson(num) {
    return {
        type:Types.SET_CURRENT_LESSON,
        num
    }
}