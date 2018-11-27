import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import injectSheet from 'react-jss';
import classNames from 'classnames';

import { Field } from 'redux-form/immutable';
import FormControl from '@material-ui/core/FormControl';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import RadioGroup from '@material-ui/core/RadioGroup';
import RadioButton from '@material-ui/core/Radio';

import Gesture from '@material-ui/icons/';

import ColorPickRadio from 'components/Filters/ColorPickRadio';
import Link from 'components/Link';

import TextInput from 'components/Forms/TextInput';
import ProductSlider from 'components/ProductSlider';
import DropdownSelect from 'components/Forms/DropdownSelect';

import { H6, H3 } from 'constants/typography';
import { CREATE_BUNDLE_STEPS } from 'constants/product';
import styles from './styles';

import { productTypes, productsFilter } from 'constants/shop';
import { TRACKED_COLORS, TRACKED_SIZES } from 'constants/filter';
import { ShopItems, PRODUCT_TYPES } from 'constants/shop';
import { H1, H4, H5 } from 'constants/typography';
import Icon from 'components/Icon';
import { ICONS } from 'constants/icons';

const itemAvaliableColors = TRACKED_COLORS.slice( 0,5 );

@translate()
@injectSheet( styles )
export default class BundleStep2 extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    t: PropTypes.func.isRequired,
    productType: PropTypes.object.isRequired,
    productImages: PropTypes.array.isRequired,
    customSubmit: PropTypes.func.isRequired,
    handleClear: PropTypes.func.isRequired,
    availableColors: PropTypes.array.isRequired,
    availableSizes: PropTypes.array.isRequired,
  };

  render() {
    const {
      t,
      classes,
      productImages,
      handleSubmit,
      customSubmit,
    } = this.props;

    const {
      root,
      dotWrapper,
      colorDot,
    } = classes;

    const renderRadioGroup = ({ input, ...rest }) => (
      <RadioGroup
        {...input}
        {...rest}
        valueSelected={input.value}
        onChange={(event, value) => input.onChange(value)}
      />
    );

    return (
      <div className={root}>

        <div className={classes.leftSide}>
          <ProductSlider
            images={productImages}/>
        </div>

        <div className={classes.rightSide}>
          <form
            className={classes.formRoot}
            //onSubmit={handleSubmit}
          >

            <Typography
              variant={H3}
              className={classes.productLabel}>
              {t( 'product:VIPER HELMET (1/2)' )}
            </Typography>

            <Typography variant={H5}>
              {`Rp ${'399,000'}`}
            </Typography>

            <Typography
              className={classes.colorLabel}
              variant={H6}>
              {`${t( 'product:Color' )}: White`}
            </Typography>

            <div className={classes.dotsWrapper}>
              {
                itemAvaliableColors.map(( item )=> (
                    <Field
                      key={item.color}
                      className={dotWrapper}
                      component={ColorPickRadio}
                      props={{
                        name: "colorStep2",
                        value: item.color,
                        color: item.color,
                        cursor: item.cursor,
                        modificator: item.modificator,
                      }}
                    />
                  )
                )
              }
            </div>

            <div className={classes.row}>

              <Field
                name="sizeStep2"
                component={DropdownSelect}
                props={{
                  className: classes.dropDownField,
                  value: '',
                  placeholder: 'Select Size',
                }}
              >
                {TRACKED_SIZES}
              </Field>

              <Icon className={classes.guideIcon} icon={ICONS.INSTAGRAM_ICON}/>

              <Link to={'size_guide'} className={classes.guideLabel}>
                <Typography variant={H6}>
                  {t( 'product:Size Guide' )}
                </Typography>
              </Link>
            </div>

            <Button
              type="submit"
              onClick={ () => customSubmit( CREATE_BUNDLE_STEPS.FINAL_INSPECTION ) }
              className={classes.nextButton}>
              {t( 'filter:NEXT' )}
            </Button>

          </form>
        </div>
      </div>
    );
  }
}
