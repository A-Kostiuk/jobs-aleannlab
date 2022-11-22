import React, { FC } from 'react';

interface Props {
  width: number;
  height: number;
  id: string;
  className?: string;
  fill?: string;
}

const SharedSvgIcons: FC<Props> = ({id, width, height, className, fill}) => {
  className = className || '';
  switch (id) {
    case 'star-full':
      return <svg width={width} height={height} className={className} xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 10 10">
        <path fill="#384564" fillRule="evenodd"
              d="M3.526 2.55C3.91 1.629 4.642 0 5.009 0c.532 0 1.697 3.16 1.697 3.16s1.08.099 1.952.2c.463.054 1.29.136 1.341.406.011.058-.055.297-.176.463-.512.705-1.841 2.217-1.841 2.217s.073.722.138 1.512c.041.511.154 1.547.113 1.732-.044.204-.124.26-.207.291-.216.084-.719-.24-1.306-.537-.8-.405-1.698-.838-1.698-.838s-.593.328-1.296.647c-.75.341-1.51.903-1.828.706-.198-.124-.05-1.09.025-1.95.071-.81.133-1.55.133-1.55s-.44-.546-.953-1.13C.55 4.7-.126 4.02.02 3.77c.11-.19.614-.29 1.46-.4.899-.119 1.796-.202 1.796-.202s.098-.253.25-.617Z"
              clipRule="evenodd" />
      </svg>;
    case 'location':
      return <svg width={width} height={height} className={className} xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 13 18">
        <path fill="#878D9D" fillRule="evenodd"
              d="M6.5 18S13 12 13 7s-3-7-6.5-7C2.9 0 0 2 0 7s6.5 11 6.5 11Zm0-8a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
              clipRule="evenodd" />
      </svg>;
    case 'saveToList':
      return <svg width={width} height={height} className={className} xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 19 23">
        <path stroke="#70778B" strokeWidth="2"
              d="M1.5 4c0-1.47 1.2-2.67 2.67-2.67h10.66c1.48 0 2.67 1.2 2.67 2.67v16c0 1.16-1.4 1.76-2.24.97l-4.85-4.53a1.33 1.33 0 0 0-1.82 0l-4.85 4.53c-.85.8-2.24.19-2.24-.98V4Z"
              clipRule="evenodd" />
      </svg>;
    case 'starContour':
      return <svg width={width} height={height} className={className} xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 21 20">
        <g opacity=".8">
          <mask id="a" fill="#fff">
            <path fillRule="evenodd"
                  d="M7.32 5c.8-1.8 2.32-5 3.08-5 1.1 0 3.53 6.2 3.53 6.2s2.24.2 4.05.4c.96.1 2.68.26 2.79.79.02.11-.12.58-.37.9-1.06 1.39-3.82 4.35-3.82 4.35s.15 1.42.28 2.97c.1 1 .32 3.03.24 3.4-.1.4-.26.5-.43.57-.45.16-1.5-.47-2.71-1.05-1.66-.8-3.53-1.65-3.53-1.65s-1.23.64-2.69 1.27c-1.56.67-3.14 1.77-3.8 1.38-.4-.24-.1-2.13.05-3.82l.28-3.04s-.91-1.07-1.98-2.22C1.14 9.22-.26 7.88.04 7.4c.23-.37 1.28-.57 3.03-.78 1.87-.23 3.73-.4 3.73-.4s.2-.5.52-1.2Z"
                  clipRule="evenodd" />
          </mask>
          <path stroke="#3A4562" strokeWidth="4"
                d="M7.32 5c.8-1.8 2.32-5 3.08-5 1.1 0 3.53 6.2 3.53 6.2s2.24.2 4.05.4c.96.1 2.68.26 2.79.79.02.11-.12.58-.37.9-1.06 1.39-3.82 4.35-3.82 4.35s.15 1.42.28 2.97c.1 1 .32 3.03.24 3.4-.1.4-.26.5-.43.57-.45.16-1.5-.47-2.71-1.05-1.66-.8-3.53-1.65-3.53-1.65s-1.23.64-2.69 1.27c-1.56.67-3.14 1.77-3.8 1.38-.4-.24-.1-2.13.05-3.82l.28-3.04s-.91-1.07-1.98-2.22C1.14 9.22-.26 7.88.04 7.4c.23-.37 1.28-.57 3.03-.78 1.87-.23 3.73-.4 3.73-.4s.2-.5.52-1.2Z"
                clipRule="evenodd" mask="url(#a)" />
        </g>
      </svg>;
    case 'share':
      return <svg width={width} height={height} className={className} xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 18 20">
        <path fill="#38415D" fillRule="evenodd"
              d="m13.04 14.91-7.13-4.17c.05-.23.09-.46.09-.7 0-.24-.04-.47-.09-.7l7.05-4.13A2.98 2.98 0 0 0 18 3.01a3 3 0 1 0-5.91.7L5.04 7.84A2.98 2.98 0 0 0 0 10.04a3 3 0 0 0 5.04 2.2l7.12 4.18A2.93 2.93 0 0 0 15 20a2.93 2.93 0 0 0 0-5.86c-.76 0-1.44.3-1.96.77Z"
              clipRule="evenodd" opacity=".8" />
      </svg>;
    case 'arrow':
      return <svg width={width} height={height} className={className} xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 10 18">
        <path fill="#384564" fillRule="evenodd"
              d="M9.66.4c.47.52.45 1.33-.04 1.82L3.37 8.7a.43.43 0 0 0 0 .6l6.25 6.48c.5.49.5 1.3.04 1.82-.47.52-1.24.54-1.73.04L.39 9.97a1.39 1.39 0 0 1-.04-1.89L7.93.36c.49-.5 1.26-.47 1.73.04Z"
              clipRule="evenodd" />
      </svg>;
    case 'mapMarker':
      return <svg width={width} height={height} className={className} xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 13 19">
        <path fill="#fff" fillOpacity=".67" fillRule="evenodd"
              d="M13 6.35C13 3.12 10.09.5 6.5.5S0 3.12 0 6.35c0 2.06 1.98 5.85 5.94 11.37l.56.78.84-1.16.28-.4C11.2 11.84 13 8.31 13 6.35Zm-9.75.41A3.2 3.2 0 0 1 6.5 3.63a3.2 3.2 0 0 1 3.25 3.13A3.2 3.2 0 0 1 6.5 9.9a3.2 3.2 0 0 1-3.25-3.13Z"
              clipRule="evenodd" />
      </svg>;
    case 'paginationArrow':
      return <svg width={width} height={height} className={className} xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 12 18">
        <path fill="#7D859C" className={fill} fillRule="evenodd"
              d="M10.5 1.5c-.8-.8-2.2-.8-3 0l-6 6c-.8.8-.8 2.2 0 3l6 6a2.1 2.1 0 0 0 3-3L6 9l4.5-4.5c.8-.8.8-2.2 0-3Z"
              clipRule="evenodd" />
      </svg>;

    default:
      return null;
  }
};

export default SharedSvgIcons;
