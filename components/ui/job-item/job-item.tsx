import React, { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import { Job } from '../../../interfaces/job';
import SharedSvgIcons from '../shared-svg-icons/shared-svg-icons';
import Link from 'next/link';
import Posted from '../posted/posted';
import Rating from '../rating/rating';

interface Props {
  job: Job;
}

const JobItem: FC<Props> = ({job}) => {
  const [location, setLocation] = useState<string>('');
  const {pictures, rating, createdAt, id, title, name, locationDetails} = job;
  useEffect(() => {
    if (!!locationDetails?.name) {
      setLocation(locationDetails?.name);
    } else if (!!locationDetails?.city || !!locationDetails?.country) {
      setLocation(`${locationDetails?.city}, ${locationDetails?.country}`);
    } else setLocation('Loading...');
  }, [locationDetails]);

  return (
    <li className="flex bg-solitude100 lg:bg-white rounded-base px-[16px] py-[13px] lg:py-[24px]
      sm:min-h-[206px] lg:min-h-[164px]">
      <div
        className="shrink-0 rounded-1/2 relative overflow-hidden bg-imgBg w-[66px] h-[66px] lg:w-[86px] lg:h-[86px] mr-[19px] lg:mr-[26px] mt-[33px] lg:mt-0">
        <Image src={pictures[0]} layout="fill" alt={''} />
      </div>
      <div className="flex flex-col lg:flex-row grow lg:gap-[32px]">
        <div className="flex justify-between content-center lg:gap-[32px] lg:order-last mb-[14px] lg:mb-0">
          <Rating rating={rating} />
          <div className="lg:flex lg:flex-col lg:justify-between lg:gap-[10px] lg:w-[138px]">
            <button className="hidden lg:block lg:self-end lg:px-[8px] lg:py-[6px]">
              <SharedSvgIcons width={16} height={20} id={'saveToList'} />
            </button>
            <Posted date={createdAt}
                    className={'text-manatee font-light text-14 lg:font-normal lg:text-16 tracking-p20 lg:tracking-p23'} />
          </div>
        </div>
        <div className="grow ">
          <h2
            className="text-18 font-normal lg:font-bold lg:text-20 text-gulfBlue100 mb-[5px] lg:mb-[8px] tracking-m56 lg:tracking-m62 max-h-[48px] lg:max-h-[50px] overflow-hidden">
            <Link
              href={`job-details/${id}`}>{title}</Link></h2>
          <p className="text-manatee mb-[7px] lg:mb-[8px] tracking-p23">
            Department name • {name}</p>
          <p className={'flex items-center gap-[8px] text-manatee tracking-p23'}>
            <>
              <SharedSvgIcons width={13} height={28} id={'location'} />
              {location}
            </>
          </p>
        </div>
      </div>
    </li>
  );
};

export default JobItem;
