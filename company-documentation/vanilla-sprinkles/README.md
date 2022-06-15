# vanilla-extract : research

The purpose of this research was the investigation about to use an API of the current library for styling, to move the styles related to spacing to the server-side, extract them and create a library with them using Sprinkles.

There were a deliberate conceptual intent of to reuse, in parallel of the time-effort messuration, thinking of deploy the library at once or to deliver styles by phases till the task were complete.

Those values about spacing are already defined, then to take them to reuse them, or copy/paste them, at first glance it could short the curve (time-effort) of the task. By the other hand, the practical complexity of this could drive to write them all again for the sake of speed/simplicity.

## Index

1. [x] [Introduction](intro.md)
2. [x] [Contracts](contracts.md)
3. [x] [A library with Sprinkles](library-with-Sprinkles.md)
4. [x] [Themes Variations](themes-variations.md)
5. [x] [recipes API](recipes-API.md)
6. [x] [Conclusion](#conclusions)
7. [x] [Proof of concept](https://nextreact-iota.vercel.app/)
8. Examples
   1. [x] [vanilla-extract Contracts](examples/vanilla-extract-Contracts/README.md)
   2. [x] [Move vanilla-extract Contracts to Sprinkles](examples/move-Contracts-to-Sprinkles/README.md)
   3. [x] [Proof of concept](https://github.com/laugsg/nextreact)

# Conclusions

Design System is a fabolous proyect. Looking back from the present, thanks to the experience gain from built it, an improvement related to contract/themes and how they are implemented is possible.

As recommendation, there are three areas to be improved at the moment of build a new library:

1. contract
2. themes
3. implementation

## 1. & 2. Contracts, Themes and values

Reuse contracts and themes to build a new library is not recommended as middle/long term sustanaible solution, since they were developed targeting a library that would be fully removed (Material UI). It's recommended to look at this as guide to build independent and specific contracts and themes. As the same as the implementation of them.

Design System as a package that Cupo Reborn consumes, It's a module that could be found into `reborn/node_modules/@design-system/`, DS gives for each partner within their own theme every style rule as a flat primitives value at `ds/packages/styles/src/themes/` then `files:[partner].ts + common.ts`. This allow to extract them ease and fast, ready to be delivered and ready to be consume.

## 3. Implementation

As the contrary as the Contracts/Themes and values, reuse implementation methodology is not possible and even not recommended. By one hand, to move to server side implies to use Sprinkles which needs a detailed mode of use being a different API, by the other hand, the way that the styles are delivered its not completely efficient due to, in some cases, introduce more styles than are consumed or whole themes target a root node.


## pairing/collate : A new library as improvement of DS spacing rules

The complexity of this task due to the location of the values, at first glance It's not unpropertionally extense, and **It looks as affordable. Even recommended**, because there are some helpers of styles that could be eluded by just taking the values needed, creating a new contract and a new theme. Which could encrease performance.

It's recommended to isolate this values related to spacing, which could be taken from partners themes where are the actual values saved. The previous implementation was designed originally for Material UI, some of this structures of code could be reused and, even more, improved by cleaning and curating that same data and developing more efficent modes to deliver styles.

Think to build a new library open to the opportunity to look foward, to build more efficient methods to delivery stlyes, to create specific contracts and themes, which allows DS to take advantage of it for an improvement or refactor of styling.

---

[Side considerations](side-considerations.md) about:

* About vanilla-extract
* About Contract & Themes previously defined
* About Sprinkles

---

Previous landscape

1. [x] vanilla-extract contracts
2. [x] from contracts to sprinkles
3. [x] sprinkles implementation
4. [x] recipes API

[update] Documentation requirements:

1. [x] sprinkles API : how it works and how to implement it
2. [x] recipes API : how it can be used as the utilities DS already have
3. [x] pairing/collate : how can theoretically a new library be an improvement of DS implementation for styles and classes
4. [x] time-effort : implement sprinkles into a react component

