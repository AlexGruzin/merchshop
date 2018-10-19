import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { translate } from 'react-i18next';
import injectSheet from 'react-jss';

import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

import styles from './styles';

@translate()
@injectSheet( styles )
export default class DesktopMenuRoute extends PureComponent {
  static propTypes = {
    label: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired,
    t: PropTypes.func.isRequired,
    subRoutes: PropTypes.array.isRequired,
  };

  static defaultProps = {
    subRoutes: [],
  };

  render() {
    const {
      t,
      classes,
      label,
      subRoutes,
      modificatorClass,
    } = this.props;

    return (
      <div className={classes.ExpandedButtonContainer}>

        <div className={classes.ButtonWrapper}>
          <Link
            className={classes.Button}
            to={''}>
            <Typography
              className={classNames( classes.ButtonLabel, classes[label.toLowerCase()])}
              variant='h5'>
              {t( label )}
            </Typography>
          </Link>
        </div>

        <div className={classes.ExpandedSubRoutesContainer}>
          <div className={classNames( classes.ExpandedSubRoutes, modificatorClass )}>
            {subRoutes.map(( subRoute, index ) => {
              return(
                <div
                  key={subRoute.route}
                  className={classes.SubButtonWrapper}>
                  <Link
                    className={classes.SubButton}
                    to={subRoute.route}>
                    <Typography
                      className={classes.SubButtonLabel}
                      variant='body1'>
                      {t( subRoute.label )}
                    </Typography>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    );
  }
}
