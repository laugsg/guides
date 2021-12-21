# Steps


1. ticket assignation in Jira

2. Branch
    * Exist?
    * Partner? Router (master) Data Delivery (dd-master)
    * Repo? Github (cupo) Bitbucket (shared)

3. **_Changes_**
    * Global : themes
    * Local : wl
    * VEE : config json + changes

4. Preview
    * cupo : `http://branching.joingsg.com/`
    * shared : `https://branching.jakop.cloud/shared-resources/deploy?branch=TICKET&partner_id=PARTNERID&component=COMPONENT`

5. Commit 
    * Style Guide : `fix(CPT-0001): Element card is broken`

6. Pull Request (PR - ask for code integration)
    * Create Pull Request
    * Reviewers assignation
    * comment (if necessary)
    * Create



## Folders Map

### cupo
1. styles : `./sass`
2. html : `./app/themes`
3. scripts : into .njk files

### shared
1. themes :  `./src/resources` (.njk & .scss)
2. shared<->AdminPanel API : `./src/services/clients.ts`
    + elements loaded from AdminPanel not present in FE could be integrated here (e.g [CPT-1732 - Nav items not Global nav](https://cuponation.atlassian.net/browse/CPT-1732?focusedCommentId=362749))
```
# from .shared/src/clients.ctrl.ts
"264c0f34a1ded9baa28d8a68e7fcfc93": {
    clientName: "dailymailcch",
    clientId: "264c0f34a1ded9baa28d8a68e7fcfc93",
    globalNavAPI: {
       development: "https://4owomyjfqk.execute-api.eu-west-1.amazonaws.com/acceptance/global-nav/264c0f34a1ded9baa28d8a68e7fcfc93",
       acceptance: "https://4owomyjfqk.execute-api.eu-west-1.amazonaws.com/acceptance/global-nav/264c0f34a1ded9baa28d8a68e7fcfc93",
       production: "https://2z7edch1ab.execute-api.eu-west-1.amazonaws.com/production/global-nav/264c0f34a1ded9baa28d8a68e7fcfc93"
    },
    [...]
}
```





