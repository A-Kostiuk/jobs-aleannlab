import React, { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const HomePageWrapper: FC<Props> = ({children}) => {
  return (
    <div className="min-h-screen bg-solitude200">
      {children}
    </div>
  );
};

export default HomePageWrapper;
