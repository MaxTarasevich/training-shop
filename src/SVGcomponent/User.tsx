import React from 'react';

const User = ({
    width = "24px",
    height = "24px",
    color = "#121212",
    ...props
  }: React.SVGProps<SVGSVGElement>) => {
  return <svg 
  width={width} 
  height={height} 
  viewBox="0 0 16 20" 
  fill="none" 
  xmlns="http://www.w3.org/2000/svg">
  <path d="M12 5C12 6.06087 11.5786 7.07828 10.8284 7.82843C10.0783 8.57857 9.06087 9 8 9C6.93913 9 5.92172 8.57857 5.17157 7.82843C4.42143 7.07828 4 6.06087 4 5C4 3.93913 4.42143 2.92172 5.17157 2.17157C5.92172 1.42143 6.93913 1 8 1C9.06087 1 10.0783 1.42143 10.8284 2.17157C11.5786 2.92172 12 3.93913 12 5V5Z" 
  stroke={color} 
  strokeLinecap="round" 
  strokeLinejoin="round"/>
  <path d="M8 12C6.14348 12 4.36301 12.7375 3.05025 14.0503C1.7375 15.363 1 17.1435 1 19H15C15 17.1435 14.2625 15.363 12.9497 14.0503C11.637 12.7375 9.85652 12 8 12V12Z" 
  stroke={color} 
  strokeLinecap="round" 
  strokeLinejoin="round"/>
  </svg>
  ;
};

export default User;
