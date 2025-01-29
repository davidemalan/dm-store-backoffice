import { FC, PropsWithChildren, ReactElement } from 'react';

import Styled from './ErrorMessage.styles';

const ErrorMessage: FC<PropsWithChildren> = ({ children }): ReactElement => {
  return <Styled.MessageContainer>{children}</Styled.MessageContainer>;
};

export default ErrorMessage;
