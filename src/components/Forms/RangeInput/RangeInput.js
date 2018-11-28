import Typography from '@material-ui/core/Typography';

import { SUBTITLE1 } from 'constants/typography';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import classNames from 'classnames';
import injectSheet from 'react-jss';
import styles from './styles';
import { translate } from 'react-i18next';
import TextInput from 'components/Forms/TextInput';

import { SUBHEADING } from 'constants/typography';

@translate()
@injectSheet( styles )
export default class RangeInput extends PureComponent {
  static propTypes = {
    multiline: PropTypes.bool,
    placeholder: PropTypes.string,
    className: PropTypes.string,
    inputClassName: PropTypes.string,
    errorClassName: PropTypes.string,
    type: PropTypes.string,
    autoFocus: PropTypes.bool,

    variant: PropTypes.string,
    disableUnderline: PropTypes.bool,
  };

  static defaultProps = {
    multiline: false,
    autoFocus: false,
    placeholder: '',
    className: '',
    inputClassName: '',
    errorClassName: '',
    type: 'text',
    variant: 'standard',
    disableUnderline: false,
  };

  render() {
    const {
      t,
      fields,

      classes,
      autoFocus,
      placeholder,
      multiline,
      type,
      className,
      inputClassName,
      errorClassName,
      variant,
      disableUnderline,

      minCost,
      maxCost,
    } = this.props;

    return (
      <div className={classes.root}>


        <Typography className={classes.minLabel} variant={SUBTITLE1}>
          {t( "filter:min" )}
        </Typography>
        <TextInput
          input={minCost.input}
          inputClassName={classes.input}
          meta={minCost.meta}
          name="minCost"
          className={classes.textFieldMinCost}
          type={'number'}
        />

        <Typography className={classes.maxLabel} variant={SUBTITLE1}>
          {t( "filter:max" )}
        </Typography>
        <TextInput
          input={maxCost.input}
          inputClassName={classes.input}
          meta={maxCost.meta}
          name="maxCost"
          className={classes.textFieldMaxCost}
          type={'number'}
        />

      </div>
    );
  }
}
