# How-To: Move vanilla-extract Contracts to Sprinkles (inlcomplete)

Let assume that everything about contracts and definitions are already done.

just to implement a sprinkles files as middleware for methods, then change from Style to sprinkles.


## 1. reuse contracts into Sprinkles
1. contract.css.ts
2. theme-primary.css.ts (values)
3. style-contract-sprinkles.css.ts (link contract)
4. class name: (two options)
      1. styles-contract.css.ts
      2. import sprinkles into Component.js
5. Component.js: (two options)
      1. import themePrimary as themePrimary (className)
      2. sprinkles: (two options)
         1. import sprinkles function into className
         2. import style-contract (sprinkles inside) as themeSprinkles

Implementation requires both contract, theme and sprinkles. This is because the theme carries with the real rules values for the css properties.

```
// # styles-sprinkles-reuse-contract.css.ts
import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";
import { contractColors } from "../contracts/contract-colors.css";
const colorProperties = defineProperties({
  conditions: {
    lightMode: {},
    darkMode: { "@media": "(prefers-color-scheme: dark)" },
  },
  defaultCondition: "lightMode",
  properties: {
    color: {
      // 1. reuse contracts into Sprinkles
      primary: contractColors.colors.primary, // <-- contract
      secondary: contractColors.colors.secondary, // <-- contract
      // 2. load values into Sprinkles
      default: "#69d2e7", // <-- created on the fly
    },
    background: {
      // 1. reuse contracts into Sprinkles
      primary: contractColors.colors.primary, // <-- contract
      secondary: contractColors.colors.secondary, // <-- contract
      // 2. load values into Sprinkles
      default: "#e0e4cc", // <-- created on the fly
    },
  },
});
export const sprinkles = createSprinkles(colorProperties);
```


## 2. load values into Sprinkles
1. import all the values to be used
2. style-contract-sprinkles.css.ts (link values)

```
import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";
import { contractDefaultButton } from "../contracts/contract-default-button.css";
const buttonDefaultProperties = defineProperties({
  properties: {
    background: {
      primary: contractDefaultButton.color.primary,
      default: "#a26445",
    },
  },
});
export const buttonDefaultSprinkles = createSprinkles(buttonDefaultProperties);
```






