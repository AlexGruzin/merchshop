import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import injectSheet from 'react-jss';
import styles from './styles';
import ForgotPasswordModalForm from './ForgotPasswordModalForm';
import ModalsHeader from 'components/ModalsHeader';

@translate()
@injectSheet(styles)
export default class ForgotPasswordModal extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    t: PropTypes.func.isRequired,
    closeModal: PropTypes.func.isRequired,
    sendResetPasswordMail: PropTypes.func.isRequired,
  };

  render() {
    const {
      closeModal,
      classes,
      t,
      sendResetPasswordMail,
    } = this.props;

    return (
      <div>

        <div className={classes.root}>
          <ModalsHeader
            content={t('forgotPasswordModal:forgotPassword')}
            onCrossIconClick={closeModal}
          />

          <ForgotPasswordModalForm
            onSubmit={(values) => sendResetPasswordMail(values)}
          />
        </div>

      </div>
    );
  }
}
