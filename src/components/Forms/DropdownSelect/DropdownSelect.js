import OutlinedInput from "@material-ui/core/OutlinedInput";
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import FormControl from '@material-ui/core/FormControl';
import injectSheet from 'react-jss';
import { translate } from 'react-i18next';
import styles from './styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import Icon from 'components/Icon';
import { ICONS } from 'constants/icons';

@translate()
@injectSheet( styles )
export default class DropdownSelect extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    variant: PropTypes.string,
    value: PropTypes.string.isRequired,
    choices: PropTypes.array,
    placeholder: PropTypes.string,
    onChange: PropTypes.func.isRequired
  };

  static defaultProps = {
    className: '',
    type: 'text',
    variant: 'standard',
    choices: [],
    placeholder: ''
  };

  render() {
    const {
      value,
      classes,
      placeholder,
      choices,
      className,
    } = this.props;

    return (
      <FormControl className={classNames( className, classes.formControl )} >
        <Select
          // displayEmpty
          // input={<OutlinedInput labelWidth={0} classes={{}}/>}
          classes={{
            root: classes.root,
            select: classes.select,
            icon: classes.icon,
          }}
          MenuProps={{
            classes: {
              paper: classes.menuPaper,
            }
          }}
          // IconComponent={<Icon icon={ICONS.EXPAND_DOWN}/>}
          // value={value}
        >
          <MenuItem value='' disabled>{placeholder}</MenuItem>
          {choices.map( size =>
            Array.isArray( size ) ?
              <MenuItem key={size[0]} value={size[0]}>{size[1]}</MenuItem>
              : <MenuItem key={size} value={size}>{size}</MenuItem>
          )}
        </Select>

      </FormControl>
    );
  }
}
