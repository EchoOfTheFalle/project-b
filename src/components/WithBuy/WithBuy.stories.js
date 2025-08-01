import { WithBuy } from ".";

export default {
  title: "Components/WithBuy",
  component: WithBuy,
  argTypes: {
    cart: {
      options: ["off", "on"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    cart: "off",
    className: {},
  },
};
