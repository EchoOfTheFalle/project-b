/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Dropdown4 } from "../../icons/Dropdown4";

interface Props {
  className: any;
}

export const TopHeader = ({ className }: Props): JSX.Element => {
  return (
    <div className={`w-[1440px] h-[48px] bg-button ${className}`}>
      <div className="inline-flex items-start gap-[231px] relative top-[12px] left-[445px]">
        <div className="inline-flex items-center gap-[8px] relative flex-[0_0_auto]">
          <p className="relative w-[474px] h-[18px] font-title-14px-regular font-[number:var(--title-14px-regular-font-weight)] text-text text-[length:var(--title-14px-regular-font-size)] tracking-[var(--title-14px-regular-letter-spacing)] leading-[var(--title-14px-regular-line-height)] whitespace-nowrap [font-style:var(--title-14px-regular-font-style)]">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-text text-[14px] text-center tracking-[0] leading-[24px] underline whitespace-nowrap">
            ShopNow
          </div>
        </div>
        <div className="inline-flex items-center justify-center gap-[5px] relative flex-[0_0_auto]">
          <div className="relative w-fit font-title-14px-regular font-[number:var(--title-14px-regular-font-weight)] text-text text-[length:var(--title-14px-regular-font-size)] tracking-[var(--title-14px-regular-letter-spacing)] leading-[var(--title-14px-regular-line-height)] whitespace-nowrap [font-style:var(--title-14px-regular-font-style)]">
            English
          </div>
          <Dropdown4 className="!relative !w-[24px] !h-[24px]" color="white" />
        </div>
      </div>
    </div>
  );
};
