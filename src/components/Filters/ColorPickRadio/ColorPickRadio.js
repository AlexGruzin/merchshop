import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import injectSheet from 'react-jss';
import styles from './styles';

@injectSheet( styles )
export default class ColorPickRadio extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.array.isRequired,
    color: PropTypes.string.isRequired,
    cursor: PropTypes.string.isRequired,
    modificator: PropTypes.string,
  };

  static defaultProps = {
    className: null,
  };

  render() {
    const {
      input,
      value,
      color,
      cursor,
      modificator,
      classes,
      className,
    } = this.props;

    return (
      <div
        className={classNames( className, classes.wrapper )}
        style={{
          background: color,
          border: modificator ? `0.5px solid ${modificator}` : null,
        }}>

        <input
          id={color}
          type="radio"
          value={this.props.value}
          name={this.props.name}
        />
        <label style={{
          color: cursor,
        }} for={color} />
      </div>
    );
  }
}

