import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import SwipeableViews from 'react-swipeable-views';
import { translate } from 'react-i18next';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import styles from './styles';

import SignIn from './SignIn';
import SignUp from './SignUp';

@translate()
@injectSheet(styles)
export default class Authenticate extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    sendSignUpData: PropTypes.func.isRequired,
    sendSignInData: PropTypes.func.isRequired,
    openForgotPasswordModal: PropTypes.func.isRequired,
    selectTab: PropTypes.func.isRequired,
    selectedTab: PropTypes.number.isRequired,
    t: PropTypes.func.isRequired,
  };

  render() {
    const {
      classes,
      t,
      sendSignUpData,
      sendSignInData,
      openForgotPasswordModal,
      selectedTab,
      selectTab,
    } = this.props;

    return (
      <div className={classes.root}>
        <AppBar
          color="default"
          position="static"
          className={classes.appBar}
        >
          <Tabs
            value={selectedTab}
            onChange={(event, selectedTab) => selectTab({selectedTab})}
            indicator={classes.selectedTab}
            classes={{
              root: classes.tabs,
            }}
            fullWidth
          >
            <Tab
              className={classes.tab}
              label={t('auth:signIn')}
            />
            <Tab
              className={classes.tab}
              label={t('auth:signUp')}
            />
          </Tabs>
        </AppBar>
        <SwipeableViews
          index={selectedTab}
          className={classes.swipeableViews}
        >
          <SignIn
            onSubmit={sendSignInData}
            openModal={openForgotPasswordModal}
          />
          <SignUp
            onSubmit={sendSignUpData}
          />
        </SwipeableViews>
      </div>
    );
  }
};
