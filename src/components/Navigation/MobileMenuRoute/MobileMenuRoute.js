import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { translate } from 'react-i18next';
import injectSheet from 'react-jss';

import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';

import styles from './styles';

@translate()
@injectSheet( styles )
export default class MobileMenuRoute extends PureComponent {
  static propTypes = {
    label: PropTypes.string.isRequired,
    route: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired,
    t: PropTypes.func.isRequired,
    labelClass: PropTypes.string,
  };

  static defaultProps = {
    labelClass: 'h5',
  };

  render() {
    const {
      t,
      classes,
      route,
      label,
      labelClass,
    } = this.props;

    return (
      <div
        className={classes.root}>
        <ListItem
          button
          to={route}
          className={classes.listItemWithSubroutes}>
          <Typography
            className={classNames( classes.swipingNavLabel, classes[label.toLowerCase()])}
            variant={labelClass}>
            {t( label )}
          </Typography>
        </ListItem>
        <Divider/>
      </div>
    );
  }
}
