import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import injectSheet from 'react-jss';
import { translate } from 'react-i18next';
import styles from './styles';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';

import ExpandMore from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom';

import Icon from 'components/Icon';
import { ICONS } from 'constants/icons';

@translate()
@injectSheet( styles )
export default class DropdownSelect extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    variant: PropTypes.string,
    children: PropTypes.array.isRequired,
    value: PropTypes.string.isRequired,
  };

  static defaultProps = {
    className: '',
    type: 'text',
    variant: 'standard',
  };

  render() {
    const {
      t,
      input,
      type,
      value,

      classes,
      variant,
      children,
      className,
      ...custom,
    } = this.props;

    return (
      <div className={classNames( className, classes.textInput )}>
        <Select
          {...input}
          {...custom}
          className={classes.selectRoot}
          classes={{
            root: classes.root,
            select: classes.select,
            icon: classes.icon,
          }}
          MenuProps={{
            disableAutoFocusItem: true,
            classes: {
              paper: classes.menuPaper,
            },
          }}
          disableUnderline
          variant={variant}
          IconComponent={ExpandMore}
          //onChange={( event, index, value ) => input.onChange( value )}
          value={value}
        >
          {
            children.map(( item )=>{
              return(
                <MenuItem key={item.name} value={item.name}>

                  <Link
                    className={classes.dropLink}
                    to={item.route}>

                    <Typography>
                      {t( item.name )}
                    </Typography>
                  </Link>
                </MenuItem>
              )
            })
          }
        </Select>
      </div>
    );
  }
}
