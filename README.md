# generator-typelibrary 

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]

A yeoman generator for Typescript module.

## Features

 * Use `tsc` as compiler without babel
 * Use [ava](https://github.com/avajs/ava) as test framework
 * Use `tslint` + [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) as code linter
 * Use [semantic-release](https://github.com/semantic-release/semantic-release) to release and publishing
 * License generation support

## Installation

First, install [Yeoman](http://yeoman.io) and generator-typelibrary using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-typelibrary
```

Then generate your new project:

```bash
yo typelibrary
```

## Project Directory Structure

```
projectRoot
├── LICENSE
├── README.md
├── codecov.yml
├── index.js
├── package.json
├── src
│   └── index.ts
├── test
│   └── index.ts
├── tsconfig.json
└── tslint.json
```

## License

MIT © [AlloVince]()


[npm-image]: https://badge.fury.io/js/generator-typelibrary.svg
[npm-url]: https://npmjs.org/package/generator-typelibrary
[travis-image]: https://travis-ci.org/AlloVince/generator-typelibrary.svg?branch=master
[travis-url]: https://travis-ci.org/AlloVince/generator-typelibrary
[daviddm-image]: https://david-dm.org/AlloVince/generator-typelibrary.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/AlloVince/generator-typelibrary
