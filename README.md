# Cookie Disclaimer

[![Build Status](https://travis-ci.org/jonnyhaynes/cookie-disclaimer.svg?branch=master)](https://travis-ci.org/jonnyhaynes/cookie-disclaimer) [![Code Climate](https://codeclimate.com/github/jonnyhaynes/cookie-disclaimer/badges/gpa.svg)](https://codeclimate.com/github/jonnyhaynes/cookie-disclaimer)

Dynamically add a cookie disclaimer to your website

## EU Requirements

The Cookie Law is a piece of privacy legislation that requires websites to get consent from visitors to store or retrieve any information on a computer, smartphone or tablet.

It was designed to protect online privacy, by making consumers aware of how information about them is collected and used online, and give them a choice to allow it or not.

It started as an EU Directive that was adopted by all EU countries in May 2011. Each country then updated its own laws to comply. In the UK this meant an update to the Privacy and Electronic Communications Regulations.

More info: http://ec.europa.eu/ipg/basics/legal/cookies/index_en.htm

## Solution

This code will dynamically add a disclaimer to the top of the body after checking to see if the _cookieDiscliamer cookie has been accepted or not.

If this is your first visit, you won;t have this cookie so it will display the disclaimer. If you visited previously and accepted the disclaimer, the disclaimer will no longer show for a period of 30 days or fi you clear your cookies.

## Bower

If you're using [Bower](bower.io) to manage your front-end dependencies you can include this plugin as a component. Include `"cookie-disclaimer": "1.0.1"` in your `bower.json` file and run `bower install`.

### ToDo

- Remove dependancy on jQuery

## Changelog

- **15/12/14:** 1.0.1 – README updates to explain Bower integration.
- **15/12/14:** 1.0.0 – First major release: registered as a Bower plugin.
