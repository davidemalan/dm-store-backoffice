import { styled } from 'styled-components';

import Button from '../button/Button';

const Modal = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  inset: 0;

  section {
    margin-top: 20px;
  }
`;

const Card = styled.div`
  min-width: 100%;
  padding: 20px 40px;
  background: #fff;
  text-align: center;
  border-radius: 4px;
  max-width: 750px;
  overflow-y: auto;
  max-height: 100vh;

  ${({ theme }) => theme.breakpoints.up('md')} {
    max-height: 90vh;
    min-width: 500px;
  }

  /* style scrollbar to make it bit smaller */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #c4c4c4;

    &:hover {
      background-color: #acacac;
    }
  }
`;

const CardHeader = styled.div`
  text-align: right;
`;

export default {
  Modal,
  Card,
  CardHeader,
};
