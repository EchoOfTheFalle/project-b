/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { HeartSmall17 } from "../../icons/HeartSmall17";
import { UserOff } from "../../icons/UserOff";
import { Header } from "../Header";
import { Logo } from "../Logo";
import { SearchComponentSet } from "../SearchComponentSet";
import { WithBuy } from "../WithBuy";

interface Props {
  className: any;
  frameClassName: any;
  withBuyCart: string;
  withBuyCartOnClassName: any;
  visible: boolean;
}

export const HeaderWrapper = ({
  className,
  frameClassName,
  withBuyCart = "on",
  withBuyCartOnClassName,
  visible = true,
}: Props): JSX.Element => {
  return (
    <div className={`inline-flex items-center gap-[148px] relative ${className}`}>
      <div className={`inline-flex items-start gap-[160px] relative flex-[0_0_auto] ${frameClassName}`}>
        <Logo />
        <div className="inline-flex items-start gap-[48px] relative flex-[0_0_auto]">
          <Header className="!flex-[0_0_auto]" header="header-home-hover" />
          <Header header="contact" />
          <Header header="about" />
          <Header header="sign-up" />
        </div>
      </div>
      <div className="inline-flex items-center gap-[24px] relative flex-[0_0_auto]">
        <SearchComponentSet className="!flex-[0_0_auto]" property1="active" />
        <div className="inline-flex items-center justify-center gap-[16px] relative flex-[0_0_auto]">
          <HeartSmall17 className="!relative !w-[32px] !h-[32px]" />
          <WithBuy cart={withBuyCart} className={withBuyCartOnClassName} />
          {visible && <UserOff className="!relative !w-[32px] !h-[32px]" />}
        </div>
      </div>
    </div>
  );
};

HeaderWrapper.propTypes = {
  withBuyCart: PropTypes.string,
  visible: PropTypes.bool,
};
