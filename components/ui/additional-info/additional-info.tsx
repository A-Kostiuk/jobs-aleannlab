import React, { FC } from 'react';
import AdditionalInfoItem from '../additional-info-item/additional-info-item';
import Subtitle from '../subtitle/subtitle';

interface Props {
  employmentType: string[];
  benefits: string[];
}

const AdditionalInfo: FC<Props> = ({employmentType, benefits}) => {
  return (
    <div>
      <Subtitle className={'mb-[15px]'}>
        Additional info
      </Subtitle>
      <div className="flex flex-col gap-[22px]">
        <AdditionalInfoItem title={'Employment type'} elements={employmentType} elementsColour={'sanMarino'} />
        <AdditionalInfoItem title={'Benefits'} elements={benefits} elementsColour={'highBall'} />
      </div>
    </div>
  );
};

export default AdditionalInfo;
