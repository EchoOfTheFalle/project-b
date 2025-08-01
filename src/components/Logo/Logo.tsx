/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  divClassName: any;
}

export const Logo = ({ divClassName }: Props): JSX.Element => {
  return (
    <div className="relative w-[118px] h-[24px]">
      <div
        className={`absolute -top-px left-0 font-heading-24px-bold font-[number:var(--heading-24px-bold-font-weight)] text-text-2 text-[length:var(--heading-24px-bold-font-size)] tracking-[var(--heading-24px-bold-letter-spacing)] leading-[var(--heading-24px-bold-line-height)] whitespace-nowrap [font-style:var(--heading-24px-bold-font-style)] ${divClassName}`}
      >
        Exclusive
      </div>
    </div>
  );
};
