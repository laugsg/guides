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

export const button = recipe({
  base: {
    border: contractDefaultButton.border.border
  },
  // Second, define variants
  variants: {
    color: {
      primary: {backgroundColor: contractColors.colors.primary},
      secondary: buttonDefaultSprinkles({background: "secondary"}),
      default: {backgroundColor: "#e769d9"},
    },
    size: {
        small: {fontSize: contractSizing.size.small},
        medium: buttonDefaultSprinkles({fontSize: "large"}),
        large: {fontSize: contractSizing.size.large},
    }
  },
//   Opotionally, define combinations of variants
  compoundVariants: [
      {
          variants: {
              color: "default",
              size: "large"
          },
          style: {
            borderColor: "orange",
            borderStyle: "dotted",
            borderWidth: '17px',
            color: "lime",
            fontWeight: '700'
          }
      }
  ],
  defaultVariants: {
      color: 'primary',
      size: "medium"
  }
});
```










