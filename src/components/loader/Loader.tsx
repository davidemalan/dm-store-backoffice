import Styled from './Loader.styles';

const Loader: React.FC = (): React.ReactElement => {
  return (
    <Styled.LoaderWrapper>
      <Styled.Loader />
    </Styled.LoaderWrapper>
  );
};

export default Loader;
