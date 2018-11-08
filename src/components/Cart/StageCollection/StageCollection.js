import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import injectSheet from 'react-jss';
import Typography from '@material-ui/core/Typography';
import ExpandMore from '@material-ui/icons/ExpandMore';
import classNames from 'classnames';

import Review from 'components/Cart/MobileCheckout/Review';
import Payment from 'components/Cart/MobileCheckout/Payment';
import Shipping from 'components/Cart/MobileCheckout/Shipping';
import MobileCart from 'components/Cart/MobileCart';
import { H1, H4, H6, SUBHEADING, BODY1, SUBTITLE2 } from 'constants/typography';
import styles from './styles';

import { productTypes, productsFilter, STEPS_VISUALISE, STAGES_TYPES } from 'constants/shop';
import Icon from 'components/Icon';
import { ICONS } from 'constants/icons';

@translate()
@injectSheet( styles )
export default class StageCollection extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    t: PropTypes.func.isRequired,
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
      activelabel,
      passedlabel,

      activeRound,
      passedRound,
    } = classes;

    const stageStepperStyling = ( label1, round1, label2, round2, label3, round3 ) => {
      return(
        <div className={classes.stepperWrapper}>
          <div className={classes.stageWrap}>

            <div className={classNames( classes.stageLabel, label1 )}>
              <Typography >
                {t( 'cart:Shipping' )}
              </Typography>
            </div>
            <div className={classes.line}/>
            <div className={classNames( classes.round, round1 )}/>
          </div>

          <div className={classes.stageWrap}>
            <div className={classNames( classes.stageLabel, label2 )}>
              <Typography >
                {t( 'cart:Payment' )}
              </Typography>
            </div>
            <div className={classes.line}/>
            <div className={classNames( classes.round, round2 )}/>
          </div>

          <div className={classes.stageWrap}>
            <div className={classNames( classes.stageLabel, label3 )}>
              <Typography >
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
            activelabel,activeRound
          ));
        case STEPS_VISUALISE.PAYMENT:
          return ( stageStepperStyling(
            passedlabel,passedRound,activelabel,activeRound
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
              allowTheNext={this.jumpToNext} // just to switch forms
            />
          );
        case STAGES_TYPES.SHIPPING.number:
          return(
            <div>
              {stageStepper( STEPS_VISUALISE.SHIPPING )}
              <Shipping
                onSubmit={ this.props.sendShippingData }
                allowTheNext={this.jumpToNext}
              />
            </div>
          );
        case STAGES_TYPES.PAYMENT.number:
          return(
            <div>
              {stageStepper( STEPS_VISUALISE.PAYMENT )}
              <Payment
                onSubmit={ this.props.sendPaymentData }
                allowTheNext={this.jumpToNext}
              />
            </div>
          );
        case STAGES_TYPES.REVIEW.number:
          return(
            <div>
              {stageStepper( STEPS_VISUALISE.REVIEW )}
              <Review
                cartItems={cartItems}
                allowTheNext={this.jumpToNext}
              />
            </div>
          );
      }
    };

    return (

      <div>
        <div className={classes.headLine}>
          <div
            onClick={handleClose}
            className={classes.backButton}>
            <ExpandMore
              className={classes.backIcon}
              fontSize='inherit'/>
            <Typography
              className={classes.backLabel}
              variant={H1}>
              {'Back to Shop'}
            </Typography>
          </div>

          <div className={classes.interactiveCan}>
            <div className={classes.canNumberWrapper}>
              <Typography
                variant={SUBHEADING}
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

        <div className={root}>
          {stageSwitch( this.state.allowedStage )}
        </div>
      </div>
    );
  }
}