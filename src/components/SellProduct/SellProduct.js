import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import injectSheet from 'react-jss';
import styles from './styles';
import Typography from '@material-ui/core/Typography';
import Rating from 'react-rating';

import { BODY1, SUBTITLE1, H1, BODY2 } from 'constants/typography';
import Images from 'theme/images';

import Icon from 'components/Icon';
import { ICONS } from 'constants/icons';

@translate()
@injectSheet( styles )
export default class SellProduct extends PureComponent {

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
          { soldOut && <Typography className={classes.soldOut} variant={BODY2}>{t( 'homePage:SOLD OUT' )}</Typography> }
          <div
            className={classes.image}
            style={{
              backgroundImage: `url('${image}')`
            }}/>
        </div>

        <div className={classes.amountColorsWrapper}>
          <Typography className={classes.number} variant={BODY1}>{'8'}</Typography>
          <Typography className={classes.colors} variant={BODY1}>{t( 'shop:colors' )}</Typography>
        </div>

        <div className={classes.hr}/>

        <Typography className={classes.name} variant={BODY1}>{name}</Typography>
        <Typography className={classes.cost} variant={H1}>{t( 'homePage:cost' ).replace( '${cost}', cost )}</Typography>

        <div className={classes.rating}>
          <Rating
            readonly
            initialRating={rate}
            emptySymbol={
              <Icon icon={ICONS.STAR_EMPTY} className={classes.star}/>
            }
            fullSymbol={
              <Icon icon={ICONS.STAR_FILLED} className={classes.star}/>
            }
            placeholderSymbol={
              <Icon icon={ICONS.STAR_HALF} className={classes.star}/>
            }/>
          <Typography className={classes.reviewsCount} variant={SUBTITLE1}>{reviews}</Typography>
        </div>
      </div>
    );
  }
}
