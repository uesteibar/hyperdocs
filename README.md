# hyperdocs

[![Standard Version](https://img.shields.io/badge/release-standard%20version-brightgreen.svg)]()
[![npm version](https://badge.fury.io/js/hyperdocs.svg)](https://badge.fury.io/js/hyperdocs)
[![Code Climate](https://codeclimate.com/github/uesteibar/hyperdocs/badges/gpa.svg)](https://codeclimate.com/github/uesteibar/hyperdocs)
[![npm](https://img.shields.io/npm/dm/hyperdocs.svg?label=DL)]()

Get docs right in your hyper terminal.

![demo](https://gifyu.com/images/hyperdocs.gif)

- [Install](#install)
- [Usage](#usage)
- [Running Locally](#running-locally)
- [Contributing](#contributing)
- [Helpers/Tools](#helperstools)
- [Maintainers](#maintainers)

## Install

Asuming you alredy use [hyper](https://hyper.is) and [hpm](https://www.npmjs.com/package/hpm-cli)] (If you don't, please, go check them out)
```bash
hpm install hyperdocs
```

else, add it to your `~/.hyper.js` file
```js
plugins: ['hyperdocs']
```

Enjoy =)

## Usage

```bash
hyperdocs {language or framework}
```

for example:
```bash
hyperdocs react
```

If the documentation is found, it will open it right away. If it's not, it will open a [duckduckgo](https://duckduckgo.com/) search instead (currently broken due to duckduckgo not allowing to be shown in an iframe anymore [#14](https://github.com/uesteibar/hyperdocs/issues/14)).

## Running locally

Go to your hyper plugins folder
```bash
cd ~/.hyper_plugins/local
```

Clone the repository
```bash
git clone --depth=1 git@github.com:uesteibar/hyperdocs.git
```

Install dependencies
```bash
cd hyperdocs
npm install
```

Add to your `.hyper.js` file
```js
localPlugins: ['hyperdocs']
```

Every time you make a change, you have to
```bash
npm run build
```

and refresh your hyper terminal.

## Contributing

Pull request are welcome to add more docs =)
Just add the urls to [src/constants/urls.js](https://github.com/uesteibar/hyperdocs/blob/master/src/constants/urls.js).

The project uses [`standard-version`][standard-version] to update the [CHANGELOG][] with each commit message and upgrade the package version. For that reason every contribution should have a title and body that follows the [conventional-changelog-standard][] conventions.

So this is a step by step guide to contributing to the project (mostly extracted from the [`standard-version`][standard-version] docs):

1. when you land commits on your `master` branch, select the _Rebase and Merge_ option.
2. add a title and body that follows the [conventional-changelog-standard conventions][conventional-changelog-standard].
3. when you're ready to release a new version:
  1. `git checkout master; git pull origin master`
  2. run `npm run release`

## Helpers/Tools

- [Changelog](https://github.com/uesteibar/hyperdocs/blob/master/CHANGELOG.md)
- [Code of conduct](https://github.com/uesteibar/hyperdocs/blob/master/CHANGELOG.md)
- [commitizen](https://github.com/commitizen/cz-cli): A cli that will prompt the author to fill out any required commit fields at commit time. For this project we would use the [cz-conventional-changelog](https://github.com/conventional-changelog/conventional-changelog) adapter.
- [conventional-changelog-standard](https://github.com/bcoe/conventional-changelog-standard/blob/master/convention.md)
- [cz-conventional-changelog](https://github.com/commitizen/cz-conventional-changelog)
- [standard-version](https://github.com/conventional-changelog/standard-version)

## Maintainers

- [@uesteibar](https://github.com/uesteibar)
