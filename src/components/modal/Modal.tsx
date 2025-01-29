import { Close } from '../icons/Close';

import Styled from './Modal.styles';

interface ModalProps {
  closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ closeModal }): React.ReactElement => {
  return (
    <Styled.Modal>
      <Styled.Card>
        <Styled.CardHeader>
          <button onClick={closeModal}>
            <Close />
          </button>
        </Styled.CardHeader>
        <h3>Add new Product</h3>
      </Styled.Card>
    </Styled.Modal>
  );
};

export default Modal;
