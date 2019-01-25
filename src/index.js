import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import IndexPage from "./Pages/IndexPage";
import Page2 from "./Pages/Page2";

/*
index.js is used as default entry point by react-scripts, can be overridden if needed
 */

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={IndexPage}/>
      <Route path={'/page2'} component={Page2}/>
    </Switch>
  </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
