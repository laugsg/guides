# vanilla-extract : research

The purpose of this research was the investigation about to use an API of the current library for styling, to move the styles related to spacing to the server-side, extract them and create a library with them using Sprinkles.

There were a deliberate conceptual intent of to reuse, in parallel of the time-effort messuration, thinking of deploy the library at once or to deliver styles by phases till the task were complete.

Those values about spacing are already defined, then to take them to reuse them, or copy/paste them, at first glance it could short the curve (time-effort) of the task. By the other hand, the practical complexity of this could drive to write them all again for the sake of speed/simplicity.

## Index

1. [x] [Introduction](intro.md)
2. [x] [Contracts](contracts.md)
3. [x] [A library with Sprinkles](library-with-Sprinkles.md)
4. [x] [Themes Variations](themes-variations.md)
5. [ ] recipes API
6. [ ] Conclusion
7. [ ] [Proof of concept](https://nextreact-iota.vercel.app/)
8. Examples
   1. [x] [vanilla-extract Contracts](examples/vanilla-extract-Contracts/README.md)
   2. [ ] [Move vanilla-extract Contracts to Sprinkles](examples/move-Contracts-to-Sprinkles/README.md)

# Conclusions


Design System is a fabolous proyect. Looking back from the present, improvements related to contract/themes and how they are implemented is possible, thanks to the experience gain from built it.

It's recommended to isolate this values related to spacing, which could be taken from partners themes where are the actual values saved. The previous implementation was designed originally for Material UI, this structures of code could be reused and, even more, improved by cleaning and curating that same data.

## pairing/collate : A new library as improvement of DS spacing rules

The complexity of this task due to the location of the values, at first glance It's not unpropertionally extense, and It looks as affordable. Even recommended, because there are some helpers of styles that could be eluded by just taking the values needed, creating a new contract and a new theme.

---

[Side considerations](side-considerations.md) about:

* About vanilla-extract
* About Contract & Themes previously defined
* About Sprinkles

---

Previous landscape

5. [x] vanilla-extract contracts
6. [x] from contracts to sprinkles
7. [x] sprinkles implementation
8. [ ] recipes API

[update] Documentation requirements:

1. [x] sprinkles API : how it works and how to implement it
2. [ ] recipes API : how it can be used as the utilities DS already have
3. [x] pairing/collate : how can theoretically a new library be an improvement of DS implementation for styles and classes
4. [x] time-effort : implement sprinkles into a react component

