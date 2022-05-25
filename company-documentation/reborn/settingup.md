# How-To: Install & Run
Reborn project is simple to install and run, it just need Node or NVM, Git, AWS, Typescript CLI and Yarn.

## 0. Prerequisites & Dependencies

2. [Node](https://nodejs.org/en/download/) or [NVM](https://github.com/nvm-sh/nvm) > v14
3. [Git](https://git-scm.com/downloads) > 2.30
4. [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-version.html)
5. Modify the `~/.aws/config` file in the root folder
    ```
    [default]
    output = json
    region = eu-west-1
    ```

This project makes use of "tsc" command which is provided by the Typescript CLI. To enable this we need to install typescript as a global package:
```
npm install -g typescript
```

Yarn is widely used along this project. To enable this we need to install it as a global package:
```
npm install -g yarn
```

# 1. Install

1. Get Reborn Project Locally
   ```
   git clone git@bitbucket.org:global-savings-group/cupo-reborn.git
   ```

2. Some of the dependencies are read from CodeArtifact as private npm registry. To enable this we need to create a `.npmrc` file in the root folder of the local Reborn project with the following content:
    ```
    registry=https://fe-acceptance-codeartifact-domain-103057822433.d.codeartifact.eu-west-1.amazonaws.com/npm/fe-acceptance-codeartifact-npm-repository/
    //fe-acceptance-codeartifact-domain-103057822433.d.codeartifact.eu-west-1.amazonaws.com/npm/fe-acceptance-codeartifact-npm-repository/:always-auth=true
    //fe-acceptance-codeartifact-domain-103057822433.d.codeartifact.eu-west-1.amazonaws.com/npm/fe-acceptance-codeartifact-npm-repository/:_authToken=${CODEARTIFACT_AUTH_TOKEN}
    ```

3. AWS Credentials: Step by Step
   1. onelogin plugin/[dashborad](https://joingsg.onelogin.com/portal)
   2. AWS Single Sign-on 
   3. Retail Staging 
   4. Command line or Programmatic access
   5. Select OS
   6. Hover "Option 1: Set AWS environment variables" then Click to Copy
   7. Paste into a terminal the copied Credentials.

4. Copy/Paste/execute into a terminal the following export:
    ```
    export CODEARTIFACT_AUTH_TOKEN=`aws codeartifact get-authorization-token --domain fe-acceptance-codeartifact-domain --domain-owner 103057822433 --query authorizationToken --output text`
    ```

5. Change directory to Reborn local project folder and install all the dependencies
   ```
   npm install
   ```



# 2. Run : `yarn dev`
Once installed, execute `yarn dev` to run the project.




# 3. Use Reborn to See Partners Front-End
Reborn uses a routing system that in local it starts at localhost, then is followed by the partner id and the page type, or the partner id, the page type and a retailer.

Partners ID could be found at `cupo-reborn/src/config/locales.ts`, the partner id is used as the key of the partner object as follows:
```
'[partner-id]': {
    ...
    clientName: '[partner-name]',
    ...
},
```

An example structure of an URL would be as follows:

* url parameters
  * `http://localhost:3000` : Reborn runs at localhost
  * `/v4c...e72` : Partner ID
  * `/rlp` : Page Type
  * `/retailer` : Retailer
* then, complete url would be 
  * `http://localhost:3000/v4c...e72/rlp/retailer`




# Miscelaneous
## Running static generated pages (production ready)

-   `yarn build && yarn start`

# Analyzing libraries

-   If you want to analyze the build librares and how they are organized use this command
    `npm run analyze`

# `export` in Windows environment 

In Windows Command Prompt environment translate `export` to `set` or `SET`.

