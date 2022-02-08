import React from 'react';

const Facebook = ({
    height = "24px",
    width = "24px",
    color = "#121212",
    ...props
  }: React.SVGProps<SVGSVGElement>) => {
  return <svg 
  width={width} 
  height={height}
  viewBox="0 0 24 24" 
  fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M22.3996 12.0633C22.3996 6.28314 17.7448 1.59998 11.9996 1.59998C6.25445 1.59998 1.59961 6.28314 1.59961 12.0633C1.59961 17.2856 5.40274 21.6144 10.3746 22.4V15.0879H7.73267V12.0633H10.3746V9.75796C10.3746 7.13581 11.9262 5.68741 14.3027 5.68741C15.4408 5.68741 16.631 5.89161 16.631 5.89161V8.46524H15.3192C14.0276 8.46524 13.6246 9.27193 13.6246 10.0993V12.0633H16.5089L16.0476 15.0879H13.6246V22.4C18.5965 21.6144 22.3996 17.2856 22.3996 12.0633Z" 
  fill={color}/>
  </svg>
  ;
};

export default Facebook;
