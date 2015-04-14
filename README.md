# Cookie Disclaimer

[![Build Status](https://travis-ci.org/jonnyhaynes/cookie-disclaimer.svg?branch=master)](https://travis-ci.org/jonnyhaynes/cookie-disclaimer) [![Code Climate](https://codeclimate.com/github/jonnyhaynes/cookie-disclaimer/badges/gpa.svg)](https://codeclimate.com/github/jonnyhaynes/cookie-disclaimer) [![Bower](https://img.shields.io/bower/v/cookie-disclaimer.svg)](https://github.com/jonnyhaynes/cookie-disclaimer) 
[![Dependency Status](https://david-dm.org/jonnyhaynes/cookie-disclaimer.svg)](https://david-dm.org/jonnyhaynes/cookie-disclaimer)

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
  message: 'This is a disclaimer about cookies.'
  template: 'cookie-banner.html'
})
```

You can define the name of the cookie, the message that is displayed and the template file that should be used. See `tests/cookie.html` for an example template file. You should leave `id="message"`  and `id="close" in tact.

## Bower

If you're using [Bower](bower.io) to manage your front-end dependencies you can include this plugin as a component. Include `"cookie-disclaimer": "1.0.2"` in your `bower.json` file and run `bower install`.

## Changelog

- **14/04/15:** 1.0.4 – Updated the default cookie banner template to use a `<button>` instead of an empty `<a href="">Close</a>`.
- **16/03/15:** 1.0.3 – Swapped 'append' for 'prepend' and added class to `<body>`.
- **13/03/15:** 1.0.2 – Removed reliance on jQuery and modified the way the plugin works to allow templates and parameters.
- **15/12/14:** 1.0.1 – README updates to explain Bower integration.
- **15/12/14:** 1.0.0 – First major release: registered as a Bower plugin.
