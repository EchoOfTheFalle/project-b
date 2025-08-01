import { FlashSellTimer } from ".";

export default {
  title: "Components/FlashSellTimer",
  component: FlashSellTimer,
  argTypes: {
    flashSaleOffer: {
      options: ["days-fill", "minutes", "hours", "seconds"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    flashSaleOffer: "days-fill",
    className: {},
    divClassName: {},
    divClassNameOverride: {},
  },
};
