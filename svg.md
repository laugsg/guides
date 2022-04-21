# How to Scale SVG
SVG stands for Scalable Vector Graphics. SVG doesn’t behave in the same way how images should scale.

## scaling (sizing) vs aspect ratio
Raster images like JPG, PNG, and GIF, have a clearly defined size. The image file describes how the browser should color in a grid that is a certain number of pixels wide and a certain number of pixels tall. An important side effect is that raster images have a clearly defined aspect ratio: the ratio of width to height.

It is possible to force the browser to draw a raster image at a different size than its intrinsic height and width, but if to force it to a different aspect ratio, things will get distorted. For this reason, since the early days of the web there has been support for auto scaling on images: you set the height or the width, and the browser adjusts the other dimension so that the aspect ratio stays constant.

## SVG behave
SVG images, in contrast, can be drawn at any pixel size, so they don’t need a clearly defined height or width. And they won’t always have a clearly defined aspect ratio. It need to explicitly provide this information (and more) to scale it to fit the desired dimensions or SVG won’t scale at all.

Why does it behave this way? Because SVG isn’t (just) an image. SVG is a document.

If you use inline SVG (i.e., `<svg>` directly in your HTML5 code), then the `<svg>` element does double duty, defining the image area within the web page as well as within the SVG. Any height or width you set for the SVG with CSS will override the height and width attributes on the `<svg>.` So a rule like svg {width: 100%; height: auto;} will cancel out the dimensions and aspect ratio you set in the code, and give you the default height for inline SVG. Which, as mentioned above, will be either 150px or 100vh, depending on the browser.

So forget height and width. You don’t actually want to set the exact height and width anyway, you want the SVG to scale to match the width and/or height you set in the CSS. What you want is to set an aspect ratio for the image, and have the drawing scale to fit. You want a viewBox.

Set height and width is not the correct approach, It is needed to scale the SVG to match a width and/or height with the correct aspect ratio for the image, and have the drawing scale to fit. To set `viewBox` property is required.

## The viewbox attribute : make svg scalable
It’s the piece that makes vector graphics _Scalable_ Vector Graphics. The viewBox does many things:
* It defines the aspect ratio of the image.
* It defines how all the lengths and coordinates used inside the SVG should be scaled to fit the total space available.
* It defines the origin of the SVG coordinate system, the point where x=0 and y=0.

## viewBox
The viewBox is an attribute of the `<svg>` element. Its value is a list of **four numbers: x, y, width, height.** 

Once viewBox is added to `<svg>`, It is possible to use the SVG file as an image, or as inline SVG code, and it will scale perfectly to fit within whatever size you give it. However, it still won’t scale quite like any other image. By default, it will not be stretched or distorted if you give it dimensions that don’t match the aspect ratio. Instead, the scale will be adjusted in order to preserve the aspect ratio defined in the code.

### width
It is the width in user coordinates/px units, **within the SVG code**, that should be scaled to fill the width of _the area into which you’re drawing your SVG (the viewport)_. 

### height
_It is the number of px/coordinates that should be scaled to fill the available height_. Even if your SVG code uses other units, such as inches or centimeters, these will also be scaled to match **the overall scale created by the viewBox**.

### x and y
The x and y numbers specify the coordinate, in the scaled viewBox coordinate system, to use for the top left corner of the SVG viewport. (Coordinates increase left-to-right and top-to-bottom, the same as for identifying page locations in JavaScript). For simple scaling, you can set both values to 0. However, the x and y values are useful for two purposes: to create a coordinate system with an origin centered in the drawing (this can make defining and transforming shapes easier), or to crop an image tighter than it was originally defined.

