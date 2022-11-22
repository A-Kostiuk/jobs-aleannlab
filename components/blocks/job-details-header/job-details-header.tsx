import React, { FC } from 'react';
import JobManipulateBtn from '../../ui/job-manipulate-btn/job-manipulate-btn';
import SharedSvgIcons from '../../ui/shared-svg-icons/shared-svg-icons';


const JobDetailsHeader: FC = () => {
  return (
    <header className="lg:flex lg:justify-between gap-[10px] relative mb-[32px] lg:mb-[39px]
      lg:after:content-[''] lg:after:absolute lg:after:h-[1px] lg:after:w-full lg:after:bg-gulfBlue100 lg:after:opacity-[.13] lg:after:bottom-[-7px]">
      <h1 className="m-0 mb-[24px] lg:mb-0 text-28 font-bold tracking-p41
          after:content-[''] after:block after:h-[1px] after:mt-[12px] after:bg-gulfBlue100 after:opacity-[.13] lg:after:hidden">Job
        Details</h1>
      <div className="flex gap-[36px] lg:gap-[24px] wrap">
        <JobManipulateBtn>
          <SharedSvgIcons width={21} height={20} id={'starContour'} className="lg:hidden" />
          <SharedSvgIcons width={16} height={20} id={'saveToList'} className="hidden lg:block" />
          Save to my list
        </JobManipulateBtn>
        <JobManipulateBtn>
          <SharedSvgIcons width={18} height={20} id={'share'} />
          Share
        </JobManipulateBtn>
      </div>
    </header>
  );
};

export default JobDetailsHeader;
