import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import injectSheet from 'react-jss';
import { Field, Fields } from 'redux-form/immutable';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';

import FilterForm from 'components/Filters/ShopFilterForm';

import { H6 } from 'constants/typography';
import styles from './styles';

import { PRODUCT_TYPES, PRODUCTS_FILTER, COLLECTION_VIEW_MODES } from 'constants/shop';
import Icon from 'components/Icon';
import { ICONS } from 'constants/icons';

@translate()
@injectSheet( styles )
export default class ShopFilter extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    t: PropTypes.func.isRequired,
    handleFilterApply: PropTypes.func.isRequired,
    viewMode: PropTypes.string.isRequired,
  };

  constructor( props ) {
    super( props );
    this.state = {
      filterIsOpened: false,
    }
  }

  expandFilter = () => {
    this.setState({
      filterIsOpened: !this.state.filterIsOpened,
    });
  };


  render() {
    const {
      t,
      classes,
      handleFilterApply,
      viewMode,
    } = this.props;

    const {
      activeIcon,
      singleModeIcon,
      multiModeIcon,
      filterIcon,
      root,
      expandedContainer,
      showExpanded,
      absoluteBlock
    } = classes;

    return (
      <div className={root}>

        <div className={classes.head}>
          <div className={classes.labelColumn}>
            <div
              className={classes.expandButton}
              onClick={this.expandFilter}
            >
              <Icon
                icon={ICONS.FILTER}
                className={filterIcon}/>
              <Typography variant={H6}>
                {t( 'shop:Filter' )}
              </Typography>
              {this.state.filterIsOpened
                ? <Icon icon={ICONS.EXPAND} className={classes.expandLessIcon}/>
                : <Icon icon={ICONS.EXPAND} className={classes.expandIcon}/>
              }
            </div>

          </div>

          <div className={classes.viewModeColumn}>
            <Icon
              icon={ICONS.MULTI_VIEW_MODE}
              onClick={()=>{}}
              className={classNames(
                multiModeIcon,
                ( viewMode === COLLECTION_VIEW_MODES.MULTI ) ? activeIcon : null,
              )}/>
            <Icon
              icon={ICONS.SINGLE_VIEW_MODE}
              onClick={()=>{}}
              className={classNames(
                singleModeIcon,
                ( viewMode === COLLECTION_VIEW_MODES.SINGLE ) ? activeIcon : null,
              )}/>
          </div>
        </div>

        <div className={classNames( expandedContainer, this.state.filterIsOpened ? showExpanded : null )}>
          <div className={absoluteBlock}>
            <FilterForm
              onSubmit={handleFilterApply}
            />
          </div>
        </div>

      </div>
    );
  }
}
