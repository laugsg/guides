# vanilla-extract : css-in-js patterns

CSS-in-JS libraries tackle the limitations of CSS, vanilla-extract let define contracts to ensure that requirements are met.

This is especially useful to define a theme or variations of it, contracts allows to define the requirements a theme must met becoming extremely clear which values their variations should customize.

> A contract is a js object where key-value pairs are equal to class names (key) and rules (value).


## Why Sprinkles

All styles are generated at build time for better performance.

Sprinkles also use vanilla-extract features as 
* themes : to configure themed values
* contracts : to configure themes based on them


# How-To Library with Sprinkles

A library minimal expression is _just a CSS file_ with definitions for classes and elements.

Let assume that everything about contracts and definitions are already done.


## Minimal implementation

Sprinkles simple implementation make use of `sprinkles()` function to expose an object that define style rules.

```
import { sprinkles } from './sprinkles.css.ts';

export const container = sprinkles({
  display: 'flex',
  paddingX: 'small',

  background: {
    lightMode: 'blue-50',
    darkMode: 'gray-700'
  }
});
```


## Complex implementation

Utility classes are useful to build a library easy to customise as a scalable CSS architecture system.

* Utility classes as a collection of properties, conditions and shorthands.
* Access to defined collection of properties and provide as many collections of properties as needed.


### Utility classes as definePriperties

`definePriperties({properties, conditions, ...})` function defines a collection of utility classes with properties, conditions and shorthands.

* properties : available CSS properties and values
* conditions : media queries for the provided properties
* shorthands : Maps underlying CSS properties
* responsiveArray : order of conditions
* defaultCondition : default condition should be used


### Access as createSprinkles

`createSprinkles(definePriperties)` function access to defined properties or as many collections of properties as needed.

Also exposes a static properties key that allows to check a given property.

```
export const sprinkles = createSprinkles(...);
sprinkles.properties.has('paddingX');
// -> boolean
```

### example

```
import {
  defineProperties,
  createSprinkles
} from '@vanilla-extract/sprinkles';

const space = {
  none: 0,
  small: '4px',
  medium: '8px',
  large: '16px'
};

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': 'screen and (min-width: 768px)' },
    desktop: { '@media': 'screen and (min-width: 1024px)' }
  },
  defaultCondition: 'mobile',
  properties: {
    display: ['none', 'block', 'flex'],
    flexDirection: ['row', 'column'],
    padding: space
    // etc.
  }
});

const unconditionalProperties = defineProperties({
  /* ... */
});
const colorProperties = defineProperties({
  /* ... */
});

export const sprinkles = createSprinkles(
  responsiveProperties,
  unconditionalProperties,
  colorProperties
);
```


## Contracts and Themes in Sprinkles



























