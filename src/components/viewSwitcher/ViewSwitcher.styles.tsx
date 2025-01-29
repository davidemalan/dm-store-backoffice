import { css, styled } from 'styled-components';

const SwitcherContainer = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;

  button {
    height: 34px;
    padding: 4px 10px;
    border-right: 2px solid #272727;
    border-top: 2px solid #272727;
    border-bottom: 2px solid #272727;

    &:not(:last-of-type) {
      border-left: 2px solid #272727;
      border-top-left-radius: 25px;
      border-bottom-left-radius: 25px;
    }

    &:last-of-type {
      border-top-right-radius: 25px;
      border-bottom-right-radius: 25px;
    }

    .active {
      background-color: #272727;
    }
  }
`;

const SwitcherButton = styled.button<{ $active: boolean }>`
  height: 34px;
  padding: 4px 10px;
  border-right: 2px solid #272727;
  border-top: 2px solid #272727;
  border-bottom: 2px solid #272727;

  &:not(:last-of-type) {
    border-left: 2px solid #272727;
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
  }

  &:last-of-type {
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
  }

  ${({ $active }) =>
    $active &&
    css`
      background-color: #ededed;
    `};
`;

export default {
  SwitcherContainer,
  SwitcherButton,
};
