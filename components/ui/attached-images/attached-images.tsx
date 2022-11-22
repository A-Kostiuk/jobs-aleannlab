import React, { FC } from 'react';
import Image from 'next/image';
import Subtitle from '../subtitle/subtitle';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

interface Props {
  pictures: string[];
}

const AttachedImages: FC<Props> = ({pictures}) => {
  return (
    <div>
      <Subtitle className={'mb-[20px]'}>Attached images</Subtitle>
      <Swiper
        spaceBetween={10} mousewheel={true} slidesPerView={'auto'} draggable={true} direction={'horizontal'}
        className={'my-swiper'}
      >
        {pictures.map((picture, index) => <SwiperSlide key={picture + index}>
          <Image src={picture}
                 alt={''}
                 layout="fill"
                 objectFit="cover" />
        </SwiperSlide>)}
      </Swiper>
    </div>
  );
};

export default AttachedImages;
