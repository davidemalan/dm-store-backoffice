import { FC, ReactElement } from 'react';
import { useTheme } from 'styled-components';
import { useMediaQuery } from 'usehooks-ts';

import MobileMenu from '../components/mobileMenu/MobileMenu';

import Styled from './Stats.styles';

const Stats: FC = (): ReactElement => {
  const { up } = useTheme().breakpoints;
  // replace media because the up function returns it as part of the string
  const isMd = useMediaQuery(up('md').replace('@media ', ''));

  return <Styled.StatsHeaderWrapper>{!isMd && <MobileMenu />}</Styled.StatsHeaderWrapper>;
};

export default Stats;
