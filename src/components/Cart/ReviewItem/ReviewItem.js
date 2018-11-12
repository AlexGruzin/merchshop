import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import injectSheet from 'react-jss';
import Typography from '@material-ui/core/Typography';

import { H1, H4, H6, SUBHEADING, CAPTION } from 'constants/typography';
import styles from './styles';

import { PRODUCT_TYPES, productsFilter } from 'constants/shop';
import { ICONS } from 'constants/icons';

@translate()
@injectSheet( styles )
export default class ReviewItem extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    t: PropTypes.func.isRequired,
    itemData: PropTypes.object.isRequired,
  };

  render() {
    const {
      t,
      classes,
      itemData,
    } = this.props;

    const {
      cartItemWrapper
    } = classes;

    return (
      <div className={cartItemWrapper}>

        <div className={classes.imageWrapper}>
          <div
            className={classes.image}
            style={{
              backgroundImage: `url('${itemData.image}')`
            }}/>
        </div>

        <div className={classes.infoColumn}>

          <Typography
            className={classes.nameLabel}
            variant={H4}>
            {itemData.label}
          </Typography>

          <Typography
            className={classes.costLabel}
            variant={H1}>
            {`Rp ${itemData.cost}`}
          </Typography>

          <div className={classes.amountSection}>
            <Typography variant={H6} className={classes.amount}>
              {'x1'}
            </Typography>
          </div>

        </div>

        <div className={classes.emptyColumn}>
        </div>

      </div>

    );
  }
}
