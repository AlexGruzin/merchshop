import React, { PureComponent }  from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import classNames from 'classnames'
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';

import SwipeableViews from 'react-swipeable-views';
import { virtualize } from 'react-swipeable-views-utils';
import { mod } from 'react-swipeable-views-core';

import Icon from 'components/Icon';
import { ICONS } from 'constants/icons';
import { SLIDING_DELAY } from 'constants/home';
import styles from './styles';

const EnhancedSwipeableViews = virtualize( SwipeableViews );

@injectSheet( styles )
class Slide extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    productImage: PropTypes.string.isRequired,
    productLink: PropTypes.string.isRequired,
  };

  render() {
    const {
      classes,
      productImage,
      productLink,
      index,
    } = this.props;

    const colorClassName = `slide${index}`;

    return(
      <div
        className={classNames( classes[colorClassName], classes.item )}>
        <div
          className={classes.slideWrapper}>
          <div
            className={classes.SliderImage}
            style={{
              backgroundImage: `url('${productImage}')`
            }}/>

        </div>

      </div>
    );
  }
}

@injectSheet( styles )
export default class ProductSlider extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    images: PropTypes.array.isRequired,
    liked: PropTypes.bool.isRequired,
  };

  constructor( props ) {
    super( props );

    this.state = {
      index: 0,
      direction: '',
      capacity: null,
    };
  }

  componentDidMount() {
    this.setState({
      capacity: this.props.images.length,
    });
  }

  handleChangeIndex = index => {
    this.setState({
      index: index,
    });
  };

  moveLeft = index =>{
    let cycledIndex = mod( index-1, this.state.capacity );
    this.setState({
      index: cycledIndex,
    });
  };

  moveRight = index =>{
    let cycledIndex = mod( index+1, this.state.capacity );
    this.setState({
      index: cycledIndex,
    });
  };

  slideRenderer = ( params ) => {
    const { index, key } = params;
    const circularIndex = mod( index, this.state.capacity );

    return(
      <Slide
        key={key}
        index={circularIndex}
        productImage={this.props.images[circularIndex]}/>
    )
  };

  render() {

    const {
      classes,
      images,
      liked,
    } = this.props;

    const {
      likeDisabled,
      likeEnabled,
      likeClass,
    } = classes;

    const {
      index
    } = this.state;

    return (
      <div className = {classes.sliderContainer}>

        <EnhancedSwipeableViews
          springConfig={{
            duration: '0.6s',
            easeFunction: 'ease',
            delay: '0s',
          }}
          index={index}
          onChangeIndex={this.handleChangeIndex}
          enableMouseEvents
          className={classes.enhancedSwipeableViews}
          slideRenderer={this.slideRenderer}
        />

        <Checkbox className={classes.like}
          icon={<Icon icon={ICONS.LIKE_DISABLED} className={likeDisabled}/> }
          checkedIcon={<Icon icon={ICONS.LIKE_ENABLED} className={likeEnabled}/>}
        />

        <div className={classes.sliderIndicatorContainer}>
          {
            images.map(( item, index ) => {
              return(
                <div
                  key={index}
                  className={classes.sliderIndicatorButton}
                  onClick={() => this.handleChangeIndex( index )}>
                  <div
                    className={classNames(
                      classes.indicator,
                      index === this.state.index ? classes.activated : classes.disactivated,
                    )}
                  />
                </div>
              )}
            )
          }
        </div>

        <div onClick={() => this.moveLeft( index )}
          className={classes.leftArrow}>
          <Icon
            icon={ICONS.LEFT_ARROW}
            className={classes.controlIcon}/>
        </div>

        <div onClick={() => this.moveRight( index )}
          className={classes.rightArrow}>
          <Icon
            icon={ICONS.RIGHT_ARROW}
            className={classes.controlIcon}/>
        </div>

        <div onClick={() => {}}
          className={classes.zoomer}>
          <Icon
            icon={ICONS.ZOOM}
            className={classes.zoomIcon}/>
        </div>

      </div>
    );
  }

}
