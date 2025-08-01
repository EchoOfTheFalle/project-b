/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { IconDelivery2 } from "../../icons/IconDelivery2";
import { Services } from "../Services";

interface Props {
  className: any;
}

export const ServicesFast = ({ className }: Props): JSX.Element => {
  return (
    <div className={`inline-flex flex-col items-center gap-[24px] relative ${className}`}>
      <div className="relative w-[80px] h-[80px]">
        <div className="relative h-[80px]">
          <Services
            className="!absolute bg-[url(/static/img/ellipse-6-3.svg)] !left-0 !top-0"
            services="group-1000005937"
          />
          <IconDelivery2 className="!absolute !w-[40px] !h-[40px] !top-[20px] !left-[20px]" />
        </div>
      </div>
      <div className="inline-flex flex-col items-center gap-[8px] relative flex-[0_0_auto]">
        <div className="relative w-fit mt-[-1.00px] font-title-20px-semibold font-[number:var(--title-20px-semibold-font-weight)] text-black text-[length:var(--title-20px-semibold-font-size)] tracking-[var(--title-20px-semibold-letter-spacing)] leading-[var(--title-20px-semibold-line-height)] whitespace-nowrap [font-style:var(--title-20px-semibold-font-style)]">
          FREE AND FAST DELIVERY
        </div>
        <p className="relative w-fit font-title-14px-regular font-[number:var(--title-14px-regular-font-weight)] text-black text-[length:var(--title-14px-regular-font-size)] text-center tracking-[var(--title-14px-regular-letter-spacing)] leading-[var(--title-14px-regular-line-height)] whitespace-nowrap [font-style:var(--title-14px-regular-font-style)]">
          Free delivery for all orders over $140
        </p>
      </div>
    </div>
  );
};
