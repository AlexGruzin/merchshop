import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import Dialog from '@material-ui/core/Dialog';
import { MODAL_SHADOWS_TO_SHOW } from 'constants/modals';
import styles from './styles';
import injectSheet from 'react-jss';
// modals
import ForgotPasswordModal from 'components/modals/ForgotPasswordModal';

// modals
import ModalTypes from 'constants/modals';

const mapTypeToModal = {
  [ModalTypes.FORGOT_PASSWORD]: ForgotPasswordModal,
};

@injectSheet( styles )
export default class ModalsPortal extends PureComponent {
  static propTypes = {
    classes: PropTypes.object,
    modals: ImmutablePropTypes.stack,
    closeModal: PropTypes.func,
  };

  render() {
    const { classes, modals, closeModal } = this.props;
    const conditionalIndex = modals.size - MODAL_SHADOWS_TO_SHOW;

    return (
      //TODO need to write generic service for key handling.
      <div
        onKeyDown={e => {
          if ( e.keyCode === 27 ) {
            closeModal();
          }
        }
        }>
        {
          modals.map(( modal, index ) => {
            const ModalType = mapTypeToModal[modal.get( 'type' )];

            return (
              <Dialog
                classes={classes}
                key={index}
                open={true}
                hideBackdrop={index < conditionalIndex}
                onClose={closeModal}>
                <ModalType
                  data={modal.get( 'data' )}
                  closeModal={closeModal}/>
              </Dialog>
            );
          })
        }
      </div>
    );
  }
}
