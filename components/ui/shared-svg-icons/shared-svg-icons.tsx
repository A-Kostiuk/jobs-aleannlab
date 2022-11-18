import React, { FC } from 'react';

interface Props {
  width: number;
  height: number;
  id: string;
}

const SharedSvgIcon: FC<Props> = ({id, width, height}) => {
  switch (id) {
    case 'star':
      return '';
    default:
      return null;
  }
};

export default SharedSvgIcon;
