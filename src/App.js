import React, { Component } from 'react';

import Router from 'router';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Loading from 'components/Loading';
import ModalPortals from 'components/ModalsPortal';
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
