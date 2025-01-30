import { css, styled } from 'styled-components';

const CardWrapper = styled.li`
  width: 100%;
  margin-bottom: 20px;

  ${({ theme }) => theme.breakpoints.up('md')} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const CardContainer = styled.div<{ $gridView: boolean }>`
  width: 100%;
  background-color: ${({ theme }) => theme.card.bg};
  color: ${({ theme }) => theme.card.fg};
  padding: 20px;
  border-radius: 8px;

  ${({ theme }) => theme.breakpoints.up('md')} {
    max-width: 800px;
  }

  ${({ $gridView }) =>
    $gridView &&
    css`
      position: relative;
      min-height: 250px;
      height: unset;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      ${({ theme }) => theme.breakpoints.up('md')} {
        min-height: 350px;
      }

      ${({ theme }) => theme.breakpoints.up('lg')} {
        height: 250px;
      }

      &:hover ${ReviewOverlay} {
        height: 160px;
        background-color: rgba(0, 0, 0, 0.8);

        p {
          opacity: 1;
        }
      }
    `};
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 8px;
`;

const ReviewOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0;
  background-color: rgba(0, 0, 0, 0);
  color: #fff;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  padding: 10px 20px;
  overflow: hidden;
  overflow-wrap: break-word;

  font-family: Open Sans;
  font-style: italic;
  transition:
    background-color 0.5s ease,
    height 0.5s ease;

  p {
    opacity: 0;
    transition: opacity 1s ease;
  }
`;

const ReviewList = styled.blockquote`
  max-width: 500px;
  font-size: 14px;
  font-family: Open Sans;
  margin: 20px;
  font-style: italic;
  padding: 12px 30px 12px 50px;
  border-left: 8px solid #494d55;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.review.bg};
  color: ${({ theme }) => theme.review.fg};
  quotes: '“' '”';

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

const Employee = styled.span`
  font-weight: 700;
`;

const CategoryTag = styled.span`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.review.bg};
  color: ${({ theme }) => theme.review.fg};
  border-radius: 25px;
  padding: 5px 15px;
  font-weight: 500;
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
  ReviewOverlay,
  ReviewList,
  CardFooter,
  Employee,
  CategoryTag,
  ModalTitle,
  ModalButtonGroup,
};
