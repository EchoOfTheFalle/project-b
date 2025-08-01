import { CategoryPhone } from ".";

export default {
  title: "Components/CategoryPhone",
  component: CategoryPhone,
  argTypes: {
    categoryPhone: {
      options: ["camera", "smart-watch", "phone", "computer", "headphone", "gaming"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    categoryPhone: "camera",
    hover: true,
  },
};
