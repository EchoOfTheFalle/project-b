/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Component21 } from "../../icons/Component21";

interface Props {
  property1: "active" | "default";
  className: any;
}

export const SearchComponentSet = ({ property1, className }: Props): JSX.Element => {
  return (
    <div
      className={`${property1 === "default" ? "w-[24px]" : ""} ${property1 === "active" ? "inline-flex" : ""} ${
        property1 === "active" ? "flex-col" : ""
      } ${property1 === "active" ? "items-center" : ""} ${property1 === "default" ? "bg-[100%_100%]" : ""} ${
        property1 === "active" ? "gap-[10px]" : ""
      } ${property1 === "active" ? "pl-[20px] pr-[12px] py-[7px]" : ""} ${property1 === "default" ? "h-[24px]" : ""} ${
        property1 === "default" ? "bg-[url(/static/img/component-2-1.svg)]" : ""
      } ${property1 === "active" ? "rounded-[4px]" : ""} ${property1 === "active" ? "justify-center" : ""} ${
        property1 === "active" ? "bg-secondary" : ""
      } ${property1 === "active" ? "relative" : ""} ${className}`}
    >
      {property1 === "active" && (
        <div className="inline-flex items-center justify-center gap-[34px] relative flex-[0_0_auto]">
          <p className="relative w-fit opacity-50 font-title-12px-regular font-[number:var(--title-12px-regular-font-weight)] text-text-2 text-[length:var(--title-12px-regular-font-size)] tracking-[var(--title-12px-regular-letter-spacing)] leading-[var(--title-12px-regular-line-height)] whitespace-nowrap [font-style:var(--title-12px-regular-font-style)]">
            What are you looking for?
          </p>
          <Component21 className="!relative !w-[24px] !h-[24px]" />
        </div>
      )}
    </div>
  );
};

SearchComponentSet.propTypes = {
  property1: PropTypes.oneOf(["active", "default"]),
};
