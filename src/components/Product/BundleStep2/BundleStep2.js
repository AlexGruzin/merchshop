import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import injectSheet from 'react-jss';
import classNames from 'classnames';

import { Field } from 'redux-form/immutable';
import FormControl from '@material-ui/core/FormControl';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Gesture from '@material-ui/icons/';

import ColorPick from 'components/Filters/ColorPick';

import TextInput from 'components/Forms/TextInput';
import ProductSlider from 'components/ProductSlider';
import DropdownSelect from 'components/Forms/DropdownSelect';

import { CAPTION } from 'constants/typography';
import { CREATE_BUNDLE_STEPS } from 'constants/product';
import styles from './styles';

import { productTypes, productsFilter } from 'constants/shop';
import { TRACKED_COLORS, TRACKED_SIZES } from 'constants/filter';
import { ShopItems, PRODUCT_TYPES } from 'constants/shop';
import Icon from 'components/Icon';
import { ICONS } from 'constants/icons';

@translate()
@injectSheet( styles )
export default class BundleStep2 extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    t: PropTypes.func.isRequired,
    productType: PropTypes.object.isRequired,
    customSubmit: PropTypes.func.isRequired,
    handleClear: PropTypes.func.isRequired,
    availableColors: PropTypes.array.isRequired,
    availableSizes: PropTypes.array.isRequired,
  };

  render() {
    const {
      t,
      classes,
      handleSubmit,
      customSubmit,
    } = this.props;

    const {
      root,
      dotWrapper,
      colorDot,
    } = classes;

    let {
      images,
    } = ShopItems[0]; // productData

    return (
      <div className={root}>

        <ProductSlider
          images={images}/>

        <form
          className={classes.formRoot}
          //onSubmit={handleSubmit}
        >

          <Typography
            className={classes.colorLabel}
            variant={CAPTION}>
            {`${t( 'product:Color' )}: White`}
          </Typography>

          <div className={classes.dotsWrapper}>
            {
              TRACKED_COLORS.slice( 0,5 ).map(( item )=> {

                return(
                  <FormControl key={item.color} className={dotWrapper}>
                    <Field
                      name={`color_${item.color}`}
                      component={ColorPick}
                      props={{
                        color: item.color,
                        cursor: item.cursor,
                        modificator: item.modificator,
                      }}
                    />

                  </FormControl>
                )}
              )
            }
          </div>

          <div className={classes.row}>

            <Field
              name="productSize"
              component={DropdownSelect}
              props={{
                className: classes.dropDownField,
                value: 'XL',
              }}
            >
              {[{ name: `XL` }]}
            </Field>

            <Typography
              className={classes.guideLabel}
              variant={CAPTION}>
              {t( 'product:SizeGuide' )}
            </Typography>
          </div>

          <Button
            type="submit"
            onClick={ () => customSubmit( CREATE_BUNDLE_STEPS.FINAL_INSPECTION ) }
            className={classes.nextButton}>
            {t( 'filter:NEXT' )}
          </Button>

        </form>

      </div>
    );
  }
}
