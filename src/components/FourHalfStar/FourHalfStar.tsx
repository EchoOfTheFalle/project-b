/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { StarHalfFilled9 } from "../../icons/StarHalfFilled9";

interface Props {
  className: any;
}

export const FourHalfStar = ({ className }: Props): JSX.Element => {
  return (
    <div className={`inline-flex items-start relative ${className}`}>
      <img className="relative w-[14.5px] h-[14.3px]" alt="Vector" src="/img/vector-24.svg" />
      <img className="relative w-[14.5px] h-[14.3px]" alt="Vector" src="/img/vector-24.svg" />
      <img className="relative w-[14.5px] h-[14.3px]" alt="Vector" src="/img/vector-24.svg" />
      <img className="relative w-[14.5px] h-[14.3px]" alt="Vector" src="/img/vector-24.svg" />
      <StarHalfFilled9 className="!relative !w-[20px] !h-[20px]" />
    </div>
  );
};
