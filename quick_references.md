## Inverse Indent with Visual Studio
`Shift + Tab`

## macos - How do I find a file by filename in Mac OSX terminal?
```
find ./ -name build.sh
```
* Structure
  1. find (the program)
  2. ./ (the path - here is set to current location), and
  3. -name [filename.extention] (the criteria).
* find ./ -name build.sh

## AppSync & adminpanel_pmt
Router partners are not yet migrated to AppSync technology, It does work into dd-master partners only. It becomes a node_module parckage named `gsg-data-service` where It's possible to add console.log's that mimic the AppSync needs (it's possible to extract AppSync examples)

### adminpanel_pmt
adminpanel_pmt is a node_module from us, It works as 'intermediary' controller layer that receives partner data that flow between AP and Cupo.

To edit the module, go to adminpanel_pmt, then `npm link`, then into dd-cupo `npm link gsg-data-service`

## Commit Style
Fixed commit message structure : `fix([ticket]): [text]`
* ie : `fix(CPT-1645): Lexpress underline not visible`


## Pull Request Style
* `https://cuponation.atlassian.net/wiki/spaces/OPE/pages/5983076355/How+do+we+git+commit`

## Cupo
1. HTML & JS Script both in .njk `./app/resources/themes`
2. CSS (Styles SCSS) in folder `./sass/`
3. robots.txt `./env/shared/robots/[partner].txt`
4. shadow dom : `./app/core/helpers/shadow-dom/[partner]`

## VEE
A tool for crawling to obtain structures of HTML with their CSS from partners URL.
### Options to Crawl from VEE
1. URL
2. `url/[section]`
3. `url/[section]/?cmpnoblocking`
4. `url/[404/not-found]`
* try : target base conset path `root-domain/[consent-wall]` (e.g `ad.nl/privacy-gate`)
* S3 Bucket `https://s3.console.aws.amazon.com/s3/buckets/wl-acceptance-vee-crawler?region=eu-central-1&tab=objects#`

## sitemap - Old Backend
* Translations Strings
* SEO
* sitemaps
* SEM, CMS
* Homepage widgets 

Every other functionality can be found in the new Admin Panel.

## Global Nav and other FE elements from Admin Panel
Clients file in shared `./src/clients.ts` is the programatic interface (API) which connects the graphical interface (Admin Panel GUI) with shared components.

## Troubleshooting
### node-sass
```
npm uninstall node-sass
npm i node-sass
npm rebuild node-sass --force
```

### Docker : remove images & containers
```
docker stop $(docker ps -a -q) && docker rm $(docker ps -a -q)
docker rmi $(docker images -a -q)
```

### cupo > dd-master : Dockerfile mongodb-org fails
32-bit system repostories is empty (hence why it is not found). One solution is to run another repo for MongoDD
```
sudo apt-get install -y mongodb 
```

### dd-master in Mac
The `APPSYNC_HOST` and `APPSYNC_API_KEY` variables in .env file needs to be exported as :
```
export APPSYNC_HOST="mtysko5xzfgbhkbemfg24p3b7a.appsync-api.eu-west-1.amazonaws.com"                                         
export APPSYNC_API_KEY="da2-cbh2ocjffje2rpeugr46con4sa"
```

## How-To : 

### Run & Load changes into adminpanel_pmt
Each changes needs an install + link 
```
> code changes
npm install
npm link
> the changes has been integrated
```
##### Console Logs
Console logs are introduced into src/ typescript files, then they are visible in the terminal logs from where cupo-cuponing is running. So, the cosole logs into adminpanel_pmt are visible in cupo-cuponing (in the terminal that loads the cupo-cuponing repository)

### Cupo Reborn Missing packages
1. npm install -g typescript
2. [sudo apt install awscli ](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-version.html)
3. npm i -g yarn
```
npm install -g typescript yarn
```


## Deployment
Data Delivery (Migrated) | Router (Not yet Migrated) |
|-|-|
| dd-master | master & dd-master

* cupo-cuponing (master/dd-master) : `http://branching.joingsg.com/`
* shared : `https://branching.jakop.cloud/shared-resources/deploy?branch=[BRANCH(CPT-xxxx])]&partner_id=[PARTNERID(123abcABC123)]&component=[COMPONENTS(header/footer/all/etc...)]`

## Clear CACHE
* Architecture Overview `https://cuponation.atlassian.net/wiki/spaces/OPE/pages/3506438151/Cache+Architectural+Overview`

1. Mongo > POST `{"partnerId": "[PARTNERID]"}`
`https://4078wj6b70.execute-api.eu-central-1.amazonaws.com/acceptance/api/v1/fe-tools/mongo/clear-shadow-dom`

2. AWS Flush : `https://eu-west-1.console.aws.amazon.com/apigateway/home?region=eu-west-1#/apis/1ll4lvbvs1/stages/acceptance`


## Admin Panel : find & fix

1. issue: sso login
      1. aws configure
      2. SSO credentials copy/paste
      3. aws configure sso (URL personio AWS SSO front-end)
2. issue: npm install > Error while executing: /usr/bin/git ls-remote -h -t git://github.com/adobe-webplatform/eve.git (npm error code: 128)
      1. `npm i eve`
3. issue: npm install > Command failed: git clone --mirror -q git://github.com/neilj/Squire.git (npm error code: 128)
      1. git config --local url."https://".insteadOf git://
4. issue: npm install > Error while executing: /usr/bin/git ls-remote -h -t https://github.com/AdminJuwel191/switchery.git
      1. switchery: remove it from package.json, install it as `npm i switchery`, run again `npm i`