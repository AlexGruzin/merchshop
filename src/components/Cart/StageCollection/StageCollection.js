import Typography from '@material-ui/core/Typography';
import ExpandMore from '@material-ui/icons/ExpandMore';
import classNames from 'classnames';
import MobileCart from 'components/Cart/MobileCart';
import Payment from 'components/Cart/MobileCheckout/Payment';

import Review from 'components/Cart/MobileCheckout/Review';
import Shipping from 'components/Cart/MobileCheckout/Shipping';
import Icon from 'components/Icon';
import { ICONS } from 'constants/icons';

import {
  productsFilter,
  productTypes,
  STAGES_TYPES,
  STEPS_VISUALISE
} from 'constants/shop';
import { BODY1, BODY2, H1, H4, H6, SUBTITLE1, SUBTITLE2 } from 'constants/typography';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { translate } from 'react-i18next';
import injectSheet from 'react-jss';
import styles from './styles';

@translate()
@injectSheet( styles )
export default class StageCollection extends PureComponent {
  static propTypes = {
    classes: PropTypes.object,
    t: PropTypes.func,
    cartItems: PropTypes.array.isRequired,
    handleClose: PropTypes.func.isRequired,
  };

  constructor( props ) {
    super( props );
    this.state = {
      allowedStage: 0,
    };
  }

  jumpToNext = () => {
    this.setState({
      allowedStage: this.state.allowedStage+1,
    })
  };

  render() {
    const {
      t,
      classes,
      cartItems,
      handleClose,
    } = this.props;

    const {
      root,
      commonlabel,
      activelabel,
      passedlabel,

      commonRound,
      activeRound,
      passedRound,
    } = classes;

    const stageStepperStyling = ( label1, round1, label2, round2, label3, round3 ) => {
      return(
        <div className={classes.stepperWrapper}>
          <div className={classes.stageWrap}>

            <div className={classes.stageLabel}>
              <Typography variant={BODY2} className={label1}>
                {t( 'cart:Shipping' )}
              </Typography>
            </div>
            <div className={classes.line}/>
            <div className={classNames( classes.round, round1 )}/>
          </div>

          <div className={classes.stageWrap}>
            <div className={classes.stageLabel}>
              <Typography variant={BODY2} className={label2}>
                {t( 'cart:Payment' )}
              </Typography>
            </div>
            <div className={classes.line}/>
            <div className={classNames( classes.round, round2 )}/>
          </div>

          <div className={classes.stageWrap}>
            <div className={classes.stageLabel}>
              <Typography variant={BODY2} className={label3}>
                {t( 'cart:Review' )}
              </Typography>
            </div>
            <div className={classes.line}/>
            <div className={classNames( classes.round, round3 )}/>
          </div>

        </div>
      )
    };

    const stageStepper = ( step ) => {
      switch ( step ) {
        case STEPS_VISUALISE.SHIPPING:
          return ( stageStepperStyling(
            activelabel,activeRound,commonlabel,commonRound,commonlabel,commonRound
          ));
        case STEPS_VISUALISE.PAYMENT:
          return ( stageStepperStyling(
            passedlabel,passedRound,activelabel,activeRound,commonlabel,commonRound
          ));
        case STEPS_VISUALISE.REVIEW:
          return ( stageStepperStyling(
            passedlabel,passedRound,passedlabel,passedRound,activelabel,activeRound
          ));
      }
    };

    const stageSwitch = ( stage ) => {

      switch ( stage ) {
        case STAGES_TYPES.CART.number:
          return(
            <MobileCart
              cartItems={cartItems}
              handleClose={handleClose}
              allowTheNext={this.jumpToNext}/>
          );
        case STAGES_TYPES.SHIPPING.number:
          return(
            <div>
              {stageStepper( STEPS_VISUALISE.SHIPPING )}
              <Shipping
                onSubmit={ this.props.sendShippingData }
                allowTheNext={this.jumpToNext}/>
            </div>
          );
        case STAGES_TYPES.PAYMENT.number:
          return(
            <div>
              {stageStepper( STEPS_VISUALISE.PAYMENT )}
              <Payment
                onSubmit={ this.props.sendPaymentData }
                allowTheNext={this.jumpToNext}/>
            </div>
          );
        case STAGES_TYPES.REVIEW.number:
          return(
            <div>
              {stageStepper( STEPS_VISUALISE.REVIEW )}
              <Review
                cartItems={cartItems}
                allowTheNext={this.jumpToNext}/>
            </div>
          );
      }
    };

    return (

      <div className={classes.rootSwipeContainer}>
        <div className={classes.headLine}>
          <div
            onClick={handleClose}
            className={classes.backButton}>
            <ExpandMore
              className={classes.backIcon}
              fontSize='inherit'/>
            <Typography>
              {'Back to Shop'}
            </Typography>
          </div>

          <div className={classes.interactiveCan}>
            <div className={classes.canNumberWrapper}>
              <Typography
                variant={SUBTITLE1}
                onClick={this.swapCheckout}
                className={classes.canNumberLabel}>
                {'3'}
              </Typography>
            </div>
            <Icon
              icon={ICONS.CAN_ICON}
              onClick={this.swapCheckout}
              className={classes.mobileIconCan}/>
          </div>
        </div>

        {stageSwitch( this.state.allowedStage )}

      </div>
    );
  }
}
