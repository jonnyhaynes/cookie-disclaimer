(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.CookieDisclaimer = mod.exports;
  }
})(this, function (exports) {
  (function (global, factory) {
    if (typeof define === "function" && define.amd) {
      define(['exports'], factory);
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports);
      global.CookieDisclaimer = mod.exports;
    }
  })(this, function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.hasClass = hasClass;
    exports.init = init;
    /**
     * Setup some defaults that can be overwritten
     */
    var settings = {
      name: 'cookies_accepted',
      template: 'cookie-banner.html',
      message: 'Our website uses cookies to monitor traffic on our website and ensure that we can provide our customers with the best online experience possible. Please read our <a href="/cookies">cookie policy</a> to view more details on the cookies we use.'
    };

    var bodyClass = 'has-cookie-banner';

    /**
     * hasClass() checks whether an element has a specified class.
     *
     * @memberOf  CookieDisclaimer
     * @name      CookieDisclaimer.hasClass
     * @access    public
     * @param     {Element} [el] – the element being targetted
     * @param     {String} [className] – the class name being toggled
     * @returns   {boolean}
     *
     * ```js
     *   if(hasClass(document.querySelector('.this'), 'class-name')) {
     *     console.log('true');
     *   }
     * ```
     */
    function hasClass(el, className) {

      return el.classList ? el.classList.contains(className) : new RegExp('\\b' + className + '\\b').test(el.className);
    }

    /**
     * getFileContents() returns the content of a file
     *
     * @memberOf  PowerHouse
     * @name      Powerhouse.getFileContents
     * @access    public
     * @param     {Integer} [key] – the name of the item in the query string
     * @param     {Integer} [url] – the URL containing the query string
     * @returns   {Integer}
     *
     * ```js
     *   getFileContents('/file.html', function (response) {
     *     console.log(response);
     *   }, function (response)
     *     console.log('There was an error: ' + response);
     *   });
     * ```
     */
    function getFileContents(file, success, error) {

      // Detect whether XMLHttpRequest is supported
      if (!window.XMLHttpRequest) {
        return;
      }

      // Create a new request
      var request = new XMLHttpRequest();

      // Setup callbacks
      request.onreadystatechange = function () {

        // If the request is completed
        if (this.readyState === 4) {

          // If the request failed
          if (request.status !== 200) {
            if (error && typeof error === 'function') {
              error(request.responseText, request);
            }
            return;
          }

          // If the request was successful
          if (success && typeof success === 'function') {
            success(request.responseText, request);
          }
        }
      };

      // Send the HTML
      request.open('GET', file, true);
      request.send();
    }

    /**
     * createCookie() is used to set a cookie with the specified name, value and
     * expiration values
     *
     * @memberOf  CookieDisclaimer
     * @name      createCookie
     * @access    private
     * @param     {string} [name] – the name of the cookie
     * @param     {string} [string] – the value of the cookie
     * @param     {number} [duration] – the duration of the cookie
     *
     * ```js
     *   createCookie('cookies_accepted', 'true', 1800);
     * ```
     */
    function createCookie(name, value, duration) {

      var expires = void 0,
          date = void 0;

      // 1. If a duration is set
      if (duration) {

        // 1. Create a new date instance
        date = new Date();
        date.setTime(date.getTime() + duration * 24 * 60 * 60 * 1000);

        // 2. Update the expires value
        expires = '; expires=' + date.toGMTString();
      } else {

        expires = '';
      }

      // 2. Create the cookie
      document.cookie = name + '=' + value + expires + '; path=/';
    }

    /**
     * readCookie() is used to read a cookie
     *
     * @memberOf  CookieDisclaimer
     * @name      readCookie
     * @access    private
     * @param     {string} [name] – the name of the cookie to be read
     *
     * ```js
     *   readCookie('cookies_accepted');
     * ```
     */
    function readCookie(name) {

      var cookieName = name + '=',
          ca = document.cookie.split(';');

      for (var i = 0; i < ca.length; i++) {
        var cookie = ca[i];

        while (cookie.charAt(0) == ' ') {
          cookie = cookie.substring(1, cookie.length);
        }

        if (cookie.indexOf(cookieName) === 0) {
          return cookie.substring(cookieName.length, cookie.length);
        }
      }

      return null;
    }

    /**
     * init() is used to setup the cookie disclaimer
     *
     * @memberOf  CookieDisclaimer
     * @name      init
     * @access    private
     * @param     {string} [name] – the name of the cookie to be read
     *
     * ```js
     *   CookreadCookie('cookies_accepted');
     * ```
     */
    function init(options) {

      // 1. Override any default settings with user specified ones
      for (var prop in options) {
        if (options.hasOwnProperty(prop)) {
          settings[prop] = options[prop];
        }
      }

      // 2. If the cookie hasn't already been setup
      if (!readCookie(settings.name)) {

        // 1. Grab the contents of the HTML template
        getFileContents(settings.template, function (response) {

          // 1. Create the banner
          var el = document.createElement('div');
          el.setAttribute('class', 'cookie-banner');
          el.setAttribute('id', 'cookie-banner');
          el.setAttribute('aria-role', 'alert');
          el.setAttribute('aria-live', 'assertive');
          el.innerHTML += response;

          // 2. Prepend to the body
          document.body.insertBefore(el, document.body.firstChild);

          // 3. Add message
          document.getElementById('message').innerHTML = settings.message;

          // 4. Add class to body
          if (document.body.classList) document.body.classList.add(bodyClass);else if (!hasClass(document.body, bodyClass)) document.body.className += ' ' + bodyClass;

          // 5. Add an event listener to the close button
          document.getElementById('close').onclick = function () {

            // 1. On click create the cookie
            createCookie(settings.name, true, 1800);

            // 2. Remove the banner
            var banner = document.getElementById('cookie-banner');
            banner.parentNode.removeChild(el);

            // 3. Remove the class from the body
            if (document.body.classList) document.body.classList.remove(bodyClass);else document.body.className = document.body.className.replace(new RegExp('\\b' + bodyClass + '\\b', 'g'), '');

            // 4. Prevent the default link action
            return false;
          };
        });
      }
    }
  });
});
