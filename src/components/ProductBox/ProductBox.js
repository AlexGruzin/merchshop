import classNames from "classnames";
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import injectSheet from 'react-jss';
import styles from './styles';
import Typography from '@material-ui/core/Typography';
import Rating from 'react-rating';

import { BODY1, SUBHEADING, H1 } from 'constants/typography';
import Images from 'theme/images';

import Icon from 'components/Icon';
import { ICONS } from 'constants/icons';

@translate()
@injectSheet( styles )
export default class ProductBox extends PureComponent {

  static propTypes = {
    t: PropTypes.func,
    classes: PropTypes.object,
    name: PropTypes.string.isRequired,
    cost: PropTypes.string.isRequired,
    rate: PropTypes.number.isRequired,
    reviews: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    soldOut: PropTypes.bool,
    className: PropTypes.string,
  };

  static defaultProps = {
    soldOut: false,
    className: '',
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
      className
    } = this.props;

    return (
      <div className={classNames( classes.root, className )}>
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
                  backgroundImage: `url('${Images.gray}')`
                }}/>
            }
            fullSymbol={
              <Icon icon={ICONS.STAR_FILLED} className={classes.starActivated}/>
            }
            placeholderSymbol={
              <Icon icon={ICONS.STAR_FILLED} className={classes.starHalf}/>
            }/>
          <Typography className={classes.reviewsCount} variant={SUBHEADING}>{reviews}</Typography>
        </div>
      </div>
    );
  }
}
