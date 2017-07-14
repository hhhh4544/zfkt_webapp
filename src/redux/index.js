import {createStore,applyMiddleware} from 'redux';
import reducers from './reducers';
import {routerMiddleware} from 'react-router-redux';
import createHistory from 'history/createHashHistory';
let history = createHistory();
let middlewares = [routerMiddleware(history)]; //路由中间件
export default createStore(reducers,applyMiddleware(...middlewares));
