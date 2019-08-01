import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import injectSheet from 'react-jss';
import classNames from 'classnames';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Link from 'components/Link';

import { CAPTION } from 'constants/typography';
import styles from './styles';

import { CREATE_BUNDLE_STEPS } from 'constants/product';
import { productTypes, productsFilter, ShopItems } from 'constants/shop';
import { H3, H5, H6, SUBTITLE1 } from 'constants/typography';
import { TRACKED_COLORS, TRACKED_SIZES } from 'constants/filter';
import Icon from 'components/Icon';
import { ICONS } from 'constants/icons';

@translate()
@injectSheet( styles )
export default class BundleStep3 extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    t: PropTypes.func.isRequired,
    productType: PropTypes.object.isRequired,
    itemsData: PropTypes.array.isRequired,
    customSubmit: PropTypes.func.isRequired,
    handleClear: PropTypes.func.isRequired,
  };

  render() {
    const {
      t,
      classes,
      customSubmit,
    } = this.props;

    const {
      root,
    } = classes;

    let itemsData = [ShopItems[0],ShopItems[1]];

    return (
      <div className={root}>

        <div className={classes.leftSide}>

          {
            itemsData.map(( itemData ) => {

              return(
                <div key={itemData.image} className={classes.finalItemContainer}>

                  <div  className={classes.imageWrapper}>
                    <div
                      className={classes.image}
                      style={{
                        backgroundImage: `url('${itemData.image}')`
                      }}/>
                  </div>

                  <Typography
                    variant={H3}
                    className={classes.itemProductLabel}>
                    {t( 'product:VIPER HELMET (1/2)' )}
                  </Typography>

                  <div className={classes.row}>

                    <Typography
                      className={classes.rowLabel}
                      variant={H6}>
                      {`${t( 'product:Color' )}: White`}
                    </Typography>

                    <Typography
                      className={classes.rowLabel}
                      variant={H6}>
                      {`${t( 'product:Size' )}: S`}
                    </Typography>
                  </div>

                </div>
              )
            })
          }
        </div>

        <div className={classes.rightSide}>
          <Typography
            variant={H3}
            className={classes.productLabel}>
            {'VIPER HELMET & VISOR BUNDLE'}
          </Typography>

          <Typography
            variant={H5}
            className={classes.cost}>
            {`Rp ${'399,000'}`}
          </Typography>

          <Button
            type="submit"

            className={classes.nextButton}>
            {t( 'filter:ADD BUNDLE TO CART' )}
          </Button>

          <Link to={''} className={classes.backLink}>
            <Typography
              variant={H6}
              onClick={ () => customSubmit( CREATE_BUNDLE_STEPS.ITEM_CONFIGURATION ) }>
              {'Not sure? Go back and edit'}
            </Typography>
          </Link>
        </div>

      </div>
    );
  }
}
