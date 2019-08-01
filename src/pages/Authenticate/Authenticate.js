import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import SwipeableViews from 'react-swipeable-views';
import { translate } from 'react-i18next';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import styles from './styles';

import SignIn from './SignIn';
import SignUp from './SignUp';

@translate()
@injectSheet( styles )
export default class Authenticate extends PureComponent {
  static propTypes = {
    classes: PropTypes.object,
    sendSignUpData: PropTypes.func.isRequired,
    sendLogInData: PropTypes.func.isRequired,
    openForgotPasswordModal: PropTypes.func.isRequired,
    selectedTab: PropTypes.number.isRequired,
    t: PropTypes.func,
  };

  render() {
    const {
      classes,
      t,
      sendSignUpData,
      sendLogInData,
      openForgotPasswordModal,
      selectedTab,
    } = this.props;

    return (
      <div className={classes.tabContainer}>
        <div className={classes.tabWrapper}>
          <Tabs
            value={selectedTab}
            indicator={classes.selectedTab}
            classes={{
              root: classes.rootTabs,
            }}
            fullWidth>
            <Tab
              className={classes.tab}
              label={t( 'auth:signIn' )}/>
            <Tab
              className={classes.tab}
              label={t( 'auth:signUp' )}/>
          </Tabs>

          <SwipeableViews
            index={selectedTab}
            onChangeIndex={( event, selectedTab ) => selectTab({ selectedTab: Number( !selectedTab ) })}
            className={classes.swipeableViews}>
            <SignIn
              onSubmit={sendLogInData}
              openModal={openForgotPasswordModal}/>
            <SignUp
              onSubmit={sendSignUpData}/>
          </SwipeableViews>
        </div>
      </div>
    );
  }
}
