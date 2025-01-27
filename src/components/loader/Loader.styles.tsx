import { keyframes, styled } from 'styled-components';

// spin keyframe fro loader
const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

const LoaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loader = styled.div`
  animation: ${spin} 1s linear infinite;
  width: 48px;
  height: 48px;
  border: 5px solid #fff;
  border-bottom-color: ${({ theme }) => theme.primary};
  border-radius: 50%;
  box-sizing: border-box;
`;

export default {
  LoaderWrapper,
  Loader,
};
