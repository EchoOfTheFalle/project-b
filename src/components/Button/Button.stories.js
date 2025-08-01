import { Button } from ".";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    button: {
      options: ["primary", "secondary", "small"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    button: "primary",
    hover: true,
    className: {},
    text: "View All Products",
  },
};
