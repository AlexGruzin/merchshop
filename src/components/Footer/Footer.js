import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import injectSheet from 'react-jss';
import { ICONS } from 'constants/icons';
import Icon from 'components/Icon';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Link from 'components/Link';
import styles from './styles';
import LINK_LIST from 'constants/footerLinkList';
import { BODY1, H6 } from 'constants/typography';

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
        <nav className={classes.footerColumn}>
          <ul className={classes.ulList}>
          {LINK_LIST.map(( link, index ) => (

            <li className={classes.footerButton}>
              <Link
                key={link}
                to={link.route}
              >
                <Typography variant={BODY1}>
                  {t( link.label )}
                </Typography>
              </Link>
            </li>
          ))}
          </ul>
        </nav>

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
                size="medium"
                className={classes.subscribeButton}>
                <Typography
                  className={classes.subscribeButtonLabel}
                  variant={H6}>
                  {t( 'homePage:Subscribe' )}
                </Typography>
                <Icon
                  className={classes.arrowIcon}
                  icon={ICONS.ARROW_ICON}/>
              </Button>

              <Typography className={classes.privacy} variant={H6}>
                {'By Subscribing I agree to the'}
                <span>&nbsp;</span>

                <Link
                  to={'communication_policy'}
                >
                  <Typography
                    className={classes.underlined}
                    variant={H6}>
                    {'Email Communication Policy.'}
                  </Typography>
                </Link>

            </Typography>

            </div>
          </div>

        </div>

      </div>
    )
  }
}
