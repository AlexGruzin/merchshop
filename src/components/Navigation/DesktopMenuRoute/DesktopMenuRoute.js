import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { translate } from 'react-i18next';
import injectSheet from 'react-jss';

import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { HEADLINE, CORAL_LINK } from 'constants/typography';
import { BODY2 } from 'constants/typography';

import styles from './styles';

@translate()
@injectSheet( styles )
export default class DesktopMenuRoute extends PureComponent {
  static propTypes = {
    label: PropTypes.string.isRequired,
    route: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired,
    t: PropTypes.func.isRequired,
  };

  render() {
    const {
      t,
      classes,
      route,
      label,
    } = this.props;

    const {
      coral
    } = classes;

    return (
      <div className={classes.ButtonContainer}>
        <div className={classes.ButtonWrapper}>
          <Link
            className={classes.Button}
            to={route}>
            <Typography
              className={classNames(
                classes.ButtonLabel,
                route === CORAL_LINK ? classes.coral : null,
              )}
              variant={BODY2}>
              {t( label )}
            </Typography>
          </Link>
        </div>
      </div>
    );
  }
}
