import React from 'react';

const Arrow = ({
    width = "24px",
    height = "24px",
    color = "#121212",
    ...props
  }: React.SVGProps<SVGSVGElement>) => {
  return <svg 
  width={width} 
  height={height} 
  viewBox="0 0 24 24" 
  fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M19.5 15L12 7.5L4.5 15" 
  stroke={color} 
  strokeLinecap="round"/>
  </svg>
  ;
};

export default Arrow;
