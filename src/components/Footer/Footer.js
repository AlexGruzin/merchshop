import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import injectSheet from 'react-jss';
import { Link } from 'react-router-dom';
import { ICONS } from 'constants/icons';
import Icon from 'components/Icon';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import styles from './styles';
import LINK_LIST from 'constants/footerLinkList';

@translate()
@injectSheet( styles )
export default class Footer extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    linkList: PropTypes.array,
  };

  render() {
    const {
      classes,
      t,
    } = this.props;

    return(
      <div className={classes.footerContainer}>
        <div className={classes.footerColumn}>
          {LINK_LIST.map(( link, index ) => (
            <Button
              key={index}
              component={Link}
              to={link.route}
              size='medium'
              className={classes.footerButton}
              classes={{
                label: classes.footerButtonLabel,
              }}>
              <Typography variant='body1'>
                {t( link.label )}
              </Typography>
            </Button>
          )
          )}
        </div>

        <div className={classes.footerColumn}>

          <div className={classes.iconsServicesContainer}>
            <div className={classes.servicesWrapper}>
              <div className={classes.serviceIcon}>
                <Icon icon={ICONS.FACEBOOK_ICON}/>
              </div>
              <div className={classes.serviceIcon}>
                <Icon icon={ICONS.INSTAGRAM_ICON}/>
              </div>
              <div className={classes.serviceIcon}>
                <Icon icon={ICONS.TWITTER_ICON}/>
              </div>
              <div className={classes.serviceIcon}>
                <Icon icon={ICONS.YOUTUBE_ICON}/>
              </div>
              <div className={classes.serviceIcon}>
                <Icon icon={ICONS.SPOTIFY_ICON}/>
              </div>
            </div>
          </div>

          <div className={classes.servicesSubscribeContainer}>
            <div className={classes.subscribeWrapper}>
              <Button
                component={Link}
                to={'subscribe'}
                size="medium"
                className={classes.subscribeButton}>
                <Typography className={classes.buttonLabel} variant={'inherit'}>
                  {t( 'homePage:subscribe' )}
                </Typography>
                <Icon className={classes.arrowIcon}
                  icon={ICONS.ARROW_ICON}/>
              </Button>
              <Typography className={classes.privacy} variant='h2'>{'By Subscribing I agree to the '}
                <Link
                  to={''}
                  className={classes.underlined}>{'Email Communication Policy.'}
                </Link>
              </Typography>
            </div>
          </div>

        </div>

      </div>
    )
  }
}
