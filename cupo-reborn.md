# CR notes for development
Setup and run.

## Good to know
> legacy resources must be loaded together and cant be falsy (from `''` to `'1'`)
To load **legacy resources** like `header-desktop&mobile` **It must be loaded together** with `footer-desktop&mobile`.

This means that It's not possible to load just only one legacy resource like or headerMobileResource or footerMobileResource. Both have to be loaded to be displayed into the page.

Even It can't have falsy values like empty strings, this means that have to be loaded both and at least with a truty value like `'1'`

## Partners id
For now, shared `clientId` works for CR url.

## Partners Name
The partner name's come from S3 folder name. Example:
* kleine zeitung : 
    1. shared repo clients.ts `kleinezeitungAT`
    2. S3 bucket folder name `KleineZeitung` (same as vee `partner/[partner]`) 

## Setup
AWS cli and daily permission access it's needed, plus readme instructions at [cupo-reborn repo](https://bitbucket.org/global-savings-group/cupo-reborn/src/master/)

## Run
Recommended 'dailymail' id `a6bb77bb88d8192d3780742623fae0f8` and test over RLP like `/argos`. Set resources into `./src/config/locales.ts`. Let blank property if the resource doesn't exist. Full path to load `http://localhost:3000/a6bb77bb88d8192d3780742623fae0f8/argos`
```
clientName: 'adnl',
headerResource: 'header-desktop',
footerResource: '',
```

## Troubleshooting
### Mising Packages
1. npm install -g typescript (repo use tsc CLI)
2. [sudo apt install awscli ](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-version.html)
3. npm i -g yarn
```
npm install -g typescript yarn
```

### CSS conjugation
Brief description for issues resolution.
* absolute: 
    1. It's positioned relative to the nearest positioned ancestor.
    2. It's removed from the normal flow.
    3. > the ancestor needs a height to be respected.

```
@media screen and (min-width: 1024px) {
  #ve-header-desktop {
    height: 133px; /*varies*/
  }
}
@media screen and (max-width: 1024px) {
  #ve-header-desktop {
    height: 48px;
  }
}
```