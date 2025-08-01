/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const UnderLine = ({ className }: Props): JSX.Element => {
  return (
    <div
      className={`relative w-[48px] h-px -top-px opacity-50 bg-[url(/static/img/line-1-7.svg)] bg-cover bg-[50%_50%] ${className}`}
    />
  );
};
