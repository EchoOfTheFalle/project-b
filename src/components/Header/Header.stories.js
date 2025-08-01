import { Header } from ".";

export default {
  title: "Components/Header",
  component: Header,
  argTypes: {
    header: {
      options: [
        "header-contact-hover",
        "contact",
        "home",
        "about",
        "header-about-hover",
        "header-home-hover",
        "header-sign-up-hover",
        "sign-up",
      ],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    header: "header-contact-hover",
    className: {},
  },
};
