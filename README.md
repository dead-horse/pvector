pvector
---------------

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Gittip][gittip-image]][gittip-url]

[npm-image]: https://img.shields.io/npm/v/pvector.svg?style=flat-square
[npm-url]: https://npmjs.org/package/pvector
[travis-image]: https://img.shields.io/travis/dead-horse/pvector.svg?style=flat-square
[travis-url]: https://travis-ci.org/dead-horse/pvector
[coveralls-image]: https://img.shields.io/coveralls/dead-horse/pvector.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/dead-horse/pvector?branch=master
[gittip-image]: https://img.shields.io/gittip/dead-horse.svg?style=flat-square
[gittip-url]: https://www.gittip.com/dead-horse/

[![browser support](https://ci.testling.com/dead-horse/pvector.png)](https://ci.testling.com/dead-horse/pvector)

vector for physics

## Installation

```bash
$ npm install pvector
```

## Examples

```js
var PVector = require('PVector');

var v1 = PVector(1, 1);
var v2 = PVector(2 ,2);

v1.setMag(10).sub(v2).heading();
```

## Usage

see: [PVector/test](https://github.com/dead-horse/pvector/blob/master/test/index.test.js)

### License

MIT
