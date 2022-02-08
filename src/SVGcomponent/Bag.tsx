import React from 'react';

const Bag = ({
    width = "24px",
    height = "24px",
    color = "#121212",
    ...props
  }: React.SVGProps<SVGSVGElement>) => {
  return <svg 
   width={width}
   height={height} 
   viewBox="0 0 18 20" 
   fill="none" 
   xmlns="http://www.w3.org/2000/svg">
  <path d="M13 9V5C13 3.93913 12.5786 2.92172 11.8284 2.17157C11.0783 1.42143 10.0609 1 9 1C7.93913 1 6.92172 1.42143 6.17157 2.17157C5.42143 2.92172 5 3.93913 5 5V9H13ZM2 7H16L17 19H1L2 7Z" 
  stroke={color} 
  strokeLinecap="round" 
  strokeLinejoin="round"/>
  </svg>
  ;
};

export default Bag;
