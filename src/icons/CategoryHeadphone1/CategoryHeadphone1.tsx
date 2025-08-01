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

export const CategoryHeadphone1 = ({ color = "black", className }: Props): JSX.Element => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="56"
      viewBox="0 0 56 56"
      width="56"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_808_1920)">
        <path
          d="M16.3335 30.3334H14.0002C11.4228 30.3334 9.3335 32.4227 9.3335 35V42C9.3335 44.5774 11.4228 46.6667 14.0002 46.6667H16.3335C18.9108 46.6667 21.0002 44.5774 21.0002 42V35C21.0002 32.4227 18.9108 30.3334 16.3335 30.3334Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M42 30.3334H39.6667C37.0893 30.3334 35 32.4227 35 35V42C35 44.5774 37.0893 46.6667 39.6667 46.6667H42C44.5773 46.6667 46.6667 44.5774 46.6667 42V35C46.6667 32.4227 44.5773 30.3334 42 30.3334Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M9.3335 35V28C9.3335 23.0493 11.3002 18.3014 14.8008 14.8007C18.3015 11.3 23.0495 9.33337 28.0002 9.33337C32.9509 9.33337 37.6988 11.3 41.1995 14.8007C44.7002 18.3014 46.6668 23.0493 46.6668 28V35"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_808_1920">
          <rect fill="white" height="56" width="56" />
        </clipPath>
      </defs>
    </svg>
  );
};

CategoryHeadphone1.propTypes = {
  color: PropTypes.string,
};
