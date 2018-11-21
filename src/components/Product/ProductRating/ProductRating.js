import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import injectSheet from 'react-jss';
import styles from './styles';
import { keys, values } from 'lodash';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';

import StarRate from 'components/Product/StarRate';
import LineRate from 'components/Product/LineRate';

import { BODY1, SUBHEADING, H4, HEADLINE } from 'constants/typography';
import Icon from 'components/Icon';
import { ICONS } from 'constants/icons';

@translate()
@injectSheet( styles )
export default class ProductReviews extends PureComponent {

  static propTypes = {
    t: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
    rateData: PropTypes.object.isRequired,
  };

  static defaultProps = {
    soldOut: false,
  };

  render() {
    const {
      classes,
      t,
      rateData,
    } = this.props;


    return (
      <div className={classes.root}>

        <Typography className={classes.title} variant={H4}>{t('rating:REVIEWS/Q&A')}</Typography>

        <div className={classes.rating}>

          {
            rateData.rates.map(( item ) => {
              const mark = keys( item )[0];
              const amount = values( item )[0];

              return(
                <div
                  key={mark}
                  className={classes.row}
                >
                  <StarRate rate={mark}/>

                  <Typography className={classes.amount} variant={HEADLINE}>{`(${amount})`}</Typography>

                  <LineRate rate={amount*100/rateData.totalAmount} />
                </div>

              )

            })
          }

        </div>

        <div className={classes.starLabel}>
          <StarRate rate={5}/>
        </div>

        <Typography className={classes.totalLabel}>{`${rateData.totalAmount} Reviews`}</Typography>

        <Typography className={classes.askLabel} variant={H4}>{'6 QUESTIONS / 6 ANSWERS'}</Typography>

        <div className={classes.row}>
          <Button
            className={classes.rateButton}>
            <Typography className={classes.buttonLabel}>
              {t( 'cart:ASK A QUESTION' )}
            </Typography>
          </Button>

          <Button
            className={classes.rateButton}>
            <Typography className={classes.buttonLabel}>
              {t( 'cart:WRITE A REVIEW' )}
            </Typography>
          </Button>
        </div>

        <div className={classes.row}>
          <Typography
            className={classNames( classes.askLabel )}
            variant={H4}>
            {`REVIEWS (${rateData.totalAmount})`}
          </Typography>
          <Typography
            className={classes.askLabel}
            variant={H4}>
            {`QUESTIONS (${'6'})`}
          </Typography>

        </div>

      </div>
    );
  }
}
