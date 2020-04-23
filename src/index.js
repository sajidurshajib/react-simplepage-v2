import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Switch, Route} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'
import Header from './components/Header';
import App from './components/App';
import Jokes from './components/Jokes';
import './index.css';

const history = createBrowserHistory();

ReactDOM.render(
    <Router history={history}>
        <Switch>
            <Route exact={true} path='/' render={()=><Header><App /></Header>} />
            <Route path='/jokes' render={()=><Header><Jokes /></Header>} />
        </Switch>
    </Router>
    , document.getElementById('root'));
