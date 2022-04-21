# Run Cupo

## Required Pre-Steps
* AWS credentials
* .env 
  * PARTNER
  * export `APPSYNC_HOST="mtysko...` into .env or externally
* docker previous images : 
   * docker stop $(docker ps -a -q) && docker rm $(docker ps -a -q) && docker rmi $(docker images -a -q)
*  Build :
   *  master: 
      *  docker build -f Dockerfile-sync -t sync .
   *  dd-master: 
      *  docker build -f tools/Dockerfile-sync -t sync .

## Steps
1. source .env 
2. docker-compose down && docker-compose up -d
3. npx gulp build-envs
4. npm run serve

VPN

**path**

localhost/[clientid]


```
export APPSYNC_HOST="mtysko5xzfgbhkbemfg24p3b7a.appsync-api.eu-west-1.amazonaws.com"
export APPSYNC_API_KEY="da2-cbh2ocjffje2rpeugr46con4sa"
```