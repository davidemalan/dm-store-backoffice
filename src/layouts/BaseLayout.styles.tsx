import { styled } from 'styled-components';

const LayoutWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const MainContainer = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: ${({ theme }) => theme.main.bg};
  color: ${({ theme }) => theme.main.fg};
  transition:
    background-color 0.3s ease,
    color 0.3s ease;

  ${({ theme }) => theme.breakpoints.up('md')} {
    margin-left: 140px;
  }
`;

export default {
  LayoutWrapper,
  MainContainer,
};
