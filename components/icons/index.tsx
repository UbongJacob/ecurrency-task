import { SVGProps } from "react";

export function RiArrowDropRightFill(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill="currentColor" d="m14 12l-4 4V8z"></path>
    </svg>
  );
}

export function StarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 12 11"
      {...props}
    >
      <path
        fill="currentColor"
        d="M6 0l1.347 4.146h4.36L8.18 6.708l1.347 4.146L6 8.292l-3.527 2.562L3.82 6.708.294 4.146h4.359L6 0z"
      ></path>
    </svg>
  );
}

export function CloseLineIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <g clipPath="url(#clip0_18808_12861)">
        <path
          fill="currentColor"
          d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636l4.95 4.95z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_18808_12861">
          <path fill="#fff" d="M0 0H24V24H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export function MenuIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
      {...props}
    >
      <g clipPath="url(#clip0_17964_13709)">
        <path
          fill="#111213"
          d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_17964_13709">
          <path fill="#fff" d="M0 0H24V24H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}
