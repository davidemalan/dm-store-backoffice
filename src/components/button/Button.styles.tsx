import { styled } from 'styled-components';

const Button = styled.button<{ $color?: string; $backgroundColor?: string; $backgroundHoverColor?: string }>`
  color: ${({ $color }) => $color};
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  padding: 10px 30px;
  border-radius: 20px;
  margin-bottom: 14px;

  &:hover {
    background-color: ${({ $backgroundHoverColor }) => $backgroundHoverColor};
  }
`;

export default {
  Button,
};
