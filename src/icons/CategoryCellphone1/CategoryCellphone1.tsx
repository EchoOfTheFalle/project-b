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

export const CategoryCellphone1 = ({ color = "black", className }: Props): JSX.Element => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="56"
      viewBox="0 0 56 56"
      width="56"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_138_1627)">
        <path
          d="M38.9375 6.125H17.0625C15.5523 6.125 14.3281 7.34922 14.3281 8.85938V47.1406C14.3281 48.6508 15.5523 49.875 17.0625 49.875H38.9375C40.4477 49.875 41.6719 48.6508 41.6719 47.1406V8.85938C41.6719 7.34922 40.4477 6.125 38.9375 6.125Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path d="M25.6666 7H31.1354" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        <path d="M28 44.0052V44.0305" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
        <line stroke={color} strokeWidth="2" x1="15.1666" x2="40.8333" y1="39.8333" y2="39.8333" />
      </g>
      <defs>
        <clipPath id="clip0_138_1627">
          <rect fill="white" height="56" width="56" />
        </clipPath>
      </defs>
    </svg>
  );
};

CategoryCellphone1.propTypes = {
  color: PropTypes.string,
};
