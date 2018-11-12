import React, { Component } from 'react';

import Router from 'router';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Loading from 'components/Loading';
import ModalsPortal from 'components/ModalsPortal';
import injectSheet from 'react-jss';

import styles from './styles';

@injectSheet( styles )
class App extends Component {
  render() {
    return (
      <Loading>
        <Header />
        <Router />
        <Footer />
        <ModalsPortal />
      </Loading>
    );
  }
}

export default App;
