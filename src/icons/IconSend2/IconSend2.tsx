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

export const IconSend2 = ({ color = "black", className }: Props): JSX.Element => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.912 12H4L2.023 4.13499C2.01034 4.08928 2.00263 4.04234 2 3.99499C1.978 3.27399 2.772 2.77399 3.46 3.10399L22 12L3.46 20.896C2.78 21.223 1.996 20.737 2 20.029C2.00203 19.9657 2.01314 19.9031 2.033 19.843L3.5 15"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};

IconSend2.propTypes = {
  color: PropTypes.string,
};
