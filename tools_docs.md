# Tools : Development GUIs by VPN
Acceptance/Staging, a safe test environment. Production, live client product (danger!). Each tool should have their opposite reference (Acceptance/Staging vs. Production)


* Acceptance/Staging (safe)
    1. [VEE](#vee)
        - https://vee-console.gsg.pub/
        - crawled file
            + [partner]/staging/[resource] : https://s3.console.aws.amazon.com/s3/buckets/wl-acceptance-vee-crawler?region=eu-central-1&tab=objects#
    2. [New Admin Panel](#new-admin-panel)
        + https://stg.api.cuponation.com/ / https://ci.api.cuponation.com/
    3. [Getafix New Admin Panel](#getafix-new-admin-panel)
        + https://ap-jakop.acceptance.cuponation.com/
    4. [Old Admin Panel Old](#admin-panel)
        + backend-ci.cuponation[TLD/ccTLD] [#tld-cctld]
    5. [Branching Deployment](#deployment-tool) - http://branching.joingsg.com/
    6. Cache Removal AWS
        + https://eu-west-1.console.aws.amazon.com/apigateway/home?region=eu-west-1#/apis/1ll4lvbvs1/stages/acceptance
    7. Clear Mongo DB Shadow DOM
        + https://4078wj6b70.execute-api.eu-central-1.amazonaws.com/acceptance/api/v1/fe-tools/mongo/clear-shadow-dom


* Production (danger!)
    1. [VEE](#vee)
        - https://vee.cuponation.com/ 
    2. [New Admin Panel](#new-admin-panel)
        - https://ap.cuponation.com/
    3. [Getafix New Admin Panel](#getafix-new-admin-panel)
        - https://ap-jakop.cuponation.com/
    4. [Old Admin Panel Old](#admin-panel)
        - backend.cuponation[TLD/ccTLD][1]


* AWS API Gateway 
    + All APIs : https://eu-west-1.console.aws.amazon.com/apigateway/main/apis?region=eu-west-1
    + Acceptance : https://eu-west-1.console.aws.amazon.com/codesuite/codepipeline/pipelines/jkp-acceptance-shared-resources-od/view?region=eu-west-1



# Docs : Projects viscera
Detailed descriptions of project domains, sections, elements and scope.
1. Theme X
    - https://docs.google.com/document/d/1kuPVOVmvEbNXOmUBWvfhIuYx5bqR6ObRBKy_058_ylo/
2. Deployment process on shared resource project
    - https://cuponation.atlassian.net/wiki/spaces/NS/pages/1897332848/Development+process+on+shared+resource+project











# Acronims
### VEE
Visual Element Extractor : Crawling tool to extract partner page element structures.

### New Admin Panel
Configs related to partner vouchers, retailers, pages, marketing (nav items, sem, etc), and more general options like translations, seo tags, long-etc.

### Getafix New Admin Panel
Like New Admin Panel but related to other page types, like categories, articles, etc.

### Old Admin Panel
Configs related to partner Translations Strings (TS/ts), SEO / SEM, CMS / Homepage widgets.

### TLD-ccTLD
Top-Level-Domain / country code Top-Level-Domain :
- most popular TLD : .com .co
- most popular country code : .de .fr co.uk .es (etc..)

### Deployment tool
For branchs from Github Cupo-Cuponing master or dd-master branch








