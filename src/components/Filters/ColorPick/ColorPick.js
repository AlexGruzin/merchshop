import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import injectSheet from 'react-jss';
import styles from './styles';

@injectSheet( styles )
export default class ColorPick extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.array.isRequired,
    color: PropTypes.string.isRequired,
    cursor: PropTypes.string.isRequired,
    modificator: PropTypes.string,
  };

  constructor( props ) {
    super( props );
    this.state = {
      value: false,
    };
  }

  static defaultProps = {
    className: null,
  };

  handleChange = ( event ) => {
    this.setState({ value: event.target.value });
  };

  render() {
    const {
      input,
      type,
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
          type="checkbox"
          checked={this.state.value}
          value={this.state.value}
          onChange={this.handleChange}
        />
        <label style={{
          color: cursor,
        }} for={color} />
      </div>
    );
  }
}
