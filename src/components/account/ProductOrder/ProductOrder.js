import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import injectSheet from 'react-jss';
import Typography from '@material-ui/core/Typography';
import Add from '@material-ui/icons/Add';
import Remove from '@material-ui/icons/Remove';
import Delete from '@material-ui/icons/DeleteOutline';

import { H1, H4, SUBHEADING, CAPTION } from 'constants/typography';
import styles from './styles';

import { productTypes, productsFilter } from 'constants/shop';
import Icon from 'components/Icon';
import { ICONS } from 'constants/icons';

@translate()
@injectSheet( styles )
export default class ProductOrder extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    t: PropTypes.func.isRequired,
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

    const {
      images,
      id,
      date,
      status,
    } = itemData;

    return (
      <div className={cartItemWrapper}>

        <div className={classes.infoColumn}>

          <Typography
            className={classes.nameLabel}
            variant={H4}>
            {itemData.label}
          </Typography>

          <Typography className={classes.costLabel}
                      variant={H1}>
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
                icon={ICONS.TRASH}
          />
        </div>

        <div className={classes.imagesWrapper}>

          <div className={classes.imageWrapper}>
            <div
              className={classes.image}
              style={{
                backgroundImage: `url('${itemData.image}')`
              }}/>
          </div>
        </div>

      </div>

    );
  }
}