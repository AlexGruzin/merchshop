import React, { Component } from 'react';

import Router from 'router';
import Header from 'components/Header';
import Loading from 'components/Loading';
import ModalPortals from 'components/ModalsPortal';
import injectSheet from 'react-jss';

import styles from './styles';

class App extends Component {
  render() {
    return (
      <Loading>
        <Header />
        <Router />
        <ModalPortals />
      </Loading>
    );
  }
}

export default injectSheet(styles)(App);
