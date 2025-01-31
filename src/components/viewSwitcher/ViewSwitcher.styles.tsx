import { css, styled } from 'styled-components';

import { colors } from '../../consts';

const SwitcherContainer = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;

  button {
    height: 34px;
    padding: 4px 10px;
    border-right: 2px solid ${colors.gray700};
    border-top: 2px solid ${colors.gray700};
    border-bottom: 2px solid ${colors.gray700};

    &:not(:last-of-type) {
      border-left: 2px solid ${colors.gray700};
      border-top-left-radius: 25px;
      border-bottom-left-radius: 25px;
    }

    &:last-of-type {
      border-top-right-radius: 25px;
      border-bottom-right-radius: 25px;
    }

    .active {
      background-color: ${colors.gray700};
    }
  }
`;

const SwitcherButton = styled.button<{ $active: boolean }>`
  height: 34px;
  padding: 4px 10px;
  border-right: 2px solid ${colors.gray700};
  border-top: 2px solid ${colors.gray700};
  border-bottom: 2px solid ${colors.gray700};
  background-color: ${({ theme }) => theme.viewButtons.bg};
  color: ${({ theme }) => theme.viewButtons.fg};

  &:not(:last-of-type) {
    border-left: 2px solid ${colors.gray700};
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
      background-color: ${({ theme }) => theme.viewButtons.activeBg};
      color: ${({ theme }) => theme.viewButtons.activeFg};
    `};
`;

export default {
  SwitcherContainer,
  SwitcherButton,
};
