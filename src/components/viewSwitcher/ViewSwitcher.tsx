import { FC, ReactElement, useEffect } from 'react';
import { useShallow } from 'zustand/shallow';

import { useGlobalStore } from '../../store/hooks';
import { ProductsView } from '../../types/store';
import { Grid } from '../icons/Grid';
import { List } from '../icons/List';

import Styled from './ViewSwitcher.styles';

const ViewSwitcher: FC = (): ReactElement => {
  const [productsView, setProductsView] = useGlobalStore(
    useShallow((state) => [state.productsView, state.setProductsView])
  );

  // Set View in context
  const onToggle = (view: ProductsView) => {
    setProductsView(view);
  };

  return (
    <Styled.SwitcherContainer>
      <Styled.SwitcherButton
        onClick={() => onToggle(ProductsView.LIST_VIEW)}
        $active={productsView === ProductsView.LIST_VIEW}
      >
        <List title="List view" />
      </Styled.SwitcherButton>
      <Styled.SwitcherButton
        onClick={() => onToggle(ProductsView.GRID_VIEW)}
        $active={productsView === ProductsView.GRID_VIEW}
      >
        <Grid title="Grid view" />
      </Styled.SwitcherButton>
    </Styled.SwitcherContainer>
  );
};

export default ViewSwitcher;
