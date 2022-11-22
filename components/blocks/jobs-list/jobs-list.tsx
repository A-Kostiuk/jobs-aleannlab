import React, { FC } from 'react';
import { Job } from '../../../interfaces/job';
import JobItem from '../../ui/job-item/job-item';

interface Props {
  jobs: Job[];
}

const JobsList: FC<Props> = ({jobs}) => {
  return (
    <ul className="flex flex-col gap-[8px] mb-[25px] lg:mb-[50px]">
      {jobs.map(job => (<JobItem key={job.id} job={job} />))}
    </ul>
  );
};

export default JobsList;
