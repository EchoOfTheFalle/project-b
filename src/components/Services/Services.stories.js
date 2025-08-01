import { Services } from ".";

export default {
  title: "Components/Services",
  component: Services,
  argTypes: {
    services: {
      options: ["customer-service", "delivery", "group-1000005937", "money-back"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    services: "customer-service",
    className: {},
  },
};
