import { FC, ReactElement } from 'react';
import { useTheme } from 'styled-components';
import { useMediaQuery } from 'usehooks-ts';

import { colors } from '../../consts';
import Button from '../button/Button';
import MobileMenu from '../mobileMenu/MobileMenu';
import ViewSwitcher from '../viewSwitcher/ViewSwitcher';

import Styled from './ProductsHeader.styles';

interface ProductsHeaderProps {
  showModal: () => void;
}

const ProductsHeader: FC<ProductsHeaderProps> = ({ showModal }): ReactElement => {
  const { up } = useTheme().breakpoints;
  // replace media because the up function returns it as part of the string
  const isMd = useMediaQuery(up('md').replace('@media ', ''));

  return (
    <Styled.ProductsHeaderWrapper>
      <Button
        onClick={showModal}
        color={colors.white}
        backgroundColor={colors.green}
        backgroundHoverColor={colors.darkGreen}
      >
        Add new Product
      </Button>
      <ViewSwitcher />

      {!isMd && <MobileMenu />}
    </Styled.ProductsHeaderWrapper>
  );
};

export default ProductsHeader;
