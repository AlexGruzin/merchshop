import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import injectSheet from 'react-jss';
import styles from './styles';
import RadioGroup from '@material-ui/core/RadioGroup';

@injectSheet( styles )
export default class CustomRadioGroup extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    input: PropTypes.object.isRequired,

    className: PropTypes.string,
  };

  static defaultProps = {
    className: null,
  };

  render() {
    const {
      classes,
      className,
      input,
      rest,
      children,
    } = this.props;

    return (
      <div className={classNames( className, classes.root )}>
        <RadioGroup
          {...input}
          {...rest}
          value={input.value}
          onChange={( event, value ) => input.onChange( value )}
          classes={{
            root: classes.rootRadioGroup,
          }}
        >
          {children}
        </RadioGroup>
      </div>
    );
  }
}
