import { ChartData } from 'chart.js';

import { StoreCategoryStats } from './types/api';

export const mapStatsToChart = (statsData: StoreCategoryStats[]): ChartData<'polarArea', number[], string> => {
  const labels: string[] = [];
  const data: number[] = [];
  const backgroundColor: string[] = [];

  statsData.map((stat, i) => {
    labels.push(stat.category);
    data.push(stat.numberOfProducts);

    // random color
    const color = selectColor(i);
    backgroundColor.push(color);
  });

  return {
    labels,
    datasets: [
      {
        label: 'Products',
        data,
        backgroundColor,
        borderWidth: 1,
      },
    ],
  };
};

const selectColor = (number: number): string => {
  const hue = number * 137.508; // use golden angle approximation

  // 50% lightness to avoid too dark or light colors
  // 75% saturation to have strong a viewable colors
  return hslToHex(hue, 50, 75);
};

const hslToHex = (h: number, s: number, l: number): string => {
  l /= 100;
  const a = (s * Math.min(l, 1 - l)) / 100;

  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);

    return Math.round(255 * color)
      .toString(16)
      .padStart(2, '0'); // convert to Hex and prefix "0" if needed
  };
  return `#${f(0)}${f(8)}${f(4)}`;
};
