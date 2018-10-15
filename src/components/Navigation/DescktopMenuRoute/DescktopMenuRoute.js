import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { translate } from 'react-i18next';
import injectSheet from 'react-jss';

import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Button from '@material-ui/core/Button';

import styles from './styles';

@translate()
@injectSheet( styles )
export default class MobileMenuRoute extends PureComponent {
  static propTypes = {
    label: PropTypes.string.isRequired,
    route: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired,
    t: PropTypes.func.isRequired,
    subRoutes: PropTypes.array,
  };

  constructor( props ) {
    super( props );
    this.state = {
      showingSubRoutes: false,
    }
  }

  static defaultProps = {
    subRoutes: [],
  };

  render() {
    const {
      t,
      classes,
      route,
      label,
      subRoutes,
    } = this.props;

    return (
      <ExpansionPanel
        expanded={this.state.showingSubRoutes}
        onMouseEnter={() => this.setState({ showingSubRoutes: true })}
        onMouseLeave={() => this.setState({ showingSubRoutes: false })}
        classes={{
          root: classes.expandPanel,
          expanded: classes.expandPanelExpanded,
        }}>
        <ExpansionPanelSummary
          classes={{
            root: classes.rootSummary,
            content: classes.contentSummary,
            expanded: classes.summaryExpanded,
          }}>
          <Typography
            variant="h5"
            className={classNames(classes.headline, classes[label.toLowerCase()])}>
            {t( label )}
          </Typography>
        </ExpansionPanelSummary>

        <ExpansionPanelActions
          classes={{
            root: classes.expandedActionsRoot,
          }}>
          <div className={classes.expandedActionsWrapper}>
            { subRoutes
              ? subRoutes.map(( subLink, index ) => (
                <Button
                  key={index}
                  component={Link}
                  to={subLink.route}
                  size='medium'
                  fullWidth
                  color='secondary'
                  className={classes.navigationExpandedButton}
                  classes={{
                    label: classes.expandSubButtonLabel,
                  }}>
                  <Typography
                    variant='body1'>
                    {subLink.label}
                  </Typography>
                </Button>
              ))
              : null
            }
          </div>
        </ExpansionPanelActions>

      </ExpansionPanel>
    );
  }
}
