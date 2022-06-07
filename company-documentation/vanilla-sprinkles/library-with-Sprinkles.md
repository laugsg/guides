# A Library with Sprinkles

A library minimal expression is _just a CSS file_ with definitions for classes and elements.

As a library keep growing, new problems start to be faced: 
* including layout decisions into the components (e.g., margins and paddings) difficult to create layout variations.
* Even the smallest change require a component variation.

At this point is where _Utility classes_ turn to be useful. 


## Utility Classes

Utility classes are useful to build a library easy to customise as a scalable CSS architecture system.

Utility classes as: 

* A collection of properties, conditions and shorthands.
* Access to defined collection of properties 
* To provide as many collections of properties as needed.


## Utility classes in Sprinkles

`definePriperties({properties, conditions, ...})` function defines a collection of utility classes with properties, conditions and shorthands.

* properties : available CSS properties and values
* conditions : media queries for the provided properties
* shorthands : Maps underlying CSS properties
* responsiveArray : order of conditions
* defaultCondition : default condition should be used


## Access as createSprinkles

`createSprinkles(definePriperties)` function provide access to defined properties or as many collections of properties as needed.

Also exposes static properties key that allows to check a given property.


## Contracts with Sprinkles

Sprinkles allows to reuse contracts previously defined with the purpose to load them in the server side.







