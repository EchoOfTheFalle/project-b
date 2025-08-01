import { CartWithFlat } from ".";

export default {
  title: "Components/CartWithFlat",
  component: CartWithFlat,
  argTypes: {
    property1: {
      options: ["variant-4", "variant-3", "cart-with-discount-hover", "cart-with-discount"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "variant-4",
    className: {},
    gXClassName: {},
    samMoghadamKhamseh: "/img/sam-moghadam-khamseh-kvmdstrgobm-unsplash-1-2.png",
  },
};
