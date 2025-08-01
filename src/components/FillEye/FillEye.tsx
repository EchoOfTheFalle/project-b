/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { QuickView38 } from "../../icons/QuickView38";

interface Props {
  icon: JSX.Element;
}

export const FillEye = ({
  icon = <QuickView38 className="!absolute !w-[24px] !h-[24px] !top-[5px] !left-[5px]" />,
}: Props): JSX.Element => {
  return <div className="relative w-[34px] h-[34px] bg-primary rounded-[17px]">{icon}</div>;
};
