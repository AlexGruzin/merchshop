import React, { Component } from 'react';
import styles from './styles';
import injectSheet from 'react-jss';

@injectSheet( styles )
export default class GrowBox extends Component {
  render() {
    const { classes } = this.props;
    return <div className={classes.GrowBox} />
  }
}




