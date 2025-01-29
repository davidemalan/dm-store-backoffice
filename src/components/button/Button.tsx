import { FC, PropsWithChildren } from 'react';

import Styled from './Button.styles';

type ButtonProps = PropsWithChildren<{
  backgroundColor?: string;
  color?: string;
}>;

const Button: FC<ButtonProps> = ({ backgroundColor, color, children }): React.ReactElement => {
  return (
    <Styled.Button
      $backgroundColor={backgroundColor}
      $color={color}
    >
      {children}
    </Styled.Button>
  );
};

export default Button;
