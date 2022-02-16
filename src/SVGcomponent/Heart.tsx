import React from 'react'

const Heart = ({
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
        <path d="M4.31804 6.31804C3.90017 6.7359 3.5687 7.23198 3.34255 7.77795C3.1164 8.32392 3 8.90909 3 9.50004C3 10.091 3.1164 10.6762 3.34255 11.2221C3.5687 11.7681 3.90017 12.2642 4.31804 12.682L12 20.364L19.682 12.682C20.526 11.8381 21.0001 10.6935 21.0001 9.50004C21.0001 8.30656 20.526 7.16196 19.682 6.31804C18.8381 5.47412 17.6935 5.00001 16.5 5.00001C15.3066 5.00001 14.162 5.47412 13.318 6.31804L12 7.63604L10.682 6.31804C10.2642 5.90017 9.7681 5.5687 9.22213 5.34255C8.67616 5.1164 8.09099 5 7.50004 5C6.90909 5 6.32392 5.1164 5.77795 5.34255C5.23198 5.5687 4.7359 5.90017 4.31804 6.31804V6.31804Z" 
        stroke={color} 
        strokeLinecap="round" 
        strokeLinejoin="round"/>
</svg>

  )
}

export default Heart