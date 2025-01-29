import { FC, FormEvent, MouseEvent, PropsWithChildren, ReactElement } from 'react';

import Styled from './Button.styles';

type ButtonProps = PropsWithChildren<{
  backgroundColor?: string;
  backgroundHoverColor?: string;
  color?: string;
  rounded?: boolean;
  onClick: (event: FormEvent<HTMLFormElement> | MouseEvent<HTMLButtonElement>) => void;
}>;

const Button: FC<ButtonProps> = ({
  backgroundColor,
  backgroundHoverColor,
  color,
  rounded,
  onClick,
  children,
}): ReactElement => {
  return (
    <Styled.Button
      $backgroundColor={backgroundColor}
      $backgroundHoverColor={backgroundHoverColor}
      $color={color}
      $rounded={rounded}
      onClick={(e) => onClick(e)}
    >
      <Styled.ChildrenContainer>{children}</Styled.ChildrenContainer>
    </Styled.Button>
  );
};

export default Button;
