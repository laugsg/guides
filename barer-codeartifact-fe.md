# Unable to authenticate, need: Bearer realm="..."
This issue comes from a wrong configuration in your .npmrc file. 

My npmrc file should connect to a private npm registry and looked like this:

```
registry=https://<private-registry>
//<private-registry>:_authToken=<token>
//<private-registry>:always-auth=true
```

## issue 1. redirects all
Delete the .npmrc file in your Home folder.


## issue 2. https
The issue was that I needed to add the https:// protocol also to the second and third line and it worked. In the end it looked like this:

```
registry=https://<private-registry>
    //https://<private-registry>:_authToken=<token>
    //https://<private-registry>:always-auth=true
```



