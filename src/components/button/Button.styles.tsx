import { css, styled } from 'styled-components';

const Button = styled.button<{
  $color?: string;
  $backgroundColor?: string;
  $backgroundHoverColor?: string;
  $rounded?: boolean;
}>`
  color: ${({ $color }) => $color};
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  padding: 10px 30px;
  border-radius: 20px;

  ${({ $rounded }) =>
    $rounded &&
    css`
      padding: 5px;
      border-radius: 50%;
    `};

  &:hover {
    background-color: ${({ $backgroundHoverColor }) => $backgroundHoverColor};
  }
`;

const ChildrenContainer = styled.div`
  display: flex;
  align-items: center;
`;

export default {
  Button,
  ChildrenContainer,
};
