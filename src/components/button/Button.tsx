import { FC, PropsWithChildren } from 'react';

import Styled from './Button.styles';

type ButtonProps = PropsWithChildren<{
  backgroundColor?: string;
  backgroundHoverColor?: string;
  color?: string;
  onClick?: () => void;
}>;

const Button: FC<ButtonProps> = ({
  backgroundColor,
  backgroundHoverColor,
  color,
  onClick,
  children,
}): React.ReactElement => {
  return (
    <Styled.Button
      $backgroundColor={backgroundColor}
      $backgroundHoverColor={backgroundHoverColor}
      $color={color}
      onClick={onClick}
    >
      {children}
    </Styled.Button>
  );
};

export default Button;
