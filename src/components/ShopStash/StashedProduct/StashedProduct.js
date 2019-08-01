import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import Icon from 'components/Icon';
import { ICONS } from 'constants/icons';
import { STASHED_PRODUCT_TYPES } from 'constants/shop';

import { BODY1, H1, SUBTITLE1, CAPTION } from 'constants/typography';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { translate } from 'react-i18next';
import injectSheet from 'react-jss';
import Rating from 'react-rating';
import styles from './styles';

@translate()
@injectSheet( styles )
export default class Product extends PureComponent {

  static propTypes = {
    t: PropTypes.func,
    itemData:  PropTypes.object.isRequired,
    classes: PropTypes.object,
    itemViewClass: PropTypes.string.isRequired,
    soldClass: PropTypes.string.isRequired,
    likeClass: PropTypes.string.isRequired,
    liked: PropTypes.bool.isRequired,
    soldOut: PropTypes.bool.isRequired,
    columns: PropTypes.number.isRequired,
  };

  render() {
    const {
      itemData,
      classes,
      t,
      itemViewClass,
      soldClass,
      likeClass,
    } = this.props;

    const {
      imageWrapper,
      likeEnabled,
      likeDisabled,
      like,
      soldOutLabel,
    } = classes;

    const {
      id,
      label,
      cost,
      rate,
      image,
      reviews,
      viewType,
    } = itemData;

    let { soldOut, liked } = this.props;

    if ( id === '003' ) {
      liked = true;
    }
    if ( id === '002' ) {
      soldOut = true;
    }// just to match screenshoot

    return (
      <div className={classes.root}>
        <div className={classNames( imageWrapper, itemViewClass )}>

          { soldOut
          && <Typography
            className={classNames( soldOutLabel, soldClass )}
            variant={BODY1}>{t( 'homePage:soldOut' )}
          </Typography> }

          <div
            className={classes.image}
            style={{
               backgroundImage: `url('${image}')`
            }}
          />

          <Checkbox className={like}
            icon={<Icon icon={ICONS.LIKE_DISABLED} className={likeDisabled}/> }
            checkedIcon={<Icon icon={ICONS.LIKE_ENABLED} className={likeEnabled}/>}
            checked={liked}/>
        </div>

        <div className={classes.informationWrapper}>

          <div className={classes.amountColorsWrapper}>
            <Typography className={classes.number} variant={CAPTION}>{'8'}</Typography>
            <Typography className={classes.colors} variant={CAPTION}>{t( 'shop:colors' )}</Typography>
          </div>

          <div className={classes.hr}/>

          <Typography className={classes.label} variant={SUBTITLE1}>{label}</Typography>
          <Typography className={classes.cost}>{t( 'homePage:cost' ).replace( '${cost}', cost )}</Typography>

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
            <Typography className={classes.reviewsCount}>{reviews}</Typography>
          </div>
        </div>
      </div>
    );
  }
}
