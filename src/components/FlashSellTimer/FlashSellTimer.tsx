/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

interface Props {
  flashSaleOffer: "days-fill" | "minutes" | "hours" | "seconds";
  className: any;
  divClassName: any;
  divClassNameOverride: any;
}

export const FlashSellTimer = ({
  flashSaleOffer,
  className,
  divClassName,
  divClassNameOverride,
}: Props): JSX.Element => {
  return (
    <div className={`w-[62px] h-[62px] rounded-[31px] bg-button ${className}`}>
      <div
        className={`flex-col items-center top-[14px] relative ${
          flashSaleOffer === "minutes" ? "w-[42px]" : flashSaleOffer === "seconds" ? "w-[48px]" : ""
        } ${
          flashSaleOffer === "hours"
            ? "left-[15px]"
            : flashSaleOffer === "minutes"
            ? "left-[10px]"
            : flashSaleOffer === "seconds"
            ? "left-[7px]"
            : "left-[17px]"
        } ${["minutes", "seconds"].includes(flashSaleOffer) ? "flex" : "inline-flex"}`}
      >
        <div
          className={`font-title-16px-semibold w-fit mt-[-1.00px] tracking-[var(--title-16px-semibold-letter-spacing)] text-[length:var(--title-16px-semibold-font-size)] [font-style:var(--title-16px-semibold-font-style)] text-text font-[number:var(--title-16px-semibold-font-weight)] leading-[var(--title-16px-semibold-line-height)] whitespace-nowrap relative ${divClassName}`}
        >
          {flashSaleOffer === "days-fill" && <>05</>}

          {flashSaleOffer === "hours" && <>23</>}

          {flashSaleOffer === "minutes" && <>59</>}

          {flashSaleOffer === "seconds" && <>35</>}
        </div>
        <div
          className={`[font-family:'Poppins',Helvetica] mt-[-4px] tracking-[0] text-[11px] text-text font-normal leading-[18px] relative ${
            flashSaleOffer === "hours"
              ? "w-[32px]"
              : flashSaleOffer === "minutes"
              ? "w-[43px]"
              : flashSaleOffer === "seconds"
              ? "w-[48px]"
              : "w-[28px]"
          } ${flashSaleOffer === "minutes" ? "mr-[-0.50px]" : ""} ${
            flashSaleOffer === "minutes" ? "ml-[-0.50px]" : ""
          } ${divClassNameOverride}`}
        >
          {flashSaleOffer === "days-fill" && <>Days</>}

          {flashSaleOffer === "hours" && <>Hours</>}

          {flashSaleOffer === "minutes" && <>Minutes</>}

          {flashSaleOffer === "seconds" && <>Seconds</>}
        </div>
      </div>
    </div>
  );
};

FlashSellTimer.propTypes = {
  flashSaleOffer: PropTypes.oneOf(["days-fill", "minutes", "hours", "seconds"]),
};
