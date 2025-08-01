/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

interface Props {
  color: string;
  className: any;
}

export const CategoryGamepad2 = ({ color = "white", className }: Props): JSX.Element => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="56"
      viewBox="0 0 56 56"
      width="56"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_138_1677)">
        <path
          d="M46.6666 14H9.33329C6.75596 14 4.66663 16.0893 4.66663 18.6667V37.3333C4.66663 39.9107 6.75596 42 9.33329 42H46.6666C49.244 42 51.3333 39.9107 51.3333 37.3333V18.6667C51.3333 16.0893 49.244 14 46.6666 14Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M14 28H23.3333M18.6667 23.3333V32.6666"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path d="M35 25.6667V25.6909" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        <path d="M42 30.3333V30.3574" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
      </g>
      <defs>
        <clipPath id="clip0_138_1677">
          <rect fill="white" height="56" width="56" />
        </clipPath>
      </defs>
    </svg>
  );
};

CategoryGamepad2.propTypes = {
  color: PropTypes.string,
};
