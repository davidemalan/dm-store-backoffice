import { Chart as ChartJS, RadialLinearScale, ArcElement, Tooltip, Legend, ChartData } from 'chart.js';
import { FC, ReactElement, useEffect, useState } from 'react';
import { PolarArea } from 'react-chartjs-2';
import { useTheme } from 'styled-components';
import { useMediaQuery } from 'usehooks-ts';

import MobileMenu from '../components/mobileMenu/MobileMenu';
import useAxios from '../hooks/useAxios';
import { getStoreStats } from '../services/api';
import { StoreCategoryStats } from '../types/api';
import { mapStatsToChart } from '../utils';

import Styled from './Stats.styles';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const Stats: FC = (): ReactElement => {
  const [chartData, setChartData] = useState<ChartData<'polarArea', number[], string>>();

  const { up } = useTheme().breakpoints;
  const { text } = useTheme();

  // replace media because the up function returns it as part of the string
  const isMd = useMediaQuery(up('md').replace('@media ', ''));

  const { data: StatsData, error, apiWrapper } = useAxios<StoreCategoryStats[]>();

  // useCallback in order to avoid rerendering infinite loops
  useEffect(() => {
    apiWrapper(getStoreStats);
  }, [apiWrapper]);

  useEffect(() => {
    if (StatsData) {
      const mappedData = mapStatsToChart(StatsData);

      setChartData(mappedData);
    }
  }, [StatsData]);

  return (
    <>
      <Styled.StatsHeaderWrapper>{!isMd && <MobileMenu />}</Styled.StatsHeaderWrapper>

      {error ? (
        <>Error retrieving Stats data: {error}</>
      ) : (
        <Styled.StatsContainer>
          {chartData && (
            <PolarArea
              data={chartData}
              options={{
                plugins: { legend: { labels: { color: text } } },
                scales: { r: { grid: { color: text } } },
              }}
            />
          )}
        </Styled.StatsContainer>
      )}
    </>
  );
};

export default Stats;
