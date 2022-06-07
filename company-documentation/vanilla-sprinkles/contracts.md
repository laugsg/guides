# Contracts and Themes in Sprinkles
A contract is a js object where key-value pairs are equal to class names (key) and rules (value).


## Contracts
Contracts create (are like) Types of stlyes rules for themes, they provide a model definition for the css rules to be applied, to be implemented when the theme is created.

This is especially useful to define a theme variations, reusing previously defined contracts, a variation provides customization when meeting the values from theme requirements.
 
1. createThemeContract(contract)
2. createTheme(contract, theme-declaration)


## Implementation of Themes based in Contracts
A style file works to define how contract connect with css properties, then it's imported into the component to be used as parent wrapper, finally the theme definition is implemented as class names for child elements

Process :
1. define how the Contract is it
2. define how the Theme implements the contract
3. define how the Style is it based in which css property is defined by each contract value.
4. import the Theme into the component
5. import Style Definition
6. Place the Theme as parent wrapper
7. Place the Style Definition as child wrapper

Files involved:
1. contract.css.ts (contract & theme)
2. style.css.ts (style definition - imports the contract)
3. Component.tsx/jsx/js (imports theme & themeDefinition)

