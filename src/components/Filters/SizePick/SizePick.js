import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import injectSheet from 'react-jss';
import styles from './styles';

@injectSheet( styles )
export default class SizePick extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    label: PropTypes.string.isRequired,
  };

  constructor( props ) {
    super( props );
    this.state = {
      value: false,
    };
  }

  handleChange = ( event ) => {
    this.setState({ value: event.target.value });
  };

  static defaultProps = {
    className: null,
  };

  render() {
    const {
      input,

      label,
      classes,
      className,
    } = this.props;

    return (
      <div className={classNames( className, classes.wrapper )}>
        <input
          id={label}
          type="checkbox"
          checked={this.state.value}
          value={this.state.value}
          onChange={this.handleChange}
        />
        <label
          for={label}
        >{label}</label>
      </div>
    );
  }
}
