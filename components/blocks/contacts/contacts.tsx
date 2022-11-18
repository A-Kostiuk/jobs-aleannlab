import React, { FC } from 'react';
import { Location } from '../../../interfaces/job';

interface Props {
  name: string;
  address: string;
  email: string;
  phone: string;
  location?: Location;
}

const LocationInfo: FC<Props> = ({name, address, phone, email}) => {
  return (
    <div>
      <div className="px-[63px] pt-[31px] pb-[27px]">
        <p>Department name.</p>
        <p>{name}</p>
        <p>{address}</p>
        <p>{phone}</p>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default LocationInfo;
