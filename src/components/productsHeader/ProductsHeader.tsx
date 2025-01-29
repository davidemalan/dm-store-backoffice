import { FC, ReactElement } from 'react';

import Button from '../button/Button';
import ViewSwitcher from '../viewSwitcher/ViewSwitcher';

import Styled from './ProductsHeader.styles';

interface ProductsHeaderProps {
  showModal: () => void;
}

const ProductsHeader: FC<ProductsHeaderProps> = ({ showModal }): ReactElement => {
  return (
    <Styled.ProductsHeaderWrapper>
      <Button
        onClick={showModal}
        color="#fff"
        backgroundColor="#2ecc71"
        backgroundHoverColor="#25a85c"
      >
        Add new Product
      </Button>
      <ViewSwitcher />
    </Styled.ProductsHeaderWrapper>
  );
};

export default ProductsHeader;
