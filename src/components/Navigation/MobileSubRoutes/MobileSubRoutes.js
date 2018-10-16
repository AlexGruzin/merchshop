import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { translate } from 'react-i18next';
import injectSheet from 'react-jss';

import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';

import MobileMenuRoute from 'components/Navigation/MobileMenuRoute';
import styles from './styles';

@translate()
@injectSheet( styles )
export default class MobileSubRoutes extends PureComponent {
  static propTypes = {
    label: PropTypes.string.isRequired,
    subRoutes: PropTypes.array.isRequired,
    opened: PropTypes.bool,
    classes: PropTypes.object.isRequired,
    t: PropTypes.func.isRequired,
  };

  constructor( props ) {
    super( props );
    this.state = {
      open: false,
    }
  }

  subRouteOpener = () => {
    this.setState( state => ({ open: !state.open }) );
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
            variant='h5'>
            {t( label )}
          </Typography>
          {open
            ? <ExpandLess fontSize='inherit' />
            : <ExpandMore fontSize='inherit'/>}
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
                label={t ( subLink.label )}
                route={subLink.route}
                labelClass={'h4'}/>
            ))}
          </List>
        </Collapse>
      </div>
    );
  }
}
