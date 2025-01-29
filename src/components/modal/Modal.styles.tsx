import { styled } from 'styled-components';

const Modal = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  inset: 0;
`;

const Card = styled.div`
  min-width: 100%;
  padding: 20px 40px;
  background: #fff;
  text-align: center;

  ${({ theme }) => theme.breakpoints.up('md')} {
    min-width: 500px;
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
