import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import injectSheet from 'react-jss';
import styles from './styles';

import Images from 'theme/images';
import { productTypes } from 'constants/shop';

@translate()
@injectSheet( styles )
export default class Collection extends PureComponent {

  static propTypes = {
    t: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
    items: PropTypes.array.isRequired,
    ItemRenderingComponent: PropTypes.func.isRequired,
  };

  render() {
    const {
      t,
      items,
      classes,
      ItemRenderingComponent,
    } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.itemsWrapper}>

          {
            items.map(( item, index ) => {
              return (
                <div
                  className={classes.itemWrapper}
                  key={index}
                >
                  <ItemRenderingComponent
                    itemData={item}
                  />
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}
