import React from 'react'

const Triangle = ({
    height = "5px",
    width = "8px",
    color = "#121212",
    ...props
  }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg 
        width={width} 
        height={height} 
        viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.561 4.262V0.643L7.502 2.458L0.561 4.262Z" 
        fill={color}/>
    </svg>

  )
}

export default Triangle