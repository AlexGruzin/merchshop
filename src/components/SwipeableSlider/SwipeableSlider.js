import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames'

import Icon from 'components/Icon';
import { SLIDING_DELAY } from 'constants/home';
import { ICONS } from 'constants/icons';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import injectSheet from 'react-jss';
import { Link } from 'react-router-dom';

import SwipeableViews from 'react-swipeable-views';
import { mod } from 'react-swipeable-views-core';
import { autoPlay, virtualize } from 'react-swipeable-views-utils';
import styles from './styles';

const EnhancedSwipeableViews = autoPlay( virtualize( SwipeableViews ));

@injectSheet( styles )
class Slide extends PureComponent {
  static propTypes = {
    classes: PropTypes.object,
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
          <Button
            component={Link}
            to={productLink}
            variant={'text'}
            color={'primary'}
            size="medium"
            className={classes.sliderButton}>
            <Typography
              className={classes.sliderLabel}
              variant='button'>
              {'Shop Helmets'}
            </Typography>
            <Icon
              className={classes.buttonIcon}
              icon={ICONS.ARROW_ICON}/>
          </Button>
        </div>
      </div>
    );
  }
}

@injectSheet( styles )
export default class Slider extends React.Component {
  static propTypes = {
    classes: PropTypes.object,
    items: PropTypes.array.isRequired,
  };

  constructor( props ) {
    super( props );

    this.state = {
      items: null,
      index: 0,
      direction: '',
    };

  }

  handleChangeIndex = index => {
    this.setState({
      index: mod( index, this.props.items.length ),
    });
  };

  slideRenderer = ( params ) => {
    const { index, key } = params;
    const circularIndex = mod( index, this.props.items.length );

    return(
      <Slide
        key={key}
        index={circularIndex}
        productLink={this.props.items[circularIndex].link}
        productImage={this.props.items[circularIndex].image}/>
    )
  };

  render() {
    const {
      classes,
      items,
    } = this.props;

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
          interval={SLIDING_DELAY}
          className={classes.enhancedSwipeableViews}
          slideRenderer={this.slideRenderer}/>

        <div className={classes.sliderIndicatorContainer}>
          <div className={classes.sliderIndicatorWrapper}>
            {
              items.map(( item, index ) => {
                return(
                  <div
                    key={index}
                    className={classes.sliderIndicatorButton}
                    onClick={() => this.handleChangeIndex( index )}>
                    <div
                      className={classNames(
                        classes.indicator,
                        index === this.state.index ? classes.activated : classes.disactivated,
                      )}/>
                  </div>
                )}
              )
            }
          </div>
        </div>

      </div>
    );
  }

}
