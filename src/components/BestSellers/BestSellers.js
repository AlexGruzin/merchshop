import Typography from '@material-ui/core/Typography';
import SellItem from 'components/SellItem';

import { H3 } from 'constants/typography';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import { translate } from 'react-i18next';
import injectSheet from 'react-jss';
import styles from './styles';

@translate()
@injectSheet( styles )
export default class BestSellers extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    bestSellers: PropTypes.array.isRequired,
  };

  render() {
    const { t, bestSellers, classes } = this.props;

    return (
      <div className={classes.bestSellers}>
        <Typography variant={H3}>{t( 'homePage:Best Sellers' )}</Typography>
        <ScrollMenu
          alignCenter={false}
          data={bestSellers.map( item => <SellItem {...item} key={item.id} /> )}/>
      </div>
    );
  }
}


