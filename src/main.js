import React from 'react';
import {render} from 'react-dom';
import {HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import Home from "./containers/Home/index";
import Profile from "./containers/Profile/index";
import Lesson from "./containers/Lesson/index";
import App from "./containers/App";
import './common/css/index.less';
import store from './redux';//导出后的store
window._store = store;
import {Provider} from 'react-redux';
render(<Provider store={store}>
    <Router>
        <App>
            <Switch>
                <Route path={'/home'} component={Home}/>
                <Route path={'/profile'} component={Profile}/>
                <Route path={'/lesson'} component={Lesson}/>
                <Redirect to="/home"/>
            </Switch>
        </App>
    </Router>
</Provider>,document.getElementById('app'));