/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { IconsArrowUp2 } from "../../icons/IconsArrowUp2";

interface Props {
  className: any;
}

export const FillWithUpArrow = ({ className }: Props): JSX.Element => {
  return (
    <div className={`relative w-[46px] h-[46px] bg-secondary rounded-[23px] -rotate-90 ${className}`}>
      <IconsArrowUp2 className="!absolute !w-[24px] !h-[24px] !top-[11px] !left-[11px] !rotate-90" />
    </div>
  );
};
