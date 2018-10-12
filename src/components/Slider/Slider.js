import React, { PureComponent }  from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import classNames from 'classnames'
import Typography from '@material-ui/core/Typography';
import ArrowRight from 'components/ArrowRight';

import styles from './styles';

@injectSheet( styles )
class Item extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  };

  render() {
    const {
      classes,
      productImage,
      index,
      level,
    } = this.props;

    const levelClassName = `level${level}`;
    const colorClassName = `slide${index}`;

    return(
      <div
        className={classNames( classes[levelClassName], classes[colorClassName], classes.item )}>
        <div
          className={classes.slideWrapper}>
          <div
            className={classes.SliderImage}
            style={{
              backgroundImage: `url('${productImage}')`
            }}/>
          <Button
            component={Link}
            to={'set'}
            size="medium"
            className={classes.sliderButton}>
            <Typography
              className={classes.sliderLabel}
              variant='button'>
              {'Shop Helmets'}
            </Typography>
            <ArrowRight />
          </Button>
        </div>
      </div>
    );
  }
}

@injectSheet( styles )
export default class Slider extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  };

  constructor( props ) {
    super( props );

    this.state = {
      items: null,
      active: 0,
      direction: '',
      timer: null,
    };

    this.Stop = this.Stop.bind( this );
    this.setActive = this.setActive.bind( this );
    this.moveRight = this.moveRight.bind( this );
    this.moveLeft = this.moveLeft.bind( this );
  }

  componentDidMount() {
    this.setState({
      timer: setInterval( function() { this.setActive() }.bind( this ), 5000 )
    });
  }

  generateItems( items ) {
    let itemsBlock = [];
    let level;
    for ( let i = this.state.active -1; i < this.state.active + 2; i++ ) {
      let index = i;

      if ( i < 0 ) {
        index = items.length + i;
      } else if ( i >= items.length ) {
        index = i % items.length;
      }

      level = -( this.state.active - i );

      itemsBlock.push( <Item key={index} index={index} productImage = {items[index]} level={level} /> );
    }

    return itemsBlock;
  }

  moveLeft() {
    this.Stop();
    let index = this.state.active;
    index < 1 ? index = this.props.items.length - 1 : index--;
    this.setState({
      active: index,
      direction: 'left',
    });
  }

  moveRight() {
    this.Stop();
    let index = this.state.active;
    index >= 3 ? index = 0 : index++;
    this.setState({
      active: index,
      direction: 'right',
    });
  }

  setActive() {
    this.moveLeft();
  }

  Stop() {
    clearTimeout( this.state.timer );
    this.setState({
      timer: setInterval( function() { this.setActive() }.bind( this ), 5000 )
    });
  }

  render() {
    const {
      classes,
      items,
    } = this.props;

    return (
      <div className = {classes.sliderContainer}>
        <div className={classes.slidesContainer}>
          { this.generateItems( this.props.items ) }
          <div className={classes.sliderIndicatorContainer}>
            <div className={classes.sliderIndicatorWrapper}>
              {
                items.map(( item, index ) => {
                  const indicatorColor = ( index === this.state.active ) ? 'activated' : 'disactivated';
                  return(
                    <div key={index} className={classNames( classes.indicator, classes[indicatorColor])}></div>
                  )}
                )
              }
            </div>
          </div>
        </div>
      </div>
    );
  }

}
