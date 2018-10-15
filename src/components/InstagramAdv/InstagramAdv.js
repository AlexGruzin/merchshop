import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Icon from 'components/Icon';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { ICONS } from 'constants/icons';

import { translate } from 'react-i18next';
import injectSheet from 'react-jss';
import styles from './styles';

@translate()
@injectSheet( styles )
export default class InstagramAdv extends PureComponent {
  static propTypes = {
    t: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
    images: PropTypes.array.isRequired,
  };

  render() {
    const { t, classes, images } = this.props;

    return (
      <div className={classes.instagram}>
        <Button
          component={Link}
          to="/"
          size="medium"
          className={classes.instagramButton}>
          <Icon icon={ICONS.INSTAGRAM_ICON} className={classes.instagramIcon} />
          <Typography className={classes.instagramButtonLabel} variant='button'>
            {t( 'homePage:instagram' )}
          </Typography>
        </Button>
        {
          images.map(( item, index ) => (
            <div key={index}
              className={classes.instagramImage}
              style={{
                backgroundImage: `url('${item}')`,
              }}/>
          ))
        }
      </div>
    );
  }
}
