import React, { FC } from 'react';

interface Props {
  description: string;
  responsibilities?: string;
  compensationBenefits?: string[];
}

const Description: FC<Props> = ({description, responsibilities, compensationBenefits}) => {
  const titleClass = 'font-pNova text-20 font-bold tracking-m62 text-gulfBlue100';
  const descClass = 'lg:font-roboto text-18 tracking-m56 text-gulfBlue082 font-normal lg:text-gulfBlue100';
  return (
    <>
      <div className="mb-[43px] lg:mb-[35px]">
        <h3 className="sr-only">Description</h3>
        <p className={descClass}>{description}</p>
      </div>
      {responsibilities && <div className="mb-[43px] lg:mb-[35px]">
        <h3 className={`${titleClass} mb-[6px] lg:mb-[12px]`}>Responsibilities</h3>
        <p className={descClass}>{responsibilities}</p>
      </div>}
      {compensationBenefits && <div className="mb-[20px] lg:mb-[35px]">
        <h3 className={`${titleClass} mb-[25px] lg:mb-[10px]`}>Compensation & Benefits:</h3>
        <p className={descClass}>Our physicians enjoy a wide range of benefits, including:</p>
        <ul className={descClass}>
          {compensationBenefits.map(benefit => <li key={benefit}
                                                   className="relative pl-[32px] lg:pl-0 before:content-[''] before:absolute before:w-[9px] before:h-[9px] before:bg-gulfBlue063 before:left-0 before:top-[7.5px] lg:before:left-[-19px]">{benefit}</li>)}
        </ul>
      </div>}
    </>
  );
};

export default Description;
