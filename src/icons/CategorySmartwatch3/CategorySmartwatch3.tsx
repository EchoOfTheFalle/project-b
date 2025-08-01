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

export const CategorySmartwatch3 = ({ color = "black", className }: Props): JSX.Element => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="56"
      viewBox="0 0 56 56"
      width="56"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_262_5178)">
        <path
          d="M35 14H21C17.134 14 14 17.134 14 21V35C14 38.866 17.134 42 21 42H35C38.866 42 42 38.866 42 35V21C42 17.134 38.866 14 35 14Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path d="M21 42V49H35V42" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d="M21 14V7H35V14" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <line stroke={color} strokeLinecap="round" strokeWidth="2" x1="24" x2="24" y1="23" y2="34" />
        <line stroke={color} strokeLinecap="round" strokeWidth="2" x1="28" x2="28" y1="28" y2="34" />
        <line stroke={color} strokeLinecap="round" strokeWidth="2" x1="32" x2="32" y1="26" y2="34" />
      </g>
      <defs>
        <clipPath id="clip0_262_5178">
          <rect fill="white" height="56" width="56" />
        </clipPath>
      </defs>
    </svg>
  );
};

CategorySmartwatch3.propTypes = {
  color: PropTypes.string,
};
