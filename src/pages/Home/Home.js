import React, { PureComponent } from 'react';
import ReactHelmet from 'react-helmet';
import Images from 'theme/images';
import { translate } from 'react-i18next';
import injectSheet from 'react-jss';

// components
import Advertisement from 'components/Advertisement';
import SwipeableSlider from 'components/SwipeableSlider';
import Shops from 'components/Shops';
import BestSellers from 'components/BestSellers';
import InstagramAdv from 'components/InstagramAdv';

// constants
// TODO: replace with backend
import { BestSellers as sellers, InstagramImages } from 'constants/home';

import styles from './styles';

@translate()
@injectSheet( styles )
export default class Home extends PureComponent {
  render() {
    const {
      t,
    } = this.props;

    return (
      <div>
        <ReactHelmet
          title={t( 'homePage:title' )}/>

        <Advertisement />

        <SwipeableSlider
          items={[
            {
              image: Images.image1,
              link: '/helm1'
            }, {
              image: Images.image1,
              link: '/helm2'
            }, {
              image: Images.image1,
              link: '/helm3'
            }, {
              image: Images.image1,
              link: '/helm4'
            }
          ]}/>

        <Shops />

        <BestSellers bestSellers={sellers} />

        <InstagramAdv images={InstagramImages} />

      </div>
    );
  }
}
