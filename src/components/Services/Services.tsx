/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconDelivery3 } from "../../icons/IconDelivery3";
import { IconHeadphone } from "../../icons/IconHeadphone";
import { IconSecure4 } from "../../icons/IconSecure4";

interface Props {
  services: "customer-service" | "delivery" | "group-1000005937" | "money-back";
  className: any;
}

export const Services = ({ services, className }: Props): JSX.Element => {
  return (
    <div
      className={`w-[80px] h-[80px] ${services === "group-1000005937" ? "bg-[100%_100%]" : ""} ${
        services === "group-1000005937" ? "bg-[url(/static/img/ellipse-6-4.svg)]" : ""
      } ${className}`}
    >
      <div
        className={`relative ${services === "group-1000005937" ? "w-[58px]" : ""} ${
          services === "group-1000005937" ? "left-[11px]" : ""
        } ${services === "group-1000005937" ? "top-[11px]" : ""} ${
          services === "group-1000005937" ? "h-[58px]" : "h-[80px]"
        } ${services === "group-1000005937" ? "rounded-[29px]" : ""} ${
          services === "group-1000005937" ? "bg-button" : ""
        }`}
      >
        {["customer-service", "delivery", "money-back"].includes(services) && (
          <div className="w-[80px] left-0 top-0 bg-[100%_100%] h-[80px] bg-[url(/static/img/ellipse-6-4.svg)] absolute">
            <div className="w-[58px] left-[11px] top-[11px] h-[58px] rounded-[29px] bg-button relative" />
          </div>
        )}

        {services === "delivery" && (
          <IconDelivery3 className="!absolute !w-[40px] !h-[40px] !top-[20px] !left-[20px]" color="#FAFAFA" />
        )}

        {services === "customer-service" && (
          <IconHeadphone className="!absolute !w-[40px] !h-[40px] !top-[20px] !left-[20px]" color="#FAFAFA" />
        )}

        {services === "money-back" && (
          <IconSecure4 className="!absolute !w-[40px] !h-[40px] !top-[20px] !left-[20px]" />
        )}
      </div>
    </div>
  );
};

Services.propTypes = {
  services: PropTypes.oneOf(["customer-service", "delivery", "group-1000005937", "money-back"]),
};
