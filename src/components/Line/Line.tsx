/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const Line = ({ className }: Props): JSX.Element => {
  return <div className={`w-[1440px] h-px bg-[url(/static/img/line-3-1.svg)] bg-[100%_100%] ${className}`} />;
};
