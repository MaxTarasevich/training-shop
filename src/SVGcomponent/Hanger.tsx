import React from 'react'

const Hanger = ({
    height = "20px",
    width = "14px",
    color = "#121212",
    ...props
  }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg 
        width={width} 
        height={height} 
        viewBox="0 0 20 14" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg">
        <path d="M18.95 10.3024L10.5859 5.74026V5.40082C10.5859 5.01373 10.8206 4.65367 11.1984 4.46115C12.0496 4.02747 12.5556 3.19215 12.5189 2.28119C12.4692 1.0498 11.4056 0.0485388 10.0977 0.00180694C9.40555 -0.0231952 8.75012 0.211972 8.25207 0.663222C7.75371 1.1148 7.47926 1.72206 7.47926 2.37307C7.47926 2.67766 7.7416 2.92459 8.0652 2.92459C8.38879 2.92459 8.65113 2.67766 8.65113 2.37307C8.65113 2.02459 8.79805 1.6996 9.06481 1.45785C9.33125 1.21643 9.68184 1.09043 10.0532 1.10403C10.7526 1.12903 11.3212 1.66448 11.3479 2.32303C11.3675 2.8112 11.0965 3.25877 10.6406 3.49111C9.88406 3.87658 9.41406 4.60833 9.41406 5.40082V5.74026L1.05004 10.3024C0.402344 10.6558 0 11.313 0 12.0177C0 13.1108 0.944609 14 2.1057 14H17.8943C19.0554 14 20 13.1107 20 12.0177C20 11.313 19.5977 10.6558 18.95 10.3024ZM17.8943 12.897H2.1057C1.59078 12.897 1.17188 12.5025 1.17188 12.0177C1.17188 11.7051 1.35031 11.4135 1.63762 11.2569L10 6.69557L18.3624 11.2569C18.6496 11.4136 18.8281 11.7051 18.8281 12.0177C18.8281 12.5025 18.4092 12.897 17.8943 12.897Z" 
        fill={color}/>
    </svg>

  )
}

export default Hanger