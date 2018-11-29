import Typography from '@material-ui/core/Typography';
import ProductBox from 'components/ProductBox';

// import { H1 } from 'constants/typography';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { translate } from 'react-i18next';
import injectSheet from 'react-jss';
import * as typography from "../../constants/typography";
import styles from './styles';
import Slider from 'react-slick';

@translate()
@injectSheet( styles )
export default class BestSellers extends PureComponent {
  static propTypes = {
    classes: PropTypes.object,
    bestSellers: PropTypes.array.isRequired,
  };

  constructor( props ) {
    super ( props );
    this.timer = null;
  }

  debouncedUpdate = () => {
    if ( this.timer ) {
      clearTimeout( this.timer )
    }
    this.timer = setTimeout(() => this.forceUpdate(), 500 )
  };

  componentDidMount() {
    window.addEventListener( 'resize', this.debouncedUpdate )
  }

  componentWillUnmount() {
    window.removeEventListener( 'resize', this.debouncedUpdate )
  }


  renderSlider = items => {

    const slidesPerRowS = 2;
    const slidesPerRowM = 3;
    const slidesPerRowL = 5;

    const { classes } = this.props;

    const mThreshold = 768;
    const sThreshold = 450;
    const wWidth = window.innerWidth;

    let slidesPerRow = slidesPerRowL;

    if ( wWidth < mThreshold ) {
      slidesPerRow = slidesPerRowM
    }

    if ( wWidth < sThreshold ) {
      slidesPerRow = slidesPerRowS
    }

    const settings = {
      accessibility: false,
      infinite: true,
      centerPadding: '150px',
      speed: 700,
      slidesToShow: slidesPerRow,
      slidesToScroll: wWidth < mThreshold ? 1 : slidesPerRow
    };

    return (
      <Slider {...settings} >
        {items.concat( items ).concat( items )
          .map(( item, i ) => (
            <div className={classes.slide} key={i} >
              <ProductBox  {...item}  className={classes.productBox} />
            </div>
          ))}
      </Slider>
    )
  };

  render() {
    const { t, bestSellers, classes } = this.props;

    return (
      <div className={classes.bestSellers}>
        <Typography variant={typography.H5} className={classes.title}>{t( 'homePage:bestSellers' )}</Typography>
        {this.renderSlider( bestSellers )}
      </div>
    );
  }
}


