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




## 2. load values into Sprinkles
1. import all the values to be used
2. style-contract-sprinkles.css.ts (link values)








