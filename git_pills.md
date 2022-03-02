# Git common solutions to daily issues


### Remove Commits
* remove last commit : `git reset --hard HEAD^`
* remove last 2 commit : `git reset --hard HEAD~2`
* remove last n commit : `git reset --hard HEAD~n`
* remove specific commit : `git reset --hard [sha1-commit-id]^`




## Pull a Branch into a Branch
* `git pull [branch]:[branch]`
* `git fetch --all`

## Push to branch: `origin [branch]`
* ie : `git push origin CPT-1645`



## Pull Request Style
* `https://cuponation.atlassian.net/wiki/spaces/OPE/pages/5983076355/How+do+we+git+commit`




## update Git
Get tehe lastest official package source from official `https://launchpad.net/~git-core/+archive/ubuntu/ppa`
```
# get lastest official source
sudo add-apt-repository ppa:git-core/ppa
# update sistem
sudo apt-get update
# re-run installation
sudo apt-get install git -y
```



## remove files from repo
```
git rm [path/to/file]
```



## Solve merge conflicts whit mergetool 
This will set vimdiff as the default merge tool.

### Step 1: set vimdiff
```
git config merge.tool vimdiff
git config merge.conflictstyle diff3
git config mergetool.prompt false
```

### Step 2: Run mergetool
```
git mergetool
```

### Step 3: vimdiff format
4 views:
1. LOCAL – this is file from the current branch
2. BASE – common ancestor, how file looked before both changes
3. REMOTE – file you are merging into your branch

* MERGED – merge result, this is what gets saved in the repo

You can navigate among these views using `ctrl+w`. You can directly reach MERGED view using [`ctrl+w` followed by `j`].

More information about vimdiff navigation is here and [here](http://www.rosipov.com/blog/use-vimdiff-as-git-mergetool/#fromHistor).


### Step 4. choose changes to keep
* If you want to get changes from REMOTE `:diffg RE`
* If you want to get changes from BASE `:diffg BA`
* If you want to get changes from LOCAL `:diffg LO`

### Step 5. Save, Exit, Commit and Clean up
```
:wqa save and exit from vi

git commit -m "message"

# Remove extra files (e.g. *.orig) created by diff tool.
git clean

```

```
  ╔═══════╦══════╦════════╗
  ║       ║      ║        ║
  ║ LOCAL ║ BASE ║ REMOTE ║
  ║       ║      ║        ║
  ╠═══════╩══════╩════════╣
  ║                       ║
  ║        MERGED         ║
  ║                       ║
  ╚═══════════════════════╝
```