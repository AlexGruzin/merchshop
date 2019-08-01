import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import injectSheet from 'react-jss';
import styles from './styles';
import Rating from 'react-rating';

import { BODY1, SUBHEADING, H4 } from 'constants/typography';
import Icon from 'components/Icon';
import { ICONS } from 'constants/icons';

@translate()
@injectSheet( styles )
export default class StarRate extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    rate: PropTypes.object.isRequired,
  };

  render() {
    const {
      classes,
      rate,
    } = this.props;

    return (
      <Rating
        className={classes.rateStars}
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
        }
      />
    );
  }
}
