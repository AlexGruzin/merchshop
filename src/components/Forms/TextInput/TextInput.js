import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import injectSheet from 'react-jss';
import styles from './styles';
import TextField from '@material-ui/core/TextField';
import Error from 'components/Forms/Error';
import { translate } from 'react-i18next';

@translate()
@injectSheet( styles )
export default class TextInput extends PureComponent {
  static propTypes = {
    input: PropTypes.object.isRequired,
    meta: PropTypes.object.isRequired,
    t: PropTypes.func,
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
    disableUnderline: true,
  };

  render() {
    const {
      classes,
      autoFocus,
      input,
      meta,
      placeholder,
      multiline,
      type,
      className,
      inputClassName,
      errorClassName,
      variant,
      disableUnderline,
      t,
    } = this.props;

    const errorMessage = (meta.error) ? t(meta.error) : t(meta.warning);
    const messageType = (meta.error) ? 'error' : 'warning';
    const error = !!meta.error && meta.touched;

    return (
      <div className={classNames( className, classes.textInput )}>
        <TextField
          variant={variant}
          error={error}
          multiline={multiline}
          placeholder={placeholder}
          InputProps={{
            className: inputClassName,
            fullWidth: true,
            disableUnderline: disableUnderline,
          }}
          fullWidth
          onChange={event => input.onChange( event.target.value )}
          onBlur={input.onBlur}
          value={input.value}
          type={type}
          autoFocus={autoFocus}/>
        {
          ( !!meta.error || !!meta.warning ) && meta.touched
          && <Error
            messageType={messageType}
            classNames={errorClassName}
            error={errorMessage}/>
        }
      </div>
    );
  }
}
