import { Cart } from ".";

export default {
  title: "Components/Cart",
  component: Cart,
  argTypes: {
    product: {
      options: [
        "cart",
        "just-for-your-cart-gamepad",
        "cart-with-colour-chose",
        "dog-food-no-discount",
        "wishlist-cart-with-discount",
        "just-for-your-cart-keyboard",
        "laptop-no-discount",
        "man-jacket-color-choosing",
        "gaming-control-color-choosing",
        "bestselling-guccibag",
        "jacket-with-wishlist",
        "bestselling-bookself",
        "soccer-boat-color-choosing",
        "gamepad-wishlist",
        "beauty-product-no-discount",
        "wishlist-cart-with-no-discount",
        "bestselling-coat",
        "cart-hover",
        "bestselling-cooling-fan",
        "product-5",
        "kids-car-with-color-choosing",
        "dslr-camera-no-discount",
        "just-for-your-cart-bag",
        "just-for-your-cart-monitor",
        "cart-with-no-discount",
      ],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    product: "cart",
    className: {},
    colourChnageEllipseClassName: {},
  },
};
