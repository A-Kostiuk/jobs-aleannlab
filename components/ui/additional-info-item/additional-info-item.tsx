import React, { FC } from 'react';

type Color = 'sanMarino' | 'highBall'

interface Props {
  title: string;
  elements: string[];
  elementsColour: Color;
}

const AdditionalInfoItem: FC<Props> = ({title, elements, elementsColour}) => {
  const colorProperties = elementsColour === 'sanMarino' ?
    'text-sanMarino bg-echoBlue030 border border-solid border-sanMarino030'
    :
    'text-highBall bg-tangerineYellow015 border border-solid border-tangerineYellow';
  return (
    <div>
      <h4 className="text-18 text-gulfBlue082 tracking-m56 lg:text-gulfBlue100 mb-[10px]">{title}</h4>
      <ul className="flex flex-wrap gap-[7px] lg:gap-[10px] justify-items-center">
        {elements.map(element => <li key={element}
                                     className={`py-[17px] px-[10px] min-w-[32%] rounded-[8px] text-center font-16/16 font-bold tracking-m45 ${colorProperties}`}>{element}</li>)}
      </ul>
    </div>
  );
};

export default AdditionalInfoItem;
