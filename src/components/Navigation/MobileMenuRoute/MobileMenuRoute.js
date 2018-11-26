import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { translate } from 'react-i18next';
import injectSheet from 'react-jss';

import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import { BODY2 } from 'constants/typography';

import styles from './styles';

@translate()
@injectSheet( styles )
export default class MobileMenuRoute extends PureComponent {
  static propTypes = {
    label: PropTypes.string.isRequired,
    route: PropTypes.string.isRequired,
    classes: PropTypes.object,
    className: PropTypes.object,
    t: PropTypes.func,
    labelClass: PropTypes.string,
  };

  static defaultProps = {
    labelClass: BODY2,
  };

  render() {
    const {
      t,
      classes,
      route,
      label,
      labelClass,
      className,
    } = this.props;

    return (
      <div
        className={classes.root}>
        <ListItem
          button
          to={route}
          className={classes.listItemWithSubroutes}>
          <Typography
            className={classNames( classes.swipingNavLabel, classes[label.toLowerCase()], className )}
            variant={labelClass}>
            {t( label )}
          </Typography>
        </ListItem>
        <Divider/>
      </div>
    );
  }
}
