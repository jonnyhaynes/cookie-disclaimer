# checkMQ

[![Build Status](https://travis-ci.org/powerhouse-industries/checkmq.svg?branch=master)](https://travis-ci.org/powerhouse-industries/checkmq) [![Code Climate](https://codeclimate.com/github/powerhouse-industries/checkmq/badges/gpa.svg)](https://codeclimate.com/github/powerhouse-industries/checkmq) [![npm](https://img.shields.io/npm/v/checkmq.svg)](https://www.npmjs.com/package/checkmq) [![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/powerhouse-industries/checkmq?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

`checkMQ` utilises [matchMedia](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia) event listeners to provide you with access to media queries in JavaScript as you would in CSS.

## Usage

Include checkMQ in your project. You can either use the script in the traditional method like so:

```
<script src="checkMQ.min.js"></script>
```

or use requireJS, webpack etc like so:

```
var checkMQ = require('checkmq.min.js');
```

If using NPM to manage dependencies you can do the following:

```
npm install checkmq
```

Each function that needs access the defined media queries should have `theMQ` passed through as a parameter. The value of `theMQ` will change when it matches one of the predefined media queries.

```javascript
var testFunction = function (theMQ) {

  if (theMQ === 'mqCore') {
    console.log('mqCore');
  } else if (theMQ === 'mq600') {
    console.log('mq600');
  } else if (theMQ === 'mq768') {
    console.log('mq768');
  } else if (theMQ === 'mq960') {
    console.log('mq960');
  } else if(theMQ === 'mq1200') {
    console.log('mq1200');
  }

};

var anotherTestFunction = function (theMQ) {

  if (theMQ === 'mqCore') {
    alert('this is a small screen device');
  }

};
```

Each function that requires access to `theMQ` must be passed the `addFunctions` method which adds the appropraite matchMedia listeners. It's important that this is the last method called.

```javascript
checkMQ.addFunctions([
  testFunction,
  anotherTestFunction
]);
```

## Browser support

* Internet Explorer 10+
* Firefox 10+
* Chrome 9+
* Safari 5.1+
* Opera 12.1+

For IE 9 support you can use [Weblinc's Media.match Polyfill](https://github.com/weblinc/media-match).

## TODO
- Improve the method of definining media queries so they can become dynamic

## Changelog

* 21/12/15: 2.0.0 - Major rewrite using ES6.
* 01/07/15: 1.3.1 - Tidied up the code and fixed the timing issue in <= IE10
* 18/06/15: 1.2.0 - Converting to an Node.js module and updating README to include instructions for this
* 26/03/15: 1.1.1 - Updated README to be more clear on how it works
* 18/03/15: 1.1.0 - Fixing missing bracket on doc ready function and bumping version number to account for rewritten code
* 18/03/15: 1.0.6 – Removing forEach method and using a 'for' loop as it's replacement for wider browser support
* 16/03/15: 1.0.5 – Updating README
* 13/03/15: 1.0.4 – Fixing broken module code
* 13/03/15: 1.0.3 – Fixing package.json
* 13/03/15: 1.0.2 – Code tidy up to fix Travis issues
* 13/03/15: 1.0.0 – First major release: registered as a Bower plugin.
