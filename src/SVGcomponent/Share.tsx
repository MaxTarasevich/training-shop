import React from 'react'

const Share = ({
    height = "20px",
    width = "20px",
    color = "#121212",
    ...props
  }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg 
        width={width} 
        height={height} 
        viewBox="0 0 20 20" 
        fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.9997 7.60003C16.7307 7.60005 17.4444 7.37755 18.0458 6.96211C18.6473 6.54667 19.108 5.95797 19.3668 5.27431C19.6255 4.59066 19.67 3.84443 19.4943 3.13487C19.3187 2.42531 18.9311 1.78604 18.3833 1.30207C17.8355 0.818097 17.1533 0.512363 16.4275 0.425522C15.7017 0.338681 14.9667 0.474848 14.3201 0.815915C13.6736 1.15698 13.1462 1.68679 12.8081 2.33488C12.47 2.98296 12.3372 3.71862 12.4273 4.44403L6.49932 7.40803C5.9908 6.91765 5.34924 6.58773 4.65455 6.45936C3.95987 6.33099 3.24277 6.40985 2.59258 6.68611C1.94239 6.96237 1.38786 7.42382 0.998049 8.01299C0.608241 8.60215 0.400391 9.29298 0.400391 9.99943C0.400391 10.7059 0.608241 11.3967 0.998049 11.9859C1.38786 12.575 1.94239 13.0365 2.59258 13.3127C3.24277 13.589 3.95987 13.6679 4.65455 13.5395C5.34924 13.4111 5.9908 13.0812 6.49932 12.5908L12.4273 15.5548C12.3223 16.3975 12.5186 17.2502 12.9815 17.9622C13.4443 18.6741 14.144 19.1996 14.9568 19.4456C15.7695 19.6916 16.6431 19.6424 17.4231 19.3066C18.2031 18.9708 18.8393 18.3701 19.2193 17.6107C19.5992 16.8512 19.6985 15.9819 19.4994 15.1563C19.3004 14.3307 18.816 13.6021 18.1317 13.0992C17.4475 12.5963 16.6074 12.3514 15.7601 12.4079C14.9128 12.4645 14.1127 12.8187 13.5013 13.408L7.57332 10.444C7.60964 10.1491 7.60964 9.85091 7.57332 9.55603L13.5013 6.59203C14.1469 7.21603 15.0277 7.60003 15.9997 7.60003Z" 
        fill={color}/>
    </svg>

  )
}

export default Share