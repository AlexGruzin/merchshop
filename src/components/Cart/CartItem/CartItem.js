import Typography from '@material-ui/core/Typography';
import Add from '@material-ui/icons/Add';
import Remove from '@material-ui/icons/Remove';
import Icon from 'components/Icon';
import { ICONS } from 'constants/icons';

import { productsFilter, productTypes } from 'constants/shop';

import { CAPTION, H1, H4, SUBTITLE1, BODY2 } from 'constants/typography';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { translate } from 'react-i18next';
import injectSheet from 'react-jss';
import styles from './styles';

@translate()
@injectSheet( styles )
export default class CartItem extends PureComponent {
  static propTypes = {
    classes: PropTypes.object,
    t: PropTypes.func,
    itemData: PropTypes.object.isRequired,
  };

  render() {
    const {
      t,
      classes,
      itemData,
    } = this.props;

    const {
      cartItemWrapper
    } = classes;

    return (
      <div className={cartItemWrapper}>

        <div className={classes.imageWrapper}>
          <div
            className={classes.image}
            style={{
              backgroundImage: `url('${itemData.image}')`
            }}/>
        </div>

        <div className={classes.infoColumn}>

          <Typography className={classes.nameLabel}
            variant={SUBTITLE1}>
            {itemData.label}
          </Typography>

          <Typography className={classes.costLabel}
            variant={BODY2}>
            {`Rp ${itemData.cost}`}
          </Typography>

          <div className={classes.addRemoveSection}>
            <Remove fontSize='inherit'/>
            {<Typography className={classes.amountLabel}
              variant={H4}>
              {'1'}
            </Typography>}
            <Add fontSize='inherit'/>
          </div>

        </div>

        <div className={classes.removeColumn}>
          <Icon className={classes.trashIcon}
            icon={ICONS.TRASH}/>
        </div>

      </div>

    );
  }
}
