import React, { Component } from "react";
import injectSheet from 'react-jss';
import styles from "./styles"
import classNames from 'classnames';
import PropTypes from 'prop-types';

@injectSheet( styles )
export default class CarouselPreview extends Component {
  static propTypes = {
    classes: PropTypes.object,
    url: PropTypes.string,
    i: PropTypes.number.isRequired,
    onClick: PropTypes.func,
    active: PropTypes.bool,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  };

  static defaultProps = {
    classes: '',
    url: '',
    onClick: () => null,
    active: false,
    width: 'auto'
  };
  render() {
    const { classes, url, i, onClick, active, width } = this.props;
    // noinspection JSSuspiciousNameCombination
    return (
      <div className={classes.previewWrapper} style={{ paddingTop: width, width }}>
        <div
          className={classNames( classes.preview, active ? classes.previewActive : '' )}
          style={{ backgroundImage: `url(${url})` }} onClick={() => onClick( i )} />
      </div>
    )
  }

}
