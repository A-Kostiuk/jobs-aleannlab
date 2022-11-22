import React, { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
}

const Subtitle: FC<Props> = ({children, className}) => {
  className = className || '';
  return (
    <h3
      className={`text-28 font-bold tracking-p41 text-gulfBlue100 after:content-[''] after:block after:h-px after:w-full after:bg-gulfBlue100 after:opacity-[.13] after:mt-[10px] ${className}`}>
      {children}
    </h3>
  );
};

export default Subtitle;
