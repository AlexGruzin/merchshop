import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import injectSheet from 'react-jss';
import { Field, Fields } from 'redux-form/immutable';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import MenuItem from '@material-ui/core/MenuItem';

import TextInput from 'components/Forms/TextInput';
import RangeInput from 'components/Forms/RangeInput';

import DropdownSelect from 'components/Forms/DropdownSelect';

import { HEADLINE } from 'constants/typography';
import styles from './styles';

import { productTypes, productsFilter } from 'constants/shop';

@translate()
@injectSheet( styles )
export default class Filter extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    t: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  };

  render() {
    const {
      t,
      classes,
      handleSubmit,
    } = this.props;

    return (
      <div className={classes.rootFilters}>
        <form
          className={classes.filtersWrapper}
          onSubmit={handleSubmit}
        >

          <div className={classes.oneFilterWrapper}>

            <Typography className={classes.label} variant={HEADLINE}>
              {t( 'Cost' )}
            </Typography>
            <div className={classes.rangeInputWrapper}>
              <Fields
                names={["minCost", "maxCost"]}
                component={RangeInput}
              />
            </div>
          </div>

          <div className={classes.oneFilterWrapper}>
            <Typography className={classes.label} variant={HEADLINE}>
              {t( 'shop:type' )}
            </Typography>

            <Field
              props={{
                type: 'text'
              }}
              name="productType"
              component={DropdownSelect}
            >
              {productsFilter}
            </Field>
          </div>

          <Button
            type="submit"
            className={classes.submitButton}>
            {t( 'Filter' )}
          </Button>
        </form>

      </div>
    );
  }
}

