/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";

interface Props {
  button: "primary" | "secondary" | "small";
  hover: boolean;
  className: any;
  text: string;
}

export const Button = ({ button, hover, className, text = "View All Products" }: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {
    button: button || "primary",
    hover: hover,
  });

  return (
    <div
      className={`inline-flex items-center gap-[10px] rounded-[4px] justify-center relative ${
        state.button === "secondary" ? "border border-solid" : ""
      } ${state.button === "secondary" ? "border-[#00000080]" : ""} ${
        state.button === "small" ? "px-[48px] py-[10px]" : "px-[48px] py-[16px]"
      } ${state.hover && ["primary", "small"].includes(state.button) ? "bg-[#e07575]" : "bg-button-2"} ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      <div
        className={`font-title-16px-medium w-fit mt-[-1.00px] tracking-[var(--title-16px-medium-letter-spacing)] text-[length:var(--title-16px-medium-font-size)] [font-style:var(--title-16px-medium-font-style)] font-[number:var(--title-16px-medium-font-weight)] leading-[var(--title-16px-medium-line-height)] whitespace-nowrap relative ${
          state.button === "secondary" && !state.hover
            ? "text-text-2"
            : state.button === "secondary" && state.hover
            ? "text-text-1"
            : "text-text"
        }`}
      >
        {["primary", "secondary"].includes(state.button) && <>{text}</>}

        {state.button === "small" && <>Add To Cart</>}
      </div>
    </div>
  );
};

function reducer(state: any, action: any) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        hover: true,
      };

    case "mouse_leave":
      return {
        ...state,
        hover: false,
      };
  }

  return state;
}

Button.propTypes = {
  button: PropTypes.oneOf(["primary", "secondary", "small"]),
  hover: PropTypes.bool,
  text: PropTypes.string,
};
