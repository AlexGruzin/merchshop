import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import injectSheet from 'react-jss';
import ArrowRight from 'components/ArrowRight';
import styles from './styles';

@injectSheet( styles )
export default class ActionImage extends PureComponent {
  static propTypes = {
    to: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired,
  };

  render() {
    const { to, src, label, classes } = this.props;

    return (
      <div className={classes.root}>
        <div
          className={classes.image}
          style={{
            backgroundImage: `url('${src}')`
          }}/>
        <Button
          component={Link}
          to={to}
          size="medium"
          className={classes.button}>
          <Typography className={classes.buttonLabel} variant='button'>
            {label}
          </Typography>
          <ArrowRight />
        </Button>
      </div>
    );
  }
}

