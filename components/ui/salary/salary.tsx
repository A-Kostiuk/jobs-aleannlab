import React, { FC } from 'react';

interface Props {
  salary: string;
}

const Salary: FC<Props> = ({salary}) => {

  const formattedSalary = salary.replaceAll('k', ' 000').split('-');

  return (
    <span className="text-20 text-gulfBlue100 font-bold tracking-m62">
      &#8364;{formattedSalary[0]} - {formattedSalary[1]}
    </span>
  );
};

export default Salary;
