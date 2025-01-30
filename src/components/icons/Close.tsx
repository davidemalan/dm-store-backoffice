import { FC, ReactElement } from 'react';

export const Close: FC<{ color?: string }> = ({ color = '#000' }): ReactElement => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.7657 4.23431C20.0781 4.54673 20.0781 5.05327 19.7657 5.36569L5.36569 19.7657C5.05327 20.0781 4.54673 20.0781 4.23431 19.7657C3.9219 19.4533 3.9219 18.9467 4.23431 18.6343L18.6343 4.23431C18.9467 3.9219 19.4533 3.9219 19.7657 4.23431Z"
      fill={color}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.23431 4.23431C4.54673 3.9219 5.05327 3.9219 5.36569 4.23431L19.7657 18.6343C20.0781 18.9467 20.0781 19.4533 19.7657 19.7657C19.4533 20.0781 18.9467 20.0781 18.6343 19.7657L4.23431 5.36569C3.9219 5.05327 3.9219 4.54673 4.23431 4.23431Z"
      fill={color}
    />
  </svg>
);
