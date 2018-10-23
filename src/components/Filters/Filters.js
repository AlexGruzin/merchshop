import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import injectSheet from 'react-jss';
import { Field } from 'redux-form/immutable';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import MenuItem from '@material-ui/core/MenuItem';

import TextInput from 'components/Forms/TextInput';
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
    initProductType: PropTypes.string,
  };

  static defaultProps = {
    productType: productTypes.ALL,
  };

  constructor( props ) {
    super( props );
    this.state={
      productType: null,
    }
  }

  render() {
    const {
      t,
      classes,
      handleSubmit,
      initProductType,
    } = this.props;

    return (
      <div className={classes.rootFilters}>
        <form
          className={classes.filtersWrapper}
          onSubmit={handleSubmit}>

          <div className={classes.oneFilterWrapper}>
            <Typography className={classes.label} variant={HEADLINE}>
              {t( 'Cost' )}
            </Typography>
            <div className={classes.costFieldWrapper}>

              <Field
                className={classes.textFieldMinCost}
                name="minCost"
                component={TextInput}
                inputClassName={classes.input}
                props={{
                  disableUnderline: true,
                  type: 'minCost'
                }}/>

              <Field
                className={classes.textFieldMaxCost}
                name="maxCost"
                component={TextInput}
                inputClassName={classes.input}
                props={{
                  type: 'maxCost'
                }}/>
            </div>
          </div>

          <div className={classes.oneFilterWrapper}>
            <Typography className={classes.label} variant={HEADLINE}>
              {t( 'Type' )}
            </Typography>

            <Field
              props={{
                type: 'productType'
              }}
              name="productType"
              variant="outlined"
              initialValue={this.state.productType || initProductType}
              component={DropdownSelect}
            >
              {
                productsFilter.map(( item )=>{
                  return(
                    <MenuItem key={item.name} value={item.name}>
                      <Typography>
                        {t( item.name )}
                      </Typography>
                    </MenuItem>
                  )
                })
              }
            </Field>
          </div>

          <div className={classes.oneFilterWrapper}>
            <Typography className={classes.label} variant={HEADLINE}>
              {t( 'Brand' )}
            </Typography>

            <Field
              props={{
                type: 'text'
              }}
              name="productBrand"
              initialValue={0}
              component={DropdownSelect}
            >
              <MenuItem value={0}>
                <Typography>
                  {t( 'Zulu' )}
                </Typography>
              </MenuItem>
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

