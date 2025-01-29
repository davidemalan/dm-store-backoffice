import { FC, PropsWithChildren, ReactElement, useEffect } from 'react';

import { Close } from '../icons/Close';

import Styled from './Modal.styles';

type ModalProps = PropsWithChildren<{
  closeModal: () => void;
}>;

const Modal: FC<ModalProps> = ({ closeModal, children }): ReactElement => {
  // remove scroll when opened
  useEffect(() => {
    document.body.style.overflowY = 'hidden';

    return () => {
      document.body.style.overflowY = 'unset';
    };
  }, []);

  return (
    <Styled.Modal>
      <Styled.Card>
        {/* close button */}
        <Styled.CardHeader>
          <button onClick={closeModal}>
            <Close />
          </button>
        </Styled.CardHeader>

        {children}
      </Styled.Card>
    </Styled.Modal>
  );
};

export default Modal;
