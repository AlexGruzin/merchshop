import PropTypes from "prop-types";
import React, { Component } from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import SwipeableViews from "react-swipeable-views";
import { virtualize } from 'react-swipeable-views-utils'
import { ICONS } from "../../constants/icons";
import Icon from "../Icon";
import CarouselPreview from "./CarouselPreview";
import styles from './styles';

const Views = virtualize( SwipeableViews );

@injectSheet( styles )
export default class ProductCarousel extends Component {
  static propTypes  = {
    className: PropTypes.string,
    media: PropTypes.array.isRequired,
    classes: PropTypes.object,
    handleFavorite: PropTypes.func,
    favorited: PropTypes.bool
  };

  static defaultProps  = {
    className: '',
    handleFavorite: () => null,
    favorited: false,
  };

  constructor( props ) {
    super ( props );

    this.state = {
      active: 0
    };

    this.slider = React.createRef();
  }

  // adjustForOverflow = idx => ( idx + this.props.media.length ) % this.props.media.length;
  adjustForOverflow = idx => ( idx + this.props.media.length ) % this.props.media.length;

  next = () => {
    const adjustedIdx = this.adjustForOverflow( this.state.active + 1 );
    this.setState({ active: adjustedIdx })
  };

  prev = () => {
    const adjustedIdx = this.adjustForOverflow( this.state.active - 1 );
    this.setState({ active: adjustedIdx })
  };

  handleClick = i => {
    this.setState({ active: i });
  };

  slideRenderer = ({ key, index }) => {
    const { media, classes, className } = this.props;
    return (
      <img src={media[index].url} key={key}
        className={classNames( classes.bigPhoto, className )}
        alt={media[index].name || ''}  />
    )
  };

  onChange = idx => this.setState({ active: idx });

  render() {
    const { className, media, classes, handleFavorite, favorited } = this.props;

    // const currentMedia = media.find( med => med.id === this.state.active );

    const sliderSettings = {
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: false,
    };

    return (
      <div className={classNames( classes.root, className )}>
        <div className={classes.photo}>
          <Views slideRenderer={this.slideRenderer}
            slideCount={this.props.media.length}
            onChangeIndex={this.onChange}
            index={this.state.active}
            enableMouseEvents />
          <Icon icon={ICONS.LEFT_ARROW} className={classes.LeftArrow} onClick={this.prev}/>
          <Icon icon={ICONS.RIGHT_ARROW} className={classes.RightArrow} onClick={this.next} />
          <Icon icon={favorited ? ICONS.LIKE_ENABLED : ICONS.LIKE_DISABLED } onClick={handleFavorite} className={classes.heart} />
          <Icon icon={ICONS.SEARCH_ICON} className={classes.magnifierGlass} />
        </div>
        <div className={classes.previewContainer}>
          {media.map(({ url, type }, i ) =>
            <CarouselPreview width={`${Math.round( 100 / media.length )}%`} i={i} key={i} active={this.state.active === i} url={url} type={type} onClick={this.handleClick} /> )}
        </div>
      </div>
    )

  }
}
