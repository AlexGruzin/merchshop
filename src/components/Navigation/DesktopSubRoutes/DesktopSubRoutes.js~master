import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { translate } from 'react-i18next';
import injectSheet from 'react-jss';

import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { BODY1 } from "../../../constants/typography";

import styles from './styles';

@translate()
@injectSheet( styles )
export default class DesktopMenuRoute extends PureComponent {
  static propTypes = {
    label: PropTypes.string.isRequired,
    classes: PropTypes.object,
    t: PropTypes.func,
    subRoutes: PropTypes.array.isRequired,
    modificatorClass: PropTypes.string
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
        <Link
          className={classes.Button}
          to={''}>
          <div className={classes.ButtonWrapper}>

            <Typography
              className={classNames( classes.ButtonLabel, classes[label.toLowerCase()])}
              variant={BODY1}>
              {t( label )}
            </Typography>

          </div>
        </Link>

        <div className={classes.ExpandedSubRoutesContainer}>
          <div className={classNames( classes.ExpandedSubRoutes, modificatorClass )}>
            {subRoutes.map(( subRoute, index ) => {
              return(
                <Link
                  className={classes.SubButtonLink}
                  to={subRoute.route} >
                  <div
                    key={subRoute.route}
                    className={classes.SubButton}>

                    <Typography
                      className={classes.SubButtonLabel}
                      variant={BODY1}>
                      {t( subRoute.label )}
                    </Typography>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

      </div>
    );
  }
}
