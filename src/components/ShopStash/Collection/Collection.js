import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import injectSheet from 'react-jss';
import styles from './styles';
import Typography from '@material-ui/core/Typography';

import StashItem from 'components/ShopStash/StashItem';
import Images from 'theme/images';
import { productTypes } from 'constants/shop';

@translate()
@injectSheet( styles )
export default class Collection extends PureComponent {

  static propTypes = {
    t: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
    filter: PropTypes.object.isRequired,
    items: PropTypes.array.isRequired,
  };

  static defaultProps = {
    soldOut: false,
  };

  render() {
    const {
      t,
      items,
      filter,
      classes,
    } = this.props;

    return (
      <div className={classes.root}>
        {
          items.map(( item, index ) => {
            let resultsOfFiltering = [];

            if ( filter.productType ) {
              if ( item.productType === filter.productType
                || item.productType === productTypes.ALL ) {
                resultsOfFiltering.push( item );
              }
            }

            if ( filter.minCost ) {
              if ( item.cost > filter.minCost ) {
                resultsOfFiltering.push( item );
              }
            }

            return(

              resultsOfFiltering.map(( item, index ) => {
                return (
                  <div
                    className={classes.itemWrapper}
                    key={index}>
                    <StashItem
                      itemData={item}
                    />
                  </div>
                )
              })

            )
          })}
      </div>
    );
  }
}
