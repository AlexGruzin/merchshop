import React, { Component } from 'react';

import Router from 'router';
import Header from 'containers/Header';
import Footer from 'containers/Footer';
import Loading from 'containers/Loading';
import ModalPortals from 'containers/ModalsPortal';
import injectSheet from 'react-jss';

import styles from './styles';

@injectSheet( styles )
class App extends Component {
  render() {
    return (
      <Loading>
        <Header />
        <Router />
        <Footer/>
        <ModalPortals />
      </Loading>
    );
  }
}

export default App;
