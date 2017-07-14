import {get} from './index';
//获取轮播图
let url = 'http://localhost:3000';
export const getSliders=()=> {
    return get(url+'/api/sliders');
};