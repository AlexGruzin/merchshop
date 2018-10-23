import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import injectSheet from 'react-jss';
import styles from './styles';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';

@injectSheet( styles )
export default class DropdownSelect extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    variant: PropTypes.string,
    children: PropTypes.array.isRequired,
  };

  constructor( props ) {
    super( props );
    this.state={
      value: null,
    }
  }

  static defaultProps = {
    className: '',
    type: 'text',
    variant: 'outlined',
  };

  render() {
    const {
      type,
      classes,
      variant,
      children,
      className,

      initialValue,
      input,
      ...custom,
    } = this.props;

    return (
      <div className={classNames( className, classes.textInput )}>
        <Select
          input={
            <OutlinedInput
              labelWidth={0}
              name="age"
              id="outlined-age-simple"
            />
          }
          {...custom}
          className={classes.select}
          classes={{
            root: classes.root,
          }}
          variant={variant}
          onChange={({ target }) => {
            input.onChange( target.value, this.setState({
              value: target.value
            }));
          }}
          value={this.state.value || initialValue}
        >
          {children}
        </Select>
      </div>
    );
  }
}
