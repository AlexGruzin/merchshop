import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import injectSheet from 'react-jss';
import styles from './styles';
import Typography from '@material-ui/core/Typography';
import Rating from 'react-rating';

import { BODY1, SUBHEADING } from 'constants/typography';
import Images from 'theme/images';

@translate()
@injectSheet( styles )
export default class SellItem extends PureComponent {

  static propTypes = {
    t: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    cost: PropTypes.string.isRequired,
    rate: PropTypes.number.isRequired,
    reviews: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    soldOut: PropTypes.bool,
  };

  static defaultProps = {
    soldOut: false,
  };

  render() {
    const {
      classes,
      t,
      name,
      cost,
      rate,
      reviews,
      image,
      soldOut,
    } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.imageWrapper}>
          { soldOut && <Typography className={classes.soldOut} variant={BODY1}>{t( 'homePage:soldOut' )}</Typography> }
          <div
            className={classes.image}
            style={{
              backgroundImage: `url('${image}')`
            }}/>
        </div>
        <Typography className={classes.name} variant={BODY1}>{name}</Typography>
        <Typography className={classes.cost} variant={BODY1}>{t( 'homePage:cost' ).replace( '${cost}', cost )}</Typography>
        <div className={classes.rating}>
          <Rating
            readonly
            initialRating={rate}
            emptySymbol={
              <div
                className={classes.star}
                style={{
                  backgroundImage: `url('${Images.grey}')`
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
          <Typography className={classes.reviewsCount} variant={SUBHEADING}>{reviews}</Typography>
        </div>
      </div>
    );
  }
}
