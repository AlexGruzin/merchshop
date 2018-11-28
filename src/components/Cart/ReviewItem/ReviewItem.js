import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import injectSheet from 'react-jss';
import Typography from '@material-ui/core/Typography';

import { H1, H4, H6, SUBTITLE1, CAPTION } from 'constants/typography';
import styles from './styles';

import { productTypes, productsFilter } from 'constants/shop';
import { ICONS } from 'constants/icons';

@translate()
@injectSheet( styles )
export default class ReviewItem extends PureComponent {
  static propTypes = {
    classes: PropTypes.object,
    t: PropTypes.func,
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
            variant={SUBTITLE1}>
            {itemData.label}
          </Typography>

          <Typography>
            {`Rp ${itemData.cost}`}
          </Typography>

          <Typography variant={H6} className={classes.amount}>
            {'x1'}
          </Typography>

        </div>

        <div className={classes.emptyColumn}>
        </div>

      </div>

    );
  }
}
