# vanilla-extract : css-in-js patterns




## Index
1. [Introduction](intro.md)
1. [Contracts](contracts.md)
2. [A library with Sprinkles](library-with-Sprinkles.md)






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









---


New landscape
* time-effort : implement sprinkles into react component
* Contracts and Themes in Sprinkles
* vanilla-extract recipesAPI
* connect with design system


[update] Documentation requirements:
1. sprinkles API : how it works and how to implement it
2. time-effort : implement sprinkles into a react component
3. recipes API : how it can be used as the utilities DS already have
4. pairing/collate : how can theoretically a new library be an improvement of DS implementation for styles and classes




1. vanilla-extract contracts
2. from contracts to sprinkles
3. sprinkles implementation
4. recipes API













