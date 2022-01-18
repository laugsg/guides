# Guides of actions over VEE tool & cupo repo

* VEE : Crawler/Editor for Partners Elements
* cupo-cuponing : Github Repo for White Label Themes & Elements

## VEE
Only accesible by VPN, it's a remote web application tool that captures html/css (crawler) allowing their edition targeting element by class/id/attrs/others.

The local project works the same.
    * https://bitbucket.org/global-savings-group/vee-management-console/src/master/


### Modus Operandi or Procedures
Let's see HTML elements edition by CSS class/id.
#### HTML elements edition by CSS class/id
It's required to edit elements linked to their parents not in an isolated manner. For example:
```
<!-- GOOD : Why? elements linked to their parents -->
#ve_site_header .drawer {...}
.primary-nave ul.inner-nav .button-cta {...}

<!-- BAD : elements edited in an isolated manner -->
.drawer {...}
.button-cta {...}
button {...}
```

### Crawl Partner : Download Partner HTML element
1. Resource - Created/Create : Check if the Partner has the resource already or create it
2. Type in the resource to edit/create (Field "Visual eLement name")
3. Fetch the Partner URL (Field "Fetch URL")
4. Click on `Save & Crawl` button
5. The element will deposited into S3 bucket into partner folder at : https://s3.console.aws.amazon.com/s3/buckets/wl-acceptance-vee-crawler?region=eu-central-1&tab=objects

### **the process to save changes** are:
1. Click on `Save & Crawl` button
2. Click on `Save & Deploy to staging` button
3. Changes are saved and available to interact into S3 bucket like [partner]/[resource]/content.html



## cupo-cuponing
Custom themes for partner site content, it's everything between partner-header/footer.

Even more, robots.txt files, APIs, elements, and more.

In House built software that connects local development environment with CI/CD AWS Pipeline.

### Setup Enviroment (Windows)
Installation over a Windows 10 to work with Ubuntu 18 console through WSL 2.

1. WSL 2
    + powershell console `wsl --install`, update if it's needed.
2. Ubuntu 18 (powershell ha 2) : powershell or Microsoft Store

**____ From Ubuntu console (update & upgrade) ___**

3. [Docker](https://phoenixnap.com/kb/how-to-install-docker-on-ubuntu-18-04) : `sudo apt install docker.io`
4. GIT
5. NVM
6. Python
7. build-essential

**____ Setup cupo repo ___**

8. set NVM version 8
9. npm i
10. npm i gulp-sass
11. run Docker deamon in other console
    + sudo dockerd

**____ Docker Compose ___**

12. [Alternative Install : Linux](https://docs.docker.com/compose/install/#alternative-install-options)

**____ vim /etc/hosts ___**

13. 127.0.0.1 mongo redis

**____ Permission To Use Port 80 ___**

14. sudo apt-get install libcap2-bin
15. sudo setcap cap_net_bind_service=+ep `readlink -f \`which node\``

### cupo-cuponing Build
1. AWS credentials
2. `source .env`
3. `gulp build-envs`
4. build docker : `docker build -f Dockerfile-sync -t sync .`
5. `docker-compose down && docker-compose up -d`
6. `node node_modules/.bin/gulp dev --partner $PARTNER --inspect`
7. **IMPORTANT** : re-build per client
    - The project is built with a single client configuration
    - Each client requires
        1. change .env PARTNER
        2. (step 3) docker-compose down && docker-compose up -d
        3. (step 4) node node_modules/.bin/gulp dev --partner $PARTNER --inspect
        4. url localhost/partnerid

### Structure
cupo is like an MVC. ([AffByLeg](#affected-by-legacy))
1. Model : 
    + `./src/dataTypes.ts` or
    + `./app/models/clients.js` or
    + `./clients/[acceptance/production]/[client]`
2. View : [White Labels](#white-labels)
    + `./src/resources/` or
    + `./app/themes/[theme]/[part]/[chunk].[extention]`
    * `./sass/` (CSS files)
3. Controller : 
    + `./app/controllers/`
    + `./src/hanlders/`
4. _everything else is "connecting stuff"_ (cite)

### Client URL
Example : How to see an element?
The Client URL is crafted from three paths in `../shadow-dom/[client].js` : 
1. first (tail -relative- path) `getaFixUrl`
2. second (head -relative- path) `getaFixUrl`
3. element of choice (end string) : client id "underscore" element and extention

example of How-to:
```
// first (tail -relative- path) `getaFixUrl`
let getaFixUrl = '/template/client/9c766146171622a44dae80b897648eac/types/';
// second (head -relative- path) `getaFixUrl`
getaFixUrl =  `https://us.gateway.jakop.cloud/template${getaFixUrl}`;

// element of choice (end string)
// cnn is choosen : 9c766146171622a44dae80b897648eac
// element : header
// client id "underscore" element and extention
// end string -> 9c766146171622a44dae80b897648eac_header.html
```
So, Client URL is :
`https://us.gateway.jakop.cloud/template/template/client/9c766146171622a44dae80b897648eac/types/9c766146171622a44dae80b897648eac_header.html`



# White Labels
White Labels are our web applications that are displayed into the Partner. To avoid penalization by content duplication White Labels comes to display the needed data and elements consistenly with no-mayor changes allowing consistency from development perspective. For example, the variation between White label 1 and White label 2 is sidebar side: 1 has located at right, 2 has located at left. This no-mayor changes keep design consistent and enough different from one to the other.

This means that White Labels themes represent precisly that: a white label or common organization.

# Affected By Legacy
Some paths or data could be Affected By Legacy (AffByLeg) documentation.
