import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/es/Typography/Typography";
import PropTypes from "prop-types";
import React from "react";
import { Component } from "react";
import { translate } from "react-i18next";
import injectSheet from "react-jss";
import ReactPlayer from "react-player";
import Rating from "react-rating";
import ProductCollapsible from "../../components/ProductCollapsible";
import ColorSwab from "../../components/ColorSwab/ColorSwab";
import DropdownSelect from 'components/Forms/DropdownSelect';
import Icon from "../../components/Icon";
import ProductCarousel from "../../components/ProductCarousel/ProductCarousel";
import { ICONS } from "../../constants/icons";
import { singleShopItem } from "../../constants/shop";
import classNames from 'classnames';
import { H3, H5, BODY1 } from 'constants/typography';
import styles from "./styles";


@translate()
@injectSheet( styles )
export default class Pdp extends Component {

  static propTypes = {
    t: PropTypes.func,
    classes: PropTypes.object,
    match: PropTypes.object.isRequired,
  };

  state = {
    product: {
      media: [
        { url: 'https://placehold.it/150x150', },
        { url: 'https://placehold.it/150x150', },
        { url: 'https://placehold.it/150x150', }
      ],
      features: '',
      description: ''
    },
    size: ''
  };

  componentDidMount() {
    const slug = this.props.match.params.product_slug;
    const apiCall = new Promise(( resolve, reject ) => {
      setTimeout(() => resolve( singleShopItem ), 200 )
    });

    apiCall.then( product => this.setState({ product }))
  }

  handleChange = () => {

  };

  render() {

    const { t, classes } = this.props;

    const {
      cost,
      id,
      label,
      rate,
      productType,
      reviews,
      viewType,
      media,
      colors,
      sizes,
      description,
      features
    } = this.state.product;


    const fullSymbol = <Icon icon={ICONS.STAR_FILLED} className={classes.starActivated}/>;
    const emptySymbol = <Icon icon={ICONS.STAR_EMPTY} className={classes.starHalf}/>;
    const featuresTitle = (
      <Typography className={classes.collapseTitle} variant={BODY1}>
        features
      </Typography>
    );

    const reviewsTitle = (
      <div className={classNames( classes.flexContainer )}>
        <Typography className={classes.collapseTitle} variant={BODY1}>Reviews</Typography>
        <div className={classes.ratingWrapper}>
          <Rating readonly initialRating={rate} emptySymbol={emptySymbol}
            fullSymbol={fullSymbol} />
          <Typography variant={BODY1} className={classes.reviews}>{reviews}</Typography>
        </div>
      </div>
    );

    const descriptionTitle = (
      <Typography className={classes.collapseTitle} variant={BODY1}>
        description
      </Typography>
    );

    return (
      <div className={classes.root}>
        <div className={classes.leftSection}>
          <ProductCarousel media={media} className={classes.carousel} />
        </div>
        <div className={classes.rightSection}>
          <div className={classes.productBio}>
            <div className={classes.headline}>
              <Typography variant={H3} className={classes.productName}>{'Osiris Maroon'}</Typography>
              <Typography variant={H5} className={classes.price}>{t( 'homePage:cost' ).replace( '${cost}', 399000 )}</Typography>
            </div>
            {label && <div className={classes.VariantSelection}>
              <Typography variant={BODY1}>{'Color: Black'}</Typography>
              <div className={classes.Swabs}>
                {colors.map(( color, i ) =>
                  <ColorSwab
                    key={color}
                    active={i === 3}
                    color={color}
                    margin={`0 ${colors.length === i ? '0' : '1em'} 0 ${i === 0 ? '0' : '1em'}`} />
                )}
              </div>
              <div className={classes.flexContainer}>
                <DropdownSelect
                  className={classes.select}
                  value={this.state.size}
                  onChange={this.handleChange}
                  choices={sizes}
                  placeholder={'Select Size'}/>
                <div className={classes.flexContainer}>
                  <Icon icon={ICONS.GIFT} />
                  <Typography className={classes.sizing} variant={BODY1}>{t( 'shop:sizingGuide' )}</Typography>
                </div>
              </div>
              <Button color={'secondary'} variant={'text'} fullWidth className={classes.addToCart}>
                {t( 'shop:addCart' )}
              </Button>
            </div>}
          </div>
          <ProductCollapsible body={description} title={descriptionTitle} headerClass={classes.collapseHeader} />
          <ProductCollapsible body={features} title={featuresTitle} headerClass={classes.collapseHeader} />
          <ProductCollapsible body={description} title={reviewsTitle} headerClass={classNames(classes.collapseHeader, classes.lastCollapseHeader)} />
          <div className={classes.videoWrapper}>
            <div className={classes.videoInnerWrapper}>
              <ReactPlayer url={this.state.product.videoUrl} width={'100%'} height={'100%'} style={{
                position: 'absolute',
                left: 0,
                top: 0
              }} />
            </div>

          </div>
        </div>
      </div>
    )
  }
}
