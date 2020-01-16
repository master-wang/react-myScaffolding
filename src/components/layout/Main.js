
import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from '../Home'
import About from '../About'
import HookIndex from '../hook/index'
import styles from './Main.less'

export default class Main extends React.Component {
  render() {
    return (
      <div className={styles['main-box']}>
        <a href='#/'>去home</a>
        <a href='#/about'>去detail</a>
        <a href='#/hook'>hook</a>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/hook" component={HookIndex} />
        </Switch>
      </div>
    )
  }
}

