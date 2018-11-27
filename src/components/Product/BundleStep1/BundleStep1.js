import React, { PureComponent } from 'react';
import { translate } from 'react-i18next';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import history from 'store/history';
import classNames from 'classnames';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Collapse from '@material-ui/core/Collapse';
import Rating from 'react-rating';

import ProductSlider from 'components/ProductSlider';
import SellingRow from 'components/SellingRow';
import ProductRating from 'components/Product/ProductRating';
import StarRate from 'components/Product/StarRate';

import { CAPTION } from 'constants/typography';

import { DESCRIPTION, COMPOSE, REVIEWS_AMOUNT, RATE } from 'constants/product';
import { BestSellers as sellers } from 'constants/home';
import { H5, H3, SUBTITLE1, H6 } from 'constants/typography';
import { CREATE_BUNDLE_STEPS } from 'constants/product';
import styles from './styles';
import Icon from 'components/Icon';
import { ICONS } from 'constants/icons';

import { ShopItems, PRODUCT_TYPES, singleShopItem } from 'constants/shop';

@translate()
@injectSheet( styles )
export default class BundleStep1 extends PureComponent {
  static propTypes = {
    t: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
    productData: PropTypes.object.isRequired,
    productImages: PropTypes.array.isRequired,
    location: PropTypes.object.isRequired,
    customSubmit: PropTypes.func.isRequired,
  };

  constructor( props ) {
    super( props );

    this.state = {
      openDescription: false,
      openCompose: false,
      openReview: false,
    }
  }

  descriptionOpener = () => {
    this.setState( state => ({ openDescription: !state.openDescription }));
  };

  composeOpener= () => {
    this.setState( state => ({ openCompose: !state.openCompose }));
  };

  reviewsOpener = () => {
    this.setState( state => ({ openReview: !state.openReview }));
  };

  render() {

    const {
      t,
      classes,
      productData,
      productImages,
      customSubmit
    } = this.props;

    const {
      root,
      pandedIcon,
      expandedIcon,
    } = classes;

    const {
      label,
      cost,
      description,
      compose,
      rateData,
    } = productData;

    const reviewsAmount = rateData.totalAmount;

    const collapseContainer = ( open, data ) => {
      return(
        <div className={classes.expandedBody}>
          <Collapse
            classes={{
              container: classes.collapseContainer,
            }}
            in={open}
            timeout="auto"
            unmountOnExit>
            <div className={classes.expandedContent}>
              <Typography variant={H6}
                className={classes.expandedContentText}>
                {data}
              </Typography>
            </div>
          </Collapse>
        </div>
      )
    };

    return (
      <div className={root}>

        <div className={classes.leftSide}>
          <ProductSlider
            images={productImages}/>
        </div>

        <div className={classes.rightSide}>
          <div className={classes.infoBlock}>

            <Typography
              variant={H3}
              className={classes.productLabel}>
              {label}
            </Typography>

            <Typography
              variant={H5}
              className={classes.cost}>
              {`Rp ${cost}`}
            </Typography>

            <Button
              onClick={ () => customSubmit( CREATE_BUNDLE_STEPS.ITEM_CONFIGURATION ) }
              className={classes.buildButton}>
              {t( 'product:BUILD YOUR BUNDLE' )}
            </Button>
          </div>

          <div className={classes.expandedBlock}>

            <div className={classes.expandHead}>
              <Typography
                variant={H6}
                className={classes.category}>
                {t( 'Description' )}
              </Typography>

              <Checkbox
                onChange={this.descriptionOpener}
                className={classes.expandSwitch}
                icon={<Icon icon={ICONS.PLUS} className={expandedIcon}/>}
                checkedIcon={<Icon icon={ICONS.MINUS} className={pandedIcon}/>}
              />
            </div>

            {collapseContainer( this.state.openDescription, description )}

          </div>

          <div className={classes.expandedBlock}>

            <div className={classes.expandHead}>
              <Typography
                variant={H6}
                className={classes.category}>
                {t( 'What`s inside' )}
              </Typography>

              <Checkbox
                onChange={this.composeOpener}
                className={classes.expandSwitch}
                icon={<Icon icon={ICONS.PLUS} className={expandedIcon}/>}
                checkedIcon={<Icon icon={ICONS.MINUS} className={pandedIcon}/> }
              />
            </div>

            {collapseContainer( this.state.openCompose, compose )}

          </div>

          <div className={classes.expandedBlock}>

            <div className={classes.expandHead}>
              <Typography variant={H6}
                className={classes.category}>
                {t( 'Reviews' )}
              </Typography>

              <StarRate className={classes.rateStars} rate={4}/>

              <Typography className={classes.reviewsCount} variant={SUBTITLE1}>{reviewsAmount}</Typography>

              <Checkbox
                onChange={this.reviewsOpener}
                className={classes.expandSwitch}
                icon={<Icon icon={ICONS.PLUS} className={expandedIcon}/>}
                checkedIcon={<Icon icon={ICONS.MINUS} className={pandedIcon}/>}
              />
            </div>

            {collapseContainer( this.state.openReview, <ProductRating rateData={rateData}/> )}

          </div>

          {/*<SellingRow*/}
            {/*title={'product:You may also like'}*/}
            {/*bestSellers={sellers} />*/}
        </div>
      </div>
    );
  }
}
