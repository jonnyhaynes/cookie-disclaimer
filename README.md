# Cookie Disclaimer

[![Build Status](https://travis-ci.org/jonnyhaynes/cookie-disclaimer.svg?branch=master)](https://travis-ci.org/jonnyhaynes/cookie-disclaimer) [![Code Climate](https://codeclimate.com/github/jonnyhaynes/cookie-disclaimer/badges/gpa.svg)](https://codeclimate.com/github/jonnyhaynes/cookie-disclaimer) [![npm](https://img.shields.io/npm/v/cookie-disclaimer.svg)](https://www.npmjs.com/package/cookie-disclaimer) [![Dependency Status](https://david-dm.org/jonnyhaynes/cookie-disclaimer.svg)](https://david-dm.org/jonnyhaynes/cookie-disclaimer)

Dynamically add a cookie disclaimer to your website

## EU Requirements

The Cookie Law is a piece of privacy legislation that requires websites to get consent from visitors to store or retrieve any information on a computer, smartphone or tablet.

It was designed to protect online privacy, by making consumers aware of how information about them is collected and used online, and give them a choice to allow it or not.

It started as an EU Directive that was adopted by all EU countries in May 2011. Each country then updated its own laws to comply. In the UK this meant an update to the Privacy and Electronic Communications Regulations.

More info: http://ec.europa.eu/ipg/basics/legal/cookies/index_en.htm

## Solution
This plugin will dynamically append a disclaimer to the `<body>` after checking to see if a cookie exists on the users machine. If a user visits for the first time they will see the disclaimer. If they've visited previously and accepted the disclaimer, the disclaimer will no longer show for a period of 30 days assuming the user doesn't clear their cookies.

## Usage

Once you've included the plugin on your site you can initiate the script using the following code.

```
CookieDisclaimer.init({
  name: 'CookieName',
  message: 'This is a disclaimer about cookies.',
  template: 'cookie-banner.html',
  duration: 30
})
```

You can define the name of the cookie, the message that is displayed and the template file that should be used. See `tests/cookie.html` for an example template file. You should leave `id="message"`  and `id="close"` in tact.


## NPM
If you're using NPM to manage your dependencies you can include this plugin as a module. Just run `npm install cookie-disclaimer`.

## Changelog

- **23/09/16:** 2.0.2 - Added in a setting for cookie duration
- **31/03/16:** 2.0.1 - Major update for commonJS/Browserify/Webpack implementation
- **18/06/15:** 1.2.0 - Converted to a Node.js module
- **14/04/15:** 1.0.4 – Updated the default cookie banner template to use a `<button>` instead of an empty `<a href="">Close</a>`.
- **16/03/15:** 1.0.3 – Swapped 'append' for 'prepend' and added class to `<body>`.
- **13/03/15:** 1.0.2 – Removed reliance on jQuery and modified the way the plugin works to allow templates and parameters.
- **15/12/14:** 1.0.1 – README updates to explain Bower integration.
- **15/12/14:** 1.0.0 – First major release: registered as a Bower plugin.
