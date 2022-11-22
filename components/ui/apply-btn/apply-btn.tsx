import React, { FC } from 'react';

interface Props {
  className?: string;
}

const ApplyBtn: FC<Props> = ({className}) => {
  className = className || '';
  return (
    <button
      className={`${className} font-12 text-center uppercase font-semibold text-white bg-gulfBlue200 rounded-[8px] px-[30px] py-[18px]`}>
      Apply now
    </button>
  );
};

export default ApplyBtn;
