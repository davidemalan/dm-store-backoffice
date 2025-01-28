import { styled } from 'styled-components';

const CardContainer = styled.li`
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  background-color: #a3a3a3;
  padding: 20px;
  border-radius: 8px;

  ${({ theme }) => theme.breakpoints.up('lg')} {
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 8px;
`;

const ReviewList = styled.blockquote`
  max-width: 500px;
  font-size: 14px;
  font-family: Open Sans;
  margin: 20px;
  font-style: italic;
  color: #555555;
  padding: 12px 30px 12px 50px;
  border-left: 8px solid #78c0a8;
  border-radius: 4px;
  position: relative;
  background: #ededed;
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
  gap: 100px;
`;

const CategoryTag = styled.span`
  display: flex;
  align-items: center;
  background-color: #ccc;
  border-radius: 25px;
  padding: 5px 15px;
`;

export default {
  CardContainer,
  CardHeader,
  ReviewList,
  CardFooter,
  CategoryTag,
};
