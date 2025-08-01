/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { IconsArrowLeft3 } from "../../icons/IconsArrowLeft3";

export const FillWithLeftArrow = (): JSX.Element => {
  return (
    <div className="relative w-[46px] h-[46px] bg-secondary rounded-[23px]">
      <IconsArrowLeft3 className="!absolute !w-[24px] !h-[24px] !top-[11px] !left-[11px]" />
    </div>
  );
};
