import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import injectSheet from 'react-jss';
import classNames from 'classnames';

import { Field } from 'redux-form/immutable';
import FormControl from '@material-ui/core/FormControl';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import ColorPick from 'components/Filters/ColorPick';

import TextInput from 'components/Forms/TextInput';
import DropdownSelect from 'components/Forms/DropdownSelect';

import { CAPTION } from 'constants/typography';
import styles from './styles';

import { CREATE_BUNDLE_STEPS } from 'constants/product';
import { productTypes, productsFilter, ShopItems } from 'constants/shop';
import { H1, H4, SUBHEADING } from 'constants/typography';
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
      dotWrapper,
      colorDot,
    } = classes;

    let itemsData = [ShopItems[0],ShopItems[1]];

    return (
      <div className={classes.root}>

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
                  variant={H4}
                  className={classes.itemProductLabel}>
                  {t( 'product:VIPER HELMET (1/2)' )}
                </Typography>

                <div className={classes.row}>

                  <Typography
                    className={classes.rowLabel}
                    variant={CAPTION}>
                    {`${t( 'product:Color' )}: White`}
                  </Typography>

                  <Typography
                    className={classes.rowLabel}
                    variant={CAPTION}>
                    {`${t( 'product:Size' )}: S`}
                  </Typography>
                </div>

              </div>
            )
          })
        }

        <Typography
          variant={H4}
          className={classes.productLabel}>
          {'VIPER HELMET & VISOR BUNDLE'}
        </Typography>

        <Typography
          variant={H1}
          className={classes.cost}>
          {`Rp ${'399,000'}`}
        </Typography>

        <Button
          type="submit"

          className={classes.nextButton}>
          {t( 'filter:ADD BUNDLE TO CART' )}
        </Button>


        <Typography
          variant={SUBHEADING}
          onClick={ () => customSubmit( CREATE_BUNDLE_STEPS.ITEM_CONFIGURATION ) }
          className={classes.backLink}>
          {'Not sure? Go back and edit'}
        </Typography>


      </div>
    );
  }
}
