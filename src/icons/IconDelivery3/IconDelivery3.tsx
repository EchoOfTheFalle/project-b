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

export const IconDelivery3 = ({ color = "#FAFAFA", className }: Props): JSX.Element => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="40"
      viewBox="0 0 40 40"
      width="40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_120_1374)">
        <path
          d="M11.6667 31.6667C13.5076 31.6667 15 30.1743 15 28.3333C15 26.4924 13.5076 25 11.6667 25C9.82573 25 8.33334 26.4924 8.33334 28.3333C8.33334 30.1743 9.82573 31.6667 11.6667 31.6667Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M28.3333 31.6667C30.1743 31.6667 31.6667 30.1743 31.6667 28.3333C31.6667 26.4924 30.1743 25 28.3333 25C26.4924 25 25 26.4924 25 28.3333C25 30.1743 26.4924 31.6667 28.3333 31.6667Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M8.33331 28.3335H6.99998C5.89541 28.3335 4.99998 27.4381 4.99998 26.3335V21.6668M3.33331 8.3335H19.6666C20.7712 8.3335 21.6666 9.22893 21.6666 10.3335V28.3335M15 28.3335H25M31.6667 28.3335H33C34.1046 28.3335 35 27.4381 35 26.3335V18.3335M35 18.3335H21.6666M35 18.3335L30.5826 10.9712C30.2211 10.3688 29.5701 10.0002 28.8676 10.0002H21.6666"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M8 28H6.66667C5.5621 28 4.66667 27.1046 4.66667 26V21.3333M3 8H19.3333C20.4379 8 21.3333 8.89543 21.3333 10V28M15 28H24.6667M32 28H32.6667C33.7712 28 34.6667 27.1046 34.6667 26V18M34.6667 18H21.3333M34.6667 18L30.2493 10.6377C29.8878 10.0353 29.2368 9.66667 28.5343 9.66667H21.3333"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path d="M5 11.8182H11.6667" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path
          d="M1.81818 15.4545H8.48484"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path d="M5 19.0909H11.6667" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </g>
      <defs>
        <clipPath id="clip0_120_1374">
          <rect fill="white" height="40" width="40" />
        </clipPath>
      </defs>
    </svg>
  );
};

IconDelivery3.propTypes = {
  color: PropTypes.string,
};
