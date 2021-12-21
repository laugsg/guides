## Commit Style
Fixed commit message structure : `fix([ticket]): [text]`
* ie : `fix(CPT-1645): Lexpress underline not visible`

Push to branch: `origin [branch]`
* ie : `git push origin CPT-1645`

### Remove Commits
* remove last commit : `git reset --hard HEAD^`
* remove last 2 commit : `git reset --hard HEAD~2`
* remove last n commit : `git reset --hard HEAD~n`

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