import { styled } from 'styled-components';

const Button = styled.button<{ $color?: string; $backgroundColor?: string }>`
  color: ${({ $color }) => $color};
  background-color: ${({ $backgroundColor }) => $backgroundColor};
`;

export default {
  Button,
};
