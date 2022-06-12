# Shape & Values as Contract & Themes

To provide styles there are two options: flat values (as '16px', '#fff', etc...) or values from a theme that it's based in a standard defined by a contract.

In the second case, theme values are linked with fixed keys defined in a contract.

## Styling from Client Side

Styles and themes provide styling, variants can overwrites previous stlyling to provide new definitions of styles. Then, one theme can provide variants for another theme overwriting their values.

```
// style shared by buttons
const baseStyle = style({ margin: "0px", padding: "0px", });

// Theme
const baseTheme = style({ margin: contractSizing.size.small });

// Theme specific for buttons margin & padding
const overwriteTheme = style({ margin: contractButton.space.margin });

/** variants of button
 * Each key is an array containing a variant.
 * The primary key apply the base style,
 * the secondary key is the Theme variant that overwrites the base style,
 * the tertiary key is the button specific theme variant that overwrites the Theme.
 */
// definition
export const buttonStyle = styleVariants({
  primary: [baseStyle],
  secondary: [baseStyle, baseTheme],
  tertiary: [baseTheme, overwriteTheme],
});

// # Button.js
<button className={buttonStyle.primary} />
<button className={buttonStyle.secondary} />
<button className={buttonStyle.tertiary} />
```

## Styling from Server Side

Variants, as styles generated at build time, follows the same principles. It's possible to combine them with Sprinkles, reuse previously defined contracts and themes, even to combine variants to create newly variants.

```
// # contract-default-button.css.ts
import { createThemeContract } from '@vanilla-extract/css'
export const contractDefaultButton = createThemeContract({
    background: { secondary: null }
})

// # styles-sprinkles.css.ts
import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";
import { contractDefaultButton } from "./contract-default-button.css";
const buttonDefaultProperties = defineProperties({
  conditions: {
    default: false,
    theme: true,
  },
  defaultCondition: "default",
  properties: {
    background: { secondary: contractDefaultButton.color.secondary }
  },
});
export const buttonDefaultSprinkles = createSprinkles(buttonDefaultProperties);

// # recipe-button.css.ts
import { recipe } from "@vanilla-extract/recipes";
import { contractColors } from "../../contracts/contract-colors.css";
import { buttonDefaultSprinkles } from "./styles-sprinkles.css";
export const button = recipe({
  base: {
    border: contractDefaultButton.border.border
  },
  variants: {
    color: {
      primary: {backgroundColor: contractColors.colors.primary},
      secondary: buttonDefaultSprinkles({background: "secondary"}),
      default: {backgroundColor: "#e769d9"},
    }
  },
  compoundVariants: [
      {
          variants: {
              color: "default"
          },
          style: {
            borderColor: "orange"
          }
      }
  ],
  defaultVariants: {
      color: 'primary',
  }
});

// # Component.js
import { button } from './recipe-button.css'
import { buttonDefaultSprinkles } from "./recipes/styles-sprinkles.css";
import { themeDefaultButton } from '../components/recipes/theme-button-default.css'

<div className={themeDefaultButton}>
  <button className={button({
    color: "default",
    size: "large",
  })} onClick={onClick}>
    Love ({likes})
  </button>
</div>

<div className={themeDefaultButton}>
  <button className={buttonDefaultSprinkles({
    color: {
      theme: "secondary"
    },
    margin: "small",
    padding: "small"
  })} onClick={onClick}>
    Love ({likes})
  </button>
</div>
```

In the example above a previously defined contract and theme from an hypothetical design-system is reused, their configurations and styles are loaded to be moved from client-side to be served through Sprinkles on the server-side.

Recipes API is used for the same reuse purposes, but this tool allow to combine them with other contract and themes creating new variants as showed, even to compound new ones from defined conditions.