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

const TextInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 10px 10px;
  font-size: 16px;
  color: #495057;
  background-color: #fff;
  border: 1px solid #ced4da;
  border-radius: 4px;
  margin: 10px 0;

  transition:
    border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;

  &:focus {
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }

  ${({ theme }) => theme.breakpoints.up('md')} {
    width: calc(50% - 20px);
    margin-right: 20px;
  }
`;

const PriceLabel = styled.label`
  font-weight: 700;
`;

const PriceInput = styled(TextInput)`
  margin-left: 20px;
`;

const LongInput = styled(TextInput)`
  width: 100%;
`;

const AddButton = styled(Button)``;

const SubmitButton = styled.input`
  color: #fff;
  background-color: #2ecc71;
  border-radius: 25px;
  padding: 10px 30px;
  margin-bottom: 14px;
  border: none;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #25a85c;
  }
`;

export default {
  Modal,
  TextInput,
  PriceLabel,
  PriceInput,
  LongInput,
  Card,
  CardHeader,
  AddButton,
  SubmitButton,
};
