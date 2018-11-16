import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import injectSheet from 'react-jss';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import styles from './styles';
import ModalsHeader from 'components/ModalsHeader';

import { HEADLINE, CAPTION, BUTTON } from 'constants/typography';
import Icon from 'components/Icon';
import { ICONS } from 'constants/icons';

@translate()
@injectSheet( styles )
export default class ForgotPasswordModal extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    t: PropTypes.func.isRequired,
    closeModal: PropTypes.func.isRequired,
    openLogInModal: PropTypes.func.isRequired,
    openSignUpModal: PropTypes.func.isRequired,
  };

  render() {
    const {
      closeModal,
      classes,
      t,
      openLogInModal,
      openSignUpModal,
    } = this.props;

    return (
      <div>

        <div className={classes.root}>
          <ModalsHeader
            content={t( 'forgotPasswordModal:forgotPassword' )}
            onCrossIconClick={closeModal}/>

          <div className={classes.rootLogRequest}>

            <Typography
              className={classes.bigDescription}>
              {t( 'cart:Lorem ipsum dolor sit \n amet, aperiam posidonium \n scripserit' )}
            </Typography>

            <div className={classes.buttonWrapper}>

              <Button
                onClick={() => {
                  closeModal();
                  openSignUpModal();
                }}
                className={classes.signButton}>
                {t( 'checkout:SIGN UP' )}
              </Button>

              <Button
                onClick={() => {
                  closeModal();
                  openLogInModal();
                }}
                className={classes.logButton}>
                {t( 'checkout:LOG IN' )}
              </Button>
            </div>

            <Typography
              className={classes.orBlock}
              variant={CAPTION}>
              {'or'}
            </Typography>

            <div className={classes.buttonWrapper}>

              <Button
                type="submit"
                className={classes.facebookButton}>
                <Icon icon={ICONS.FACEBOOK_ICON} className={classes.smallIconSearch}/>
                <Typography className={classes.label} variant={BUTTON}>
                  {t( 'checkout:CONNECT WITH FACEBOOK' )}
                </Typography>
              </Button>

              <Button
                type="submit"
                className={classes.googleButton}>
                <Icon icon={ICONS.GOO} className={classes.smallIconSearch}/>
                <Typography className={classes.label} variant={BUTTON}>
                  {t( 'checkout:CONNECT WITH GOOGLE' )}
                </Typography>
              </Button>
            </div>

          </div>


        </div>

      </div>
    );
  }
}
