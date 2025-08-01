/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconCustomerService1 } from "../../icons/IconCustomerService1";
import { ServicesCustomer } from "../ServicesCustomer";
import { ServicesFast } from "../ServicesFast";
import { ServicesMoneyBack } from "../ServicesMoneyBack";

interface Props {
  className: any;
  servicesCustomerIcon: JSX.Element;
  visible: boolean;
}

export const FullServices = ({
  className,
  servicesCustomerIcon = (
    <IconCustomerService1 className="!absolute !w-[40px] !h-[40px] !top-[20px] !left-[20px]" color="white" />
  ),
  visible = true,
}: Props): JSX.Element => {
  return (
    <div className={`inline-flex items-center justify-center gap-[88px] relative ${className}`}>
      <ServicesFast className="!flex-[0_0_auto]" />
      <ServicesCustomer icon={servicesCustomerIcon} />
      {visible && <ServicesMoneyBack className="!flex-[0_0_auto]" />}

      <ServicesMoneyBack className="!flex-[0_0_auto]" />
    </div>
  );
};

FullServices.propTypes = {
  visible: PropTypes.bool,
};
