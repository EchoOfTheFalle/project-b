/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconSend2 } from "../../icons/IconSend2";

interface Props {
  className: any;
  divClassName: any;
  iconSend2Color: string;
}

export const SendMail = ({ className, divClassName, iconSend2Color = "black" }: Props): JSX.Element => {
  return (
    <div
      className={`flex w-[217px] items-center gap-[32px] pl-[16px] pr-0 py-[12px] relative rounded-[4px] border-[1.5px] border-solid border-text-2 ${className}`}
    >
      <div
        className={`relative w-fit mt-[-1.50px] opacity-40 font-title-16px-regular font-[number:var(--title-16px-regular-font-weight)] text-text-2 text-[length:var(--title-16px-regular-font-size)] tracking-[var(--title-16px-regular-letter-spacing)] leading-[var(--title-16px-regular-line-height)] whitespace-nowrap [font-style:var(--title-16px-regular-font-style)] ${divClassName}`}
      >
        Enter your email
      </div>
      <IconSend2 className="!relative !w-[24px] !h-[24px]" color={iconSend2Color} />
    </div>
  );
};

SendMail.propTypes = {
  iconSend2Color: PropTypes.string,
};
