import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import injectSheet from 'react-jss';
import { translate } from 'react-i18next';
import styles from './styles';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import OutlinedInput from '@material-ui/core/OutlinedInput';

@translate()
@injectSheet( styles )
export default class DropdownSelect extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    variant: PropTypes.string,
    children: PropTypes.array.isRequired,
    value: PropTypes.string.isRequired,
  };

  static defaultProps = {
    className: '',
    type: 'text',
    variant: 'standard',
  };

  render() {
    const {
      t,
      input,
      type,
      value,

      classes,
      variant,
      children,
      className,
      ...custom,
    } = this.props;

    return (
      <div className={classNames( className, classes.textInput )}>
        <Select
          //{...input}
          {...custom}
          className={classes.select}
          classes={{
            root: classes.root,
          }}
          disableUnderline
          variant={variant}
          onChange={({ target }) => {
            input.onChange( target.value, this.setState({
              value: target.value
            }));
          }}
          value={value}
        >
          {
            children.map(( item )=>{
              return(
                <MenuItem key={item.name} value={item.name}>
                  <Typography>
                    {t( item.name )}
                  </Typography>
                </MenuItem>
              )
            })
          }
        </Select>
      </div>
    );
  }
}
