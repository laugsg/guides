# How-To implement Vanilla-Extract

1. create styles as styles.css.ts (typescript css module)






2. vanilla-extract as tool
3. module.css.ts
4. components imports module.css.ts as classes
5. data comes from complicate place
6. * themeGetter
7. 






# How-To Library

extracts the common style (e.g., buttons, typography) to avoid code repetition and style inconsistency.

layout decisions into the components (e.g., margins and paddings) become layout variations.

a few utility classes into the framework turned to be super useful to make them easier to customise.

based on naming conventions and utility classes developed a system to build a scalable CSS architecture 





# What is a CSS Library?
You can think of a CSS library like a theme that you can use across multiple projects. It's helpful if you don't want to repeat the styling every time or copy-paste your code. It's also useful if you want to be consistent across your web apps (which is good for your brand).

So, a shared CSS library/theme will increase your efficiency and development speed and it can help you scale your product while maintaining consistency. This can also be a part of a more extensive design system.





# How to Package the Library

First, you need to update the "package.json" file to include a new property called files. According to the npm documentation, the files field is an array of file patterns that describes the entries to be included when your package is installed as a dependency.

We need only to package the generated CSS file, so the additional entry in the "package.json" file will be `files: [dist/style.css]`.

Next, you'll run `npm pack`. This will create a new file. In this case, "css-lib-0.0.0.tgz".


# How to Use the Package
Create a new project and follow these steps:

1. Install : `npm install <path-to-lib>/vite-css-lib-0.0.0.tgz`
2. import the CSS file : `import 'node_modules/vite-css-lib/dist/style.css`
3. add a class to html elements : `<button class="tomato">Submit</button>`


# Why vanilla-extract

A library minimal expression is _just a CSS file_ with definitions for classes and elements.

vanilla-extract let define contracts to ensure that requirements are met.

This is especially useful to define a theme or variations of it, contracts allows to define the requirements a theme must met becoming extremely clear which values their variations should customize.

> A contract is a js object, later at implementation key will be used as class name and values as rules.
```
color: {brand: 'blue'}
<p class={color}>text</p>
```


# Why Sprinkles : zero-runtime on top of vanilla-extract

Sprinkles also use vanilla-extract themes to configure themed values but all styles are generated at build time for better performance.



















---


















# vanilla-extract : css-in-js patterns



## What Is A Design System?
A design system is a collection of UI components bound together with design principles and styles guides about colors, typography, margins, paddings and other styles used throughout the UI elements.

Design systems contain style guides, pattern libraries, toolkits, examples, and design principles. 



## What is a CSS Library?
A CSS library is like a theme, to be use across multiple projects that keeps consistency across views, pages and sites.

The concept is similar to bootstrap, bulma, tailwind or similar, where CSS classes and styles are defined to be applied over HTML structures.



# From vanilla-extract to Sprinkles
All styles are generated at build time for better performance.


# Why vanilla-extract

A library minimal expression is _just a CSS file_ with definitions for classes and elements.

vanilla-extract let define contracts to ensure that requirements are met.

This is especially useful to define a theme or variations of it, contracts allows to define the requirements a theme must met becoming extremely clear which values their variations should customize.

> A contract is a js object, later at implementation key will be used as class name and values as rules.
```
color: {brand: 'blue'}
<p class={color}>text</p>
```



# Why Sprinkles : zero-runtime on top of vanilla-extract

Sprinkles also use vanilla-extract themes to configure themed values but all styles are generated at build time for better performance.












---




























