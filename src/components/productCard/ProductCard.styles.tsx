import { styled } from 'styled-components';

const CardContainer = styled.li`
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const ReviewList = styled.blockquote`
  font-size: 14px;
  width: 60%;
  margin: 50px auto;
  font-style: italic;
  color: #555555;
  padding: 12px 30px 12px 75px;
  border-left: 8px solid #78c0a8;
  position: relative;
  background: #ededed;
  font-style: italic;

  &:before {
    font-family: Arial;
    content: '\201C';
    color: #78c0a8;
    font-size: 4em;
    position: absolute;
    left: 10px;
    top: -10px;
  }
`;

const CardFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 150px;
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
