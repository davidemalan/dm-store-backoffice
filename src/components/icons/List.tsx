import { FC, ReactElement } from 'react';

import { colors } from '../../consts';

export const List: FC<{ title: string }> = ({ title }): ReactElement => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    aria-labelledby="List-title"
  >
    <title id="List-title">{title}</title>
    <path
      d="M3 17V7C3 6.45 3.19583 5.97917 3.5875 5.5875C3.97917 5.19583 4.45 5 5 5H19C19.55 5 20.0208 5.19583 20.4125 5.5875C20.8042 5.97917 21 6.45 21 7V17C21 17.55 20.8042 18.0208 20.4125 18.4125C20.0208 18.8042 19.55 19 19 19H5C4.45 19 3.97917 18.8042 3.5875 18.4125C3.19583 18.0208 3 17.55 3 17ZM5 9H7V7H5V9ZM9 9H19V7H9V9ZM9 13H19V11H9V13ZM9 17H19V15H9V17ZM5 17H7V15H5V17ZM5 13H7V11H5V13Z"
      fill={colors.black}
    />
  </svg>
);
