# About Recipes API

Creates a multi-variant style function that can be used at runtime or statically in css.ts files.

Recipe configuration can also make use of existing variables, classes and styles passing in the result of the sprinkles function directly.

It allows to reuse of contracts, themes and previous sprinkles to be implemented with recipe API to create variants and combination of theme to create new variants on fly.

```
// # recipe-button.css.ts
import { recipe } from "@vanilla-extract/recipes";
import { contractColors } from "../contracts/contract-colors.css";
import { contractDefaultButton } from "../contracts/contract-default-button.css";
import { buttonDefaultSprinkles } from "../styles/styles-sprinkles.css";

export const button = recipe({
  base: {
    border: contractDefaultButton.borders.border,
    borderStyle: "solid",
  },
  variants: {
    color: {
      primary: { color: contractColors.colors.primary },
      secondary: buttonDefaultSprinkles({ color: "secondary" }),
      default: { color: "#e769d9" },
    },
  },
  compoundVariants: [ // <-- variations created on the fly
    {
      variants: {
        color: "default",
        size: "large",
      },
      style: {
        borderStyle: "dashed",
        borderWidth: "17px",
        borderColor: 'purple',
      },
    },
  ],
  defaultVariants: {
    color: "primary",
    size: "medium",
  },
});
```


















