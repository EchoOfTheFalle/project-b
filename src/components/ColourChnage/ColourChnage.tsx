/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
  ellipseClassName: any;
  ellipseClassNameOverride: any;
}

export const ColourChnage = ({ className, ellipseClassName, ellipseClassNameOverride }: Props): JSX.Element => {
  return (
    <div className={`inline-flex items-start gap-[8px] relative ${className}`}>
      <div className="relative w-[20px] h-[20px]">
        <div className="relative h-[20px] rounded-[10px]">
          <div
            className={`absolute w-[12px] h-[12px] top-[4px] left-[4px] bg-hover-button rounded-[6px] ${ellipseClassName}`}
          />
          <div className="absolute w-[20px] h-[20px] top-0 left-0 rounded-[10px] border-2 border-solid border-text-2" />
        </div>
      </div>
      <div className={`relative w-[20px] h-[20px] bg-[#e07575] rounded-[10px] ${ellipseClassNameOverride}`} />
    </div>
  );
};
