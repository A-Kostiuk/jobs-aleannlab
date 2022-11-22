import React, { FC } from 'react';
import dayjs from 'dayjs';

interface Props {
  date: string;
  className?: string;
}

const Posted: FC<Props> = ({date, className}) => {

  const timeAgo = (): string => {
    const postedDate = dayjs(date);
    const now = dayjs();
    if (now.diff(postedDate, 'years') > 0) {
      return `${now.diff(postedDate, 'years')} years`;
    } else if (now.diff(postedDate, 'months') > 1) {
      return `${now.diff(postedDate, 'months')} months`;
    }
    return `${now.diff(postedDate, 'days')} days`;
  };
  return (
    <p className={className || ''}>
      Posted {timeAgo()} ago
    </p>
  );
};

export default Posted;
