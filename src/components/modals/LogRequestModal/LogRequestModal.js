import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import injectSheet from 'react-jss';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import styles from './styles';
import ModalsHeader from 'components/ModalsHeader';

import { H3, H6, BUTTON, SECONDARY, PRIMARY } from 'constants/typography';
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

            <Typography variant={H3}
              className={classes.bigDescription}>
              {t( 'cart:Lorem ipsum dolor sit \n amet, aperiam posidonium \n scripserit' )}
            </Typography>

            <div className={classes.buttonWrapper}>

              <Button color={PRIMARY}
                className={classes.logButton}
                onClick={() => {
                  closeModal();
                  openSignUpModal();
                }}>
                <Typography variant={BUTTON}>
                  {t( 'checkout:SIGN UP' )}
                </Typography>
              </Button>

              <Button color={SECONDARY}
                className={classes.logButton}
                onClick={() => {
                  closeModal();
                  openLogInModal();
                }}>
                <Typography variant={BUTTON}>
                  {t( 'checkout:LOG IN' )}
                </Typography>
              </Button>
            </div>

            <Typography
              className={classes.orBlock}
              variant={H6}>
              {'or'}
            </Typography>

            <div className={classes.buttonWrapper}>

              <Button
                type="submit"
                className={classes.facebookButton}>
                <Icon icon={ICONS.FACEBOOK_ICON} className={classes.smallIconSearch}/>
                <Typography className={classes.label}>
                  {t( 'checkout:CONNECT WITH FACEBOOK' )}
                </Typography>
              </Button>

              <Button
                type="submit"
                className={classes.googleButton}>
                <Icon icon={ICONS.GOOGLE} className={classes.smallIconSearch}/>
                <Typography className={classes.label}>
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
