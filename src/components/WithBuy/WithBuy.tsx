/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Cart1 } from "../../icons/Cart1";

interface Props {
  cart: "off" | "on";
  className: any;
}

export const WithBuy = ({ cart, className }: Props): JSX.Element => {
  return (
    <div
      className={`${cart === "off" ? "w-[24px]" : "w-[32px]"} ${cart === "off" ? "bg-[100%_100%]" : ""} ${
        cart === "off" ? "h-[24px]" : "h-[32px]"
      } ${cart === "off" ? "bg-[url(/static/img/cart1-9.svg)]" : ""} ${className}`}
    >
      {cart === "on" && (
        <div className="relative h-[31px] top-px left-px">
          <Cart1 className="!absolute !w-[24px] !h-[24px] !top-[7px] !left-0" color="black" />
          <div className="absolute w-[18px] h-[17px] top-0 left-[14px]">
            <div className="relative w-[16px] h-[17px]">
              <div className="absolute w-[16px] h-[16px] top-px left-0 bg-secondary-2 rounded-[8px]" />
              <div className="absolute w-[7px] top-0 left-[5px] font-title-12px-regular font-[number:var(--title-12px-regular-font-weight)] text-text text-[length:var(--title-12px-regular-font-size)] text-center tracking-[var(--title-12px-regular-letter-spacing)] leading-[var(--title-12px-regular-line-height)] whitespace-nowrap [font-style:var(--title-12px-regular-font-style)]">
                2
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

WithBuy.propTypes = {
  cart: PropTypes.oneOf(["off", "on"]),
};
