# The Front-End or User Iterface

Reborn makes use of an atomic Design System as base of the user interfaces, then from atomic elements are compound higher components as containers and views. 

A simple example is _"Similar Shop Widget"_ shown as follows, which makes use of Shop Links Element (one atom that comes from Design System) and Typography Element (one atom that comes from Material UI) to compound a higher component to create a view with a div that wraps this two atomic elements.
```
/** file two
* Similar Shop Widget
*/
import ShopLinks from '@elements/shop-links';
import Typography from '@mui/material/Typography';
<div>
    <Typography {...} >
        {title}
    </Typography>
    <ShopLinks
        {...}
    />
</div>


/** file one
* Shop Links Element
*/
import ShopLink from '@design-system/shop-link';
<div className={classes.grid({ type: variant })}>
    {shops?.map((shop: Shop) => (
        <div
            ...
        >
            <ShopLink
                {...}
            />
        </div>
    ))}
</div>
```

## How-To Handle Atomic Design
A Design System Oboarding could be found [here](https://cuponation.atlassian.net/wiki/spaces/OPE/pages/6125912065/Design-System+Oboarding). 




























Reborn makes use of an atomic design system, then it group together this atoms into components, to finally show the screens designed. An simple example is _"Similar Shop Widget"_ shown as follows, which makes use of Shop Links Element -that comes from Design System, and Typography Element -that comes from Material UI, to compound in a higher component which creates a view based in a div that wraps this two atomic elements.

then it group together this atoms into components, to finally show the screens designed. A simple example is _"Similar Shop Widget"_ shown as follows, which makes use of Shop Links Element (one atom that comes from Design System) and Typography Element (one atom that comes from Material UI) to compound a higher component to create a view with a div that wraps this two atomic elements.






