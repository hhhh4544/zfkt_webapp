import {createStore,applyMiddleware,compose} from 'redux';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



import reducers from './reducers';
import {routerMiddleware} from 'react-router-redux';
import createHistory from 'history/createHashHistory';
let history = createHistory();
import ReduxThunk from 'redux-thunk';//如果action返回的是一个函数 会把dispatch权限交给你自己，我们可以自己dispatch
let middlewares = [routerMiddleware(history),ReduxThunk]; //路由中间件
export default createStore(reducers,composeEnhancers((applyMiddleware(...middlewares))));
