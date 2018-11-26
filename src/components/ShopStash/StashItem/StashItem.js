import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import injectSheet from 'react-jss';
import styles from './styles';
import Typography from '@material-ui/core/Typography';
import Rating from 'react-rating';

import { BODY1, SUBTITLE1 } from 'constants/typography';
import Images from 'theme/images';

@translate()
@injectSheet( styles )
export default class SellItem extends PureComponent {

  static propTypes = {
    t: PropTypes.func.isRequired,
    itemData:  PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
  };

  static defaultProps = {
    soldOut: false,
  };

  render() {
    const {
      itemData,
      classes,
      t,
    } = this.props;

    const {
      label,
      cost,
      rate,
      image,
      reviews,
    } = itemData;

    return (
      <div className={classes.root}>
        <div className={classes.imageWrapper}>
          <div
            className={classes.image}
            style={{
              backgroundImage: `url('${image}')`
            }}/>
        </div>

        <Typography className={classes.label} variant={BODY1}>{label}</Typography>
        <Typography className={classes.cost} variant={BODY1}>{t( 'homePage:cost' ).replace( '${cost}', cost )}</Typography>

        <div className={classes.rating}>
          <Rating
            readonly
            initialRating={rate}
            emptySymbol={
              <div
                className={classes.star}
                style={{ // TODO: stars should be made with icomoon icons
                  backgroundImage: `url('${Images.gray}')`
                }}/>
            }
            fullSymbol={
              <div
                className={classes.star}
                style={{
                  backgroundImage: `url('${Images.black}')`
                }}/>
            }
            placeholderSymbol={
              <div
                className={classes.star}
                style={{
                  backgroundImage: `url('${Images.placeholder}')`
                }}/>
            }/>
          <Typography className={classes.reviewsCount} variant={SUBTITLE1}>{reviews}</Typography>
        </div>
      </div>
    );
  }
}
