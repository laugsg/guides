# Projects Smoke Deployments
Cupo-cuponing and Shared-Resources-Services deploy their elements with different tools

## Cupo
It uses Online Branching Tool to smoke deploy. It process is :
1. repo changes > Push
2. [branching tool](http://branching.joingsg.com/)
3. then, a smoke url provided by this tool would make changes visible

## Shared
It uses HTTP request at AWS to smoke deploy, then changes will be visible into local cupo. It process is :
1. repo changes > Push
2. GET https://branching.jakop.cloud/shared-resources/deploy?branch=[BRANCH]&partner_id=[PARTNER_ID]&component=[RESOURCE<header/footer/all...>]
3. then, a smoke branch deployment is available by this request to be seen
   1. at staging addresses
   2. at local cupo, docker-compose down/up & run