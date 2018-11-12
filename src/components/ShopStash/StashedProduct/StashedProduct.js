import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import injectSheet from 'react-jss';
import styles from './styles';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import Rating from 'react-rating';

import { BODY1, SUBHEADING, H1 } from 'constants/typography';
import { STASHED_PRODUCT_TYPES } from 'constants/shop';

import Images from 'theme/images';
import Icon from 'components/Icon';
import { ICONS } from 'constants/icons';

@translate()
@injectSheet( styles )
export default class Product extends PureComponent {

  static propTypes = {
    t: PropTypes.func.isRequired,
    itemData:  PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
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
            }}/>

          <Checkbox className={like}
            icon={<Icon icon={ICONS.LIKE_DISABLED} className={likeDisabled}/> }
            checkedIcon={<Icon icon={ICONS.LIKE_ENABLED} className={likeEnabled}/>}
            checked={liked}
          />
        </div>

        <div className={classes.informationWrapper}>

          <div className={classes.amountColorsWrapper}>
            <Typography className={classes.number} variant={BODY1}>{'8'}</Typography>
            <Typography className={classes.colors} variant={BODY1}>{t( 'shop:colors' )}</Typography>
          </div>

          <div className={classes.hr}/>

          <Typography className={classes.label} variant={BODY1}>{label}</Typography>
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
            <Typography className={classes.reviewsCount} variant={SUBHEADING}>{reviews}</Typography>
          </div>
        </div>
      </div>
    );
  }
}
