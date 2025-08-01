/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { CategoryCellphone1 } from "../../icons/CategoryCellphone1";

interface Props {
  categoryPhone: "camera" | "smart-watch" | "phone" | "computer" | "headphone" | "gaming";
  hover: boolean;
  icon: JSX.Element;
}

export const CategoryPhone = ({
  categoryPhone,
  hover,
  icon = <CategoryCellphone1 className="!absolute !w-[56px] !h-[56px] !top-[25px] !left-[57px]" color="black" />,
}: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {
    categoryPhone: categoryPhone || "phone",
    hover: hover,
  });

  return (
    <div
      className={`w-[170px] h-[145px] overflow-hidden rounded-[4px] relative ${
        !state.hover ? "border border-solid" : ""
      } ${!state.hover ? "border-[#0000004c]" : ""} ${state.hover ? "shadow-categogy-5" : ""} ${
        state.hover ? "bg-secondary-2" : ""
      }`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <div
        className={`font-title-16px-regular [font-style:var(--title-16px-regular-font-style)] tracking-[var(--title-16px-regular-letter-spacing)] text-[length:var(--title-16px-regular-font-size)] top-[96px] font-[number:var(--title-16px-regular-font-weight)] leading-[var(--title-16px-regular-line-height)] whitespace-nowrap absolute ${
          state.categoryPhone === "phone"
            ? "left-[55px]"
            : state.categoryPhone === "computer"
            ? "left-[40px]"
            : state.categoryPhone === "camera"
            ? "left-[51px]"
            : state.categoryPhone === "gaming"
            ? "left-[53px]"
            : "left-[34px]"
        } ${
          !state.hover ? "text-text-2" : state.categoryPhone === "camera" && state.hover ? "text-text" : "text-primary"
        }`}
      >
        {state.categoryPhone === "phone" && <>Phones</>}

        {state.categoryPhone === "computer" && <>Computers</>}

        {state.categoryPhone === "smart-watch" && <>SmartWatch</>}

        {state.categoryPhone === "camera" && <>Camera</>}

        {state.categoryPhone === "headphone" && <>HeadPhones</>}

        {state.categoryPhone === "gaming" && <>Gaming</>}
      </div>
      {icon}
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

CategoryPhone.propTypes = {
  categoryPhone: PropTypes.oneOf(["camera", "smart-watch", "phone", "computer", "headphone", "gaming"]),
  hover: PropTypes.bool,
};
