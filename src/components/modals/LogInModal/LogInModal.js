import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import styles from './styles';
import LogInModalForm from './LogInModalForm';
import ModalsHeader from 'components/ModalsHeader';

@injectSheet( styles )
export default class LogInModal extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    closeModal: PropTypes.func.isRequired,
    sendLogInData: PropTypes.func.isRequired,
  };

  render() {
    const {
      closeModal,
      classes,
      sendLogInData,
    } = this.props;

    return (
      <div>

        <div className={classes.root}>
          <ModalsHeader
            onCrossIconClick={closeModal}/>

          <LogInModalForm
            onSubmit={( values ) => sendLogInData( values )}/>
        </div>

      </div>
    );
  }
}
