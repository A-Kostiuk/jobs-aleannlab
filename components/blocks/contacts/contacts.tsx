import React, { FC } from 'react';
import { Location } from '../../../interfaces/job';
import Subtitle from '../../ui/subtitle/subtitle';
import SharedSvgIcons from '../../ui/shared-svg-icons/shared-svg-icons';

interface Props {
  name: string;
  address: string;
  email: string;
  phone: string;
  location: Location;
}

import dynamic from 'next/dynamic';

const DynamicMap = dynamic(() => import('../../ui/map/map'), {
  ssr: false,
});

const Contacts: FC<Props> = ({name, address, phone, email, location}) => {
  const nameText = 'text-16/19 relative z-10 font-bold text-solitude300 tracking-p23 mb-[17px]';
  const contactInformation = 'text-16/23 text-solitude300 relative z-10 tracking-m50 text-white070 lg:text-solitude300';
  return (
    <div>
      <Subtitle className={'xl:hidden mb-[21px]'}>
        Contacts
      </Subtitle>
      <div className="bg-bunting rounded-base overflow-hidden">
        <address
          className="relative overflow-hidden px-[63px] pt-[31px] pb-[27px] after:content-[''] after:absolute after:w-[273px] after:h-[273px] after:bg-midnightExpress after:top-[12px] after:left-[-77px] after:rounded-1/2 after:z-0 not-italic">
          <p className={nameText}>Department name. <br />
            {name}
          </p>
          <p className="text-16/23 text-solitude300 relative z-10 tracking-m50 mb-[6px] flex gap-[8px] items-center">
            <SharedSvgIcons width={13} height={28} id={'mapMarker'} className={'shrink-0 self-start'} />
            {address}</p>
          <p className={contactInformation}>
            <a type="tel" href={`tel:${phone}`}>{phone}</a>
          </p>
          <p className={contactInformation}>
            <a href={`mailto:${email}`}>{email}</a>
          </p>
        </address>
        <div className="h-[218px]">
          <DynamicMap location={location} name={name} />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
