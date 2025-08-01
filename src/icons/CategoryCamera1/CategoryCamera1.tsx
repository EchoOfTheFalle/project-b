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

export const CategoryCamera1 = ({ color = "black", className }: Props): JSX.Element => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="56"
      viewBox="0 0 56 56"
      width="56"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_138_1667)">
        <path
          d="M11.6667 16.3333H14C15.2377 16.3333 16.4247 15.8417 17.2998 14.9665C18.175 14.0913 18.6667 12.9044 18.6667 11.6667C18.6667 11.0478 18.9125 10.4543 19.3501 10.0168C19.7877 9.57918 20.3812 9.33334 21 9.33334H35C35.6188 9.33334 36.2123 9.57918 36.6499 10.0168C37.0875 10.4543 37.3333 11.0478 37.3333 11.6667C37.3333 12.9044 37.825 14.0913 38.7002 14.9665C39.5753 15.8417 40.7623 16.3333 42 16.3333H44.3333C45.571 16.3333 46.758 16.825 47.6332 17.7002C48.5083 18.5753 49 19.7623 49 21V42C49 43.2377 48.5083 44.4247 47.6332 45.2998C46.758 46.175 45.571 46.6667 44.3333 46.6667H11.6667C10.429 46.6667 9.242 46.175 8.36683 45.2998C7.49167 44.4247 7 43.2377 7 42V21C7 19.7623 7.49167 18.5753 8.36683 17.7002C9.242 16.825 10.429 16.3333 11.6667 16.3333"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M28 37.3333C31.866 37.3333 35 34.1993 35 30.3333C35 26.4674 31.866 23.3333 28 23.3333C24.134 23.3333 21 26.4674 21 30.3333C21 34.1993 24.134 37.3333 28 37.3333Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_138_1667">
          <rect fill="white" height="56" width="56" />
        </clipPath>
      </defs>
    </svg>
  );
};

CategoryCamera1.propTypes = {
  color: PropTypes.string,
};
