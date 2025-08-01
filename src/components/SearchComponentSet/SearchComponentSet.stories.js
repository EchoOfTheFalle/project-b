import { SearchComponentSet } from ".";

export default {
  title: "Components/SearchComponentSet",
  component: SearchComponentSet,
  argTypes: {
    property1: {
      options: ["active", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "active",
    className: {},
  },
};
