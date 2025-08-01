/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const NewButton = ({ className }: Props): JSX.Element => {
  return (
    <div
      className={`inline-flex items-center justify-center gap-[10px] px-[12px] py-[4px] relative bg-button-1 rounded-[4px] ${className}`}
    >
      <div className="relative w-fit mt-[-1.00px] font-title-12px-regular font-[number:var(--title-12px-regular-font-weight)] text-text text-[length:var(--title-12px-regular-font-size)] tracking-[var(--title-12px-regular-letter-spacing)] leading-[var(--title-12px-regular-line-height)] whitespace-nowrap [font-style:var(--title-12px-regular-font-style)]">
        NEW
      </div>
    </div>
  );
};
