/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { HeartSmall17 } from "../../icons/HeartSmall17";

export const FillHeart = (): JSX.Element => {
  return (
    <div className="relative w-[34px] h-[34px] bg-primary rounded-[17px]">
      <HeartSmall17 className="!absolute !w-[24px] !h-[24px] !top-[5px] !left-[5px]" />
    </div>
  );
};
