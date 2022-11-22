import React, { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const JobManipulateBtn: FC<Props> = ({children}) => {
  return (
    <button className="flex items-center gap-[11px] lg:gap-[15px] text-16/23 lg:text-18 tracking-m50 lg:tracking-m56">
      {children}
    </button>
  );
};

export default JobManipulateBtn;
