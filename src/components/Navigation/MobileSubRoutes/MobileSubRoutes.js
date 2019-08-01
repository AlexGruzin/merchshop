import Collapse from '@material-ui/core/Collapse';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';

import MobileMenuRoute from 'components/Navigation/MobileMenuRoute';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { translate } from 'react-i18next';
import injectSheet from 'react-jss';

import { BODY2, BODY1 } from 'constants/typography';
import styles from './styles';
import Icon from 'components/Icon';
import { ICONS } from 'constants/icons';

@translate()
@injectSheet( styles )
export default class MobileSubRoutes extends PureComponent {
  static propTypes = {
    label: PropTypes.string.isRequired,
    subRoutes: PropTypes.array.isRequired,
    opened: PropTypes.bool,
    classes: PropTypes.object,
    t: PropTypes.func,
  };

  constructor( props ) {
    super( props );
    this.state = {
      open: false,
    }
  }

  subRouteOpener = () => {
    this.setState( state => ({ open: !state.open }));
  };

  render() {
    const {
      t,
      classes,
      label,
      subRoutes,
    } = this.props;

    const {
      open
    } = this.state;

    return (
      <div>
        <ListItem
          button
          className={classes.listItemWithSubroutes}
          onClick={this.subRouteOpener}>
          <Typography
            className={classNames( classes.swipingNavLabel, classes[label.toLowerCase()])}
            variant={BODY2}>
            {t( label )}
          </Typography>
          {open
            ? <Icon className={classes.expandIcon} icon={ICONS.EXPAND_UP}/>
            : <Icon className={classes.expandIcon} icon={ICONS.EXPAND_DOWN}/>}
        </ListItem>
        <Divider/>
        <Collapse
          in={this.state.open}
          timeout="auto"
          unmountOnExit
          classes={{
            container: classes.mobileSubRouteContainer,
          }}>
          <List component='ul' disablePadding>
            {subRoutes.map(( subLink, index ) => (
              <MobileMenuRoute
                key={subLink.label}
                label={t( subLink.label )}
                route={subLink.route}
                labelClass={BODY1}
                className={classes.textTransform}
              />
            ))}
          </List>
        </Collapse>
      </div>
    );
  }
}
