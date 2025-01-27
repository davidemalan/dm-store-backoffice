import { styled } from 'styled-components';

const SwitcherContainer = styled.section`
  display: flex;
`;
const SwitcherWrapper = styled.label`
  width: 50px;
  height: 25px;
  position: relative;
  display: inline-block;

  input[type='checkbox'] {
    display: none;
  }
`;

const Switch = styled.span`
  position: absolute;
  cursor: pointer;
  inset: 0;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.switch.bg};
  transition: background-color 0.2s ease;

  &:before {
    position: absolute;
    content: '';
    left: 2px;
    top: 2px;
    width: 21px;
    height: 21px;
    background-color: ${({ theme }) => theme.switch.fg};
    border-radius: 50%;
    transition:
      transform 0.3s ease,
      background-color 0.3s ease;
  }

  &.dark:before {
    transform: translateX(22px);
  }
`;

export default {
  SwitcherContainer,
  SwitcherWrapper,
  Switch,
};
