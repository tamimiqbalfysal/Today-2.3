import type { SVGProps } from 'react';

export function ApexCloudLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16 3.25L3.25 10.5L16 17.75L28.75 10.5L16 3.25Z"
        className="fill-primary"
      />
      <path
        d="M3.25 16.5L16 23.75L28.75 16.5L16 9.25L3.25 16.5Z"
        className="fill-accent"
        fillOpacity="0.75"
      />
       <path
        d="M3.25 22.5L16 29.75L28.75 22.5L16 15.25L3.25 22.5Z"
        className="fill-primary"
        fillOpacity="0.5"
      />
    </svg>
  );
}
