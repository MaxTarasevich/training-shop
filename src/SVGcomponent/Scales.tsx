import React from 'react'

const Scales = ({
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
        <path d="M12 21H15M3 6L6 7L3 6ZM6 7L3 16C3.8657 16.649 4.91852 16.9999 6.0005 16.9999C7.08248 16.9999 8.1353 16.649 9.001 16L6 7ZM6 7L9 16L6 7ZM6 7L12 5L6 7ZM18 7L21 6L18 7ZM18 7L15 16C15.8657 16.649 16.9185 16.9999 18.0005 16.9999C19.0825 16.9999 20.1353 16.649 21.001 16L18 7ZM18 7L21 16L18 7ZM18 7L12 5L18 7ZM12 3V5V3ZM12 21V5V21ZM12 21H9H12Z" 
        stroke={color} 
        strokeLinecap="round" 
        strokeLinejoin="round"/>
</svg>

  )
}

export default Scales