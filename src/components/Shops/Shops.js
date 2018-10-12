import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import injectSheet from 'react-jss';
import styles from './styles';
import Images from 'theme/images';
import ActionImage from 'components/ActionImage';

@translate()
@injectSheet( styles )
export default class Shops extends PureComponent {
  static propTypes = {
    t: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
  };

  render() {
    const { t, classes } = this.props;

    return (
      <div className={classes.mediumPhotoArea}>
        <ActionImage
          to="/"
          src={Images.shopMasks}
          label={t( 'homePage:shopMasks' )}
          key={1}/>
        <ActionImage
          key={2}
          to="/"
          src={Images.shopBluetooth}
          label={t( 'homePage:shopBluetooth' )}/>
      </div>
    );
  }
}
