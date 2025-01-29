import { styled } from 'styled-components';

const CardWrapper = styled.li`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const CardContainer = styled.div`
  width: 100%;
  max-width: 600px;
  background-color: ${({ theme }) => theme.card.bg};
  color: ${({ theme }) => theme.card.fg};
  padding: 20px;
  border-radius: 8px;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 8px;
`;

const ReviewList = styled.blockquote`
  max-width: 500px;
  font-size: 14px;
  font-family: Open Sans;
  margin: 20px;
  font-style: italic;
  padding: 12px 30px 12px 50px;
  border-left: 8px solid #78c0a8;
  border-radius: 4px;
  position: relative;
  background-color: ${({ theme }) => theme.review.bg};
  color: ${({ theme }) => theme.review.fg};
  quotes: '“' '”';

  &::before {
    font-family: Arial;
    content: open-quote;
    color: #78c0a8;
    font-size: 64px;
    position: absolute;
    left: 10px;
    top: -10px;
  }

  p {
    margin: 2px 0;
  }
`;

const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 100px;
`;

const CategoryTag = styled.span`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.review.bg};
  color: ${({ theme }) => theme.review.fg};
  border-radius: 25px;
  padding: 5px 15px;
`;

const ModalTitle = styled.h2`
  margin-bottom: 30px;
`;

const ModalButtonGroup = styled.section`
  margin-top: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 100px;
`;

export default {
  CardWrapper,
  CardContainer,
  CardHeader,
  ReviewList,
  CardFooter,
  CategoryTag,
  ModalTitle,
  ModalButtonGroup,
};
