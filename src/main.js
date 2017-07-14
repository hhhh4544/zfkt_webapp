import React from 'react';
import {render} from 'react-dom';
import {HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import Home from "./containers/Home/index";
import Profile from "./containers/Profile/index";
import Lesson from "./containers/Lesson/index";
import App from "./containers/App";
import './common/css/index.less'
render(<Router>
    <App>
        <Switch>
            <Route path={'/home'} component={Home}/>
            <Route path={'/profile'} component={Profile}/>
            <Route path={'/lesson'} component={Lesson}/>
            <Redirect to="/home"/>
        </Switch>
    </App>
</Router>,document.getElementById('app'));