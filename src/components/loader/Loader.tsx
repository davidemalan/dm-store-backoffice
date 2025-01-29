import { FC, ReactElement } from 'react';

import Styled from './Loader.styles';

const Loader: FC = (): ReactElement => {
  return (
    <Styled.LoaderWrapper>
      <Styled.Loader />
    </Styled.LoaderWrapper>
  );
};

export default Loader;
