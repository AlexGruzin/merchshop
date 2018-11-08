import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import injectSheet from 'react-jss';
import SellItem from 'components/SellProduct';
import Typography from '@material-ui/core/Typography';
import ScrollMenu from 'react-horizontal-scrolling-menu';

import { H1 } from 'constants/typography';
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
        <Typography variant="h1">{t( 'homePage:bestSellers' )}</Typography>
        <ScrollMenu
          alignCenter={false}
          data={bestSellers.map( item => <SellItem {...item} key={item.id} /> )}
        />
      </div>
    );
  }
}


