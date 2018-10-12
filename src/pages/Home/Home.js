import React, { PureComponent } from 'react';
import ReactHelmet from 'react-helmet';
import Images from 'theme/images';
import { translate } from 'react-i18next';
import injectSheet from 'react-jss';

// components
import Advertisement from 'components/Advertisement';
import Slider from 'components/Slider';
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

        <Slider
          active={1}
          items={[
            Images.image1,
            Images.image2,
            Images.image1,
            Images.image2
          ]}/>

        <Shops />

        <BestSellers bestSellers={sellers} />

        <InstagramAdv images={InstagramImages} />


      </div>
    );
  }
}
