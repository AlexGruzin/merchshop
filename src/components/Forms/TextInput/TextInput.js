import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import injectSheet from 'react-jss';
import styles from './styles';
import TextField from '@material-ui/core/TextField';
import Error from 'components/Forms/Error';

@injectSheet( styles )
export default class TextInput extends PureComponent {
  static propTypes = {
    input: PropTypes.object.isRequired,
    meta: PropTypes.object.isRequired,

    multiline: PropTypes.bool,
    placeholder: PropTypes.string,
    className: PropTypes.string,
    inputClassName: PropTypes.string,
    errorClassName: PropTypes.string,
    type: PropTypes.string,
    autoFocus: PropTypes.bool,
  };

  static defaultProps = {
    multiline: false,
    autoFocus: false,
    placeholder: '',
    className: '',
    inputClassName: '',
    errorClassName: '',
    type: 'text',
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
    } = this.props;

    const errorMessage = meta.error || meta.warning;
    const messageType = ( meta.error ) ? 'error' : 'warning';

    return (
      <div className={classnames( className, classes.textInput )}>
        <TextField
          error={!!meta.error && meta.touched}
          multiline={multiline}
          placeholder={placeholder}
          InputProps={{
            className: `${inputClassName}`
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
