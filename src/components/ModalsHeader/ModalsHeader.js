import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import styles from './styles';
import Typography from '@material-ui/core/Typography';

@injectSheet( styles )
export default class ModalsHeader extends PureComponent {
  static propTypes = {
    content: PropTypes.string.isRequired,
    onCrossIconClick: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
  };

  render() {
    const {
      classes,
      content,
      onCrossIconClick,
    } = this.props;

    return (
      <header className={classes.head}>
        <Typography className={classes.title}>
          {content}
        </Typography>
        <div
          className={classes.close}
          onClick={onCrossIconClick}>{'Close'}</div>
      </header>
    );
  }
}
