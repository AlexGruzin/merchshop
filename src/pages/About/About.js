import Typography from "@material-ui/core/Typography";
import React, { PureComponent } from 'react';
import ReactHelmet from 'react-helmet';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import injectSheet from 'react-jss';
import * as typography from "../../constants/typography";

import styles from './styles';

@translate()
@injectSheet( styles )
export default class About extends PureComponent {

  static propTypes = {
    classes: PropTypes.object,
    t: PropTypes.func
  };

  render() {
    const {
      t,
      classes
    } = this.props;

    return (
      <div className={classes.root}>
        <ReactHelmet title={t( 'about:title' )}/>
        <div className={classes.container}>
          <Typography variant={typography.H3} className={classes.heading}>{t( 'about:heading' )}</Typography>
          <img src={'https://placehold.it/548x247'} alt={'zulu'} className={classes.image} />
          <section className={classes.paragraphContainer}>
            <Typography variant={typography.BODY1} className={classes.paragraph}>{t( 'about:paragraph1' )}</Typography>
            <Typography variant={typography.BODY1} className={classes.paragraph}>{t( 'about:paragraph2' )}</Typography>
            <Typography variant={typography.BODY1} className={classes.paragraph}>{t( 'about:paragraph3' )}</Typography>
          </section>
        </div>
      </div>
    );
  }
}
