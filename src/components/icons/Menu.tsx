import { FC, ReactElement } from 'react';

import { colors } from '../../consts';

export const Menu: FC<{ title: string }> = ({ title }): ReactElement => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 16 16"
    fill="none"
    aria-labelledby="Menu-title"
  >
    <title id="Menu-title">{title}</title>
    <path
      d="M2.66667 12C2.47778 12 2.31944 11.9361 2.19167 11.8083C2.06389 11.6806 2 11.5222 2 11.3333C2 11.1444 2.06389 10.9861 2.19167 10.8583C2.31944 10.7306 2.47778 10.6667 2.66667 10.6667H13.3333C13.5222 10.6667 13.6806 10.7306 13.8083 10.8583C13.9361 10.9861 14 11.1444 14 11.3333C14 11.5222 13.9361 11.6806 13.8083 11.8083C13.6806 11.9361 13.5222 12 13.3333 12H2.66667ZM2.66667 8.66667C2.47778 8.66667 2.31944 8.60278 2.19167 8.475C2.06389 8.34722 2 8.18889 2 8C2 7.81111 2.06389 7.65278 2.19167 7.525C2.31944 7.39722 2.47778 7.33333 2.66667 7.33333H13.3333C13.5222 7.33333 13.6806 7.39722 13.8083 7.525C13.9361 7.65278 14 7.81111 14 8C14 8.18889 13.9361 8.34722 13.8083 8.475C13.6806 8.60278 13.5222 8.66667 13.3333 8.66667H2.66667ZM2.66667 5.33333C2.47778 5.33333 2.31944 5.26944 2.19167 5.14167C2.06389 5.01389 2 4.85556 2 4.66667C2 4.47778 2.06389 4.31944 2.19167 4.19167C2.31944 4.06389 2.47778 4 2.66667 4H13.3333C13.5222 4 13.6806 4.06389 13.8083 4.19167C13.9361 4.31944 14 4.47778 14 4.66667C14 4.85556 13.9361 5.01389 13.8083 5.14167C13.6806 5.26944 13.5222 5.33333 13.3333 5.33333H2.66667Z"
      fill={colors.black}
    />
  </svg>
);
