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

export const CategoryComputer1 = ({ color = "black", className }: Props): JSX.Element => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="56"
      viewBox="0 0 56 56"
      width="56"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_262_5175)">
        <path
          d="M46.6667 9.33334H9.33333C8.04467 9.33334 7 10.378 7 11.6667V35C7 36.2887 8.04467 37.3333 9.33333 37.3333H46.6667C47.9553 37.3333 49 36.2887 49 35V11.6667C49 10.378 47.9553 9.33334 46.6667 9.33334Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M16.3334 46.6667H39.6667"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path d="M21 37.3333V46.6667" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d="M35 37.3333V46.6667" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d="M8 32H48" stroke={color} strokeLinecap="round" strokeWidth="2" />
      </g>
      <defs>
        <clipPath id="clip0_262_5175">
          <rect fill="white" height="56" width="56" />
        </clipPath>
      </defs>
    </svg>
  );
};

CategoryComputer1.propTypes = {
  color: PropTypes.string,
};
