import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import injectSheet from 'react-jss';
import Flag from 'react-world-flags';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import styles from './styles';

//TODO need to add link to resend activation email view
@translate()
@injectSheet(styles)
export default class Header extends PureComponent {
  static propTypes = {
    i18n: PropTypes.object.isRequired,
    t: PropTypes.func.isRequired,
    makeLogout: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
    activeCompany: PropTypes.object,
    activeCompanyUserRole: PropTypes.string,
    linkList: PropTypes.array,
  };

  static defaultProps = {
    linkList: [],
  };

  handleLanguageChange = (event) => {
    const { i18n } = this.props;
    i18n.changeLanguage(event.nativeEvent.target.value);
  };

  render() {
    const {
      t,
      classes,
      i18n,
      linkList,
      displayLogoutButton,
      makeLogout,
    } = this.props;
    const {
      root,
      languagesRoot,
      languagesSelect,
      linksContainer,
      link,
    } = classes;

    return (
      <div className={root}>
        <h4>{t('header:headerTitle')}</h4>

        <nav className={linksContainer}>
          {linkList.map(linkItem => (
            <NavLink
              to={linkItem.route}
              className={link}
              key={linkItem.label}
            >
              {t(linkItem.label)}
            </NavLink>
          ))}
        </nav>

        <div className={languagesRoot}>
          <Flag code={i18n.language} height={16}/>
          <select
            name="languages"
            onChange={this.handleLanguageChange}
            className={languagesSelect}
          >
            {i18n.languages.map(lng => (
              <option
                value={lng}
                key={lng}
              >
                {lng}
              </option>
            ))}
          </select>
        </div>
        {displayLogoutButton ? <Button
          onClick={makeLogout}
          className={classes.logoutButton}
        >
          {t('auth:logout')}
        </Button> : null}
      </div>
    );
  }
}
