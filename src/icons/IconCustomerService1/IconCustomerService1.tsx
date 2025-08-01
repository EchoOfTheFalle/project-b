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

export const IconCustomerService1 = ({ color = "black", className }: Props): JSX.Element => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="40"
      viewBox="0 0 40 40"
      width="40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_808_3983)">
        <path
          d="M13.3332 24.9998C13.3332 23.1589 11.8408 21.6665 9.99984 21.6665C8.15889 21.6665 6.6665 23.1589 6.6665 24.9998V28.3332C6.6665 30.1741 8.15889 31.6665 9.99984 31.6665C11.8408 31.6665 13.3332 30.1741 13.3332 28.3332V24.9998Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M33.3332 24.9998C33.3332 23.1589 31.8408 21.6665 29.9998 21.6665C28.1589 21.6665 26.6665 23.1589 26.6665 24.9998V28.3332C26.6665 30.1741 28.1589 31.6665 29.9998 31.6665C31.8408 31.6665 33.3332 30.1741 33.3332 28.3332V24.9998Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M6.6665 24.9998V19.9998C6.6665 16.4636 8.07126 13.0722 10.5717 10.5717C13.0722 8.07126 16.4636 6.6665 19.9998 6.6665C23.5361 6.6665 26.9274 8.07126 29.4279 10.5717C31.9284 13.0722 33.3332 16.4636 33.3332 19.9998V24.9998"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M30 31.6665C30 32.9926 28.9464 34.2644 27.0711 35.202C25.1957 36.1397 22.6522 36.6665 20 36.6665"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_808_3983">
          <rect fill="white" height="40" width="40" />
        </clipPath>
      </defs>
    </svg>
  );
};

IconCustomerService1.propTypes = {
  color: PropTypes.string,
};
