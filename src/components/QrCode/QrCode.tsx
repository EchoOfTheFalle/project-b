/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const QrCode = (): JSX.Element => {
  return (
    <div className="relative w-[80px] h-[80px] bg-black">
      <img className="absolute w-[80px] h-[80px] top-0 left-0 object-cover" alt="Qrcode" src="/img/qrcode-1-1.png" />
    </div>
  );
};
