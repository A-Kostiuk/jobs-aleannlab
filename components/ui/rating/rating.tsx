import React, { FC } from 'react';
import SharedSvgIcons from '../shared-svg-icons/shared-svg-icons';

interface Props {
  rating: number | undefined;
}

const Rating: FC<Props> = ({rating}) => {
  if (!rating) {
    return null
  }
  return (
    <ul className={'flex gap-px lg:w-[94px]'}>
      {new Array(rating).fill(rating).map((item, index) => (
        <li className={'flex justify-center items-center'} key={item + index}>
          <SharedSvgIcons width={10} height={10} id={'star-full'}
                          className={'w-[10px] h-[10px] lg:w-[18px] lg:h-[18px]'} />
        </li>))}
    </ul>

  );
};

export default Rating;
