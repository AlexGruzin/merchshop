import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import injectSheet from 'react-jss';
import styles from './styles';
import Checkbox from '@material-ui/core/Checkbox'

@injectSheet( styles )
export default class CheckBox extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    input: PropTypes.object.isRequired,

    className: PropTypes.string,
  };

  static defaultProps = {
    className: null,
  };

  render() {
    const {
      classes,
      className,
      input,
    } = this.props;

    return (
      <div className={classNames( className, classes.root )}>
        <Checkbox
          checked={input.value ? true : false}
          onChange={input.onChange}
          classes={{
            root: classes.checkRoot,
          }}
        />
      </div>
    );
  }
}
