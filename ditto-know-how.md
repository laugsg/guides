# Ditto know-how
https://ditto.gsg.pub/

Ditto is a command line tool and visual inspector that replicate the partner's headers and footers.

## Features
1. crawler
   1. crawl : simple crawler that target a url and a selector to return a html.
   2. crawl-from-json : provide a config json file with instructions about target url, actions and elements to an AWS service that do the crawling and returns an html.
2. transformers
   1. rem2pixel : transform rem units to pixels, it defaults on 16px to scaling, also custom size could be provided.
   2. rel2abs : transform relative urls from a given partner like `background: url('assets/logo.jpg')` to `background: url('https://www.google.com/assets/logo.jpg')`.
   3. replace : remove/append/prepend html structures related to a choosen selector.
3. visual inspector
   1. implementation
   2. comparisor


## Architecture and code decisions

1. Webpack
   1. serve all the files easily
   2. Refresh on save to see the last changes
   3. provided by this library or using plugins
      1. minimize the HTML
      2. remove the unused CSS
      3. rename the files after every change to skip cache
2. Theming to allow different kinds of resources for devices
3. normalize.css to prevent from browsers default styles

## Libraries
1. Bundler: https://webpack.js.org/
2. Library to translate new JS to ES5 prior: https://babeljs.io/
3. Toast notifications: https://www.npmjs.com/package/react-toastify
4. Library to easily get the dimensions of the viewer: https://www.npmjs.com/package/react-resize-aware
5. Library for center, zoom, among other functionalities in the viewer: https://www.npmjs.com/package/react-zoom-pan-pinch

# Theming
`/partners/focus/demo.config.json`

```
{
  "country": "ue",
  "id": "000exampleID000",
  "name": "User Friendly Name",
  "themes": [
    {
      "name": "desktop",
      "header": "header-desktop"
    },
    {
      "name": "new-desktop",
      "header": "header-desktop",
      "footer": "footer-desktop"
    },
    {
      "name": "footer-mobile",
      "footer": "footer-mobile"
    }
  ]
}
```

config.json |
Name| Type | Description
|-|-|-|
id | string | Displayed name of the partner in the menu
name | string | Displayed name of the partner in the menu
country | string | Country of the partner
themes | array | The themes of the partner

Themes properties |
Name| Type | Description
|-|-|-|
name | string | Displayed name in the menu of the viewer
header | string | Resource name (excluding extension and path)
footer | string | Resource name (excluding extension and path)


# Design System Integration to use real page components
The content of the viewer is currently using an image to simulate partners pages. To have a real representation of the resource, the content of the viewer could be modifyed. React components are injected directly in the iframe of the viewer as the same way of importing resources in Reborn.
```
// Viewer.jsx
<div
  style={{
    height: "100vh",
    backgroundColor: "white",
    overflow: "auto",
    position: "relative",
  }}
>
  {/* normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */}
  <div dangerouslySetInnerHTML={{ __html: normalizeCss }}></div>
  
  {headerHtml && <div dangerouslySetInnerHTML={{ __html: headerHtml }}></div>}
  
  // -----------------------------------
  // the content will be here!
  // -----------------------------------
  
  {footerHtml && <div dangerouslySetInnerHTML={{ __html: footerHtml }}></div>}
</div>
```

# Challenges

## Avoid Cache: see current changes
#### Problem: Browser cache
Files change but their names does not, HTTP requests are routed to browser cache before been sent which it's used if there is a valid cached resource to fulfill the request. Then, changes becomes harder to be tested.
#### Solution: Files hash names
Giving new hash filenames at each build to those files that were changed to request a new file after each modification. Then, the same filename is never requested in the cache.

This is a great article that explains how this works in detail: https://web.dev/http-cache/ 

## different resolutions
how the resources will be display in different resolutions using their media queries and not the ones of the demo? With iframes, passing either a normal URL or React components as strings using the attribute srcdoc. Then, each different DOMs could have its own media queries to use different devices when the user change the view mode. 

### Cautions of using Frame in React
There is a main issue injecting React into iframes, the styles. As the iframe has their own DOM, It's not possible to use any class of the demo or the injected component.  It is totally isolated.

Inline CSS for the component to be injected in the viewer solve this problem. This is not an issue for the resources because they all have their styles inside them, but this has to be taken into consideration for future integrations with more complex components.