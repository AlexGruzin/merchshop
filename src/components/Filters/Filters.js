import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import OldDropdownSelect from 'components/Forms/DropdownSelect';
import RangeInput from 'components/Forms/RangeInput';

import { productsFilter, productTypes } from 'constants/shop';

import { HEADLINE } from 'constants/typography';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { translate } from 'react-i18next';
import injectSheet from 'react-jss';
import { Field, Fields } from 'redux-form/immutable';
import styles from './styles';

@translate()
@injectSheet( styles )
export default class Filter extends PureComponent {
  static propTypes = {
    classes: PropTypes.object,
    t: PropTypes.func,
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
          onSubmit={handleSubmit}>

          <div className={classes.oneFilterWrapper}>

            <Typography className={classes.label} variant={HEADLINE}>
              {t( 'filter:cost' )}
            </Typography>
            <div className={classes.rangeInputWrapper}>
              <Fields
                names={["minCost", "maxCost"]}
                component={RangeInput}/>
            </div>
          </div>

          <div className={classes.oneFilterWrapper}>
            <Typography className={classes.label} variant={HEADLINE}>
              {t( 'filter:type' )}
            </Typography>

            <Field
              props={{
                type: 'text'
              }}
              name="productType"
              component={OldDropdownSelect}>
              {productsFilter}
            </Field>
          </div>

          <Button
            type="submit"
            className={classes.submitButton}>
            {t( 'filter:filter' )}
          </Button>
        </form>

      </div>
    );
  }
}

