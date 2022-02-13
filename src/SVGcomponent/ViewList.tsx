import React from 'react'

const ViewList = ({
    width = "24px",
    height = "24px",
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
        <g opacity="0.6">
            <path d="M4 18H20M4 6H20H4ZM4 10H20H4ZM4 14H20H4Z" 
            stroke={color} 
            strokeLinecap="round" 
            strokeLinejoin="round"/>
        </g>
    </svg>

  )
}

export default ViewList