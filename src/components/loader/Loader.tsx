import { FC } from 'react';

import Styled from './Loader.styles';

const Loader: FC = (): React.ReactElement => {
  return (
    <Styled.LoaderWrapper>
      <Styled.Loader />
    </Styled.LoaderWrapper>
  );
};

export default Loader;
