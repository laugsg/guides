# NVM Mindset : Working with Node Version Manager
NVM system rawly speaking, isolate NodeJs version.

This means even `npm i -g [packages]` are limited by this isolation. In other words, global and local project packages will not be accessible out of the version they were installed.

The valuable advantage compared with NodeJs is to use a specific version of NodeJs in place to work always and uniquely with latest. The procedure to work with a version nvm is always the same : **_It must be installed all the packages needed, unregardless other packages installed before even if they were globally instaled.

The best example is `cupo-cuponing` vs. `cupo-cuponing-mobile`. They use Node 8x and Node 6x respectively speaking, both need the same packages, both follow the same steps to be installed, but each need to have installed all their packages in their own version independently if the packages were installed globally or not.

## download & setup
```
git clone [cupo repo] [folder-name]
node -v
nvm use 8/6
npm i
npm i gulp-sass

npm uninstall node-sass
npm i node-sass
npm rebuild node-sass --force

AWS credentials 
 - AWS Retail Staging - Option 1 - copy
 - terminal - paste
```

## run project
```
docker stop $(docker ps -a -q) && docker rm $(docker ps -a -q)
docker rmi $(docker images -a -q)
node -v
nvm use 8/6

# sudo vim /etc/resolv.conf
# set primary & secondary windows DNS like nameservers
# nameserver 1.1.1.1
# nameserver 8.8.8.8

docker build -f tools/Dockerfile-sync -t sync .
source .env
gulp build-envs
docker-compose down && docker-compose up -d
node node_modules/.bin/gulp dev --partner $PARTNER --inspect
```

## localhosts
* cupo `localhost/client_id`
* mobile `localhost:9000/client_id`


# How-to
How to see wsl distro from cmd `wsl -l -v`

## Hosts files
Both windows and WSL distro must be modified to include localhost address and the project images address
```
127.0.0.1       localhost
# CUPO localhost
127.0.0.1       mongo
127.0.0.1       redis

# AdminPanel localhost
127.0.0.1       local.admin-panel.cuponation.com
```









