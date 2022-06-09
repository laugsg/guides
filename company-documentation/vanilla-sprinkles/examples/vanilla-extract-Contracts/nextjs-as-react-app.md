# Proof of Concept : Vanilla-Extract within Next js in React

## Setup

This project was create from scratch, first as HTML with React elements, finally as moved from HTML to Nextjs with React components.

- HTML with React elements

1. `mkdir nextreact` & change directory
2. `touch index.html` & html skeleton
3. As html React needs 3 scripts to work: react, react-dom & babel.

- Nextjs with React components

1. `npm init` to create a package.json
2. `npm i react react-dom`
3. remove all html markup
4. import react
5. change file extention -> index.js
6. Move the index.js file to a new folder called pages
7. `export default function HomePage() {...}` as the entrypoint of this page
8. Add a script to package.json to run the Next.js server `"scripts": {"dev": "next dev"}`

- Vanilla-Extract

1. Packages
   * `npm i vanilla-extract/css @vanilla-extract/babel-plugin @vanilla-extract/next-plugin typescript @types/react @types/node @vanilla-extract/sprinkles @vanilla-extract/recipes`
   1. @vanilla-extract/css 
   2. @vanilla-extract/babel-plugin 
   3. @vanilla-extract/next-plugin
   4. typescript 
   5. @types/react 
   6. @types/node
   7. @vanilla-extract/sprinkles
2. Config files 1. next.config.js
   ```
   const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
   const withVanillaExtract = createVanillaExtractPlugin();
   const nextConfig = require("next").NextConfig;
   module.exports = withVanillaExtract(nextConfig);
   ```
