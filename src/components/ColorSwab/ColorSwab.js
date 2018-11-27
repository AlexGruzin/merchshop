import PropTypes from "prop-types";
import React, { Component } from "react";
import { ICONS } from "../../constants/icons";
import Icon from "../Icon/Icon";
import styles from './styles';
import injectSheet from 'react-jss';

@injectSheet( styles )
export default class ColorSwab extends Component {

  static propTypes = {
    color: PropTypes.string.isRequired,
    size: PropTypes.number,
    classes: PropTypes.object,
    margin: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    active: PropTypes.bool
  };

  static defaultProps = {
    size: 22,
    margin: 0,
    active: false
  };

  constructor( props ) {
    super ( props );

  }

  render() {
    const { size, color, classes, margin, active } = this.props;
    const style = {
      width: size,
      height: size,
      backgroundColor: color,
      margin
    };

    return (
      <div className={classes.root} style={style}>
        {active && <Icon icon={ICONS.DONE} className={classes.Tick} />}
      </div>
    )
  }

}
