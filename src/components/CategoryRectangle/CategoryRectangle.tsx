/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const CategoryRectangle = ({ className }: Props): JSX.Element => {
  return <div className={`w-[20px] h-[40px] bg-secondary-2 rounded-[4px] ${className}`} />;
};
