---
title: Upgrade SDK
---

## Upgrading @healthblocks-io libraries

### Healthblocks versioning

Major versions match with Expo versions.

Version 3.x is compatible with Expo 40

Version 4.x is compatible with Expo 41

### Release mode

Add the `.npmrc` with the authToken.

Start with the following dependencies in package.json. The major version numbers should all match.

```json
"dependencies": {
  "@healthblocks-io/apollo": "3",
  "@healthblocks-io/core": "3",
  "@healthblocks-io/native": "3",
}
```

### Safe upgrade

To safely upgrade, use the upgrade-interactive command and select the @healthblocks-io libraries specifically. This will make changes in `yarn.lock` and not in `package.json`.

```bash
yarn upgrade-interactive
```

The lockfile dictates what will be installed on your machine, your teammates machines and CI, so new package updates are never automatically applied behind your back.

### Semi-safe full upgrade

If all dependencies are well-defined in your package.json, you can also do a full upgrade. This will safely upgrade all dependencies. As it's harder to know what going on in this case, it can be interesting to review yarn.lock to see which packages were upgraded.

```bash
yarn upgrade
```

### Dangerous upgrade

Using the —latest flag will ignore the version ranges in package.json. This is useful when upgrading from Expo 40 to Expo 41, but lots of things might change/break. Use `expo upgrade` instead.

```bash
# Not recommended
yarn upgrade-interactive --latest
```

# Library development workspace mode

### Getting started

Healthblocks is distributed through Github Packages. The current packages may contain breaking changes regularly. On the other hand, you may want to customize or play around with the components. That's why it may make sense to use the package source instead of the officially released versions. Each package has a corresponding git repo. Start by initializing a git repo for each healthblocks-io/folder. Then you can pull in the latest changes, or switch between branches.

```bash
# Initialize git repos in @healthblocks-io
[ -d "@healthblocks-io/core" ] && cd @healthblocks-io/core && git init && git checkout expo40 && git remote add origin git@github.com:healthblocks-io/healthblocks-js-core.git && git fetch && git reset --mixed origin/expo40 && cd ../..
[ ! -d "@healthblocks-io/core" ] && mkdir -p @healthblocks-io/core && cd @healthblocks-io/core && git clone git@github.com:healthblocks-io/healthblocks-js-core.git . && git checkout -b expo40 origin/expo40 && cd ../..
[ -d "@healthblocks-io/apollo" ] && cd @healthblocks-io/apollo && git init && git checkout expo40 && git remote add origin git@github.com:healthblocks-io/healthblocks-apollo.git && git fetch && git reset --mixed origin/expo40 && cd ../..
[ ! -d "@healthblocks-io/apollo" ] && mkdir -p @healthblocks-io/apollo && cd @healthblocks-io/apollo && git clone git@github.com:healthblocks-io/healthblocks-apollo.git . && git checkout -b expo40 origin/expo40 && cd ../..
[ -d "@healthblocks-io/native" ] && cd @healthblocks-io/native && git init && git checkout expo40 && git remote add origin git@github.com:healthblocks-io/healthblocks-js-native.git && git fetch && git reset --mixed origin/expo40 && cd ../..
[ ! -d "@healthblocks-io/native" ] && mkdir -p @healthblocks-io/native && cd @healthblocks-io/native && git clone git@github.com:healthblocks-io/healthblocks-js-native.git . && git checkout -b expo40 origin/expo40 && cd ../..
```

The commands above will create a `.git` but won't affect your working directory.
Let's see how to upgrade:

### Upgrade while keeping modifications

This is the standard way to upgrade Healthblocks whilst keeping modifications:

```tsx
# Pull in changes
cd @healthblocks-io/core   && git pull --autostash --rebase; cd ../..
cd @healthblocks-io/apollo && git pull --autostash --rebase; cd ../..
cd @healthblocks-io/native && git pull --autostash --rebase; cd ../..
```

### Upgrade to latest version while resetting modifications

By "force upgrading", you will be up-to-date with the latest changes. Make sure to FIRST commit your changes in your app repo. All upgrades will show as changes in your app repo.

```bash
# Force upgrade to latest (lose your library customizations)
cd @healthblocks-io/core && git fetch; git reset --hard origin/expo40;cd ../..
cd @healthblocks-io/apollo && git fetch; git reset --hard origin/expo40;cd ../..
cd @healthblocks-io/native && git fetch; git reset --hard origin/expo40;cd ../..
```

### Handy commands

```bash
# Check for diff
cd @healthblocks-io/core && git --no-pager diff ;cd ../..
cd @healthblocks-io/apollo && git --no-pager diff ;cd ../..
cd @healthblocks-io/native && git --no-pager diff ;cd ../..

# Upgrade to latest
cd @healthblocks-io/core && git pull;cd ../..
cd @healthblocks-io/apollo && git pull;cd ../..
cd @healthblocks-io/native && git pull;cd ../..

# Status
cd @healthblocks-io/core && git status;cd ../..
cd @healthblocks-io/apollo && git status;cd ../..
cd @healthblocks-io/native && git status;cd ../..
```
