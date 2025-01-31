import { styled } from 'styled-components';

import { colors } from '../../consts';

const MessageContainer = styled.div`
  position: absolute;
  background-color: ${colors.red};
  color: ${colors.white};
  padding: 10px 40px;
  border-radius: 25px;
`;

export default { MessageContainer };
