# EvoliCSS

Demo: https://evoli-css.web.app

## Installation

```
npm install
npm run start
```

## Build library

```
npm run lib:build
npm run lib:build:compressed
npm run lib:watch
```
## Publish to NPM

If you want to publish on NPM:
You must run npm version  
Git push the commit and tag created by npm version 

```
npm version <new_version>
git push --tags
```
The CI takes care of publishing the package on NPM with the new version 