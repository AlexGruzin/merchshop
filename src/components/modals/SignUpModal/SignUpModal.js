import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import injectSheet from 'react-jss';
import styles from './styles';
import LogInModalForm from './SignUpModalForm';
import ModalsHeader from 'components/ModalsHeader';

@injectSheet( styles )
export default class SignUpModal extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    t: PropTypes.func.isRequired,
    closeModal: PropTypes.func.isRequired,
    sendSignUpData: PropTypes.func.isRequired,
  };

  render() {
    const {
      closeModal,
      classes,
      sendSignUpData,
    } = this.props;

    return (
      <div>

        <div className={classes.root}>
          <ModalsHeader
            onCrossIconClick={closeModal}/>

          <LogInModalForm
            onSubmit={( values ) => sendSignUpData( values )}/>
        </div>

      </div>
    );
  }
}
