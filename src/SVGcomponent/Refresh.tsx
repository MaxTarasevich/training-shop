import React from 'react'

const Refresh = ({
    height = "24px",
    width = "24px",
    color = "#121212",
    ...props
  }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg 
        width={width} 
        height={height} 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.8">
        <path d="M4.582 8.99993H4V3.99993L4.582 8.99993ZM4.582 8.99993C5.24585 7.35806 6.43568 5.98284 7.96503 5.08979C9.49438 4.19674 11.2768 3.83634 13.033 4.06507C14.7891 4.2938 16.4198 5.09872 17.6694 6.3537C18.919 7.60869 19.7168 9.24279 19.938 10.9999M4.582 8.99993H9M19.419 14.9999H20V19.9999L19.419 14.9999ZM19.419 14.9999C18.7542 16.6408 17.564 18.015 16.0348 18.9072C14.5056 19.7995 12.7237 20.1595 10.9681 19.9308C9.21246 19.7022 7.5822 18.8978 6.33253 17.6437C5.08287 16.3895 4.28435 14.7564 4.062 12.9999M19.419 14.9999H15" 
        stroke={color} 
        strokeLinecap="round" 
        strokeLinejoin="round"/>
        </g>
    </svg>

  )
}

export default Refresh