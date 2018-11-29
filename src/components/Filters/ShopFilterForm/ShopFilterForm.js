import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import injectSheet from 'react-jss';
import { Field } from 'redux-form/immutable';
import classNames from 'classnames';

import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import ColorPick from 'components/Filters/ColorPick';
import SizePick from 'components/Filters/SizePick';
import DropdownSelect from 'components/Forms/DropdownSelect';

import { H6, SECONDARY, PRIMARY } from 'constants/typography';
import styles from './styles';

import { productTypes, PRODUCTS_FILTER } from 'constants/shop';
import { TRACKED_COLORS, TRACKED_SIZES } from 'constants/filter';
import Icon from 'components/Icon';
import { ICONS } from 'constants/icons';

@translate()
@injectSheet( styles )
export default class FilterForm extends PureComponent {
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
      handleClear,
    } = this.props;

    const {
      root,
      dotWrapper,
    } = classes;

    return (
      <form
        className={root}
        onSubmit={handleSubmit}>


        <div className={classes.blocksContainer}>

          <div className={classNames(classes.filterBlock, classes.selectBlock)}>
            <Field
              name="filterSortBy"
              component={DropdownSelect}
              props={{
                className: classes.dropDownField,
                value: '',
                placeholder: 'Sort By: Top Rated',
              }}
            >
              {[{ name: `Sort By: Top Rated` }]}
            </Field>
          </div>

          <div className={classNames(classes.filterBlock, classes.colorBlock)}>

            <Typography
              className={classes.colorLabel}
              variant={H6}>
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
          </div>

          <div className={classNames(classes.filterBlock, classes.sizeBlock)}>

            <Typography
              className={classes.sizesLabel}
              variant={H6}>
              {`${t( 'filter:Sizes' )}:`}
            </Typography>

            <div className={classes.sizesWrapper}>
              {
                TRACKED_SIZES.map(( item )=> (

                  <div key={item.size} className={classes.size}>
                    <SizePick
                      label={item.size}
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>


        <div className={classes.buttonWrapper}>
          <Button color={SECONDARY}
            type="submit"
            className={classes.filterButton}>
            {t( 'filter:apply filters' )}
          </Button>
          <Button color={PRIMARY}
            className={classes.clearButton}>
            {t( 'filter:filter' )}
          </Button>
        </div>

      </form>
    );
  }
}
