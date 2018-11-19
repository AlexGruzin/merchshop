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

import { productTypes, productsFilter } from 'constants/shop';
import { TRACKED_COLORS, TRACKED_SIZES } from 'constants/filter';
import Icon from 'components/Icon';
import { ICONS } from 'constants/icons';

@translate()
@injectSheet( styles )
export default class ProductReviews extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    t: PropTypes.func.isRequired,
    productType: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleClear: PropTypes.func.isRequired,
  };

  render() {
    const {
      t,
      classes,
      handleSubmit,
    } = this.props;

    const {
      root,
      dotWrapper,
      colorDot,
    } = classes;

    return (
      <form
        className={root}
        onSubmit={handleSubmit}>


        <Field
          name="filterSortBy"
          component={DropdownSelect}
          props={{
            className: classes.dropDownField,
            value: 'Sort By: Top Rated',
          }}
        >
          {[{ name: `Sort By: Top Rated` }]}
        </Field>

        <Typography
          className={classes.colorLabel}
          variant={CAPTION}>
          {`${t( 'filter:Colors' )}:`}
        </Typography>

        <div className={classes.dotsWrapper}>
          {
            TRACKED_COLORS.map(( item )=> {

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

        <Typography
          className={classes.sizesLabel}
          variant={CAPTION}>
          {`${t( 'filter:SizeGuide' )}:`}
        </Typography>

        <Button
          type="submit"
          className={classes.filterButton}>
          {t( 'filter:NEXT' )}
        </Button>

      </form>

    );
  }
}
